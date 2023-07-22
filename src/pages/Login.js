import { Button, TextField } from '@mui/material';
import React from 'react';

export default function Login() {
  return (
    <>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '320px',
          margin: '0 auto',
        }}
      >
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          type="email"
        />
        <TextField
          id="standard-basic"
          label="password"
          variant="standard"
          type="password"
        />
        <Button style={{ marginTop: '20px' }} variant="outlined">
          Login
        </Button>
      </form>
    </>
  );
}
