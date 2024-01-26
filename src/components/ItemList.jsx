import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import Item from "./Item";


const ItemList = () => {  
    
    const [product, setProducts] = useState([]);      
    const {category} = useParams();  
    var productsFiltered = [];
    

    useEffect(()=> {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");             

        getDocs(itemsCollection)
            .then((snapshot)=> {
                const docs = snapshot.docs.map((doc) => doc.data());            
                setProducts(docs);                         
            })              
        
    }, [])  
        

    switch(category) {            
        case "categoriaA" :
            productsFiltered = product.filter((item) => item.category === "categoriaA")            
        break;
        case "categoriaB" :                
            productsFiltered = product.filter((item) => item.category === "categoriaB") 
            break;
        case "categoriaC" :                
            productsFiltered = product.filter((item) => item.category === "categoriaC") 
            break;
        case "categoriaD" :                
            productsFiltered = product.filter((item) => item.category === "categoriaD") 
            break;
        default :
            productsFiltered = product;            
    }
    
    
    return(
        <div>
            <Item product={productsFiltered}/>            
        </div>
    )
}

export default ItemList;