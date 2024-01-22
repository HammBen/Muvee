import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Icon, Screen, Text } from "app/components"
import { colors, spacing } from "app/theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView } from "react-native-gesture-handler"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {
  navigate(arg0: string, arg1: { screen: string }): unknown
}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen(_props) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = _props

  // const goNext = () => {
  //   navigation.navigate("Demo", { screen: "DemoShowroom" })
  //   navigation.navigate("Home", { screen: "HomeScreen" })
  // }

  return (
    <Screen contentContainerStyle={$root} preset="scroll" statusBarStyle="light">
      <SafeAreaView>
        <View style={$header}>
          <Icon icon="menu" color="white" size={30} />
          <Text style={[$headerText, $mText]}>
            M
            <Text text="uvee" style={$headerText} />
          </Text>
          <Icon icon="bell" color="white" size={30} />
        </View>
        <Button
          text="Test Button"
          onPress={() => navigation.navigate("Welcome", { screen: "WelcomeScreen" })}
        />
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral800,
}

const $header: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: spacing.md,
}

const $headerText: TextStyle = {
  fontSize: 24,
  fontWeight: "bold",
  color: colors.palette.neutral100,
}

const $mText: TextStyle = {
  color: colors.palette.accent500,
}
