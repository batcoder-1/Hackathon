import {configureStore} from '@reduxjs/toolkit';
import Authslice from "./Authslice";
const store=configureStore({
    reducer:{
        Auth:Authslice
    }
})
export default store;
