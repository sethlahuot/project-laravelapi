import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div>
      <div className="top-header-area" id="sticker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                {/* Logo */}
                <div className="site-logo">
                  <a href="index.html">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>

                {/* Main Menu */}
                <nav className="main-menu">
                  <ul>
                    <li className="current-list-item">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={`/statichome`}>Static Home</Link>
                        </li>
                        <li>
                          <Link to={`/sliderhome`}>Slider Home</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={`/about`}>About</Link>
                    </li>
                    <li>
                      <Link to="#">Pages</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to={`/fzf`}>404 page</Link>
                        </li>
                        <li>
                          <Link to={`/about`}>About</Link>
                        </li>
                        <li>
                          <Link to={`/cart`}>Cart</Link>
                        </li>
                        <li>
                          <Link to={`/checkout`}>Check Out</Link>
                        </li>
                        <li>
                          <Link to={`/contact`}>Contact</Link>
                        </li>
                        <li>
                          <Link to={`/news`}>News</Link>
                        </li>
                        <li>
                          <Link to={`/shop`}>Shop</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={`/news`}>News</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to={`/news`}>News</Link>
                        </li>
                        <li>
                          <Link to={`/singlenews`}>Single News</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={`/contact`}>Contact</Link>
                    </li>
                    <li>
                      <Link to={`/shop`}>Shop</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to={`/shop`}>Shop</Link>
                        </li>
                        <li>
                          <Link to={`/checkout`}>Check Out</Link>
                        </li>
                        <li>
                          <Link to={`/singleproduct`}>Single Product</Link>
                        </li>
                        <li>
                          <Link to={`/cart`}>Cart</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="header-icons">
                        <Link className="shopping-cart" to={`/cart`}>
                          <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <a className="mobile-hide search-bar-icon" href="#">
                          <i className="fas fa-search"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
                <a className="mobile-show search-bar-icon" href="#">
                  <i className="fas fa-search"></i>
                </a>
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
