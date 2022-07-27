import React, { FC } from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { NavigatorParamList } from "../../navigators"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MoviesTab } from "./tabs/movies-tab"
import { SeriesTab } from "./tabs/series-tab"

const Tab = createBottomTabNavigator()

export const HomeScreen: FC<NativeStackScreenProps<NavigatorParamList, "home">> = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarIconStyle: { display: "none" },
      }}>
      <Tab.Screen name="Movies" component={MoviesTab} />
      <Tab.Screen name="Series" component={SeriesTab} />
    </Tab.Navigator>
  )
}
