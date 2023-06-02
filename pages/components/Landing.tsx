import React, { useState } from "react";
import LandingDesktop from "./LandingDesktop";
import LandingMobile from "./LandingMobile";

const Landing = () => {
  return (
    <>
      <div className="landing-desktop-view">{<LandingDesktop />}</div>
      <div className="landing-mobile-view">{<LandingMobile />}</div>
    </>
  );
};

export default Landing;
