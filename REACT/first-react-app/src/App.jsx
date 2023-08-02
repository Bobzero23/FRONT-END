import './App.css'
import ColorBox from './ColorBox'
import ColorBoxGrid from './ColorBoxGrid'

const colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
  "#800080",
  "#008000",
  "#008080",
  "#800000",
  "#000080",
  "#FFC0CB",
  "#FFD700",
  "#ADD8E6",
  "#7FFFD4",
  "#DC143C",
  "#00CED1",
  "#FF6347",
  "#8B008B",

]

export default function App() {
  return (
    <div className='my-app'>
      <ColorBoxGrid colors={colors} />
    </div>
  )
}


