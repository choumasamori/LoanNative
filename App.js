import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Item, Input } from 'native-base';

class Login extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Item>
            <Input placeholder="Email" />
          </Item>
        </Content>
      </Container>
    );
  }
}

class Register extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Register</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Login: Login,
    Register: Register,
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}