import React from 'react'
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    GridItem: {    
        marginBottom:"20px",
        display: "flex",
        justifyContent: "center",
    },
    card: {
        position: 'relative',
        width: "280px",
        height: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    image: {
        height: "70%",
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

    },
    button: {
        fontSize: "15px",
        fontWeight:700,
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
            from: { background:'rgba(0, 0, 0, 0.3)' },
            to: { background: "none" }
              }
   
}))

const Product = (props) => {
    const navigate = useNavigate();
    const classes = useStyles();
    return (
        <Grid onClick={()=>  navigate(`/detail/${props.id}`)} item xs={12} sm={4} className={classes.GridItem}>   
        <div className={classes.card}>  
                    <img  src={props.image}  className={classes.image} />
                    <div className={classes.overlay}>
             <div className={classes.center}>
                 <h1> WOMEN'S</h1>
                 <Link to="/" className={classes.button}>SHOP NOW</Link>
             </div>
             </div>
        </div>            
        </Grid>
    )
}

export default Product