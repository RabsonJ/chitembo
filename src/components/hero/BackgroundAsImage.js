import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("/img/bg.jpg/");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-gray-800 opacity-75`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center mx-auto`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-yellow-800 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-yellow-700 font-medium text-sm`;

const PrimaryAction = tw.a`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-yellow-800 font-bold rounded shadow transition duration-300 hocus:bg-yellow-800 hocus:text-gray-100`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#services">
        Services
      </NavLink>
      <NavLink href="#contact">
        Contact Us
      </NavLink>
      <NavLink href="#work">
        Projects
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="#contact">
        Hire Us
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container style={{ height: '80vh', backgroundImage: "url(/img/bg.jpg)"}}>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>Where your dreams meet realisation.</Notification>
            <Heading>
              <span>If you can dream it, </span>
              <br />
              <SlantedBackground>We can architect it.</SlantedBackground>
            </Heading>
            <PrimaryAction href="/#work">See Our Work</PrimaryAction>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
