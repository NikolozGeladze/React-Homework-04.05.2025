import React from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'

export default function Details({ products }) {
    const { title } = useParams()

    return (
        <>
            <div className="details">
                {
                    products.filter(item => item.name === title).map((item, index) => (
                        <div key={index} className="details-card">
                            <img src={`/src/assets/${item.name}.webp`} alt={`${item.name} image`} />
                            <div className="item-details-part">
                                <h1>{item.name}</h1>
                                <h1 className='category'>{item.category}</h1>
                                <h2>{[...`$${item.price}`].join(' ')}</h2>
                                <div className="btns">
                                    <button>Check Out</button>
                                    <button className='add-to-cart-btn'>Add To Cart <i className="fa-solid fa-cart-shopping"></i></button>
                                </div>
                                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                            </div>
                        </div>
                    ))
                }
                <h1 className='similar-products-text'>Similar Products</h1>
                <div className="similar-products">
                    <Item products={products.filter(item => item.name !== title)} />
                </div>
            </div>
        </>
    )
}
