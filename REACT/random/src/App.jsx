import './App.css'
import data from './data.json'
import { useState } from 'react'

function App() {
  const [people, setPeople] = useState(data);

  const handleRemove = (index) => {}

  const handleClear = () => {
    setPeople([]);
  }

  return (
    <>
      <div className="App">
        <h1>User List</h1>
        {
          people.map((person, index) => {
            return <li key={index} style={{listStyleType: "none"}}>
              <h4>{person.firstName} {" "} {person.lastName}</h4> 
              <button onClick={() => handleRemove(index)}>remove</button>
            </li>
          })
        }

        <button style={{marginTop: "20px"}} onClick={handleClear}>CLEAR</button>
      </div>
    </>
  )
}

export default App
