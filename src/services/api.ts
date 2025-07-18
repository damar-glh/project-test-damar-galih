import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://suitmedia-backend.suitdev.com/api',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
})

export default apiClient
