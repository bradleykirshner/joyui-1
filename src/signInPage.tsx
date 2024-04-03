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
    <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
      <div style={{maxWidth: '456px', width: '100%', padding: '48px 28px 36px', display: 'flex', justifyContent: 'center', backgroundColor: '#FFFFFF', boxShadow: '0px 6px 12px -2px #000000', alignItems: 'center', borderRadius: '8px'}}>
        <form onSubmit={handleSignIn} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%'}}>
          <Typography variant="h4">Welcome to BoardX!</Typography>
          <TextField 
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" type="submit" style={{backgroundColor: '#FF006B', justifyContent: 'center', width: '100%'}}>
            Log in
          </Button>
          <Link href="#" variant="body2" style={{backgroundColor: 'transparent', color: '#FF006B', justifyContent: 'center'}}>
            Forgot Password?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
