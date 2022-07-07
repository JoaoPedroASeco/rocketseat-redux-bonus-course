import { useSelector } from "react-redux"
import { RootState } from "../store"
import { CatalogList } from "./CatalogList"

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items)

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, index) => (
          <CatalogList item={item} index={index}/>
        ))}
      </tbody>
    </table>
  )
}