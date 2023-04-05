import React, { useState } from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import { Login } from './Login';
import { Logout } from './Logout';
import { Profile } from './Profile';
import { profileDropdown } from "./ProfileDropdown";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return <nav className="nav">
        <Link to="/" className="site-title">Esports Frenzy</Link>
        <ul>
            <li>
                <CustomLink to="/about">About</CustomLink>
            </li>
            <li>
                <CustomLink to="/lol">League of Legends</CustomLink>
            </li>
            <li>
                <CustomLink to="/careers">Careers</CustomLink>
            </li>
            <li>
                <CustomLink to="/contact">Contact Us</CustomLink>
            </li>
            <li>
                <Login/>
            </li>
            <li>
                <Profile onClick={() => {setOpen(!open)}}/>
            </li>
            
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}> {children} </Link>
        </li>
    )
}