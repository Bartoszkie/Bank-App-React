import React from "react";

import Banner from "../../components/banner/banner.component";
import Details from "../../components/details/details.component";

const HomePage = () => {
  return (
    <div className="welcome-page">
      <Banner />
      <Details />
    </div>
  );
};

export default HomePage;
