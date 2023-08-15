import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./layout/NavbarComponent"
import HomeComponent from './pages/HomeComponent';

function App() {


  return (
    <div className='App'>
      <NavbarComponent />
      <HomeComponent />
    </div>
  )
}

export default App
