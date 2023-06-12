import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {

  return (
  <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a Ecommerce"/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:ItemId" element={<ItemListContainer/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
