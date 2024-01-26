import React from "react";
import ItemDetail from "./ItemDetail";

const Item = ({product}) => {
    
    return (
        <div>
            {product.length > 0 && product.map((prod) => {
                return (
                    <ItemDetail key={prod.id} product={prod}/>
                )
            })}
        </div>
    )
}

export default Item;