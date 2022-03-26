import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { IProfileScreen } from '../../interfaces/INavigation';
import { IUserState } from '../../interfaces/IUserState';
import { RootState } from '../../store/store';

import { styles } from './style';

export const ProfileScreen: React.FC<IProfileScreen> = () => {
  const [userData, setUserData] = useState<IUserState>();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    (async () => {
      setUserData(user);
    })();
  }, [user]);

  return (
    <View style={styles.screenWrapper}>
      <Text style={styles.userInfo}>
        {userData?.lastName} {userData?.firstName} {userData?.middleName}
      </Text>
      <Text style={styles.userBalance}>Текущий баланс {userData?.balance}$</Text>
    </View>
  );
};

