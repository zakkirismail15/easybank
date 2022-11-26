import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--DarkBlue);
  padding: 6rem 0;
  .footer_inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
export const FooterLinks = styled.div`
  .logo {
    max-width: 15rem;
    img {
      filter: invert(50%);
    }
  }
  .social-icons {
    margin-top: 4rem;
    img {
      max-width: 2rem;
      margin-right: 1rem;
    }
  }
  display: flex;
  width: 60%;
  justify-content: space-between;
  .link {
    display: flex;
    flex-direction: column;
    a {
      margin-bottom: 1rem;
    }
  }
`;
export const FooterButton = styled.div``;
