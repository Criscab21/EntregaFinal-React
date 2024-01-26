import React, { useContext } from 'react';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';
import { ItemContext } from '../context/ItemProvider';
import DropMenuCategory from './DropMenuCategory';


const NavBar = () => {    

    const [cart] = useContext(ItemContext);

    const quantity = cart.reduce((acc, curr) => {        
        return acc + curr.quantity;
    }, 0);

    return(
        <div className="navbar">
            <DropMenuCategory/>
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