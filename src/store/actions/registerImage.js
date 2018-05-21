import {Alert} from 'react-native';
import axios from "axios/index";

export const tryRegisterImage = (authData) => {
    return dispatch => {
        var data = new FormData();
        data.append('file',
            {
                uri: authData.imageUri,
                name: authData.imageFilename,
                type: authData.imageType
            }
        )

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            timeout: 10000
        }

        axios.post('http://wf.dev.neo-fusion.com/tdfp2p/ws/registration/image', data, config)
            .then(response => {
                alert("uplod img sukses");
                console.log(response)
                console.log("ini url " + response.data.url);
            })
            .catch((error) => {
                alert("uplod img fail");
                console.log("Error " + error)
            })
    };
}

export const tryRegisterData = (authData) => {
    return dispatch => {
        let url = 'http://wf.dev.neo-fusion.com/tdfp2p/ws/registration/borrower';
        fetch(url, {
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
                    alert("sukses");
                }
                console.log(parsedRes);
            })
            .catch(err => {
                console.log(err);
            })
    };
}