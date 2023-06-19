import styled from "styled-components";

export const NavbarStyle = styled.div`
  position: relative;
  top: 0;
  & .nav {
    height: 60px;
    width: 100vw;
    background-color: #3d3d3d;
    position: relative;
    // top: -76px;
    z-index: 1;
  }

  & .nav-header {
    display: inline;
  }

  & .nav-title {
    display: inline-block;
    font-size: 22px;
    font-weight: 600;
    color: #fff;
    padding: 10px 10px 10px 10px;
    margin-left: 30px;
  }

  & .nav-links {
    display: inline;
    float: right;
    font-size: 18px;
    margin-right: 30px;
  }

  & .nav-btn {
    display: none;
  }

  #nav-check {
    display: none;
  }

  @media (max-width: 770px) {
    & .nav-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
    }

    & .nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
    }

    & .nav-btn > label:hover,
    .nav #nav-check:checked ~ .nav-btn > label {
      background-color: rgba(0, 0, 0, 0.3);
    }

    span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid #eee;
    }

    & .nav-links {
      position: absolute;
      display: block;
      width: 100%;
      background-color: #333;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 50px;
      left: 0px;
    }

    #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
    }

    #nav-check:checked ~ .nav-links {
      height: calc(100vh - 50px);
      overflow-y: auto;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 80px;
  background: transparent;
  text-align: center;
  color: #a445b2;
  font-size: 15px;
  font-weight: 600;
  border-image: linear-gradient(to right, #a445b2, #fa4299) 1;
  border-style: solid;
  padding: 10px 10px;
  margin-top: 10px;
  text-transform: uppercase;
  transition: all 0.2s linear;
  text-decoration: none;

  &:hover {
    background: -webkit-linear-gradient(left, #a445b2, #fa4299);
    color: #fff;
  }
`;

export const Image = styled.img`
  height: 35px;
  width: 100px;
  margin-right: 15px;
  margin-left: 0px;
  margin-top: 3px;

  @media (max-width: 500px) {
    margin-left: -15px;
  }
`;

export const ListStyle = styled.a`
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
  margin-top: 6px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 770px) {
    display: block;
    width: 100%;
  }
`;
