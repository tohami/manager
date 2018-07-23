// @flow
import React , { Component } from 'react' ;
import { View , Text } from 'react-native' ;
import {Provider} from 'react-redux' ;
import { createStore } from 'redux' ;
import firebase from 'firebase' ;
import reducers from './reducers';
import LoginForm from './components/LoginForm' ;

class App extends Component {
    static defaultProps: {};

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCgzmdN6QMLkrbNYvhcuBojZUNgD1VCQkQ',
            authDomain: 'manager-eba8c.firebaseapp.com',
            databaseURL: 'https://manager-eba8c.firebaseio.com',
            projectId: 'manager-eba8c',
            storageBucket: 'manager-eba8c.appspot.com',
            messagingSenderId: '714200934043'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>

            </Provider>
        );
    }
}

export default App ;
