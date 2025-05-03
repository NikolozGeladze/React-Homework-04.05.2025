import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export default function Item({ products }) {
    return (
        <>
            {products.map((item, index) => (
                <Link key={index} className='link' to={`/cards/${item.name}`}>
                    <div className="item" key={index}>
                        <img src={`/src/assets/${item.name.replaceAll(' ', '-')}.webp`} alt={`${item.name} image`} />
                        <h2>{item.name}</h2>
                        <h2>{item.category}</h2>
                        <p><strong>{[...`$${item.price}`].join(' ')}</strong></p>
                    </div>  
                </Link>
            ))}
        </>
    )
}
