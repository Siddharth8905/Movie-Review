import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import "../styles/Login.css"
export default function Login() {
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const navigate=useNavigate();
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
                                <input type='text' placeholder='Name' onChange={(e) => (setname(e.target.value))} /><br />
                                <input type='password' placeholder='Password' onChange={(e) => (setpassword(e.target.value))} /><br />
                                <button onClick={()=>navigate("/")}>Login</button><br />
                                <hr/>
                                <p style={{marginTop:"20px"}}>New User ?<Link to="/signup">Signup</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
  
}
