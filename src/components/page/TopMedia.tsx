import styled from "styled-components"

import agroabsolwent from "../../images/agroabsolwent.jpg"
import dyson from "../../images/dyson.jpg"
import kokos from "../../images/kokos.jpg"
import mlodziInnowacyjni from "../../images/mlodzi_innowacyjni.jpg"

const Header = styled.div`
  background-color: whitesmoke;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
`

const Row = styled.div`
  @media (max-width: 1000px) {
    display: block;
  }
  @media (min-width: 1000px) {
    display: flex;
  } 
  flex-direction: row;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
`

const Post = styled.div`
  max-width: 480px;
  padding: 20px;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const Img = styled.img`
  text-align: center;
  max-width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  height: auto;
  &:hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`

const ImgLink = styled.a`
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

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  };
`

export const Media = () => (
  <div>
    <Header><p>Media</p></Header>
    <Row>
      <Post>
        30.12.2022
        <Title>Inż. Józef Szymelewicz nagrodzony w konkursie Agroabsolwent</Title>
        Autor: Politechnika Białostocka
        <ImgLink href="https://pb.edu.pl/sukcesy/inz-jozef-szymelewicz-nagrodzony-w-konkursie-agroabsolwent/" target="_blank">
          <Img src={agroabsolwent}></Img>
        </ImgLink>
        <p>
        Józef Szymelewicz, absolwent studiów inżynierskich na kierunku automatyka i robotyka, zdobył trzecie miejsce ex aequo oraz nagrodę specjalną firmy Farm Frites Poland S.A. w konkursie Agroabsolwent na najlepszą pracę na temat nowoczesnego rolnictwa i przetwórstwa rolno-spożywczego. Konkurs od czterech lat organizowany jest przez Bank BNP Paribas we współpracy z Polskim Stowarzyszeniem Rolnictwa Zrównoważonego „ASAP”.
        </p>
        <Button>
          <StyledLink href="https://pb.edu.pl/sukcesy/inz-jozef-szymelewicz-nagrodzony-w-konkursie-agroabsolwent/" target="_blank">Czytaj artykuł</StyledLink>
        </Button>
      </Post>

      <Post>
        31.10.2022
        <Title>inż. Józef Szymelewicz wicemistrzem w konkursie o Nagrodę J. Dysona</Title>
        Autor: Wydział Elektryczny PB
        <ImgLink href="https://we.pb.edu.pl/osiagniecia/inz-jozef-szymelewicz-wicemistrzem-w-konkursie-o-nagrode-j-dysona/" target="_blank">
          <Img src={dyson}></Img>
        </ImgLink>
        <p>
        Pracownik Katedry Automatyki i Robotyki dr inż. Roman Trochimczuk ma powody do dumy ze swego dyplomanta inż. Józefa Szymelewicza, absolwenta pierwszego stopnia Automatyki i robotyki Politechniki Białostockiej, który za swą pracę dyplomową inżynierską, zatytułowaną: Projekt i wykonanie robota mobilnego do usuwania Leptinotarsa decemlineata z uprawy ziemniaka, uzyskał tytuł wicemistrza krajowego w międzynarodowym konkursie o Nagrodę Jamesa Dysona. 
        </p>
        <Button>
          <StyledLink href="https://we.pb.edu.pl/osiagniecia/inz-jozef-szymelewicz-wicemistrzem-w-konkursie-o-nagrode-j-dysona/" target="_blank">Czytaj artykuł</StyledLink>
        </Button>
      </Post>
    </Row>

    <Row>
      <Post>
        10.06.2022
        <Title>inż. Józef Szymelewicz Mistrzem Innowacji w konkursie KOKOS</Title>
        Autor: Wydział Elektryczny PB
        <ImgLink href="https://we.pb.edu.pl/2022/06/10/inz-jozef-szymelewicz-mistrzem-innowacji-w-konkursie-kokos/" target="_blank">
          <Img src={kokos}></Img>
        </ImgLink>
        <p>
        Student Wydziału Elektrycznego i młody utalentowany konstruktor inż. Józef Szymelewicz otrzymał nagrodę specjalną „Mistrz innowacyjności” w kategorii za najbardziej innowacyjną konstrukcję, którą został robot do zwalczania stonki ziemniaczanej.
        </p>
        <Button>
          <StyledLink href="https://we.pb.edu.pl/2022/06/10/inz-jozef-szymelewicz-mistrzem-innowacji-w-konkursie-kokos/" target="_blank">Czytaj artykuł</StyledLink>
        </Button>
      </Post>

      <Post>
        29.05.2022
        <Title>Zwycięstwo w konkursie „Młodzi Innowacyjni”</Title>
        Autor: Wydział Elektryczny PB
        <ImgLink href="https://we.pb.edu.pl/osiagniecia/zwyciestwo-w-konkursie-mlodzi-innowacyjni/" target="_blank">
          <Img src={mlodziInnowacyjni}></Img>
        </ImgLink>
        <p>
        Inż. Józef Szymelewicz zdobył I nagrodę za pracę dyplomową inżynierską pt. „Projekt i wykonanie robota mobilnego do usuwania Leptinotarsa decemlineata z uprawy ziemniaka”, której promotorem jest dr inż. Roman Trochimczuk z Katedry Automatyki i Robotyki Wydziału Elektrycznego.
        </p>
        <Button>
          <StyledLink href="https://we.pb.edu.pl/osiagniecia/zwyciestwo-w-konkursie-mlodzi-innowacyjni/" target="_blank">Czytaj artykuł</StyledLink>
        </Button>
      </Post>
    </Row>
  </div>
)