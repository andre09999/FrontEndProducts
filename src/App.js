import { Route, Routes } from 'react-router-dom';
import Home from  './pages/login.js'
import Products from './pages/Products.js'
import Register from './pages/createlogin.js'
import RegisterProduct from './pages/createProduct.js'
import EditProduct from './pages/editProduct';

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/product" element={<Products />} />
      <Route path="/register" element={<Register />} />
      <Route path="/registerProduct" element={<RegisterProduct />} />
      <Route path="/editproduct" element={ <EditProduct /> } />
    </Routes>
  )
}

export default App;