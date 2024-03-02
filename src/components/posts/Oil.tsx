import { Wrapper, Title, Subtitle } from "./Style";
import styled from "styled-components";
// Youtube 
// import "../../App.css";
// import YoutubeEmbed from "../../YoutubeEmbed";

import oil from "../../images/oil_reklama.png";
import oil_orka from "../../images/oil_orka.jpg";
import oil_walowanie from "../../images/oil_walowanie.jpg";
import oil_len_kwitnacy from "../../images/oil_len_kwitnacy.jpg";
import oil_na_ciagniku from "../../images/oil_na_ciagniku.jpg";
import oil_pszczola from "../../images/oil_pszczoła.jpg";
import oil_len_dojrzaly from "../../images/oil_len_dojrzaly.jpg";

const Ad = styled.div`
  width: inherit;
  background-color: #FAF0E6;
  border-radius: 30px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
`;

const Image_ad = styled.div`
  float: left;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Column = styled.div`
  float: left;
  padding: 30px;
  text-align: left;
  font-family: 'Noto Serif', serif;
  font-size: 20px;
  color: brown;
  text-shadow: 1px 1px 1px #eabf94;
  @media (max-width: 1000px) {
    max-width: 100%;
  }
  @media (min-width: 1000px) {
    max-width: 460px;
  }
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


