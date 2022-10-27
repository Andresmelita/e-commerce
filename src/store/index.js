import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice'
import cart from './slices/cart.slice'


//recibe un objeto
export default configureStore({
    //objeto que guarda toda la información o estados globales:
    reducer: {
        products,
        cart
    }
})