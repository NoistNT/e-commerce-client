export interface Product {
  _id: string
  name: string
  brand: string
  price: number
  image: string
  category: string
}

export interface ProductDetails extends Product {
  description: string
  stock: number
  isActive: boolean
}
