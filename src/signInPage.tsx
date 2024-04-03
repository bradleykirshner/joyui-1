import React, { useState } from 'react';
import { Typography, TextField, Button, Link, Box } from '@mui/material';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Perform sign-in logic here
    console.log('Signing in with:', email, password);

    // Reset form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <div style={{display: 'flex', justifyContent: 'center', boxShadow: '000000'}}>
        <form onSubmit={handleSignIn} style={{display: 'flex', flexDirection: 'column', gap: '16px', width: '100%'}}>
          <Typography variant="h4">Welcome to BoardX!</Typography>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" type="submit" style={{color: 'FF006B', justifyContent: 'center'}}>
            Log In
          </Button>
          <Link href="#" variant="body2" style={{backgroundColor: 'transparent', color: 'FF006B', justifyContent: 'center'}}>
            Forgot Password?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
