import { useState, useContext } from 'react'

import { ThemeContext } from '../context/theme.context';

import dark from '../images/Dark.png'
import light from '../images/Light.png'

function Theme(){

  const { theme, toggleTheme } = useContext(ThemeContext);

function changeTheme(theme){
  if (theme === 'dark'){
    return light;
  } else {
     return dark;
  }
};

return(
<>
<div class='themeButton'>
<img class='sun-moon' src={changeTheme(theme)} alt='sun-moon' onClick={toggleTheme}/>
</div>
</>
)

}

export default Theme;