import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material';
import { mainTheme } from '../theme';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import  Routes from './routes';

const router = createBrowserRouter(Routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)