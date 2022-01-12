import React, {useState}from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import {Link} from "react-router-dom"
import {List,ListItemText,} from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge} from '@material-ui/core';
import { Menu } from '../DATA';
import SubjectIcon from '@material-ui/icons/Subject';
import CloseIcon from '@material-ui/icons/Close';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
 
    Toolbar: {  
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: "10px 7%",
      backgroundColor: theme.palette.background.primary,
      height: "70px",
      boxShadow: "0 0 16px rgb(0 0 0 / 15%)"
    },
    Logo: {
        color:  theme.palette.fontColor.primary,
        fontSize: "2rem",
        fontWeight: 700,
    },
    List: {
        display: "flex",
        listStyle: "none",
        ['@media (max-width:780px)']: {        
            display: "none",
          }
    },
    ListMobile: {
        display: "none",
        ['@media (max-width:780px)']: {
            position:"absolute",
            display: "block",
            backgroundColor: "black",
            color:"#fff",
            right: "0px",
            top: "80px",
            transition: "all 0.5s ease-out",
            width: "100%",
            textAlign: "center"
     } },
    li :{
        padding: "1rem",
    },
    links: {     
        fontSize: "15px",
        fontWeight: 500,
        transition: "all 0.5s ease-out",
        color:  theme.palette.fontColor.primary,
        cursor: "pointer",
        "&:hover":{
            color: "green",
            },
            ['@media (max-width:780px)']: {
                color: "white"
            }
    },
    mobileicon: {
        display: "none",
        ['@media (max-width:780px)']: {
            display:" block",
            color: "black",
         }
    }
  }))
  

const Header = () => {
    const classes = useStyles();
    const [isMobile,setIsMobile] = useState(false);
  
    return (
        <AppBar elevation={0} position="fixed">
            <Toolbar className={classes.Toolbar}>
                <h1 className={classes.Logo}>
                    Shop.
                </h1>
                <List className={isMobile ? `${classes.ListMobile}` : `${classes.List}`}
                 onClick={() => setIsMobile(false)}
                >
                    {Menu.map((item,index)=>{
                        return(
                         <ListItemText className={classes.li} key={index}>
                             <Link to={item.url} className={classes.links}>{item.title}</Link>
                         </ListItemText>
                         )})}
                         </List>
                         <List className={classes.List} >
                         <ListItemText className={classes.li}>
                            <i class="fa fa-search" aria-hidden="true" style={{color:"black"}}></i>
                            </ListItemText>
                             <ListItemText className={classes.li}>
                            <Badge badgeContent={1} color="secondary">
                                <ShoppingCartOutlinedIcon style={{color:"black"}} />
                                </Badge>
                                </ListItemText>
                                </List>
                                <div className={classes.mobileicon}
                                onClick={() => setIsMobile(!isMobile)}
                                >
                                    {isMobile ? (
                                        <CloseIcon/>
                                        ):(
                                            <SubjectIcon />
                                            )}
                                            </div>
                                            </Toolbar>
                                            </AppBar>
    
    )
}

export default Header
