import * as React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { imageBaseUrl } from "../../services/api"
import { color, spacing } from "../../theme"
import { AutoImage } from "../auto-image/auto-image"
import { Text } from "../text/text"

interface ListItemParams {
  title: string
  overview: string
  poster: string
  popularity: number
  onPress: () => void
}

export function ListItem(props: ListItemParams) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <AutoImage source={{uri: imageBaseUrl + props.poster}} style={styles.image}/>
      </View>
      <View style={styles.infoContainer}>
        <Text text={props.title} preset="bold" />
        <Text text={String(props.popularity)} style={styles.text} />
        <Text text={props.overview} numberOfLines={2} style={styles.text}/>
      </View>
    </TouchableOpacity>
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
   flex: 2
  },
  image: {
    height: 120, 
    idth: undefined,
    borderRadius: spacing.tiny,
    overflow: "hidden"
  },
  infoContainer: {
    paddingVertical: spacing.small,
    flex: 5,
  },
  text: {
    marginTop: spacing.tiny
  },
})