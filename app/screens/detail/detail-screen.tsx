import React, { FC } from "react"
import { View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { color, } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text } from "../../components"


export const DetailScreen: FC<NativeStackScreenProps<NavigatorParamList, "detail">> = ({ navigation }) => {
  const nextScreen = () => navigation.navigate("welcome")


  return (
    <Screen preset="scroll">
      <View>
        <Text text="hola amigo" />
      </View>
    </Screen>
  )
}
