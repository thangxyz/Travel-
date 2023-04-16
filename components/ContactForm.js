import "./ContactForm.css";
import * as React from "react";
function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send a message to us</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send mesage</button>
      </form>
    </div>
  );
}
export default ContactForm;
