import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
      },
      appbarWrapper: {
        width: '70%',
        margin: '0 auto',
      },
      appbarTitle: {
        flexGrow: '1',
        marginTop: '20px',
      },
      title: {
          color: 'black'
      }
  
  }));

const HeaderSection = () => {
    const classes = useStyles();
    return(
        <div className={classes.root} id="header">
            <div style={{width: '80%'}}>
            <Typography variant="h6"  className={classes.title}>
                  SB REMIT
                </Typography>
            </div>
            <div>
                <Button color="black" >Sign in</Button>
                <Button color="black" >Sign up</Button>
            </div>
        </div>
    );

};

export default HeaderSection;
