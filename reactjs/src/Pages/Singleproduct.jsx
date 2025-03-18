import React from "react";
import SingleproductHeader from "../Components/Singleproduct/SingleproductHeader";
import SingleproductSearch from "../Components/Singleproduct/SingleproductSearch";
import SingleproductBreadcrumb from "../Components/Singleproduct/SingleproductBreadcrumb";
import SingleproductArea from "../Components/Singleproduct/SingleproductArea";
import SingleproductProduct from "../Components/Singleproduct/SingleproductProduct";
import SingleproductLogocarousel from "../Components/Singleproduct/SingleproductLogocarousel";
import SingleproductFooter from "../Components/Singleproduct/SingleproductFooter";
import SingleproductCopyright from "../Components/Singleproduct/SingleproductCopyright";

const Singleproduct = () => {
  return (
    <div>
      <SingleproductHeader />
      <SingleproductSearch />
      <SingleproductBreadcrumb />
      <SingleproductArea />
      <SingleproductProduct />
      <SingleproductLogocarousel />
      <SingleproductFooter />
      <SingleproductCopyright />
    </div>
  );
};

export default Singleproduct;
