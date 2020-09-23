import React, { useState } from "react";
import { Checkmark } from "react-checkmark";
import emailjs from "emailjs-com";

import "./contact.css";

function Contact() {
  const [emailSent, setEmailSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "contact_me",
        "contact_me",
        e.target,
        process.env.REACT_APP_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmailSent(true);
  }

  return (
    <>
      {!emailSent && (
        <>
          <div className="contact-container" id="contact">
            <h1 className="contact-title">Let's Work Together</h1>
            <form onSubmit={sendEmail}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Email" name="user_email" />
              <textarea type="text" placeholder="Message" name="message" />
              <button className="send-btn" type="submit" value="Send">
                Send
              </button>
            </form>
          </div>
        </>
      )}
      {emailSent && (
        <>
          <div className="contact-container" id="contact">
            <h1 className="contact-title">Thank You</h1>
            <Checkmark size={100} color="#494949" />
          </div>
        </>
      )}
    </>
  );
}

export default Contact;
