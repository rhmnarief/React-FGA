import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect,useState } from 'react';

const Input = ({name, placeholder, ...rest}) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value)
  };
  useEffect(() => {

  }, [value]);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          name = {name}
          value = {value}
          placeholder = {placeholder}
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          onChange={handleChange}
        />
  </div>
  </Box>
)
}

export default Input