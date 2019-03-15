import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import './App.css';
import landscape from './landscape.jpg';
import portrait from './portrait.jpg';
import useInput from './useInput';
import WelcomeMessage from './WelcomeMessage';
import Auth from './Auth';

const App = () => {
  const [onInputChange, input] = useInput();
  const [todos, setTodos] = useState([]);
  const [background, setBackground] = useState(landscape);
  const [auth, setAuth] = useState('Anonymous');

  useEffect(() => {
    document.title = `You have ${todos.length} things to do`;
  }, [todos]);

  useEffect(() => {
    loadBackground();
    window.addEventListener('resize', loadBackground);
    return () => window.removeEventListener('resize', loadBackground);
  }, []);

  const loadBackground = () => {
    setBackground(window.innerWidth > 700 ? landscape : portrait);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTodos([...todos, input]);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <div className='App'>
        <h1 data-cy='header' className='App-logo'>
          ✨ SYSON ✨
          <br />
          🎣 HOOK 🎣‍
        </h1>
        <Auth />
        <WelcomeMessage />
        <form data-cy='add-form' className='App-add' onSubmit={handleSubmit}>
          <input value={input} onChange={onInputChange} />
          <button className='save'>Add</button>
        </form>
        <ul>
          {todos.map((todo, i) => (
            <li data-cy='item'>
              <span>{todo}</span>
            </li>
          ))}
        </ul>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
