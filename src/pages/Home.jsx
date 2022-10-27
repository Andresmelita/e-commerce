import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import InputSearch from '../components/home/InputSearch'
import { getAllProducts } from '../store/slices/products.slice'
import './styles/home.css'

const Home = () => {
    const [inputText, setInputText] = useState('')
    const [filterByText, setFilterByText] = useState()

    const products = useSelector(state => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    
    useEffect (()=>{

        if(inputText !== '' && products){
            const cb = (product) => product.title.toLowerCase().includes(inputText.toLowerCase().trim())
            setFilterByText(products.filter(cb))
        } else {
            setFilterByText(products)
        }

    }, [inputText, products])

    return (
        <main className='home'>
            <InputSearch
                setInputText={setInputText}
                inputText={inputText}
            />
            <div className='home_container'>
                {
                    filterByText?.map(product =>(
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