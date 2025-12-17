import { createSlice } from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{ // This is an object containing the action creators for your slice
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
            return state.filter((item)=>item.id !== action.payload);
        },
    }
});

export const {add,remove}=CartSlice.actions;
export default CartSlice.reducer;
