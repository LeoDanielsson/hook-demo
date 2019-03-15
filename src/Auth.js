import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import useInput from './useInput';

export default () => {
  const [userName, userNameChange] = useInput();
  const { logIn } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    logIn(userName);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input value={userName} onChange={userNameChange} />
        <button type='submit'>Logga in</button>
      </form>
    </>
  );
};
