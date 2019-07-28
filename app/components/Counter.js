// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import styles from './Counter.css';
import routes from '../constants/routes';

type Props = {
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
  counter: number
};

export default class Counter extends Component<Props> {
  props: Props;

  render() {
    const {
      increment,
      incrementIfOdd,
      incrementAsync,
      decrement,
      counter
    } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <IconButton
            variant="contained"
            color="primary"
            onClick={increment}
            data-tclass="btn"
            type="button"
          >
            <AddIcon fontSize="inherit" />
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            className={styles.btn}
            onClick={decrement}
            data-tclass="btn"
            type="button"
          >
            <RemoveIcon fontSize="inherit" />
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={styles.btn}
            onClick={incrementIfOdd}
            data-tclass="btn"
            type="button"
          >
            odd
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={styles.btn}
            onClick={() => incrementAsync()}
            data-tclass="btn"
            type="button"
          >
            async
          </Button>
        </div>
      </div>
    );
  }
}
