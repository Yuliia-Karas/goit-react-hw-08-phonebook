import { Button, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export default function Register() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
       console.log('hello');
      dispatch(register({ name, email, password }));
     
    };
    
  return (
    <>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '320px',
          margin: '0 auto',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="name"
          variant="standard"
          type="name"
          name="name"
        />
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          type="email"
          name="email"
        />
        <TextField
          id="standard-basic"
          label="password"
          variant="standard"
          type="password"
          name="password"
        />
        <Button style={{ marginTop: '20px' }} variant="outlined">
          Register
        </Button>
      </form>
    </>
  );
}
