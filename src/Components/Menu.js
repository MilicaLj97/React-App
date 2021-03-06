import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MemoryIcon from '@material-ui/icons/Memory';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import tileData from '../Data/tileData';

import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Card from '../Components/Card';
import avatarData from '../Data/avatarData';
import Footer from '../Components/Footer';
import MenuAppBar from '../Components/MenuAppBar';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'black!important',

  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen, 
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    float: 'right',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  gameplan: {
    float: 'left',
    display: 'flex',
    alignItems: 'center',
    
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    float:'left',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
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
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  inputFiled: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
      color: 'aliceblue',
    },
    marginLeft: 'auto',
    marginBottom: '10px!important',
    
  },
  buttonUser: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  login:{
    marginLeft: 'auto',
    marginRight:'10px!important',
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  
  const [open, setOpen] = React.useState(sessionStorage.getItem('myDrawer'));
  const [title, setTitle] = React.useState(sessionStorage.getItem('myValueInLocalStorage') || 'Home');
  const [user, setUser] = React.useState('Strance');

  const [poruka, setPoruka] = React.useState(sessionStorage.getItem('myPoruka') || 'Zdravo');

  const vreme = new Date();

  useEffect(() => {
    if(vreme.getHours() < 12)
    {
      setPoruka("Dobro jutro");
    }
    else if(vreme.getHours() < 18)
    {
      setPoruka("Dobar dan");
    }
    else { setPoruka("Dobro vece"); }
      
  }, [vreme]);
  
  useEffect(() => {
    if(sessionStorage.getItem('myDrawer')==="open")
    {
      setOpen(true);
    }
    else
    {
      setOpen(false);
    }}, []);
  
  const handleDrawerOpen = () => {
    setOpen(true);
    sessionStorage.setItem('myDrawer', "open");
  };

  const handleDrawerClose = () => {
    setOpen(false);
    sessionStorage.setItem('myDrawer', "closed");    
  };
  
 
  function handleMenuClick(title, url){
 
    window.location.href='/'+ url;
    setTitle(title);
    sessionStorage.setItem('myValueInLocalStorage', title);
  }
  
  
  return (
 
    <div className={classes.root}>
      
      <CssBaseline/>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <FormatListBulletedIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap>
           {title}
           </Typography>
           
           <TextField onKeyDown={ (e) =>{if(e.key === 'Enter')
                             {
                             setUser(e.target.value);
                              }
                            }
           }
           type="text" className={classes.inputFiled} id="standard-basic" label="User"/>
           <Button 
           onClick={() => {setUser(document.getElementById("standard-basic").value); }}
           color="primary">
              <p position="absolute" bottom="0">Login </p>
           </Button>  
              <div className={classes.login}> {poruka}, {user}</div>
              <div margin="50">{avatarData.map(avatar => (<Avatar alt={avatar.name} src={avatar.img} /> ))}</div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      > 
        <div className={classes.toolbar} >
            <IconButton 
            onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <FormatListBulletedIcon /> : <MoreVertIcon />}            
          </IconButton>
          <Typography variant="h6" noWrap>
          
            Gameplan
           </Typography>
        </div>
         
        <List>
        
        {tileData.map(tile => (<ListItem onClick={(e)=>  {handleMenuClick(tile.title, tile.url)}} button key={tile.title} >
 
          <ListItemIcon>{tile.icon}</ListItemIcon>
          <ListItemText primary={tile.title} />
          </ListItem>
          ))}
          
        </List>
        
      </Drawer>
     
      <main className={classes.content} >
        <MenuAppBar/>
        <Footer/>
      </main>
     
    </div>
  );
}
