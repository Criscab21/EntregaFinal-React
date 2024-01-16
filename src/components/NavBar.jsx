import React, { useContext } from 'react';
import CartWidget from "./CartWidget";
import Category from './Category';
import { Link } from 'react-router-dom';
import { ItemContext } from '../context/ItemProvider';


const NavBar = () => {    

    const [cart] = useContext(ItemContext);

    const quantity = cart.reduce((acc, curr) => {        
        return acc + curr.quantity;
    }, 0);

    return(
        <div className="navbar">
            <Category/>
            <Link to={'/'}>
                Home
            </Link>            
            <Link to='/cart'>
                <CartWidget/> {quantity}           
            </Link>                  
        </div>
    )    
}

export default NavBar;