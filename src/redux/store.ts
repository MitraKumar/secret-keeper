import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore';

const store = configureStore({
    reducer: combineReducers({
        firebase: firebaseReducer,
        firestore: firestoreReducer
    })
});

export type RootState = ReturnType<typeof store.getState>

export default store;