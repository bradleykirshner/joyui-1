import * as React from 'react';
import Box from '@mui/joy/Box';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';

export default function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = () => {
    // You can perform sign-in logic here, such as sending a request to your backend
    console.log('Signing in with:', email, password);

    // Reset form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
      <h2>Welcome to BoardX!</h2>
      <TextField
        label="Email"
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
      <Button variant="contained" onClick={handleSignIn}>
        Log In
      </Button>
      <Button variant="text">Forgot Password</Button>
    </Box>
  );
}

