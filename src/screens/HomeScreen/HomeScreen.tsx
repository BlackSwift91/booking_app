import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './style';

import { IFirebaseHotel } from '../../interfaces/IFirebaseHotel';

import { IHomeScreen } from '../../interfaces/INavigation';

import firestore from '@react-native-firebase/firestore';

export const HomeScreen: React.FC<IHomeScreen> = ({ navigation }) => {
  const [hotels, setHotels] = useState<IFirebaseHotel[]>([]);

  const Item = ({ hotelName, hotelDescription, hotelId }: IFirebaseHotel) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('HotelScreen', {
          hotelId: hotelId,
        });
      }}
      activeOpacity={0.2}>
      <View style={styles.item}>
        <Text style={styles.hotelName}>{hotelName}</Text>
        <Text style={styles.hotelDescription}>{hotelDescription}</Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    (async () => {
      const hotelList: IFirebaseHotel[] = [];
      firestore()
        .collection('hotels')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(documentSnapshot => {
            hotelList.push(documentSnapshot.data());
          });
          setHotels(hotelList);
        });
    })();
  }, []);

  const renderItem = ({ item }: { item: IFirebaseHotel }) => (
    <Item hotelName={item.hotelName} hotelDescription={item.hotelDescription} hotelId={item.hotelId} />
  );

  return (
    <View style={styles.center}>
      <FlatList
        data={hotels}
        renderItem={renderItem}
        keyExtractor={item => item.hotelId}
        ListHeaderComponent={<Text style={styles.text}>Доступные отели</Text>}
      />
    </View>
  );
};
