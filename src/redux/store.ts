import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todoReducer from './credentials/index';

const store = configureStore({
    reducer: {
        credential: todoReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store;