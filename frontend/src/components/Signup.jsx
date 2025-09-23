import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/Signup.css'


export default function Signup() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()

    const savedata = async (e) => {
        e.preventDefault()
        try {
            console.log(email+password+name);
            
            const data = {name,email,password}
            const s = await axios.post("http://localhost:5004/savedata", data)
            console.log(s.data);
            navigate("/login")

        } catch (error) {
            console.log({ msg: error.message });
        }

    }
    return (
        <div className='bgcontainer'>
            <div className='box'>
                <div className='lbox'>
                    <div className='signup'>
                        <form>
                            <div className='signalign'>
                                <h1>SignUp</h1>
                                <input type='text' placeholder='Name' required onChange={(e) => (setname(e.target.value))} /><br />
                                <input type='email' placeholder='Email' required onChange={(e) => (setemail(e.target.value))} /><br />
                                <input type='password' placeholder='Password' required onChange={(e) => (setpassword(e.target.value))} /><br />
                                <button onClick={savedata}>Signup</button>
                                <hr />
                                <p style={{marginTop:"20px"}}> Already a User ? <Link to="/login">Login</Link></p>
                                
                            </div>
                        </form>
                    </div>
                </div>
                <div className='rbox'>
                    <img src='bg.webp'></img>
                </div>
            </div>
        </div>
    )
}
