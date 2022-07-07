import { ICartItem } from "../shared/interfaces/cart"

interface CatalogItemProps {
  item: ICartItem
  index: number
}

export const CatalogList = ({ item, index }: CatalogItemProps) => {
  return (
    <tr key={index}>
      <td>{item.product.title}</td>
      <td>{item.product.price}</td>
      <td>{item.quantity}</td>
      <td>{(item.product.price * item.quantity).toFixed(2)}</td>
    </tr>
  )
}