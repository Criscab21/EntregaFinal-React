import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import ItemListContainer from './components/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react'
import ItemCardDetail from './components/ItemCardDetail';



function App() {  

  return (
    <BrowserRouter>
      <NavBar/>
            
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/catalogocompleto' element={<ItemListContainer/>}/>
        <Route exact path='/product/:id' element={<ItemCardDetail/>}/>                
        <Route exact path='/category/:category' element={<ItemListContainer/>}/>
        
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
