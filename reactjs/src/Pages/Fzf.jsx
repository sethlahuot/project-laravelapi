import React from "react";
import FzfHeader from "../Components/Fzf/FzfHeader";
import FzfSearch from "../Components/Fzf/FzfSearch";
import FzfBreadcrumb from "../Components/Fzf/FzfBreadcrumb";
import Fzferror from "../Components/Fzf/Fzferror";
import FzfLogoCarousal from "../Components/Fzf/FzfLogoCarousal";
import FzfFooter from "../Components/Fzf/FzfFooter";
import fzfCopyright from "../Components/Fzf/fzfCopyright";
const Fzf = () => {
  return (
    <div>
      <FzfHeader />
      <FzfSearch />
      <FzfBreadcrumb />
      <Fzferror />
      <FzfLogoCarousal />
      <FzfFooter />
      <fzfCopyright />
    </div>
  );
};

export default Fzf;
