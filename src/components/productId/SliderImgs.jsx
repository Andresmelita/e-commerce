import React, { useState } from 'react'
import sliderImgs from './styles/sliderImgs.css'

const SliderImgs = ({product}) => {

    const [indexImgs, setIndexImgs] = useState(0)

    const handlePrev = () => {
        if (indexImgs-1 <0){
            setIndexImgs(product.productImgs.length-1)
        } else {
        setIndexImgs(indexImgs-1)            
        }
    }

    const handleNext = () => {
        if (indexImgs+1 > product.productImgs.length-1){
            setIndexImgs(0)
        } else {
        setIndexImgs(indexImgs+1)            
        }
    }

    return (
        <div className='slider'>
            <button onClick={handlePrev} className='slider_prev'>◀</button>
            <div className='slider_static'>
                <div style={{transform: `translateX(calc(-${indexImgs} / 3*100%))`}} className='slider_move'>
                    {
                        product.productImgs.map(url => (
                            <div key={url} className='slider_img-container'>
                                <img className='slider_img' src={url} alt=""/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <button onClick={handleNext} className='slider_next'>▶</button>
        </div>
    )
}

export default SliderImgs