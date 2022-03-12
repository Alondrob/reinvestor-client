import React, {useState} from 'react'

function Equity({handleEquity}) {
    const[exitPoint, setExitPoint] = useState('');
    const [propertyAppreciation, setPropertyAppreciation] = useState('')

    const equityGrowth = (e) => {
        e.preventDefault();
        handleEquity({
            exitPoint: exitPoint,
            propertyAppreciation: propertyAppreciation
        })
    }
  return (
    <div>
        <form onChange={equityGrowth}>

            <div className="pb-3">
                  <label> Exit Year </label>
                  <input type="number" onChange={(e) => setExitPoint(e.target.value)} />

            </div>

            <div className="pb-3">
                  <label> Property Appreciation </label>
                  <input type="numner" min={0} max={100} step={1} />
            </div>
            
            
        </form>
    </div>
  )
}

export default Equity