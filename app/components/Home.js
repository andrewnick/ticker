// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EntriesList from './EntriesList';
import TopNav from './TopNav';
import BottomNav from './BottomNav';

type Props = {};

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export default function Home(props: Props) {
  return (
    <div>
      <TopNav />
      <TabPanel value={0} index={0}>
        <EntriesList />
      </TabPanel>
      <BottomNav />
    </div>
  );
}
