import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signup' element={<Signup />}/>
        <Route path='/homepage' element={<Homepage />}/>
        </Routes>
    </>
  );
}

export default App;
