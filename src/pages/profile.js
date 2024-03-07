import React, { useEffect,useState} from 'react';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [name, setName] = useState({ OldUsername: '', oldPassword: '', newUsername: '', newPassword: '' })
  const [status, setStatus] = useState('');
  const history = useNavigate();
  const excluir = () => {
    const postData = {
      username: name.oldUsername,
      password: name.oldPassword,
    };
    const token = localStorage.getItem('token').replace(/[""]/g, '');
    axios.delete('https://apiproducts-rij8.onrender.com/user', postData,{
      headers: {
        Authorization: `${token}` 
      }
    }).then(response => {
    console.log(response);
        localStorage.clear()
        history("/")
  }).catch(error => {
    console.log(error);
    setStatus(error.response.data)
  });
}
  const requisição = (a) => {

    const postData = {
      newUsername: name.newUsername,
      newPassword: name.newPassword,
      oldUsername: a.oldUsername,
      oldPassword: a.oldPassword
    };
  
    const token = localStorage.getItem('token').replace(/[""]/g, '');
    axios.put('https://apiproducts-rij8.onrender.com/user', postData,{
      headers: {
        Authorization: `${token}` 
      }
    })
      .then(response => {
    console.log(response);

        localStorage.clear()
        history("/")
  }).catch(error => {
 
    setStatus(error.response.data)
  });
  }
  useEffect(() => {
    const token = localStorage.getItem('token').replace(/[""]/g, '');
    const decoded = jwtDecode(token);
    setName({oldUsername: decoded.data.username, oldPassword: decoded.data.password})
   
  }, []); 
  const handleSubmit = (e) => {
    e.preventDefault();
    requisição(name)
  };

  return (
    <div className='container_login'>
      <h1 className='title'>Profile</h1>
      <form onSubmit={handleSubmit} className='fomulario_profile'>
        <div className='container_input'>

      <div className='position'>
        <label htmlFor="name">UserName:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={name.oldUsername}
          onChange={({target})=> setName({...name, oldUsername: target.value})}
              placeholder="antigo Username"
              
        />
      </div>
      <div className='position'>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
              id="password"
              
          name="password"
          value={name.oldPassword}
            onChange={({target})=> setName({...name, oldPassword: target.value})}
            placeholder=' antigo Password'
        />
          </div>
          
      <div className='position'>
        <label htmlFor="name">UserName:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={name.newUsername}
          onChange={({target})=> setName({...name, newUsername: target.value})}
          placeholder="Username"
        />
      </div>
      <div className='position'>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={name.newPassword}
            onChange={({target})=> setName({...name, newPassword: target.value})}
            placeholder='Password'
        />
      </div>
        </div>
        <div className='conteiner_but_profile'>
        <button className='buton_login' type="submit">Atualizar</button>
      <button className='buton_login' onClick={() => excluir()}>Deletar Usuario</button>
        </div>
        <Link to="/product" className="buton_login_back">voltar</Link>
        <p className='advertencia'>{ status.message }</p>
     </form>
       

    </div>
  );
}

export default Profile;
