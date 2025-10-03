import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import "../styles/AdminDashboard.css"
import { useState } from 'react'
import Navbar from './Navbar'
export default function ManageUsers() {

    const [data, setdata] = useState([])
    const [updata, setupdata] = useState("off")
    const [upname, setupname] = useState("")
    const [upemail, setupemail] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        // run immediately once
        viewusers()

        // then run every 10 seconds
        const interval = setInterval(viewusers, 10000)

        // cleanup when component unmounts
        return () => clearInterval(interval)
    }, [])

    const viewusers = async () => {
        const s = await axios.get("http://localhost:5004/getusers")
        setdata(s.data)
        console.log("Function called at", new Date().toLocaleTimeString())
    }

    const updatedetails = (a, b) => {
        console.log(a + b)
        setupdata("on")
        setupname(a)
        setupemail(b)
    }

    const updateuser=async(e)=>{
        e.preventDefault()
        const res=await axios.put(`http://localhost:5004/updateusers/${upemail}`,{name:upname})
        console.log(res.data);
    }

    const deleteuser=async()=>{
        const res=await axios.delete("http://localhost:5004/deleteuser?email="+upemail)
        console.log(res)
        viewusers()
    }
    return (
        <>
            <Navbar />
            {updata === "off" &&
                <div className='outerbox'>
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
                                        <td className='colortxt' onClick={() => updatedetails(itr.name, itr.email)}>edit</td>
                                        <td className='colortxt' onClick={()=>{setupemail(itr.email),deleteuser()}}>delete</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                        <button onClick={() => navigate("/admindashboard")}>back</button>
                    </div>
                </div>

            }
            {updata === "on" &&
                <div className='outerbox' onSubmit={updateuser}>
                        <form action="" className='inputbox'>
                            <h1>Update details</h1>
                            <div className='inputboxin'>
                            <label htmlFor="">Email</label>
                            <input type="text" value={upemail} disabled />
                            <label htmlFor="">Name</label>
                        
                            <input type="text" value={upname} onChange={(e) => setupname(e.target.value)} />
                            <button type='submit'>Submit</button>

                            </div>
                        </form>
                            <button onClick={()=>setupdata("off")}>back</button>
                </div>
            }
        </>
    )
}
