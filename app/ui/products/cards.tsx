import { Product } from '@/lib/types'

import ProductCard from './card'

export default function Cards({ productsList }: { productsList: Product[] }) {
  return (
    <div className="m-auto grid h-screen max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:auto-cols-auto lg:grid-cols-3 ">
      {productsList.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  )
}
