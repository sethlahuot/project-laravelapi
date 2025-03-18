import React from "react";
// import PreLoader from "../Components/PreLoader";
import HomeHeader from "../Components/StaticHome/HomeHeader";
import HomeSearch from "../Components/StaticHome/HomeSearch";
import HomePageSlider from "../Components/StaticHome/HomePageSlider";
import HomeFeature from "../Components/StaticHome/HomeFeature";
import HomeProduct from "../Components/StaticHome/HomeProduct";
import HomeCartBanner from "../Components/StaticHome/HomeCartBanner";
import HomeTestimonail from "../Components/StaticHome/HomeTestimonail";
import HomeAdvertisement from "../Components/StaticHome/HomeAdvertisement";
import HomeShopBanner from "../Components/StaticHome/HomeShopBanner";
import HomeLatestNews from "../Components/StaticHome/HomeLatestNews";
import HomeLogoCarousel from "../Components/StaticHome/HomeLogoCarousel";
import HomeFooter from "../Components/StaticHome/HomeFooter";
import HomeCopyright from "../Components/StaticHome/HomeCopyright";
const Home = () => {
  return (
    <div>
      {/* <PreLoader /> */}
      <HomeHeader />
      <HomeSearch />
      <HomePageSlider />
      <HomeFeature />
      <HomeProduct />
      <HomeCartBanner />
      <HomeTestimonail />
      <HomeAdvertisement />
      <HomeShopBanner />
      <HomeLatestNews />
      <HomeLogoCarousel />
      <HomeFooter />
      <HomeCopyright />

      {/* Add your Home page components here */}
    </div>
  );
};

export default Home;
