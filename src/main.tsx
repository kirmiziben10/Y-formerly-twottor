import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Profile from "./Profile"
import Notifications from './Notifications';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <BrowserRouter>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
