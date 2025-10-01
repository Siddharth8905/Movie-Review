import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import "../styles/Login.css"
export default function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [status, setstatus] = useState("")

    const navigate = useNavigate();

    const fun = async (e) => {
        e.preventDefault()
        try {
            const data = { email, password }
            const s = await axios.post("http://localhost:5004/checkdata", data)
            if (s.data === "registered") {
                 setstatus("success")
                 console.log("success")
                 navigate("/")
            }
            else {
                setstatus("Not registered signup to continue")
                console.log("signup to continue")
            }

        } catch (error) {
            console.log({ msg: error.message });
        }
    }

    const adminfun=()=>{
        navigate("/admindashboard")
        alert("Admin access enabled")
    }

    return (
        <div className='bgcontainer'>
            <div className='box'>
                <div className='lbox'>
                    <img src='image.png'></img>
                </div>
                <div className='rbox'>
                    <div className='signup'>
                        <form>
                            <div className='loginalign'>
                                <h1>Login</h1>
                                <input type='text' placeholder='Email' onChange={(e) => (setemail(e.target.value))} /><br />
                                <input type='password' placeholder='Password' onChange={(e) => (setpassword(e.target.value))} /><br />
                                <button onClick={(e) => fun(e)}>Login</button><br />
                                <hr/>
                                <div className='admin'>
                                    <p style={{ marginTop: "20px" }}>New User ?<Link to="/signup">Signup</Link></p>
                                    <p onClick={() => adminfun()}>Admin</p>
                                    {status}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )

}
