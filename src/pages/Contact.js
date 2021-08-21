import React from "react";
import { Envelope, Phone } from "react-bootstrap-icons";

const Contact = () => {
  return (
    <div className="Contact">
      <h2>Contact Me:</h2>
      <p>
        <Envelope />
        holley2032@gmail.com
      </p>
      <p>
        <Phone />
        Phone: 713-647-1623
      </p>
    </div>
  );
};

export default Contact;
