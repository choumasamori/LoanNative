import React, { Component } from 'react';
import { View, Button, Text} from "native-base";
import { AsyncStorage } from 'react-native';
import Login from './../../startSingleScreen/Login/Login';


class Dashboard extends Component {

    constructor(){
        super();

        this.state = {
            name: '',
            role: '',
            username: '',
            status: '',
        }
    }

    // componentDidMount() {
    //     const date = new Date();
    //     const now = date.getHours() + '-' + date.getMinutes() + '-' +date.getSeconds();
    //     const exp = "14-32-00";
    //
    //     alert(exp + '\n' + now);
    //     if(exp.toString() <= now.toString()){
    //         this.removeToken();
    //     }
    // }

    async componentDidMount() {
        const FIX_TOKEN = await AsyncStorage.getItem("auth:token");

        fetch('http://wf.dev.neo-fusion.com/tdfp2p/ws/user/profile', {
            method: 'GET',
            headers: {
                'Access-Token': FIX_TOKEN,
                'Content-Type': 'application/json',
            }
        })
            .then((results) => results.json())
            .then((data)=>{
                this.setState({
                    name: data.name,
                    role: data.role,
                    username: data.username,
                    status: data.status,
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }


    async removeToken () {
        await AsyncStorage.removeItem("auth:token");
        Login();
    }

    render(){
        return(
          <View>
              <Text style={styles.textDashboard}>Dashboard</Text>

              <Text>Name: {this.state.name}</Text>
              <Text>Role: {this.state.role}</Text>
              <Text>Username: {this.state.username}</Text>
              <Text>Status: {this.state.status}</Text>

              <Button onPress={ this.removeToken } style={styles.buttonLogout}>
                  <Text>Log Out</Text>
              </Button>
          </View>
        );
    }
}

const styles = {
    textDashboard: {
        marginTop: 10,
        marginBottom: 30
    },
    buttonLogout:{
        marginTop: 10,
    }
}
export default Dashboard;