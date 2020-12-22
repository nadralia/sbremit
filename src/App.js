import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HeaderSection from './components/Header';
import RightSideSection from './components/RightSide';
import LeftSideSection from './components/LeftSide';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderSection />
      <Grid container style={{marginTop: '10px'}}>
        <Grid item xs={5} style={{marginLeft: '20px'}}>
        <LeftSideSection />
        </Grid>
        <Grid item xs={6} style={{marginLeft: '80px'}}>
        <RightSideSection />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
