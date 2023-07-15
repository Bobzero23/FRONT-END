import './App.css'
import Die from './Die'

export default function App() {
  return (
    <div>
      <Die numSide={20} />
      <Die numSide={6} />
      <Die numSide={10} />
    </div>
  )
}


