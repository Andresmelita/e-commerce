import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import ProductsID from './pages/ProductsID'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Purchases from './pages/Purchases'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductsID/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/purchases' element={<Purchases/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
