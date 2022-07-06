import { combineReducers } from "redux";
import cartReduce  from './cart/cart.store'

export default combineReducers({
  cart: cartReduce,
})