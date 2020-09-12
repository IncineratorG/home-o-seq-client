import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const AppLoading = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconOuterContainer}>
        <View style={styles.iconInnerContainer}>
          <Text>Load...</Text>
        </View>
      </View>
      <View style={styles.nameOuterContainer}>
        <View style={styles.nameInnerContainer}>
          <Text style={styles.appName}>HomeOSeqClient</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  iconOuterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconInnerContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appIcon: {
    transform: [{scale: 1.0}],
  },
  nameOuterContainer: {
    height: 50,
  },
  nameInnerContainer: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    color: 'lightgrey',
  },
});

export default AppLoading;
