import React, {useState} from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const Purchase = ({handlePurchase}) => {
    const [price, setPrice] = useState(0)
    const [show, setShow] = useState(false);
    //    const purchaseTerms = () => {
         
    //        console.log(price)
    //        handlePurchase({
    //            price: price
    //        })
    //    } 

    console.log(price)
  return (
      <div >
          <div>
              {show ? <AiFillMinusCircle onClick={() => setShow(!show)} /> :
                  <AiFillPlusCircle onClick={() => setShow(!show)}/>}
          </div>
          
              
          {show &&
              <div className="pb-3">
                  <label> Price $</label>
                  <input type="number"
                      onChange={(e) => handlePurchase({ purchase: (e.target.value) })}
                  />
              </div>
          }
            
            
          
          
     </div>
  )
}

export default Purchase