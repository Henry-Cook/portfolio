import React from "react";
import "./contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container" id="contact">
        <h1 className="contact-title">Let's Work Together</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea type="text" placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
