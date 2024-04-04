import React, { useState } from 'react';
import { Typography, TextField, Button, IconButton, Box } from '@mui/material';
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
        <Box style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box style={{ maxWidth: '424px', height: 'auto', width: '100%', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '4px', boxShadow: 'rgba(217, 161, 177, 0.54) 1px 2px 4px' }}>
                <Box style={{ margin: '0px 0px 24px', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                    <Typography variant="h2" style={{ fontSize: '28px' }}>Create Room</Typography>
                    <CloseIcon style={{ width: '1em', height: '1em', display: 'inline-block', flexShrink: '0', justifyContent: 'flex-end' }}>
                    </CloseIcon>
                </Box>
                <Box style={{ width: '100%', display: 'flex', flex: '1 1 auto', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <p style={{ width: '100', display: 'flex', justifyContent: 'flex-start', alignContent: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', letterSpacing: '0.00938em', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>
                        Room Name
                    </p>
                    <TextField
                        label=""
                        variant="outlined"
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                        fullWidth
                        margin="none"
                    />
                </Box>
                <Box style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" onClick={handleCreateRoom} style={{ margin: '25px 0px 0px 0px', backgroundColor: '#FF006B', justifyContent: 'flex-end', alignItems: 'left' }}>
                        Create
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default CreateRoom;
