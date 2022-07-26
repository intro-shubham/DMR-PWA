import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="amazon logo" />
        <div className='header_search'>
            <input className='header__search_input' type="text" />
            <SearchIcon className='header__search__icon' />
            {/* LOGO */}
        </div>
        <div className="header__nav">
            <div className="header__option">
                <span className='header__option__line1'>Hello Guest</span>
                <span className='header__option__line2'>Sign In</span>
            </div>
            <div className="header__option">
                <span className='header__option__line1'>Returns</span>
                <span className='header__option__line2'>& Orders</span>
            </div>
            <div className="header__option">
                <span className='header__option__line1'>Your</span>
                <span className='header__option__line2'>Prime</span>
            </div>
            <div className="header__basket__item">
                <ShoppingBasketIcon />
                <span className='header__option__line2 header__basket__count'>0</span>
            </div>
        </div>
    </div>
  )
}
export default Header