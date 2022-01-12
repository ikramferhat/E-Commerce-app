import React,{useState, useEffect} from 'react'
import { Grid,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useNavigate,useParams} from 'react-router-dom';
import axios from "axios"
import {getSingleProduct,removeProduct} from '../../redux/actions/actions'
import {useSelector, useDispatch} from "react-redux"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        marginBottom: theme.spacing(2),
         width: '100%',
    }
    },
  }));

 
const ProductDetail = () => {
    const classes = useStyles();
    const [state,setState] = useState({
        title:"",
        image:"",
        price:"",
        category:""
    });
    const dispatch = useDispatch()
    let {id} = useParams()
    const {oneproduct}= useSelector((state) => state.allproducts)
    const {title, image, price,category}= state;
    const navigate = useNavigate();

  
    
  const getSingle = (userid) => {
    return function(dispatch){
  axios.get(`https://fakestoreapi.com/products/${userid}`)
  .then((res)=>{
      console.log('data',res.data)
      dispatch(getSingleProduct(res.data))
  })
  .catch((error)=> console.log(error))    
}}

useEffect(() => {
    if(id && id !== "")
  dispatch(getSingle(id))
  return () => {
    dispatch(removeProduct())
   }
 },[id]);

useEffect(() => {
  if(oneproduct){
    setState({...oneproduct})
  }
 },[oneproduct]);

 
   
    return (
        <Grid container  sm={10} style={{display: "flex", justifyContent:"flex-start" ,margin:"0 auto"}}>
            <Grid item xs={12} sm={8} style={{padding: "0px 4%",}}>
               
            <div>PRODUCT DETAIL</div>
        {Object.keys({oneproduct}).length === 0 ? (
     <h1>is loading ....</h1>
        ) : (    
            <div>
                <Button style={{marginBottom:"20px"}} onClick={()=>  navigate("/")}  variant="contained" color="primary">GO BACK</Button>
                <div>
                    <img src={image}  style={{maxWidth:"100px",maxHeight:"100px"}}/>
                    <h1>title : </h1>{title}
                    <h1>price : </h1>{price}
                    <h1>category : </h1>{category}
                </div>
                </div> 
                  )}

            </Grid>
        </Grid>
)}

export default ProductDetail


