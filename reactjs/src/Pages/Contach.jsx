import React from "react";
import ContactBreadcrumb from "../Components/Contact/ContactBreadcrumb";
import ContactArea from "../Components/Contact/ContactArea";
import ConatctLocation from "../Components/Contact/ConatctLocation";
import ContactMap from "../Components/Contact/ContactMap";
import Header from "../Components/path/header";
import Search from "../Components/path/search";
import Footer from "../Components/path/footer";
import Copyright from "../Components/path/copyright";
const Contach = () => {
  return (
    <div>
      <Header />
      <Search />
      <ContactBreadcrumb />
      <ContactArea />
      <ConatctLocation />
      <ContactMap />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Contach;
