import React from "react";
import "./About.css"
import AboutImage from "./images/10798281_19362653.jpg"
export default function About() {
  return (
   <div className="about_root">
     <div className="container">
      <section id="about" >
        <div className="row">
          <div className="col-lg-6 col-md-6 about-left">
            <div className="about_header_text">
            <h1>About Musskart</h1>
            <p>
              Musskart is a leading provider of innovative and user-friendly solutions tailored to your unique needs. We take pride in helping our clients achieve their goals by leveraging the latest technologies and industry best practices. With Musskart as your trusted partner, you can unlock new opportunities, streamline operations, and enhance your overall digital presence.
            </p>
            <p>
              Our team of highly skilled professionals is dedicated to crafting solutions that meet your specific requirements. We understand that every business is different, and we tailor our approach accordingly. We are committed to providing you with the best possible service, and we are always available to answer your questions and help you find the solution that is right for you.
            </p>
            <p>
              We invite you to learn more about Musskart and how we can help you achieve your goals. Contact us today to schedule a consultation.
            </p>
            </div>
            
          </div>

          <div className="col-lg-6 col-md-6 about-right">
            <img src={AboutImage} alt="Musskart Tech Image" className="img-fluid" />
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-lg-12 mission_text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to help businesses of all sizes achieve their goals by providing them with innovative and user-friendly solutions. We believe that technology can be a powerful tool for businesses, and we are committed to helping our clients use technology to their advantage.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-lg-12 value_text">
            <h2>Our Values</h2>
            <ul>
              <li>We are committed to providing our clients with the best possible service.</li>
              <li>We are always looking for new and innovative ways to help our clients achieve their goals.</li>
              <li>We are passionate about technology and its potential to help businesses succeed.</li>
              <li>We are a team of highly skilled and experienced professionals.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-lg-12 team_text">
            <h2>Our Team</h2>
            <p>
              Our team is made up of highly skilled and experienced professionals who are passionate about helping businesses succeed. We have a deep understanding of the latest technologies and industry best practices, and we are committed to providing our clients with the best possible service.
            </p>
            <p>
              We are always looking for new and innovative ways to help our clients achieve their goals. If you are looking for a partner who can help you take your business to the next level, then we encourage you to contact us today.
            </p>
          </div>
        </div>
      </section>
    </div>
   </div>
  );
}
