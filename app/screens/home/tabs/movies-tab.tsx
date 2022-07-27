import React, { FC, useEffect } from "react"
import { ActivityIndicator, FlatList, View } from "react-native"
import { ListItem, Screen } from "../../../components"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../../store"
import { fetchMovies, selectAllMovies } from "../../../store/movies/movies-store"
import { color } from "../../../theme"
import { useNavigation } from "@react-navigation/native"

export const MoviesTab: FC = () => {
  const navigation = useNavigation()
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
        showsVerticalScrollIndicator={false}
        data={movies}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            overview={item.overview}
            popularity={item.popularity}
            backdrop={item.backdrop_path}
            onPress={navigation.navigate.bind(undefined, "detail", {type: item.media_type, id: item.id})}
          />
        )}
        ItemSeparatorComponent={() => <View style={{flex: 1, height: 1}}/>}
      />
    </Screen>
  )
}
