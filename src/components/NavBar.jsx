import React from 'react';
import CartWidget from "./CartWidget";
import Category from './Category';
import { Link } from 'react-router-dom';


const NavBar = () => {
    
    return(
        <div className="navbar">
            <Category/>
            <Link to={'/'}>
                Home
            </Link>            
            <Link to='/cart'>
                <CartWidget/>            
            </Link>
        </div>
    )    
}

export default NavBar;