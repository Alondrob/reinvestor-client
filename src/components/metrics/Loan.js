import React, {useState} from 'react'

const Loan = ({handleLoan}) => {
  const [years, setYears] = useState('');
  const [rate, setRate] = useState('');

    const loanTerms = (e) => {
      e.preventDefault();

      handleLoan({
        years: years, 
        rate: rate
      })
    }
  return (
      
    <div>
      <form onChange={loanTerms}>
        <div className="pb-3">
          <label> Years</label>
          <input type="number" min={0} max={40} step={1}
            onChange={(e) => setYears(e.target.value)}
          />
        </div>

        <div className="pb-3">
          <label> Rate </label>
          <input type="number" min={0} max={40} step={.1}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
      </form>
   
    </div>
  )
}

export default Loan