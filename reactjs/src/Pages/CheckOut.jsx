import React from "react";
import CheckoutHeader from "../Components/CheckOut/CheckoutHeader";
import CheckoutSearch from "../Components/CheckOut/CheckoutSearch";
import CheckoutBreadcrumb from "../Components/CheckOut/CheckoutBreadcrumb";
import CheckoutArea from "../Components/CheckOut/CheckoutArea";
import CheckoutLogoCarousal from "../Components/CheckOut/CheckoutLogocarousel";
import CheckoutFooter from "../Components/CheckOut/CheckoutFooter";
import CheckoutCopyright from "../Components/CheckOut/CheckoutCopyright";

const CheckOut = () => {
  return (
    <div>
      <CheckoutHeader />
      <CheckoutSearch />
      <CheckoutBreadcrumb />
      <CheckoutArea />
      <CheckoutLogoCarousal />
      <CheckoutFooter />
      <CheckoutCopyright />
    </div>
  );
};

export default CheckOut;
