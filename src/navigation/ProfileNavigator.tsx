import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';

const Stack = createStackNavigator();

export function ProfileNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: false,
        headerTintColor: '#000000',
        headerTitleAlign: 'center',
        headerTitle: () => <Text style={styles.appName}>Book.me</Text>,
      }}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  );
}

export const styles = StyleSheet.create({
  appName: {
    color: '#0071BC',
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  userBalance: {
    color: '#000000',
    paddingHorizontal: 10,
  },
});
