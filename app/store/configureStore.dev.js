import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { routerMiddleware, routerActions } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import {
  forwardToMain,
  forwardToRenderer,
  triggerAlias,
  replayActionMain,
  replayActionRenderer
} from 'electron-redux';
import createRootReducer from '../reducers';
import * as timerActions from '../actions/timer';
import type { GetState } from '../reducers/types';

const history = createMemoryHistory();

const configureStore = (initialState?: GetState, scope: string = 'main') => {
  // Redux Configuration
  let middleware = [];
  const enhancers = [];

  // const history = scope === 'main' ? historyMain : historyRenderer;
  const rootReducer = createRootReducer(scope, history);

  // Thunk Middleware
  middleware.push(thunk);

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  // Skip redux logs in console during the tests
  if (process.env.NODE_ENV !== 'test') {
    middleware.push(logger);
  }

  // Router Middleware
  if (scope === 'renderer') {
    // Router Middleware
    const router = routerMiddleware();
    middleware = [forwardToMain, router, ...middleware];
  }
  if (scope === 'main') {
    middleware = [triggerAlias, ...middleware, forwardToRenderer];
  }

  // Redux DevTools Configuration
  const actionCreators = {
    ...timerActions,
    ...routerActions
  };
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? scope === 'renderer' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Options: http://extension.remotedev.io/docs/API/Arguments.html
          actionCreators
        })
      : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(
      '../reducers',
      // eslint-disable-next-line global-require
      () => store.replaceReducer(require('../reducers').default)
    );
  }

  if (scope === 'main') {
    console.log(store);
    replayActionMain(store);
  } else {
    replayActionRenderer(store);
  }

  return store;
};

export default { configureStore, history };
