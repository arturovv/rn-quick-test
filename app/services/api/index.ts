import axios from "axios"

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers:{
      "Accept": "application/json",
      "Content-Type": "application/json",
  }
})

export const apiKey = "7b6daf42e241340d888fb20449471fe6"

export const imageBaseUrl = "https://image.tmdb.org/t/p/w500"