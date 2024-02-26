import styled from "styled-components";
import { Link } from "react-router-dom";

import enface from "../../images/enface.jpg";
import lego from "../../images/lego.jpg";
import kokos2 from "../../images/kokos2.jpg";
import judo from "../../images/judo.jpg";


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

const Image = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Img = styled.img`
  max-width: 100%;
`;

const StyledA = styled.a`
  text-decoration: none;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
`;

export const AboutMe = () => (
  <Wrapper>
    <p><Header>O mnie</Header></p>

    <p>Nazywam się Józef Szymelewicz. Mam 25 lat i mieszkam na Suwalszczyźnie nieopodal granicy z Litwą.</p>
    
    <Image>
      <Img src={enface} width="480px" />
      <p>Odbiór nagrody "Mistrz innowacji", Kraków 2022.</p>
    </Image>
    
    <header>
    <h2>Judo</h2>
    </header>

    <p>Tę niesamowitą sztukę walki odkryłem na początku studiów. Panowanie nad ciałem, fizyka ruchu, fizyczny kontakt z UKE (partner do ćwiczeń), kształcenie charakteru, ogromna ilość mądrości życiowej przekazywana przez trenera Piotra Klimowicza. Jednym słowem uczta dla ciała, umysłu i ducha. Umiejętności nabyte na Judo pomogły mi nie tylko na macie ale przede wszystkim w życiu. Przynależność do tak wspaniałego środowiska jakim jest Klub Judo Politechniki Białostockiej dała mi wiele dobrego. Póki co nie znam lepszej sztuki walki niż judo. Oprócz tego, że jest dużo mniej kontuzyjnym sportem niż piłka nożna, to można ćwiczyć bez uszkadzania osoby z którą trenujemy i walczymy.</p>

    <Image>
      <Img src={judo} width="480px" />
      <p>Udział w XIV mistrzostwach Politechniki Białostockiej w Judo.</p>
    </Image>
       
    <header>
    <h2>Koło Naukowe Robotyków</h2>
    </header>

    <p>Jestem wdzięczny społeczności Koła Naukowegp Robotyków działającego na naszej uczelni, że podczas studiów miałem możliwość realizowania się jako konstruktor robotów, za dostęp do zasobów i wsparcia niezbędnego do osiągania sukcesów w tej dziedzinie. Mogłem brać udział w międzynarodowych zawodach robotów w Polsce i za granicą, w krajach takich jak Litwa, Rumunia, a nawet Japonia. Jestem głęboko wdzięczny za tę możliwość, bo dało mi to szansę na poznanie innych studentów z reszty świata i ich kultur z czego największe wrażenie zrobiła na mnie kultura Japońska. Podczas budowy robotów napisałem wspólnie z moimi kolegami 2 artykuły naukowe. </p>
    
    <Image>
      <Img src={lego} width="600px" />
      <p>Roboty sumo i ich twórcy.</p>
    </Image>

    <header>
    <h2>Robot do zwalczania stonki ziemniaczanej</h2>
    </header>

    <p>
    Prototyp <StyledLink to="/robocolobee">robota</StyledLink> zbudowałem w ramach pracy dyplomowej inżynierskiej. Cieszę się z uznania mojego wynalazku wyrażonego w otrzymanych wyróżnieniach na różnych konkursach, z czego największym wyróżnieniem jest tytuł wicemistrza krajowego w konkursie o Nagrodę Jamesa Dysona, ale też i nagroda w konkursie KoKoS, Młodzi Innowacyjni oraz Agroabsolwent. Projekt robota powstał w odpowiedzi na potrzebę pozbycia się problemu stonki ziemniaczanej w naszym ekologicznym gospodarstwie rolnym i pomimo prostej konstrukcji, jego temat był poprzedzony bardzo czasochłonnym badaniem obecnego stanu nauki.
    </p>
    
    <Image>
      <img src={kokos2} width="600px" />
      <p>Ceremonia rozdania nagród konkursu KOKOS, Kraków 2022.</p>
    </Image>

    <header>
    <h2>Czas wolny</h2>
    </header>
    
    <p>
    Zawsze miałem akordeon „pod ręka” w moim pokoju w akademiku, żeby czasem po prostu pograć i odpocząć od nauki. „Mobilność” akordeonu i jego doniosły dźwięk pozwoliły mi też umilić czyjeś urodziny i inne uroczystości. Czasem akordeon służył mi jako narzędzie prac. Grywałem wieczorami na rynku pod katedrą, a czasem na wypustach weselnych.
    </p>

    <p><b>Współtworzone publikacje:</b></p>
    <ul>
    <li>Święcki, M., Szymelewicz, J., Matusiewicz, J., & Grądzki, R. (2021). <i>Tests of Useful Field of View of Laser Sensors Used in Autonomous Nano Sumo Robots. 
      International Journal of Mechanical Engineering and Robotics Research, 10(8).</i> <StyledA href="https://www.ijmerr.com/uploadfile/2021/0709/20210709022040522.pdf" target="_blank">Czytaj artykuł</StyledA></li>
    <li>Święcki, M., Szymelewicz, J., Matusiewicz, J., & Grądzki, R. (2020). <i>Tests of Selected Sensors Applicable in Autonomous Mini Sumo Robots. 
      system, 7(9), 10.</i> <StyledA href="https://www.ijmerr.com/uploadfile/2020/0720/20200720015441936.pdf" target="_blank">Czytaj artykuł</StyledA></li>
    </ul>
    
    <p><b>Ulubione cytaty:</b></p>
    <ul>
    <li>Ludziom na pożytek, Bogu na Chwałę.</li>
    <li>Nie daruj głodnemu ryby. Podaruj mu wędkę i naucz go łowić.</li>
    </ul>
  </Wrapper>
)
