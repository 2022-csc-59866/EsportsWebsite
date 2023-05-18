import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { userDropdown } from "./UserDropdown";
import './user.css';

export const User = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [open, setOpen] = useState(false);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
        <div className="user" onClick={() => {setOpen(!open)}}>
          <button>{user.nickname}</button>

          <ul className={open ? "user-items clicked" : "user-items"} onClick={() => {setOpen(!open)}}>
                {userDropdown.map(item => {
                  if (item.title === "Sign Out") {
                    return (
                    <li key={item.id}>
                      <Link to={item.path} className={item.cName} onClick={() => logout()}>
                          {item.title}
                      </Link>
                      </li>
                    )
                  }
                  else {
                    return (
                      <li key={item.id}>
                      <Link to={item.path} className={item.cName} onClick={() => {setOpen(false)}}>
                          {item.title}
                      </Link>
                      </li>
                    )
                  }
                })}
            </ul>
        </div>
    )
  );
};