import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';

import Demo from './BasicButtons';
import Demo2 from './Demo2';
import { StepSlider } from './slider-component';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        
        <signin />

        <StepSlider />
        
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
