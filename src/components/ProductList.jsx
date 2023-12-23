import React from "react";
import ItemCard from "./ItemCard";

const ProductList = ({product}) => {
    
    return (
        <div>
            {product.length > 0 && product.map((prod) => {
                return (
                    <ItemCard key={prod.id} product={prod}/>
                )
            })}
        </div>
    )
}

export default ProductList;