export const Oil = () => (
<Wrapper>
    <Title>Olej lniany</Title>
    <Subtitle>Produkcja oleju lnianego własnego tłoczenia.</Subtitle>

    <Ad>
      <Image_ad><Img src={oil} width="480px" alt="Olej lniany" /></Image_ad>
      <Column>
      <p><strong>Odkryj Tajemnicę Zdrowego Życia z Olejem Lnianym Zimnotłoczonym z Mikołajówki!</strong></p>
      <p>Czy marzysz o naturalnym sposobie na poprawę swojego zdrowia i samopoczucia? Olej lniany zimnotłoczony to odpowiedź na Twoje potrzeby! Pochodzący prosto z serca suwalskiej ziemi, z malowniczej Mikołajówki, olej lniany jest tłoczony na zimno z najwyższej jakości nasion lnu.</p>
      </Column>
    </Ad>

    <Title>Poznaj historię...</Title>
  
    <p><b>Pierwszy świadomy kontakt z olejem lnianym</b></p>
    <p>Podczas studiów w Białymstoku mieszkałem w domu studenckim. Mój współlokator miał w zwyczaju dodawać do swoich posiłków olej lniany (na przykład, do kapusty kiszonej albo polewał nim ugotowane ziemniaki). Nie interesowałem się tym zbytnio, ale w końcu postanowiłem go zapytać. Spróbowałem tego oleju i okazało się, że obiad z dodatkiem oleju lnianego (polany dopiero po podaniu dania, nie w trakcie gotowania/smażenia!) był dużo smaczniejszy.</p>
    {/* [Zdjęcie ugotowanych ziemniaków polanych olejem lnianym] */}
      
    <p><b>Konsultacje z wiedzą rodzinną</b></p>
    <p>Podczas rodzinnych spotkań dowiedziałem się, że w Polsce len był kiedyś rośliną uprawianą przez każdego rolnika. W pewnym okresie jego uprawa była obowiązkowa, gdyż każdy musiał odpowiednią ilość oddać Państwu w ramach podatku. 
    Postanowiłem sprawę omówić z babcią Gienią.</p>
      
    {/* [Zdjęcie babci] */}
    <p>Babcia szczegółowo opisała mi czynności związane z uprawą lnu, aż po otrzymanie kompletnych ubrań. Było bardzo ciekawe. Ale zaraz! A co z olejem?
Po wymłóceniu nasion cepami, jeden z mieszkańców wioski wiózł nasiona do tłoczni do Suwałk. Po wytłoczeniu olej był przechowywany w kanie w składówce. Do czego używano wtedy tego oleju? Okazuje się, że nie tylko do celów spożywczych. Wykorzystywaną cechą oleju lnianego były jego właściwości smarujące. Na przykład, smarowano nim osie w wozach, żeby zmniejszyć opór toczenia się osi w prowizorycznych łożyskach, zwiększyć ich żywotność i zlikwidować piski.</p>
      
    <p><b>Popularne danie z olejem lnianym</b></p>
    <p>Zapytałem babcię o przykład dania, do którego przygotowania był używany olej lniany. Usłyszałem w odpowiedzi, że przygotowanie jej ulubionego dania wygląda następująco:</p>
    <ol>
      <li>Pokrój drobno jedno cebulę i wsyp do miski.</li>
      <li>Dodaj trochę oleju lnianego i posól.</li>
      <li>Ukrój pajdę chleba, maczaj ją w przygotowanej miskturze i ciesz się smakiem. 🙂</li>
    </ol>

    {/* [Zdjęcie dania] */}

    <p><b>Własny olej lniany</b></p>
    <p>Czy smak tego jakże skomplikowanego dania wzbudził we mnie pragnienie tłoczenia własnego oleju? Jeszcze nie.
Moja druga babcia już długo chorowała na ciągle postępującą demencję. Próbowaliśmy wielu suplementów i zabiegów, lecz nic nie wstrzymywało tej bardzo przykrej choroby. Pamiętam, że wtedy wyczytałem gdzieś, że najbardziej nietrwałe mikroelementy w oleju lnianym rozpadają się już kilka godzin po wytłoczeniu oleju, więc wywnioskowałem z tego, że warto byłoby wytłoczyć taki olej we własnym zakresie, żeby mieć pewność, że jest świeży. .Wtedy postanowiłem rozpocząć działania w tym kierunku.
Poszukiwania zacząłem od ekologicznych nasion lnu. Trafiłem na ogłoszenie. Sprzedawca bardzo sympatyczny, opowiedział mi o uprawie lnu od A do Z! Poradziłem się również odnośnie prasy do oleju. W efekcie kupiłem od niego nasiona lnu i zamówiłem prasę do tłoczenia oleju.</p>
    
    
    <p><b><i>Pierwsza próba uprawy lnu</i></b></p>
    {/* [zdjęcie pierwszej uprawy lnu] */}

    <p>Pierwsza próba nie wyszła zbyt dobrze, gdyż len przegrał konkurencję z chwastami na polu. Również problematyczne było skoszenie go przez najęty kombajn. Nie był on przystosowany do ścinania tak włóknistej rośliny jaką jest len. Aczkolwiek ostatecznie udało się otrzymać ok. 15 kg nasion lnu...</p>
   
   
    <Title>Uprawa lnu 2023</Title>
    
    <Image>
      <Img src={oil_na_ciagniku} width="1080px" />
      <p><i>Ursus C-360-3P z gospodarzem na masce.</i></p>
    </Image>
    
    <p>Mając już jakieś doświadczenie po raz kolejny podjąłem się uprawy lnu. Miejsce tegorocznej uprawy to ponad 20 letnia łąka, która przez cały okres swojego istnienia nie była nawożona nawozami sztucznymi ani traktowana środkami chemicznymi. Grunt na wiosnę został zaorany. Następnie przeprowadzono kultywację oraz bronowanie. W zwalczaniu insektów pomagały bociany (zjadały larwy chrabąszczy).</p>
    
    <Image>
      <Img src={oil_orka} width="480px" />
      <p><i>Orka - góry prawie jak w świętokrzyskim!</i></p>
    </Image>

    <Image>
      <Img src={oil_walowanie} width="480px" />
      <p><i>Wałowanie - ostatni zabieg agrotechniczny</i></p>
    </Image>

    
    <p>Do siewu przystąpiłem na początku maja. Po zrobieniu próby kręconej, ziarno zasiałem rozsiewaczem KOS-em. Następnie pole zostało zabronowane i zwałowane. Aż do czasu żniw, nie były wykonywane żadne zabiegi agrotechniczne.</p>
    {/* Wegetacja rośliny */}
    <p>W tym roku z racji na suszę len długo nie wschodził. Niepokoiło mnie to i już myślałem, że znowu nic z tego. Ale gdy po długim okresie suszy spadł deszcze, rośliny niemal z dnia na dzień wystrzeliły ku górze. Len w początkowej fazie wzrostu  przypomina wschodzącą rzodkiewkę :).</p>
    {/* [Zdjęcia rosnącego lnu] */}
    
    <p>Len kwitnie bardzo charakterystycznie. Ma bardzo delikatne kwiaty. Kwitnie od rana do południa, potem płatki kwiatów opadają. I tak codziennie przez około 2 tygodnie. Myślę, że pole kwitnącego lnu jest bardzo dobrym tłem do zdjęć ślubnych i innych okazji :).</p>
    
    <Image>
      <Img src={oil_len_kwitnacy} width="1080px" />
      <p><i>Mieniący się odcieniami fioletu kwitnący len otoczony zielonym tłem łodyg pod błękitnym niebem</i></p>
    </Image>

    <p>Pewnego razu podczas oglądania kwitnącego lnu zauważyłem mnóstwo pszczół. Lądowały na kwiatach i zbierały pyłek. Nektar zlizywały swoimi długimi języczkami siadając na podstawie kwiatu. Cienka łodyga lnu nie stanowi problemu. Pszczoła tak mocno uczepia się łodygi, że nie spada pomimo dyndania jak na trampolinie. Niesamowity owad.</p>
    
    <Image>
      <Img src={oil_pszczola} width="1080px" />
      <p><i>Pszczoła na kwiecie lnu</i></p>
    </Image>

    <p>Po przekwitnięciu na końcach łodyg wyraźnie widoczne są zielone kulki wypełnione jeszcze świeżymi nasionami. Wraz z upływem czasu i pod wpływem suchej pogody len brązowieje i wysycha. Wyschnięcie powoduje zwiększenie się wolnej pomiędzy nasionami w kulach. Zaczynają wydawać charakterystyczny grzechocący dźwięk po poruszeniu rośliny. 

    <Image>
      <Img src={oil_len_dojrzaly} width="1080px" />
      <p><i>Len prawie gotowy do zbiorów</i></p>
    </Image>

      Taka postać lnu jest często używana przez społeczność Litwinów do tworzenia fantazyjnych wieńców dożynkowych oraz wianków na głowę. Można zobaczyć na filmie video poniżej.</p>

      {/* <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="nNIPgfI4&t" />
    </div> */}
