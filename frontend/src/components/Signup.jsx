import React from 'react'

export default function Signup() {
  return (
    <div>
        <form>
            <h1>SignUp</h1>
            <input type='text' placeholder='Name'/><br/>
            <input type='email' placeholder='Email'/><br/>
            <input type='password' placeholder='Password'/><br/>
            <button >Signup</button>
        </form>
    </div>
  )
}
