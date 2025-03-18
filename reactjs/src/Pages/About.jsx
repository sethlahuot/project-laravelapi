import React from "react";
import AboutHeader from "../Components/About/AboutHeader";
import AboutSearch from "../Components/About/AboutSearch";
import AboutBreadcrumb from "../Components/About/AboutBreadcrumb";
import AboutFeature from "../Components/About/AboutFeature";
import AboutBanner from "../Components/About/AboutBanner";
import AboutTeam from "../Components/About/AboutTeam";
import AboutTestimonail from "../Components/About/AboutTestimonail";
import AboutLogoCarousel from "../Components/About/AboutLogoCarousel";
import AboutFooter from "../Components/About/AboutFooter";
import AboutCopyright from "../Components/About/AboutCopyright";

const Pages = () => {
  return (
    <div>
      <AboutHeader />
      <AboutSearch />
      <AboutBreadcrumb />
      <AboutFeature />
      <AboutBanner />
      <AboutTeam />
      <AboutTestimonail />
      <AboutLogoCarousel />
      <AboutFooter />
      <AboutCopyright />
    </div>
  );
};

export default Pages;
