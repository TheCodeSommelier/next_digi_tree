export type ProductId = 'effectivity' | 'cyber-security' | 'sustainable-tech-stack'

export interface Product {
  id: ProductId
  title: string
  subtitle: string
  description: string
  imageUrl: string
  packageInfo: ProductInfo[]
  results: Result[]
}

export interface ProductInfo {
  title: string
  text: string
  list: string[]
}

export interface Result {
  iconUrl: string
  iconAlt: string
  description: string
}
