import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDoorOpen  } from 'react-icons/fa6';
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const history = useNavigate();

  const sair = () => {
    localStorage.clear();
    history('/')
  }
  const profile = () => {
    history('/profile')
 }
  return (
    <header>
      <h1 className='tittle_header'>TechCell</h1>
      
      <button onClick={() => profile()} className="profile">
        <label>Profile</label>
        <CgProfile /> 
      </button>
      <button onClick={() => sair()} className="exit">
        <label>Exit</label>
        <FaDoorOpen />
      </button>
  </header>
)
}

export default Header;