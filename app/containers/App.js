// @flow
import * as React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Icon from '@material-ui/core/Icon';
import theme from '../themes/default';

type Props = {
  children: React.Node
};

export default function App(props: Props) {
  const { children } = props;
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper>
          <Grid container spacing={0} direction="column">
            <Grid item>{children}</Grid>
            <Grid item>
              <BottomNavigation
              // value={value}
              // onChange={handleChange}
              // className={classes.root}
              >
                <BottomNavigationAction
                  label="Recents"
                  value="recents"
                  icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                  label="Favorites"
                  value="favorites"
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  label="Nearby"
                  value="nearby"
                  icon={<LocationOnIcon />}
                />
                <BottomNavigationAction
                  label="Folder"
                  value="folder"
                  icon={<Icon>folder</Icon>}
                />
              </BottomNavigation>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </React.Fragment>
  );
}
