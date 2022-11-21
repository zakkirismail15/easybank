import React from "react";
import { Button, Container, NoRightPadding } from "../../styles/Common.style";
import { H1, Para } from "../../styles/Typography.style";
import {
  HeroContent,
  HeroContentWrapper,
  HeroImage,
  HeroWrapper,
} from "./Hero.style";
import HeroImg from "../../images/image-mockups.png";

function Hero() {
  return (
    <div>
      <NoRightPadding>
        <HeroWrapper>
          <HeroContent>
            <HeroContentWrapper>
              <H1>Next generation digital banking</H1>
              <Para>
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </Para>
              <Button>Request Invite</Button>
            </HeroContentWrapper>
          </HeroContent>
          <HeroImage>
            <img src={HeroImg} alt="hero" />
          </HeroImage>
        </HeroWrapper>
      </NoRightPadding>
    </div>
  );
}

export default Hero;
