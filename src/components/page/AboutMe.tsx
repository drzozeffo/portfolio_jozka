import styled from "styled-components";
import { Link } from "react-router-dom";

import enface from "../../images/enface.jpg";
import lego from "../../images/lego.jpg";
import kokos2 from "../../images/kokos2.jpg";

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

    <p>Nazywam się Józef Szymelewicz. Mam 25 lat i mieszkam na Suwalszczyźnie nieopodal granicy z Litwą. Jestem absolwentem Automatyki i Robotyki na Politechnice Białostockiej. Jako student, judoka, akordeonista, stypendysta ministra i członek Koła Naukowego Robotyków miałem okazję realizować wiele różnych pasji. Każde z tych zajęć nauczyło mnie cennych lekcji i pomogło mi stać się osobą, którą jestem dzisiaj.</p>
    
    <Image>
      <img src={enface} width="480px" />
      <p>Odbiór nagrody "Mistrz innowacji", Kraków 2022.</p>
    </Image>
    
    <p>Jeśli mowa o osobowości trudno jest nie wspomnieć o pięknej sprawie jaką jest judo, które odkryłem na początku studiów. 
      Judo bardzo pozytywnie wpłynęło na kształtowanie mojej osobowości i charakteru. Poprzez udział w treningach i zawodach nauczyłem się pokonywać najtrudniejsze wyzwania i nigdy się nie poddawać, nawet w obliczu porażki. 
      Również uczyłem się dyscypliny i szacunku do drugiego człowieka. Judo pomogło mi przetrwać natłok zajęć na studiach redukując nagromadzony stres i pozwalając na opanowanie emocji. 
      Ciężko nie zaakcentować oczywiście poprawy i utrzymania sprawności fizycznej całego ciała, jakże ważnej przy pracy naukowej! W zdrowym ciele zdrowy duch. 
      Umiejętności nabyte na Judo takie jak pokonywanie słabości, wyznaczanie sobie celów i wytrwałość pomogły mi nie tylko na macie ale we wszystkich aspektach mojego życia. 
      Przynależność do tak wspaniałego środowiska jakim jest Klub Judo Politechniki Białostockiej daje mi wiele radości i satysfakcji. Póki co nie znam lepszej sztuki walki niż judo, którą można uprawiać bez ryzyka uszczerbku na zdrowiu swoim oraz osoby, z którą trenujemy i walczymy.</p>
    
    <p>Oprócz judo moja pasja do muzyki, a konkretnie do akordeonu, pozwoliła mi wyrazić siebie twórczo i emocjonalnie. Akordeon pomógł mi również rozwinąć koordynację i zręczność, które są niezbędne zarówno do grania melodii, jak i do rywalizacji w judo czy też w pracy naukowej, podczas budowania konstrukcji robotów. 
      Zawsze miałem akordeon „pod ręka” w moim pokoju w akademiku, żeby czasem po prostu pograć i odpocząć od pracy naukowej, co jest również ważną kwestią. „Mobilność” akordeonu i jego doniosły dźwięk pozwoliły mi też umilić czyjeś urodziny i inne uroczystości. 
      Niejednokrotnie akordeon służył mi jako „narzędzie pracy”, gdy pogrywałem wieczorami na rynku pod katedrą, żeby zasilić studencką kieszeń 😊, a czasem na wypustach weselnych.</p>
    
    <Image>
      <img src={lego} width="600px" />
      <p>Roboty sumo i ich twórcy.</p>
    </Image>

    <p>Jako <StyledA href="https://pb.edu.pl/sukcesy/stypendium-ministra-dla-naszego-studenta/" target="_blank">stypendysta ministra</StyledA> jestem wdzięczny Kołu Naukowemu Robotyków działającemu na naszej uczelni, że miałem możliwość realizowania się jako konstruktor robotów, za dostęp do zasobów i wsparcia niezbędnego do osiągania sukcesów w tej dziedzinie. 
      Tymi sukcesami były napisane wspólnie z moimi kolegami opublikowane w czasopismach naukowych i wygłaszane na konferencjach artykuły naukowe oraz możliwość udziału w międzynarodowych zawodach robotów w Polsce i za granicą, w krajach takich jak Litwa, Rumunia, a nawet Japonia. 
      Jestem głęboko wdzięczny za tę możliwość, bo dało mi to szansę na poznanie innych studentów z reszty świata i ich kultur z czego największe wrażenie zrobiła i w dalszym ciągu robi na mnie kultura japońska.</p>
    
    <p>Jako autor <StyledLink to="/robocolobee">robota</StyledLink> do zbierania stonki ziemniaczanej, którego prototyp zbudowałem w ramach pracy dyplomowej inżynierskiej, cieszę się z uznania mojego wynalazku wyrażonego w otrzymanych wyróżnieniach na różnych konkursach, 
    z czego największym wyróżnieniem jest tytuł wicemistrza krajowego w konkursie o <StyledA href="https://we.pb.edu.pl/osiagniecia/inz-jozef-szymelewicz-wicemistrzem-w-konkursie-o-nagrode-j-dysona/" target="_blank">Nagrodę Jamesa Dysona</StyledA>. Projekt robota powstał w odpowiedzi na potrzebę pozbycia się problemu stonki ziemniaczanej w naszym ekologicznym gospodarstwie rolnym.</p>
    
    <p>Poprzez wolontariat i mentoring mogłem nie tylko nabywać ale i dzielić się swoją wiedzą i doświadczeniem z innymi oraz pomagać im w realizacji własnych pasji. Podsumowując, moje doświadczenia jako judoki, akordeonisty, stypendysty ministra i członka Koła Naukowego Robotyków dały mi cenne lekcje i pomogły mi stać się osobą, którą jestem dzisiaj. 
      Jestem wdzięczny za możliwości, które miałem i nie mogę się doczekać kontynuowania moich pasji w przyszłości.</p>
    <Image>
      <img src={kokos2} width="600px" />
      <p>Ceremonia rozdania nagród konkursu KOKOS, Kraków 2022.</p>
    </Image>

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
