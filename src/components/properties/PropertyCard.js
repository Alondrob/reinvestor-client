import React from 'react'
import {BiBath, BiBed} from 'react-icons/bi'

function PropertyCard({price, state, address, sqft, image, beds, county, type, neighborhood}) {

    const accntPrice = (price) => {
        console.log("price",price)
        let str = price.toLocaleString("en-US");
        let str2 = str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str2;
       
    }
    const cap = (type) => {
        type.toString()
       console.log(type.slice(1))
       return type.charAt(0).toUpperCase() + type.slice(1)

        
    }
  return (
      <div>
          <div className='bg-white rounded-md align-center'>
              property
              <card> property </card>
              <img src={image}/>
              <div>
                  <p>{state}</p>
                  <p>{county}</p>
                  <p>{cap(type)}</p>
                  <p>{address}</p>
                  <p>${accntPrice(price)}</p>

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