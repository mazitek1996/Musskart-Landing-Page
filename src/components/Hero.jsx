import React, { useEffect, useRef } from "react";
import "./Hero.css";
import HeroImage from "./images/earth.png";

import Angular from "./images/icons/angular.svg";
import AWS from "./images/icons/amazon.svg";
import HTML from "./images/icons/html.svg";
import NodeJS from "./images/icons/nodejs.svg";
import PHP from "./images/icons/php.svg";
import Python from "./images/icons/python.svg";
import ReactJS from "./images/icons/React-icon.svg.png";
import Ruby from "./images/icons/ruby.svg";

export default function Hero() {
  const earthRef = useRef(null);
  const orbit1Ref = useRef(null);
  const orbit2Ref = useRef(null);
  const orbit3Ref = useRef(null);
  const orbit4Ref = useRef(null);
  const orbit5Ref = useRef(null);
  const orbit6Ref = useRef(null);
  const orbit7Ref = useRef(null);
  const orbit8Ref = useRef(null);

  useEffect(() => {
    const rotationSpeed1 = 1; // Adjust the rotation speed as needed
    const rotationSpeed2 = 2;
    const rotationSpeed3 = 1.5;
    const rotationSpeed4 = 1.8;
    const rotationSpeed5 = 1.2;
    const rotationSpeed6 = 1.7;
    const rotationSpeed7 = 1.3;
    const rotationSpeed8 = 1.6;

    let rotationAngle1 = 0;
    let rotationAngle2 = 0;
    let rotationAngle3 = 0;
    let rotationAngle4 = 0;
    let rotationAngle5 = 0;
    let rotationAngle6 = 0;
    let rotationAngle7 = 0;
    let rotationAngle8 = 0;

    const animatePlanets = () => {
      rotationAngle1 += rotationSpeed1;
      rotationAngle2 += rotationSpeed2;
      rotationAngle3 += rotationSpeed3;
      rotationAngle4 += rotationSpeed4;
      rotationAngle5 += rotationSpeed5;
      rotationAngle6 += rotationSpeed6;
      rotationAngle7 += rotationSpeed7;
      rotationAngle8 += rotationSpeed8;

      const radius1 = 75; // Radius of orbit1
      const radius2 = 125; // Radius of orbit2
      const radius3 = 150; // Radius of orbit3
      const radius4 = 200; // Radius of orbit4
      const radius5 = 100; // Radius of orbit5
      const radius6 = 180; // Radius of orbit6
      const radius7 = 160; // Radius of orbit7
      const radius8 = 140; // Radius of orbit8

      const x1 = Math.cos((rotationAngle1 * Math.PI) / 180) * radius1;
      const y1 = Math.sin((rotationAngle1 * Math.PI) / 180) * radius1;

      const x2 = Math.cos((rotationAngle2 * Math.PI) / 180) * radius2;
      const y2 = Math.sin((rotationAngle2 * Math.PI) / 180) * radius2;

      const x3 = Math.cos((rotationAngle3 * Math.PI) / 180) * radius3;
      const y3 = Math.sin((rotationAngle3 * Math.PI) / 180) * radius3;

      const x4 = Math.cos((rotationAngle4 * Math.PI) / 180) * radius4;
      const y4 = Math.sin((rotationAngle4 * Math.PI) / 180) * radius4;

      const x5 = Math.cos((rotationAngle5 * Math.PI) / 180) * radius5;
      const y5 = Math.sin((rotationAngle5 * Math.PI) / 180) * radius5;

      const x6 = Math.cos((rotationAngle6 * Math.PI) / 180) * radius6;
      const y6 = Math.sin((rotationAngle6 * Math.PI) / 180) * radius6;

      const x7 = Math.cos((rotationAngle7 * Math.PI) / 180) * radius7;
      const y7 = Math.sin((rotationAngle7 * Math.PI) / 180) * radius7;

      const x8 = Math.cos((rotationAngle8 * Math.PI) / 180) * radius8;
      const y8 = Math.sin((rotationAngle8 * Math.PI) / 180) * radius8;

      earthRef.current.style.transform = `rotate(${rotationAngle1}deg)`;
      orbit1Ref.current.style.transform = `translate(${x1}px, ${y1}px) rotate(${-rotationAngle1}deg)`;
      orbit2Ref.current.style.transform = `translate(${x2}px, ${y2}px) rotate(${-rotationAngle2}deg)`;
      orbit3Ref.current.style.transform = `translate(${x3}px, ${y3}px) rotate(${-rotationAngle3}deg)`;
      orbit4Ref.current.style.transform = `translate(${x4}px, ${y4}px) rotate(${-rotationAngle4}deg)`;
      orbit5Ref.current.style.transform = `translate(${x5}px, ${y5}px) rotate(${-rotationAngle5}deg)`;
      orbit6Ref.current.style.transform = `translate(${x6}px, ${y6}px) rotate(${-rotationAngle6}deg)`;
      orbit7Ref.current.style.transform = `translate(${x7}px, ${y7}px) rotate(${-rotationAngle7}deg)`;
      orbit8Ref.current.style.transform = `translate(${x8}px, ${y8}px) rotate(${-rotationAngle8}deg)`;

      requestAnimationFrame(animatePlanets);
    };

    animatePlanets();
  }, []);

  return (
    <div className="hero_root">
      <section id="home" className="container ">
        <div className="row hero_container">
          <div className="col-lg-6 col-md-6 hero-left">
           <span > <h1>Welcome to </h1> <h1 className=" text-bg-danger shadow rounded">Musskart </h1> </span>
            <h4>Your Ultimate Software Solution</h4>
            <div className="hero_text">
              <p>
                Musskart is a leading software development and design company
                that specializes in delivering digital and technical solutions
                for businesses, organizations, and institutions. With our
                extensive range of services, including web development, mobile
                app development, custom software development, and design
                systems, we empower our clients to thrive in the digital
                landscape. No matter the size of your business, we are committed
                to providing you with exceptional service.
              </p>
            </div>
            <div className="team_text d-none d-md-block">
              <p>
              Our team of highly skilled professionals is dedicated to crafting innovative and user-friendly solutions tailored to your unique needs. We take pride in helping our clients achieve their goals by leveraging the latest technologies and industry best practices. With Musskart as your trusted partner, you can unlock new opportunities, streamline operations, and enhance your overall digital presence.

              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 hero-right">
            <div className="hero_left_image">
              <div className="earth-container">
                <img
                  src={HeroImage}
                  alt="Earth"
                  className="earth img-fluid"
                  ref={earthRef}
                  style={{ position: "relative" }}
                />
                <img
                  src={Angular}
                  alt="Angular"
                  className="planet orbit1"
                  ref={orbit1Ref}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <img
                  src={AWS}
                  alt="AWS"
                  className="planet orbit2"
                  ref={orbit2Ref}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <img
                  src={HTML}
                  alt="HTML"
                  className="planet orbit3"
                  ref={orbit3Ref}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <img
                  src={NodeJS}
                  alt="NodeJS"
                  className="planet orbit4"
                  ref={orbit4Ref}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <img
                  src={PHP}
                  alt="PHP"
                  className="planet orbit5"
                  ref={orbit5Ref}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <img
                  src={Python}
                  alt="Python"
                  className="planet orbit6"
                  ref={orbit6Ref}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <img
                  src={ReactJS}
                  alt="ReactJS"
                  className="planet orbit7"
                  ref={orbit7Ref}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <img
                  src={Ruby}
                  alt="Ruby"
                  className="planet orbit8"
                  ref={orbit8Ref}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
