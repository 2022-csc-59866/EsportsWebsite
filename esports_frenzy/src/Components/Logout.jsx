import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
    const { logout, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated &&
        (
            <div>
                <button className="log-btn" onClick={() => logout()}>Sign Out</button>
            </div>
        )
    )
}