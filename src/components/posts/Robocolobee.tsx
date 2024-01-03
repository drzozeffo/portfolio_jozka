import { Wrapper, Title, Subtitle, Image, Iframe, Button, Img, Link, StyledLink, Serif } from "./Style"

import robocolobee2 from "../../images/robocolobee2.jpg"
import robocolobee_wip from "../../images/robocolobee_wip.jpg"

export const Robocolobee = () => (
  <Wrapper>
    <Title>RoboColoBee</Title>
    <Subtitle>Stonka ziemniaczana jest jednym z najgroźniejszych szkodników uprawy ziemniaka. Zaprojektowane urządzenie ma na celu w sposób automatyczny i ekologiczny usunięcie chrząszczy i larw stonki ziemniaczanej z roślin ziemniaka, bez stosowania oprysków chemicznych.</Subtitle>

    <Link href="https://www.jamesdysonaward.org/2023/project/robocolobee" target="_blank">
      <Button>Read in English (contest site)</Button>
    </Link>

    <Image><Img src={robocolobee2} width="1000px" alt="RoboColoBee" /></Image>

    <p><b>Inspiracja</b></p>
    <p>Problem stonki ziemniaczanej istnieje w naszym gospodarstwie odkąd pamiętam. Początkowo insekty zbierano ręcznie, lecz z powodu ich dużej liczby po kilku latach rozpoczęto opryski chemiczne. Szukając tematu pracy inżynierskiej kierowałem się tym, aby można go było wykorzystać w praktyce. Słaba skuteczność czynników biologicznych, uodparnianie się stonki ziemniaczanej na chemikalia oraz chęć uprawy ziemniaków bez użycia chemii, zaowocowały pomysłem robotyzacji czasochłonnej i uciążliwej, choć ekologicznej, ręcznej metody zbierania stonki ziemniaczanej.</p>
    
    <p><b>Jak to działa</b></p>
    <p>Zaprojektowane urządzenie składa się z samojezdnej platformy na czterech kołach napędzanych silnikami elektrycznymi oraz zamontowanego na niej urządzenia do wstrząsania roślinami (szczotki zamontowane na obrotowych głowicach). Platforma automatycznie nawiguje i porusza się po polu uprawnym ziemniaka. Pod wpływem wstrząsania roślinami stonka stosuje taktykę obronną polegającą na udawaniu martwego, wskutek czego spada z rośliny i trafia do umieszczonego pod konstrukcją pojemnika na insekty. Robot okresowo powtarza przejazdy po polu uprawnym, ponieważ nie są usuwane jaja i najmniejsze formy larw stonki. Panele słoneczne, akumulator, komputer sterujący oraz odporność na warunki atmosferyczne zapewniają jego bezobsługową pracę maszyny podczas okresu wegetacji ziemniaka.</p>

    <Image>
    <Iframe width="560" height="315" src="https://www.youtube.com/embed/yCZUt8tDROA?si=H7WzxsozNfXklJvq" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></Iframe>
    </Image>
    
    <p><b>Proces projektowania</b></p>
    <p>Na początku przeanalizowałem literaturę naukową dotycząca uprawy ziemniaka, stonki ziemniaczanej i istniejących metod walki z tym insektem. Bazując na tych analizach oraz na własnym doświadczeniu powstała koncepcja autonomicznej platformy mobilnej oraz zamontowanego na niej prostego urządzenia do wstrząsania roślinami. W trakcie projektowania kierowałem się prostotą konstrukcji. Pierwsza wersja platformy jezdnej okazała się mieć zbyt słabe silniki do wykonywania obrotów w miejscu, co zostało rozwiązane poprzez zastosowanie przekładni redukcyjnej, celem uzyskania większego momentu obrotowego na kołach jezdnych. Następnie stworzyłem aplikację mobilną do wygodnego sterowania platformą. Po testach platformy stworzyłem prototyp urządzenia strząsającego i przetestowałem je na polu uprawnym. Kolejnym etapem była autonomia, którą zrealizowałem w ramach pracy magisterskiej z użyciem systemu ROS oraz kilku czujników. Na podstawie odczytów czujnika wychylenia, sygnału GPS oraz odczytów z enkoderów kół jezdnych konstrukcji programowałem zachowanie się robota.</p>
    
    <Image><Img src={robocolobee_wip} width="600px" alt="RoboColoBee" /></Image>

    <p><b>Jak to się różni?</b></p>
    <p>Na rynku nie ma obecnie żadnych urządzeń przeznaczonych do walki ze stonką ziemniaczaną. Istnieją tylko różnego rodzaju opryski, których wpływ na ludzkie zdrowie jest kontrowersyjny. Zaprojektowany robot po wprowadzeniu w pole, automatycznie i ekologicznie wykonuje procedurę strząsania chrząszczy i larw stonki ziemniaczanej i powtarza ją co kilka dni bez ingerencji człowieka.</p>

    <p><b>Plany na przyszłość</b></p>
    <p>Pod koniec tego roku planuję aplikować do platformy startowej. Jej celem, poprzez przeprowadzanie ankiet i inne badania rynku, będzie gruntowane upewnienie się, że ktoś kupi ten produkt. Zamierzam wtedy najpierw opracować małe i proste ręczne urządzenie do mechanicznego zbierania stonki ziemniaczanej z przydomowych ogródków i zdobyć fundusze na pierwszą serię produkcyjną. W razie sukcesu tego produktu, a jestem dobrej myśli, moim następnym celem będzie robot automatycznie wykonujący tę pracę, może najpierw ciut mniejszy niż RoboColoBee, ludziom na pożytek i Bogu na chwałę!</p>

    <p><b>Nagrody</b></p>
    <ul>
    <li>Wicemistrz etapu krajowego konkursu James Dyson Award 2022</li>
    <li>3. miejsce w konkursie AgroAbsolwent organizowanym przez BNP Paribas Bank Polska</li>
    <li>I nagroda w kategorii Mistrz Innowacji w konkursie Konstrukcji Studenckich KoKoS organizowanym przez NZS przy AGH w Krakowie</li>
    <li>I nagroda w konkursie prac inżynierskich w konkursie Młodzi Innowacyjni organizowanym przez Łukasiewicz Przemysłowy Instytut Automatyki i Pomiarów</li>
    </ul>
  </Wrapper>
)