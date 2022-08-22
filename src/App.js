
import './App.css';
// import { Link } from "react-router-dom";
import Homepage from './components/homepage/homepage'
import Register from './components/register/Register'
import {Routes , Route} from 'react-router-dom'
import Login from './components/login/login'


function App() {

  return (
    <div className="App">
    <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/login" element={<Login/> } />
  <Route path="/register"  element={<Register/>}/>
  <Route path="/home" element={<Login/>} />
  <Route path="/Homepage" element={<Homepage/>} />
  
  {/*<form action="../../post" method="post" className="form" />*/}
</Routes>
    </div>
  )
}

export default App;
