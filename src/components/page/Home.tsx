import styled from "styled-components";
import { Media } from "./TopMedia";

import jozef from "../../images/jozef_aligned.png"
import robocolobee from "../../images/robocolobee.png"

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

const Header = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
`;

const Achievements = styled.div`
  background-color: #d8dce3;
  background-image: url(${robocolobee});
  background-repeat: no-repeat;
  background-size: 450px;
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
      Za wybitne osiągnięcia został uhonorowany <strong>Stypendium Ministra Edukacji i Nauki – Najlepsi z Najlepszych! 4.0</strong> oraz
      nominowany przez Kurier Poranny w plebiscycie <strong>Osobowość Roku</strong> w kategorii Nauka.</p>

      <p>W ramach działalności w <strong>Kole Naukowym Robotyków</strong> zdobył liczne wyróżnienia w Polsce
      (1. miejsce na turnieju <strong>Robotic Tournament</strong>, 3. miejsce na zawodach robotów <strong>SumoChallenge</strong>) 
      oraz reprezentował Polskę na arenie międzynarodowej: na Litwie (3. miejsce na <strong>Robotiadzie</strong>), w Rumunii (3. miejsce na <strong>RobotChallenge</strong>),
      Estonii i Japonii.

      Jest również współautorem dwóch artykułów naukowych na temat wykorzystania czujników w robotach mobilnych.</p>
    </Achievements>

    {/* <Header><p>Zainteresowania</p></Header>
    <Hobbies>
      <HobbyRow>
        <Hobby>
          <Robot />
          <p><h5>Robotics</h5></p>
          <p>Manipulators, autonomous <br/>mobile robots, controllers</p>
        </Hobby>
        <Hobby>
          <Terminal />
          <p><h5>Artificial Intelligence</h5></p>
          <p>Neural networks, unsupervised <br/>and reinforcement learning</p>
        </Hobby>
      </HobbyRow>
      <HobbyRow>
        <Hobby>
          <Computer />
          <p><h5>Computer Vision</h5></p>
          <p>Image and video processing, <br/>object recognition</p>
        </Hobby>
        <Hobby>
          <Psychology />
          <p><h5>Psychology</h5></p>
          <p>Cognitive science, neurobiology, theory of mind</p>
        </Hobby>
      </HobbyRow>
    </Hobbies> */}

    <Media />

  </Wrapper>
);
