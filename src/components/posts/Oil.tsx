import { Wrapper, Title, Subtitle } from "./Style";
import styled from "styled-components";

import oil_orka from "../../images/oil_orka.jpg";
import oil_walowanie from "../../images/oil_walowanie.jpg";
import oil_len_kwitnacy from "../../images/oil_len_kwitnacy.jpg";





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
    <Subtitle>Produkcja własnego oleju lnianego tłoczonego na zimno.</Subtitle>

    <p><b>Pierwszy świadomy kontakt z olejem lnianym</b></p>
    <p>Podczas studiów w Białymstoku mieszkałem w domu studenckim. Mój współlokator miał w zwyczaju dodawać do swoich posiłków olej lniany (na przykład do kapusty kiszonej albo na ugotowane ziemniaki). Nie wiedziałem, że jest to akurat olej lniany, ale w końcu postanowiłem go o to zapytać. Pozwolił mi spróbować tego oleju i obiad okraszony takim olejem (polany dopiero po podaniu dania, nie w trakcie gotowania/smażenia!) był dużo smaczniejszy.</p>
    {/* [Zdjęcie ugotowanych ziemniaków polanych olejem lnianym] */}
      
    <p><b>Konsultacje z wiedzą rodzinną</b></p>
    <p>Podczas rodzinnych spotkań dowiedziałem się, że w Polsce len był kiedyś rośliną uprawianą przez każdego rolnika. W pewnym okresie jego uprawa była obowiązkowa, gdyż każdy musiał odpowiednią ilość oddać Państwu w ramach podatku. 
    Postanowiłem sprawę omówić z babcią Gienią.</p>
      
    {/* [Zdjęcie babci] */}
    <p>Babcia szczegółowo opisała mi czynności związane z uprawą lnu, aż po otrzymanie kompletnych ubrań. Było bardzo ciekawe. Ale zaraz! A co z olejem?
Po wymłóceniu nasion cepami, jeden z mieszkańców wioski wiózł nasiona do tłoczni do Suwałk. Po wytłoczeniu olej był przechowywany w kanie w składówce. Do czego używano wtedy tego oleju? Okazuje się, że nie tylko do celów spożywczych. Wykorzystywaną cechą oleju lnianego były jego właściwości smarne. Na przykład smarowano nim osie w wozach, żeby zmniejszyć opór toczenia się osi w prowizorycznych łożyskach, zwiększyć ich żywotność i zlikwidować piski.</p>
      
    <p><b>Popularne danie z olejem lnianym</b></p>
    <p>Zapytałem babcię o przykład dania, do którego przygotowania był używany olej lniany. Usłyszałem w odpowiedzi, że przygotowanie jej ulubionego dania wyglądało następująco:</p>
    <ol>
      <li>Pokrój drobno jedno cebulę i wsyp do miski.</li>
      <li>Dodaj trochę oleju lnianego i posól.</li>
      <li>Ukrój pajdę chleba, maczaj ją w przygotowanej miskturze i ciesz się smakiem. 🙂</li>
    </ol>

    {/* [Zdjęcie dania] */}

    <p><b>Własny olej lniany</b></p>
    <p>Czy smak tego jakże skomplikowanego dania wzbudził we mnie pragnienie tłoczenia własnego oleju? Jeszcze nie.
