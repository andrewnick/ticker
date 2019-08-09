import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Formik } from 'formik';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    height: 'auto'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 'auto'
  },
  form: {
    padding: theme.spacing(2)
  },
  formControl: {
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Settings = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Settings
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        {/* <Grid>
          <Grid item> */}
        <Formik
          initialValues={{ email: '', name: '' }}
          onSubmit={(values, { setSubmitting }) => {}}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <form className={classes.form} onSubmit={handleSubmit}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Client</InputLabel>
                <Select
                  value={values.age}
                  onChange={handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple'
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </form>
          )}
        </Formik>
        {/* </Grid> */}
      </Dialog>
    </div>
  );
};

export default Settings;
