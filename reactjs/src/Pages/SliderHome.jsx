import React from "react";
import SliderHeader from "../Components/SliderHome/SliderHeader";
import SliderSearch from "../Components/SliderHome/SliderSearch";
import SliderPages from "../Components/SliderHome/SliderPages";
import SliderFeature from "../Components/SliderHome/SliderFeature";
import SliderProduct from "../Components/SliderHome/SliderProduct";
import SilderCartBanner from "../Components/SliderHome/SliderCartBanner";
import SliderTestimonial from "../Components/SliderHome/SliderTestimonnail";
import SliderAdvertisement from "../Components/SliderHome/SliderAdvertisement";
import SliderShopBanner from "../Components/SliderHome/SliderShopBanner";
import SliderLatestNews from "../Components/SliderHome/SliderLatestNews";
import SliderLogoCarousel from "../Components/SliderHome/SliderLogoCarousel";
import SliderFooter from "../Components/SliderHome/SliderFooter";
import SliderCopyright from "../Components/SliderHome/SliderCopyright";

const SliderHome = () => {
  return (
    <div>
      <SliderHeader />
      <SliderSearch />
      <SliderPages />
      <SliderFeature />
      <SliderProduct />
      <SilderCartBanner />
      <SliderTestimonial />
      <SliderAdvertisement />
      <SliderShopBanner />
      <SliderLatestNews />
      <SliderLogoCarousel />
      <SliderFooter />
      <SliderCopyright />
    </div>
  );
};

export default SliderHome;
