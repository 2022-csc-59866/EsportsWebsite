import React, { useState } from 'react';

function MessageBox() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="message-box">
      <textarea
        style={{ height: "200px", width: "50%" }}
        placeholder="Type your message here"
        value={message}
        onChange={handleMessageChange}
      />
      <br></br>
      <button style={{color: "greenyellow"}}>Send</button>
      <br></br>
    </div>
  );
}

export default function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Have any questions? Feel free to contact us!</p>
      <p>Owner: Melson Heo and Gazi Shahi</p>
      <MessageBox />
      <br></br>
      <p>For any business inquiries, feel free to email at esportsfrenzy@gmail.com</p>
      <p>For any other inquiries, set an appointment with us by calling 646-572-3452</p>
    </div>
  );
}
