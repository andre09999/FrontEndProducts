import React, { useEffect,useState} from 'react';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [name, setName] = useState({ username: '', password: '' })
  const [status, setStatus] = useState('');
  const excluir = () => {
    const postData = {
      username: name.username,
      password: name.password
    };
    axios.delete('https://apiproducts-rij8.onrender.com/user', postData)
      .then(response => {
    console.log(response);
    const jsonData = JSON.stringify(response.data);
    localStorage.setItem("token", jsonData);
    
  }).catch(error => {
    console.log(error);
    setStatus(error.response.data)
  });
}
  const requisição = (a) => {
    
    const postData = {
      username: a.username,
      password: a.password
    };
    axios.put('https://apiproducts-rij8.onrender.com/user', postData)
      .then(response => {
    console.log(response);
    const jsonData = JSON.stringify(response.data);
    localStorage.setItem("token", jsonData);
    
  }).catch(error => {
    console.log(error);
    setStatus(error.response.data)
  });
  }
  useEffect(() => {
    const token = localStorage.getItem('token').replace(/[""]/g, '');
    const decoded = jwtDecode(token);
    setName(decoded.data)
   
  }, []); 
  const handleSubmit = (e) => {
    e.preventDefault();
    requisição(name)
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setName({
      ...name,
      [name]: value
    });
  };
  return (
    <div className='container_login'>
      <form onSubmit={handleSubmit} className='fomulario_login'>
      <h1 className='title'>Profile</h1>
        <div className='container_input'>

      <div className='position'>
        <label htmlFor="name">UserName:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={name.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </div>
      <div className='position'>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={name.password}
            onChange={handleChange}
            placeholder='Password'
        />
      </div>
        </div>
        <button className='buton_login' type="submit">Atualizar</button>
        <Link to="/product" className="buton_login">voltar</Link>
        <p className='advertencia'>{ status.message }</p>
     </form>
       
     <button className='buton_login' onClick={()=> excluir()}>Deletar Usuario</button>
    </div>
  );
}

export default Profile;
