import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice
} from "@reduxjs/toolkit"
import { RootState } from ".."
import { get as getSeriesApi } from "../../services/api/series"

interface SerieData {
  adult: boolean
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  media_type: string,
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  poster_path: string
  vote_average: number
  vote_count: number
  popularity: number
}

interface FetchSeriesParams {
  page: number
}

export const fetchSeries = createAsyncThunk("series/fetchSeries", async (data: FetchSeriesParams) => {
  return (await getSeriesApi(data.page)).data.results as SerieData[]
})

export const seriesAdapter = createEntityAdapter<SerieData>()

const seriesSlice = createSlice({
  name: "series",
  initialState: seriesAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSeries.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchSeries.fulfilled, (state, action) => {
      seriesAdapter.setAll(state, action.payload)
      state.loading = false
    })
    builder.addCase(fetchSeries.rejected, (state) => {
      state.loading = false
    })
  }
})

export const {
  selectById: selectSerieById,
  selectIds: selectSerieIds,
  selectEntities: selectSerieEntities,
  selectAll: selectAllSeries,
  selectTotal: selectTotalSeries
} = seriesAdapter.getSelectors((state: RootState) => state.series)

export default seriesSlice.reducer