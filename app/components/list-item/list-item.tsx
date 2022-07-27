import * as React from "react"
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { imageBaseUrl } from "../../services/api"
import { color, spacing } from "../../theme"
import { Text } from "../text/text"

interface ListItemParams {
  title: string
  overview: string
  backdrop: string
  popularity: number
  onPress: () => void
}

export function ListItem(props: ListItemParams) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageBaseUrl + "/w500" + props.backdrop, width: 100, height: 100}} />
      </View>
      <View style={styles.infoContainer}>
        <Text text={props.title} preset="bold" />
        <Text text={String(props.popularity)} />
        <Text text={props.overview} numberOfLines={2} />
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
    borderRadius: spacing.tiny,
    overflow: "hidden"
  },
  infoContainer: {
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    flex: 1
  }
});