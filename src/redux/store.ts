import {configureStore} from "@reduxjs/toolkit";
import {diagram} from './reducers'
export const store = configureStore({
    reducer:{
        diagram
    }
})