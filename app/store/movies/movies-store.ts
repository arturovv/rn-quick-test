import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice
} from "@reduxjs/toolkit"
import { RootState } from ".."
import { get as getMoviesApi } from "../../services/api/movies"

export interface MovieData {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  media_type: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  popularity: number
}

interface FetchMoviesParams {
  page: number
}

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async (data: FetchMoviesParams) => {
  return (await getMoviesApi(data.page)).data.results as MovieData[]
})

export const moviesAdapter = createEntityAdapter<MovieData>()

const moviesSlice = createSlice({
  name: "movies",
  initialState: moviesAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      moviesAdapter.setAll(state, action.payload)
      state.loading = false
    })
    builder.addCase(fetchMovies.rejected, (state) => {
      state.loading = false
    })
  }
})

export const {
  selectById: selectMovieById,
  selectIds: selectMovieIds,
  selectEntities: selectMovieEntities,
  selectAll: selectAllMovies,
  selectTotal: selectTotalMovies
} = moviesAdapter.getSelectors((state: RootState) => state.movies)

export default moviesSlice.reducer