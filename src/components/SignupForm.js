/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import FormContainer from './FormContainer';

const SignupForm = () => {
  return (
    <FormContainer>
      <View>
        <Text style={{fontSize: 50, color: 'black', fontWeight: 'bold'}}>
          Sign up
        </Text>
      </View>
    </FormContainer>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
});
