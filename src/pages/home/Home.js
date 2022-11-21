import React from "react";
import Hero from "../../components/hero/Hero";
import Info from "../../components/information/Info";
import { HomeContainer } from "./Home.style";

function Home() {
  return (
    <div>
      <HomeContainer>
        <Hero />
        <Info />
      </HomeContainer>
    </div>
  );
}

export default Home;
