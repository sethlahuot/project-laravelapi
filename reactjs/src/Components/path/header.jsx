import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div>
      <div className="top-header-area" id="sticker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                {/* Logo */}
                <div className="site-logo">
                  <Link to={`/home`} className='text-decoration-none'><img src={logo} alt="Logo" /></Link>
                </div>
                {/* Main Menu */}
                <nav className="main-menu">
                  <ul>
                    <li className="current-list-item">
                      <Link to={`/home`} className='text-decoration-none'>Home</Link>
                    </li>
                    <li>
                      <Link to={`/shop`} className='text-decoration-none'>Shop</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to={`/shop`} className='text-decoration-none'>Shop</Link>
                        </li>
                        <li>
                          <Link to={`/checkout`} className='text-decoration-none'>Check Out</Link>
                        </li>
                        <li>
                          <Link to={`/productdetail`} className='text-decoration-none'>Product Detail</Link>
                        </li>
                        <li>
                          <Link to={`/cart`} className='text-decoration-none'>Cart</Link>
                        </li>
                      </ul>
                    </li>
                    
                    <li>
                      <Link to={`/about`} className='text-decoration-none'>About</Link>
                    </li>
                    <li>
                      <Link to={`/news`} className='text-decoration-none'>News</Link>
                    </li>
                    <li>
                      <Link to={`/contact`} className='text-decoration-none'>Contact</Link>
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

export default header;
