import React, { useState } from 'react';
import { Typography, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CreateRoom = () => {
  const [roomName, setRoomName] = useState('');

  const handleCreateRoom = () => {
    // Perform room creation logic here
    console.log('Creating room with name:', roomName);
    // Reset room name after creation
    setRoomName('');
  };

  return (
    <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{maxWidth: '424px', width: '100%', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '4px', boxShadow: 'rgba(217, 161, 177, 0.54) 1px 2px 4px'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer'}}>
                <Typography variant="h2" style={{ fontSize: '28px'}}>Create Room</Typography>
                <CloseIcon style={{width: '1em', height: '1em', display: 'inline-block', flexShrink: '0', justifyContent: 'flex-end'}}>
                </CloseIcon>
            </div>
            <TextField
                label="Room Name"
                variant="outlined"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" onClick={handleCreateRoom} style={{backgroundColor: '#FF006B', justifyContent: 'flex-end'}}>
                Create
            </Button>
        </div>
    </div>
  );
};

export default CreateRoom;
