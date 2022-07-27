import * as React from "react"
import { TouchableOpacity } from "react-native"
import { MovieData } from "../../store/movies/movies-store"
import { SerieData } from "../../store/series/series-store"
import { Text } from "../text/text"

interface ListItemParams {
  item: MovieData & SerieData
}

export function ListItem(props: ListItemParams) {
  const title = props.item.media_type === "movie" ? props.item.title : props.item.name
  return (
    <TouchableOpacity>
      <Text text={title} style={{color: "#000"}}/>
    </TouchableOpacity>
  )
}