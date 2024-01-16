import React, { createContext, useContext, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react'
import ItemCardDetail from './components/ItemCardDetail';
import Cart from './components/Cart';
import { ItemProvider } from './context/ItemProvider';

function App() {    
  return (

      <BrowserRouter>
        <ItemProvider>
          <NavBar/>
                
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route exact path='/catalogocompleto' element={<ItemListContainer/>}/>
            <Route exact path='/product/:id' element={<ItemCardDetail/>}/>                
            <Route exact path='/category/:category' element={<ItemListContainer/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            
          </Routes>
        </ItemProvider>  
      </BrowserRouter>
            
  );
}

export default App
