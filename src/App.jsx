import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {  

  return (
    <>
      <NavBar/>
      <ItemListContainer name='Nombre generico'/>
      <h2>Las ofertas de la semana</h2>      
    </>
  )
}

export default App
