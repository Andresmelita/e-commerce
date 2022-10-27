import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/shared/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import LoginScreen from './pages/LoginScreen'
import ProductsID from './pages/ProductsID'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Purchases from './pages/Purchases'

function App() {



  // useEffect(()=> {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const data = {
  //     firstName: 'Andrés',
  //     lastName: 'Salazar',
  //     email: 'carlos.salazar.me@usach.cl',
  //     password: 'Cassette',
  //     phone: '6979384744',
  //     role: 'admin',
  //   }

  //   axios.post(URL, data)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [])



  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductsID />} />
        <Route path='/login' element={<LoginScreen />} />

        <Route element={<ProtectedRoutes />} >
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchases' element={<Purchases />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
