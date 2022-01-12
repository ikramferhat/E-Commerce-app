import React,{useEffect} from 'react'
import { Button, Grid,Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import fCH from "../images/promotion/chapeau.jpg";
import ch from "../images/promotion/chap.jpg";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const useStyles = makeStyles((theme) => ({
    GridContainer: {
        padding:"100px 0%",
        backgroundColor:"white",
        '&:hover':{
            '& $overlay': {
                animation: "$lefttoright 2s forwards",               
            }}

       
       
    },
    GridItem: {
        position: 'relative',
        height:"500px",  
    },
    overlay: {
        top: 0,
        left: 0,
        position: 'absolute',
        width: "100%",
        height: '100%',
        background : 'rgba(0, 0, 0, 0.2)',    
        display:"flex",
        justifyContent:"right",
        alignItems:"center",
       
      },
    promotionInfo:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"white",
    },
    promotionImage: {
        height: "100%",
        width:"100%",
        objectFit:"contain",
    },
    image1: {
        height: "100px",
        backgroundSize: 'contain',  
        ['@media (max-width:780px)']: {
            height: "50px",
        }
    },
    button: {
        fontSize: "10px",
        fontWeight:700,
        transition: "all 0.3s ease 0s",
        color:theme.palette.fontColor.primary,
        cursor: "pointer",
       
        },
    center: {
            background: "white",
            color:theme.palette.fontColor.primary,
            display:"flex",
            width:"250px",
            alignItems:"center",
            justifyContent:"space-between",
            ['@media (max-width:780px)']: {
                width:"150px",
            }
        },       
    "@keyframes lefttoright": {
            from: { width:"100%"},
            to: { width: "50%"},
        },
     
}))

const Promotion = () => {
    const classes = useStyles();

    return (
        <Slider 
        autoplay={true}
        dots={false}
        infinite={true}
        speed={500}
        slidesToScroll={1}
        arrows={false}
        slidesToShow={1}
        > 
         <Grid container className={classes.GridContainer}>  
                <Grid  item xs={12} sm={12} className={classes.GridItem} >
                    <img src={fCH}  className={classes.promotionImage}/>
                    <div className={classes.overlay}>
                        <div className={classes.center}>
                            <div className={classes.promotionInfo}>
                                <img src={ch}  className={classes.image1}/>
                                <div style={{fontSize:"10px"}}>300 $</div>
                                </div>                               
                            <Button to="/" className={classes.button}>SHOP NOW </Button>
                            </div>
                        </div>          
                 </Grid> 
        </Grid>
        <Grid container className={classes.GridContainer}>  
                <Grid  item xs={12} sm={12} className={classes.GridItem} >
                    <img src={fCH}  className={classes.promotionImage}/>
                    <div className={classes.overlay}>
                        <div className={classes.center}>
                            <div className={classes.promotionInfo}>
                                <img src={ch}  className={classes.image1}/>
                                <div style={{fontSize:"10px"}}>300 $</div>
                                </div>                               
                            <Button to="/" className={classes.button}>kkkkkk</Button>
                            </div>
                        </div>          
                 </Grid>       
        </Grid>
    </Slider>
    )
}


export default Promotion
