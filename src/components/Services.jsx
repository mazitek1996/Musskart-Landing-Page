import React, { useEffect } from 'react'
import "./Services.css";
import { Carousel } from "bootstrap";

import WebDev from "./images/Programming-amico.svg";
import Digit from "./images/Business Plan-amico.svg";
import SEO from "./images/SEO-rafiki.svg";

export default function Services() {

  const interval = 5000;

  useEffect(() => {
    const carouselElement = document.getElementById("carouselExampleDark");
    const carousel = new Carousel(carouselElement, {
      interval: interval,
    });

    return () => {
      carousel.dispose();
    };
  }, []);


  return (
    <div className='service_root ' id='services'>
      <div className="service_container container">
        <div className="card shadow">
          <div className="card-body">
          <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div
                  className="carousel-item active"
                  data-bs-interval={interval}
                >
                  <img
                    src={WebDev}
                    className="d-block w-100 img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption custom-caption">
                    <h5 className="mt-0">Web & Software Development</h5>
                    <p>
                      We specialize in creating responsive and scalable web
                      applications tailored to your specific requirements.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={interval}>
                  <img
                    src={Digit}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption custom-caption">
                    <h5 className="mt-0">Digitalization & Cloud Computing</h5>
                    <p>
                      Unlock the power of digital transformation with our
                      cloud computing solutions and innovative strategies.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={interval}>
                  <img
                    src={SEO}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption custom-caption">
                    <h5 className="mt-0">SEO & Digital Marketing</h5>
                    <p>
                      Enhance your online presence and drive organic traffic
                      with our effective SEO and digital marketing strategies.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>     
                 </div>
                 
        </div>
      </div>
    </div>
  )
}
