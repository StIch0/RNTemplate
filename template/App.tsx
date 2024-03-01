import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Spinner } from '@app/common/components/Spinner';
import { RootStackNavigator } from '@app/navigation/RootStackNavigator';
import { persistor, store } from '@app/store';
import { Container } from '@app/ui/components/Container';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <Provider store={store}>
          <NavigationContainer>
            <Container component={SafeAreaView}>
              <RootStackNavigator />
            </Container>
          </NavigationContainer>
        </Provider>
      </PersistGate>
    </GestureHandlerRootView>
  );
};

export { App };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
