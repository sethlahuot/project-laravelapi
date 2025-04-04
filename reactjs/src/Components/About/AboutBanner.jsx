import React from "react";

const AboutBanner = () => {
  return (
    <div>
      <section class="shop-banner">
        <div class="container">
          <h3>
            December sale is on! <br /> with big{" "}
            <span class="orange-text">Discount...</span>
          </h3>
          <div class="sale-percent">
            <span>
              Sale! <br /> Upto
            </span>
            50% <span>off</span>
          </div>
          <a href="shop.html" class="cart-btn btn-lg">
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutBanner;
