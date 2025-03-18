import React from "react";
import ContactHeader from "../Components/Contact/ContactHeader";
import ContactSearch from "../Components/Contact/ContactSearch";
import ContactBreadcrumb from "../Components/Contact/ContactBreadcrumb";
import ContactArea from "../Components/Contact/ContactArea";
import ConatctLocation from "../Components/Contact/ConatctLocation";
import ContactMap from "../Components/Contact/ContactMap";
import ContactFooter from "../Components/Contact/ContactFooter";
import ContactCopyright from "../Components/Contact/ContactCopyright";
const Contach = () => {
  return (
    <div>
      <ContactHeader />
      <ContactSearch />
      <ContactBreadcrumb />
      <ContactArea />
      <ConatctLocation />
      <ContactMap />
      <ContactFooter />
      <ContactCopyright />
    </div>
  );
};

export default Contach;
