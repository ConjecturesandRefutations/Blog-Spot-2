import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login"
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';

import Theme from './components/themeToggle'

function App() {
  const location = useLocation();

  const shouldHideTheme = location.pathname === "/" || location.pathname === "/signup";

  return (
    <>
        {!shouldHideTheme && <Theme />}
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signup' element={<Signup />}/>
        <Route path='/homepage' element={<Homepage />}/>
        </Routes>
    </>
  );
}

export default App;
