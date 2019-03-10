import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import ThemeContext from './ThemeContext';
import landscape from './landscape.jpg';
import portrait from './portrait.jpg';

const useInput = () => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return [handleChange, value];
};

const App = () => {
  const [onInputChange, input] = useInput();
  const [onNameChange, name] = useInput();
  const [todos, setTodos] = useState([]);
  const [background, setBackground] = useState(landscape);
  const theme = useContext(ThemeContext);

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
    <div
      className={`App ${theme}`}
      style={{ backgroundImage: `url('${background}')` }}
    >
      <label>Your name</label>
      <input value={name} onChange={onNameChange} />
      <h1 data-cy='header' className='App-logo'>
        ✨ SYSON ✨
        <br />
        🎣 HOOK 🎣‍
      </h1>
      <h2>Welcome {name}</h2>
      <form data-cy='add-form' className='App-add' onSubmit={handleSubmit}>
        <input value={input} onChange={onInputChange} />
        <button className='save'>Add</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <span>{todo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
