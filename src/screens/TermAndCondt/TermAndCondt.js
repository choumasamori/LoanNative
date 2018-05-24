import React, { Component } from 'react';
import {AsyncStorage, Text, View} from 'react-native';

class TermAndCondt extends Component {


    async getToken () {
        let tok = await AsyncStorage.getItem("auth:token:lagi");

        console.log("ini token term : " + JSON.stringify(tok));

        //return tok;
    }

    componentDidMount() {
        this.getToken();
    }
    render(){
        return(
            <View>
                <Text>Term and Condt</Text>
            </View>
        );
    }
}

export default TermAndCondt;