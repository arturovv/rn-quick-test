import api, { apiKey } from "."

export const get = (page = 1) => {
  return api.get(`trending/tv/week?api_key=${apiKey}&page=${page}`)
}