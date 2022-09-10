import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forgot from './components/forgot';
import Login from './components/login';
import Register from './components/register';



function App() {
  return (
    <BrowserRouter>
   
   
      <div className="App">
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgot" element={<Forgot/>}/>
        
          </Routes>
      </div>
    
    
    </BrowserRouter>
  );
}

export default App;
