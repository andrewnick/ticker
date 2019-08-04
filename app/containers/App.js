// @flow
import React, { Node } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../themes/default';

type Props = {
  children: Node
};

export default function App(props: Props) {
  const { children } = props;

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper>{children}</Paper>
      </ThemeProvider>
    </React.Fragment>
  );
}
