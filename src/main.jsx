import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./context/AuthContext";
import { BusProvider } from "./context/BusContext";
import { PassengerProvider } from "./context/PassengerContext";
import { ContactProvider } from "./context/ContactContext";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BusProvider>
        <PassengerProvider>
          <ContactProvider>
          
              <App />
            
          </ContactProvider>
        </PassengerProvider>
      </BusProvider>
    </AuthProvider>
  </StrictMode>,
)
