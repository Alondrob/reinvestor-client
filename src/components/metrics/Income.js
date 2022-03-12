import React, {useState} from 'react'


const Income = ({handleIncome, income}) => {
    const [rent, setRent] = useState('');
    const [appraisel, setAppraisel] = useState('');

    const setChanges = () => {
        
        handleIncome({...income,
            rent: rent,
            appraisel: appraisel
        })
    }
    
  return (
    <div onChange={setChanges}>
       
            <div>
                  <label>Monthly Rent</label>
                  <input className="p-2" type='number' min={0} step={50} onChange={(e) => setRent(e.target.value)} />
            </div>
         
            <div>
                  <label>Rent Appreciation %</label>
                  <input className="p-2" type='number' min={0} max={100} step={.25} onChange={(e) => setAppraisel(e.target.value)} />
            </div>
         
        
    </div>
  )
}

export default Income