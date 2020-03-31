import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import roleData from '../Data/roleData';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import RolesAppBar from '../Components/AppBar';
import PageShowing from '../Components/PageShowing';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex-inline',
    float: 'left',
    padding: 10,
    
  },
  superdiv: {
    display: 'flex',
    width: 'auto',
    height: 155,
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
  },
  controls: {

    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: theme.spacing(1),
    //paddingBottom: theme.spacing(1),
    height:'50px!important',
    marginTop: 'auto',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
})); 

 
export default function TitlebarGridList() {
  const classes = useStyles();
  const defaultList = roleData;

  const [list, updateList] = useState(defaultList);

  const handleRemoveItem = (e) => {
   const Name = e.target.parentNode.getAttribute("Name");
    updateList(list.filter(tile => tile.Name !== Name));
  };
  
  return (
   
<div>
<RolesAppBar/>
  {roleData.map(tile => (

    <div className={classes.root} >
      <div className={classes.superdiv} Name={tile.Name}> 
        <div className={classes.details} >

          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {tile.Name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              From: {tile.AvailabilityFrom} To: {tile.AvailabilityTo }
            </Typography>
            <Typography variant="subtitle1" >
              {tile.details}
            </Typography>
          </CardContent>
      </div>
      <div className={classes.controls}>
        <IconButton aria-label="previous" >
          <EditRoundedIcon className={classes.icon}/>
        </IconButton>
        <IconButton onClick={handleRemoveItem}>
          <DeleteRoundedIcon className={classes.icon}/>
        </IconButton>
      </div>
    </div>
  </div>
  ))}
  <PageShowing/>
  
</div>
  );
}