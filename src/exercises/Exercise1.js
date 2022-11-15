import React, { useState } from 'react'

export default function Exercise1() {
  const [form, setForm] = useState({
    name:"",
    city:"",
    country :""
  })

  const handleInput = e => setForm({...form,[e.target.name]:e.target.value})


  const countries = ['united states', 'china', 'united kingdom', 'australia']
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInput}
          placeholder="Name"
        />
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleInput}
          placeholder="City"
        />
        <select
          name="country"
          id="country"
          value={form.country}
          onChange={handleInput}
        >
          <option value="" hidden>
            Choose country
          </option>
          {countries.map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
    </div>
  )
}



