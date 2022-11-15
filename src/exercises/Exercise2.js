import React, { useState, useEffect } from 'react'
import axios from "axios";



export default function Exercise2() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5').then((res) => {
      setUsers(res.data.results.map(u  => [u.name,u.picture]))
    })
  }, [])
  
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map((u,key) => 
        <div key={key}>
        <div>{u[0].first} {u[0].last}</div>
        <img src={u[1].thumbnail} alt="" />
        </div>
        )}

      </div>
    </div>
  )
}