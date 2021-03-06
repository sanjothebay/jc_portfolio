import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElemeents";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const OnHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1> JC Porfolio </HeroH1>
        <HeroP>Hello My Name is JC A Full Stack Web Developer</HeroP>
        <HeroBtnWapper>
          <Button to="contact" onMouseEnter={OnHover} onMouseLeave={OnHover}
          primary="true"
          dark="true"
          >
            Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
