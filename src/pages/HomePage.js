import React from "react";
import Header from "../components/Header";
import HomePhoto from "../components/HomePhoto";
import HomeMainText from "../components/HomeMainText";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="HomePage">
      <header>
        <Header />
      </header>
      <HomePhoto />
      <HomeMainText />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
