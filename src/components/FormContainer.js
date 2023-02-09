/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

const FormContainer = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default FormContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
});
