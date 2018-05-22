import React, { Component } from 'react';
import {Alert} from 'react-native';
import axios from "axios/index";


class RegisterImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlSalary: '',
            urlKTP: '',
            urlNPWP: '',
            urlPic: ''
        }
    }
}

const initialState = {
    urlSalary: '',
    urlKTP: '',
    urlNPWP: '',
    urlPic: ''
};



export const tryRegisterImageSalary = (authData) => {
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
                alert("uplod img salary sukses");
                //console.log(response)
                console.log("ini url img salary " + response.data.url);
                initialState.urlSalary = response.data.url;
            })
            .catch((error) => {
                alert("uplod img fail");
                console.log("Error " + error)
            })
    };
}

export const tryRegisterImageKtp = (authData) => {
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
                alert("uplod img ktp sukses");
                //console.log(response)
                console.log("ini url img ktp " + response.data.url);
                initialState.urlKTP = response.data.url;
            })
            .catch((error) => {
                alert("uplod img fail");
                console.log("Error " + error)
            })
    };
}

export const tryRegisterImageNPWP = (authData) => {
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
                alert("uplod img npwp sukses");
                //console.log(response)
                console.log("ini url img npwp " + response.data.url);
                initialState.urlNPWP = response.data.url;
            })
            .catch((error) => {
                alert("uplod img fail");
                console.log("Error " + error)
            })
    };
}

export const tryRegisterImagePic = (authData) => {
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
                alert("uplod img picture sukses");
                //console.log(response)
                console.log("ini url img pic " + response.data.url);
                initialState.urlPic = response.data.url;
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
                name: authData.fullname,
                username: authData.username,
                password: authData.password,
                email: authData.email,
                phoneNumber: authData.phone,
                ktpNumber: authData.email,
                address: authData.address,
                ktpAddress: authData.ktpAddress,
                province: authData.province,
                city: authData.city,
                village: authData.village,
                district: authData.district,
                workArea: authData.workArea,
                coupleName: authData.coupleName,
                numDependents: authData.numDependts,
                npwpNumber: authData.npwpNumber,
                postalCode: authData.postalCode,
                placeOfBirth: authData.placeOfBirth,
                dateOfBirth: authData.date,
                gender: authData.gender,
                maritalStatus: authData.marital,
                religion: authData.religion,
                work: authData.work,
                education: authData.education,
                salaryRange: authData.salary,
                salaryScan: initialState.urlSalary,
                ktpScan: initialState.urlKTP,
                npwpScan: initialState.urlNPWP,
                picture: initialState.urlPic,
            }),
        })
            .then(res => res.json())
            .then(parsedRes => {
                if(parsedRes.status == 400){
                    Alert.alert(
                        'Warning',
                        'DATA CANT BE EMPTY',
                        [
                            {text: 'OK'},
                        ],
                        { cancelable: false }
                    )
                } else {
                    alert("SUCCESS SENT ALL DATA");
                }
                console.log(parsedRes);
            })
            .catch(err => {
                console.log(err);
            })
    };
}