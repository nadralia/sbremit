import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: 'transparent',
      borderLeft: 'solid 2px greenyellow',
      marginTop: '250px',
      marginLeft: '300px',
  
    },
    bullet: {
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 24,
      color: 'black',
    },
    subtitle: {
      color: 'black',
    },
    button: {
      backgroundColor: '#38ACEC',
    },
  });
  

const LeftSideSection = () => {
    const classes = useStyles();
    return(
        <div>

        <Typography className={classes.title} gutterBottom>
          The Fastest Growing Money Transfer Company
        </Typography>
        <Typography variant="body2" className={classes.subtitle} component="p">
         Our quest to transfer money better starts here, the future chooses sukate & Bezeboh
        </Typography>
        </div>
    );

};

export default LeftSideSection;
