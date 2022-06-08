import React, { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(true);
    await setTimeout(() => {
      setMessage(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="left">
        {message && (
          <p className="mobile">Thank you, I will reach out ASAP &#128516;</p>
        )}

        <img
          src="https://www.htcinc.net/wp-content/uploads/2020/07/shake-hands-yellow-1.png"
          alt="shake hands"
        />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit" prev>
            Send
          </button>
          {message && (
            <p className="desktop">
              Thank you, I will reach out ASAP &#128516;
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
