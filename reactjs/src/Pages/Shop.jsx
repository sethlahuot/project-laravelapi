import React from "react";
import ShopHeader from "../Components/Shop/ShopHeader";
import ShopSearch from "../Components/Shop/ShopSearch";
import ShopBreadcrumb from "../Components/Shop/ShopBreadcrumb";
import ShopProduct from "../Components/Shop/ShopProduct";
import ShopLogoCarousel from "../Components/Shop/ShopLogocarousel";
import ShopFooter from "../Components/Shop/ShopFooter";
import ShopCopyright from "../Components/Shop/ShopCopyright";
const Shop = () => {
  return (
    <div>
      <ShopHeader />
      <ShopSearch />
      <ShopBreadcrumb />
      <ShopProduct />
      <ShopLogoCarousel />
      <ShopFooter />
      <ShopCopyright />
    </div>
  );
};

export default Shop;
