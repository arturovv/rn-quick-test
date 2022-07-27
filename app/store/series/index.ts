import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice
} from "@reduxjs/toolkit";
import { RootState } from "../";
import { get as getSeriesApi } from "../../services/api/series"

interface SerieData {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
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

export const fetchSeries = createAsyncThunk("series/fetchSeries", async (page: number) => {
  return (await getSeriesApi(page)).data.results as SerieData[];
});

export const seriesAdapter = createEntityAdapter<SerieData>();

const seriesSlice = createSlice({
  name: "series",
  initialState: seriesAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSeries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSeries.fulfilled, (state, action) => {
      seriesAdapter.setAll(state, action.payload);
      state.loading = false;
    });
    builder.addCase(fetchSeries.rejected, (state) => {
      state.loading = false;
    });
  }
});

export const {
  selectById: selectSerieById,
  selectIds: selectSerieIds,
  selectEntities: selectSerieEntities,
  selectAll: selectAllSeries,
  selectTotal: selectTotalSeries
} = seriesAdapter.getSelectors((state: RootState) => state.series);

export default seriesSlice.reducer;