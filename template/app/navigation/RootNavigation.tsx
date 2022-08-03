import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ExampleScreen } from '@app/screens/ExampleScreen';

import { getBaseStackScreenOptions } from './services/getBaseStackOptions';
import type { RootStackParamsList } from './types/StackTypes';

const RootStack = createStackNavigator<RootStackParamsList>();

const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="ExampleScreen"
        component={ExampleScreen}
        options={getBaseStackScreenOptions({
          customHeaderTitle: 'RNTemplate',
        })}
      />
    </RootStack.Navigator>
  );
};

export { RootNavigation };
