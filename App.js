import React, { Component } from 'react';
import { Navigation } from "react-native-navigation";
import StartDashboard from "./src/screens/startDashboard/startDashboard";
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import Forgot from './src/screens/Forgot/Forgot';
import History from './src/screens/History/History';
import TermAndCondt from './src/screens/TermAndCondt/TermAndCondt';


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
    "KreditPro.startDashboard",
    () => StartDashboard,
);

Navigation.registerComponent(
    "KreditPro.Forgot",
    () => Forgot,
);

Navigation.registerComponent(
    "KreditPro.History",
    () => History,
);

Navigation.registerComponent(
    "KreditPro.TermAndCondt",
    () => TermAndCondt,
);

// Start a App
Navigation.startSingleScreenApp({
    screen: {
        screen: "KreditPro.Login",
        tabBarHidden: false
    }
});