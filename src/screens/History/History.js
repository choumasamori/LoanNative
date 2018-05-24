import React, { Component } from 'react';
import { View, Button, Text} from "native-base";
import { AsyncStorage } from 'react-native';
import Login from './../../startSingleScreen/Login/Login';



class History extends Component {
    async removeToken () {
        await AsyncStorage.removeItem("auth:token");
        Login();
    }

    render(){
        return(
          <View>
              <Text>History</Text>
              <Button onPress={ this.removeToken }>
                  <Text>Log Out</Text>
              </Button>
          </View>
        );
    }
}
export default History;