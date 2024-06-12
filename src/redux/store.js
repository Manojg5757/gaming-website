import { configureStore } from "@reduxjs/toolkit";
import CartSlice,{cartMiddleware} from "./cartSlice.js";


const store = configureStore({
    reducer:{
        cart:CartSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartMiddleware),
})

export default store;