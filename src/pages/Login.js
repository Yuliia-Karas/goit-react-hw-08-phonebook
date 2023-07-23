import { Button, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export default function Login() {
  const dispatch = useDispatch();
  
  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    dispatch(logIn({ email, password }));
  };

    return (
      <>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '320px',
                    margin: '0 auto',
            marginTop:'30px',
          }}
          onSubmit={handleSubmit}
        >
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
          <Button type='submit' style={{ marginTop: '20px' }} variant="outlined">
            Log in
          </Button>
        </form>
      </>
    );
}
