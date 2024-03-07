import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link   } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    price: '',
    brand: '',
    color: ''
  });

  const history = useNavigate();
  const err = () => {
    toast("Produto já Existe");
  }
  const err1 = () => {
    toast("usuario não autorizado favor efetuar login");
  }
  const check = () => {
    toast("Produto cadastrado");
  }
  const requisição = (a) => {
    const token = localStorage.getItem('token').replace(/[""]/g, '');
   
    const postData = {
      name: a.name,
      brand: a.brand,
      model: a.model,
      price: a.price,
      color: a.color
    };

    axios.post('https://apiproducts-rij8.onrender.com/product', postData,{
      headers: {
        Authorization: `${token}` 
      }
    })
  .then(response => {
    check()
    history('/product');
  }).catch(error => {
    if (error.response.status === 401) {
      return err1()
    }
    err()
    console.log(error.response);
  });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    requisição(formData)
  };

  return (

    <div className='container_login'>
      <form onSubmit={handleSubmit} className='fomulario_login'>
        <h3 className='title'>Crie seu Produtro</h3>
        <div className='container_input'>

      <div className='position'>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome"
        />
          </div>
          <div className='position'>
        <label htmlFor="name">Marca:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          placeholder="Marca"
        />
      </div>
      <div className='position'>
        <label htmlFor="password">Modelo:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={formData.model}
            onChange={handleChange}
            placeholder='Modelo'
        />
          </div>
          <div className='position'>
        <label htmlFor="price">Valor:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
            onChange={handleChange}
            placeholder='Preço'
        />
          </div>
          <div className='position'>
        <label htmlFor="price">Cor:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
            onChange={handleChange}
            placeholder='Cor'
        />
      </div>
        </div>
        <div>
        <button className='buton_login' type="submit">Registrar</button>
        </div>
        <Link to="/product"  className="buton_login">Voltar</Link>
        <ToastContainer />
     </form>
     </div>
  );
}

export default CreateProduct;
