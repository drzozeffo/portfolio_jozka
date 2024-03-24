import styled from "styled-components";
import Display from "../../images/display.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
`;

const Header = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: left;

`;

const Column = styled.div`
  float: left;
  padding-right: 20px;
  text-align: justify;
  @media (max-width: 1000px) {
    max-width: 100%;
  }
  @media (min-width: 1000px) {
    max-width: 380px;
  }
`;

const Image = styled.div`
  float: right;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Img = styled.img`
  max-width: 100%;
`;

export const Contact = () => (
  <Wrapper>
    <Header><p>Kontakt</p></Header>
    <div>
      <Column>
      <p>Jeśli jesteś zainteresowany współtworzeniem innowacyjnego start-upu wdrażającego technologie w rolnictwie ekologicznym 
        lub chcesz po prostu nawiązać kontakt wyślij wiadomość na adres e-mail:</p>
      <p><b>jozef.szymelewicz@gmail.com</b></p>
      </Column>
      <Image>
        <Img src={Display} width="600px" />
      </Image>
    </div>
  </Wrapper>
);
