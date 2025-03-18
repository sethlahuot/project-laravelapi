import React from "react";
import NewsHeader from "../Components/News/NewsHeader";
import NewsSearch from "../Components/News/NewsSearch";
import NewsBreadcrumb from "../Components/News/NewsBreadcrumb";
import NewsLatestnews from "../Components/News/NewsLatestnews";
import NewsLogoCarousel from "../Components/News/NewsLogocarousel";
import NewsFooter from "../Components/News/NewsFooter";
import NewsCopyright from "../Components/News/NewsCopyright";
const News = () => {
  return (
    <div>
      <NewsHeader />
      <NewsSearch />
      <NewsBreadcrumb />
      <NewsLatestnews />
      <NewsLogoCarousel />
      <NewsFooter />
      <NewsCopyright />
    </div>
  );
};

export default News;
