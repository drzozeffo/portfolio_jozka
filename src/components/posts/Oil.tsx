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
import oil_bociany from "../../images/oil_bociany.jpg";
import oil_przekaska from "../../images/oil_przekaska.jpg";
import oil_orka_korzenie from "../../images/oil_orka_korzenie.jpg";
import oil_wieniec from "../../images/oil_wieniec.jpg";
import oil_koszenie from "../../images/oil_koszenie.jpg";
import oil_nasiona from "../../images/oil_nasiona.jpg";

const Ad = styled.div`
  width: inherit;
  background-color: #FAF0E6;
  border-radius: 30px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
`;

const Ab = styled.div`
  width: inherit;
  column-gap: 40px;
  text-align: center;
`;

const Xd = styled.div`
  text-align: center;
`;

const Image_ab = styled.div`
  float: left;
  text-align: center;
  border-top: 5px solid #f5f5f5;
  border-left: 5px solid #f5f5f5;
  border-right: 5px solid #f5f5f5;
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
      <p><strong>Odkryj Tajemnicę Zdrowego Życia z Olejem Lnianym z Mikołajówki!</strong></p>
      <p>Czy marzysz o naturalnym sposobie na dostarczenie swojemu organizmowi cennych składników? Olej lniany to odpowiedź na Twoje potrzeby! Pochodzący prosto z serca suwalskiej ziemi, z malowniczej Mikołajówki, olej lniany jest tłoczony na zimno z nasion lnu, z własnej ekologicznej uprawy.</p>
      </Column>
    </Ad>

    

    <Title>Jak to wszystko się zaczęło...</Title>
  
    <p><b>Pierwszy kontakt z olejem lnianym</b></p>
    <p>Podczas studiów w mieszkałem w domu studenckim. Mój współlokator miał w zwyczaju dodawać do swoich posiłków olej lniany (przykładowo do kapusty kiszonej albo polewał nim ugotowane ziemniaki). Nie interesowałem się tym zbytnio, ale w końcu postanowiłem spróbować tego oleju. Posiłek z dodatkiem oleju lnianego okazał się przepyszny! Uwaga! Olej lniany został dodany do już gotowego dania. Nie nadaje się do gotowania, ani tym bardziej do smażenia!</p>


   
      
    <p><b>Tło historyczne uprawy lnu – wiedza rodzinna</b></p>
    <p>Podczas rodzinnych spotkań dowiedziałem się, że w Polsce len był kiedyś rośliną uprawianą przez każdego rolnika. W pewnym okresie jego uprawa była obowiązkowa, gdyż każdy gospodarz musiał określoną ilość tej rośliny oddać Państwu w ramach podatku. 
Więcej o tej roślinie dowiedziałem się od babci Eugenii. Babcia szczegółowo opisała mi czynności związane z uprawą lnu, od przygotowania pola, aż po otrzymanie kompletnych ubrań. Z ciekawością wysłuchałem opisu całej tej procedury. Ale zaraz! A co z olejem? Nasiona lnu wymłócano ręcznie cepami na klepisku. Następnie jeden z mieszkańców wsi zaprzęgał wóz końmi, zbierał nasiona od sąsiednich gospodarzy i wiózł je do tłoczni do Suwałk. Po wytłoczeniu olej był przechowywany w kanie w składówce. Do czego używano wtedy tego oleju? Okazuje się, że nie tylko do celów spożywczych. Wykorzystywaną cechą oleju lnianego były jego właściwości smarujące. Jednym z takich zastosowań było smarowanie nim osi w wozach, żeby zmniejszyć ich opór toczenia się w prowizorycznych łożyskach.</p>
      
    <p><b>Popularna przekąska z olejem lnianym</b></p>
    <p>Zapytałem babcię o przykład posiłku z dodatkiem oleju lnianego. Usłyszałem w odpowiedzi opis prostej przekąski. Pokrojoną drobno cebulę polewano olejem lnianym, posypywano szczyptą soli. Pajdę chleba maczano w przygotowanej miksturze i cieszono się smakiem 🙂</p>
    

    <Image>
      <Img src={oil_przekaska} width="1080px" />
      <p><i>Prosta i smaczna przekąska – olej lniany, cebulka, szczypta soli i chleb z własnego wypieku.</i></p>
    </Image>

    <p><b>Własny olej lniany</b></p>
    <p>Czy smak tego jakże skomplikowanego dania wzbudził we mnie pragnienie tłoczenia własnego oleju lnianego? To jeszcze nie ten moment. Z racji na dużą zawartość kwasów omega zaczęliśmy podawać olej lniany dla naszej babci chorej na demencję. Dowiedziałem się też, że najbardziej nietrwałe mikroelementy w oleju lnianym rozpadają się w stosunkowo krótkim czasie po wytłoczeniu oleju, więc wywnioskowałem z tego, że warto byłoby wytłoczyć taki olej we własnym zakresie, żeby mieć pewność, że jest świeży. Wtedy postanowiłem rozpocząć działania w tym kierunku. Poszukiwania zacząłem od nasion lnu z ekologicznej uprawy. Znalazłem ogłoszenie. Sprzedawca okazał się bardzo sympatyczny i opowiedział mi o ekologicznej uprawie lnu od A do Z! Poradziłem się również odnośnie prasy do oleju. W końcu kupiłem od niego nasiona lnu i zamówiłem poleconą prasę do tłoczenia oleju.</p>
    
    
    <p><b>Pierwsza próba uprawy lnu</b></p>
    {/* [zdjęcie pierwszej uprawy lnu] */}

    <p>Pierwsza próba uprawy tej rośliny miała miejsce w roku 2022 i nie wyszła zbyt dobrze, gdyż len przegrał konkurencję z chwastami na polu. Również problematyczne było skoszenie go przez najęty kombajn. Kombajn nie był przystosowany do ścinania tak włóknistej rośliny jaką jest len. Aczkolwiek ostatecznie udało się otrzymać kilkanaście kilogramów lnu.</p>
   
   
    <Title>Uprawa lnu 2023</Title>
        
    <p>Mając już jakieś doświadczenie, po raz kolejny podjąłem się uprawy lnu. Miejsce tegorocznej uprawy to ponad 20 letnia łąka, która przez cały okres swojego istnienia nie była nawożona nawozami sztucznymi ani traktowana środkami chemicznymi. Pierwszym zabiegiem była kultywacja, a następnie grunt został zaorany. W zwalczaniu insektów pomagały bociany. Zjadały pędraki czerwcowych chrabąszczy, drutowce i inne szkodniki.</p>
    

    <Ab>
      <Image_ab><Img src={oil_orka} width="480px" />
      
      </Image_ab>
      
      <Image_ab><Img src={oil_orka_korzenie} width="480px" />
      
      </Image_ab>
    </Ab>


    <Xd>
      <p><i>Orka - góry prawie jak w świętokrzyskim! Wiele lat bez orki pozwoliło drzewom zapuścić korzenie kilkanaście metrów w głąb łąki!</i></p>
      </Xd>
    
    

    


    <p>Następnie przeprowadzono kultywację oraz bronowanie. Do siewu przystąpiłem na początku maja. Po zrobieniu próby kręconej, ziarno zasiałem rozsiewaczem KOS-em. Następnie pole zostało zabronowane i zwałowane. Aż do czasu żniw nie były już wykonywane żadne zabiegi agrotechniczne.</p>

    <Image>
      <Img src={oil_na_ciagniku} width="1080px" />
      <p><i>Ursus C-360-3P z gospodarzem na masce. Wałowanie pola - ostatni zabieg agrotechniczny.</i></p>
    </Image>

    {/* Wegetacja rośliny */}
    <p>W tym roku z racji na suszę len długo nie wschodził. Niepokoiło mnie to i już zacząłem się martwić, że znowu nic z tego. Ale gdy po długim okresie suszy spadł deszcz, wszystkie rośliny niemal z dnia na dzień wystrzeliły ku górze. Len w początkowej fazie wzrostu wygląda jak wschodząca rzodkiewka :).
    Len kwitnie bardzo charakterystycznie. Ma bardzo delikatne kwiaty. Z moich obserwacji wynika, że kwitnie od rana do południa. Po południu płatki kwiatów opadają. I tak codziennie przez około 2 tygodnie. Myślę, że pole kwitnącego lnu jest bardzo dobrym tłem do zdjęć ślubnych i innych okazji :).</p>
    {/* [Zdjęcia rosnącego lnu] */}
    
    
    
    <Image>
      <Img src={oil_len_kwitnacy} width="1080px" />
      <p><i>Mieniący się odcieniami fioletu kwitnący len otoczony zielonym tłem łodyg pod chmurami wędrującymi po błękitnym niebie.</i></p>
    </Image>

    <p>Pewnego razu podczas oglądania kwitnącego lnu zauważyłem mnóstwo pszczół. Lądowały na kwiatach i zbierały pyłek. Nektar zlizywały swoimi długimi języczkami siadając na podstawie kwiatu. Cienka łodyga lnu nie stanowiła dla nich problemu. Pszczoła tak mocno uczepia się łodygi, że nie spada pomimo tego, że razem z łodyga podskakuje jak na trampolinie, niesamowity owad.</p>
    
    <Image>
      <Img src={oil_pszczola} width="1080px" />
      <p><i>Pszczoła na kwiecie lnu</i></p>
    </Image>

    <p>Po przekwitnięciu na czubkach łodyg wyraźnie widoczne są zielone kulki wypełnione jeszcze młodymi nasionami. Wraz z upływem czasu i pod wpływem suchej pogody len brązowieje i wysycha. Wyschnięcie powoduje zwiększenie się wolnej przestrzeni w kulkach, pomiędzy nasionami. Z tego powodu te kulki, po wprawieniu w ruch, zaczynają wydawać charakterystyczny grzechocący dźwięk, podobnie jak grzechotka.</p>

    <Image>
      <Img src={oil_len_dojrzaly} width="1080px" />
      <p><i>Len prawie gotowy do zbiorów. Na prawej dolnej części zdjęcia został uchwycony fragment uprawy słonecznika.</i></p>
    </Image>

      <p>Taka postać lnu jest często używana przez społeczność Litwinów do tworzenia fantazyjnych wieńców dożynkowych oraz wianków na głowę. Jeden z takich wieńców można zobaczyć na zdjęciu poniżej.</p>

    <Image>
      <Img src={oil_wieniec} width="1080px" />
      <p><i>Ołtarzyk dożynkowy przedstawiający Najświętszy Sakrament. Kielich u podstawy otoczonym jest promieniście odchodzącymi od środka łodygami lnu. Dodatkowo len został wkomponowany jako zwisające frędzle wokół ołtarzyka.</i></p>
    </Image>  


     

    {/* [Zdjęcie wyschniętego lnu] [Zdjęcie ozdób z wysuszonego lnu] */}

    {/* Zbiory */}
    <p>W tym roku, przez zeszłoroczne doświadczenia z koszeniem tej rośliny i brak możliwości wynajęcia odpowiednio przygotowanego kombajnu, postanowiłem kupić własny kombajn. Udało mi się zakupić 60-letnią, ale ciągle sprawną maszynę. Dzięki temu miałem czas na spokojne przygotowanie kombajnu do żniw. Czas był między innymi na to, żeby bardzo mocno naostrzyć kosę tnącą. Podczas całego koszenia ani razu nie było sytuacji, żeby kosa się zapchała. Jednakże napotkałem szereg innych problemów, z którymi musiałem sobie poradzić. Jednym z nich było nawijanie się roślin na bęben z nagarniaczami (tu nieoceniona była pomoc mojego kuzyna Matasa).
Drugim problemem było nie wypoziomowane klepisko w młocarni. Poniżej zamieszczam zdjęcie oraz krótki film z koszenia.</p>
    
<Image>
      <Img src={oil_koszenie} width="1080px" />
      <p><i>Gospodarz z Pomocnikiem na Matadorze. Pod niebem, na którym zachodzące promienie słońca zwiastują nadchodzący zmierzch..</i></p>
    </Image>  


      


    
  

    <Image>
      <Img src={oil_nasiona} width="1080px" />
      <p><i>Siemię lniane po oczyszczeniu, otoczone łodygami lnu zakończonymi grzechocącymi kulkami, z których zostało wymłócone.</i></p>
    </Image>  

    <Image>
    <iframe width="315" height="560" 
src="https://www.youtube.com/embed/2rsyBro9NKo" 
title="YouTube video player" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture;
web-share;fullscreen"
></iframe>
</Image> 

<Xd>
  <p><i>
    Krótkie nagranie z koszenia lnu
    </i></p>
</Xd>

  </Wrapper>


);
