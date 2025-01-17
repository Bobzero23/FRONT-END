import './App.css'
import data from './data.json'
import { useState } from 'react'

function App() {
  const [people, setPeople] = useState(data);

  const handleRemove = (id) => {
    const newPoeple = people.filter((person) => person.id !== id);
    setPeople(newPoeple);
  }

  const handleClear = () => {
    setPeople([]);
  }

  return (
    <>
      <div className="App">
        <h1>User List</h1>
        {
          people.map((person) => {
            return <li key={person.id} style={{listStyleType: "none"}}>
              <h4>{person.firstName} {" "} {person.lastName}</h4> 
              <button onClick={() => handleRemove(person.id)}>remove</button>
            </li>
          })
        }

        <button style={{marginTop: "20px"}} onClick={handleClear}>CLEAR</button>
      </div>
    </>
  )
}

export default App
