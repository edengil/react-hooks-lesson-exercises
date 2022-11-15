import React,{useState} from 'react'

export default function SpotCheck1() {
  const [currentNumber, setNumber] = useState(0)  
  const addNumber = () => setNumber(currentNumber + 1)
  const decreasesNumber = () => setNumber(currentNumber - 1)
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <button onClick={addNumber}>Add</button>
        <button onClick={decreasesNumber}>Decreases</button>
      </div>
      <br></br>
      <div>
        {currentNumber}
      </div>
      <br></br>
    </div>
  )
}


