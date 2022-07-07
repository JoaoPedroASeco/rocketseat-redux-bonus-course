import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './Cart.store'
import { all, call, select, takeLatest, put } from 'redux-saga/effects'
import { api } from '../../../services/api'
import { AxiosResponse } from 'axios'
import { RootState } from '../..'

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface IStockResponse {
  id: number
  quantity: number
}

function* checkProductsStock({ payload }: CheckProductStockRequest)  {
  const { product, quantity } = payload

  const currentQuantity: number = yield select((state: RootState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity || 0
  })

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`)

  if(availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess({product, quantity}))
  }else {
    yield put(addProductToCartFailure({product, quantity}))
  }

  console.log(currentQuantity)
}

export default all([
  takeLatest(addProductToCartRequest, checkProductsStock)
])