import React from "react";
import logo_1 from "../img/company-logos/1.png";
import logo_2 from "../img/company-logos/2.png";
import logo_3 from "../img/company-logos/3.png";
import logo_4 from "../img/company-logos/4.png";

const NewsLogoCarousel = () => {
  return (
    <div style={{ background: "#f8f9fa", padding: "50px 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        <img
          src={logo_1}
          alt="Logo 1"
          style={{ maxWidth: "150px", height: "auto" }}
        />
        <img
          src={logo_2}
          alt="Logo 2"
          style={{ maxWidth: "150px", height: "auto" }}
        />
        <img
          src={logo_3}
          alt="Logo 3"
          style={{ maxWidth: "150px", height: "auto" }}
        />
        <img
          src={logo_4}
          alt="Logo 4"
          style={{ maxWidth: "150px", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default NewsLogoCarousel;
