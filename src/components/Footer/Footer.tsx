import React from "react";
import { SocialIcon } from "react-social-icons";
import {
  Wrapper,
  FooterDiv,
  IconsDiv,
  Icons,
  Paragraph,
  FooterSection,
  Div,
  Title,
  Reference,
  Input,
  Submit,
} from "./Footer.style";

const Footer: React.FC = () => {
  return (
    <>
      <Wrapper>
        <FooterSection>
          <Div>
            <Title>About</Title>
            <ul>
              <li>
                <Reference href="#">Services</Reference>
              </li>
              <li>
                <Reference href="#">Portfolio</Reference>
              </li>
              <li>
                <Reference href="#">Pricing</Reference>
              </li>
              <li>
                <Reference href="#">Customers</Reference>
              </li>
              <li>
                <Reference href="#">Careers</Reference>
              </li>
            </ul>
          </Div>
          <Div>
            <Title>Resources</Title>
            <ul>
              <li>
                <Reference href="#">Docs</Reference>
              </li>
              <li>
                <Reference href="#">Blog</Reference>
              </li>
              <li>
                <Reference href="#">eBooks</Reference>
              </li>
              <li>
                <Reference href="#">Webinars</Reference>
              </li>
            </ul>
          </Div>
          <Div>
            <Title>Contact</Title>
            <ul>
              <li>
                <Reference href="#">Help</Reference>
              </li>
              <li>
                <Reference href="#">Sales</Reference>
              </li>
              <li>
                <Reference href="#">Advertise</Reference>
              </li>
            </ul>
          </Div>
          <Div>
            <Title>Stay Updated</Title>
            <p>Subscribe to our newsletter to get our latest news.</p>
            <Input
              type="email"
              name="email"
              placeholder="Enter email address"
            />
            <Submit type="submit" value="Subscribe" />
          </Div>
        </FooterSection>

        <FooterDiv>
          <IconsDiv>
            <Icons href="#">
              <SocialIcon
                url="https://linkedin.com/in/jaketrent"
                network="linkedin"
                bgColor="white"
              />
            </Icons>
            <Icons href="#">
              <SocialIcon
                url="https://facebook.com/"
                network="facebook"
                bgColor="white"
              />
            </Icons>
            <Icons href="#">
              <SocialIcon
                url="https://instagram.com/"
                network="instagram"
                bgColor="white"
              />
            </Icons>
            <Icons href="#">
              <SocialIcon
                url="https://twitter.com/"
                network="twitter"
                bgColor="white"
              />
            </Icons>
            <Icons href="#">
              <SocialIcon
                url="https://youtube.com/"
                network="youtube"
                bgColor="white"
              />
            </Icons>
            <Paragraph>LinkZip &copy; 2023, ALL Rights Reserved.</Paragraph>
          </IconsDiv>
        </FooterDiv>
      </Wrapper>
    </>
  );
};

export default Footer;
