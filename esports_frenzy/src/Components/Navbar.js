import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { User } from './User';
import httpclient from "../httpclient";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        (async (event) => {
          try {
            const resp = await httpclient.get("//localhost:5000/@me");
            setUser(resp.data);
            setIsLoggedIn(true);
          } catch (error) {
            console.log("Not authenticated");
          }
        })();
    }, []);

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
                {isLoggedIn && (user != null) ? 
                (
                    <CustomLink to="/profile">{user.email}</CustomLink> 
                ) 
                :
                (
                    <CustomLink to="/auth">Sign In</CustomLink>
                )}
               
            </li>
            <li>
                <User onClick={() => {setOpen(!open)}}/>
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