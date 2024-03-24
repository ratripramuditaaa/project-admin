/* import logo from './logo.svg'; */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './login';
import Register from './register';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;