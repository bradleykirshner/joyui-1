import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import SignInPage from './signInPage'; // Import the SignInPage component
import ColorPicker from './colorPicker'; // Import the ColorPicker component

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
  <React.StrictMode>
    <Routes>
                    <Route path="/signinpage" element={<SignIn />} />
                    <Route path="/colorpicker" element={<ColorPicker />} />
                </Routes>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/signinpage">Sign In Page</Link>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="colorpicker">Color Picker</Link>
                </div>
            </BrowserRouter>
  </React.StrictMode>
);
