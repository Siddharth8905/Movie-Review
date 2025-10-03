import React, { useState } from 'react'
import "../styles/AdminDashboard.css"
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
export default function AdminDashboard() {
    const navigate=useNavigate()    

    return (
        <>
            <Navbar></Navbar>
            <div className='outerbox'>
                { 
                    <div className='featurebox'>
                        <button onClick={() => navigate("/manageusers")}>Manage users</button>
                        <button onClick={() => setmovies("on")}>Manage movies</button>
                    </div>
                }
                
            </div>
        </>
    )
}
