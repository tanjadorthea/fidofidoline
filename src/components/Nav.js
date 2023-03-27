import { NavLink } from "react-router-dom";
export default function Nav(){
    return (
        <nav className="globalnavigation">
            <NavLink to="/">Forside</NavLink>
            <NavLink to="/prisliste">Prisliste</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/om">Om</NavLink>
            <NavLink to="/Bookinger">Bookinger</NavLink>
        </nav>
    )
}