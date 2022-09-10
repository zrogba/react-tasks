import './App.css';
import {Link } from 'react-router-dom';
import Forgot from './components/pages/forgot/forgot';
import Login from './components/pages/login/login';
import Register from './components/pages/register/register';


function App() {
  return (
    <div className="App">
    <div className='container'>
    <Forgot/>
    </div>
   
    </div>
  );
}

export default App;
