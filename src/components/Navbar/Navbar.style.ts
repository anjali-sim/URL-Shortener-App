import styled from "styled-components";

export const NavbarStyle = styled.div`
& .nav {
    height: 60px;
    width: 100vw;
    background-color: #4d4d4d;
    
    position: sticky;
    top: 0;
    z-index: 999;
  }

& .nav-header {
    display: inline;
}

& .nav-title {
    display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
  margin-left:30px;
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

#nav-check{
    display: none;
}

@media (max-width:600px) {
   
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
    & .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
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
//   outline: none;
//   position: relative;
        // z-index: 3;
        background: transparent;
        text-align:center;
        color: #f99f38;
        font-size: 15px;
        font-weight: 600;
        border-color: #f99f38;
        border-style: solid;
        border-width: 2px;
        border-radius: 10px;
        padding: 10px 10px;
        margin-top: 10px;
        margin-right:18px;
        text-transform: uppercase;
        transition: all 0.2s linear;

    &:hover {
        background-color: #f99f38;
        color: #fff;
    }
`;