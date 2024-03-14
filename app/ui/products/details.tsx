import Image from 'next/image'

import { ProductDetails } from '@/lib/types'

export default function Details({ product }: { product: ProductDetails }) {
  return (
    <div>
      <h1>Product Details</h1>
      <Image alt={product.name} height={200} src={product.image} width={200} />
      <p>{product.name}</p>
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <p>{product.stock}</p>
    </div>
  )
}
