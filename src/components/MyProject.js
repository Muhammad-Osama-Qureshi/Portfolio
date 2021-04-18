import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Visibility } from '@material-ui/icons';
import { Link } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  

function MyProject() {
    const classes = useStyles();

    return (
        <div className="container pb-4">
            <h1>My Projects </h1>
            <div className="row space pb-4 pt-3">
        <Link  href="https://muhammad-osama-qureshi.github.io/memegenerator-recreate/">     
        <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="assets/images/meme.JPG"
            title="Meme Generator"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Meme Generator
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             This is a meme Generator Application where you just Type top and bottom text and its will place it on Random Image from An Api 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href="https://muhammad-osama-qureshi.github.io/memegenerator-recreate/">Click to View</a>
          <Visibility/>   </Button>
         
        </CardActions>
      </Card>
      </Link>
      <Link href="https://muhammad-osama-qureshi.github.io/BMRCALCHooks/">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="assets/images/BMR IMG.jpg"
            title="BMI Calculator"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              BMR Calculator 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            It Takes your weight in Kg and Height in Feet as Input and calculate your BMI and also give feedback on your BMI .
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href="https://muhammad-osama-qureshi.github.io/BMRCALCHooks/">Click to View</a>
            <Visibility/></Button>
        
        </CardActions>
      </Card>
      </Link>
      </div>
      <div className="row space pb-4 pt-3">
              <Link href="https://muhammad-osama-qureshi.github.io/calculator-recreate/">
               <Card className={classes.root} >
               <CardActionArea>
                 <CardMedia
                   className={classes.media}
                   image="assets/images/calculator.jpg"
                   title="Contemplative Reptile"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">
                     Calculator
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                   It is Basic Calculator for Performing Simple Maths Calculation Task 
                   </Typography>
                 </CardContent>
               </CardActionArea>
               <CardActions>
                 <Button size="small" color="primary">
                 <a href="https://muhammad-osama-qureshi.github.io/calculator-recreate/">Click to View</a>
                 <Visibility/></Button>
               
               </CardActions>
             </Card>
             </Link>
             <Link href="https://muhammad-osama-qureshi.github.io/todoapp/">
            <Card className={classes.root}>
               <CardActionArea>
                 <CardMedia
                   className={classes.media}
                   image="assets/images/todos.jpg"
                   title="Contemplative Reptile"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">
                     TodoList
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                     ToDo List in which you can add items and delete Items after completing it.
                   </Typography>
                 </CardContent>
               </CardActionArea>
               <CardActions>
                 <Button size="small" color="primary">
                 <a href="https://muhammad-osama-qureshi.github.io/todoapp/">Click to View</a>
                 <Visibility/></Button>
                
               </CardActions>
             </Card>
             </Link>
             <Link href="https://muhammad-osama-qureshi.github.io/todoapp/">
            <Card className={classes.root}>
               <CardActionArea>
                 <CardMedia
                   className={classes.media}
                   image="assets/images/todos.jpg"
                   title="Contemplative Reptile"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">
                     TodoList
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                     ToDo List in which you can add items and delete Items after completing it.
                   </Typography>
                 </CardContent>
               </CardActionArea>
               <CardActions>
                 <Button size="small" color="primary">
                 <a href="https://muhammad-osama-qureshi.github.io/todoapp/">Click to View</a>
                 <Visibility/></Button>
                
               </CardActions>
             </Card>
             </Link>
             <Link href="https://muhammad-osama-qureshi.github.io/todoapp/">
            <Card className={classes.root}>
               <CardActionArea>
                 <CardMedia
                   className={classes.media}
                   image="assets/images/todos.jpg"
                   title="Contemplative Reptile"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">
                     TodoList
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                     ToDo List in which you can add items and delete Items after completing it.
                   </Typography>
                 </CardContent>
               </CardActionArea>
               <CardActions>
                 <Button size="small" color="primary">
                 <a href="https://muhammad-osama-qureshi.github.io/todoapp/">Click to View</a>
                 <Visibility/></Button>
                
               </CardActions>
             </Card>
             </Link>

             </div>
      </div>
      
    )
}

export default MyProject