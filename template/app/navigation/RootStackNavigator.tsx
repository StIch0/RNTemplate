import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { useColorScheme } from '@app/common/hooks/useColorScheme';
import { ExampleScreen } from '@app/screens/exampleScreen';
import { useColors } from '@app/ui/hooks/useColors';

import { stackNavigatorOptionsService } from './services/StackNavigatorOptionsService';
import type { RootStackParamsList } from './types';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const RootStackNavigator = () => {
  const { black, primary } = useColors();

  const exampleScreenOption = stackNavigatorOptionsService
    .addTitle('RNTemplate')
    .addHeaderCustom({
      headerTitle: 'new RNTemplate',
      headerTitleStyle: {
        color: black,
      },
    })
    .addHeaderColor(primary).options;

  useColorScheme();

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="ExampleScreen"
        component={ExampleScreen}
        options={exampleScreenOption}
      />
    </RootStack.Navigator>
  );
};

export { RootStackNavigator };
