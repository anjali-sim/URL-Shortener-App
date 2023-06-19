import Navbar from "../../components/Navbar";
import React from "react";
import { Wrapper, Container } from "./About.style";
import Footer from "../../components/Footer";

const AboutPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Wrapper>
      <Container>
          LinkZip aka "Text to Marketing" is a product of Canadian corporation
          Zesle Software Inc. LinkZip URL Shortener is a link management
          platform mainly built for Businesses, Universities & Survey Agencies.
          It's a brainchild of two young entrepreneurs who have amassed over a
          decade of experience in online marketing and contemporary frameworks
          of web development. We live, breathe, and sleep web, and believe in
          providing our clients with true value for their money. LinkZip has
          almost zero overhead costs and we want to pass on that benefit to our
          customers. After all, why would you want to burn a hole in your pocket
          to pay for day to day operations of a service provider? Our mission is
          to provide the best and easy-to-use platform for every kind of link
          shortening and sharing needs. Feel free to start exploring our
          platform today. Your money and satisfaction, both are covered with our
          "30-days money-back guarantee". We bet you will never want to leave
          us. Thanks for taking the time to visit our website! Questions? Shoot
          an email at support@linkzip.com. We promise we will get back to you
          within one business day. Till then, Happy URL Shortening!
      </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default AboutPage;
