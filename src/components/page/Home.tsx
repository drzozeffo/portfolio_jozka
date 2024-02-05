import styled from "styled-components";
import { Link } from "react-router-dom";
import { Media } from "./TopMedia";

import jozef from "../../images/jozef_aligned.png";
import robocolobee from "../../images/robocolobee.png";

import AgricultureIcon from '@mui/icons-material/Agriculture';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import NightShelterIcon from '@mui/icons-material/NightShelter';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const IntroWrapper = styled.div`
  background-image: linear-gradient(to top right, #5d7754, #749569);
  @media (min-width: 1000px) {
    margin-top: 25px;
    border-radius: 25px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  }
  min-height: 500px;
  margin-bottom: 30px;
`;

const Intro = styled.div`
  background-image: url(${jozef});
  background-repeat: no-repeat;
  background-size: 400px 500px;
  background-position: right bottom;
  @media (max-width: 900px) {
    background-color: #5d7754;
    background-blend-mode: soft-light;
  }
  @media (min-width: 900px) {
    filter: saturate(50%);
  }
  @media (min-width: 1000px) {
    border-radius: 25px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  }
  min-height: inherit;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const About = styled.div`
  width: 650px;
  padding: 30px;
  text-shadow: 1px 1px 1px #45593f;
`;

const Serif = styled.span`
  font-family: 'Noto Serif', serif;
  font-size: 23px;
`;

const Achievements = styled.div`
  background-color: #d8dce3;
  background-image: url(${robocolobee});
  background-repeat: no-repeat;
  background-size: 500px;
  background-blend-mode: soft-light;
  @media (min-width: 1000px) {
    border-radius: 25px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  }
  padding: 30px;
  font-family: 'Noto Serif', serif;
  font-size: 18px;
  margin-bottom: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
`;

const Hobbies = styled.div`
  @media (max-width: 1000px) {
    display: block;
  }
  @media (min-width: 1000px) {
    display: flex;
  } 
  align-items: center;
  justify-content: space-around;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 25px;
`;

const Hobby = styled.div`
  text-align: center;
  width: 300px;
`;

const Agriculture = styled(AgricultureIcon)`
  transform: scale(1.5);
  margin: 15px;
`;

const WaterDrop = styled(WaterDropIcon)`
  transform: scale(1.5);
  margin: 15px;
`;

const NightShelter = styled(NightShelterIcon)`
  transform: scale(1.5);
  margin: 15px;
`;

const StyledA = styled.a`
  text-decoration: none;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
`;

export const Home = () => (
  <Wrapper>
    <IntroWrapper>
      <Intro>
        <About>
          <p><Serif><b>Józef Szymelewicz</b></Serif>
          <h5>mgr inż. Automatyki i Robotyki</h5></p>
          <Serif>
            <p>Jest absolwentem Politechniki Białostockiej gdzie należał do Koła Naukowego Robotyków.</p>

            <p>W ramach pracy dyplomowej opracował innowacyjną platformę mobilną do zwalczania szkodników na polach uprawnych ziemniaka. 
              Obecnie pracuje nad komercjalizacją technologii.</p>
          </Serif>
        </About>
      </Intro>
    </IntroWrapper>

    <Achievements>
      <p>Jest wicemistrzem krajowym konkursu <strong>James Dyson Award 2022</strong>, 
      zdobywcą I nagrody w kategorii Mistrz Innowacji w <strong>Konkursie Konstrukcji Studenckich KoKoS</strong>, 
      I nagrody w konkursie prac inżynierskich <strong>Młodzi Innowacyjni</strong> i laureatem 3. miejsca w konkursie <strong>AgroAbsolwent</strong>.
      Za wybitne osiągnięcia został uhonorowany <strong>Stypendium Ministra Edukacji i Nauki</strong> oraz
      nominowany przez Kurier Poranny w plebiscycie <strong>Osobowość Roku</strong> w kategorii Nauka.</p>

      <p>W ramach działalności w <strong>Kole Naukowym Robotyków</strong> zdobył liczne wyróżnienia w Polsce
      (1. miejsce na turnieju <strong>Robotic Tournament</strong>, 3. miejsce na zawodach robotów <strong>SumoChallenge</strong>) 
      oraz reprezentował Polskę na arenie międzynarodowej: na Litwie (3. miejsce na <strong>Robotiadzie</strong>), w Rumunii (3. miejsce na <strong>RobotChallenge</strong>),
      Estonii i Japonii. Był wykonawcą w projekcie Ministerstwa Edukacji i Nauki <strong>Najlepsi z Najlepszych! 4.0</strong> mającego na celu wdrażanie, rozwój i popularyzację innowacyjnych rozwiązań w autonomicznych robotach mobilnych.
      Jest również współautorem dwóch artykułów naukowych z robotyki.</p>
    </Achievements>

    <Header><p>Przedsięwzięcia</p></Header>
    <Hobbies>
        <Hobby>
          <Agriculture />
          <p><h5>Colobee Solutions</h5></p>
          <p>
            Start-up wdrażający technologie<br/>w rolnictwie ekologicznym<br/>
            <StyledA href="https://www.colobee-solutions.com">Zobacz ofertę</StyledA>
          </p>
        </Hobby>
        <Hobby>
          <WaterDrop />
          <p><h5>Sprzedaż oleju lnianego</h5></p>
          <p>
            Sprzedaż oleju lnianego<br/>własnego tłoczenia<br/>
            <StyledLink to="/oil">Zobacz ofertę</StyledLink></p>
        </Hobby>
        <Hobby>
          <NightShelter />
          <p><h5>Ośrodek wypoczynkowy</h5></p>
          <p>
            Wynajem domu wczasowego<br/>na Suwalszczyźnie<br/>
            <StyledA href="https://www.rybalnia5.fajnespanie.pl/?i=1">Zobacz ofertę</StyledA>
          </p>
        </Hobby>
    </Hobbies>

    <Media />

  </Wrapper>
);
