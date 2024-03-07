import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDoorOpen  } from 'react-icons/fa6';

const Header = () => {
  const history = useNavigate();

  const sair = () => {
    localStorage.clear();
    history('/')
 }
  return (
    <header>
      <h1>StoreCell</h1>
      <button onClick={() => sair()} className="exit">
        <label>Exit</label>
        <FaDoorOpen />
      </button>
  </header>
)
}

export default Header;