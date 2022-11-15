import React, { useState, useEffect } from 'react'
import { fetchExpenses } from '../data/utils'

export default function Exercise3() {
  const [form, setForm] = useState({
    month :""
  })

  const [monthIndex, setMonthIndex] = useState(0);
  const [monthInfo, setMonthInfo] = useState([]);


  const handleInput = e => setMonthIndex(months.indexOf(e.target.value))


  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  useEffect(() => {
    async function fetchData() {
      let monthData = await fetchExpenses(monthIndex);
      setMonthInfo(monthData);
    }
    fetchData();
  }, [monthIndex]);


  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
      <select
          name="month"
          id="month"
          value={months[monthIndex]}
          onChange={handleInput}
        >
          <option value="" hidden>
            Choose month
          </option>
          {months.map(m => (
            <option key={m}>{m}</option>
          ))}
        </select>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {monthInfo.map((data, i) => (
              <tr key={i}>
                <td>{data.item}</td>
                <td>{data.date}</td>
                <td>{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}