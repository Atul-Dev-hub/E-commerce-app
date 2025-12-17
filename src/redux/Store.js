import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";

export const store=configureStore({
    reducer:{ // object of key value pair of name:slicename
        cart:CartSlice,
    }
});