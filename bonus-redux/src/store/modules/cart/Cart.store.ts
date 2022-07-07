import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartItem, ICartState } from '../../../shared/interfaces/cart'

const cartInitialState: ICartState = {
  items: [],
  failureStockCheck: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addProductToCartRequest: (state, action: PayloadAction<ICartItem>) => {},
    addProductToCartSuccess: (state, action: PayloadAction<ICartItem>) => {
      const { product } = action.payload

      const productInCartIndex = state.items.findIndex(item => item.product.id === product.id)

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].quantity++
      } else {
        state.items.push({
          product,
          quantity: 1
        })
      }
    },
    addProductToCartFailure: (state, action: PayloadAction<ICartItem>) => {
      const { product: { id } } = action.payload
      
      state.failureStockCheck.push(id)

      console.log('failure', action.payload)
    },
  },
})

export const {
  addProductToCartRequest,
  addProductToCartFailure,
  addProductToCartSuccess
} = cartSlice.actions

export default cartSlice.reducer