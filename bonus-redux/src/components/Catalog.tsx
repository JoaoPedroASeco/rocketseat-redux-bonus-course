import { IProduct } from "../shared/interfaces/cart"
import { CatalogItem } from "./CatalogItem"
import { useEffect, useState } from "react"
import { api } from "../services/api"

export const Catalog = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([])

  useEffect(() => {
    api.get('/products')
      .then(response => {
        setCatalog(response.data)
      })
  }, [])

  return (
    <main>
      <h1>
        Catalog
      </h1>
      {catalog.map((product, index) => (
        <CatalogItem key={index} product={product} index={index} />
      ))}
    </main>
  )
}