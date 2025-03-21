import React from "react";
import SingleproductBreadcrumb from "../Components/Singleproduct/SingleproductBreadcrumb";
import SingleproductArea from "../Components/Singleproduct/SingleproductArea";
import SingleproductProduct from "../Components/Singleproduct/SingleproductProduct";
import SingleproductLogocarousel from "../Components/Singleproduct/SingleproductLogocarousel";
import Header from "../Components/path/header";
import Search from "../Components/path/search";
import Footer from "../Components/path/footer";
import Copyright from "../Components/path/copyright";

const Productdetail = () => {
  return (
    <div>
      <Header />
      <Search />
      <SingleproductBreadcrumb />
      <SingleproductArea />
      <SingleproductProduct />
      <SingleproductLogocarousel />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Productdetail;
