import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import { getAllProducts } from '../store/slices/products.slice'
import home from './styles/home.css'

const Home = () => {

    const products = useSelector(state => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    

    console.log(products)

    return (
        <main className='home'>
            <div className='home_container'>
                {
                    products?.map(product => (
                        <CardProduct
                        key={product.id}
                        product={product}
                        />
                    ))
                }
            </div>
        </main>
    )
}

export default Home