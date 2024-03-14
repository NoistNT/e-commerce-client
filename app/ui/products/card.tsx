import Image from 'next/image'

import { Product } from '@/lib/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card key={product._id} className="m-auto bg-neutral-900">
      <Image
        alt={product.name}
        className="h-[350px] object-cover"
        height={350}
        src={product.image}
        width={300}
      />
      <Separator />
      <CardHeader>
        <CardTitle className="text-center text-xl text-white">
          {product.name}
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <CardDescription>{product.brand}</CardDescription>
        <CardDescription>{product.category}</CardDescription>
        <CardDescription>${product.price}</CardDescription>
      </CardContent>
    </Card>
  )
}
