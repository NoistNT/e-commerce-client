import { Product, ProductDetails } from './types'

const { API_URL } = process.env

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/product`, { cache: 'no-store' })
  const data = res.json() as Promise<Product[]>

  return data
}

export const getProductById = async (id: string) => {
  const res = await fetch(`${API_URL}/product/${id}`, { cache: 'no-store' })
  const data = res.json() as Promise<ProductDetails>

  return data
}
