import React from 'react'
import './Login.scss'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

const Login = () => {
  return (
    <section className='login --center-all --100vh'>
        <div className="--card --bg-light --p">
            <h2 className='--color-danger'>Login</h2>
            <div className="--form-control">
                <input type="text" placeholder='Username' className='--width-100' />
                <div className="password">
                    <input type="password" placeholder='Password' className='--width-100' />
                    <div className="icon">
                        <AiOutlineEye />
                        {/* <AiOutlineEyeInvisible /> */}
                    </div>
                </div>
                <button className='--btn --btn-danger --btn-block'>Login</button>
            </div>
        </div>
    </section>
  )
}

export default Login