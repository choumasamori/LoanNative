import {Alert} from 'react-native';

export const tryLogin = (authData) => {
    return dispatch => {
        let url = 'http://wf.dev.neo-fusion.com/tdfp2p/ws/login';
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
};