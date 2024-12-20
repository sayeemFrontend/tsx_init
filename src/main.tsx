import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootElement from './routes/RootElement';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<RootElement />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
