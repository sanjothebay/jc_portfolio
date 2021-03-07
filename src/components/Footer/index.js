import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconlink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>JC Rodriguez</FooterLinkTitle>
              <FooterLink to="#">Phone: +525614383816</FooterLink>
              <FooterLink to="#">Email: sanjothebay@gmail.com</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Resume</FooterLinkTitle>
              <FooterLink>
                <a to="../../../public/pdf_download/JC RODRIGUEZ RESUME.pdf" target="_blank" download>
                  Download
                </a>
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Git HUB</FooterLinkTitle>
              <FooterLink to="https://github.com/sanjothebay" target="_blank">
                Repo`s
              </FooterLink>
              <FooterLink
                to="https://stackoverflow.com/users/13977233/jc"
                target="_blank"
              >
                stackoverflow
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink
                href="https://www.linkedin.com/in/jc-rodriguez-805339180/"
                target="_blank"
              >
                LinkedIn
              </FooterLink>
              <FooterLink
                href="https://www.linkedin.com/in/jc-rodriguez-805339180/"
                target="_blank"
              >
                Facebook
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              JC Rodriguez
            </SocialLogo>
            <WebsiteRights>
              JC Rodriguez © {new Date().getFullYear()} All Rights To JC
              Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconlink
                href="https://github.com/sanjothebay"
                target="_blank"
                aria-label="github"
              >
                <FaLinkedin />
              </SocialIconlink>
              <SocialIconlink
                href="https://www.linkedin.com/in/jc-rodriguez-805339180/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconlink>
              <SocialIconlink
                href="https://stackoverflow.com/users/13977233/jc"
                target="_blank"
                aria-label="stackoverflow"
              >
                <FaLinkedin />
              </SocialIconlink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
