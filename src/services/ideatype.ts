export interface IdeaTypeResponse {
  data: [dataType],
  links: linksType,
  meta: metaType
}

export interface dataType {
  id: number,
  slug: string,
  title: string,
  content: string,
  published_at: string,
  deleted_at: string | null,
  created_at: string,
  updated_at: string,
  small_image: Array<{
    id: number,
    mime: string,
    file_name: string,
    url: string
  }>,
  medium_image: Array<{
    id: number,
    mime: string,
    file_name: string,
    url: string
  }>,
}

export interface linksType {
  first: string,
  last: string,
  prev: string | null,
  next: string | null
}

export interface metaType {
  current_page: number,
  from: number,
  last_page: number,
  links: Array<{
    url: string | null,
    label: string,
    active: boolean
  }>,
  path: string,
  per_page: number,
  to: number,
  total: number
}