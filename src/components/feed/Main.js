import React from 'react'
import SideBar from '../sideBar/SideBar'
import Feed from './Feed'
import { useSelector } from "react-redux";
const Main = () => {
  const userState = useSelector(state => state.userReducer)
  console.log(userState)
  return (
      <div className="h-56 grid grid-cols-3 gap-4 content-start ...">
          
      {userState.loggedIn &&
        <>
          <SideBar/>
          <Feed/>
        </>
  
      }
         
    </div>
  )
}

export default Main