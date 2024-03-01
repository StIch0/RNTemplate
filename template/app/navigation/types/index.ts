import type { NativeStackNavigationOptions } from '@react-navigation/native-stack'

type RootStackParamsList = {
  ExampleScreen: undefined
}

type HeaderLeft<
  T extends NativeStackNavigationOptions = NativeStackNavigationOptions,
> = T['headerLeft']

type HeaderRight<
  T extends NativeStackNavigationOptions = NativeStackNavigationOptions,
> = T['headerRight']

type HeaderTitleOptions<
  T extends NativeStackNavigationOptions = NativeStackNavigationOptions,
> = {
  headerTitleStyle?: T['headerTitleStyle']
  headerTitleAlign?: T['headerTitleAlign']
}

type HeaderBackTitleOptions<
  T extends NativeStackNavigationOptions = NativeStackNavigationOptions,
> = {
  headerTitleStyle?: T['headerBackTitleStyle']
}

export type {
  RootStackParamsList,
  HeaderLeft,
  HeaderRight,
  HeaderTitleOptions,
  HeaderBackTitleOptions,
}
