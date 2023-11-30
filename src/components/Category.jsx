import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';


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
                    <DropdownItem>Herramientas</DropdownItem>
                    <DropdownItem>Computacion</DropdownItem>
                    <DropdownItem>Cocina</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default Category;

