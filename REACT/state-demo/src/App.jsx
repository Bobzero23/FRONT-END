import './App.css'
import ScoreKeeperEx from './ScoreKeeperEx'

const players = new Array(10);
players.fill("Player");


function App() {
  return (
    <>
      <ScoreKeeperEx players={players} target={10} />
    </>
  )
}

export default App
