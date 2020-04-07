import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { TabValueContext } from '../Helpers/tabContext';
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

const BarStyle = {
 minHeight:55,
 paddingLeft:10,
};
export default function SearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
 
  const {tabValue} = React.useContext(TabValueContext);
  

  return (
    <div className={classes.root} >
      <AppBar position="static" >
        <Toolbar className={classes.bar} style={BarStyle}>
          <div className={classes.search} >
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
          {/* {appbarData.map(bar => (
          <Button aria-describedby={id} onClick={handleClick} className={classes.menuButton}>{bar.titleButton}</Button>
        
          ))} */}
          <Button aria-describedby={id} onClick={handleClick} className={classes.menuButton}>
            Options
          </Button>
        <Popover id={id} open={open} anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
      
        {tabValue}

        </Popover>
        </Toolbar>
      </AppBar>
    </div>
  );
}