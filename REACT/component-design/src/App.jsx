import './App.css'
import Dice from './Dice'


function App() {

  return (
    <>
      <Dice dice={[4, 6, 2]} />
      <Dice dice={[4, 6, 2]} color="lightgreen" />
      <Dice dice={[4, 6, 2]} />
    </>

  )
}

export default App
