import React  from "react";
import "./App.css";
import {Link} from 'react-router-dom'



function Nav() {

    const navstyle ={
        color: 'white'
    };
  
    return (
      <nav >
          <Link style={navstyle} to='/' >
          <h3> Cadena Productiva Maíz - Área, Producción Y Rendimiento</h3> 
          </Link>
          
          <ul className="nav-link">
              <Link style={navstyle} to='/datos'>
                <li><h3>Datos</h3></li>
              </Link>

              <Link style={navstyle} to='/grafica'>
                <li><h3>Grafica</h3></li>
              </Link>

              {/* <Link style={navstyle} to='/chat'> 
                 <li><h3>Chat</h3></li>
              </Link> */}
       
          </ul>
      </nav>
        
    );
}

export default Nav;