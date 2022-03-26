import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { addUserInformation } from '../../store/userSlice';

import { ISignInScreenProps } from '../../interfaces/INavigation';

import { styles } from './style';

export const SignInScreen: React.FC<ISignInScreenProps> = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();

  const signIn = async () => {
    auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(result => {
        firestore()
          .collection('users')
          .doc(`${result.user.uid}`)
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
      });
  };

  return (
    <View style={styles.center}>
      <View style={styles.signInWrapper}>
        <Text style={styles.text}>Логин</Text>
        <TextInput style={styles.input} onChangeText={setUserEmail} value={userEmail} />
        <Text style={styles.text}>Пароль</Text>
        <TextInput style={styles.input} onChangeText={setUserPassword} value={userPassword} />
        <Button onPress={signIn} title="Войти" color="#0071BC" accessibilityLabel="Войти" />
      </View>
    </View>
  );
};
