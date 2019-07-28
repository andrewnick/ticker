import { createMuiTheme } from '@material-ui/core/styles';
import { BottomNavigation } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        height: '100%'
      }
    },
    MuiBottomNavigation: {
      root: {
        position: 'fixed',
        bottom: 0,
        width: '100%'
      }
    }
  }
});

export default theme;
