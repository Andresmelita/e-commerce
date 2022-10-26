import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/productId/ProductInfo'
import SimilarProduct from '../components/productId/SimilarProduct'

const ProductsID = () => {

    const [product, setProducts] = useState()

    const {id} = useParams()


    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
            .then(res => setProducts(res.data.data.product))
            .catch(err => console.log(err))
    }, [id])

    

    return (
        <div>
            <ProductInfo product={product}/>
            <SimilarProduct product={product}/>
        </div>
    )
}

export default ProductsID