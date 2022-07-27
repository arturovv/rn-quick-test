import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies';
import seriesReducer from './series';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;