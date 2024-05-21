import axios from '../plugins/axios'

export const getAllNews = () => {
  return axios.get(`/news`)
}

export const getNews = (id) => {
  return axios.get(`/news/${id}`)
}

export const updateNewsStatus = (status, id) => {
  return axios.patch(`/news/${id}/status`, status)
}
