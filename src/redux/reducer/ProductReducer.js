import { ActionType } from "../constants/actionsType";

const initialState ={
    products: [],
    product: {},
    loading: false,
};

export const ProductsReducer =(state = initialState,action) => {
    switch(action.type){
      case ActionType.GET_PRODUCTS:
        return {
                ...state,
                products: action.payload
        }
      case ActionType.REMOVE_SELECTED_PRODUCT:
          return {
                  ...state
            }
      case ActionType.GET_SINGLE_PRODUCT:
          return {
                  ...state,
                  oneproduct:action.payload
            }
      default:
          return state;
    }
  } 



