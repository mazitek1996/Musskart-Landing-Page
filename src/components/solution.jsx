import React from "react";
import "./solution.css";
import SolutionPic from "./images/illustration_dashboard.png";
import TypewriterComponent from "typewriter-effect";
export default function Solution() {
  return (
    <div className="solution_root">
      <div className="container">
        <div className="row">
          <div className="solution_title">
            <h1>Solutions</h1>
          </div>
          <div className="col-lg-6 col-md-6 solution_left">
            <span className="solution_text">
              <p>
                Musskart can help businesses in Nigeria to overcome the
                challenges of the digital age by providing them with the
                following solutions:
              </p>

              <TypewriterComponent
                options={{
                  strings: [
                    "<strong>Web development</strong>",
                    "<strong>App development</strong>",
                    "<strong>Cybersecurity</strong>",
                    "<strong>Digitization</strong>",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>

            <div className="solution_left_image_container">
              <img
                src={SolutionPic}
                alt="solution image"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 solution_right">
            <h2 className="section-heading">Benefits</h2>
            <p>
              By using Musskart's services, businesses in Nigeria can enjoy the
              following benefits:
            </p>
            <ul>
              <li>
                <strong>Increased online presence:</strong> A well-designed
                website or app can help businesses to reach new customers,
                improve customer service, and increase sales.
              </li>
              <li>
                <strong>Improved customer service:</strong> A well-designed
                website or app can make it easier for customers to find the
                information they need and to get in touch with businesses.
              </li>
              <li>
                <strong>Increased sales:</strong> A well-designed website or app
                can help businesses to increase sales by making it easier for
                customers to purchase products or services.
              </li>
              <li>
                <strong>Increased efficiency:</strong> Digitization can help
                businesses to become more efficient by reducing the amount of
                time and resources that are spent on manual tasks.
              </li>
              <li>
                <strong>Reduced costs:</strong> Digitization can help businesses
                to reduce costs by eliminating the need for paper records and by
                automating processes.
              </li>
              <li>
                <strong>Enhanced security:</strong> Cybersecurity can help
                businesses to protect their data from cyber threats, which can
                save them money and reputational damage.
              </li>
            </ul>
          </div>
          <hr />

        </div>
      </div>
    </div>
  );
}
