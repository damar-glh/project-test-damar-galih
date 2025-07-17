import apiClient from './api'
import type { IdeaTypeResponse } from './ideatype'

export interface FetchIdeasParams {
  pageNumber?: number
  pageSize?: number
  sort?: string
}

export const fetchIdeas = async (params: FetchIdeasParams) => {
  const { pageNumber = 1, pageSize = 10, sort = '-published_at' } = params
  const response = await apiClient.get<IdeaTypeResponse>('/ideas', {
    params: {
      'page[number]': pageNumber,
      'page[size]': pageSize,
      'append[]': ['small_image', 'medium_image'],
      'sort': sort
    }
  })
  return response.data
}