import React from 'react'
import './Checkout.css'

export default function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="advertisement" className="checkout__ad" />
        </div>
        <div>
            <h2 className="checkout__title"> Your Shopping Basket </h2>
            {/* ShoppingItem */}
            {/* ShoppingItem */}
            {/* ShoppingItem */}
            {/* ShoppingItem */}
            {/* ShoppingItem */}
        </div>
        <div className="checkout__right">
            <h2>Your Sub Total </h2>
        </div>
    </div>
    )
}
