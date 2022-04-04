import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {login, signup} from '../../redux/userSlice';


function Login() {

  const [loginData, setLoginData] = useState({
    email:'',
    password:''
  })
  const dispatch = useDispatch();

  console.log(dispatch)

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(dispatch)
    dispatch(login(loginData))
  }

  return (
    <div className="w-full max-w-xl justify-center bg-pink-100 md:items-center">
        
      <form 
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
          onSubmit={handleLogin}
      >

            <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold  mb-2'
                >
                    Email
                </label>
                <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 
                               text-gray-700 leading-tight focus:outline-none 
                               focus:shadow-outline"  type="email"
                               onChange={(e) => setLoginData({...loginData, email:e.target.value})}
                />
            </div>

            <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold  mb-2'
                >
                    Password
                </label>
                <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 
                               text-gray-700 leading-tight focus:outline-none 
                               focus:shadow-outline"  type="password"
                               onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} 
                />
            </div>

          <div className='mb-4'>
           
            <input
              className="shadow bg-pink-100 appearance-none border rounded w-full py-2 px-3 
                                text-gray-700 leading-tight focus:outline-none 
                                focus:shadow-outline"  type="submit" value='Login'
            />
          </div>



      </form>

    </div>
  )
}

export default Login