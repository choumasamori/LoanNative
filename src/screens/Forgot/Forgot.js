import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Forgot extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Forgot Password</Text>
        </View>
      );
    }
  }
  export default Forgot;