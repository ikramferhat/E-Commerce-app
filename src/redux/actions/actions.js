import { ActionType } from "../constants/actionsType";
 
const getProducts =(products) => {
    return {
      type: ActionType.GET_PRODUCTS,  
      payload: products,
    }
  }

const getSingleProduct =(product) => {
    return {
      type: ActionType.GET_SINGLE_PRODUCT,  
      payload: product,
    }
  }

const removeProduct =() => {
    return {
      type: ActionType.REMOVE_SELECTED_PRODUCT,
    }
  }


export {getProducts,getSingleProduct,removeProduct};