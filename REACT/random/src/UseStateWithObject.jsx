import React from 'react'
import data from './data'

const UseStateWithObject = () => {
    const [person, setPerson] = React.useState({
        name: 'peter',
        age: 24,
        message: 'random message'
    });

    const changePerson = () => {
        setPerson({...person, message: 'hello world'});
    }

  return (
    <div>
        <h2>{person.name}</h2>
        <h2>{person.age}</h2>
        <h2>{person.message}</h2>
        <button className="btn" onClick={changePerson}>Change Person</button>
    </div>
  )
}

export default UseStateWithObject