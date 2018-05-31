import React, { Component } from 'react';
import {Alert} from 'react-native';
import axios from "axios/index";

const initialState = {
    urlSalary: '',
    urlKTP: '',
    urlNPWP: '',
    urlPic: ''
};
  
  
export const tryRegisterImage = (authData1, authData2, authData3, authData4) => {
    return dispatch => {
        var data1 = new FormData();
        var data2 = new FormData();
        var data3 = new FormData();
        var data4 = new FormData();

        data1.append('file',
            {
                uri: authData1.imageUriSalary,
                name: authData1.imageFilenameSalary,
                type: authData1.imageTypeSalary
            }
        )

        data2.append('file',
            {
                uri: authData2.imageUriKtp,
                name: authData2.imageFilenameKtp,
                type: authData2.imageTypeKtp
            }
        )

        data3.append('file',
            {
                uri: authData3.imageUriNpwp,
                name: authData3.imageFilenameNpwp,
                type: authData3.imageTypeNpwp
            }
        )

        data4.append('file',
            {
                uri: authData4.imageUriPic,
                name: authData4.imageFilenamePic,
                type: authData4.imageTypePic
            }
        )

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            timeout: 10000
        }
        
          
        axios.post('http://wf.dev.neo-fusion.com/tdfp2p/ws/registration/image', data1, config)
            .then(response => {
                //console.log(response)
                console.log("ini url img salary " + response.data.url);
                initialState.urlSalary = response.data.url;
            })
            .catch((error) => {
                alert("uplod img fail salary");
                console.log("Error " + error)
            })

        axios.post('http://wf.dev.neo-fusion.com/tdfp2p/ws/registration/image', data2, config)
            .then(response => {
                //console.log(response)
                console.log("ini url img ktp " + response.data.url);
                initialState.urlKTP = response.data.url;
            })
            .catch((error) => {
                alert("uplod img fail ktp");
                console.log("Error " + error)
            })

        axios.post('http://wf.dev.neo-fusion.com/tdfp2p/ws/registration/image', data3, config)
            .then(response => {
                //console.log(response)
                console.log("ini url img npwp " + response.data.url);
                initialState.urlNPWP = response.data.url;
            })
            .catch((error) => {
                alert("uplod img fail npwp");
                console.log("Error " + error)
            })

        axios.post('http://wf.dev.neo-fusion.com/tdfp2p/ws/registration/image', data4, config)
            .then(response => {
                alert("success sent all image");
                //console.log(response)
                console.log("ini url img pic " + response.data.url);
                initialState.urlPic = response.data.url;
            })
            .catch((error) => {
                alert("uplod img fail pic");
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