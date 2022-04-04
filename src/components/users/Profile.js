import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Profile = () => {
    
    const user = useSelector((state) => state.user)

    console.log(user)
    return (
          <div>
              <h1>Profile Page</h1>
              <p>Name:{user.name}</p>
              <p>Email:{user.email}</p>
              <p>Password {user.password}</p>
              <p>Password Confirmation</p>

          </div>
    )
}

export default Profile