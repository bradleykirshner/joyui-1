import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

export default function BasicButtons() {
  return (
    <Box>
      
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button>Button 00</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button>Click me</Button>

    </Box>

    <Box>
      <FormControl id="Id" required size="sm" color="primary">
      <FormLabel>
        Label
      </FormLabel>
      
      <Input
      placeholder="Placeholder"
      name="Name"
      type="tel"
      autoComplete="on"
      autoFocus
      error
      fullWidth
      defaultValue="DefaultValue"
      variant="outlined" />
      
      <FormHelperText>
        Help!
      </FormHelperText>
        
      </FormControl>
   </Box>

  </Box>
  );
}
