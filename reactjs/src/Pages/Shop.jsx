import React from "react";
import ShopBreadcrumb from "../Components/Shop/ShopBreadcrumb";
import ShopProduct from "../Components/Shop/ShopProduct";
import ShopLogoCarousel from "../Components/Shop/ShopLogocarousel";
import Header from "../Components/path/header";
import Search from "../Components/path/search";
import Footer from "../Components/path/footer";
import Copyright from "../Components/path/copyright";
const Shop = () => {
  return (
    <div>
      <Header />
      <Search />
      <ShopBreadcrumb />
      <ShopProduct />
      <ShopLogoCarousel />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Shop;
