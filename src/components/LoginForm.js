/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import FormContainer from './FormContainer';

export default class LoginForm extends Component {
  render() {
    return (
      <FormContainer>
        <View>
          <Text style={{fontSize: 50, color: 'black', fontWeight: 'bold'}}>
            Login
          </Text>
        </View>
      </FormContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: Dimensions.get('window').width,
  },
});
