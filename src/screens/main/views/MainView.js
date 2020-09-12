import React from 'react';
import {View, TouchableHighlight} from 'react-native';

const MainView = ({styles, model, controller}) => {
  const {sendTestMessageHandler} = controller;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.emptyFieldContainer} />
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
