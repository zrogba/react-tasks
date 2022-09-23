import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forgot from './components/forgot';
import Login from './components/login';
import Register from './components/register';
import FormSuccess from './components/FormSuccess';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route exact path='/' element={< Register />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/FormSuccess" element={<FormSuccess />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;