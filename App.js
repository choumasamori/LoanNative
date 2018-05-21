import React, { Component } from 'react';
import { Navigation } from "react-native-navigation";
import Dashboard from "./src/screens/Dashboard/Dashboard";
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import Forgot from './src/screens/Forgot/Forgot';

import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

const store = configureStore();


// Register Screens
Navigation.registerComponent(
    "KreditPro.Login",
    () => Login,
    store,
    Provider
);

Navigation.registerComponent(
    "KreditPro.Register",
    () => Register,
    store,
    Provider
);

Navigation.registerComponent(
    "KreditPro.Dashboard",
    () => Dashboard,
);

// Start a App
Navigation.startSingleScreenApp({
    screen: {
        screen: "KreditPro.Login",
        tabBarHidden: false
    }
});