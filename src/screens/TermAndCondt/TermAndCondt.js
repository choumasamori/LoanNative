import React, { Component } from 'react';
import {AsyncStorage, Text, View} from 'react-native';

class TermAndCondt extends Component {

    componentDidMount() {
        let tok = AsyncStorage.getItem("auth:token:lagi");
        console.log("auth token lagi : " + JSON.stringify(tok));
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