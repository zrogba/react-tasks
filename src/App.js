import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import Forgot from './components/pages/forgot/forgot';
import Login from './components/pages/login/login';
import Register from './components/pages/register/register';



function App() {
  return (
    <Router>
   
   
      <div className="App">
      <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/forgot" element={<Forgot/>}/>
        
          </Routes>
      </div>
    
    
    </Router>
  );
}

export default App;
