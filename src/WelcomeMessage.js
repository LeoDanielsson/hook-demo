import React, { useContext } from 'react';
import AuthContext from './AuthContext';

export default () => {
  const { auth } = useContext(AuthContext);
  return <h2>Welcome {auth}</h2>;
};
