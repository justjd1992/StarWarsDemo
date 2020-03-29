import React from 'react';
import { StatusBar, Dimensions } from 'react-native';
import ReduxNavigation from '../navigation/ReduxNavigation';
import { PersistGate } from 'redux-persist/integration/react';
import { Root } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

import '../configs/ReactotronConfig';

import reduxStore from '../redux/Store';
import { Provider } from 'react-redux';

const { width } = Dimensions.get('window');
const rem = width / 380;
EStyleSheet.build({ $rem: rem });

const App = () => {
  return (
    <Root>
      <Provider store={reduxStore.store}>
        <PersistGate loading={null} persistor={reduxStore.persistor}>
          <StatusBar barStyle="dark-content" />
          <ReduxNavigation />
        </PersistGate>
      </Provider>
    </Root>
  );
};

// allow reactotron overlay for fast design in dev mode
// allow reactotron overlay for fast design in dev mode
export default __DEV__
  ? console.tron.overlay(App)
  : App;
