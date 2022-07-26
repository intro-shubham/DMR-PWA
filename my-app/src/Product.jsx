import React from 'react'
import './Product.css'

export default function Product({title, star, price, image }) {
  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(star).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
        </div>
        <img src={image} alt="products" />
        <button>Add to Basket</button>
    </div>
  )
}