import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
   
  </StrictMode>
)
