import React from "react";
import SinglenewsHeader from "../Components/Singlenews/SinglenewsHeader";
import SinglenewsSearch from "../Components/Singlenews/SinglenewsSearch";
import SinglenewsBreadcrumb from "../Components/Singlenews/SinglenewsBreadcrumb";
import SinglenewsArticle from "../Components/Singlenews/SinglenewsArticle";
import SinglenewsLogoCarousel from "../Components/Singlenews/SinglenewsLogocarousel";
import SinglenewsFooter from "../Components/Singlenews/SinglenewsFooter";
import SinglenewsCopyright from "../Components/Singlenews/SinglenewsCopyright";
const SingleNews = () => {
  return (
    <div>
      <SinglenewsHeader />
      <SinglenewsSearch />
      <SinglenewsBreadcrumb />
      <SinglenewsArticle />
      <SinglenewsLogoCarousel />
      <SinglenewsFooter />
      <SinglenewsCopyright />
    </div>
  );
};

export default SingleNews;
