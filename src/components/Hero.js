import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import img from "../images/hero/hero2.jpg";
import ButtonArow from './ButtonArow/ButtonArow';
import { HeroData } from '../DATA';


const useStyles = makeStyles((theme) => ({
    GridContainer: {
        position: 'relative',  
        paddingTop:"60px",
        ['@media (max-width:780px)']: {        
            paddingTop:"80px",
          }
    },
    banner: {
        clipPath: "polygon(100% 0, 100% 100%, 84% 87%, 0% 100%, 0 49%, 0% 0%)",
        width: "100%",
        height: "100%",
    },
    overlay: {
        top: 0,
        left: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: "flex",
        justifyContent:"flex-start",
        alignItems:"center",
      },
    content: {
        height:"400px",
        paddingTop:"30px",
        paddingLeft:"5%",
        marginTop:"100px",
        color: theme.palette.fontColor.primary,
    },
    contentText :{
        fontSize: "50px",
        textTransform: "uppercase",
       
    },
    contentText1 :{
        fontSize: "20px",
        textTransform: "none",
        marginBottom: "30px"
    },
}))
const Hero = () => {
    const classes = useStyles();

    return (
         <Grid container className={classes.GridContainer}>
              <img src={img} className={classes.banner}/>
              <div className={classes.overlay}>
             {HeroData.map((item,index)=>{
                        return(
                        <Grid  item xs={7} className={classes.content}>
                           <h5>{item.content1}</h5>
                           <h1 className={classes.contentText}>{item.content2}</h1>
                           <h1 className={classes.contentText1}>{item.content3}</h1>
                           <ButtonArow title={item.content4}/>
                        </Grid>)}
                        )} 
                        </div>
                        </Grid>
                        )
                    }

export default Hero
