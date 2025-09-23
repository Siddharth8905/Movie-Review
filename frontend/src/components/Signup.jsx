import React from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {
  return (
    <div>
        <form>
            <h1>SignUp</h1>
            <input type='text' placeholder='Name'/><br/>
            <input type='email' placeholder='Email'/><br/>
            <input type='password' placeholder='Password'/><br/>
            <button >Signup</button>
            <p> Already a User ? <Link to="/login">Login</Link></p>
        </form>
    </div>
  )
}
