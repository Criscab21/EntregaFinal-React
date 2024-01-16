import React, { createContext, useState } from "react";

export const ItemContext = createContext(null);

export const ItemProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);        

    
    return (
        <ItemContext.Provider value={[cart, setCart]}>
            {children}
        </ItemContext.Provider>
    );
};






