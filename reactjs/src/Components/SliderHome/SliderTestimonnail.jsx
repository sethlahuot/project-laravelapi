import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgavaters_1 from "../img/avaters/avatar1.png";
import imgavaters_2 from "../img/avaters/avatar2.png";
import imgavaters_3 from "../img/avaters/avatar3.png";

const SliderTestimonial = () => {
  const testimonials = [
    {
      img: imgavaters_1,
      name: "Saira Hakim",
      role: "Local shop owner",
      quote:
        "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore.",
    },
    {
      img: imgavaters_2,
      name: "David Niph",
      role: "Local shop owner",
      quote:
        "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore.",
    },
    {
      img: imgavaters_3,
      name: "Jacob Sikim",
      role: "Local shop owner",
      quote:
        "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="testimonial-section mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 text-center">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="single-testimonial-slider">
                  <div className="client-avatar">
                    <img src={testimonial.img} alt={testimonial.name} />
                  </div>
                  <div className="client-meta">
                    <h3>
                      {testimonial.name} <span>{testimonial.role}</span>
                    </h3>
                    <p className="testimonial-body">"{testimonial.quote}"</p>
                    <div className="last-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTestimonial;
