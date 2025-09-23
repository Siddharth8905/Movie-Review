import React from 'react'
import {Link} from 'react-router-dom'


export default function Login() {
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")

  return (
    <div>
        <form>
            <h1>Login</h1>
            <input type='text' placeholder='Name' onChange={(e) => (setname(e.target.value))}/><br/>
            <input type='password' placeholder='Password'onChange={(e) => (setpassword(e.target.value))}/><br/>
            <button>Login</button><br/>
            <p>New User ?<Link to="/">Signup</Link></p>
        </form>
    </div>
  )
}
