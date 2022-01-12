import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import m from "../images/category/men11.jpg";
import w from "../images/category/women11.jpg";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    GridContainer: {
        display: "flex",
        padding:"100px 4%",
        marginTop:"100px",
    },
    GridItem: {
        position: 'relative', 
        marginBottom:"20px",
           
    },
    image: {
        width: '100%',
        height: "100%",
        objectFit:"cover",
        
    },
    overlay: {
        top: 0,
        left: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        background : 'rgba(0, 0, 0, 0.2)',    
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        '&:hover': {
                animation: "$lefttoright 1s forwards",
            }
      },
    center : {
        background: "rgba(255,255,255,.5)",
        color:theme.palette.fontColor.primary,
        width:"200px",
        height:"150px",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        ['@media (max-width:780px)']: {
            width:"150px",
            height:"100px",
         }
    },
    button: {    
        transition: "all 0.3s ease 0s",
        color:theme.palette.fontColor.primary,
        position: "relative",
        cursor: "pointer",
        "&:after" :{  
        position: 'absolute',
        content: '""',
        display:"block",
        left: 0,
        top: "20px",
        right: "50%",
        bottom: "0",
        width: "0px",
        height: "2px",
        background: theme.palette.fontColor.primary,
        transition:" 0.3s ease 0s, left 0.3s ease 0s",
         },
        "&:hover:after":{ 
                width: "50%",
                left: "0"
            },
        },
        "@keyframes lefttoright": {
            from: { background:'rgba(0, 0, 0, 0.2)' },
            to: { background: "none" }
              }
   
}))

const Category = () => {
    const classes = useStyles();
    return (
         <Grid container  className={classes.GridContainer}>
             <Grid  item xs={12} sm={4} className={classes.GridItem}>
             <img src={m}  className={classes.image}/>
             <div className={classes.overlay}>
             <div className={classes.center}>
                 <h1> WOMEN'S</h1>
                 <Link to="/" className={classes.button}>SHOP NOW</Link>
             </div>
             </div>
             </Grid> 
             <Grid  item xs={12} sm={4} className={classes.GridItem}>
             <img src={m}  className={classes.image}/>
             <div className={classes.overlay}>
             <div className={classes.center}>
                 <h1> WOMEN'S</h1>
                 <Link to="/" className={classes.button}>SHOP NOW</Link>
             </div>
             </div>
             </Grid> 
             <Grid  item xs={12} sm={4} className={classes.GridItem}>
             <img src={w}  className={classes.image}/>
             <div className={classes.overlay}>
             <div className={classes.center}>
                 <h1> WOMEN'S</h1>
                 <Link to="/" className={classes.button}>SHOP NOW</Link>
             </div>
             </div>
             </Grid> 
            
        </Grid>
    )
}


export default Category
