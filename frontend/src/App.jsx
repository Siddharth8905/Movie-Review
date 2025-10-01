import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css'
import Dashboard from './components/Dashboard'
import Login from "./components/Login"
import Signup from './components/Signup'
import Review from './components/Review'
import AddMovie from './components/AddMovie'
import AdminDashboard from './components/AdminDashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/review" element={<Review/>}></Route>
          <Route path="/addmovie" element={<AddMovie/>}></Route>
          <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
