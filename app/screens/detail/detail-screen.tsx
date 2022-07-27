import React, { FC } from "react"
import { StyleSheet, useWindowDimensions, View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { color, spacing } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text } from "../../components"
import { selectSerieById } from "../../store/series/series-store"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { selectMovieById } from "../../store/movies/movies-store"
import { imageBaseUrl } from "../../services/api"
import { AutoImage } from "../../components/auto-image/auto-image"


export const DetailScreen: FC<NativeStackScreenProps<NavigatorParamList, "detail">> = (props) => {
  let item = null
  if(props.route.params.type === "movie") {
    item = useSelector((state: RootState) => selectMovieById(state, props.route.params.id))
  } else {
    item = useSelector((state: RootState) => selectSerieById(state, props.route.params.id))
  }

  const { width } = useWindowDimensions()

  return (
    <Screen preset="scroll">
      <View style={styles.imageContainer}>
        <AutoImage source={{uri: imageBaseUrl + item.backdrop_path}} style={{width, height: undefined}}/>
      </View>
      <View style={styles.infoContainer}>
        <Text text={item.title ?? item.name} preset="header" />
        <Text text={String(item.popularity)} style={styles.text} />
        <Text text={item.overview} style={styles.text} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    backgroundColor: color.palette.lighterGrey,
    flexDirection: "row",
    alignItems: "center"
  },
  imageContainer: {
    width: "100%"
  },
  infoContainer: {
    padding: spacing.medium,
    flex: 1
  },
  text: {
    marginTop: spacing.medium
  }
})
