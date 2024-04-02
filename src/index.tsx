import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';

import SignIn from './signin'; // Import the SignIn component
import SignInPage from './signInPage'; // Import the SignInPage component
import ColorPicker from './colorPicker'; // Import the ColorPicker component
import { StepSlider } from './slider-component';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <SignIn /> {/* Render the SignIn component */}
        <SignInPage /> {/* Render the SignInPage component */}
        <ColorPicker /> {/* Render the ColorPicker component */}
        <StepSlider />
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
