import React, { useState } from 'react'

function Expenses({handleExpenses}) {
    const[propertyTaxes, setPropertyTaxes] = useState('');
    const[propertyInsurance, setPropertyInsurance] = useState('');
    const[repairs, setRepairs] = useState('');
    const[vacancyRate, setVacancyRate] = useState('');

    const expenseTerms = (e) => {
        e.preventDefault()

        handleExpenses ({
            propertyTaxes: propertyTaxes,
            propertyInsurance: propertyInsurance,
            repairs: repairs,
            vacancyRate: vacancyRate
        })
    }
    
  return (
    <div className="pb-8">
        <form onChange={expenseTerms}>
            
            <div className="pb-3">
                  <label> Property Taxes %</label>
                  <input type="number" min={0} max={30} step={.25}
                    onChange={(e) => setPropertyTaxes(e.target.value)}   
                  />
            </div>

            <div className="pb-3">
                  <label> Annual Property Insurance  $</label>
                  <input type="number" min={0} 
                  onChange={(e) => setPropertyInsurance(e.target.value)}  
                  />
            </div>

            <div className="pb-3">
                  <label> Repairs  %</label>
                  <input type="number" min={0} max={50} step={.5} 
                      onChange={(e) => setRepairs(e.target.value)} 
                  />
            </div>
            
            <div className="pb-3">
                  <label> Vacancy Rate  %</label>
                  <input type="number" min={0} max={50} step={.5} 
                      onChange={(e) => setVacancyRate(e.target.value)} 
                  />
            </div>

        </form>
    </div>
  )
}

export default Expenses