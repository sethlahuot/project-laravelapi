import React from "react";
import CheckoutBreadcrumb from "../Components/CheckOut/CheckoutBreadcrumb";
import CheckoutArea from "../Components/CheckOut/CheckoutArea";
import CheckoutLogoCarousal from "../Components/CheckOut/CheckoutLogocarousel";
import Header from "../Components/path/header";
import Search from "../Components/path/search";
import Footer from "../Components/path/footer";
import Copyright from "../Components/path/copyright";

const CheckOut = () => {
  return (
    <div>
      <Header />
      <Search />
      <CheckoutBreadcrumb />
      <CheckoutArea />
      <CheckoutLogoCarousal />
      <Footer />
      <Copyright />
    </div>
  );
};

export default CheckOut;
