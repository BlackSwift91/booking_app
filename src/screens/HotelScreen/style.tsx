import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
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
  },
  roomStyleDisabled: {
    backgroundColor: '#cccccc',
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
});
