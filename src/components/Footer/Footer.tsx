import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { FooterDiv, IconsDiv, Icons, Paragraph, FooterSection, DivStyle, Title, ReferStyle, InputStyle, SubmitStyle } from './Footer.style'

const Footer:React.FC = () => {
  return (
    <>
      <FooterSection>
    <DivStyle>
      <Title>About</Title>
      <ul>
        <li><ReferStyle href="#">Services</ReferStyle></li>
        <li><ReferStyle href="#">Portfolio</ReferStyle></li>
        <li><ReferStyle href="#">Pricing</ReferStyle></li>
        <li><ReferStyle href="#">Customers</ReferStyle></li>
        <li><ReferStyle href="#">Careers</ReferStyle></li>
      </ul>
    </DivStyle>
    <DivStyle>
      <Title>Resources</Title>
      <ul>
        <li><ReferStyle href="#">Docs</ReferStyle></li>
        <li><ReferStyle href="#">Blog</ReferStyle></li>
        <li><ReferStyle href="#">eBooks</ReferStyle></li>
        <li><ReferStyle href="#">Webinars</ReferStyle></li>
      </ul>
    </DivStyle>
    <DivStyle>
      <Title>Contact</Title>
      <ul>
        <li><ReferStyle href="#">Help</ReferStyle></li>
        <li><ReferStyle href="#">Sales</ReferStyle></li>
        <li><ReferStyle href="#">Advertise</ReferStyle></li>
      </ul>
    </DivStyle>
    <DivStyle>
      <Title>Stay Updated</Title>
      <p>Subscribe to our newsletter to get our latest news.</p>
        <InputStyle type="email" name="email" placeholder="Enter email address" />
        <SubmitStyle type="submit" value="Subscribe" />
    </DivStyle>
  </FooterSection>

      <FooterDiv>
        <IconsDiv>
           <Icons href="#"><SocialIcon url="https://linkedin.com/in/jaketrent" network="linkedin" bgColor="white" /></Icons>
           <Icons href="#"><SocialIcon url="https://facebook.com/" network="facebook" bgColor="white" /></Icons>
           <Icons href="#"><SocialIcon url="https://instagram.com/" network="instagram" bgColor="white" /></Icons>
           <Icons href="#"><SocialIcon url="https://twitter.com/" network="twitter" bgColor="white" /></Icons>
           <Icons href="#"><SocialIcon url="https://youtube.com/" network="youtube" bgColor="white" /></Icons>
            <Paragraph>
                LinkZip &copy; 2023, ALL Rights Reserved.
            </Paragraph>
        </IconsDiv>
    </FooterDiv>
    </>
  )
}

export default Footer;
