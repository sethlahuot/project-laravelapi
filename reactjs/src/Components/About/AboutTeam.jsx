import React from "react";
import newsBg1 from "../img/team/team-1.jpg";
import newsBg2 from "../img/team/team-2.jpg";
import newsBg3 from "../img/team/team-3.jpg";

const AboutTeam = () => {
  return (
    <div>
      <div class="mt-150">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="section-title">
                <h3>
                  Our <span class="orange-text">Team</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, fuga quas itaque eveniet beatae optio.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-team-item">
                <div
                  className="team-bg"
                  style={{ backgroundImage: `url(${newsBg1})` }}
                ></div>
                <h4>
                  Jimmy Doe <span>Farmer</span>
                </h4>
                <ul class="social-link-team">
                  <li>
                    <a href="#" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-team-item">
                <div
                  className="team-bg"
                  style={{ backgroundImage: `url(${newsBg2})` }}
                ></div>
                <h4>
                  Marry Doe <span>Farmer</span>
                </h4>
                <ul class="social-link-team">
                  <li>
                    <a href="#" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div class="single-team-item">
                <div
                  className="team-bg"
                  style={{ backgroundImage: `url(${newsBg3})` }}
                ></div>
                <h4>
                  Simon Joe <span>Farmer</span>
                </h4>
                <ul class="social-link-team">
                  <li>
                    <a href="#" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
