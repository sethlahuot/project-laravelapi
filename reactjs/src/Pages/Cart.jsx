import React from "react";
import CartBreadcrumb from "../Components/Cart/CartBreadcrumb";
import CartSeaction from "../Components/Cart/CartSeaction";
import CartLogoCarousal from "../Components/Cart/CartLogocarousel";
import Header from "../Components/path/header";
import Search from "../Components/path/search";
import Footer from "../Components/path/footer";
import Copyright from "../Components/path/copyright";
const Cart = () => {
  return (
    <div>
      <Header />
      <Search />
      <CartBreadcrumb />
      <CartSeaction />
      <CartLogoCarousal />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Cart;
