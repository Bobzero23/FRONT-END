import './App.css'
import data from './data.json'

function App() {

  const handleRemove = (index) => {
    alert("This is the user index: " + index)
  }

  return (
    <>
      <div className="App">
        <h1>User List</h1>
        {
          data.map((user, index) => {
            return <li key={index} style={{listStyleType: "none"}}>
              <h4>{user.firstName} {" "} {user.lastName}</h4> 
              <button onClick={() => handleRemove(index)}>remove</button>
            </li>
          })
        }

        <button style={{marginTop: "20px"}}>CLEAR</button>
      </div>
    </>
  )
}

export default App
