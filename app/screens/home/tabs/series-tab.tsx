import React, { FC, useEffect } from "react"
import { ActivityIndicator, FlatList } from "react-native"
import { ListItem, Screen } from "../../../components"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../../store"
import { color } from "../../../theme"
import { fetchSeries, selectAllSeries } from "../../../store/series/series-store"

export const SeriesTab: FC = () => {
  
  const dispatch = useAppDispatch()
  const { loading } = useSelector((state: RootState) => state.series)
  const series = useSelector(selectAllSeries)
  
  useEffect(() => {
    dispatch(fetchSeries({page: 1}))
  }, [])

  if (loading) {
    return <ActivityIndicator size="large" color={color.primary} />
  }

  return (
    <Screen preset="fixed">
      <FlatList
        data={series}
        renderItem={({ item }) => (
          <ListItem item={item} />
        )}
      />
    </Screen>
  )
}
