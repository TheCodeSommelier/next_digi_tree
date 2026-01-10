export type ProductId = 'basic' | 'growth' | 'individual'

export interface Product {
  id: ProductId
  title: string
  subtitle: string
  description: string
  heroImageUrl: string
  midHeroImageUrl: string
  midHeroDescription: string
  midHeroTitle: string
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
