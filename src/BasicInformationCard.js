import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import basicData from './basicData';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridListTile from '@material-ui/core/GridListTile';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex-inline',
    float: 'left',
    padding: 10,
    overflow: 'hidden',
  },
  superdiv: {
    display: 'flex',
    width: '100%',
    height: 455,
    boxShadow:'8px 8px 5px lightgrey', 
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    width: 500,
  },
  cover: {
    width: 151,
    height:151,
    marginLeft:10,
    marginRight:536,
    borderRadius:'5px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 8px 0 rgba(0, 0, 0, 0.2)'
  },
  controls: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: theme.spacing(1),
    height:'50px!important',
    marginTop: 'auto',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  labela:{
    display:'flex',
  },
  tekst:{
      marginLeft:350,
  },
  bar:{
    width:'inherit',
    marginLeft:'10px',
    height:'35px',
    borderRadius:'5px',
  },
  grid:{
      display:'block',

  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
    marginRight:50,
  },
  textField:{
      padding:10,
  }
})); 

 
export default function TitlebarGridList() {
  const classes = useStyles();
function handelClick()
{
    alert("slika");
}
  return (
   
<div>

{basicData.map(tile => (

    <div className={classes.root}>
      <div className={classes.superdiv}>
        <form>
            <div className={classes.labela}>
            <p className={classes.tekst}>Image</p>
            <GridListTile key={tile.img} className={classes.grid}> 
            <CardMedia 
            className={classes.cover}
            onClick={handelClick}
            image={tile.img}
            title="image">
                <GridListTileBar
                className={classes.bar}
                actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <AddAPhotoIcon/>
                </IconButton>
              }
            />
            </CardMedia>
            </GridListTile>
            </div>
            <div className={classes.labela}>
                <p className={classes.tekst}>Name</p>
                <TextField className={classes.textField} id="outlined-basic"  variant="outlined" />
            </div>



            <div className={classes.controls}>
                <IconButton aria-label="previous" >
                    <EditRoundedIcon className={classes.icon}/>
                </IconButton>
                <IconButton aria-label="play/pause">
                    <DeleteRoundedIcon className={classes.icon}/>
                </IconButton>
      </div>
      </form>
    </div>
  </div>
  ))}
</div>
  );
}