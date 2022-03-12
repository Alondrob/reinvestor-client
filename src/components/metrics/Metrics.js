import {useState} from 'react';
import Equity from './Equity';
import Expenses from './Expenses';
import Income from './Income';
import Loan from './Loan';
import Purchase from './Purchase';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

function Metrics() {
  const [purchase, setPurchase] = useState('');
  const [income, setIncome] = useState({});
  const [expenses, setExpenses] = useState('');
  const [loan, setLoan] = useState('');
  const [equity, setEquity] = useState('');
  const [active, setActive] = useState(false);
  const [metrics, setMetrics] = useState({
    purchaseComp: false, 
    incomeComp: false,
    equityComp: false,
    loanComp: false,
    expensesComp: false
  })

  const handlePurchase = (purchObj) => {
    console.log(purchObj)
    setPurchase(purchObj)
  }
  const handleIncome = (incomeObj) => {
    setIncome(incomeObj)
  }

  const handleEquity = (equityObj) => {
    setEquity(equityObj)
  }
  const handleExpenses = (expenseObj) => {
    console.log(expenseObj)
    setExpenses(expenseObj)
  }

  const handleLoan = (loanObj) => {
    console.log(loanObj)
    setLoan(loanObj)
  }

  const generateReport = (e) => {
    e.preventDefault();
    console.log(purchase)
  }
  
   const handleActive = () => {
     setActive(!active)
   }
  return (
        <div>
          <form>
            {/* purchase */}
          <div className='border-y-4 border-indigo-400'>
              <div className='border-y-4 border-indigo-400' >
                  {metrics.purchaseComp ? 
                    <AiFillMinusCircle style={{ height: 20, width: 30 }} onClick={() => setMetrics({ ...metrics, purchaseComp: false})}/> 
                  : <AiFillPlusCircle style={{ height: 20, width: 30 }} onClick={() => setMetrics({ ...metrics, purchaseComp: true })} /> }
              </div>
              {metrics.purchaseComp && 
              <div>
                <label className='block'>Purchase</label>
                <input type="number" value={purchase} onChange={(e) => setPurchase(e.target.value)} />
              </div>
              }
            </div>
           

            {/* income */}
            <div className=''>
        
              <div>
              <label className='block'>Monthly Rent</label>
                <input type="number" onChange={(e) => setIncome({ ...income, rent: e.target.value })} />
              </div>

              <div>
              <label className='block'> Rent Appreciation</label>
                <input type="number" min={0} max={100} step={1} onChange={(e) => setIncome({ ...income, appreciation: e.target.value })} />
              </div>
          </div>

          {/* expenses */}
          <div className="block">
              <div>
              <label className='block'>Property Taxes </label>
                <input type="number" step={.25}  />
              </div>
            
              <div>
              <label className='block'>Property Insurance </label>
                <input type="number" step={.25} />
              </div>

              <div>
              <label className='block'>Repairs </label>
                <input type="number" step={.25} />
              </div>    

              <div className="">
                <label className='block'>Vacancy Rate </label>
                <input type="number" step={.25} />
              </div>    
          </div>

          {/* Loan */}

          <div className='block'>
              <div>
                <label className='block'> Years </label>
                <input type="number" step={1}/>
              </div>

              <div>
                <label className='block'> Rate </label>
                <input type="number" step={1}/>
              </div>
          </div>

          {/* Equity */}

          <div>
            <div>
              <label className='block'>Exit Point</label>
              <input type="number" step={1}/>
            </div>

            <div>
              <label className='block'> Property Appreciation</label>
              <input type="number" step={1}/>
            </div>

          </div>



          </form>
        </div>
     )
}


export default Metrics


// <form >
//       <div className='pb-3 border-x-4 divide-y-2 '>
//         <Purchase handlePurchase={handlePurchase} />
//         <Income handleIncome={handleIncome} income={income} />
//         {/* income */}
//         <div >
//           test
//           {show.incomeComp ? <AiFillMinusCircle onClick={() => setShow(!show)} /> :
//             <AiFillPlusCircle onClick={() => setShow({
//               purchaseComp: false,
//               incomeComp: true,
//               equityComp: false,
//               loanComp: false,
//               expensesComp: false
//             })}
//             />}
//         </div>

//         <div>
//           {show.incomeComp && <Income handleIncome={handleIncome} />}
//         </div>

//         {/* equity */}
//         <div >
//           test
//           {show.equityComp ? <AiFillMinusCircle onClick={() => setShow(!show)} /> :
//             <AiFillPlusCircle onClick={() => setShow({
//               purchaseComp: false,
//               incomeComp: false,
//               equityComp: true,
//               loanComp: false,
//               expensesComp: false
//             })}
//             />}
//         </div>

//         <div>
//           {show.equityComp && <Equity handleEquity={handleEquity} />}
//         </div>

//         {/* expenses */}
//         <div >
//           test
//           {show.expensesComp ? <AiFillMinusCircle onClick={() => setShow(!show)} /> :
//             <AiFillPlusCircle onClick={() => setShow({
//               purchaseComp: false,
//               incomeComp: false,
//               equityComp: false,
//               loanComp: false,
//               expensesComp: true
//             })}
//             />}
//         </div>

//         <div>
//           {show.expensesComp && <Expenses handleExpenses={handleExpenses} />}
//         </div>


//         {/* loan */}

//         <div >
//           test
//           {show.loanComp ? <AiFillMinusCircle onClick={() => setShow(!show)} /> :
//             <AiFillPlusCircle onClick={() => setShow({
//               purchaseComp: false,
//               incomeComp: false,
//               equityComp: false,
//               loanComp: true,
//               expensesComp: false
//             })}
//             />}
//         </div>

//         <div>
//           {show.loanComp && <Loan handleLoan={handleLoan} />}
//         </div>
//       </div>

//       <button onClick={generateReport}>
//         Generate Report
//       </button>
// </form>

//   )
// }