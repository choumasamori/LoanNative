import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Form, Item, Input, Button, Label} from 'native-base';
import Dashboard from "./src/screens/Dashboard/Dashboard";

class Login extends Component {
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
          <Button rounded primary full onPress={()=>this.props.navigation.navigate('Dashboard')}>
            <Text style={{color:'white'}}>Log In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

class Register extends Component {
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
  },
    Dashboard: {
      screen: Dashboard,
        navigationOptions: {
          title: "Dashboard"
        }
    }
});

class App extends Component {
  render() {
    return <RootStack />;
  }
}

export default App;