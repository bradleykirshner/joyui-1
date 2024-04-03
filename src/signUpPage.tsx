import React, { useState } from 'react';
import { Typography, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSignUp = () => {
    // Perform sign-up logic here
    console.log('Signing up with:', name, email, password);

    // Reset form fields after submission
    setName('');
    setEmail('');
    setPassword('');
    setAgree(false);
  };

  return (
    
    <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{maxWidth: '456px', width: '100%', padding: '24px 28px 36px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', boxShadow: '0px 6px 12px -2px #000000'}}>
            <form onSubmit={handleSignUp} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%'}}>
            <Typography variant="h4">Collaboration starts here🚀</Typography>
            <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
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
            <FormControlLabel
                control={
                <Checkbox
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    color="primary"
                />
                }
                label={
                    <Typography variant="body2">
                    I agree to <Link href="#" style={{color: '#FF006B'}}>Terms of Service</Link> and <Link href="#" style={{color: '#FF006B'}}>Privacy Policy</Link>
                    </Typography>
                }
            />
            <Button variant="contained" type="submit" style={{backgroundColor: '#FF006B', justifyContent: 'center', width: '100%'}}>
                Create Account
            </Button>
            <Typography variant="body2">
                Already have an account? <Link href="#" style={{color: '#FF006B'}}>Sign in instead</Link>
            </Typography>
            </form>
        </div>
    </div>

  );
};

export default SignUp;
