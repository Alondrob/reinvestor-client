import {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Equity from './Equity';
import Expenses from './Expenses';
import Income from './Income';
import Loan from './Loan';
import Purchase from './Purchase';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import Reports from '../users/Reports';

function Metrics() {
  const [purchase, setPurchase] = useState({});
  const [income, setIncome] = useState({});
  const [expenses, setExpenses] = useState({});
  const [loan, setLoan] = useState({});
  const [equity, setEquity] = useState({});
  const [active, setActive] = useState(false);
  const [reportComp, setReportComp] = useState(false);
  const [repServer, setRepServer] = useState([])
  const [metrics, setMetrics] = useState({
    purchaseComp: false, 
    incomeComp: false,
    equityComp: false,
    loanComp: false,
    expensesComp: false
  })

  const navigate = useNavigate();

  const runMetrics = () => {
    let reportObj = {
      purchase_price: purchase,
      monthly_rent: income.rent,
      annual_rent_appreciation: income.appreciation,
      annual_property_taxes: expenses.propertyTaxes,
      annual_property_repairs: expenses.propertyRepairs,
      annual_vacancy_rate: expenses.propertyVacancyRate,
      loan_years: loan.years,
      loan_rate: loan.rate,
      exit_year: equity.exitPoint,
      property_appreciation: equity.appreciation
      
    }
    
    let url = "http://localhost:3000/reports"
    fetch(url, {
        method: 'POST',
        headers: {
           "Accept": "application/json",
          'Content-Type': "application/json",
        },
         body: JSON.stringify(reportObj)
      } 
    )
    .then(response => response.json())
      .then((data) => navigate(`reports/${data.id}`))
      // setPurchase('');
      // setIncome('');
      // setExpenses('');
      // setLoan('');
      // setEquity('');
      // setActive('');
      // setMetrics(''); 
       console.log('data',repServer)
    
  }


  

    // if(repServer) {
    //   navigate(`reports/${repServer.id}`)
    // }


  return (
        <div>
          <form>
                {/* purchase */}
              <div className='border-y-4 ' >
                  <div className='border-y-4 bg-gray-400' >
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
                    <div className='border-y-4  bg-gray-400' >
                      {metrics.incomeComp ?
                        <AiFillMinusCircle style={{ height: 20, width: 30 }} onClick={() => setMetrics({ ...metrics, incomeComp: false })} />
                        : <AiFillPlusCircle style={{ height: 20, width: 30 }} onClick={() => setMetrics({ ...metrics, incomeComp: true })} />}
                    </div>
                {metrics.incomeComp &&
                  <div>
                    <div>
                      <label className='block'>Monthly Rent</label>
                      <input type="number" value={income.rent} onChange={(e) => setIncome({ ...income, rent: e.target.value })} />
                    </div>

                    <div>
                      <label className='block'> Rent Appreciation</label>
                    <input type="number" value={income.appreciation} min={0} max={100} step={1} onChange={(e) => setIncome({ ...income, appreciation: e.target.value })} />
                    </div>
                  </div>
                }
                
              
              </div>

              {/* expenses */}
                <div className=''>
                  <div className='border-y-4  bg-gray-400' >
                    {metrics.expensesComp ?
                      <AiFillMinusCircle style={{ height: 20, width: 30 }} onClick={() => setMetrics({ ...metrics, expensesComp: false })} />
                      : <AiFillPlusCircle style={{ height: 20, width: 30 }} onClick={() => setMetrics({ ...metrics, expensesComp: true })} />}
                  </div>

              {metrics.expensesComp &&
                <div>
                  <div>
                    <label className='block'>Property Taxes </label>
                    <input type="number" value={expenses.propertyTaxes} step={.25} onChange={(e) => setExpenses({ ...expenses, propertyTaxes: e.target.value })}/>
                  </div>

                  <div>
                    <label className='block'>Property Insurance </label>
                    <input type="number" value={expenses.propertyInsurance}  step={.25} onChange={(e) => setExpenses({ ...expenses, propertyInsurance: e.target.value })} />
                  </div>

                  <div>
                    <label className='block'>Repairs </label>
                    <input type="number" value={expenses.propertyRepairs}  step={.25} onChange={(e) => setExpenses({ ...expenses, propertyRepairs: e.target.value })} />
                  </div>

                  <div className="">
                    <label className='block'>Vacancy Rate </label>
                    <input type="number" value={expenses.propertyVacancyRate} step={.25} onChange={(e) => setExpenses({ ...expenses, propertyVacancyRate: e.target.value })} />
                  </div>    
                </div>
                }

              </div>

              {/* Loan */}

              <div className='block'>

                    <div className='border-y-4  bg-gray-400' >
                      {metrics.loanComp ?
                        <AiFillMinusCircle style={{ height: 20, width: 30 }} onClick={() => setMetrics({ ...metrics, loanComp: false })} />
                        : <AiFillPlusCircle style={{ height: 20, width: 30 }} onClick={() => setMetrics({ ...metrics, loanComp: true })} />}
                    </div>

                  {metrics.loanComp &&
                    <div>
                        <div>
                          <label className='block'> Years </label>
                          <input type="number"  value={loan.years} step={1} onChange={(e) => setLoan({ ...loan, years: e.target.value })} />
                        </div>

                        <div>
                          <label className='block'> Rate </label>
                          <input type="number" step={1} value={loan.rate}  onChange={(e) => setLoan({ ...loan, rate: e.target.value })} />
                        </div>
                    </div>
                  }
                
              </div>

              {/* Equity */}

              <div>

                <div className='border-y-4  bg-gray-400' >
                  {metrics.equityComp ?
                    <AiFillMinusCircle style={{ height: 20, width: 30 }} onClick={() => setMetrics({ ...metrics, equityComp: false })} />
                    : <AiFillPlusCircle style={{ height: 20, width: 30 }} onClick={() => setMetrics({ ...metrics, equityComp: true })} />}
                </div>
                
              {metrics.equityComp &&
                  <div>
                      <div>
                          <label className='block'>Exit Point</label>
                <input type="number" step={1} value={equity.exitPoint} onChange={(e) => setEquity({ ...equity, exitPoint: e.target.value })} />
                      </div>

                      <div>
                        <label className='block'> Property Appreciation</label>
                        <input type="number" value={equity.appreciation} step={1} onChange={(e) => setEquity({ ...equity, appreciation: e.target.value })} />
                      </div>
        
                  </div>
              }
                
              </div>
          </form>

          <button onClick={runMetrics}>
            Run Report
          </button>
     
        </div>
     )
}


export default Metrics


