import { NavLink } from "react-router-dom"

export default function Header() {

    return (
        <div className={`header-block`}>
            <div className="header-row">
                <NavLink to ="/" className="header-box ">Me</NavLink>
                <NavLink to ="/about" className="header-box ">About</NavLink>
                <NavLink to ="/stuff" className="header-box ">Stuff</NavLink>
                <NavLink to ="/under-construction" className="header-box ">Blog</NavLink>
                <NavLink to ="/contact" className="header-box ">Contact</NavLink>
            </div>
        </div>
    );
}