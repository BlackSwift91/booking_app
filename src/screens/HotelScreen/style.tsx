import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  textTitle: {
    color: 'black',
    padding: 10,
  },
  roomStyle: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ddffdd',
  },
  roomStyleDisabled: {
    backgroundColor: '#ffdddd',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  roomStyleInner: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  roomName: {
    fontSize: 20,
    color: '#000000',
  },
  roomTitle: {
    fontSize: 20,
    color: '#000000',
    paddingLeft: 10,
  },
  roomPrice: {
    fontSize: 20,
    color: '#000000',
    paddingLeft: 10,
  },
  noRooms: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 14,
    color: '#ff0000',
  },
});
