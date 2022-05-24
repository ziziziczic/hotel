import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button,MenuIcon} from '@material-ui/core';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing,
    [theme.breakpoints.down('sm')]:{
        background:'#f00',
    },
    [theme.breakpoints.up('sm')]:{
        background:'#0f0',
    },
  },
  title: {
    flexGrow: 1,
  },
  menu:{
    flexGrow: 1,
    '& a':{
      textDecoration : 'none',
      color:'#fff',
      '&:hover' :{
        color : 'yellow',
        fontWeight : 700,
        borderBottom : '2px solid #fff',
        paddingBottom : '5px',
      }
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
  
          <Typography variant="h3" className={classes.title}>
            Tourvis
          </Typography>
          <Typography variant="body1" className={classes.menu}>
            <Link to="/air">
              항공
            </Link>
          </Typography>
          <Typography variant="body1" className={classes.menu}>
            <Link to="/">
              호텔
            </Link>
          </Typography>
          <Typography variant="body1" className={classes.menu}>
            투어&액티비티
          </Typography>
          <Typography variant="body1" className={classes.menu}>
            여행준비
          </Typography>
          <Button color="secondary">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}