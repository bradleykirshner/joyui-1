import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import Demo from './Demo';
import Demo2 from './Demo2';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        
        <Demo />
        <Demo />
        
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
