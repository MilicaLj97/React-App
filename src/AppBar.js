import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import appbarData from './appbarData';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import SubmitPage from './SubmitPage';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 'auto',
    display: 'flex!important',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      
    },
  },
  search: {
    //visibility: 'hidden',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  bar:{

    backgroundColor:'darkred!important',
  }, 
}));

export default function SearchAppBar() {
  const classes = useStyles();
  

  
  const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
  };

const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className={classes.bar}>
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase onKeyDown={ (e) =>{if(e.key === 'Enter')
                {
                  alert("Enter search");
                }
              }
           }
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          {appbarData.map(bar => (
          <Button onClick={handleClickOpen} className={classes.menuButton}>{bar.titleButton}</Button>
        
          ))}
        
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create new project</DialogTitle>
            <SubmitPage/>
        </Dialog>
        </Toolbar>
      </AppBar>
    </div>
  );
}