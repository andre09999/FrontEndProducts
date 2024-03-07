import React, {useState, useEffect} from 'react';
import Produtos from '../complements/produtos';
import Header from '../complements/header';
import { useNavigate, Link   } from 'react-router-dom';

const Products = () => {
  const [enter, setEnter] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')

  const history = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history('/')
    }
  }, [history]); 

  return (
    <div>
      <Header />
      <div className='container_products_input'>
      <input className='products_input' type='text' onChange={(a) => setEnter(a.target.value)} placeholder='Digite para Filtrar pelo nome' />
      <input className='products_input' type='text' onChange={(a) => setBrand(a.target.value)} placeholder='Digite para Filtrar pela marca' />
      <input className='products_input' type='text'  onChange={(a) => setModel(a.target.value)} placeholder='Digite para Filtrar pelo modelo'/>
      <Link to="/registerProduct" className="buton_login_cadastro">Cadastrar novo produto</Link>
      </div>
      
    <div className='container_Producs'>
      <div>
        <Produtos value={ enter} value1={brand} value2={model} />
      </div>
    </div>

    </div>
  );
}

export default Products;
