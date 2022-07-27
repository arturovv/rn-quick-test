import React, { useLayoutEffect, useState } from "react"
import {
  Image as RNImage,
  ImageProps as DefaultImageProps,
  ImageURISource,
} from "react-native"

type ImageProps = DefaultImageProps & {
  source: ImageURISource
  width?: number
}

/*
  Con este componente podemos recuperar una imagen de la red y mantener su aspect ratio
  sin conocer previamente su tamaño (width y height)
*/

export function AutoImage(props: ImageProps) {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (props.source?.uri) {
      RNImage.getSize(props.source.uri as any, (width, height) => {
        setImageSize({ width, height })
      })
    }
  }, [])

  const aspectRatio = imageSize.height > 0 ? imageSize.width / imageSize.height : 0

  return <RNImage {...props} style={[{aspectRatio}, props.style]} />
}
