// @flow
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import AddIcon from '@material-ui/icons/Add';
import AddEntry from './AddEntry';

const useStyles = makeStyles(theme => ({
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    right: theme.spacing(2),
    margin: 0
  }
}));

const BottomNav = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={0} direction="column">
      <Grid item>
        <BottomNavigation
        // value={value}
        // onChange={handleChange}
        // className={classes.root}
        >
          <Fab
            color="secondary"
            aria-label="add"
            className={classes.fabButton}
            onClick={handleClickOpen}
          >
            <AddIcon />
          </Fab>
          {/* <BottomNavigationAction
            label="AddEntry"
            value="add"
            icon={<AddIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          /> */}
        </BottomNavigation>
        <AddEntry open={open} handleClose={handleClose} />
      </Grid>
    </Grid>
  );
};

export default BottomNav;
