import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signupUser, userSelector, clearState, onClickGetData } from '../../redux/userSlice';
// import userReducer from '../../redux/userSlice';
import { createUser } from '../../api/apiCalls';
import { selectIsLoading } from './selectors';

function SignUp(userName) {
const isLoading = useSelector(state => state.user.isLoading)
const houses = useSelector(state => state.user.houses)
const isError = useSelector(state => state.user.isError)
  //const isLoading = useSelector(selectIsLoading)

  console.log('isLoading:',isLoading)
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();


    

   const handleSubmit = (e) => {
     e.preventDefault();

     console.log("formData",formData)
     dispatch(signupUser(formData))
     //createUser()
     
    }
    useEffect(() => {
      return () => {
        dispatch(clearState());
      };
    },[])

  



   

  
  return (
        
    <div class="w-full max-w-xs justify-center ">
           {/* <button onClick={() => dispatch(onClickGetData(houses))}>fetch data</button> */}
      <div className="bg-pink-100 md:items-center">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              User Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 
                               text-gray-700 leading-tight focus:outline-none 
                               focus:shadow-outline"  type="text" placeholder="Username" 
                               onChange={(e) => setFormData({...formData, name:e.target.value})}
                               value={formData.name}
                               />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3
                             text-gray-700 leading-tight focus:outline-none 
                             focus:shadow-outline"  type='email' placeholder="Username" 
                             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                             value={formData.email}
                             />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 
                              text-gray-700 mb-3 leading-tight focus:outline-none 
                               focus:shadow-outline" type="password" placeholder="******************" 
                               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                               value={formData.password}
                               />
                              <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Confirm Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 
                              text-gray-700 mb-3 leading-tight focus:outline-none 
                               focus:shadow-outline" type="password" placeholder="******************" 
                               onChange={(e) => setFormData({ ...formData, passwordConfirmation: e.target.value })}
                               value={formData.passwordConfirmation}
                               />
                              <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>

          
          
          <div className="flex items-center justify-between">
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
              onClick={handleSubmit}
            >
              Sign In
            </button> */}

            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Sign-Up"
            />


            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
      
    </div>
  )
}

export default SignUp