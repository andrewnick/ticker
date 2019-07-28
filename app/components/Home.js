// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Grid from '@material-ui/core/Grid';

import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default function Home(props: Props) {
  return (
    // <Paper>
    //   <Grid container direction="column">
    //     <Grid item spacing={2}>
    <Container component="main" maxWidth="xs">
      {/* <div className={styles.container} data-tid="container"> */}
      {/* <Typography component="h2" variant="h2">
              Home
            </Typography> */}
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Card>
            <CardContent>
              <Typography component="h3" variant="h5">
                Title
              </Typography>
              <Typography component="p">Orgainisation Title</Typography>
              <Typography component="p">Job Title</Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="Play/pause">
                <PlayArrowIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>Title</CardContent>
            <CardActions>
              <IconButton aria-label="Play/pause">
                <PlayArrowIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Link to={routes.COUNTER}>to Counter</Link>
      {/* </div> */}
    </Container>
    //     </Grid>
    //     <Grid item>
    //       <BottomNavigation
    //       // value={value}
    //       // onChange={handleChange}
    //       // className={classes.root}
    //       >
    //         <BottomNavigationAction
    //           label="Recents"
    //           value="recents"
    //           icon={<RestoreIcon />}
    //         />
    //         <BottomNavigationAction
    //           label="Favorites"
    //           value="favorites"
    //           icon={<FavoriteIcon />}
    //         />
    //         <BottomNavigationAction
    //           label="Nearby"
    //           value="nearby"
    //           icon={<LocationOnIcon />}
    //         />
    //         <BottomNavigationAction
    //           label="Folder"
    //           value="folder"
    //           icon={<Icon>folder</Icon>}
    //         />
    //       </BottomNavigation>
    //     </Grid>
    //   </Grid>
    // </Paper>
  );
}
