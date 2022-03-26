import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { IFirebaseRoom } from '../../interfaces/IFirebaseRoom';

import { IHotelScreen } from '../../interfaces/INavigation';

import { styles } from './style';

import firestore from '@react-native-firebase/firestore';

export const HotelScreen: React.FC<IHotelScreen> = ({ navigation, route }) => {
  const [rooms, setRooms] = useState<IFirebaseRoom[] | null>(null);

  useEffect(() => {
    (async () => {
      const roomsArray: IFirebaseRoom[] = [];
      if (route.params.hotelId) {
        firestore()
          .collection('hotels')
          .doc(`${route.params.hotelId}`)
          .collection('rooms')
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
              roomsArray.push(documentSnapshot.data());
            });
            setRooms(roomsArray);
            console.log(roomsArray);
          });
      }
    })();
  }, [route.params.hotelId]);

  const Item = ({ id, number, price, isEmpty, title }: IFirebaseRoom) => (
    <TouchableOpacity
      disabled={!isEmpty}
      onPress={() => {
        navigation.navigate('RoomScreen', {
          hotelId: route.params.hotelId,
          id: id,
        });
      }}
      activeOpacity={0.2}>
      <View style={[isEmpty ? styles.roomStyle : styles.roomStyleDisabled]}>
        <View style={styles.roomStyleInner}>
          <Text style={styles.roomName}>{number}</Text>
          <Text style={styles.roomTitle}>{title}</Text>
        </View>
        <Text style={styles.roomPrice}>{price}$</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }: { item: IFirebaseRoom }) => (
    <Item title={item.title} id={item.id} number={item.number} price={item.price} isEmpty={item.isEmpty} />
  );

  return (
    <View style={styles.screenWrapper}>
      <FlatList
        data={rooms}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Text style={styles.textTitle}>Доступные номера</Text>}
      />
    </View>
  );
};
