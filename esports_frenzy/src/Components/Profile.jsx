import React, { useState, useEffect } from "react";
import httpclient from "../httpclient";
import './Login.css';

export default function Profile() {
    const [user, setUser] = useState(null);

    const logoutUser = async () => {
        await httpclient.post("//localhost:5000/logout");
        window.location.href = "/";
    };

    useEffect(() => {
        (async () => {
          try {
            const resp = await httpclient.get("//localhost:5000/@me");
            setUser(resp.data);
          } catch (error) {
            console.log("Not authenticated");
          }
        })();
    }, []);


    return (
            <div>
                <h1>Profile</h1>
                {user != null ? 
                (
                    <>
                        <h2>ID: {user.id}</h2> 
                        <h2>Email: {user.email} </h2>
                        <button className="login-btn" onClick={logoutUser}>Sign Out</button>
                    </>
                ) 
                :
                (
                    <h2>Cannot find user.</h2>
                )}
            </div>
    );
}