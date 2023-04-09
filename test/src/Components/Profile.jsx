import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
    const { user, isLoading, isAuthenticated } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div>
                <h1>Profile</h1>
                <img src={user.picture} alt='' className="circle-pic"/>
                <h2>{user.nickname}</h2>
                <p>Email: {user.email}</p>
                <p>Birthday: {user.birthdate}</p>
            </div>
        )
    );
}