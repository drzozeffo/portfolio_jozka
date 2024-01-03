import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #254117;
  display: flex;
  align-items: top;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  overflow: auto;
  white-space: nowrap;
`;

const Tab = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 10px;

  &:hover, &:focus, &:active {
    color: lightgreen;
  };
`;

const TabA = styled.a`
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 10px;

  &:hover, &:focus, &:active {
    color: lightgreen;
  };
`;

export const Navbar = () => (
  <Wrapper>
    <Tab to="/home">Strona główna</Tab>
    <Tab to="/about-me">O mnie</Tab>
    <Tab to="/projects">Projekty</Tab>
    <Tab to="/media">Media</Tab>
    <TabA href="https://drive.google.com/file/d/1slwZwt2zNJ8UnQsN2taZAUVm_foCcCae/view?usp=sharing" target="blank">
      CV
    </TabA>
    <Tab to="/contact">Kontakt</Tab>
  </Wrapper>
);
