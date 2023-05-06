import React from 'react'
import './Login.scss'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

const Login = () => {
  return (
    <section className='login'>
        <div className="--card">
            <h2>Login</h2>
            <div className="--form-control">
                <input type="text" placeholder='Username' />
                <div className="password">
                    <input type="password" placeholder='Password' />
                    <div className="icon">
                        <AiOutlineEye />
                        <AiOutlineEyeInvisible />
                    </div>
                </div>
                <button>Login</button>
            </div>
        </div>
    </section>
  )
}

export default Login