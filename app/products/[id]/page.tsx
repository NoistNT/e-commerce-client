import { getProductById } from '@/lib/api'
import Details from '@/ui/products/details'

export default async function ProductDetail({
  params
}: {
  params: { id: string }
}) {
  const { id } = params
  const product = await getProductById(id)

  return <Details product={product} />
}
