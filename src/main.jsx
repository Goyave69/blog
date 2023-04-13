import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from '@mui/material';
import { mainTheme } from '../theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
)