import React from 'react'

const  SideBarIcon = ({Icon ,name}) => {
  return (
    <div className="flex items-center space-x-2 p-4">
        {Icon && <Icon className="h-8 w-8 text-blue-500"/>}
        <p>{name}</p>
    </div>
  )
}

export default SideBarIcon