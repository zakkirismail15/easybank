import styled from "styled-components";
import HeroBg from "../../images/bg-intro-desktop.svg";

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const HeroContent = styled.div`
  width: 40%;
`;
export const HeroImage = styled.div`
  width: 60%;
  position: relative;
  height: 100vh;
  background: url(${HeroBg});
  background-position: 15% 85%;
  background-size: 160%;
  background-repeat: no-repeat;
  img {
    position: absolute;
    top: -14rem;
    right: -10rem;
  }
`;
export const HeroContentWrapper = styled.div`
  max-width: 40rem;
  p {
    padding: 2rem 0;
  }
`;
