import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Avatar, Box, Switch, Divider, TextField, Dialog } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon, Add as AddIcon } from '@mui/icons-material';
import CreateRoom from './createRoom';

const MainInterface = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);;
    const open = Boolean(anchorEl);
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    return (
        <Box style={{ height: '100vh', width: '100vw', display: 'flex' }}>
            <AppBar position="static"
                style={{ backgroundColor: '#FFFFFF' }}>
                <Toolbar
                    style={{ boxShadow: '0px 6px 12px -2px #808080' }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}
                        style={{ color: '#32383E' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} style={{ color: '#32383E' }}>SOTeaching</MenuItem>
                        <MenuItem onClick={handleClose} style={{ color: '#32383E' }}>Create Team</MenuItem>
                    </Menu>
                    <Typography variant="h6" style={{ flexGrow: 1, color: '#32383E' }}>SOTeaching</Typography>
                    <IconButton color="inherit" style={{ color: '#32383E' }}>
                        <SearchIcon />
                    </IconButton>
                    <TextField placeholder="Search" variant="outlined" size="small" />
                    <Switch
                        icon={<DarkModeIcon />}
                        checkedIcon={<LightModeIcon />}
                        onChange={() => { }}
                        inputProps={{ 'aria-label': 'toggle dark mode' }}
                        style={{ color: '#32383E' }}
                    />
                    <Button color="inherit" style={{ color: '#32383E' }}>Free</Button>
                    <Avatar alt="Profile" src="/profile.jpg" />
                </Toolbar>
            </AppBar>
            <Box position="absolute" display="flex" flexDirection="row" marginTop="64px">
                <Box display="flex" flexDirection="column" gap='16px' margin="10px">
                    <Button variant="contained" color="primary" style={{ color: '#32383E', backgroundColor: 'transparent', marginTop: '25px' }}>All Boards</Button>
                    <Button variant="contained" color="primary" style={{ color: '#32383E', backgroundColor: 'transparent' }}>Favorites</Button>
                    <Box display="flex" flexDirection="row">
                        <Typography variant="h6" style={{ justifyContent: 'center', alignSelf: 'center', flexGrow: 1, textTransform: 'uppercase', fontSize: 'max(0.75em, 0.625rem)', boxSizing: 'border-box' }}>Rooms</Typography>
                        <IconButton color="primary" onClick={handleDialogOpen} style={{ width: '20px', height: '20px', backgroundColor: '#FF006B', color: 'white', alignSelf: 'center', borderRadius: '5px' }}>
                            <AddIcon style={{ width: '15px', height: '15px' }} />
                        </IconButton>
                    </Box>
                </Box>
                <Box width="auto">
                    <Typography variant="h5" margin="5px">All Boards</Typography>
                    <Box display="flex" justifyContent="center"
                        style={{ backgroundColor: '#FF006B', borderRadius: '8px', width: '310px', height: '200px' }}>
                        <IconButton color="primary"
                            style={{ color: '#FFFFFF' }}>
                            <AddIcon fontSize="large" />
                        </IconButton>
                    </Box>
                    <Typography variant="h6"
                        style={{ width: '100', display: 'flex', justifyContent: 'center', alignContent: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', letterSpacing: '0.00938em', fontWeight: '400', fontSize: '16px', lineHeight: '24px', padding: '5px', margin: '5px' }}>Create new</Typography>
                </Box>
            </Box>
            <Divider />

            // in order to close when x or create buttons are hit, would need to reference variables in this file on createRoom.tsx
            <Dialog
                open={openDialog}
                onClose={handleDialogClose}
                maxWidth={false}
                PaperProps={{
                    style: { width: '33.5%', maxWidth: 'none', boxShadow: 'rgba(217, 161, 177, 0.54) 1px 2px 4px' }
                }} >
                <CreateRoom />
            </Dialog>

        </Box>
    );
};

export default MainInterface;
