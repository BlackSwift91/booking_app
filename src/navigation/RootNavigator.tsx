import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SignInScreen } from '../screens/SignInScreen/SignInScreen';

const Stack = createStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
}
