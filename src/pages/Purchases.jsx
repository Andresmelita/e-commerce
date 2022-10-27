import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CardPurchase from '../components/purchases/CardPurchase'
import getConfig from '../utils/getConfig'

const Purchases = () => {

    const [purchases, setPurchases] = useState()

    useEffect (()=>{
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        axios.get(URL, getConfig())
            .then(res => setPurchases(res.data.data.purchases))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='purchases'>
            <h2 className='purchases_title'>My Purchases</h2>
            <div className='purchases_container'>
                {
                    purchases?.map(purchase => (
                        <CardPurchase
                            key={purchase.id}
                            purchase={purchase}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Purchases