import styled from "styled-components"
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Wrapper = styled.div`
  background-color: #254117;
  color: white;
  height: 100px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
`;

const Button = styled.button`
  background-color: #617C58;
  color: white;
  height: 30px;
  width: 130px;
  border: 0;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: lightgreen;
    transition: 0.3s;
  }
`;

const SocialMedia = styled.div`
  text-align: right;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: lightgreen;
  }
`;

const LinkedIn = styled(LinkedInIcon)`
  transform: scale(1.5);
  margin: 15px;
`;

export const Footer = () => (
  <Wrapper>
    <Container>
      <a href="mailto: j.szym7334@gmail.com">
        <Button>Kontakt</Button>
      </a>
      <SocialMedia>
        <Link href="https://www.linkedin.com/in/jozefszymelewicz/?originalSubdomain=pl" target="blank">
          <LinkedIn />
        </Link>
      </SocialMedia>
    </Container>
    Józef Szymelewicz ©2024
  </Wrapper>
);
