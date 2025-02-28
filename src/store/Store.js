import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../slice/Slice"
const store=configureStore({
    reducer:{
       userInfo:userReducer,

       
    },
})
export default store;