import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, Modal, Pressable } from 'react-native';
import { useSelector } from 'react-redux';

import { IFirebaseRoom } from '../../interfaces/IFirebaseRoom';
import { IRoomScreen } from '../../interfaces/INavigation';

import { RootState } from '../../store/store';

import { styles } from './style';

import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';

export const RoomScreen: React.FC<IRoomScreen> = ({ route }) => {
  const [roomData, setRoomData] = useState<IFirebaseRoom | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const user = useSelector((state: RootState) => state.user);

  const bookRoom = () => {
    console.log('booked');
    if (user.balance && roomData && user.balance < roomData.price) {
      setModalVisible(true);
    }
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
          .then((res: any) => {
            setRoomData(res._data);
          });
      }
    })();
  }, [route.params.hotelId, route.params.id]);

  if (roomData) {
    return (
      <ScrollView style={styles.screenWrapper}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                У Вас недостаточно средств на счету. Прежде чем продолжить, пожалуйста пополните Ваш счет.
              </Text>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Закрыть</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View style={styles.roomInnerWrapper}>
          <Text style={styles.roomTitle}>{roomData.title}</Text>
          <Text style={styles.roomPrice}>{roomData.price}$</Text>
        </View>
        <Text style={styles.roomNumber}>Номер комнаты {roomData.number}</Text>
        <Text style={styles.roomDescription}>{roomData.description}</Text>
        <View style={styles.buttonWrapper}>
          <Button
            disabled={!roomData.isEmpty}
            onPress={bookRoom}
            title="Забронировать"
            color="#0071BC"
            accessibilityLabel="Забронировать"
          />
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.screenWrapper}>
      <ActivityIndicator size={46} color="#ffffff" />
    </View>
  );
};
