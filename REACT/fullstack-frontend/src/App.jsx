import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./layout/NavbarComponent"
import HomeComponent from './pages/HomeComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUserComponent from './users/AddUserComponent';
import EditUserComponent from './users/EditUserComponent';

function App() {


  return (
    <div className='App'>
      <Router>
        <NavbarComponent />

        <Routes>
          <Route exact path='/' element={<HomeComponent />} />
          <Route exact path='/addUser' element={<AddUserComponent />} />
          <Route exact path='/editUser/:id' element={<EditUserComponent />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
