import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link   } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const history = useNavigate();

  const [status, setStatus] = useState('');

  const requisição = (a) => {
    
    const postData = {
      username: a.username,
      password: a.password
    };
    axios.post('https://apiproducts-rij8.onrender.com/user/login', postData)
      .then(response => {
    console.log(response);
    const jsonData = JSON.stringify(response.data);
    localStorage.setItem("token", jsonData);
    history('/product');
  }).catch(error => {
    console.log(error);
    setStatus(error.response.data)
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
      <h1 className='title'>StoreCell</h1>
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
        <button className='buton_login' type="submit">Login</button>
        <Link to="/register">Registrar</Link>
        <p className='advertencia'>{ status.message }</p>
     </form>
     </div>
  );
}

export default Login;
