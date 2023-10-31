import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {TransactionContext} from '../src/context/TransactionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <TransactionContext>

 <React.StrictMode>
    <App />
  </React.StrictMode>,
 </TransactionContext>

)
