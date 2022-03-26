import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HotelNavigator } from './HotelNavigator';
import { ProfileNavigator } from './ProfileNavigator';

const Tab = createBottomTabNavigator();

export function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#0071BC',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bed" color={color} size={30} />,
        }}
        name="Hotel"
        component={HotelNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={30} />,
        }}
        name="Profile"
        component={ProfileNavigator}
      />
    </Tab.Navigator>
  );
}
