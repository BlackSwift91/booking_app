import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';

import { IFirebaseRoom } from '../../interfaces/IFirebaseRoom';
import { IRoomScreen } from '../../interfaces/INavigation';

// import { styles } from './style';

import firestore from '@react-native-firebase/firestore';

export const RoomScreen: React.FC<IRoomScreen> = ({ route }) => {
  const [roomData, setRoomData] = useState<IFirebaseRoom | null>(null);

  const bookRoom = () => {
    console.log('booked');
  };

  useEffect(() => {
    (async () => {
      if (route.params.id) {
        firestore()
          .collection('hotels')
          .doc(`${route.params.hotelId}`)
          .collection('rooms')
          .doc(`${route.params.id}`)
          .get()
          .then(res => {
            setRoomData(res._data);
          });
      }
    })();
  }, [route.params.hotelId, route.params.id]);

  if (roomData) {
    return (
      <View style={styles.screenWrapper}>
        <View style={styles.roomInnerWrapper}>
          <Text style={styles.roomTitle}>{roomData.title}</Text>
          <Text style={styles.roomPrice}>{roomData.price}$</Text>
        </View>
        <Text style={styles.roomNumber}>Номер комнаты {roomData.number}</Text>
        <Text style={styles.roomDescription}>{roomData.description}</Text>
        <Button
          disabled={!roomData.isEmpty}
          onPress={bookRoom}
          title="Забронировать"
          color="#0071BC"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }

  return (
    <View style={styles.screenWrapper}>
      <ActivityIndicator size={46} color="#ffffff" />
    </View>
  );
};

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  roomInnerWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  roomTitle: {
    color: 'black',
    fontSize: 18,
  },
  roomDescription: {
    marginTop: 10,
    color: 'black',
    fontSize: 14,
    marginBottom: 20,
  },
  roomNumber: {
    marginTop: 5,
    color: 'black',
    fontSize: 14,
  },
  roomStyle: {
    alignItems: 'center',
  },
  roomStyleDisabled: {
    backgroundColor: '#cccccc',
  },
  roomName: {
    fontSize: 20,
    color: '#000000',
  },
  roomPrice: {
    fontSize: 18,
    color: '#000000',
    paddingLeft: 10,
  },
});
