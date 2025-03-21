import React from "react";
import SinglenewsBreadcrumb from "../Components/Singlenews/SinglenewsBreadcrumb";
import SinglenewsArticle from "../Components/Singlenews/SinglenewsArticle";
import SinglenewsLogoCarousel from "../Components/Singlenews/SinglenewsLogocarousel";
import Header from "../Components/path/header";
import Search from "../Components/path/search";
import Footer from "../Components/path/footer";
import Copyright from "../Components/path/copyright";
const SingleNews = () => {
  return (
    <div>
      <Header />
      <Search />
      <SinglenewsBreadcrumb />
      <SinglenewsArticle />
      <SinglenewsLogoCarousel />
      <Footer />
      <Copyright />
    </div>
  );
};

export default SingleNews;
