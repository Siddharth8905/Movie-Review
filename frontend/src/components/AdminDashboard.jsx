import React, { useState } from 'react'
import "../styles/AdminDashboard.css"
import Navbar from './Navbar'
export default function AdminDashboard() {
    const [users, setusers] = useState("off")
    const [movies, setmovies] = useState("off")
    return (
        <>
            <Navbar></Navbar>
            <div className='outerbox'>
                {users === "off" && movies === "off" &&
                    <div className='featurebox'>
                        <button onClick={() => setusers("on")}>Manage users</button>
                        <button onClick={() => setmovies("on")}>Manage movies</button>
                    </div>
                }
                {users === "on" &&
                    <div className='userbox'>
                        <p>Manage users</p>
                        <div className='manageuserbox'>
                            <button>view users</button>
                            <button onClick={() => setusers("off")}>Back</button>
                        </div>
                    </div>
                }
                {movies === "on" &&
                    <div className='userbox'>
                        <p>Manage movies here</p>
                        <button onClick={() => setmovies("off")}>Back</button>
                    </div>
                }
            </div>
        </>
    )
}
