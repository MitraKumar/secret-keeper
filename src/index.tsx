import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { createFirestoreInstance } from "redux-firestore";
import {
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBTiyYkhyriDuI6jTYx6LTV39j9HVrfOzo",
  authDomain: "secret-keeper-16184.firebaseapp.com",
  projectId: "secret-keeper-16184",
  storageBucket: "secret-keeper-16184.appspot.com",
  messagingSenderId: "463971787611",
  appId: "1:463971787611:web:ce31683282e2d55afdf07e"
};
firebase.initializeApp(firebaseConfig)
firebase.firestore();

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
