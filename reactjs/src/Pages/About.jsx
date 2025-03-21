import React from "react";
import AboutBreadcrumb from "../Components/About/AboutBreadcrumb";
import AboutFeature from "../Components/About/AboutFeature";
import AboutBanner from "../Components/About/AboutBanner";
import AboutTeam from "../Components/About/AboutTeam";
import AboutTestimonail from "../Components/About/AboutTestimonail";
import AboutLogoCarousel from "../Components/About/AboutLogoCarousel";
import Header from "../Components/path/header";
import Search from "../Components/path/search";
import Footer from "../Components/path/footer";
import Copyright from "../Components/path/copyright";

const Pages = () => {
  return (
    <div>
      <Header />
      <Search />
      <AboutBreadcrumb />
      <AboutFeature />
      <AboutBanner />
      <AboutTeam />
      <AboutTestimonail />
      <AboutLogoCarousel />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Pages;
