import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import CekList from '../../img/ceklist.png';

const StartDashboard = () => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "KreditPro.History",
                    label: "Pro History",
                    title: "Pro History",
                    icon: CekList,
                },
                {
                    screen: "KreditPro.TermAndCondt",
                    label: "Pro Term",
                    title: "Pro Term",
                    icon: CekList,
                }
            ],
            tabsStyle: {
                tabBarSelectedButtonColor: "orange"
            },
            appStyle: {
                tabBarSelectedButtonColor: "orange"
            },
        });
};

export default StartDashboard;