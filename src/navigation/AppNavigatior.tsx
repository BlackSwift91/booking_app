import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

import { AuthNavigator } from './AuthNavigator';
import { RootNavigator } from './RootNavigator';

export const AppNavigatior: React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (initializing) {
    return null;
  }

  if (!user) {
    return <AuthNavigator />;
  }
  return <RootNavigator />;
};
