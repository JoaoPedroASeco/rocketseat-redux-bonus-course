import { useSelector } from "react-redux"
import { IProduct } from "../shared/interfaces/cart"
import { RootState, useAppDispatch } from "../store"
import { addProductToCartRequest } from "../store/modules/cart/Cart.store"

interface CatalogItemProps {
  product: IProduct
  index: number
}

export const CatalogItem = ({ product, index }: CatalogItemProps) => {
  const dispatch = useAppDispatch()

  const hasFailedStockCheck = useSelector<RootState, boolean>(state => {
    return state.cart.failureStockCheck.includes(product.id)
  })

  const handleAddProductToCart = (product: IProduct) => {
    dispatch(addProductToCartRequest({quantity: 2, product: product}))
  }

  return (
    <article key={index}>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {" "}

      <button
        onClick={() => handleAddProductToCart(product)}
        type="button"
      >
        Comprar
      </button>

      { hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de estoque</span>}
    </article>
  )
}