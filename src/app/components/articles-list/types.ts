export interface ArticleList {
  data: Daum[]
  meta: Meta
}

export interface Daum {
  id: number
  attributes: Attributes
}

export interface Attributes {
  Title: string
  Description: string
  ImageBlock: ImageBlock
}

export interface ImageBlock {
  data: Data
}

export interface Data {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Formats {
  thumbnail: Thumbnail
}

export interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
