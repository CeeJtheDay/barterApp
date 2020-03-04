import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import ReactStars from '../Modal/index'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


  
export default function SimpleCard({currUser}) {
  const classes = useStyles();
console.log(currUser);
  return (
    <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
   {currUser.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
  {currUser.city}
  
        </Typography>
        <Typography variant="body2" component="p">
         {currUser.rate}
        {/* <ReactStars
                            value={3}
                            size={50}
                            half={true}
                            // onChange={newRating => {
                            //     setReview({...review, rate:newRating});
                            // }}
                        /> */}
       
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
