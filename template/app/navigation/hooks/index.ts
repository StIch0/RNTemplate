import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RootStackParamsList } from '../types';

const useStackNavigation = <
  T extends Partial<RootStackParamsList>,
  R extends keyof T,
>() => useNavigation<NativeStackNavigationProp<T, R>>();

export { useStackNavigation };
