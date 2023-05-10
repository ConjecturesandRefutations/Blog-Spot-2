import { React, useContext } from "react";
import { ThemeContext } from './../context/theme.context'; 


function Homepage() {

  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={'homepage ' + theme}>

<h1>Hello!</h1>

    </div>

  );
}

export default Homepage;
