import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartItem, ICartState } from '../../../shared/interfaces/cart'

const cartInitialState: ICartState = {
  items: [],
  loading: false,
}

export const fetchItems = createAsyncThunk('ADD_PRODUCT', async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')
  return await response.json()
})

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      if (!action.payload.product) return

      if (!action.payload.quantity || action.payload.quantity < 0) action.payload.quantity = 1

      state.items.push(action.payload)
    },
    removeItem: ({ items }, { payload: { id } }: PayloadAction<{ id: number }>) => {
      items = items.filter(item => item.product.id !== id)
    }
  },
  extraReducers: (builder) => {
    builder.addCase( fetchItems.pending , (state,) => {
      state.loading = true
    })
    .addCase( fetchItems.fulfilled , (state, action) => {
      console.log(state, action)
      state.loading = false
    })
    .addCase( fetchItems.rejected, (state, action) => {
      state.loading = false
    })
  }
})

export const {
  addItem,
  removeItem,
} = cartSlice.actions

export default cartSlice.reducer


// createSlice vai criar  o reducer
// PayloadAction é a tipagem da action