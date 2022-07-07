import { combineReducers } from "redux";
import cartReduce  from './cart/Cart.store'

export default combineReducers({
  cart: cartReduce,
})