import React, { useState, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';

import { AuthNavigator } from './AuthNavigator';
import { RootNavigator } from './RootNavigator';
import { addUserInformation } from '../store/userSlice';

export const AppNavigatior: React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const dispatch = useDispatch();

  async function onAuthStateChanged(userData: FirebaseAuthTypes.User | null) {
    setUser(userData);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    (async () => {
      if (user) {
        await firestore()
          .collection('users')
          .doc(`${user.uid}`)
          .get()
          .then(async (res: any) => {
            await dispatch(
              addUserInformation({
                userId: res._data.balance,
                firstName: res._data.firstName,
                middleName: res._data.middleName,
                lastName: res._data.lastName,
                balance: res._data.balance,
              }),
            );
          })
          .catch(error => console.log('ERROR', error));
      }
    })();
  }, [dispatch, user]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  }

  if (initializing) {
    return null;
  }

  if (!user) {
    return <AuthNavigator />;
  }
  return <RootNavigator />;
};
