import React from 'react';
import {View, TouchableHighlight, Image} from 'react-native';
import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';

const ApartmentStatusView = ({styles, model, controller}) => {
  const {testSend} = controller;

  const buttonHandler = () => {
    testSend();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainFieldContainer} />
      <View style={styles.buttonsContainer}>
        <TouchableHighlight
          style={styles.buttonsTouchable}
          onPress={buttonHandler}>
          <View style={styles.button} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ApartmentStatusView;
