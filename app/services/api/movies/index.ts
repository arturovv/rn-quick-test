import api, { apiKey } from ".."

export const get = (page = 1) => {
  return api.get(
    "trending/movies/week",
    {
      params: { 
        api_key: apiKey,
        page
      }
    })
}