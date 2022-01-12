import { combineReducers } from "redux";
import { ProductsReducer} from "./ProductReducer";


const reducer = combineReducers({
    allproducts: ProductsReducer,
});

export default reducer;