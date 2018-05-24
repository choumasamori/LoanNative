import React, { Component } from 'react';
import { View, Button, Text} from "native-base";
import { AsyncStorage } from 'react-native';
import Login from './../../startSingleScreen/Login/Login';



class History extends Component {
    constructor(){
        super();
        this.state = {
            now: '',
            exp: ''
        }
    }

    componentDidMount() {
        const date = new Date();
        const now = date.getHours() + '-' + date.getMinutes() + '-' +date.getSeconds();
        const exp = "13-32-00";

        alert(exp + '\n' + now);
        if(exp.toString() <= now.toString()){
            this.removeToken();
        }
    }


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