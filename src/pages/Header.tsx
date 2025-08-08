import { NavLink } from "react-router-dom"

type HeaderProps = {
    onContactClick: () => void;
};

export default function Header({ onContactClick }: HeaderProps) {

    return (
        <div className={`header-block`}>
            <div className="header-row">
                <NavLink to ="/" className="header-box ">Me</NavLink>
                <NavLink to ="/about" className="header-box ">About</NavLink>
                <NavLink to ="/stuff" className="header-box ">Stuff</NavLink>
                <NavLink to ="/under-construction" className="header-box ">Blog</NavLink>
                <a onClick={onContactClick} className="header-box" style={{ cursor: "pointer"}}> Contact </a>
            </div>
        </div>
    );
} 