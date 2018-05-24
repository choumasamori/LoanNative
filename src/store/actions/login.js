import React, { Component } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./uiLoading";
import StartDashboard from '../../screens/startDashboard/startDashboard';
import TermAndCondt from '../../startSingleScreen/TermAndCondt/TermAndCondt';


saveToken = async (token) => {
    await AsyncStorage.setItem("auth:token:lagi", token);
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
                    console.log("ini console log token:" + parsedRes.access_token);
                    console.log("ini console log expiry:" + parsedRes.expiry);

                    saveToken(parsedRes.access_token);
                    //AsyncStorage.setItem("auth:token:lagi", parsedRes.access_token);

                    // let tok = AsyncStorage.getItem("auth:token:lagi");
                    // console.log("auth token lagi : " + JSON.stringify(tok));
                    // console.log("auth token lagi tok acc token: " + tok.access_token);

                        tryStoreToken(parsedRes.access_token, parsedRes.expiry)
                    TermAndCondt();
                }
                tryGetToken();
                console.log(parsedRes);
            })
            .catch(err => {
                console.log(err);
                dispatch(uiStopLoading());
            })
    };
};

export const tryStoreToken = (token, expiryDate) => {
    return dispatch => {
        dispatch(trySetToken(token, expiryDate))
        AsyncStorage.setItem("auth:token", token);
        AsyncStorage.setItem("auth:expiryDate", expiryDate);
    }
}

export const tryGetToken = () => {
    const token = AsyncStorage.getItem("auth:token")
    console.log("ini try getToken " + token);
    //console.log("ini auth:token: " + AsyncStorage.getItem("auth:token"));
}

export const tryAutoSignIn = () => {
    return dispatch => {
        dispatch(tryGetToken())
            .then(token => {
                StartDashboard();
            })
            .catch(err => console.log("Failed to fetch token!"));
    };
};

export const trySetToken = (token, expiryDate) => {
    return {
        type: AUTH_SET_TOKEN,
        token: token,
        expiryDate: expiryDate
    };
};
