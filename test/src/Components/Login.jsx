import React, {useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';

export default function Login() {
    const { data, setData} = useState([{}])
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/members')
            .then(response => response.json())
            .then(data => console.log(data));
    }, [data])

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        // !isAuthenticated && (
        //     <div>
        //         <button className="log-btn" onClick={() => loginWithRedirect()}>Sign In</button> 
        //     </div>
        // )
        <div className="login-form">
            <h2>Sign In</h2>
            <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button>Sign In</button>
            <button>Register</button>
            {/* {(typeof data.members === 'undefined') ? (
                <p>Loading...</p>
            ): (
                data.members.map((members, i) => (
                    <p key={i}>{members}</p>
                ))
            )} */}
        </div>
    )
}