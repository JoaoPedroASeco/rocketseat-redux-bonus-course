import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IProduct } from "../store/modules/cart/types"
import { api } from "../services/api"
import { addItem } from '../store/modules/cart/cart.store'
import { RootState, useAppDispatch } from "../store"

export const Catalog = () => {
  const dispatch = useAppDispatch()
  const [catalog, setCatalog] = useState<IProduct[]>([])

  const state = useSelector((state: RootState)  => state.cart)
  console.log(state)

  useEffect(() => {
    api.get('/products')
      .then(response => {
        setCatalog(response.data)
      })
  }, [])

  const handleAddProductToCart = (product: IProduct) => {
    dispatch(addItem({quantity: 2, product: product}))
  }

  return (
    <main>
      <h1>
        Catalog
      </h1>

      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span> {" "}

          <button 
            onClick={() => handleAddProductToCart(product)} 
            type="button"
          >
            Comprar
          </button>
        </article>
      ))}
    </main>
  )
}