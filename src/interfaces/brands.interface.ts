export interface Root {
  results: number
  metadata: Metadata
  data: BrandInterface[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface BrandInterface {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
