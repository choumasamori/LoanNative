import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import CekList from '../../img/ceklist.png';

const StartDashboard = () => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "KreditPro.Dashboard",
                    label: "Pro Dashboard",
                    title: "Pro Dashboard",
                    icon: CekList,
                },
                {
                    screen: "KreditPro.Forgot",
                    label: "Pro Forgot",
                    title: "Pro Forgot",
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