const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    products : [ ],
    pcproducts: [ ],
    totaltk: 0,
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
            state.products.push( {...action.payload, quantity: 1 } )
        }


        state.totaltk =  state.totaltk + parseInt(action.payload.tk)
       },

       decreaseProduct: (state, action) => {
        const exsisting = state.products.find((product) => product._id === action.payload._id )
        if(exsisting && exsisting.quantity > 1 ){
            exsisting.quantity = exsisting.quantity - 1
            state.totaltk = state.totaltk - parseInt(action.payload.tk)
        }  
       },

       removeProduct: (state, action ) => {
        state.products = state.products.filter((product) => product._id !== action.payload._id )
        state.totaltk = state.totaltk - parseInt(action.payload.tk) * action.payload.quantity
       },







    //    pc builder button inside three products 
    pcproductsAdd : (state, action) => {
        const exsite =state.pcproducts.find((product)=> product.id !== action.payload.id)     
                state.pcproducts.push(action.payload)                        
    }


    


    }
})



export const { addToProduct, decreaseProduct, removeProduct, pcproductsAdd  } = cartSlice.actions; 
export default cartSlice.reducer;