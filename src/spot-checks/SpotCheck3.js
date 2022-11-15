import React, { useState, useEffect } from 'react'

export default function SpotCheck3() {
  // your code here
  const [likes ,setLikes ] = useState(0)

  useEffect(() => {
    document.title = `You have ${likes} likes`
  })
  const updateLikes = () => setLikes(likes + 1)

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <p className="exercise" id="sc-3">
        Eden is the king
      </p>
      <div className="exercise" id="sc-1">
        <button onClick={updateLikes}>Like</button>
      </div>        
    </div>
  )
}

// In the above example our useEffect function:
// Makes an HTTP request to the /expenses endpoint
// Once it receives a response it reassigns the expenses state variable with the response
// Since an empty array ([ ]) is passed as the second argument to the useEffect function, this effect only runs after the first render

// function Example() {
//   const [expenses, setExpenses] = useState([])

//   useEffect(() => {
//     axios.get('/expenses').then((res) => {
//       setExpenses(res.data)
//     })
//   }, [])

//   ...
 


// In the above example we are:
// Creating an effect to update local storage with the current pageNumber
// This effect happens after every render where the pageNumber state variable changes
// Creating a separate effect that makes an HTTP request to our server and updates the clients state variable
// This effect only happens after the first render
// function Example() {
//   const [pageNumber, setPageNumber] = useState(1)
//   const [clients, setClients] = useState([])

//   useEffect(() => {
//     localStorage.setItem('currentPage', pageNumber)
//   }, [pageNumber])

//   useEffect(() => {
//     axios.get('/clients').then((res) => {
//        setClients(res.data)
//     })
//   }, [])

//   ...
//   ...
// }




// Notice in the example above how the callback function that’s passed to useEffect returns
//  a function called cleanup. The cleanup function is invoked just before the component
//   is unmounted. Note, the function does not need a name and can be anonymous. 
//   Returning a function is totally optional and should only be used when you want to 'cleanup’.
// function Example() {
//   const [pageNumber, setPageNumber] = useState(1)
//   const [clients, setClients] = useState([])

//   useEffect(() => {
//     localStorage.setItem('currentPage', pageNumber)

//     return function cleanup() {
//        // Do something before component is unmounted
//     }
//   }, [pageNumber])

//   ...
//   ...
// }


// useEffect(callback, [ ]) - is similar to componentDidMount in that it is invoked once after the first render
// useEffect(callback) - is similar to having componentDidMount and componentDidUpdate executing the same operations. It will run after every render
// useEffect(callback, [stateToTrack]) - is a feature of the useEffect hook which does not exist in class components. This effect will only run when the stateToTrack state variable changes
// In all cases - if the callback passed to useEffect returns a function, that function will be invoked just before the component is unmounted (similar to componentWillUnmount)
// Returning a function is optional and is not needed in a lot of cases