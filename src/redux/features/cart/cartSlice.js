const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    products : [ ]
}

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
       addToProduct: (state, action) => {
        const exsisting = state.products.find((product) => product._id === action.payload._id )
        if(exsisting){
            exsisting.quantity = exsisting.quantity + 1 
        }else{
            state.products.push( {...action.payload, quantity: 1} )
        }
        
       },




    }
})



export const { addToProduct } = cartSlice.actions 
export default cartSlice.reducer