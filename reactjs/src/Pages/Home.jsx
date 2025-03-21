import React from "react";
// import PreLoader from "../Components/PreLoader";
import HomePageSlider from "../Components/StaticHome/HomePageSlider";
import HomeFeature from "../Components/StaticHome/HomeFeature";
import HomeProduct from "../Components/StaticHome/HomeProduct";
import HomeCartBanner from "../Components/StaticHome/HomeCartBanner";
import HomeLatestNews from "../Components/StaticHome/HomeLatestNews";
import HomeLogoCarousel from "../Components/StaticHome/HomeLogoCarousel";
import Header from "../Components/path/header";
import Search from "../Components/path/search";
import Footer from "../Components/path/footer";
import Copyright from "../Components/path/copyright";
const Home = () => {
  return (
    <div>
      {/* <PreLoader /> */}
      <Header />
      <Search />
      <HomePageSlider />
      <HomeFeature />
      <HomeProduct />
      <HomeCartBanner />
      <HomeLatestNews />
      <HomeLogoCarousel />
      <Footer />
      <Copyright />

    </div>
  );
};

export default Home;
