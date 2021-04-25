import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Credential { name: string, secret: string }
const intialState: Credential[] = [];

const credentialSlice = createSlice({
    name: "todos",
    initialState: intialState,
    reducers: {
        create: (state, action: PayloadAction<{name: string, secret: string}>) => {
            state.push(action.payload);
        },
    }
});

export const { create } = credentialSlice.actions;

export default credentialSlice.reducer;