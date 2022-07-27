import React, { FC, useEffect, useState } from "react"
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
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(fetchMovies({page}))
  }, [page])

  const onEndReached = () => setPage(page + 1)

  if (loading && movies.length === 0) {
    return <ActivityIndicator size="large" color={color.primary} />
  }

  return (
    <Screen preset="fixed">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={movies}
        extraData={movies}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            overview={item.overview}
            popularity={item.popularity}
            poster={item.poster_path}
            onPress={navigation.navigate.bind(undefined, "detail", {type: item.media_type, id: item.id})}
          />
        )}
        ItemSeparatorComponent={() => <View style={{flex: 1, height: 1}}/>}
        onEndReached={onEndReached}
        ListFooterComponent={<ActivityIndicator size="large" color={color.primary} />}
      />
    </Screen>
  )
}
