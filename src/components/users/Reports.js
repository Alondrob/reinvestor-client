import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Reports() {
    const [report, setReport] = useState([]);
    const [address, setAdress] = useState('');
    const [costOfCapital, setCostOfCapital] = useState(0)
    // const [noi, setNoi] = useState({})
    const {id} = useParams();

    console.log(id)

    // let id = parseInt(idObjStr["id"].slice(1));

    // console.log(id)

    const getReport = () => {
        let url = `http://localhost:3000/reports/${id}`
        
        fetch(url)
        .then(res => res.json())
        .then(data => setReport(data))

    }

    const numArr = () => {
        let newArr = [];

        for(let i=0; i<=400; i+=.25){
            newArr.push(i)
        }
        return newArr
    }

    const noi = report.map((value, i) => 
    Math.round(
            (value.equity - (value.price * value.down_payment))
        +
        (value.income)
        -
        (value.expenses.property_taxes + value.expenses.property_vacancy_rate + value.expenses.annual_property_repairs) 
        -
        (value.loan.principal + value.loan.interest))
    )
 
    const irr = () => {
        let npv = 0 ;
        let investment = report.map(value => value.down_payment*value.price)[0]
        for(let i=0; i < noi.length; i++){
            npv += noi[i]/((1+costOfCapital) ** (i+1))
        }
        const irr = () => {
            let maxTries = 10000;
            const delta = 0.001;
            let i = 0;

            while (i < maxTries) {

            }
        }
        return (npv - investment)
    }
 
    console.log(noi)
    console.log(report)
    console.log(irr())
    
    // console.log(report.map(x) => x.)
    useEffect(() => {
        getReport();
    }, []);

    return (
    
                <div className="border-b border-gray-200 shadow">
                    <div
                        className="grid justify-items-center border-4 text-lg"
                    >
                        {report.length > 0 && 
                        <div>
                        <h2>Report Name: {report[0]["address"]}</h2>
                        <h3>Out Of Pocket: {Math.round((report[0]["price"]) * (report[0]["down_payment"]))}</h3>
                        <h3>Cost Of Capital:
                            <select onChange={(e) => parseFloat(setCostOfCapital(e.target.value/100))}>
                                {numArr().map((val,i) => <option>{val}</option>)}
                               
                            </select>
                        </h3>
                        </div>
                      
                        }
                    </div>
                    <table className="divide-y divide-gray-900 table-fixed mt-3">
                        <thead className="bg-gray-50 flex-wrap">
                            <tr>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    ID
                                </th>
                                    {report.map((value, i) =>
                                        <th className=" flex-autopx-6 py-4 text-sm text-gray-500">Year-{value.year}
                                        </th>)}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300">
                            <tr className="max-w-lg">
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    Annual Income
                                </td>
                                    {report.map((value, i) =>
                                        <td className="px-6 py-4 text-sm text-gray-500">${value.income}
                                        </td>)}                                  
                            </tr>

                            <tr className="max-w-lg">
                                <td className="px-6 py-4 text-sm text-gray-500">
                                  Expenses
                                </td>
                                    {report.map((value, i) =>
                                        <td className="px-6 py-4 text-sm text-gray-500">(${value.expenses.property_taxes + 
                                        value.expenses.property_vacancy_rate + value.expenses.annual_property_repairs})
                                        </td>)}                                  
                            </tr>

                            <tr className="max-w-lg">
                                <td className="px-6 py-4 text-sm text-gray-500">
                                  Financial Expenses
                                </td>
                                    {report.map((value, i) =>
                                        <td className="px-6 py-4 text-sm text-gray-500">(${
                                        value.loan.principal + value.loan.interest})
                                        </td>)}                                  
                            </tr>

                            <tr className="max-w-lg bg-black white">
                                <td className="px-6 py-4 text-sm text-white font-bold">
                                  NOI
                                </td>

                                    {report.map((value, i) =>
                                        <td className="px-6 py-4 text-sm text-white font-bold">
                                            ${value.income - 
                                            (value.expenses.property_taxes + value.expenses.property_vacancy_rate + value.expenses.annual_property_repairs) -
                                            (value.loan.principal + value.loan.interest)
                                            }
                                       
                                        </td>)}                                  
                            </tr>
                            
                         
                            <tr className="max-w-lg bg-black white pt-96">
                                    <td className="px-6 py-4 text-sm text-white font-bold">
                                        COC
                                    </td>

                                    {report.map((value, i) =>
                                        <td className="px-6 py-4 text-sm text-white font-bold">
                                            %{parseFloat((value.income -
                                                (value.expenses.property_taxes + value.expenses.property_vacancy_rate + value.expenses.annual_property_repairs) -
                                                (value.loan.principal + value.loan.interest)) / (value.down_payment * value.price / 100)).toFixed(2)
                                                // /(report.down_pmt)
                                            }

                                        </td>)}
                            </tr>
                            <br></br>
                            <tr className="max-w-lg bg-black white pt-96">
                                    <td className="px-6 py-4 text-sm text-white font-bold">
                                        Equity
                                    </td>

                                    {report.map((value, i) =>
                                        <td className="px-6 py-4 text-sm text-white font-bold">
                                            ${Math.round(value.equity) 
                                                
                                                // /(report.down_pmt)
                                            }

                                        </td>)}
                            </tr>
                            <br></br>
                            <tr className="max-w-lg bg-black white pt-96">
                                    <td className="px-6 py-4 text-sm text-white font-bold">
                                        Exit-Profit
                                    </td>

                                    {report.map((value, i) =>
                                        <td className="px-6 py-4 text-sm text-white font-bold">
                                            ${Math.round(value.equity - (value.price*value.down_payment)) 
                                                
                                                // /(report.down_pmt)
                                            }

                                        </td>)}
                            </tr>
                            <br></br>
                            <tr className="max-w-lg bg-black white pt-96">
                                    <td className="px-6 py-4 text-sm text-white font-bold">
                                        Positive Cash Flow
                                    </td>

                                    {report.map((value, i) =>
                                        <td className="px-6 py-4 text-sm text-white font-bold">
                                            ${Math.round
                                                (value.equity - (value.price*value.down_payment)) 
                                                +
                                                (value.income)
                                                -
                                                (value.expenses.annual_property_repairs + value.expenses.property_taxes + value.expenses.property_vacancy_rate)
                                                -
                                                (value.loan.principal + value.loan.interest)

                                                // /(report.down_pmt)
                                            }

                                        </td>)}
                            </tr>
                            
                            
                     
                        </tbody>
                    </table>
                </div>
      
    )
}

export default Reports