import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import { profileDropdown } from "./ProfileDropdown";
import './profile.css';

export const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [open, setOpen] = useState(false);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
        <div className="profile" onClick={() => {setOpen(!open)}}>
          <button>{user.name}</button>

          <ul className={open ? "profile-items clicked" : "profile-items"} onClick={() => {setOpen(!open)}}>
                {profileDropdown.map(item => {
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