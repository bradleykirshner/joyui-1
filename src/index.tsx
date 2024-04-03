import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignInPage from './signInPage'; // Import the SignInPage component
import SignUpPage from './signUpPage'; // Import the SignUpPage component
import CreateRoom from './createRoom'; // Import the CreateRoom component
import ColorPicker from './colorPicker'; // Import the ColorPicker component
import MainInterface from './mainInterface'; // Import the MainInterface component

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/signinpage" element={<SignInPage />} />
                    <Route path="/colorpicker" element={<ColorPicker />} />
                    <Route path="/signuppage" element={<SignUpPage />} />
                    <Route path="/createroom" element={<CreateRoom />} />
                    <Route path="/maininterface" element={<MainInterface />} />
                </Routes>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/signinpage">Sign In Page</Link>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/signuppage">Sign Up Page</Link>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/createroom">Create Room</Link>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="colorpicker">Color Picker</Link>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="maininterface">Main Interface</Link>
                </div>

            </BrowserRouter>
        </React.StrictMode>
    );
}
