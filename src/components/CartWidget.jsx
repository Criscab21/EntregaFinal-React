import React from 'react';
import {FaCartShopping } from "react-icons/fa6"
import { Link } from 'react-router-dom';

function CartWidget () {
    return (
        <div className="cart">
            <Link to={'/cart'}>
                <FaCartShopping />        
            </Link>
        </div>
    )
}

export default CartWidget;