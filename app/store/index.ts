import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import moviesReducer from './movies/movies-store'
import seriesReducer from './series/series-store'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>