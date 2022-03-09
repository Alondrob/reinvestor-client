import React from 'react'
import SideBar from '../sideBar/SideBar'
import Feed from './Feed'
const Main = () => {

  return (
      <div className="h-56 grid grid-cols-3 gap-4 content-start ...">
          
          <SideBar/>
          <Feed/>
    </div>
  )
}

export default Main