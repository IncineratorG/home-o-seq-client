import React from 'react';
import {View, TouchableHighlight, Image} from 'react-native';
import {images} from '../../../assets/images';

const MainView = ({styles, model, controller}) => {
  const {sendTestMessageHandler} = controller;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.emptyFieldContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={images.test_image} />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.sendTestMessageButtonContainer}>
          <TouchableHighlight
            style={styles.sendTestMessageButtonTouchable}
            underlayColor={'grey'}
            onPress={sendTestMessageHandler}>
            <View style={styles.sendTestMessageButton} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default MainView;
