import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Contact.css";
import Tech_Stack_Components from "./Tech_Stack_Components";

export default function Contact() {
  return (
    <div className="contact_root">
      <section id="contact" className="container">
        <div className="jumbotron contact_text">
          <h1 className="display-4">Contact Us</h1>
          <p className="lead contact_lead">We'd love to hear from you!</p>
          <hr className="my-4" />
          <p>
            If you have any questions or inquiries, feel free to reach out to
            us.
          </p>
          {/* Tech stacks */}
          <div className="tech_stacks">
          </div>
        </div>
        <a
          className="whatsapp-icon"
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          <p>Contact us</p>
        </a>
      </section>
                  <Tech_Stack_Components />

    </div>
  );
}
