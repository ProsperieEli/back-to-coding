import React, {useState} from 'react'
import { Link, redirect } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [returningUser, setReturningUser] = useState(false)
  
    return (
    <div>
        {returningUser ? (redirect('/Home')) : (
            <form>
                <label>
                    Username:
                    </label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    <label>
                    Password:
                    </label>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
                   <Link to='/Home' className='btn btn-primary'>
                    <button type="submit" onClick={e => setReturningUser(true)}>Login</button>
                   </Link>
            </form>
            )}
    </div>
  )
}

export default Login