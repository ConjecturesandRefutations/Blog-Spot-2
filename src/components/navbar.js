import { React, useContext } from "react";
import { ThemeContext } from './../context/theme.context'; 
import { AuthContext } from "./../context/auth.context";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHome, faGear, faStar, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

  const { theme } = useContext(ThemeContext);
  const { logOutUser } = useContext(AuthContext);
  
  return (

    

<div >
<ul  className={"Navbar " + theme}>
    <li className={"nav_items" }><FontAwesomeIcon className="fa" icon={faHome} />Home</li>
    <li className={"nav_items" }><FontAwesomeIcon className="fa" icon={faUser} />Profile</li>
    <li className={"nav_items" }><FontAwesomeIcon className="fa" icon={faBell} />Notifications</li>
    <li className={"nav_items" }><FontAwesomeIcon className="fa" icon={faStar} />Favourites</li>
    <li className={"nav_items" }><FontAwesomeIcon className="fa" icon={faGear} />Settings</li>
    <li className={"nav_items" } onClick={logOutUser}><FontAwesomeIcon className="fa" icon={faRightFromBracket} />Logout</li>
</ul>

</div>


  );
}


export default Navbar;


