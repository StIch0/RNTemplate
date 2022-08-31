import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ExampleScreen } from '@app/screens/ExampleScreen';

import { stackNavigatorOptionsService } from './services/StackNavigatorOptionsService';
import type { RootStackParamsList } from './types';

const RootStack = createStackNavigator<RootStackParamsList>();

const exampleScreenOption = stackNavigatorOptionsService
  .addTitle('RNTemplate')
  .addHeaderCustom({
    headerTitle: 'new RNTemplate',
    headerTitleStyle: {
      color: '#000000',
    },
  })
  .addHeaderColor('#3fff').options;

const RootStackNavigator = () => {
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
