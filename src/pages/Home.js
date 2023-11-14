import React from "react";
import TheNav from "../components/Header/TheNav";
import Sections from "../components/Sections/Sections";
import TheFooter from "../components/Footer/TheFooter";

const Home = () => {
  //Rendering the cart and all the sections
  return (
    <>
      <TheNav/>
      <Sections />
      <TheFooter />
    </>
  );
  //END
};

export default Home;
