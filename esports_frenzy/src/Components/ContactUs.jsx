import React, { useState } from 'react';
import httpclient from "../httpclient";

export default function ContactUs() {
  const [email, setEmail] = useState('');
  const [full_name, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const enterMessage = async () => {
    try {
      await httpclient.post("https://esports-frenzy-flask.onrender.com/message", {
        email,
        full_name,
        subject,
        message,
      });
    } catch (error) {
      if (error.response.status === 401) {
        alert("Message did not send");
      }
    }
  };

  return (
    <div style={{backgroundColor:"rgba(0,0,0,0.7)", width:"75%", marginLeft:"200px", padding:"10px", borderRadius:"10px"}}>
      <h1>Contact Us</h1>
      <p>Have any questions? Feel free to contact us!</p>
      <p>Owner: Melson Heo and Gazi Shahi</p>
      <div style={{fontFamily:"Manrope" }}>
        <input onChange={(e) => setFullName(e.target.value)} style={{marginRight:"5px", width:"24%"}} type='text' placeholder='Name'></input>
        <input onChange={(e) => setEmail(e.target.value)} style={{width:"25%"}} type='email' placeholder='Email'></input>
      </div>
      <div style={{margin:"5px", fontFamily:"Manrope" }}>
        <input onChange={(e) => setSubject(e.target.value)} style={{width:"50%"}}  type='text' placeholder='Subject'></input>
      </div>
      <textarea
        style={{ height: "200px", width: "50%", borderRadius:"10px", fontFamily:"Manrope" }}
        placeholder="Type your message here"
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
      />
      <br></br>
      <button onClick={() => enterMessage()} style={{color: "greenyellow", borderRadius:"20px", width:"200px", fontFamily:"Manrope"}}>Send</button>
      <br></br>
      <br></br>
      <p style={{fontFamily:"Quicksand"}}>For any business inquiries, feel free to email at esportsfrenzy@gmail.com</p>
      <p style={{fontFamily:"Quicksand"}}>For any other inquiries, set an appointment with us by calling 646-572-3452</p>
    </div>
  );
}
