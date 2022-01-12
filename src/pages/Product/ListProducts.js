import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import axios from "axios"
import {getProducts} from '../../redux/actions/actions'
import {makeStyles } from '@material-ui/core/styles';
import { Grid,Button} from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import Product from './Product'

  const useStyles = makeStyles({
    gridContainer: {   
        padding: "100px 3%",
        display: "flex",
        justifyContent: "center",
    },
  
  });


const ProductList = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const products = useSelector((state) => state.allproducts.products)
    const list = products;
    const dispatch = useDispatch()

    const showProducts = () => {
      return function(dispatch){
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
                dispatch(getProducts(response.data))
        })
        .catch((err)=>{
          console.log("err", err)
      })
      }}


      useEffect(() => {
        dispatch(showProducts());
      }, []);



    return (
  <Grid container className={classes.gridContainer}>
            {
                list.map((index,i)=>{
                if((index.category) != "jewelery" && (index.category) != "electronics")
                {
                    return(
                    <Product id={index.id} title={index.title} image={index.image} price={index.price}  category={index.category}/>

                    )     
                }
             })
            }
  </Grid>
    );
}

export default ProductList