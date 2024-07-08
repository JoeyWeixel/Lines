import ReactDOM from "react-dom/client";
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import Router from './components/navigation/Router'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
);
