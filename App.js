/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import FormHeader from './src/components/FormHeader';
import FormSelectorBtn from './src/components/FormSelectorBtn';
import LoginForm from './src/components/LoginForm';
import SignupForm from './src/components/SignupForm';
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 60}}>
        <View style={{height: 80}}>
          <FormHeader
            leftHeading="Welcome"
            rightHeading="Back"
            subHeading="YouTube Task Manager"
          />
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
          <FormSelectorBtn
            style={styles.borderLeft}
            backgroundColor="rgba(27,27,51,1)"
            title="Login"
          />
          <FormSelectorBtn
            style={styles.borderRight}
            backgroundColor="rgba(27,27,51,0.4)"
            title="Login"
          />
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}>
          <LoginForm />
          <SignupForm />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    height: 300,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  txtDesign: {
    color: '#000',
    fontSize: 24,
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: 'silver',
    borderWidth: 5,
    marginBottom: 30,
  },
  txtName: {
    borderColor: 'red',
    borderWidth: 1,
    width: '80%',
    height: 40,
    borderRadius: 30,
    marginBottom: 15,
    paddingLeft: 15,
  },
});
