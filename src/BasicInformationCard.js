import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import basicData from './basicData';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridListTile from '@material-ui/core/GridListTile';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import status from './autocompleteData';
import Button from '@material-ui/core/Button';



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
    height: 655, 
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
  },
  description:{
    marginLeft: 310,
    
  },
  buttonUpdate:{
    backgroundColor:'#348e34',
    marginLeft:'695px',
    marginTop:40,
  },
  buttonCancel:{
    backgroundColor:'grey',
    marginLeft:'10px',
    marginTop:40,
  },

  
  
})); 
const InputStyle = {
  width: 500,
  
};
const buttonStyle = {
  textTransform: 'none',
  
};



 
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
                <TextField style={InputStyle} className={classes.textField} id="outlined-basic"  variant="outlined" />
            </div>

            <div className={classes.labela}>
                <p className={classes.tekst}>Status</p>
            <Autocomplete 
              className={classes.textField}
              id="combo-box-demo"
              options={status}
              getOptionLabel={option => option.title}
              style={{ width: 300 }}
              renderInput={params => <TextField style={InputStyle} {...params} variant="outlined" />}
            />
            </div>

            <div className={classes.labela}>
                <p className={classes.description}>Description</p>

                
                <TextField style={InputStyle}
                className={classes.textField}
                id="outlined-multiline-static"
                multiline
                rows="4"
                variant="outlined"
                />
            </div>
            <div className={classes.labela}>
            <Button style={buttonStyle} className={classes.buttonUpdate} color="inherit">Update basic info</Button>
            <Button style={buttonStyle} className={classes.buttonCancel} color="inherit">Cancel</Button>
            </div>
      </form>
      
    </div>
  </div>
  ))}
</div>

  );
}