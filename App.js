import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Dashboard from "./src/screens/Dashboard/Dashboard";
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import Forgot from './src/screens/Forgot/Forgot';

const RootStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login",
      header: null,
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Register",
      header: null,
    }
  },
    Dashboard: {
      screen: Dashboard,
        navigationOptions: {
          title: "Dashboard"
        }
    },
    Forgot: {
      screen: Forgot,
        navigationOptions: {
          title: "Forgot",
          header:null,
        }
    }
});

class App extends Component {
  render() {
    return <RootStack />;
  }
}

export default App;