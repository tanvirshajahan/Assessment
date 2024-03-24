import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route } from 'react-router-dom'
import AddTwoNumbers from './components/AddTwoNumbers.jsx'
import InputArray from './components/InputArray.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
