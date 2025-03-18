import React from "react";
import CartHeader from "../Components/Cart/CartHeader";
import CartSearch from "../Components/Cart/CartSearch";
import CartBreadcrumb from "../Components/Cart/CartBreadcrumb";
import CartSeaction from "../Components/Cart/CartSeaction";
import CartLogoCarousal from "../Components/Cart/CartLogocarousel";
import CartFooter from "../Components/Cart/CartFooter";
import CartCopyright from "../Components/Cart/CartCopyright";
const Cart = () => {
  return (
    <div>
      <CartHeader />
      <CartSearch />
      <CartBreadcrumb />
      <CartSeaction />
      <CartLogoCarousal />
      <CartFooter />
      <CartCopyright />
    </div>
  );
};

export default Cart;
