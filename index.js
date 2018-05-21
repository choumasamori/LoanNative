import React from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
//console.disableYellowBox = true;

const store = configureStore();

const RNRedux = () => {
    <Provider store={store}>
        <App />
    </Provider>
}

AppRegistry.registerComponent('P2PNative', () => RNRedux);
