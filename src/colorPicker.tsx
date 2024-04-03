import React, { useState } from 'react';
import { Button, Menu, MenuItem, ListItemIcon, ListItemText, IconButton, Popover, Box } from '@mui/material';
import { ColorLens as ColorLensIcon, Palette as PaletteIcon } from '@mui/icons-material';

const ColorPicker = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [customColor, setCustomColor] = useState('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    handleClose();
  };

  const handleCustomColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomColor(event.target.value);
  };

  const handleCustomColorSubmit = () => {
    setSelectedColor(customColor);
    handleClose();
  };

  return (
    <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <IconButton onClick={handleClick} aria-label="color-picker">
        <ColorLensIcon />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box p={2}>
          <Button onClick={() => handleColorSelect('#FF0000')} style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#FF0000', marginRight: '8px' }}></Button>
          <Button onClick={() => handleColorSelect('#00FF00')} style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#00FF00', marginRight: '8px' }}></Button>
          <Button onClick={() => handleColorSelect('#0000FF')} style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#0000FF', marginRight: '8px' }}></Button>
          <Button onClick={() => handleColorSelect('#FFFF00')} style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#FFFF00', marginRight: '8px' }}></Button>
          <Button onClick={() => handleColorSelect('#FF00FF')} style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#FF00FF', marginRight: '8px' }}></Button>
          <Button onClick={() => handleColorSelect('#00FFFF')} style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#00FFFF', marginRight: '8px' }}></Button>
          <MenuItem>
            <ListItemIcon>
              <PaletteIcon />
            </ListItemIcon>
            <ListItemText primary="Custom Color" />
            <input type="color" value={customColor} onChange={handleCustomColorChange} />
            <Button onClick={handleCustomColorSubmit}>Apply</Button>
          </MenuItem>
        </Box>
      </Popover>
      <div style={{ width: '100px', height: '100px', backgroundColor: selectedColor, borderRadius: '50%', marginLeft: '16px' }}></div>
    </div>
  );
};

export default ColorPicker;
