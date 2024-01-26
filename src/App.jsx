import React, { createContext, useContext, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ItemList from './components/ItemList';
import { ChakraProvider } from '@chakra-ui/react'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { ItemProvider } from './context/ItemProvider';

function App() {    
  return (

      <BrowserRouter>
        <ItemProvider>
          <NavBar/>
                
          <Routes>
            <Route exact path='/' element={<ItemList/>}/>
            <Route exact path='/catalogocompleto' element={<ItemList/>}/>
            <Route exact path='/product/:id' element={<ItemDetailContainer/>}/>                
            <Route exact path='/category/:category' element={<ItemList/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            
          </Routes>
        </ItemProvider>  
      </BrowserRouter>
            
  );
}

export default App
