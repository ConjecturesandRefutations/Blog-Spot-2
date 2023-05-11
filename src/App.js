import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from './pages/Homepage';

import Theme from './components/themeToggle'

import Login from "./pages/Login"
import Signup from './pages/Signup';
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  const location = useLocation();

  const shouldHideTheme = location.pathname === "/" || location.pathname === "/signup";

  return (
    <>
        {!shouldHideTheme && <Theme />}
        <Routes>
        <Route path="/" element={<IsAnon><Login /></IsAnon>} />
        <Route path='/signup' element={<IsAnon><Signup /></IsAnon>}/>
        <Route path='/homepage' element={<IsPrivate><Homepage /></IsPrivate>}/>
        </Routes>
    </>
  );
}

export default App;
