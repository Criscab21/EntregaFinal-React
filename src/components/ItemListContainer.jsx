import React from 'react';
import { useState } from 'react';

function ItemListContainer (props) {
    const [buttonSaludar, setButtonSaludar] = useState(props.name);
    return (
        <div className='itemListContainer'>
            <button className='btnSaludar'
            onClick={() => setButtonSaludar('Panchito!')} 
            >
            Saludar   
            </button>
            <h4>Saludos, {buttonSaludar}</h4>        

        </div>        
    )
}

export default ItemListContainer;