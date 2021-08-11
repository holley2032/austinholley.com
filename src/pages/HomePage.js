import React from "react";
import Header from "../components/Header";
import HomePhoto from "../components/HomePhoto";
import HomeMainText from "../components/HomeMainText";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <HomePhoto />
      <HomeMainText />
    </div>
  );
};

export default HomePage;
