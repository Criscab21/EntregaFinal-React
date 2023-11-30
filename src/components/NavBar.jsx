import React from 'react';
import CartWidget from "./CartWidget";
import Category from './Category';


function NavBar () {
    
    return(
        <div className="navbar">
            <Category/>
            
            <button>Login</button>
            <CartWidget/>
        </div>
    )    
}

export default NavBar;