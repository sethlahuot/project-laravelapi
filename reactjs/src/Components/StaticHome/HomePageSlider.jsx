import React from "react";
import { Link } from "react-router-dom";

const HomePageSlider = () => {
  return (
    <div>
      <div class="homepage-slider">  
        {/* <!-- single home slider --> */}
        <div class="single-homepage-slider homepage-bg-2">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 offset-lg-1 text-center">
                <div class="hero-text mt-150 mb-150">
                  <div class="hero-text-tablecell  ">
                    <p class="subtitle"></p>
                    <h1>100% Organic Collection</h1>
                    <div class="hero-btns">
                      <Link to="/shop" className="boxed-btn text-decoration-none">
                        Visit Shop
                      </Link>
                      <Link to="/contact" className="bordered-btn text-decoration-none">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HomePageSlider;
