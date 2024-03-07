import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link   } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const history = useNavigate();
  const err = () => {
    toast("Usuario já Existe");
  }
  const requisição = (a) => {
    
    const postData = {
      username: a.username,
      password: a.password
    };
    axios.post('https://apiproducts-rij8.onrender.com/user', postData)
  .then(response => {
    const jsonData = JSON.stringify(response.data);
    localStorage.setItem("token", jsonData);
    history('/product');
  }).catch(error => {
    err()
    console.log(error.response.data);
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
        <h3 className='title'>Crie seu usuario</h3>
        <div className='container_input'>

      <div className='position'>
        <label htmlFor="name">UserName:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </div>
      <div className='position'>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
            onChange={handleChange}
            placeholder='Password'
        />
      </div>
        </div>
        <div>
        <button className='buton_login' type="submit">Registrar</button>
        </div>
        <Link to="/">Voltar</Link>
        <ToastContainer />
     </form>
     </div>
  );
}

export default CreateLogin;
