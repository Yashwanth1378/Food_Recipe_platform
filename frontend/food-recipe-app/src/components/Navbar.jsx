import React, { useState } from 'react';
import Modal from './Modal';
import { NavLink } from 'react-router-dom';
import InputForm from './InputForm';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false); 

  const checkLogin = () => {
    setIsOpen(true);
  };

  return (
    <>
      <header>
        <h2>Food Recipe</h2>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li>My Recipe</li>
          <li>Favourites</li>
          <li onClick={checkLogin}>
            <p className='login'>{isLogin ? "Logout" : "Login"}</p>
          </li>
        </ul>
      </header>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={setIsOpen} /> 
        </Modal>
      )}
    </>
  );
}
