import React, { useState } from 'react'
import axios from 'axios'
import "../styles/AdminDashboard.css"
import Navbar from './Navbar'
import { useEffect } from 'react'
export default function AdminDashboard() {
    const [users, setusers] = useState("off")
    const [movies, setmovies] = useState("off")
    const [view, setview] = useState("off")
    const [data, setdata] = useState([])

    const viewusers = async () => {
        const s = await axios.get("http://localhost:5004/getusers")
        setdata(s.data)
        console.log("Function called at", new Date().toLocaleTimeString())
    }


  useEffect(() => {
    // run immediately once
    viewusers()

    // then run every 10 seconds
    const interval = setInterval(viewusers, 10000)

    // cleanup when component unmounts
    return () => clearInterval(interval)
  }, [])

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
                {users === "on" && view === "off" &&
                    <div className='userbox'>
                        <p>Manage users</p>
                        <div className='manageuserbox'>
                            <button onClick={() => {setview("on"),viewusers()}}>view users</button>
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
                {view === "on" &&
                    <>
                        <div className='userdetailsbox'>
                            <h1>Users</h1>
                            <table border={1} className='usertable'>
                                <thead>
                                   <tr>
                                    <th>Name</th>
                                    <th >Email</th>
                                    <th colSpan={2}>actions</th>
                                   </tr>
                                </thead>

                                {data.map((itr, index) => (
                                    <tbody>
                                        <tr key={index}>
                                            <td>{itr.name}</td>
                                            <td>{itr.email}</td>
                                            <td className='colortxt'>edit</td>
                                            <td className='colortxt'>delete</td>
                                        </tr>
                                    </tbody> 
                                ))}
                            </table>

                            <button onClick={() => setview("off")}>back</button>
                        </div>
                    </>
                }
            </div>
        </>
    )
}
