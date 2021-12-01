import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
const Header = () => {

    const [{basket} , dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to="/">
            <img className="logo__header"  src='images/amazon_logo.png'  alt='Not Found' />
            </Link>
            <div className="header__search">
                <input className='header_search_input' type='text'></input>
                {/* Search Logo */}
                <SearchIcon className="header__searchIcon" />
            </div>


            <div className="header__nav">

                <div className="header__option">
                    <span className="header__optionLineOne">Hello , Guest</span>
                    <span className="header__optionLineTwo">SignIn</span>
                </div>
                
                <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
                </div>
                
                <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
                </div>

            </div>
        <Link to="/checkout">
            <div className="header__optionBasket">
                <ShoppingBasket />
                <span className="header__option_LineTwo header_basket_count">{basket?.length}</span>
            </div>
        </Link>
        </div>
    )
}

export default Header
