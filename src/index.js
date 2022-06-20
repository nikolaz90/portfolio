import React from 'react';
import './index.css';
import App from './App';
import {AppProvider} from './context'
import ReactDOM from 'react-dom/client'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
    <React.StrictMode>
      <AppProvider>
        <App tab='home' />
      </AppProvider>
    </React.StrictMode>
  )
