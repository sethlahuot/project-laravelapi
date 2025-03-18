import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const ShopHeader = () => {
  return (
    <div>
      <div class="top-header-area" id="sticker">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 text-center">
              <div class="main-menu-wrap">
                {/* <!-- logo --> */}
                <div class="site-logo">
                  <a href="index.html">
                    <img src={logo} alt="" />
                  </a>
                </div>
                {/* <!-- logo --> */}

                {/* <!-- menu start --> */}
                <nav class="main-menu">
                  <ul>
                    <li class="current-list-item">
                      <a href="#">Home</a>
                      <ul class="sub-menu">
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
                      <ul class="sub-menu">
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
                      <ul class="sub-menu">
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
                      <ul class="sub-menu">
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
                      <div class="header-icons">
                        <Link class="shopping-cart" to={`/cart`}>
                          <i class="fas fa-shopping-cart"></i>
                        </Link>
                        <a class="mobile-hide search-bar-icon" href="#">
                          <i class="fas fa-search"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
                <a class="mobile-show search-bar-icon" href="#">
                  <i class="fas fa-search"></i>
                </a>
                <div class="mobile-menu"></div>
                {/* <!-- menu end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