<Image>
<iframe width="1000" height="720"
src="https://www.youtube.com/embed/fs-nNIPgfI4">
</iframe> 
</Image>   
    {/* [Zdjęcie wyschniętego lnu] [Zdjęcie ozdób z wysuszonego lnu] */}

    {/* Zbiory */}
    <p>W tym roku, przez zeszłoroczne problemy z koszeniem tej rośliny i brak możliwości wynajęcia odpowiednio przygotowanego kombajnu, postanowiłem kupić własny kombajn. Udało mi się kupić stary i używany kombajn, ale miałem czas do dobrego przygotowania go do żniw lnu. Bardzo dobrze naostrzyłem kosę tnącą. Podczas całego koszenia ani razu nie było sytuacji, żeby się zapchała. Jednakże, napotkałem szereg innych problemów, z którymi musiałem sobie poradzić. Jednym z nich było nawijanie się roślin na bęben z nagarniaczami (tu nieoceniona była pomoc mojego kuzyna Matasa). Drugą sprawą było nie wypoziomowane klepisko w młocarni.</p>
    
    {/* [Zdjęcie z koszenia] */}
    
    <p>Ostatecznie udało się zebrać z pola około połowę nasion. Po oczyszczeniu zebranego plonu udało się uzyskać całkiem spory plon.</p>
  </Wrapper>
);
