import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

export default function Product({ title, star, price, image }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        title: title,
        star: star,
        price: price,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(star)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="products" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
