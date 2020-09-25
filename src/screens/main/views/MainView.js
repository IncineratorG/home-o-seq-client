import React from 'react';
import {View, TouchableHighlight, Image} from 'react-native';
import {images} from '../../../assets/images';
import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';

const MainView = ({styles, model, controller}) => {
  const {serializedImage} = model.data;

  const {sendTestMessageHandler} = controller;

  let imagePrefix = 'data:image/jpg;base64,';
  let image = images.test_image;

  if (serializedImage) {
    SystemEventsHandler.onInfo({
      info: 'MainView: ' + serializedImage.length,
    });

    image = {uri: imagePrefix + serializedImage};
  } else {
    SystemEventsHandler.onInfo({info: 'MainView: 0'});
    image = images.test_image;
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.emptyFieldContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
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
