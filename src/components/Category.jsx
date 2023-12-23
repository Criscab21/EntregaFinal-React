import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import { Link } from 'react-router-dom';


function Category () {
    const [dropdown, setDropdown] = useState(false);
    const openCloseDropdown =() => {
        setDropdown(!dropdown);
    }
    
    return (
        
        <div className='category-navbar'>
            <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
                <DropdownToggle caret>
                    Categorias
                </DropdownToggle>
                
                <DropdownMenu header>
                    <Link to={'/catalogocompleto'}>
                        <DropdownItem>Catalogo Completo</DropdownItem>
                    </Link>                    
                    <Link to={'/category/categoryA'}>
                        <DropdownItem>categoryA</DropdownItem>
                    </Link>
                    <Link to={'/category/categoryB'}>
                        <DropdownItem>categoryB</DropdownItem>
                    </Link>
                    <Link to={'/category/categoryC'}>
                        <DropdownItem>categoryC</DropdownItem>
                    </Link> 
                    <Link to={'/category/categoryD'}>
                        <DropdownItem>categoryD</DropdownItem>
                    </Link>                     
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default Category;

