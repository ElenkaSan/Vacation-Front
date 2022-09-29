import React, { useContext } from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { NavLink, useHistory } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css";
import {TbHaze} from "react-icons/tb"
// import {FaSignOutAlt} from "react-icons/fa"

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
// import profily1 from '../img/findTrip.png';
import flighty from '../img/flight.png';
import hotl from '../img/hotel.png';
import profily from '../img/user.png';
import findTrip from '../img/mytrip.png';
import DEFAULT  from '../img/trip.png';
import sign from '../img/signup.png';
import logouty from '../img/logout.png';
import log from '../img/login.png';


// Navbar provides the navigation in the Navbar of the app.
// It will show navlinks based on whether a user is logged in or not.
// In order to determine this, it looks at the user profile's "isLoggedIn" status.
// If a user is logged in, the user will see the log out button, which will log the user 
// out from the session on the app script and will push them to the home page
// using windows history object. 


function Navigation({ logout }) {
  const { isLoggedIn } = useContext(UserContext);
  const history = useHistory();
  const handleClick = () => {
      logout();
      history.push("/");
  }

  return (
    <div>
        <Navbar expand="md">
            <NavLink exact to="/" className="nav p-2">
                <h3> Travel <img src={DEFAULT} alt="trip" style={{ height:'30px', width:'30px'}}/> </h3>
            </NavLink>
            <Nav className="ml-auto" navbar>
                {isLoggedIn
                ? (<>
                    <DropdownButton className="navbar-toggler" variant="warning" // id="dropdown-warning-button" 
                    data-toggle="collapse" title={ <h4><TbHaze/></h4> } data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" > 
                        <Dropdown.Item>
                          <NavLink to="/flights" type="Flights">   
                            <h3> <img src={flighty} alt="flight" style={{ height:'30px', width:'30px'}} /> </h3>
                          </NavLink>
                          <NavLink to="/hotels" type="Hotels"> 
                            <h3> <img src={hotl} alt="hotel" style={{ height:'30px', width:'30px'}} /> </h3>
                          </NavLink>
                          <NavLink to="/profile" type="Profile">  
                            <h3> <img src={profily} alt="profile"style={{ height:'30px', width:'30px'}} /> </h3>
                          </NavLink>
                          <NavItem>
                            <h3 className="btn nav mx-auto my-2" onClick={handleClick} type="logout">  {/* <FaSignOutAlt /> Bye!  */}
                              <img src={logouty} alt="logout" style={{ height:'30px', width:'30px'}} />
                            </h3>
                          </NavItem>
                        </Dropdown.Item>
                    </DropdownButton>
                    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavItem>
                            <NavLink to="/flights"
                            className="nav col-sm-3 col-sm-3 col-sm-6 col-sm-8 mx-auto my-2" type="Flights"> 
                                <h3>
                                <img src={flighty} alt="flight" style={{ height:'30px', width:'30px'}} />
                                </h3>
                                </NavLink>
                            </NavItem>
                        <NavItem>
                           <NavLink to="/hotels"
                            className="nav col-sm-3 col-sm-3 col-sm-6 col-sm-8 mx-auto my-2" type="Hotels"> 
                                <h3>
                                <img src={hotl} alt="hotel" style={{ height:'30px', width:'30px'}} />
                                </h3>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/profile" className="nav col-sm-3 col-sm-3 col-sm-6 col-sm-8 mx-auto my-2" type="Profile">  
                                <h3> 
                                <img src={profily} alt="profile" style={{ height:'30px', width:'30px'}} />
                                </h3>
                            </NavLink><span></span>
                        </NavItem>
                        <NavItem>
                            <h3 className="btn nav col-sm-3 col-sm-3 col-sm-6 col-sm-8 mx-auto my-2" onClick={handleClick} type="logout">
                                {/* <FaSignOutAlt /> Bye!  */}
                            <img src={logouty} alt="logout" style={{ height:'30px', width:'30px'}} />
                            </h3>
                        </NavItem>
                    </div>
                    </>) : (<>
                    <DropdownButton className="navbar-toggler" variant="warning" // id="dropdown-warning-button" 
                    data-toggle="collapse" title={ <h4><TbHaze/></h4> } data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" > 
                        <Dropdown.Item>
                          <NavLink to="/flights" type="Flights">
                            <h3> <img src={flighty} alt="flight" style={{ height:'30px', width:'30px'}} /> </h3>
                           </NavLink>
                          <NavLink to="/hotels" type="Hotels">  
                            <h3> <img src={hotl} alt="hotel" style={{ height:'30px', width:'30px'}} /> </h3>
                          </NavLink>
                          <NavLink to="/weather" type="weather">  
                                <h3> 
                                <img src={findTrip} alt="car rent" style={{ height:'30px', width:'30px'}} />
                                </h3>
                            </NavLink>
                          <NavLink to="/login" type="login"> 
                            <h3> <img src={log}alt="login" style={{ height:'30px', width:'30px'}} />  {/* <FaSignInAlt /> */}
                            </h3>
                          </NavLink>
                          <NavLink to="/signup" type="signup"> 
                            <h3> <img src={sign} alt="signup" style={{ height:'30px', width:'30px'}} />  {/* <MdSwitchAccount />  */}
                            </h3> 
                          </NavLink>
                        </Dropdown.Item>
                    </DropdownButton>
                    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavItem>
                            <NavLink to="/flights" type="Flights">   
                                <h3> <img src={flighty} alt="flight" style={{ height:'30px', width:'30px'}} />  </h3>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/hotels" type="Hotels"> 
                                <h3> <img src={hotl} alt="hotel" style={{ height:'30px', width:'30px'}} /> </h3>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/weather" className="nav col-sm-3 col-sm-3 col-sm-6 col-sm-8 mx-auto my-2" type="weather">  
                                <h3> 
                                <img src={findTrip} alt="weather" style={{ height:'30px', width:'30px'}} />
                                </h3>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/login" type="login" >
                                <h3> <img src={log} alt="login" style={{ height:'30px', width:'30px'}} />  {/* <FaSignInAlt /> */}
                                </h3> 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/signup" type="signup"> 
                                <h3> <img src={sign} alt="signup" style={{ height:'30px', width:'30px'}} />  {/* <MdSwitchAccount />  */}
                                </h3> 
                            </NavLink>
                        </NavItem>
                    </div>
                </>)
                }
            </Nav>
        </Navbar>
    </div>
);
}

export default Navigation;
