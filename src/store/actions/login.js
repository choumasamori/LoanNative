import React, { Component } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { uiStartLoading, uiStopLoading } from "./uiLoading";
import StartDashboard from '../../screens/startDashboard/startDashboard';


//const FIX_TOKEN = AsyncStorage.getItem("auth:token");

saveToken = async (token) => {
    await AsyncStorage.setItem("auth:token", token);
}


export const tryLogin = (authData) => {
    return dispatch => {
        dispatch(uiStartLoading());
        let url = 'http://wf.dev.neo-fusion.com/tdfp2p/ws/login';
        return fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: authData.username,
                password: authData.password,
            }),
        })
            .then(res => res.json())
            .then(parsedRes => {
                dispatch(uiStopLoading());
                if(parsedRes.status == 401 || parsedRes.status == 400){
                    Alert.alert(
                        'Warning',
                        'Wrong Account',
                        [
                            {text: 'OK'},
                        ],
                        { cancelable: false }
                    )
                } else {
                    saveToken(parsedRes.access_token);
                    //alert(JSON.stringify(FIX_TOKEN));
                    StartDashboard();
                }
            })
            .catch(err => {
                console.log(err);
                dispatch(uiStopLoading());
            })
    };
};
