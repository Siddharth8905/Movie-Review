import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'


export default function Signup() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate=useNavigate()

    const savedata=async(e)=>{
        try {
            const data={name,email,paasword}
            const s=await axios.post("",data)
            const r=s.save()
            console.log(r.data);
            navigate("/login")
            
        } catch (error) {
            console.log({ msg: error.message });
        }

    }
  return (
    <div>
        <form>
            <h1>SignUp</h1>
            <input type='text' placeholder='Name'required onChange={(e)=>(setname(e.target.value))}/><br/>
            <input type='email' placeholder='Email' required onChange={(e)=>(setemail(e.target.value))}/><br/>
            <input type='password' placeholder='Password'required onChange={(e)=>(setpassword(e.target.value))} /><br/>
            <button  onClick={savedata}>Signup</button>
            <p> Already a User ? <Link to="/login">Login</Link></p>
        </form>
    </div>
  )
}
