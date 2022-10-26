import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice'


//recibe un objeto
export default configureStore({
    //objeto que guarda toda la información o estados globales:
    reducer: {
        products
    }
})