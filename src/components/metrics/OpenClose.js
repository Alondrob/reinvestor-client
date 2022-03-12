import React, { useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'


const OpenClose = ({handleActive, active}) => {
    // const [active, setActive] = useState(false)

  return (
      <div className='relative h-8 w-45 pb-8 border-b-4 border-blue-500'>
          <div className="absolute flex  top-0 left-0 h-16 w-16 pb-64 rounded-md align-middle">
              {active ? <AiFillMinusCircle style={{ height: 20, width: 30 }} onClick={handleActive} /> 
              : <AiFillPlusCircle style={{ height: 20, width: 30 }} onClick={handleActive}/>}
          </div>
      </div>
    
  )
}

export default OpenClose