import React, { FC, useEffect } from "react"
import { ActivityIndicator, FlatList } from "react-native"
import { ListItem, Screen } from "../../../components"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../../store"
import { fetchMovies, selectAllMovies } from "../../../store/movies/movies-store"
import { color } from "../../../theme"

export const MoviesTab: FC = () => {
  
  const dispatch = useAppDispatch()
  const { loading } = useSelector((state: RootState) => state.movies)
  const movies = useSelector(selectAllMovies)
  
  useEffect(() => {
    dispatch(fetchMovies({page: 1}))
  }, [])

  if (loading) {
    return <ActivityIndicator size="large" color={color.primary} />
  }
  

  return (
    <Screen preset="fixed">
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <ListItem item={item} />
        )}
      />
    </Screen>
  )
}
