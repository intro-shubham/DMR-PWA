import React from 'react';
import "./Home.css";
import Product from './Product';

export default function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/GW/ACQ/IN-PD-22-teaser-GW_3000x1200_2._CB631707276_.jpg' alt="lord of the rings" />
            <div className="home__row">
              <Product title="any start up and product info" price={29.99} star={5} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrJk4R2EXQs49hjQvW4Vnk_NU8Zmtb9wNHA&usqp=CAU' />
              <Product title="any start up and product info" price={29.99} star={5} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrJk4R2EXQs49hjQvW4Vnk_NU8Zmtb9wNHA&usqp=CAU' />
            </div>
            <div className="home__row">
              <Product title="any start up and product info" price={29.99} star={5} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrJk4R2EXQs49hjQvW4Vnk_NU8Zmtb9wNHA&usqp=CAU' />
              <Product title="any start up and product info" price={29.99} star={5} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrJk4R2EXQs49hjQvW4Vnk_NU8Zmtb9wNHA&usqp=CAU' />
              <Product title="any start up and product info" price={29.99} star={5} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrJk4R2EXQs49hjQvW4Vnk_NU8Zmtb9wNHA&usqp=CAU' />
            </div>
            <div className="home__row">
              <Product title="any start up and product info" price={29.99} star={5} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrJk4R2EXQs49hjQvW4Vnk_NU8Zmtb9wNHA&usqp=CAU' />
            </div>
        </div>
    </div>
  )
}
