import { configureStore } from "@reduxjs/toolkit";
import { AuthenticationReducer } from "./Authication";


export const store = configureStore({
    reducer:{
        authenticationReducer : AuthenticationReducer
    }
})