Moja druga babcia już długo chorowała na ciągle postępującą demencję. Próbowaliśmy wielu suplementów i zabiegów, lecz nic nie wstrzymywało tej bardzo przykrej choroby. Pamiętam, że wtedy wyczytałem gdzieś, że najbardziej nietrwałe mikroelementy w oleju lnianym rozpadają się już kilka godzin po wytłoczeniu oleju i spożywanie świeżo wytłoczonego oleju jest bardzo dobre dla organizmu. Wtedy postanowiłem zacząć działać w tym kierunku.
Poszukiwania zacząłem od ekologicznych nasion lnu. Trafiłem na ogłoszenie, sprzedawca bardzo sympatyczny, opowiedział mi o uprawie lnu od A do Z. Poradziłem się również odnośnie prasy do oleju. W efekcie nasiona kupiłem, a prasę do oleju zamówiłem.</p>
    
    
    <p><b>Pierwsza próba uprawy lnu</b></p>
    {/* [zdjęcie pierwszej uprawy lnu] */}

    <p>Pierwsza próba nie wyszła zbyt dobrze, gdyż len przegrał konkurencję z chwastami na polu. Również problematyczne było skoszenie go przez wynajęty kombajn. Nie był on przystosowany do ścinania tak włóknistej rośliny jaką jest len. Aczkolwiek ostatecznie udało się otrzymać ok. 15 kg nasion lnu.</p>
   
   
    <Title>Uprawa lnu 2023</Title>
    
    
    <p>Mając już jakieś doświadczenie po raz kolejny podjąłem się uprawy lnu. Miejsce tegorocznej uprawy to ponad 20 letnia łąka, która przez cały okres swojego istnienia nie była nawożona nawozami sztucznymi ani traktowana środkami chemicznymi. Grunt na wiosnę został zaorany. Następnie przeprowadzono kultywację oraz bronowanie. W zwalczaniu insektów pomagały bociany (larwy chrabąszczy).</p>
    
    <Image>
      <Img src={oil_orka} width="480px" />
      <p>Orka. Obyło się bez wywrotki.</p>
    </Image>

    <Image>
      <Img src={oil_walowanie} width="480px" />
      <p>Wałowanie</p>
    </Image>

    
    <p>Do siewu przystąpiłem na początku maja starym rozsiewaczem (KOS), a następnie pole zostało zabronowane i zwałowane. Aż do zbiorów nie były wykonywane żadne zabiegi agrotechniczne.</p>
    {/* Wegetacja rośliny */}
    <p>W tym roku z racji na suszę len długo nie wschodził. Niepokoiło mnie to i już myślałem, że znowu nic z tego. Przy kiełkowaniu przypomina wschodzącą rzodkiewkę.</p>
    {/* [Zdjęcia rosnącego lnu] */}
    
    <p>Len kwitnie bardzo charakterystycznie. Ma bardzo delikatne kwiaty. Kwitnie od rana do południa, potem płatki kwiatów opadają. I tak codziennie, przez około 2 tygodnie. Myślę, że pole kwitnącego lnu jest bardzo dobrym tłem do zdjęć ślubnych i innych okazji :).</p>
    
    <Image>
      <Img src={oil_len_kwitnacy} width="1080px" />
      <p>Kwitnący len</p>
    </Image>

    <p>Podczas oglądania kwitnącego lnu zauważyłem, że pszczoły pobierają również z kwiatów lnu pyłek (z pręcików kwiatów) i nektar (siadając na podstawie kwiatu). Cienka łodyga lnu nie stanowi problemu. Pszczoła tak mocno uczepia się łodygi, że nie spada pomimo dyndania jak na trampolinie. Niesamowite owady.</p>
    
    {/* [Zdjęcie pszczoły siedzącej na kwiecie lnu] */}

    <p>Po przekwitnięciu na końcach łodyg wyraźnie widoczne są zielone kulki wypełnione jeszcze świeżymi nasionami. Wraz z upływem czasu i pod wpływem suchej pogody len brązowieje i wysycha. Wyschnięcie powoduje zwiększenie się wolnej pomiędzy nasionami w kulach. Zaczynają wydawać charakterystyczny grzechocący dźwięk po poruszeniu rośliny Taka postać lnu jest często używana przez społeczność Litwinów do tworzenia fantazyjnych wieńców dożynkowych oraz wianków na głowę.</p>
    
    {/* [Zdjęcie wyschniętego lnu] [Zdjęcie ozdób z wysuszonego lnu] */}

    {/* Zbiory */}
    <p>W tym roku, przez zeszłoroczne problemy z koszeniem tej rośliny i brak możliwości wynajęcia odpowiednio przygotowanego kombajnu, postanowiłem kupić własny kombajn. Udało mi się kupić stary i używany kombajn, ale miałem czas do dobrego przygotowania go do żniw lnu. Bardzo dobrze naostrzyłem kosę tnącą. Podczas całego koszenia ani razu nie było sytuacji, żeby się zapchała. Jednakże, napotkałem szereg innych problemów, z którymi musiałem sobie poradzić. Jednym z nich było nawijanie się roślin na bęben z nagarniaczami (tu nieoceniona była pomoc mojego kuzyna Matasa). Drugą sprawą było nie wypoziomowane klepisko w młocarni.</p>
    
    {/* [Zdjęcie z koszenia] */}
    
    <p>Ostatecznie udało się zebrać z pola około połowę nasion. Po oczyszczeniu zebranego plonu udało się uzyskać całkiem spory plon.</p>
  </Wrapper>
);
