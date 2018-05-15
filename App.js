import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Form, Item, Input, Button, Label} from 'native-base';

class Login extends React.Component {
  render() {
    return (
      <Container style={{backgroundColor: 'white'}}>
        <Content>
        <Form>
            <Item floatingLabel>
            <Label>Username/Email/Phone Number</Label>
              <Input/>
            </Item>
            <Item floatingLabel>
            <Label>Password</Label>
              <Input/>
            </Item>
          </Form>
          <Button rounded primary full onPress={()=>this.props.navigation.navigate('Register')}>
            <Text style={{color:'white'}}>Log In</Text>
          </Button>
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

const RootStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Register"
    }
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}