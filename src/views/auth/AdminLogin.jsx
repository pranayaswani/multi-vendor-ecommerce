import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { admin_login } from '../../store/reducers/authReducer';

const AdminLogin = () => {

    const dispatch = useDispatch();

    const [state,setState] = useState({
        email:"",
        password:""
    })

    const inputHandle = (e)=>{
      setState({
                 ...state,
                 [e.target.name]: e.target.value

      })
    }

    const handleClick = (e)=>{
        e.preventDefault();
        dispatch(admin_login(state))
        // console.log("Login Details",state.email,state.password)
    }

  return (
    <div>
      
      <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
        <div className='w-[350px] text-[#ffffff] p-2'>
          <div className='bg-[#6f68d1] p-4 rounded-md'>
           <div >
                <div>
                    <img src="http://localhost:3000/images/logo.png" alt="ima" />
                </div>
           </div>

            <form action="">

              <div className='flex flex-col w-full gap-1 mb-3'>
                <label htmlFor="email">Email</label>
                <input
                  className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md'
                  type="text"
                  name='email'
                  placeholder='Email'
                  id='email'
                  required
                  onChange={inputHandle}
                  value={state.email}
                />
              </div>

              <div className='flex flex-col w-full gap-1 mb-3'>
                <label htmlFor="password">Password</label>
                <input
                  className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md'
                  type="password"
                  name='password'
                  placeholder='Password'
                  id='password'
                  required
                  onChange={inputHandle}
                  value={state.password}
                />
              </div>

              

              <button className='bg-slate-800 w-full hover:shadow-blue-300 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3' onClick={handleClick}>
                Log In
              </button>

             

             

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
