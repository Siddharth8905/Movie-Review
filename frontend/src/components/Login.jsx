import React from 'react'
import {Link} from 'react-router-dom'


export default function Login() {
  return (
    <div>
        <form>
            <h1>Login</h1>
            <input type='text' placeholder='Name'/><br/>
            <input type='password' placeholder='Password'/><br/>
            <button>Login</button><br/>
            <p>New User ?<Link to="/">Signup</Link></p>
        </form>
    </div>
  )
}
