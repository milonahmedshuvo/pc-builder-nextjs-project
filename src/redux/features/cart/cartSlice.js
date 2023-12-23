const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cart : [ ]
}

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
       
    }
})



export const { } = cartSlice.actions 
export default cartSlice.reducer