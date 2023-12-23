import React, { useEffect, useState } from "react";
import data from '../data/productos.json'
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";

const ItemListContainer = () => {  
    
    const [product, setProducts] = useState([]);
    const {category} = useParams();  
    

    const fetchInfo = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        }) 
    }


    useEffect(() => {
        fetchInfo()
            .then((res) => {
                if (category) {                    
                    setProducts(res.filter((prod) => prod.category === category))
                } else {                    
                    setProducts(res);
                }
            })
    }, [category]) 

    
    return(
        <div>
            <ProductList product={product}/>
        </div>
    )
}

export default ItemListContainer;