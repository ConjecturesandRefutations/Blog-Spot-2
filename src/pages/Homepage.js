import { React, useContext } from "react";
import { ThemeContext } from './../context/theme.context'; 
import Navbar from "../components/navbar";


function Homepage() {

  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={'homepage ' + theme}>

      <Navbar/> 

      <div className="homeContent">
      <h1 id="hello">Hello!</h1>
      </div>

    </div>

  );
}

export default Homepage;
