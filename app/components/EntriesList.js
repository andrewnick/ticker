import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { useSelector } from 'react-redux';
import routes from '../constants/routes';

const EntriesList = () => {
  const entries = useSelector(state => state.entries);
  return (
    <Container component="main" maxWidth="xs">
      <Grid container spacing={2} direction="column">
        <Grid item>
          <List dense>
            {Object.keys(entries).map(key => {
              const entry = entries[key];
              return (
                <ListItem divider key={entry.id}>
                  <ListItemText
                    primary={entry.startTime}
                    secondary={entry.currentState}
                  />
                  <Typography component="p">{entry.duration}</Typography>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Play/pause">
                      <PlayArrowIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EntriesList;
