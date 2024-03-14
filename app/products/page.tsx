import Cards from '@/ui/products/cards'
import { getProducts } from '@/lib/api'

export default async function Products() {
  const productsList = await getProducts()

  return (
    <div>
      <h1>Products</h1>
      <Cards productsList={productsList} />
    </div>
  )
}
