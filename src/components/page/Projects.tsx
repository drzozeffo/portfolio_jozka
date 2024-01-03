import { Link } from "react-router-dom";
import styled from "styled-components";

import robocolobee from "../../images/robocolobee.jpg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  padding: 10px 10px 30px 10px;
`;

const Header = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
`;

const Post = styled.div`
  max-width: 480px;
  padding-bottom: 20px;
`;

const Link2 = styled(Link)`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  text-align: center;
  max-width: 100%;
  max-height: 270px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: auto;
  &:hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

const ImgLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #617C58;
  height: 30px;
  width: 150px;
  border: 0;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
  box-shadow: 5px 5px 5px lightgray;
  &:hover {
    background-color: lightgreen;
    transition: 0.3s;
  }
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  };
`

export const Projects = () => (
  <Wrapper>
    <Header><p>Projekty</p></Header>

    <Post>
      <Title>RoboColoBee</Title>

      <ImgLink to="/robocolobee">
        <Img src={robocolobee}></Img>
      </ImgLink>
      <p>Ekologiczny sposób na pozbycie się stonki ziemniaczanej z uprawy ziemniaka.</p>
      <Button>
        <StyledLink to="/robocolobee">Czytaj artykuł</StyledLink>
      </Button>
      </Post>
  </Wrapper>
);
