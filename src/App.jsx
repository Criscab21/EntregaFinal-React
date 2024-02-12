import React, { createContext, useContext, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import Cart from './components/Cart';
import { CartContext } from './context/CartContext';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';

function App() {    
  return (

      <BrowserRouter>
        <CartContext>
          <NavBar/>
                
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route exact path='/catalogocompleto' element={<ItemListContainer/>}/>
            <Route exact path='/product/:id' element={<ItemDetail/>}/>                
            <Route exact path='/category/:category' element={<ItemListContainer/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            
          </Routes>
        </CartContext>  
      </BrowserRouter>
            
  );
}

export default App
