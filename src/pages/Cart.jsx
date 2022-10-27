import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllProductsCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const Cart = () => {

    const [total, setTotal] = useState(0)

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAllProductsCart())
    })

    useEffect(()=> {
        if(cart){
            const result = cart.products.reduce((acc, cv)=>{
                return acc + Number(cv.price) * cv.productsInCart.quantity
            }, 0)
            setTotal(result)
        }            
    }, [cart])


    const handlePurchase = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const data = {
            street: "Green St. 1456",
            colony: "Southwest",
            zipCode: 12345,
            city: "USA",
            references: "Some references"
        }
        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(setCartGlobal(null))
                setTotal(0)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='cart'>
            <div className='cart_container'>
                {
                    cart?.products.map(product => (
                        <CartProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
            <h2>Total: ${total}</h2>
            <button onClick={handlePurchase} style={{fontSize:'30px'}}>Buy Now</button>
        </div>
    )
}

export default Cart