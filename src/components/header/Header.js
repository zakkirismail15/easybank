import React from "react";
import { Navigation, Nav, Ul, Li, Logo } from "./Header.style";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { Button, Container } from "../../styles/Common.style";

function Header() {
  return (
    <div>
      <Container>
        <Navigation>
          <Nav>
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
            <Ul>
              <Li>
                <Link to={`#`}>Home</Link>
              </Li>
              <Li>
                <Link to={`#`}>About</Link>
              </Li>
              <Li>
                <Link to={`#`}>Contact</Link>
              </Li>
              <Li>
                <Link to={`#`}>Blog</Link>
              </Li>
              <Li>
                <Link to={`#`}>Career</Link>
              </Li>
            </Ul>
            <Button>Request Invite</Button>
          </Nav>
        </Navigation>
      </Container>
    </div>
  );
}

export default Header;
