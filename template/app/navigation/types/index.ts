import type { StackNavigationOptions } from '@react-navigation/stack';

type RootStackParamsList = {
  ExampleScreen: undefined;
};

type HeaderLeft = StackNavigationOptions['headerLeft'];

type HeaderRight = StackNavigationOptions['headerRight'];

type HeaderTitleOptions = {
  headerTitleStyle?: StackNavigationOptions['headerTitleStyle'];
  headerTitleAlign?: StackNavigationOptions['headerTitleAlign'];
  headerTitleContainerStyle?: StackNavigationOptions['headerTitleContainerStyle'];
};

export type {
  RootStackParamsList,
  HeaderLeft,
  HeaderRight,
  HeaderTitleOptions,
};
