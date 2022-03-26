/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { useColorScheme, LogBox } from 'react-native';
import { Provider } from 'react-redux';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AppNavigatior } from './src/navigation/AppNavigatior';

import { store } from './src/store/store';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
      <NavigationContainer theme={navTheme}>
        <AppNavigatior />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
