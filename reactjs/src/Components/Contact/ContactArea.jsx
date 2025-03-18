import React, { useState } from "react";

const ContactArea = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-form-section mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="form-title">
              <h2>Have you any question?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div id="form_status"></div>
            <div className="contact-form">
              <form id="fruitkha-contact" onSubmit={handleSubmit}>
                <p>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <input
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <input type="submit" value="Submit" />
                </p>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-form-wrap">
              <div className="contact-form-box">
                <h4>
                  <i className="fas fa-map"></i> Shop Address
                </h4>
                <p>
                  34/8, East Hukupara <br /> Gifirtok, Sadan. <br /> Country
                  Name
                </p>
              </div>
              <div className="contact-form-box">
                <h4>
                  <i className="far fa-clock"></i> Shop Hours
                </h4>
                <p>
                  MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM{" "}
                </p>
              </div>
              <div className="contact-form-box">
                <h4>
                  <i className="fas fa-address-book"></i> Contact
                </h4>
                <p>
                  Phone: +00 111 222 3333 <br /> Email: support@fruitkha.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
