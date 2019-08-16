/* eslint global-require: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `yarn build` or `yarn build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 *
 * @flow
 */
import { app, BrowserWindow, Tray, nativeImage } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import momentDurationFormatSetup from 'moment-duration-format';
import MenuBuilder from './menu';
import { configureStore } from './store/configureStore';
import * as TimerActions from './actions/timer';
import * as EntryActions from './actions/entries';
import * as JobActions from './actions/jobs';
import * as ClientActions from './actions/clients';
import * as TasksActions from './actions/tasks';
import HarvestClientAPI from './api/harvest/clientAPI';
import WorkflowMaxClientAPI from './api/workflowmax/clientAPI';
// import type { APIIntegrateable } from './api/APIIntegrateable';

const store = configureStore(undefined, 'main');

let tray;

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (
  process.env.NODE_ENV === 'development' ||
  process.env.DEBUG_PROD === 'true'
) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', async () => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
  ) {
    await installExtensions();
  }

  // mainWindow = new BrowserWindow({
  //   // show: false,
  //   width: 370,
  //   height: 520
  // });

  mainWindow = new BrowserWindow({
    // show: false,
    width: 800,
    height: 520
  });

  mainWindow.loadURL(`file://${__dirname}/app.html`);

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  apiTests();
  fetchTimerEntries();
  // setTray();
  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
});

const trayImage = (timerState = null) => {
  const pauseIcon =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAFdJREFUSA1jdNhm+p+BhoCJhmaDjR61gGAIs+BSccDrNIoUMDGg8AnJwxSPxgEsJHDSo0GEM2hgEqNBBAsJnPRoEOEMGpgEzYOIcbTKhIU1LprmcUBzCwC/SwqFURfEbgAAAABJRU5ErkJggg==';
  const stopIcon =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAFxJREFUSA1jdNhm+p+BhoCJhmaDjR61gGAI0zyIWHA54YDXaVxSWMWBqRGrOM19MGoB1nBHFhwNIuTQwMoeDSKswYIsSPMgwlkW4SpbkF1HDJvmPhi1gGA00DyIABkVBon8De0nAAAAAElFTkSuQmCC';
  const playIcon =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAS1JREFUSA1jdNhm+p+BhoCJhmaDjR61gGAIEwyiK823GX6+/UXQIFwKCFrw5vgHhlNplxmebn3F8P8/6QmOoAUgl/39/o/h9tSHDOdLbzB8ffQdl2OxihNlAUznp2tfGM7kXGV4sPQpw7/f/2DCeGmSLACZ9P/Pf6AFz8AWfbz6Ga/hIEmSLYCZ+O3xD3CQ3ZrygOHPt78wYQyabAtgJj3b9hqcCF4few8TQqEptgDFNCwcFixiJAlJeYkyKCXJMrBwMWPVR7YFXLIcDOp5Cgz82rxYDYYJkmwBIwsjg1yYJIN8uCQDEyvhECbJAj4tHrCrueU4YQ4kSBNlATMnEzicQeHNyMhI0FBkBQQtELEUYFDNkmdgF2ZD1kc0m3G0yiQUVoTTGSETCMjT3AIAB4hKoDa5DpUAAAAASUVORK5CYII=';

  let icon = playIcon;

  if (timerState === 'started') {
    icon = stopIcon;
  }

  if (timerState === 'stopped') {
    icon = playIcon;
  }

  return nativeImage.createFromDataURL(icon);
};

const apiTests = () => {
  const WFMClientAPI = new WorkflowMaxClientAPI();
  // WFMClientAPI.getUser();
  // WFMClientAPI.sendUser();

  const clientAPI = new HarvestClientAPI();
  // clientAPI.createEntry();
  // clientAPI.getTaskAssignments();
  // console.log(EntryActions);
};

const setTray = () => {
  tray = new Tray(trayImage());
  const state = store.getState();
  // tray.setTitle('-:--');
  tray.setTitle(formattedDuration(state.timer.duration));
  store.subscribe(() => {
    const latestState = store.getState();
    tray.setTitle(formattedDuration(latestState.timer.duration));
    tray.setImage(trayImage(latestState.timer.currentState));
  });
  tray.on('click', () => {
    store.dispatch(TimerActions.toggle());
  });
};

const fetchTimerEntries = () => {
  store.dispatch(EntryActions.fetchEntries());
  store.dispatch(JobActions.fetchJobs());
  store.dispatch(ClientActions.fetchClients());
  store.dispatch(TasksActions.fetchTasks());
};

const formattedDuration = seconds => {
  const duration = moment.duration(seconds, 'seconds');
  return duration.format('hh:mm:ss', {
    trim: false
  });
};
