import React, {useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import httpclient from "../httpclient";

export default function Login() {
    const { data, setData} = useState([{}])
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false)

    const registerUser = async () => {
        console.log(email, password);
    
        try {
          const resp = await httpclient.post("//localhost:5000/register", {
            email,
            password,
          });
          window.location.href = "/";
          setAuthenticated(true);
          console.log(authenticated)
        } catch (error) {
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        }
      };

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

                <h1>Create Account</h1>
                <form>
                    <div>
                        <label>Email </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" id=""></input>
                    </div>
                    <div>
                        <label>Password </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" id=""></input>
                    </div>
                    <button className="login-btn" type="button" onClick={() => registerUser()}>
                        Submit
                    </button>
                    <div>
                    <Link to="/auth">Return to sign in</Link>
                    </div>
                </form>
            

            {/* <h2>Sign In</h2>
            <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <div> 
                <a href="/login"><button>Sign In</button></a>
                <a href="/register"><button>Register</button></a>
            </div> */}
            
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