import React, { FC } from "react"
import { View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import { color, } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text } from "../../components"
import { useStores } from "../../models"


export const WelcomeScreen: FC<NativeStackScreenProps<NavigatorParamList, "welcome">> = observer(({ navigation }) => {
  const nextScreen = () => navigation.navigate("welcome")

  const { characterStore } = useStores()

  return (
    <Screen preset="scroll" backgroundColor={color.transparent}>
      <View>
        <Text text="hola amigo" />
      </View>
    </Screen>
  )
})
