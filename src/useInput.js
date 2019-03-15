import { useState } from 'react';

export default function useInput() {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return [value, handleChange];
}
