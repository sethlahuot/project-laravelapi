import React from "react";
import NewsBreadcrumb from "../Components/News/NewsBreadcrumb";
import NewsLatestnews from "../Components/News/NewsLatestnews";
import NewsLogoCarousel from "../Components/News/NewsLogocarousel";
import Header from "../Components/path/header";
import Search from "../Components/path/search";
import Footer from "../Components/path/footer";
import Copyright from "../Components/path/copyright";
const News = () => {
  return (
    <div>
      <Header />
      <Search />
      <NewsBreadcrumb />
      <NewsLatestnews />
      <NewsLogoCarousel />
      <Footer />
      <Copyright />
    </div>
  );
};

export default News;
