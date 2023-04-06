import { NavLink } from "react-router-dom";

import "./nav.css";
export default function Nav() {
  return (
    <div className="menu">
      <ul className="nav">
         <li> <NavLink to="/"  className={({isActive}) =>(isActive? "activelink" : undefined)}>Home</NavLink> </li>        
         <li> <NavLink to="/search" className={({isActive}) =>(isActive? "activelink" : undefined)}>Rechercher un pays</NavLink></li>        
         <li> <NavLink to="/list" className={({isActive}) =>(isActive? "activelink" : undefined)}>liste des pays</NavLink></li>        
         <li> <NavLink to="/todolist" className={({isActive}) =>(isActive? "activelink" : undefined)}>Todolist</NavLink></li>        
         <li> <NavLink to="/exercices" className={({isActive}) =>(isActive? "activelink" : undefined)}>Exercices</NavLink></li>        
         <li> <NavLink to="/blog" className={({isActive}) =>(isActive? "activelink" : undefined)}>Blog</NavLink></li>        
      </ul>
    </div>
  );
}