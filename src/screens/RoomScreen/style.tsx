import { StyleSheet } from 'react-native';

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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 0,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#000000',
  },
  buttonWrapper: {
    marginBottom: 50,
  },
});
