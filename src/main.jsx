import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/poppins'; 
import '@fontsource/lora';     
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import './index.css'
import {App} from './App'
import { store } from './stores/store';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
