import React from 'react'
import {BiBath, BiBed} from 'react-icons/bi'

function PropertyCard({price, state, address, sqft, image, beds, county, type, neighborhood}) {

    console.log(price/sqft)
  return (
      <div>
          <div className='bg-white rounded-md align-center'>
              property
              <card> property </card>
              <img src={image}/>
              <div>
                  <p>{state}</p>
                  <p>{county}</p>
                  <p>{type}</p>
                  <p>{address}</p>
                  <p>{price}</p>

                  <div className='flex space-x-4'>
                      <div className='flex space-x-2'>
                          <p className='h-5'><BiBed size={25} /> </p>
                          <p>{beds}</p>
                      </div>

                      <div className='flex space-x-2'>
                          <p className='h-5'><BiBath size={25} /> </p>
                          <p>{beds}</p>
                      </div>
                      <div className='flex space-x-2'>
                          <p className='h-5'>sqft: {sqft} </p>
                      </div>
                      <div className='flex space-x-2'>
                          <p className='h-5'>$ per sqft: {price/sqft} </p>
                      </div>
                  </div>
             
                  
                  
              </div>
          </div>
         
      </div>
  )
}

export default PropertyCard