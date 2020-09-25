import {StyleSheet} from 'react-native';

export const mainViewStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  emptyFieldContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'lightgrey',
    margin: 8,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  buttonsContainer: {
    backgroundColor: 'red',
    height: 50,
    alignSelf: 'stretch',
  },
  sendTestMessageButtonContainer: {
    backgroundColor: 'red',
    flex: 1,
  },
  sendTestMessageButtonTouchable: {
    flex: 1,
  },
  sendTestMessageButton: {
    flex: 1,
  },
});
