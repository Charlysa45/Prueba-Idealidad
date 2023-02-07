import React from 'react'
import ReactDOM from 'react-dom/client'
import CoreLayout from './common/layouts/CoreLayout'
import { ApiProvider } from './context/ApiContext'
import Routes from './routes'
import './styles/_main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoreLayout> 
      <ApiProvider>
        <Routes/> 
      </ApiProvider>
    </CoreLayout>
  </React.StrictMode>,
)  
   