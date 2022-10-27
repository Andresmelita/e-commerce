import React from 'react'

const CardPurchase = ({purchase}) => {

    Object.hasOwnProperty()

    return (
        <article style={{border: '1px solid #aaa', marginBottom:'10px'}}>
            <header>{purchase.updatedAt}</header>
            <div>
                {
                    purchase.cart.products.map(product =>(
                        <section key={product.id}>
                            <h3>{product.title}</h3>
                            <div>{product.productsInCart.quantity}</div>
                            <div>${product.price}</div>
                        </section>
                    ))
                }
            </div>
        </article>
    )
}

export default CardPurchase