/**
 * 1. ročník — od najstarších literárnych pamiatok po klasicizmus.
 *
 * Súbor obsahuje katalóg autorov (`autori1`) a spracované diela (`diela1`)
 * pre prvý ročník podľa ŠVP: staroveká orientálna a antická literatúra,
 * stredoveká slovenská a svetová literatúra, humanizmus a renesancia,
 * barok, klasicizmus a osvietenstvo.
 *
 * Každé dielo obsahuje anotáciu, obsah s prezradením konca, kompozíciu,
 * charakteristiku postáv, témy, motívy, jazykové prostriedky, maturitné
 * minimum a sadu cvičení (kvíz, priraďovanie, doplňovačka).
 */

import type { Autor, Dielo } from '../../types'

export const autori1: Autor[] = [
  {
    id: 'ezop',
    meno: 'Ezop',
    roky: '6. stor. pred Kr.',
    smer: 'staroveká grécka literatúra',
    zivotopis:
      'Ezop bol podľa tradície grécky otrok z Frýgie, ktorý žil v 6. storočí pred Kristom a pre svoju bystrosť si vyslúžil slobodu. O jeho živote nemáme spoľahlivé správy, preto sa dnes považuje skôr za legendárnu postavu, pod ktorej meno sa zhromaždil starší ľudový bájkarský materiál. Jeho bájky sa najprv šírili ústne, neskôr ich zapísali a prebásnili grécki a rímski autori Babrios a Faidros. Ezop sa považuje za zakladateľa žánru bájky a jeho príbehy o zvieratách slúžili po celej Európe ako škola mravnej výchovy. Na jeho odkaz priamo nadväzovali Jean de La Fontaine, I. A. Krylov aj slovenský bájkar Jonáš Záborský.',
    dalsieDiela: ['Vlk a baránok', 'Lev a myš', 'Líška a hrozno', 'Vrana a syr', 'Zajac a korytnačka'],
  },
  {
    id: 'homer',
    meno: 'Homér',
    roky: '8. stor. pred Kr.',
    smer: 'staroveká grécka literatúra — hrdinský epos',
    zivotopis:
      'Homér je najstarší známy európsky spisovateľ, tradične označovaný za slepého potulného spevca (aoida) z maloázijskej Iónie. O jeho existencii sa vedie tzv. homérska otázka — spor, či Ilias a Odysea vznikli ako dielo jedného geniálneho autora, alebo ako výsledok dlhej ústnej tradície mnohých spevcov. Jeho eposy vznikli v 8. storočí pred Kristom a spracúvajú látku trójskeho cyklu, teda bájnu vojnu Grékov proti Tróji. Homérove eposy boli pre Grékov akousi „bibliou“ — učili sa z nich čítať, dozvedali sa z nich o bohoch, hrdinských ideáloch a dejinách. Ilias a Odysea sú vzorom celej európskej epiky a Odysea sa stala prototypom románu o putovaní.',
    dalsieDiela: ['Ilias', 'Odysea', 'Batrachomyomachia (Žabomyšia vojna — pripisovaná)'],
  },
  {
    id: 'sofokles',
    meno: 'Sofokles',
    roky: '496 – 406 pred Kr.',
    smer: 'staroveká grécka literatúra — klasická attická tragédia',
    zivotopis:
      'Sofokles sa narodil v Kolóne pri Aténach v bohatej rodine a prežil vrcholné obdobie aténskej demokracie za Perikla. Bol nielen dramatikom, ale aj vysokým štátnym úradníkom (stratégom) a kňazom, teda plne zapojeným aténskym občanom. Napísal vyše 120 drám, z ktorých sa zachovalo sedem tragédií, a asi dvadsaťkrát zvíťazil na dramatických súťažiach. Do vývoja tragédie zaviedol tretieho herca, zmenšil úlohu chóru a posilnil dialóg, čím sa dôraz preniesol z rituálu na charakter a konflikt človeka. Jeho hrdinovia sú ideálni, vnútorne pevní ľudia, ktorí neustúpia zo svojho presvedčenia ani pod hrozbou smrti.',
    dalsieDiela: ['Kráľ Oidipus', 'Oidipus na Kolóne', 'Elektra', 'Aiás', 'Filoktétés'],
  },
  {
    id: 'konstantin',
    meno: 'Konštantín (Cyril)',
    roky: 'okolo 827 – 869',
    smer: 'stredoveká literatúra — veľkomoravské obdobie',
    zivotopis:
      'Konštantín sa narodil v Solúne (Tesalonikách) ako syn vysokého byzantského úradníka a pre svoju učenosť dostal prímenie Filozof. Vyštudoval v Konštantínopole, prednášal filozofiu a pôsobil ako knihovník pri chráme Hagia Sofia. Roku 863 prišiel spolu so starším bratom Metodom na žiadosť kniežaťa Rastislava na Veľkú Moravu, kde zaviedli staroslovienčinu ako štvrtý liturgický jazyk a nové písmo hlaholiku. Preložil biblické a liturgické texty, pripravil základy slovanského školstva a svoju prekladateľskú činnosť obhájil pred pápežom v Ríme. Krátko pred smrťou vstúpil do kláštora, kde prijal meno Cyril; zomrel roku 869 v Ríme.',
    dalsieDiela: [
      'Proglas',
      'preklad Nového zákona do staroslovienčiny',
      'Moravsko-panónske legendy (spolu s Metodovým okruhom)',
    ],
  },
  {
    id: 'maurus',
    meno: 'Maurus',
    roky: '11. storočie (okolo 1000 – 1070)',
    smer: 'stredoveká latinská literatúra — hagiografia',
    zivotopis:
      'Maurus bol benediktínsky mních, neskôr opát kláštora na Panónskej hore (Pannonhalma) a od roku 1036 biskup v Päťkostolí (Pécs). Vzdelanie získal v benediktínskom prostredí, ktoré bolo v stredoveku hlavným nositeľom písanej kultúry v Uhorsku. Ako mladý žiak sa osobne poznal s pustevníkmi žijúcimi na Zobore pri Nitre, a práve tieto spomienky neskôr zapísal. Okolo roku 1064 napísal po latinsky legendu o svätom Svoradovi a Benediktovi, ktorá je najstarším literárnym dielom vzniknutým na našom území po zániku Veľkej Moravy. Dielo má pre slovenské dejiny aj dokumentárnu hodnotu, pretože zachytáva pomery v okolí Nitry v 11. storočí.',
    dalsieDiela: ['Legenda o svätom Svoradovi a Benediktovi (Vita sanctorum Zoerardi et Benedicti)'],
  },
  {
    id: 'dante',
    meno: 'Dante Alighieri',
    roky: '1265 – 1321',
    smer: 'predrenesancia (prechod od stredoveku k renesancii)',
    zivotopis:
      'Dante Alighieri sa narodil vo Florencii v rodine nižšej šľachty a už ako mladík sa zapojil do básnickej skupiny „sladkého nového štýlu“. Ako deväťročný sa podľa vlastného svedectva zaľúbil do Beatrice Portinariovej, ktorá mu zostala celoživotným ideálom a po jej ranej smrti sa stala symbolom nebeskej lásky. Aktívne sa zúčastňoval na politickom živote Florencie, no po víťazstve protistrany ho roku 1302 odsúdili na vyhnanstvo a do rodného mesta sa už nikdy nevrátil. Vo vyhnanstve napísal svoje najväčšie dielo Božská komédia, ktoré sumarizuje stredoveké videnie sveta, ale ohlasuje aj renesančného človeka. Zomrel v Ravenne roku 1321 a považuje sa za tvorcu literárnej italiančiny.',
    dalsieDiela: ['Nový život (Vita nuova)', 'Hostina (Convivio)', 'O ľudovej reči', 'O monarchii'],
  },
  {
    id: 'petrarca',
    meno: 'Francesco Petrarca',
    roky: '1304 – 1374',
    smer: 'renesancia — humanizmus',
    zivotopis:
      'Francesco Petrarca sa narodil v Arezze v rodine florentského notára, ktorá musela odísť do vyhnanstva, a vyrastal v Avignone. Študoval právo, no venoval sa antickej literatúre, zbieral a opisoval staré rukopisy a považuje sa za prvého humanistu. Roku 1327 uvidel v avignonskom kostole ženu, ktorú vo svojich veršoch nazval Laura; jej neopätovaná láska sa stala témou celoživotnej lyrickej tvorby. Roku 1341 ho v Ríme na Kapitole ovenčili laurovým vencom ako prvého básnika po antike. Jeho zbierka sonetov sa stala vzorom európskej ľúbostnej lyriky a takzvaný petrarkizmus ovplyvnil básnikov na stáročia dopredu.',
    dalsieDiela: ['Afrika', 'Listy dôverné', 'Môj tajný boj (Secretum)', 'O samote'],
  },
  {
    id: 'cervantes',
    meno: 'Miguel de Cervantes y Saavedra',
    roky: '1547 – 1616',
    smer: 'renesancia — španielsky zlatý vek',
    zivotopis:
      'Miguel de Cervantes sa narodil v Alcalá de Henares v rodine chudobného ranhojiča a jeho život bol plný dobrodružstiev a nešťastí. V námornej bitke pri Lepante roku 1571 prišiel o vládu nad ľavou rukou a na spiatočnej ceste ho zajali piráti, takže päť rokov strávil v alžírskom zajatí. Po vykúpení sa ako výberca daní dostal aj do dlhov a do väzenia, čo ho podľa tradície priviedlo k písaniu. Prvú časť románu o donovi Quijotovi vydal roku 1605 ako parodické zúčtovanie s rytierskymi románmi, druhú časť roku 1615. Don Quijote sa považuje za prvý moderný európsky román a jeho hlavný hrdina za jeden z večných literárnych typov.',
    dalsieDiela: ['Príkladné novely', 'Galatea', 'Persiles a Sigismunda', 'Numancia (dráma)'],
  },
  {
    id: 'shakespeare',
    meno: 'William Shakespeare',
    roky: '1564 – 1616',
    smer: 'renesancia — anglická (elizabetínska) dráma',
    zivotopis:
      'William Shakespeare sa narodil v Stratforde nad Avonou v rodine rukavičkára a mešťana, absolvoval mestskú latinskú školu, ale univerzitu nikdy neštudoval. Ako mladý muž odišiel do Londýna, kde pôsobil ako herec, dramatik a spolumajiteľ divadelnej spoločnosti hrajúcej v divadle Globe. Napísal približne 37 drám — komédie, historické hry a tragédie — a 154 sonetov. Vrchol jeho tvorby predstavujú veľké tragédie zo začiatku 17. storočia, v ktorých zobrazuje renesančného človeka rozorvaného medzi ideálom a skutočnosťou. Posledné roky prežil opäť v Stratforde, kde roku 1616 zomrel; dodnes sa považuje za najvýznamnejšieho dramatika svetovej literatúry.',
    dalsieDiela: ['Rómeo a Júlia', 'Kráľ Lear', 'Macbeth', 'Othello', 'Sen noci svätojánskej'],
  },
  {
    id: 'gavlovic',
    meno: 'Hugolín Gavlovič',
    roky: '1712 – 1787',
    smer: 'barok — didakticko-reflexívna poézia',
    zivotopis:
      'Hugolín Gavlovič sa narodil v Czarnym Dunajci v poľskom Podhalí a ako mladík vstúpil do rehole františkánov. Väčšinu života prežil na západnom Slovensku, najmä v Pruskom a v Horovciach, kde pôsobil ako kňaz a vychovávateľ. Pre chorobu pľúc sa musel dlhší čas zdržiavať na salašoch v horách, kde sa zblížil s pastiermi a ich životnou skúsenosťou. Práve tento pobyt mu dal látku a názov pre jeho hlavné dielo — rozsiahlu didaktickú skladbu Valaská škola mravúv stodola, ktorú dokončil roku 1755. Písal kultúrnou slovakizovanou češtinou a jeho dielo je najvýznamnejšou pamiatkou slovenského literárneho baroka.',
    dalsieDiela: ['Škola kresťanská', 'Kniha o štyroch posledných veciach človeka', 'Píseň o svätej Kataríne'],
  },
  {
    id: 'moliere',
    meno: 'Molière (Jean-Baptiste Poquelin)',
    roky: '1622 – 1673',
    smer: 'klasicizmus — vysoká komédia',
    zivotopis:
      'Molière sa narodil v Paríži ako Jean-Baptiste Poquelin v zámožnej rodine kráľovského tapicióra a mal prevziať otcovo postavenie. Namiesto toho sa vzdal výsad, prijal umelecké meno Molière a založil divadelnú spoločnosť, s ktorou trinásť rokov putoval po francúzskom vidieku. Po návrate do Paríža získal priazeň Ľudovíta XIV. a stal sa najúspešnejším komediografom svojej doby, hoci jeho satirické hry vyvolávali odpor cirkvi i šľachty. Vytvoril typ tzv. vysokej komédie, ktorá zábavnou formou kritizuje charakterové chyby a spoločenské neresti. Zomrel roku 1673 krátko po tom, ako ochorel priamo na javisku počas predstavenia hry Zdravý nemocný.',
    dalsieDiela: ['Tartuffe', 'Mizantrop', 'Zdravý nemocný', 'Meštiak v šľachtickom stave', 'Don Juan'],
  },
  {
    id: 'kollar',
    meno: 'Ján Kollár',
    roky: '1793 – 1852',
    smer: 'klasicizmus s prvkami preromantizmu',
    zivotopis:
      'Ján Kollár sa narodil v Mošovciach v rodine richtára, ktorý ho chcel mať remeselníkom, no on sa presadil na štúdiách v Kremnici, Banskej Bystrici a v Bratislave. Rozhodujúci bol pobyt na univerzite v Jene (1817 – 1819), kde sa nadchol myšlienkami slovanskej vzájomnosti a kde sa zaľúbil do Frideriky Wilhelmíny Schmidtovej, svojej Míny. Väčšinu života pôsobil ako evanjelický kazateľ slovenskej cirkevnej obce v Pešti, kde zbieral slovenské ľudové piesne. Napísal programové dielo o slovanskej vzájomnosti a lyricko-epickú skladbu Slávy dcera, ktorá sa stala manifestom slovanského povedomia. Písal však po česky (biblickou češtinou) a proti Štúrovej slovenčine sa ostro postavil; posledné roky prežil ako profesor slovanskej archeológie vo Viedni.',
    dalsieDiela: [
      'Slávy dcera',
      'Národnie spievanky',
      'O literárnej vzájomnosti medzi kmeňmi a nárečiami slovanskými',
      'Cestopis',
    ],
  },
  {
    id: 'holly',
    meno: 'Ján Hollý',
    roky: '1785 – 1849',
    smer: 'klasicizmus',
    zivotopis:
      'Ján Hollý sa narodil v Borskom Mikuláši v rodine obecného notára a vyštudoval teológiu v Bratislave, kde sa zoznámil s antickou literatúrou. Ako katolícky farár pôsobil dlhé roky v Maduniciach, neskôr po požiari, v ktorom stratil zrak a rukopisy, dožil na Dobrej Vode. Písal v bernolákovskej slovenčine a svojou tvorbou dokázal, že slovenčina je schopná zvládnuť najnáročnejšie antické formy. Preložil do slovenčiny Vergília, Homéra, Ovidia i Horáca a na antickom vzore vytvoril tri národné eposy o slovanskej minulosti. Štúrovci si ho nesmierne cenili a navštevovali ho ako živý dôkaz životaschopnosti slovenskej literatúry.',
    dalsieDiela: ['Cirillo-Metodiada', 'Sláv', 'Selanky', 'Žalospevy', 'preklady Vergíliovej Eneidy'],
  },
]

export const diela1: Dielo[] = [
  // === DOPLNIT_DIELA ===
]
