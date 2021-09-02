import * as React from "react";

import "./style.scss";
import Hero from "../components/Hero";
import Boxed from "../components/Boxed";
import Trips from "../components/Trips";
import Footer from "../components/Footer";
import Posts from "../components/Posts";

const IndexPage = () => {
  return (
    <div className="wrapper">
      <Hero/>
      <Boxed/>
      <Trips/>
      <Posts/>
      <Footer/>
    </div>
  )
}

export default IndexPage
