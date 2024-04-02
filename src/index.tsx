import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';

import SignInPage from './signInPage'; // Import the SignInPage component
import ColorPicker from './colorPicker'; // Import the ColorPicker component

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <SignInPage /> {/* Render the SignInPage component */}
        <ColorPicker /> {/* Render the ColorPicker component */}
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
