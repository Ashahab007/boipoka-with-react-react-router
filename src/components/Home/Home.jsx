import React from "react";
import Banner from "../Banner/Banner";
import Books from "../../pages/Books/Books";

const Home = () => {
  return (
    // 4.3 apply the banner component in Home component as we want to show the banner as default
    <div>
      <Banner></Banner>
      {/* 5.2 apply the Books component in Home component */}
      <Books></Books>
    </div>
  );
};

export default Home;
