import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { HotelScreen } from '../screens/HotelScreen/HotelScreen';
import { RoomScreen } from '../screens/RoomScreen/RoomScreen';
import { RootState } from '../store/store';

const Stack = createStackNavigator();

export function RootNavigator() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: false,
        headerTintColor: '#000000',
        headerTitleAlign: 'center',
        headerRight: () => <Text style={styles.userBalance}>{user.balance}$</Text>,
        headerTitle: () => <Text style={styles.appName}>Book.me</Text>,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="HotelScreen"
        component={HotelScreen}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="RoomScreen"
        component={RoomScreen}
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
