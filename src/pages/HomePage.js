import React from "react";
import Header from "../components/Header";
import HomePhoto from "../components/HomePhoto";
import HomeMainText from "../components/HomeMainText";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <HomePhoto />
      <HomeMainText />
      <Footer />
    </div>
  );
};

export default HomePage;
