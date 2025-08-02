import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/poppins'; 
import '@fontsource/lora';     
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import {App} from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
