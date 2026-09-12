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
  {
    id: 'epos-o-gilgamesovi',
    nazov: 'Epos o Gilgamešovi',
    autorText: 'neznámy autor (sumersko-akkadská literatúra)',
    rocnik: 1,
    druh: 'poezia',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'hrdinský (mytologický) epos',
    forma: 'poézia — veršovaný epos zapísaný klinovým písmom na dvanástich hlinených tabuľkách',
    rokVydania: 'najstaršie sumerské piesne 3. tisícročie pred Kr.; ucelená akkadská verzia okolo 12. stor. pred Kr.',
    obdobie: 'staroveká orientálna literatúra — Mezopotámia',
    miestoACas: 'Mezopotámia — mesto Uruk, cédrový les, pohorie Mášu, vody smrti a podsvetie; 3. tisícročie pred Kr.',
    anotacia:
      'Najstaršie zachované literárne dielo ľudstva o kráľovi Uruku, ktorý získa jediného priateľa a po jeho smrti sa vydá hľadať nesmrteľnosť. Epos ako prvý v histórii literatúry kladie otázku, čo si má človek počať s vedomím, že musí zomrieť.',
    obsah: [
      'Uruku vládne Gilgameš, z dvoch tretín boh a z jednej tretiny človek, najkrajší a najsilnejší muž svojej doby. Svoju silu však používa na útlak: núti mužov stavať hradby, berie si mladé nevesty a nikto sa mu neodváži vzdorovať. Obyvatelia Uruku sa preto obrátia na bohov so žiadosťou o pomoc. Bohovia stvoria z hliny divého muža Enkidua, ktorý má byť Gilgamešovi rovnocenným protivníkom, aby sa jeho pýcha zlomila.',
      'Enkidu žije v stepi so zvieratami, pije s nimi z napájadla a vytrháva pasti lovcov. Lovec ho vyláka pomocou zasvätenej ženy Šamhat, ktorá ho naučí ľudským spôsobom, takže ho zvieratá prestanú prijímať medzi seba. Enkidu prichádza do Uruku a s Gilgamešom sa strhne obrovský zápas, v ktorom sa ukáže, že sú si silou rovní. Namiesto nenávisti medzi nimi vznikne najhlbšie priateľstvo a spoločne sa vydávajú na hrdinské výpravy.',
      'Prvou skúškou je cesta do cédrového lesa, kde zabijú obludného strážcu Humbabu, hoci ten prosí o milosť. Po návrate odmietne Gilgameš ponuku bohyne Ištar, aby sa stal jej manželom, a pripomenie jej, ako zle skončili jej predchádzajúci milenci. Urazená bohyňa pošle na Uruk nebeského býka, no obaja priatelia ho zabijú a Enkidu ešte bohyňu poníži. Bohovia sa rozhodnú, že za rúhanie musí niekto zaplatiť: Enkidu ochorie, dvanásť dní sa trápi, vo snoch vidí podsvetie a potom umiera.',
      'Gilgameš prvý raz v živote pozná strach zo smrti. Sedem dní oplakáva mŕtveho priateľa, odmieta ho pochovať a potom sa vydá na dlhú cestu za Utanapištimom, jediným človekom, ktorému bohovia darovali nesmrteľnosť, lebo prežil potopu. Prejde pohorím Mášu, ktoré strážia škorpiónovití ľudia, dostane sa do záhrady bohov a s prevozníkom Uršanabim preplaví vody smrti. Utanapištim mu vyrozpráva príbeh o potope a dokáže mu, že nesmrteľnosť sa nedá získať: Gilgameš neprejde ani skúškou, v ktorej mal šesť dní a sedem nocí zostať bdelý.',
      'Ako útechu mu Utanapištim prezradí, že na dne mora rastie bylina, ktorá vracia mladosť. Gilgameš sa za ňou potopí a rastlinu naozaj získa, no keď sa na spiatočnej ceste kúpe v jazere, ukradne mu ju had. Vracia sa do Uruku s prázdnymi rukami, zastaví sa pred hradbami mesta a ukáže ich prevozníkovi ako svoje dielo. Práve v nich pochopí jedinú dosiahnuteľnú nesmrteľnosť — človek prežíva v tom, čo po sebe zanechá. Záverečná dvanásta tabuľka pripája rozhovor, v ktorom Enkiduov duch opisuje pomery v podsvetí.',
    ],
    kompozicia:
      'Dvanásť hlinených tabuliek, ktoré sa členia na štyri dejové okruhy: Gilgamešova tyrania a vznik priateľstva s Enkiduom, hrdinské výpravy (Humbaba, nebeský býk), Enkiduova smrť a cesta za nesmrteľnosťou, a napokon dvanásta tabuľka o podsvetí, ktorá je pripojená dodatočne. Epos je rámcovaný hradbami Uruku — na začiatku znakom útlaku, na konci znakom trvalého ľudského diela.',
    postavy: [
      {
        meno: 'Gilgameš',
        charakteristika:
          'Kráľ Uruku, z dvoch tretín boh a z jednej tretiny človek, spočiatku pyšný tyran zneužívajúci svoju silu. Priateľstvo s Enkiduom ho zľudští a jeho smrť ho prinúti prvý raz sa postaviť otázke vlastnej smrteľnosti. Na konci prijíma svoj ľudský osud a nachádza zmysel v diele, ktoré po ňom zostane.',
        rola: 'hlavna',
      },
      {
        meno: 'Enkidu',
        charakteristika:
          'Divý muž stvorený bohmi z hliny, aby vyrovnal Gilgamešovu silu; najprv žije so zvieratami v stepi. Po zápase s Gilgamešom sa stáva jeho najvernejším priateľom a spolubojovníkom. Jeho smrť je zlomovým bodom celého eposu, pretože ňou vstupuje do diela téma smrti.',
        rola: 'hlavna',
      },
      {
        meno: 'Utanapištim',
        charakteristika:
          'Jediný človek, ktorému bohovia darovali nesmrteľnosť, pretože prežil potopu. Gilgamešovi vyrozpráva príbeh o potope a podrobí ho skúške bdenia. Predstavuje hlas múdrosti, ktorý hrdinovi vysvetľuje, že smrť je súčasťou ľudského údelu.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Ištar',
        charakteristika:
          'Bohyňa lásky a vojny, ktorá si chce Gilgameša vziať za muža. Keď ju odmietne a pripomenie jej osudy jej milencov, z pomsty pošle na Uruk nebeského býka. Jej urážka spúšťa rozhodnutie bohov potrestať Enkidua smrťou.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Humbaba',
        charakteristika:
          'Obludný strážca cédrového lesa, ktorého poslali bohovia chrániť posvätné stromy. Hoci prosí o milosť, hrdinovia ho zabijú. Je prvým dôkazom toho, že Gilgamešove činy nie sú len hrdinské, ale aj opovážlivé voči bohom.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Šamhat',
        charakteristika:
          'Zasvätená žena z chrámu, ktorá má Enkidua vylákať zo stepi. Naučí ho jesť, piť a obliekať sa po ľudsky, čím ho oddelí od zvierat. Predstavuje civilizáciu, ktorá si podmaňuje prírodu.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'priateľstvo ako sila, ktorá mení človeka',
      'smrteľnosť človeka a márne hľadanie nesmrteľnosti',
      'vzťah človeka a bohov, hranice ľudskej opovážlivosti',
      'pýcha vládcu a jej premena na zodpovednosť',
      'prechod od prírody k civilizácii',
    ],
    motivy: [
      'potopa a záchrana jedného spravodlivého',
      'cédrový les a zabitie strážcu Humbabu',
      'nebeský býk poslaný Ištar',
      'bylina mladosti a had, ktorý ju ukradne',
      'hradby Uruku ako dielo, ktoré prežije svojho tvorcu',
      'sen ako predzvesť budúcich udalostí',
    ],
    jazyk: [
      'epická šírka a spomaľovanie deja (retardácia) — podrobné opisy príprav, ciest a zápasov dávajú príbehu monumentálny ráz',
      'ustálené (stále) epitetá, napríklad „mocný Gilgameš“ či „divý Enkidu“ — pomáhali prednášajúcemu pri ústnom podaní a dodávajú štýlu slávnostnosť',
      'opakovania a refrény celých formúl pri každej ceste alebo výzve — pozostatok pôvodného ústneho prednesu textu',
      'hyperbola pri opise hrdinov a protivníkov (Humbabov hlas ako búrka, hradby siahajúce k nebu) zdôrazňuje mýtický rozmer sveta',
      'paralelizmus verša — myšlienka sa v druhom verši povie inými slovami, čo je typický znak starovekej orientálnej poézie',
      'personifikácia a priame zásahy bohov do deja, takže osud hrdinu je vždy zápasom dvoch svetov',
      'sen a jeho výklad ako kompozičný prostriedok, ktorý čitateľa pripravuje na to, čo príde',
    ],
    maturitneMinimum: [
      'Ide o najstaršie známe literárne dielo ľudstva, zapísané klinovým písmom na dvanástich hlinených tabuľkách; ucelenú verziu našli v knižnici kráľa Aššurbanipala v Ninive.',
      'Príbeh o potope na jedenástej tabuľke je starší než biblický príbeh o Noemovi a je jeho zjavnou predlohou.',
      'Hlavnou myšlienkou je, že nesmrteľnosť pre človeka nie je dosiahnuteľná — trvalé je len dielo, ktoré po sebe zanechá.',
      'Dvojica Gilgameš a Enkidu je prvým veľkým literárnym priateľstvom a vzorom pre ďalšie dvojice hrdinov (napríklad Achilles a Patroklos).',
      'Zaraďuje sa do starovekej orientálnej literatúry spolu so sumerskou, akkadskou, egyptskou, hebrejskou a indickou tvorbou.',
    ],
    ulohy: [
      {
        id: 'epos-o-gilgamesovi-k1',
        typ: 'kviz',
        otazka: 'Prečo bohovia stvorili Enkidua?',
        moznosti: [
          'aby vyrovnal Gilgamešovu silu a zlomil jeho pýchu',
          'aby sa stal novým kráľom Uruku namiesto Gilgameša',
          'aby postavil hradby okolo mesta Uruk',
          'aby priniesol ľuďom bylinu mladosti',
        ],
        spravna: 0,
        vysvetlenie:
          'Obyvatelia Uruku sa na bohov obrátili pre Gilgamešovo násilie. Enkidu bol stvorený ako rovnocenný protivník, no z pôvodného súperenia vznikne priateľstvo, ktoré kráľa napokon zľudští.',
      },
      {
        id: 'epos-o-gilgamesovi-k2',
        typ: 'kviz',
        otazka: 'Ako skončí Gilgamešovo hľadanie nesmrteľnosti?',
        moznosti: [
          'bylinu mladosti mu ukradne had a on sa vracia do Uruku ako smrteľník',
          'Utanapištim mu daruje večný život za odvahu',
          'bohovia ho vezmú medzi seba na nebo',
          'nájde nesmrteľnosť v podsvetí pri Enkiduovi',
        ],
        spravna: 0,
        vysvetlenie:
          'Gilgameš prehrá skúšku bdenia a bylinu mladosti, ktorú vyloví z morského dna, mu pri kúpaní ukradne had. Nesmrteľnosť teda nezíska — pochopí, že mu zostáva len dielo, ktoré po ňom prežije.',
      },
      {
        id: 'epos-o-gilgamesovi-k3',
        typ: 'kviz',
        otazka: 'Ktorý biblický príbeh má predlohu v jedenástej tabuľke eposu?',
        moznosti: [
          'príbeh o Noemovi a potope',
          'príbeh o Kainovi a Ábelovi',
          'príbeh o Jozefovi v Egypte',
          'príbeh o Babylonskej veži',
        ],
        spravna: 0,
        vysvetlenie:
          'Utanapištim rozpráva, ako si na pokyn boha postavil koráb a prežil potopu, ktorá zničila ľudstvo. Tento starší mezopotámsky príbeh sa považuje za predlohu biblického rozprávania o Noemovi.',
      },
      {
        id: 'epos-o-gilgamesovi-k4',
        typ: 'kviz',
        otazka: 'Čo je hlavným dôvodom, prečo bohovia potrestajú Enkidua smrťou?',
        moznosti: [
          'zabil nebeského býka a zneuctil bohyňu Ištar',
          'zradil Gilgameša pred obyvateľmi Uruku',
          'odmietol postaviť chrám bohom',
          'ukradol bylinu mladosti z morského dna',
        ],
        spravna: 0,
        vysvetlenie:
          'Po zabití Humbabu a nebeského býka prekročia hrdinovia mieru, ktorá človeku patrí, a Enkidu navyše bohyňu Ištar poníži. Bohovia preto rozhodnú, že za rúhanie zaplatí životom.',
      },
      {
        id: 'epos-o-gilgamesovi-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postavám a motívom ich význam v epose.',
        pary: [
          { vlavo: 'Gilgameš', vpravo: 'kráľ Uruku, z dvoch tretín boh, ktorý hľadá nesmrteľnosť' },
          { vlavo: 'Enkidu', vpravo: 'divý muž stvorený z hliny, priateľ, ktorého smrť zmení hrdinu' },
          { vlavo: 'Utanapištim', vpravo: 'nesmrteľný muž, ktorý prežil potopu a rozpráva o nej' },
          { vlavo: 'Ištar', vpravo: 'odmietnutá bohyňa, ktorá pošle na mesto nebeského býka' },
          { vlavo: 'hradby Uruku', vpravo: 'dielo, v ktorom hrdina nachádza jedinú dosiahnuteľnú nesmrteľnosť' },
        ],
        vysvetlenie:
          'Epos je postavený na dvojiciach: hrdina a jeho priateľ, boh a človek, pominuteľný život a trvalé dielo. Práve hradby uzatvárajú kompozíciu diela.',
      },
      {
        id: 'epos-o-gilgamesovi-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň základné údaje o diele.',
        text: [
          'Epos bol zapísaný klinovým písmom na ',
          { medzera: 'dvanástich', napoveda: 'počet hlinených tabuliek' },
          ' tabuľkách a dej sa začína v meste ',
          { medzera: 'Uruk', napoveda: 'mezopotámske mesto s hradbami' },
          '. Bylinu mladosti napokon hrdinovi ukradne ',
          { medzera: 'had', napoveda: 'zviera pri jazere' },
          '.',
        ],
        vysvetlenie:
          'Dvanásť tabuliek, mesto Uruk a had, ktorý ukradne bylinu mladosti, patria k údajom, ktoré sa na maturite vyžadujú najčastejšie.',
      },
      {
        id: 'epos-o-gilgamesovi-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o význame diela.',
        text: [
          'Epos o Gilgamešovi je ',
          { medzera: 'najstarším', napoveda: 'stupňovanie prídavného mena starý' },
          ' známym literárnym dielom ľudstva a patrí do starovekej ',
          { medzera: 'orientálnej', napoveda: 'literatúra Blízkeho a Ďalekého východu' },
          ' literatúry.',
        ],
        vysvetlenie:
          'Dielo vzniklo v Mezopotámii a zaraďuje sa do starovekej orientálnej literatúry, teda do obdobia pred antickým Gréckom.',
      },
    ],
  },
  {
    id: 'biblia',
    nazov: 'Biblia',
    autorText: 'kolektív autorov',
    rocnik: 1,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'kánonická zbierka náboženských, historických, právnych, básnických a prorockých textov',
    forma: 'próza aj poézia — Starý zákon (46 kníh) a Nový zákon (27 kníh) v katolíckom kánone',
    rokVydania: 'približne 12. stor. pred Kr. – 2. stor. po Kr.',
    obdobie: 'staroveká hebrejská a ranokresťanská literatúra',
    miestoACas: 'Blízky východ — Palestína, Egypt, Mezopotámia, Malá Ázia a Rím; od stvorenia sveta po prvé kresťanské obce v 1. stor. po Kr.',
    anotacia:
      'Základná kniha judaizmu a kresťanstva, ktorá spája dejiny izraelského národa, náboženské zákony, básnické knihy a svedectvá o Ježišovi Kristovi. Pre európsku literatúru je najvplyvnejším zdrojom tém, motívov a obrazov.',
    obsah: [
      'Starý zákon sa začína knihou Genezis, teda príbehom o stvorení sveta v šiestich dňoch a o stvorení človeka na Boží obraz. Adam a Eva zjedia zakázané ovocie zo stromu poznania, čím prichádza prvý hriech, a Boh ich vyženie z raja. Ich syn Kain zo závisti zabije brata Ábela a ľudstvo sa postupne kazí, až Boh zošle potopu; zachráni sa len spravodlivý Noe so svojou rodinou a so zvieratami v korábe. Nasleduje príbeh pýchy pri stavbe Babylonskej veže a zmätenie jazykov.',
      'Ďalšie knihy rozprávajú o praotcoch: o Abrahámovi, ktorý je pripravený obetovať syna Izáka, o Jakubovi a o Jozefovi, ktorého bratia zo závisti predajú do Egypta a ktorý sa tam vypracuje na faraónovho správcu. Keď sa Izraeliti v Egypte stanú otrokmi, vyvedie ich Mojžiš cez rozdelené Červené more. Na hore Sinaj prijíma desať Božích prikázaní a národ potom štyridsať rokov putuje po púšti do zasľúbenej zeme. Po smrti Mojžiša vedú národ sudcovia a neskôr králi Saul, Dávid a Salomón.',
      'Po Salomónovej smrti sa kráľovstvo rozdelí, proroci Izaiáš, Jeremiáš a Ezechiel varujú národ pred odpadnutím od Boha a nasleduje babylonské zajatie. Osobitnú časť tvoria básnické a mudroslovné knihy: Kniha Jóbova o spravodlivom mužovi, ktorý napriek nesmiernemu utrpeniu neprestane veriť, Žalmy ako zbierka modlitbových piesní, Kniha prísloví a milostná Pieseň piesní. Tieto knihy prinášajú do Biblie poéziu a osobnú výpoveď jednotlivca.',
      'Nový zákon tvoria štyri evanjeliá (Matúšovo, Markovo, Lukášovo a Jánovo), ktoré rozprávajú o živote Ježiša Krista. Narodí sa v Betleheme, dá sa pokrstiť Jánom Krstiteľom, štyridsať dní sa postí na púšti a potom začne verejne učiť. Získava dvanástich apoštolov, hovorí v podobenstvách o milosrdnom Samaritánovi, o rozsievačovi či o márnotratnom synovi, na hore vyhlási blahoslavenstvá a koná zázraky. Jeho učenie o láske k blížnemu naráža na odpor náboženských predstaviteľov.',
      'Pri Poslednej večeri ustanoví Ježiš eucharistiu a predpovie, že ho jeden z učeníkov zradí. Judáš ho za tridsať strieborných vydá, Peter ho trikrát zapre a Pilát ho po výsluchu odsúdi na smrť. Ježiš je ukrižovaný na Golgote medzi dvoma lotrami a na tretí deň vstáva z mŕtvych; podľa evanjelií sa zjaví učeníkom a vystúpi na nebesia. Ďalšie knihy — Skutky apoštolov, listy apoštola Pavla a Zjavenie apoštola Jána s víziou posledného súdu — opisujú šírenie kresťanstva a konečné vyriešenie dejín sveta.',
    ],
    kompozicia:
      'Dve hlavné časti: Starý zákon (pôvodne hebrejsky a aramejsky, 46 kníh v katolíckom kánone — knihy Mojžišove čiže Pentateuch, historické, prorocké a básnické knihy) a Nový zákon (grécky, 27 kníh — štyri evanjeliá, Skutky apoštolov, apoštolské listy a Zjavenie apoštola Jána). Text sa člení na knihy, kapitoly a verše, čo umožňuje presné citovanie, napríklad Gn 1,1.',
    postavy: [
      {
        meno: 'Adam a Eva',
        charakteristika:
          'Prví ľudia stvorení Bohom, ktorí zjedia zakázané ovocie zo stromu poznania. Ich neposlušnosť je v kresťanskej tradícii prvotným hriechom a dôvodom vyhnania z raja. Predstavujú človeka, ktorý chce byť ako Boh.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Mojžiš',
        charakteristika:
          'Vodca, ktorý vyvedie Izraelitov z egyptského zajatia a prevedie ich cez Červené more. Na hore Sinaj prijíma od Boha desať prikázaní, teda základ mravného zákona. Zasľúbenú zem už sám nedosiahne, zomiera na jej hranici.',
        rola: 'hlavna',
      },
      {
        meno: 'Dávid',
        charakteristika:
          'Pastier, ktorý prakom porazí obra Goliáša, a neskôr najznámejší izraelský kráľ. Tradícia mu pripisuje autorstvo mnohých žalmov. Je zobrazený aj so svojimi hriechmi, čím Biblia ukazuje, že ani hrdina nie je bez viny.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Jób',
        charakteristika:
          'Spravodlivý muž, ktorý stratí majetok, deti aj zdravie, no napriek tomu Boha nezapre. Jeho kniha kladie otázku, prečo trpí nevinný. Stal sa symbolom trpezlivosti v utrpení.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Ježiš Kristus',
        charakteristika:
          'Centrálna postava Nového zákona, ktorý učí o láske k Bohu a k blížnemu a hovorí v podobenstvách. Je zradený, odsúdený a ukrižovaný, podľa evanjelií však na tretí deň vstáva z mŕtvych. Jeho život a učenie sú základom kresťanstva.',
        rola: 'hlavna',
      },
      {
        meno: 'Judáš Iškariotský',
        charakteristika:
          'Jeden z dvanástich apoštolov, ktorý Ježiša vydá za tridsať strieborných a označí ho bozkom. Jeho meno sa stalo synonymom zrady. Po čine sa zo zúfalstva pripraví o život.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'stvorenie sveta a človeka, vzťah človeka k Bohu',
      'hriech, vina, pokánie a odpustenie',
      'dejiny vyvoleného národa a jeho vernosť či nevernosť',
      'utrpenie nevinného a otázka spravodlivosti (Jób)',
      'láska k blížnemu ako najvyššie prikázanie',
    ],
    motivy: [
      'raj, strom poznania a zakázané ovocie',
      'potopa a Noemov koráb',
      'desať Božích prikázaní na hore Sinaj',
      'zrada za tridsať strieborných a Judášov bozk',
      'ukrižovanie a zmŕtvychvstanie',
      'posledný súd v Zjavení apoštola Jána',
    ],
    jazyk: [
      'podobenstvo (parabola) — krátky príbeh z bežného života, ktorý má prenesený mravný a náboženský význam, napríklad o márnotratnom synovi',
      'paralelizmus verša v žalmoch — tá istá myšlienka sa v druhom verši povie inými slovami, čím vzniká slávnostný rytmus modlitby',
      'symbol a alegória — chlieb, voda, svetlo, baránok či vinica zastupujú duchovné skutočnosti',
      'anafora a opakovanie na začiatku viet („Blahoslavení...“) — zosilňuje naliehavosť a uľahčuje zapamätanie textu',
      'apostrofa a rečnícka otázka v modlitbách a prorockých rečiach, ktoré sa obracajú priamo na Boha alebo na národ',
      'biblizmy a ustálené spojenia (Judášov bozk, hlas volajúceho na púšti, soľ zeme), ktoré prešli do každodenného jazyka',
      'vysoký, slávnostný štýl s archaizmami, ktorý odlišuje sväté texty od bežnej reči',
    ],
    citaty: [
      {
        text: 'Na počiatku stvoril Boh nebo a zem.',
        zdroj: 'prvý verš knihy Genezis (Gn 1,1)',
      },
      {
        text: 'Milovať budeš svojho blížneho ako seba samého.',
        zdroj: 'Ježišovo najväčšie prikázanie v evanjeliách',
      },
    ],
    maturitneMinimum: [
      'Starý zákon bol napísaný najmä hebrejsky (a časti aramejsky), Nový zákon po grécky; latinský preklad svätého Hieronyma sa nazýva Vulgáta.',
      'Katolícky kánon má 73 kníh: 46 starozákonných a 27 novozákonných; text sa člení na knihy, kapitoly a verše.',
      'Prvých päť kníh Starého zákona sa nazýva Pentateuch alebo knihy Mojžišove (Genezis, Exodus, Levitikus, Numeri, Deuteronómium).',
      'Biblia je najprekladanejšia a najvydávanejšia kniha na svete a pre európsku literatúru je najvýznamnejším zdrojom motívov, symbolov a frazeologizmov.',
      'Pri Biblii sa neuvádza jeden autor — ide o kolektívne dielo desiatok autorov, ktoré vznikalo viac ako tisíc rokov.',
    ],
    ulohy: [
      {
        id: 'biblia-k1',
        typ: 'kviz',
        otazka: 'Ako sa nazýva prvých päť kníh Starého zákona?',
        moznosti: [
          'Pentateuch (knihy Mojžišove)',
          'Evanjeliá',
          'Žalmy',
          'Skutky apoštolov',
        ],
        spravna: 0,
        vysvetlenie:
          'Genezis, Exodus, Levitikus, Numeri a Deuteronómium tvoria Pentateuch, teda knihy Mojžišove. Obsahujú príbeh stvorenia, praotcov a vyvedenia národa z Egypta spolu so základom zákona.',
      },
      {
        id: 'biblia-k2',
        typ: 'kviz',
        otazka: 'V akom jazyku bol pôvodne napísaný Nový zákon?',
        moznosti: [
          'po grécky',
          'po hebrejsky',
          'po latinsky',
          'po starosloviensky',
        ],
        spravna: 0,
        vysvetlenie:
          'Nový zákon vznikol v gréčtine, ktorá bola vtedy dorozumievacím jazykom východného Stredomoria. Starý zákon je hebrejský a aramejský, latinský preklad celej Biblie sa nazýva Vulgáta.',
      },
      {
        id: 'biblia-k3',
        typ: 'kviz',
        otazka: 'Čo je podobenstvo (parabola)?',
        moznosti: [
          'krátky príbeh z bežného života s preneseným mravným významom',
          'oslavná pieseň na Boha zložená vo verši',
          'prorocká predpoveď budúcich udalostí',
          'zoznam náboženských zákonov a predpisov',
        ],
        spravna: 0,
        vysvetlenie:
          'Podobenstvo používa obraz zo známeho prostredia (rozsievač, vinica, stratená ovca), aby vysvetlilo duchovnú pravdu. Ježiš ho v evanjeliách používa ako svoju hlavnú učiteľskú formu.',
      },
      {
        id: 'biblia-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k biblickej postave to, čím je známa.',
        pary: [
          { vlavo: 'Noe', vpravo: 'postavil koráb a prežil potopu' },
          { vlavo: 'Mojžiš', vpravo: 'vyvedie národ z Egypta a prijme desať prikázaní' },
          { vlavo: 'Dávid', vpravo: 'prakom porazí Goliáša a stane sa kráľom' },
          { vlavo: 'Jób', vpravo: 'spravodlivý muž, ktorý v utrpení nezapre Boha' },
          { vlavo: 'Judáš', vpravo: 'zradí Ježiša za tridsať strieborných' },
        ],
        vysvetlenie:
          'Tieto postavy patria k základnému biblickému minimu, pretože ich príbehy sa v európskej literatúre a v umení opakujú ako ustálené symboly.',
      },
      {
        id: 'biblia-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň údaje o členení a prekladoch Biblie.',
        text: [
          'Biblia sa delí na ',
          { medzera: 'Starý', napoveda: 'prvá, hebrejská časť' },
          ' a Nový zákon. Latinský preklad svätého Hieronyma sa nazýva ',
          { medzera: 'Vulgáta', napoveda: 'z latinského slova pre všeobecne rozšírený' },
          ' a Ježišove príbehy s mravným poučením sa nazývajú ',
          { medzera: 'podobenstvá', napoveda: 'iným slovom paraboly' },
          '.',
        ],
        vysvetlenie:
          'Delenie na Starý a Nový zákon, názov Vulgáta a pojem podobenstvo patria k najčastejším otázkam o Biblii na maturite.',
      },
      {
        id: 'biblia-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o novozákonných knihách.',
        text: [
          'O živote Ježiša Krista rozprávajú štyri ',
          { medzera: 'evanjeliá', napoveda: 'Matúšovo, Markovo, Lukášovo a Jánovo' },
          ' a poslednou knihou Nového zákona je ',
          { medzera: 'Zjavenie', napoveda: 'apokalyptická kniha apoštola Jána' },
          ' apoštola Jána.',
        ],
        vysvetlenie:
          'Nový zákon otvárajú štyri evanjeliá a uzatvára ho Zjavenie apoštola Jána s víziou posledného súdu, ktorá inšpirovala celé dejiny európskeho umenia.',
      },
    ],
  },
  {
    id: 'ezopove-bajky',
    nazov: 'Ezopove bájky',
    autorId: 'ezop',
    rocnik: 1,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'bájka (zbierka bájok)',
    forma: 'próza — krátke prozaické bájky s mravným poučením; pôvodne ústne podanie, neskôr zapísané a prebásnené',
    rokVydania: '6. stor. pred Kr. (zapísané a zbierané až neskôr, v stredoveku šírené v latinských spracovaniach)',
    obdobie: 'antická grécka literatúra',
    miestoACas: 'neurčené, bezčasové prostredie prírody a hospodárstva — les, pole, dvor, vinica; antické Grécko',
    anotacia:
      'Zbierka krátkych príbehov, v ktorých zvieratá hovoria a konajú ako ľudia, aby odhalili ľudské chyby. Každá bájka sa uzatvára mravným poučením, ktoré z príbehu vyplýva.',
    obsah: [
      'Bájky netvoria jeden dej, ale súbor samostatných krátkych príbehov s rovnakou stavbou: krátka expozícia, jedno stretnutie alebo konflikt dvoch postáv, rýchle rozuzlenie a mravné poučenie. Postavami sú najčastejšie zvieratá s pevne danými vlastnosťami — líška je prefíkaná, vlk násilný, lev mocný, baránok bezbranný, osol hlúpy. Vďaka tejto ustálenosti čitateľ okamžite vie, akú ľudskú vlastnosť má postava zastupovať. Alegória tak umožňuje kritizovať ľudské a spoločenské chyby bez toho, aby autor niekoho menoval.',
      'V bájke Vlk a baránok pije baránok vodu z potoka nižšie než vlk. Vlk ho obviní, že mu kalí vodu, a keď baránok dokáže, že to nie je možné, vymýšľa si ďalšie a ďalšie výčitky. Nakoniec baránka aj tak roztrhá. Poučenie znie, že kto má silu, nájde si aj dôvod — proti mocnému je aj pravda bezbranná.',
      'V bájke Líška a hrozno sa líška naťahuje za hroznom, ktoré visí privysoko. Keď zistí, že ho nedosiahne, odíde s poznámkou, že hrozno je aj tak kyslé. Príbeh vysvetľuje bežnú ľudskú výhovorku, ktorou si znevažujeme to, čo nedokážeme získať. Z bájky pochádza ustálené spojenie o kyslom hrozne.',
      'Ďalšie známe bájky pracujú s tým istým postupom. V bájke Havran a líška si havran nechá zalichotiť, otvorí zobák, aby zaspieval, a stratí ukradnutý syr. V bájke Zajac a korytnačka prehrá sebavedomý zajac pretek s pomalou, ale vytrvalou korytnačkou. V bájke Mravec a kobylka si pracovitý mravec nazbiera zásoby na zimu, kým bezstarostná kobylka celé leto iba spievala a potom hladuje.',
      'Niektoré bájky ukazujú aj pozitívny vzor. V bájke Lev a myš pustí lev malú myš na slobodu a neskôr ho práve ona vyslobodí z povrazovej siete, čím sa potvrdí, že aj slabý môže byť užitočný. V bájke o pastierovi a vlkovi zavolá pastier zo žartu pomoc tak často, že mu pri skutočnom nebezpečenstve už nikto neverí. Ezopove bájky sa stali vzorom pre celú európsku tradíciu žánru — nadviazali na ne Phaedrus, La Fontaine, Krylov a u nás Jonáš Záborský.',
    ],
    kompozicia:
      'Zbierka samostatných krátkych útvarov. Každá bájka má rovnakú stavbu: krátka expozícia, konflikt alebo stretnutie dvoch postáv, rýchle rozuzlenie a pointa s mravným poučením (takzvané epimythion), ktoré býva vyjadrené priamo na konci textu.',
    postavy: [
      {
        meno: 'Líška',
        charakteristika:
          'Najtypickejšia postava bájok, ktorá zastupuje prefíkanosť, lichotenie a schopnosť vykrútiť sa z každej situácie. Raz je vykreslená ako víťaz (Havran a líška), inokedy ako ten, kto si hľadá výhovorku (Líška a hrozno). Predstavuje ľudskú vychytralosť.',
        rola: 'hlavna',
      },
      {
        meno: 'Vlk',
        charakteristika:
          'Stelesnenie hrubej sily a bezohľadnosti, ktorá si vždy nájde zámienku na útok. V bájke Vlk a baránok ukazuje, že mocnému nezáleží na pravde, ale na výsledku. Zastupuje násilnú, silou opretú nespravodlivosť.',
        rola: 'hlavna',
      },
      {
        meno: 'Baránok',
        charakteristika:
          'Bezbranná a nevinná postava, ktorá sa snaží obhájiť pravdou a logikou. Jeho argumenty sú správne, no proti sile nemajú váhu. Predstavuje slabého človeka bez ochrany.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Lev',
        charakteristika:
          'Kráľ zvierat, symbol moci a nadradenosti; v niektorých bájkach je pyšný a koristnícky, v iných veľkodušný. V bájke Lev a myš svojou zhovievavosťou nakoniec získa záchranu. Slúži na kritiku panovníkov a mocných.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Korytnačka',
        charakteristika:
          'Pomalá, no vytrvalá a sústredená postava, ktorá porazí sebavedomého zajaca. Dokazuje, že pravidelná práca je cennejšia než nadanie bez disciplíny. Je pozitívnym vzorom bájok.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Mravec',
        charakteristika:
          'Pracovitá a predvídavá postava, ktorá si celé leto zbiera zásoby na zimu. Kontrastuje s bezstarostnou kobylkou, ktorá iba spievala. Zastupuje hodnotu práce a zodpovednosti.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'ľudské chyby a nedostatky odhalené na zvieratách',
      'mocní proti bezbranným a nespravodlivosť sily',
      'práca, vytrvalosť a predvídavosť proti lenivosti',
      'pýcha, lichotenie a márnivosť',
    ],
    motivy: [
      'kalenie vody ako vymyslená zámienka na útok',
      'nedosiahnuteľné a preto „kyslé“ hrozno',
      'lichotenie, ktorým sa dá získať korisť',
      'pretek zajaca a korytnačky',
      'zásoby na zimu',
      'vzájomná pomoc medzi silným a slabým',
    ],
    jazyk: [
      'alegória (obraznosť) — celý príbeh má prenesený význam, zvieratá zastupujú ľudské typy a vlastnosti',
      'personifikácia — zvieratá hovoria, premýšľajú a rozhodujú sa ako ľudia, čím vzniká priestor na kritiku bez menovania',
      'kontrast dvoch postáv (silný a slabý, pracovitý a lenivý), na ktorom je postavená celá stavba bájky',
      'pointa a mravné poučenie (epimythion) na konci — krátka zhrňujúca veta, ktorá príbeh vykladá',
      'dialóg ako hlavný prostriedok deja; príbeh sa rozhoduje v niekoľkých replikách',
      'irónia, najmä keď postava sama seba usvedčí vlastnými slovami (líška a kyslé hrozno)',
      'jednoduchý, striedmy a vecný štýl bez zdobných opisov, pretože zmyslom textu je poučenie, nie obraz',
    ],
    maturitneMinimum: [
      'Ezop bol podľa tradície grécky otrok zo 6. stor. pred Kr.; bájky sa najprv šírili ústne a zapísali ich až neskôr.',
      'Bájka je krátky príbeh s alegorickým významom a mravným poučením; postavami sú najčastejšie zvieratá s ustálenými vlastnosťami.',
      'Ezop je zakladateľom žánru; nadviazali na neho Phaedrus (Rím), Jean de La Fontaine (Francúzsko), Ivan A. Krylov (Rusko) a na Slovensku Jonáš Záborský.',
      'Z bájok pochádzajú ustálené spojenia, napríklad „kyslé hrozno“ alebo „vlk v ovčom rúchu“.',
      'Bájka patrí medzi didaktické (výchovné) žánre — jej cieľom je poučiť, nie len zobraziť.',
    ],
    ulohy: [
      {
        id: 'ezopove-bajky-k1',
        typ: 'kviz',
        otazka: 'Čo je základným znakom bájky?',
        moznosti: [
          'alegorický príbeh, najčastejšie so zvieratami, ktorý sa končí mravným poučením',
          'dlhý veršovaný príbeh o hrdinských činoch bojovníka',
          'oslavná pieseň na bohov a vládcov',
          'pravdivé svedectvo o historickej udalosti',
        ],
        spravna: 0,
        vysvetlenie:
          'V bájke zvieratá zastupujú ľudské typy a vlastnosti, takže celý príbeh má prenesený význam. Na konci je pointa, ktorá poučenie vyslovuje priamo.',
      },
      {
        id: 'ezopove-bajky-k2',
        typ: 'kviz',
        otazka: 'Aké je poučenie bájky Vlk a baránok?',
        moznosti: [
          'kto má silu, vždy si nájde zámienku — proti mocnému je pravda bezbranná',
          'treba sa naučiť plávať, aby človek neprišiel o život',
          'kto sa v lete nepripraví, v zime hladuje',
          'na lichotenie treba odpovedať lichotením',
        ],
        spravna: 0,
        vysvetlenie:
          'Baránok vlkovi logicky dokáže, že mu nemôže kaliť vodu, no vlk si vymyslí ďalšie výčitky a nakoniec ho aj tak roztrhá. Bájka teda kritizuje nespravodlivosť opretú o silu.',
      },
      {
        id: 'ezopove-bajky-k3',
        typ: 'kviz',
        otazka: 'Ktorý autor nepatrí k pokračovateľom Ezopovej bájkarskej tradície?',
        moznosti: [
          'William Shakespeare',
          'Jean de La Fontaine',
          'Ivan Andrejevič Krylov',
          'Jonáš Záborský',
        ],
        spravna: 0,
        vysvetlenie:
          'La Fontaine, Krylov a Záborský sú známi bájkari, ktorí Ezopove látky prebásnili a rozvinuli. Shakespeare bol dramatik a sonetista, bájky nepísal.',
      },
      {
        id: 'ezopove-bajky-k4',
        typ: 'kviz',
        otazka: 'Čo znamená ustálené spojenie „kyslé hrozno“?',
        moznosti: [
          'znevažovanie toho, čo človek nedokáže získať',
          'trpký konec šťastného príbehu',
          'zlá úroda na vinici po krupobití',
          'závistlivé chválenie súpera',
        ],
        spravna: 0,
        vysvetlenie:
          'Líška nedosiahne hrozno, a preto o ňom povie, že je kyslé. Spojenie odvtedy označuje výhovorku, ktorou si ospravedlňujeme vlastné zlyhanie.',
      },
      {
        id: 'ezopove-bajky-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k bájke jej poučenie.',
        pary: [
          { vlavo: 'Vlk a baránok', vpravo: 'mocný si vždy nájde zámienku, pravda ho nezastaví' },
          { vlavo: 'Líška a hrozno', vpravo: 'čo nedokážeme získať, radšej znevážime' },
          { vlavo: 'Havran a líška', vpravo: 'kto si nechá zalichotiť, príde o to, čo má' },
          { vlavo: 'Zajac a korytnačka', vpravo: 'vytrvalosť zvíťazí nad sebavedomým nadaním' },
          { vlavo: 'Mravec a kobylka', vpravo: 'kto sa v lete nepripraví, v zime hladuje' },
        ],
        vysvetlenie:
          'Každá bájka má jedno jasné poučenie, ktoré je uvedené priamo v pointe. Práve táto jednoznačnosť robí z bájky didaktický žáner.',
      },
      {
        id: 'ezopove-bajky-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o bájke ako žánri.',
        text: [
          'Bájka je krátky príbeh s ',
          { medzera: 'alegorickým', napoveda: 'prenesený, obrazný význam' },
          ' významom, ktorý sa končí mravným ',
          { medzera: 'poučením', napoveda: 'záverečná pointa bájky' },
          '. Zakladateľom žánru je grécky autor ',
          { medzera: 'Ezop', napoveda: 'podľa tradície otrok zo 6. stor. pred Kr.' },
          '.',
        ],
        vysvetlenie:
          'Alegória a mravné poučenie sú dva povinné znaky bájky. Ezop je jej zakladateľom, na ktorého nadviazali všetci neskorší bájkari.',
      },
    ],
  },
  {
    id: 'ilias',
    nazov: 'Ilias',
    autorId: 'homer',
    rocnik: 1,
    druh: 'poezia',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'hrdinský (bohatiersky) epos',
    forma: 'poézia — 24 spevov, približne 15 700 veršov v hexametri',
    rokVydania: '8. stor. pred Kr.',
    obdobie: 'antická grécka literatúra — archaické obdobie',
    miestoACas: 'Trója (Ílion) a grécky vojnový tábor na maloázijskom pobreží; 51 dní desiateho roku trójskej vojny (podľa tradície 12. stor. pred Kr.)',
    anotacia:
      'Epos o hneve najlepšieho gréckeho bojovníka, ktorý sa pre urážku stiahne z bojov a tým privedie vlastné vojsko na pokraj záhuby. Zobrazuje niekoľko týždňov desiateho roku vojny o Tróju.',
    obsah: [
      'Epos sa začína in medias res, teda priamo v deji desiateho roku trójskej vojny, a jeho témou je hnev Achilla. Vrchný veliteľ Grékov Agamemnón odmietne vydať dcéru Apolónovho kňaza Chrýsa, a preto na grécky tábor dopadne mor. Keď musí zajatkyňu vrátiť, vezme si ako náhradu Achillovu korisť Briseidu. Urazený Achilles odchádza od bojov k svojim lodiam a prostredníctvom matky, morskej bohyne Thetidy, vyprosí u Zeusa, aby Gréci bez neho prehrávali.',
      'Bez najlepšieho bojovníka sa vojnové šťastie obracia. Nasleduje rad zápasov: Paris sa postaví Menelaovi v dvojboji o Helenu, ale bohyňa Afrodita ho zachráni, Hektor sa bije s Ajaxom a trójske vojsko postupne zatlačí Grékov až k lodiam. Agamemnón pošle k Achillovi posolstvo s ponukou darov a s vrátením Briseidy, no Achilles ju hrdo odmietne. Boj sa vedie aj medzi bohmi, ktorí sa delia na priaznivcov Grékov a Trójanov a neustále zasahujú do deja.',
      'Keď Trójania podpália prvú grécku loď, Achillov najlepší priateľ Patroklos ho uprosí, aby mohol vyraziť do boja v jeho zbroji. Trójania sa domnievajú, že prichádza sám Achilles, a dajú sa na útek. Patroklos zabije aj Zeusovho syna Sarpedóna, no v opojení z víťazstva sa pustí príliš blízko k hradbám a Hektor ho s Apolónovou pomocou zabije. Achillovu zbroj Hektor strhne ako korisť a nad Patroklovým telom sa strhne ďalší boj.',
      'Správa o smrti priateľa zmení Achillov hnev proti Agamemnónovi na hnev proti Hektorovi. Achilles sa s vrchným veliteľom zmieri, matka mu od boha Héfaista prinesie novú zbroj s nádherne zdobeným štítom a on vyrazí do boja. V hroznej seči zaženie Trójanov za hradby, pred bránami sa stretne s Hektorom a po prenasledovaní okolo mesta ho zabije. Mŕtve telo priviaže za voz a vláči ho okolo Patroklovej mohyly, čím poruší aj zákony pomsty.',
      'Dvanásť dní trvá Achillovo znevažovanie mŕtveho protivníka. Potom prichádza v noci do gréckeho tábora starý trójsky kráľ Priamos, Hektorov otec, padne pred Achillom na kolená a prosí o telo svojho syna. Achilles si spomenie na vlastného otca, rozplače sa spolu s Priamom a telo vydá; dohodnú sa aj na jedenásťdňovom prerušení boja. Epos sa nekončí pádom Tróje, ale Hektorovým pohrebom a plačom trójskych žien, takže vyznieva ako obraz ľudskej ceny vojny.',
    ],
    kompozicia:
      'Dvadsaťštyri spevov, ktoré sa začínajú apostrofou na Múzu a vstupom do deja in medias res. Dej zachytáva len 51 dní desiateho roku vojny, no pomocou epických opisov, dvojbojov a vložených rozprávaní sa rozrastá na monumentálny celok. Kompozíciu držia tri zlomy: Achillov hnev a odchod, Patroklova smrť a Achillov návrat, a napokon stretnutie s Priamom.',
    postavy: [
      {
        meno: 'Achilles',
        charakteristika:
          'Najlepší grécky bojovník, syn Pélea a morskej bohyne Thetidy, prehnane hrdý a neústupčivý. Pre urážku od Agamemnóna sa stiahne z boja a vráti sa až po smrti priateľa Patrokla, aby ho pomstil. V záverečnom stretnutí s Priamom prekoná svoj hnev a preukáže ľudskosť.',
        rola: 'hlavna',
      },
      {
        meno: 'Hektor',
        charakteristika:
          'Najstarší syn trójskeho kráľa Priama a hlavný obranca Tróje, statočný bojovník, ale aj milujúci muž a otec. Bije sa nie z túžby po sláve, ale z povinnosti k mestu a k rodine. Padne v dvojboji s Achillom a stáva sa najtragickejšou postavou eposu.',
        rola: 'hlavna',
      },
      {
        meno: 'Agamemnón',
        charakteristika:
          'Vrchný veliteľ gréckeho vojska, mykénsky kráľ, ktorý svojou pýchou a chamtivosťou spôsobí Achillov hnev. Je schopný organizátor, no zlý znalec ľudí. Neskôr svoju chybu prizná a pokúsi sa Achilla uprosiť darmi.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Patroklos',
        charakteristika:
          'Achillov najbližší priateľ, ktorý ho uprosí, aby smel bojovať v jeho zbroji. Jeho víťazstvo sa zmení na smrť, keď ho pri hradbách zabije Hektor. Jeho smrť je dejovým zlomom celého eposu.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Priamos',
        charakteristika:
          'Starý trójsky kráľ a Hektorov otec, ktorý sa v noci odváži prísť do nepriateľského tábora. Pokľakne pred Achillom a vyprosí si telo svojho syna. Predstavuje otcovskú lásku silnejšiu než strach.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Helena',
        charakteristika:
          'Najkrajšia žena sveta, manželka spartského kráľa Menelaa, ktorú odviedol trójsky princ Paris. Je príčinou vojny, hoci sama do bojov nezasahuje. V epose je zobrazená s výčitkami a s vedomím vlastnej viny.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'hnev a hrdosť jednotlivca a ich následky pre celé spoločenstvo',
      'hrdinská sláva ako najvyššia hodnota antického bojovníka',
      'osud určený bohmi a nemožnosť mu uniknúť',
      'priateľstvo, pomsta a napokon zmierenie',
      'utrpenie a ľudská cena vojny',
    ],
    motivy: [
      'Achillov hnev a odchod od bojov',
      'spor o zajatkyňu Briseidu',
      'Patroklos v Achillovej zbroji',
      'opis štítu zhotoveného Héfaistom',
      'vláčenie Hektorovho tela za vozom',
      'Priamova nočná prosba a vydanie tela',
    ],
    jazyk: [
      'hexameter — šesťstopový verš, ktorý dáva epickému rozprávaniu slávnostný a monumentálny ráz',
      'ustálené (stále) epitetá ako „rýchlonohý Achilles“, „Hektor s prilbou lesklou“ či „zore ružovoprstá“ — pomáhali prednášajúcemu spevákovi a udržiavajú jednotný vysoký tón',
      'homérske (rozvinuté) prirovnanie — prirovnanie sa rozrastie na samostatný obrázok zo sveta prírody či práce a na chvíľu zastaví dej',
      'apostrofa na Múzu v úvode, ktorou sa rozprávač odvoláva na božskú inšpiráciu a otvára epos',
      'in medias res — vstup priamo do deja bez rozsiahleho úvodu, takže čitateľ sa hneď ocitne v desiatom roku vojny',
      'retardácia (spomaľovanie deja) — najznámejším príkladom je dlhý opis Achillovho štítu, ktorý na stovky veršov zastaví boj',
      'zásahy bohov ako dejová pružina (deus ex machina) — Afrodita, Apolón či Aténa priamo vstupujú do zápasov a menia ich výsledok',
    ],
    maturitneMinimum: [
      'Ilias aj Odysea sa pripisujú Homérovi; otázka, či taký autor existoval, sa nazýva homérska otázka.',
      'Epos zachytáva len 51 dní desiateho roku trójskej vojny, nie celú vojnu — pád Tróje a trójsky kôň v Iliade nie sú.',
      'Hlavnou témou je hnev Achilla; dejovým zlomom je smrť Patrokla a vyvrcholením dvojboj s Hektorom.',
      'Epos má 24 spevov napísaných v hexametri a je vzorom hrdinského eposu pre celú európsku literatúru (Vergílius, Dante, Hollý).',
      'Typické znaky: in medias res, apostrofa na Múzu, ustálené epitetá, homérske prirovnania, retardácia a zásahy bohov.',
    ],
    ulohy: [
      {
        id: 'ilias-k1',
        typ: 'kviz',
        otazka: 'Čo je hlavnou témou Iliady?',
        moznosti: [
          'hnev Achilla a jeho následky pre grécke vojsko',
          'desaťročné blúdenie hrdinu po mori',
          'pád Tróje pomocou dreveného koňa',
          'únos Heleny trójskym princom Parisom',
        ],
        spravna: 0,
        vysvetlenie:
          'Už úvodné verše ohlašujú hnev Achilla ako predmet spevu. Pád Tróje a trójsky kôň v Iliade vôbec nie sú — epos sa končí Hektorovým pohrebom.',
      },
      {
        id: 'ilias-k2',
        typ: 'kviz',
        otazka: 'Prečo sa Achilles stiahne z bojov?',
        moznosti: [
          'Agamemnón mu vzal zajatkyňu Briseidu a tým ho urazil',
          'bol ranený otráveným šípom do päty',
          'bohovia mu zakázali bojovať proti Hektorovi',
          'chcel sa vrátiť domov k otcovi Péleovi',
        ],
        spravna: 0,
        vysvetlenie:
          'Agamemnón musel vrátiť Chrýsovu dcéru, a preto si ako náhradu vzal Achillovu korisť Briseidu. Táto urážka hrdinovej česti spustí hnev, ktorý je témou celého eposu.',
      },
      {
        id: 'ilias-k3',
        typ: 'kviz',
        otazka: 'Čo je dejovým zlomom, ktorý prinúti Achilla vrátiť sa do boja?',
        moznosti: [
          'Hektor zabije Patrokla, ktorý bojoval v Achillovej zbroji',
          'Agamemnón mu ponúkne polovicu koristi',
          'Trójania podpália jeho vlastnú loď',
          'jeho matka Thetis mu prikáže bojovať',
        ],
        spravna: 0,
        vysvetlenie:
          'Achillov hnev proti Agamemnónovi sa po smrti priateľa zmení na hnev proti Hektorovi. Až vtedy sa hrdina zmieri s veliteľom a prijme novú zbroj od Héfaista.',
      },
      {
        id: 'ilias-k4',
        typ: 'kviz',
        otazka: 'Ako sa Ilias končí?',
        moznosti: [
          'Priamos vyprosí Hektorovo telo a nasleduje jeho pohreb',
          'Gréci vniknú do mesta v drevenom koni',
          'Achilles padne pri Skajskej bráne',
          'Helena sa vráti k Menelaovi a vojna skončí',
        ],
        spravna: 0,
        vysvetlenie:
          'Po dvanástich dňoch vláčenia tela prichádza starý Priamos do nepriateľského tábora a Achilles sa nad ním zľutuje. Epos vyznieva zmierlivo — plačom nad mŕtvym, nie víťazstvom.',
      },
      {
        id: 'ilias-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave jej úlohu v epose.',
        pary: [
          { vlavo: 'Achilles', vpravo: 'najlepší grécky bojovník, ktorého hnev je témou eposu' },
          { vlavo: 'Hektor', vpravo: 'hlavný obranca Tróje, padne v dvojboji s Achillom' },
          { vlavo: 'Agamemnón', vpravo: 'vrchný veliteľ Grékov, ktorý spor o Briseidu vyvolal' },
          { vlavo: 'Patroklos', vpravo: 'priateľ, ktorý bojuje v cudzej zbroji a zaplatí životom' },
          { vlavo: 'Priamos', vpravo: 'starý trójsky kráľ, ktorý vyprosí telo svojho syna' },
        ],
        vysvetlenie:
          'Postavy sú stavané do protikladov: Achilles proti Hektorovi, hrdosť proti povinnosti, pomsta proti otcovskej láske. Na tomto napätí stojí celá stavba eposu.',
      },
      {
        id: 'ilias-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň formálne údaje o diele.',
        text: [
          'Ilias má ',
          { medzera: '24', napoveda: 'počet spevov' },
          ' spevov napísaných v ',
          { medzera: 'hexametri', napoveda: 'šesťstopový antický verš' },
          ' a dej sa začína spôsobom ',
          { medzera: 'in medias res', napoveda: 'latinsky „doprostred veci“' },
          '.',
        ],
        vysvetlenie:
          'Dvadsaťštyri spevov, hexameter a vstup in medias res patria k povinným formálnym znakom, ktoré treba pri Iliade vedieť pomenovať.',
      },
      {
        id: 'ilias-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o jazykových prostriedkoch eposu.',
        text: [
          'Spojenie „rýchlonohý Achilles“ je príkladom ustáleného ',
          { medzera: 'epiteta', napoveda: 'básnický prívlastok' },
          ', a dlhý opis Achillovho štítu je príkladom ',
          { medzera: 'retardácie', napoveda: 'spomaľovanie deja' },
          '.',
        ],
        vysvetlenie:
          'Ustálené epitetá udržiavajú slávnostný tón a pomáhali ústnemu prednesu, kým retardácia zámerne spomaľuje dej a zvyšuje napätie pred rozhodujúcim bojom.',
      },
    ],
  },
  {
    id: 'odysea',
    nazov: 'Odysea',
    autorId: 'homer',
    rocnik: 1,
    druh: 'poezia',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'hrdinský epos s prvkami cestopisu a báje',
    forma: 'poézia — 24 spevov, približne 12 100 veršov v hexametri',
    rokVydania: '8. stor. pred Kr.',
    obdobie: 'antická grécka literatúra — archaické obdobie',
    miestoACas: 'ostrov Ithaka a báječné krajiny Stredozemného mora (Ógygia, Fajácia, Kyklopov ostrov, Aiaia, podsvetie); desať rokov po skončení trójskej vojny',
    anotacia:
      'Epos o desaťročnom návrate trójskeho víťaza domov na Ithaku, kde naň čaká verná manželka a dom plný neželaných nápadníkov. Na rozdiel od Iliady tu nevíťazí sila, ale rozum a vytrvalosť.',
    obsah: [
      'Desať rokov po páde Tróje je Odyseus jediný z gréckych vodcov, ktorý sa ešte nevrátil domov. Zadržiava ho nymfa Kalypsó na ostrove Ógygia, kým na Ithake plienia jeho dom nápadníci, ktorí sa chcú oženiť s jeho manželkou Penelopou a rozobrať si majetok. Bohovia na Aténinu žiadosť rozhodnú, že Odyseus sa má vrátiť. Jeho syn Télemachos sa zatiaľ vydáva hľadať správy o otcovi do Pylu a Sparty.',
      'Odyseus sa na plti dostane po búrke k Fajákom, kde ho nájde kráľovská dcéra Nausikaá a privedie na dvor kráľa Alkinoa. Práve tu, na hostine, vyrozpráva svoje príhody — celá stredná časť eposu je teda vložené retrospektívne rozprávanie v prvej osobe. Opisuje krajinu Kikónov, zem Lotofágov, kde druhovia zabúdajú po ovocí na domov, a najznámejšiu epizódu s jednookým kyklopom Polyfémom. Odyseus sa v jaskyni nazve „Nikto“, obra opije, vypáli mu oko a so svojimi druhmi unikne priviazaný pod bruchom oviec.',
      'Rozprávanie pokračuje ďalšími skúškami: od boha Aiola dostane mech s vetrami, ktorý zvedaví druhovia otvoria a zaženú loď späť, čarodejnica Kirké zmení jeho mužov na svine, v podsvetí sa stretne s vestcom Teiresiom a s matkou. Potom prepláva popri Sirénach priviazaný k sťažňu a s voskom v ušiach druhov, prežije úzku plavbu medzi Skyllou a Charybdou a napokon stratí celé loďstvo, keď jeho hladní druhovia zabijú posvätný Héliov statok. Ako jediný sa zachráni a doplaví sa ku Kalypse — tu sa vložené rozprávanie uzatvára a spája so začiatkom eposu.',
      'Fajáci ho na svojej lodi dopravia na Ithaku. Aténa ho premení na starého žobráka, aby si najprv obzrel pomery vo vlastnom dome. Ubytuje sa u verného sviniara Eumaia, dá sa spoznať synovi Télemachovi a spoločne pripravia plán. V paláci ho nápadníci ponižujú, jedine stará pestúnka Eurykleia ho pozná podľa jazvy na nohe a starý pes Argos ho zvetrí a uhynie.',
      'Penelopa, ktorá nápadníkov rokmi zdržiavala tkaním a párením rubáša, vyhlási záverečnú skúšku: vezme si toho, kto natiahne Odyseov luk a prestrelí rad sekier. Nikto z nápadníkov to nedokáže, až prezlečený Odyseus splní úlohu bez námahy. Potom s Télemachom, Eumaiom a s Aténinou pomocou pobije všetkých nápadníkov aj neverné slúžky. Penelope sa dá spoznať podľa tajomstva o ich svadobnej posteli a s pomocou bohov je zažehnaná aj pomsta rodín zabitých — epos sa končí zmierením a obnovením poriadku na Ithake.',
    ],
    kompozicia:
      'Dvadsaťštyri spevov s trojdielnou stavbou: Télemachova cesta a Odyseov odchod od Kalypsó, vložené retrospektívne rozprávanie hrdinu u Fajákov (spevy 9 – 12) a napokon návrat na Ithaku s pomstou nad nápadníkmi. Epos sa začína apostrofou na Múzu a in medias res; pásmo rozprávača sa strieda s pásmom hrdinu, ktorý rozpráva o sebe v prvej osobe.',
    postavy: [
      {
        meno: 'Odyseus',
        charakteristika:
          'Kráľ Ithaky, „mnohotrpiaci“ a „prechytrý“ hrdina, ktorý sa presadzuje rozumom, ľsťou a vytrvalosťou, nie len silou. Prekoná desať rokov skúšok, ale nikdy sa nevzdá túžby po domove, hoci mu Kalypsó ponúkala nesmrteľnosť. Je prvým literárnym typom hrdinu, ktorý zvíťazí vtipom a rozvahou.',
        rola: 'hlavna',
      },
      {
        meno: 'Penelopa',
        charakteristika:
          'Odyseova manželka, symbol manželskej vernosti a trpezlivosti. Nápadníkov zdržiava ľsťou — cez deň tká rubáš a v noci ho páre — a napokon vymyslí skúšku s lukom. Svojho muža prijme až po tom, čo ju presvedčí tajomstvom o ich svadobnej posteli.',
        rola: 'hlavna',
      },
      {
        meno: 'Télemachos',
        charakteristika:
          'Odyseov syn, ktorý na začiatku eposu ešte nemá autoritu nad nápadníkmi, a preto sa vydá hľadať správy o otcovi. Cestou dozreje na muža a v záverečnom boji stojí po otcovom boku. Jeho dospievanie je vedľajšou dejovou líniou eposu.',
        rola: 'hlavna',
      },
      {
        meno: 'Aténa',
        charakteristika:
          'Bohyňa múdrosti, ktorá je hrdinovou trvalou ochrankyňou a radkyňou. Presadí u bohov jeho návrat, premení ho na žobráka a pomôže mu v boji s nápadníkmi. Predstavuje spojenectvo rozumu s božskou priazňou.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Polyfémos',
        charakteristika:
          'Jednooký kyklop, ktorý Odyseových druhov uväzní v jaskyni a časť z nich zožerie. Hrdina ho premôže ľsťou: nazve sa Nikto, obra opije a vypáli mu oko. Jeho otec Poseidon potom Odysea po mori prenasleduje.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Kalypsó',
        charakteristika:
          'Nymfa, ktorá si Odysea sedem rokov zadržiava na ostrove Ógygia a ponúka mu nesmrteľnosť. Hrdina ju odmietne, pretože dá prednosť ľudskému životu s manželkou. Na príkaz bohov ho musí pustiť.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'túžba po domove a návrat (nostos) ako najvyššia hodnota',
      'manželská vernosť a súdržnosť rodiny',
      'rozum, ľsť a vynaliezavosť ako zbraň silnejšia než sila',
      'pohostinnosť a jej porušenie ako previnenie proti bohom',
      'dospievanie a hľadanie otca',
    ],
    motivy: [
      'kyklop Polyfémos a meno „Nikto“',
      'mech s vetrami od boha Aiola',
      'spev Sirén a hrdina priviazaný k sťažňu',
      'Skylla a Charybda ako neriešiteľná voľba',
      'Penelopino tkanie a párenie rubáša',
      'skúška s lukom a jazva, po ktorej hrdinu spoznajú',
    ],
    jazyk: [
      'hexameter — nerýmovaný šesťstopový verš, ktorý udržiava slávnostný epický tón aj v báječných epizódach',
      'ustálené epitetá typu „prechytrý Odyseus“, „mnohotrpiaci hrdina“, „zore ružovoprstá“ — opakujú sa ako ustálené formuly a pripomínajú ústny pôvod textu',
      'retrospektíva a vložené rozprávanie v prvej osobe (spevy 9 – 12) — hrdina rozpráva svoje príhody sám, takže sa mení perspektíva aj tempo textu',
      'rámcová kompozícia — rozprávanie u Fajákov je vsunuté do hlavného deja a uzavrie sa presne tam, kde epos začal',
      'homérske prirovnania a opisy hostín, plavby a práce, ktoré spomaľujú dej a dávajú svetu eposu plastickosť',
      'anticipácia a veštby (Teiresiova predpoveď) — čitateľ vie, čo príde, a napätie sa presúva na otázku „ako“',
      'kontrast báječných krajín a realistických výjavov z Ithaky, ktorým sa epos približuje k obrazu každodenného života',
    ],
    maturitneMinimum: [
      'Odysea má 24 spevov v hexametri; na rozdiel od Iliady nie je eposom o boji, ale o návrate (nostos).',
      'Hlavným hrdinom je Odyseus, ktorý víťazí rozumom a ľsťou — najznámejšie v epizóde s kyklopom Polyfémom.',
      'Spevy 9 až 12 sú vložené retrospektívne rozprávanie samotného Odysea na dvore fajáckeho kráľa Alkinoa.',
      'Penelopa sa stala symbolom manželskej vernosti; jej tkanie a párenie rubáša je príkladom ženskej ľsti.',
      'Z eposu pochádzajú ustálené spojenia ako „odysea“ vo význame dlhé strastiplné putovanie alebo „medzi Skyllou a Charybdou“.',
    ],
    ulohy: [
      {
        id: 'odysea-k1',
        typ: 'kviz',
        otazka: 'Čím sa Odysea odlišuje od Iliady?',
        moznosti: [
          'nie je eposom o boji, ale o návrate hrdinu domov',
          'je napísaná v próze, nie vo verši',
          'nevystupujú v nej bohovia',
          'má len dvanásť spevov namiesto dvadsiatich štyroch',
        ],
        spravna: 0,
        vysvetlenie:
          'Ilias zobrazuje niekoľko týždňov vojny a hnev Achilla, kým Odysea je eposom o desaťročnom návrate (nostos). Aj hrdina je iný typ — víťazí rozumom, nie silou.',
      },
      {
        id: 'odysea-k2',
        typ: 'kviz',
        otazka: 'Ako Odyseus premôže kyklopa Polyféma?',
        moznosti: [
          'nazve sa Nikto, obra opije a vypáli mu oko',
          'porazí ho v priamom zápase mečom',
          'privolá naň Poseidonov hnev',
          'podplatí ho zlatom z trójskej koristi',
        ],
        spravna: 0,
        vysvetlenie:
          'Ide o najznámejší príklad hrdinovej ľsti: vďaka menu Nikto nedokáže Polyfémos privolanej pomoci vysvetliť, kto ho napadol, a Odyseus s druhmi unikne priviazaný pod bruchom oviec.',
      },
      {
        id: 'odysea-k3',
        typ: 'kviz',
        otazka: 'Ako Penelopa zdržiavala nápadníkov?',
        moznosti: [
          'cez deň tkala rubáš a v noci ho párala',
          'posielala ich na nebezpečné výpravy',
          'tvrdila, že je ťažko chorá',
          'skryla sa v podsvetí u Teiresia',
        ],
        spravna: 0,
        vysvetlenie:
          'Penelopa sľúbila, že sa vydá až po dotkaní rubáša, no v noci svoju prácu vždy rozpárala. Táto ľsť ju stavia po boku vynaliezavého Odysea a robí z nej symbol vernosti.',
      },
      {
        id: 'odysea-k4',
        typ: 'kviz',
        otazka: 'Čo je obsahom spevov 9 až 12?',
        moznosti: [
          'Odyseovo vlastné retrospektívne rozprávanie o príhodách na mori',
          'Télemachova cesta do Pylu a Sparty',
          'boj s nápadníkmi v palácovej sále',
          'rada bohov na Olympe o hrdinovom návrate',
        ],
        spravna: 0,
        vysvetlenie:
          'Na hostine u fajáckeho kráľa Alkinoa rozpráva Odyseus svoje príhody sám, v prvej osobe. Ide o vložené retrospektívne rozprávanie, ktoré vytvára rámcovú kompozíciu eposu.',
      },
      {
        id: 'odysea-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave alebo miestu to, čo sa s ním v epose spája.',
        pary: [
          { vlavo: 'Polyfémos', vpravo: 'jednooký kyklop, ktorému hrdina vypáli oko' },
          { vlavo: 'Kirké', vpravo: 'čarodejnica, ktorá premení druhov na svine' },
          { vlavo: 'Kalypsó', vpravo: 'nymfa ponúkajúca hrdinovi nesmrteľnosť' },
          { vlavo: 'Nausikaá', vpravo: 'fajácka kráľovská dcéra, ktorá stroskotanca nájde' },
          { vlavo: 'Eurykleia', vpravo: 'stará pestúnka, ktorá pozná hrdinu podľa jazvy' },
        ],
        vysvetlenie:
          'Ženské postavy tvoria v Odysei celú škálu od nebezpečenstva (Kirké) po pomoc (Nausikaá, Eurykleia) a všetky preverujú hrdinovu vernosť domovu.',
      },
      {
        id: 'odysea-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o deji eposu.',
        text: [
          'Odyseus sa desať rokov vracia na ostrov ',
          { medzera: 'Ithaka', napoveda: 'hrdinovo kráľovstvo' },
          ', kde ho čaká manželka ',
          { medzera: 'Penelopa', napoveda: 'symbol manželskej vernosti' },
          '. Nápadníkov premôže po skúške s ',
          { medzera: 'lukom', napoveda: 'zbraň, ktorú nikto iný nenatiahne' },
          '.',
        ],
        vysvetlenie:
          'Ithaka, Penelopa a skúška s lukom sú tri opory deja: cieľ cesty, dôvod návratu a spôsob, akým sa hrdina napokon dá poznať.',
      },
      {
        id: 'odysea-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o kompozícii a jazyku.',
        text: [
          'Epos má ',
          { medzera: '24', napoveda: 'rovnaký počet ako v Iliade' },
          ' spevov a spevy 9 až 12 sú vložené ',
          { medzera: 'retrospektívne', napoveda: 'rozprávanie o tom, čo sa už stalo' },
          ' rozprávanie hrdinu v prvej osobe.',
        ],
        vysvetlenie:
          'Vložené rozprávanie u Fajákov robí z Odysey príklad rámcovej kompozície — hrdina je zároveň postavou aj rozprávačom.',
      },
    ],
  },
  {
    id: 'antigona',
    nazov: 'Antigona',
    autorId: 'sofokles',
    rocnik: 1,
    druh: 'drama',
    literatura: 'svetova',
    standardizovane: true,
    zaner: 'antická tragédia',
    forma: 'dráma vo verši — jedno dejstvo členené na prológ, striedanie výstupov a zborových piesní a exodos',
    rokVydania: 'okolo roku 442 pred Kr.',
    obdobie: 'antická grécka literatúra — klasické obdobie',
    miestoACas: 'Téby, pred kráľovským palácom; mytologická minulosť krátko po bratovražednom boji o mesto, dej trvá jeden deň',
    anotacia:
      'Tragédia o dievčine, ktorá pochová brata napriek kráľovskému zákazu, pretože poslúchne mravný zákon namiesto zákona štátu. Klasický príklad neriešiteľného tragického konfliktu dvoch práv.',
    obsah: [
      'Po smrti Oidipa sa jeho synovia Polyneikos a Eteokles dohodli, že sa budú v Tébach striedať na tróne. Eteokles však vládu nechcel odovzdať, a preto Polyneikos priviedol proti mestu cudzie vojsko. V bratovražednom boji obaja padli a vláda prešla na ich strýka Kreóna. Ten dal Eteokla pochovať so všetkými poctami, ale Polyneika ako zradcu zakázal pochovať pod hrozbou smrti a jeho telo nechal ležať pred hradbami.',
      'Antigona, sestra oboch mŕtvych, sa rozhodne brata pochovať, pretože nepochovaný človek podľa vtedajšej viery nenájde pokoj v podsvetí. Svoju sestru Ismenu vyzve, aby jej pomohla, no tá sa bojí a odmietne. Antigona teda telo posype prsťou sama. Keď stráž prinesie Kreónovi správu, že niekto zákaz porušil, kráľ zúri a vyhráža sa smrťou. Po druhom pokuse o pohreb prichytia Antigonu pri čine a privedú ju pred kráľa.',
      'Antigona sa nezapiera ani neprosí. Pred Kreónom vyhlási, že poslúchla nepísané a večné zákony bohov, ktoré sú nadradené rozkazom človeka. Kreón v nej vidí predovšetkým vzburu proti štátnej autorite, a k tomu vzburu ženy — nemôže ustúpiť, pretože by stratil moc. Ismena sa v tejto chvíli chce k sestre priznať a zomrieť s ňou, no Antigona jej to neumožní. Kreón rozhodne, že Antigonu zaživa zamurujú do skalnej hrobky.',
      'Proti rozsudku sa postaví Kreónov syn Haimon, Antigonin snúbenec. Otcovi vyčíta, že vládne ako tyran a že celé mesto je na dievčinej strane; Kreón ho obviní, že si cení ženu viac ako otca. Podobne kráľa varuje slepý vestec Teiresias: mesto je znesvätené nepochovanou mŕtvolou a Kreóna stihne trest na vlastnej rodine. Kráľ najprv vestca obviní, že ho podplatili, ale po zborovej rade sa nakoniec zľakne a rozhodne sa dievčinu vyslobodiť.',
      'Prichádza však neskoro. V hrobke nájde Antigonu obesenú na vlastnom závoji a Haimona, ktorý sa nad jej telom v otcovej prítomnosti prebodne mečom. Keď sa správa donesie do palácu, prebodne sa aj Kreónova manželka Eurydika. Kráľ, ktorý chcel zachrániť poriadok v štáte, zostáva úplne sám a sám seba označí za vinníka. Tragédia sa uzatvára zborom, ktorý pripomína, že rozvaha a miera sú najvyšším darom a že pýcha (hybris) privádza človeka do záhuby.',
    ],
    kompozicia:
      'Antická tragédia s klasickou stavbou: prológ (rozhovor Antigony s Ismenou), parodos čiže vstupná pieseň zboru, striedanie dialogických epizód a zborových piesní (stasimov), peripetia po Teiresiovom varovaní a exodos s posolstvom o mŕtvych. Dodržaná je jednota deja, miesta a času — dej sa odohráva na jednom mieste počas jedného dňa. Katastrofa sa na javisku nezobrazuje, iba sa o nej podáva správa.',
    postavy: [
      {
        meno: 'Antigona',
        charakteristika:
          'Oidipova dcéra, ktorá pochová brata napriek kráľovskému zákazu a odvoláva sa na nepísané zákony bohov. Je pevná, neústupčivá a pripravená zaplatiť za svoje rozhodnutie životom. Svoju smrť si nakoniec v hrobke spôsobí sama.',
        rola: 'hlavna',
      },
      {
        meno: 'Kreón',
        charakteristika:
          'Tébsky kráľ, ktorý zakáže pochovať zradcu, aby upevnil štátny poriadok a vlastnú autoritu. Jeho pevnosť sa mení na tyranskú tvrdohlavosť a pýchu, ktorá neznesie odpor syna ani vestca. Ustúpi neskoro a stratí syna aj manželku — je to práve on, kto prechádza tragickým poznaním.',
        rola: 'hlavna',
      },
      {
        meno: 'Ismena',
        charakteristika:
          'Antigonina sestra, ktorá sa bojí kráľovského rozkazu a odmietne jej pomôcť. Keď je sestra odsúdená, chce sa priznať a zomrieť s ňou. Tvorí kontrast k Antigone — je obrazom priemerného, chápavého, no nedostatočne odvážneho človeka.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Haimon',
        charakteristika:
          'Kreónov syn a Antigonin snúbenec, ktorý sa otcovi postaví a upozorní ho, že celé mesto dievčinu obhajuje. Keď nájde Antigonu mŕtvu, prebodne sa nad jej telom. Jeho smrť je prvým úderom, ktorý zlomí Kreóna.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Teiresias',
        charakteristika:
          'Slepý vestec, ktorý Kreónovi oznámi, že mesto je znesvätené a že trest dopadne na jeho rodinu. Predstavuje hlas bohov a mravného zákona. Jeho slepota je protikladom Kreónovej duchovnej zaslepenosti.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Zbor tébskych starcov',
        charakteristika:
          'Kolektívna postava, ktorá komentuje dej, kladie otázky a vyslovuje mravné závery. Sprostredkúva stanovisko obce a napokon Kreóna prehovorí, aby ustúpil. V závere vyslovuje hlavnú myšlienku o rozvahe a miere.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'konflikt zákona štátu a nepísaného mravného (božského) zákona',
      'sloboda svedomia jednotlivca proti moci',
      'pýcha (hybris) vládcu a jej potrestanie',
      'povinnosť voči rodine a úcta k mŕtvym',
      'zodpovednosť za vlastné rozhodnutia',
    ],
    motivy: [
      'nepochovaný Polyneikos a telo ležiace pred hradbami',
      'hrsť prsti ako symbolický pohreb',
      'zamurovanie zaživa do skalnej hrobky',
      'závoj, na ktorom sa Antigona obesí',
      'Teiresiova veštba a Kreónovo neskoré poznanie',
      'trojnásobná smrť v kráľovskej rodine',
    ],
    jazyk: [
      'tragický konflikt dvoch pravd — obidve strany majú čiastočné právo, preto sa spor nedá vyriešiť bez katastrofy; toto je podstata antickej tragédie',
      'stichomytia, teda rýchle striedanie krátkych replík verš za veršom (najmä v spore Antigony s Kreónom a Haimona s otcom), ktoré zvyšuje napätie',
      'zborové piesne (stasimá) ako komentár a mravné zovšeobecnenie deja; zbor hovorí to, čo si má publikum uvedomiť',
      'monológ a agón (slovný zápas) — postavy svoj postoj obhajujú rečnícky, argumentmi a rečníckymi otázkami',
      'gradácia a peripetia — napätie stúpa od zákazu cez odsúdenie až po Teiresiovo varovanie, po ktorom sa dej zvrtne',
      'tragická irónia — Kreón ustúpi presne v momente, keď je už všetko neodvratné, takže jeho záchranný pokus katastrofu iba potvrdí',
      'posol ako konvencia antickej drámy — smrť sa na javisku nezobrazuje, iba sa o nej podáva správa, čím sa zachováva dôstojnosť tragédie',
    ],
    maturitneMinimum: [
      'Antigona je antická tragédia z okolo roku 442 pred Kr.; Sofokles zaviedol tretieho herca a zmenšil úlohu zboru.',
      'Hlavným konfliktom je spor zákona štátu (Kreón) a nepísaného mravného zákona bohov (Antigona) — obe strany majú svoju pravdu.',
      'Dodržaná je jednota deja, miesta a času, ktorá sa neskôr stala pravidlom aj pre klasicistickú drámu.',
      'Tragickým hrdinom je aj Kreón: práve on prechádza poznaním vlastnej viny, keď stratí syna Haimona a manželku Eurydiku.',
      'Kľúčové pojmy k dielu: tragický konflikt, hybris (pýcha), katarzia, zbor, stichomytia, peripetia.',
    ],
    ulohy: [
      {
        id: 'antigona-k1',
        typ: 'kviz',
        otazka: 'V čom spočíva hlavný konflikt tragédie?',
        moznosti: [
          'v spore zákona štátu s nepísaným mravným zákonom bohov',
          'v boji dvoch bratov o tébsky trón',
          'v žiarlivosti Ismeny na svoju sestru',
          'v spore vestca Teiresia so zborom starcov',
        ],
        spravna: 0,
        vysvetlenie:
          'Kreón zastupuje zákon štátu a Antigona večný mravný zákon, podľa ktorého treba pochovať mŕtveho. Obe strany majú čiastočné právo, a preto ide o klasický tragický konflikt.',
      },
      {
        id: 'antigona-k2',
        typ: 'kviz',
        otazka: 'Za čo je Antigona odsúdená na smrť?',
        moznosti: [
          'pochovala brata Polyneika napriek kráľovskému zákazu',
          'podnietila vzburu tébskych starcov proti kráľovi',
          'zradila mesto cudziemu vojsku',
          'zabila svojho snúbenca Haimona',
        ],
        spravna: 0,
        vysvetlenie:
          'Kreón zakázal pochovať Polyneika ako zradcu mesta. Antigona jeho telo aj tak posype prsťou, čím sa vedome vystaví smrti — pre ňu je povinnosť k bratovi vyššia než rozkaz kráľa.',
      },
      {
        id: 'antigona-k3',
        typ: 'kviz',
        otazka: 'Ako sa tragédia končí?',
        moznosti: [
          'Antigona sa obesí, Haimon aj Eurydika sa prebodnú a Kreón zostáva sám',
          'Kreón prichádza včas a Antigonu zachráni',
          'Antigona sa vydá za Haimona a Kreón odstúpi z trónu',
          'Teiresias uzdraví mesto a všetci sa zmieria',
        ],
        spravna: 0,
        vysvetlenie:
          'Kreón sa rozhodne ustúpiť, no prichádza neskoro: v hrobke nájde Antigonu obesenú a Haimon sa nad ňou prebodne. Po správe o synovej smrti si vezme život aj Eurydika, takže trest dopadne práve na Kreóna.',
      },
      {
        id: 'antigona-k4',
        typ: 'kviz',
        otazka: 'Čo znamená pojem hybris, ktorý sa s tragédiou spája?',
        moznosti: [
          'pýcha a opovážlivosť, ktorá prekročí ľudskú mieru',
          'očistenie duše súcitom a strachom',
          'jednota deja, miesta a času',
          'rýchle striedanie krátkych replík v dialógu',
        ],
        spravna: 0,
        vysvetlenie:
          'Hybris je prehnaná pýcha, ktorá privádza hrdinu do záhuby — v tejto tragédii najmä Kreónova neústupčivosť. Očistenie súcitom a strachom sa nazýva katarzia.',
      },
      {
        id: 'antigona-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave jej postoj alebo osud.',
        pary: [
          { vlavo: 'Antigona', vpravo: 'poslúchne mravný zákon a v hrobke sa obesí' },
          { vlavo: 'Kreón', vpravo: 'obhajuje zákon štátu a stratí syna i manželku' },
          { vlavo: 'Ismena', vpravo: 'zo strachu sestre nepomôže, neskôr chce zomrieť s ňou' },
          { vlavo: 'Haimon', vpravo: 'snúbenec, ktorý sa prebodne nad mŕtvou Antigonou' },
          { vlavo: 'Teiresias', vpravo: 'slepý vestec varujúci pred trestom bohov' },
        ],
        vysvetlenie:
          'Postavy sú stavané do dvojíc protikladov: odvážna Antigona a bojazlivá Ismena, neústupčivý Kreón a jeho syn Haimon, ktorý mu hovorí pravdu.',
      },
      {
        id: 'antigona-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o deji tragédie.',
        text: [
          'Antigona pochovala brata ',
          { medzera: 'Polyneika', napoveda: 'brat, ktorý priviedol proti Tébam cudzie vojsko' },
          ' proti zákazu kráľa ',
          { medzera: 'Kreóna', napoveda: 'strýko Antigony a tébsky vládca' },
          ', a preto ju dal zaživa zamurovať do skalnej ',
          { medzera: 'hrobky', napoveda: 'miesto, kde sa Antigona obesí' },
          '.',
        ],
        vysvetlenie:
          'Polyneikos, Kreón a zamurovanie do hrobky tvoria dejovú os tragédie a patria k najčastejším otázkam na maturite.',
      },
      {
        id: 'antigona-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň pojmy z teórie antickej drámy.',
        text: [
          'V antickej tragédii komentuje dej ',
          { medzera: 'zbor', napoveda: 'kolektívna postava starcov' },
          ' a dodržiava sa jednota deja, miesta a ',
          { medzera: 'času', napoveda: 'dej trvá jeden deň' },
          '. Očistenie duše súcitom a strachom sa nazýva ',
          { medzera: 'katarzia', napoveda: 'grécky výraz pre očistenie' },
          '.',
        ],
        vysvetlenie:
          'Zbor, jednota troch (deja, miesta a času) a katarzia sú základné pojmy antickej drámy, ktoré neskôr prevzal aj klasicizmus.',
      },
    ],
  },
  {
    id: 'proglas',
    nazov: 'Proglas',
    autorId: 'konstantin',
    rocnik: 1,
    druh: 'poezia',
    literatura: 'slovenska',
    standardizovane: false,
    zaner: 'lyrická skladba — veršovaný predslov (predspev) k prekladu evanjelia',
    forma: 'poézia — 110 dvanásťslabičných nerýmovaných veršov v staroslovienčine',
    rokVydania: '863 (prípadne krátko po tomto roku)',
    obdobie: 'stredoveká literatúra — veľkomoravské obdobie, byzantská misia',
    miestoACas: 'Veľká Morava, druhá polovica 9. storočia; skladba nemá dej, hovorí o „teraz“ misijnej práce',
    anotacia:
      'Prvá básnická skladba napísaná v staroslovienčine, ktorá uvádza preklad evanjelia. Oslavuje slovo v zrozumiteľnom jazyku a vzdelanosť ako podmienku duchovného života národa.',
    obsah: [
      'Proglas nemá dej ani postavy — je to lyrická skladba, predslov, ktorý vysvetľuje a obhajuje zmysel prekladu Svätého písma do jazyka Slovanov. Lyrickým subjektom je autor ako učiteľ a misionár, ktorý sa priamo obracia na svojich počúvajúcich. Hneď v úvodných veršoch apostrofou vyzýva Slovanov, aby počúvali slovo prichádzajúce od Boha. Slovo je tu chápané ako duchovný pokrm, ktorý vyživuje ľudské duše a posilňuje srdce aj rozum.',
      'V prvej časti autor vychádza z evanjeliového obrazu Krista ako svetla a zo starozákonných prorokov, ktorí ohlasovali príchod spásy pre všetky národy. Vyjadruje presvedčenie, že Božie slovo patrí každému, a nie iba trom vyvoleným jazykom — latine, gréčtine a hebrejčine. Skryte tak polemizuje s takzvaným trojjazyčným bludom, ktorý bránil bohoslužbe v národných jazykoch. Práve to je hlavná myšlienková línia celej skladby.',
      'V strednej časti sa myšlienka rozvíja do podoby argumentu o zrozumiteľnosti. Autor porovnáva človeka, ktorý počúva slovo v neznámom jazyku, so sochou z kameňa alebo s hluchým a slepým človekom: reč bez porozumenia je bez úžitku. Používa prirovnania z hospodárskeho života — semeno, ktoré padá do pripravenej zeme, a duša, ktorá bez písma živorí. Vzdelanie a knihy sú podmienkou, aby sa viera nestala prázdnou formou.',
      'Myšlienkový vrchol prináša obraz nahoty národov bez knihy a spojenie duchovného a mravného života s poznaním. Autor opakovane zdôrazňuje, že lepšie je rozumieť málo vo vlastnom jazyku než mnoho v cudzom. Odvoláva sa na apoštola Pavla a na jeho slová o daroch Ducha, ktoré dostávajú všetky národy. Zdôrazňuje aj slobodnú vôľu človeka: každý sa musí sám rozhodnúť, či slovo prijme.',
      'V záverečnej časti sa lyrický subjekt obracia na Slovanov s naliehavou výzvou, aby prijali písmo a knihy a tým sa zaradili medzi vzdelané a duchovne dospelé národy. Skladba vyznieva ako prosba i ako program: bez vlastného jazyka v knihách nie je možné plnohodnotne žiť ani veriť. Práve preto sa Proglas považuje nielen za prvú slovanskú básnickú skladbu, ale aj za prvý manifest práva na vlastný jazyk a vzdelanosť v našich dejinách.',
    ],
    kompozicia:
      'Jeden nerozčlenený lyrický celok 110 veršov, ktorý však má logickú stavbu: úvodná apostrofa na Slovanov, biblické zdôvodnenie (proroci, evanjelium, apoštol Pavol), argumentačná stredná časť o zrozumiteľnosti a užitočnosti slova a záverečná naliehavá výzva prijať knihy. Skladba je napísaná bezrýmovým dvanásťslabičným veršom.',
    postavy: [
      {
        meno: 'lyrický subjekt (učiteľ a misionár)',
        charakteristika:
          'Hovoriaci sa predstavuje ako ten, kto prináša Slovanom slovo a knihy. Nie je to konkrétna literárna postava, ale hlas vzdelaného duchovného pastiera, ktorý presviedča, argumentuje a prosí. Jeho tón sa pohybuje medzi slávnostnou oslavou a naliehavou výzvou.',
        rola: 'hlavna',
      },
      {
        meno: 'Slovieni (Slovania)',
        charakteristika:
          'Adresát celej skladby, oslovený už v prvom verši. Sú zobrazení ako národ, ktorý je bez knihy duchovne nahý, no má právo aj schopnosť prijať Božie slovo vo vlastnom jazyku. Ich pozdvihnutie je cieľom celého textu.',
        rola: 'hlavna',
      },
      {
        meno: 'Kristus ako svetlo',
        charakteristika:
          'Ústredný duchovný obraz skladby, prevzatý z Jánovho evanjelia. Predstavuje svetlo, ktoré prichádza pre všetky národy bez rozdielu jazyka. Slúži ako hlavný argument proti trojjazyčnému bludu.',
        rola: 'vedlajsia',
      },
      {
        meno: 'proroci a apoštol Pavol',
        charakteristika:
          'Autority, na ktoré sa autor odvoláva, aby svoj zámer zdôvodnil Písmom. Proroci ohlasovali spásu pre všetky národy, apoštol Pavol hovoril o daroch Ducha pre všetkých. Slúžia ako argumentačná opora textu.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'právo národa na Božie slovo vo vlastnom, zrozumiteľnom jazyku',
      'vzdelanosť a kniha ako podmienka duchovného života',
      'polemika s trojjazyčným bludom',
      'slovo ako duchovný pokrm a svetlo',
    ],
    motivy: [
      'svetlo a slepota, videnie a nevidenie',
      'duchovný pokrm a hlad duše',
      'semeno padajúce do zeme',
      'nahota národov bez knihy',
      'socha z kameňa ako obraz človeka bez porozumenia',
      'kniha a písmo ako dar',
    ],
    jazyk: [
      'apostrofa už v prvom verši („Slyšte, Slovieni...“) — celá skladba je oslovením národa, čím dostáva charakter verejnej výzvy, nie osobnej lyriky',
      'symbolika svetla a tmy, videnia a slepoty, prevzatá z evanjelia — poznanie a viera sú svetlo, neznalosť je slepota',
      'prirovnanie a metafora z hospodárskeho života (semeno, pokrm, nahota) — abstraktná myšlienka o vzdelaní sa sprístupní obrazom zo skúsenosti bežného človeka',
      'anafora a opakovanie kľúčových slov (slovo, duša, kniha), ktoré držia myšlienkovú líniu celej skladby',
      'rečnícka otázka a zvolanie ako prostriedky presvedčovania; text je zložený ako reč pred publikom',
      'bezrýmový dvanásťslabičný verš prevzatý z byzantskej tradície, ktorý dáva textu slávnostný, obradový rytmus',
      'biblické citáty a narážky (Jánovo evanjelium, proroci, apoštol Pavol) ako argumentačná autorita stredovekého textu',
    ],
    citaty: [
      {
        text: 'Slyšte, Slovieni, slovo, ktoré od Boha prichodí.',
        zdroj: 'úvodné verše Proglasu',
      },
    ],
    maturitneMinimum: [
      'Proglas je prvá básnická skladba v staroslovienčine a zároveň najstaršia básnická skladba našej literatúry; autorom je Konštantín (Cyril).',
      'Je to predslov (predspev) k prekladu evanjelia; má 110 nerýmovaných dvanásťslabičných veršov.',
      'Hlavnou myšlienkou je právo národa na Božie slovo a vzdelanosť vo vlastnom jazyku — ide o polemiku s trojjazyčným bludom.',
      'Do slovenčiny ho preložili Eugen Pauliny a Viliam Turčány; Turčányho prebásnenie je najznámejšie.',
      'K veľkomoravskej literatúre patria aj Moravsko-panónske legendy (Život Konštantína, Život Metoda) a Kyjevské listy.',
    ],
    ulohy: [
      {
        id: 'proglas-k1',
        typ: 'kviz',
        otazka: 'Čím je Proglas v dejinách našej literatúry významný?',
        moznosti: [
          'je prvou básnickou skladbou napísanou v staroslovienčine',
          'je prvou slovenskou drámou',
          'je prvým prozaickým románom o Veľkej Morave',
          'je prvou zbierkou svetskej ľúbostnej poézie',
        ],
        spravna: 0,
        vysvetlenie:
          'Ide o najstaršiu básnickú skladbu našej literatúry, napísanú v staroslovienčine ako predslov k prekladu evanjelia. Jej autorom je Konštantín, nazývaný aj Cyril.',
      },
      {
        id: 'proglas-k2',
        typ: 'kviz',
        otazka: 'Proti čomu Proglas polemizuje?',
        moznosti: [
          'proti trojjazyčnému bludu, podľa ktorého je bohoslužba možná len po latinsky, grécky a hebrejsky',
          'proti prekladaniu Biblie do akéhokoľvek jazyka',
          'proti zakladaniu kláštorov na Veľkej Morave',
          'proti pohanským obradom starých Slovanov',
        ],
        spravna: 0,
        vysvetlenie:
          'Trojjazyčný blud pripúšťal ako liturgické len tri jazyky. Proglas argumentuje evanjeliom a apoštolom Pavlom, že Božie slovo patrí všetkým národom bez rozdielu jazyka.',
      },
      {
        id: 'proglas-k3',
        typ: 'kviz',
        otazka: 'Akú formu má Proglas?',
        moznosti: [
          '110 nerýmovaných dvanásťslabičných veršov',
          'prózu rozdelenú na dvanásť kapitol',
          'dialóg dvoch postáv vo verši',
          'sonetový cyklus so štrnástimi veršami',
        ],
        spravna: 0,
        vysvetlenie:
          'Skladba má 110 veršov s dvanástimi slabikami a bez rýmu — tento verš prevzal autor z byzantskej tradície. Rým sa v našej poézii presadil až o stáročia neskôr.',
      },
      {
        id: 'proglas-k4',
        typ: 'kviz',
        otazka: 'Aký obraz používa autor pre národ bez vlastných kníh?',
        moznosti: [
          'obraz nahoty a duchovnej slepoty',
          'obraz zaplavenej krajiny',
          'obraz zlomeného meča',
          'obraz opustenej pevnosti',
        ],
        spravna: 0,
        vysvetlenie:
          'Autor tvrdí, že národy bez knihy sú nahé, a človeka bez porozumenia porovnáva s hluchým, slepým či so sochou z kameňa. Vzdelanie je teda podmienkou duchovného života.',
      },
      {
        id: 'proglas-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k pojmu jeho vysvetlenie.',
        pary: [
          { vlavo: 'Proglas', vpravo: 'veršovaný predslov k prekladu evanjelia, 110 veršov' },
          { vlavo: 'staroslovienčina', vpravo: 'prvý literárny jazyk Slovanov' },
          { vlavo: 'trojjazyčný blud', vpravo: 'názor, že liturgia je možná len v troch jazykoch' },
          { vlavo: 'Viliam Turčány', vpravo: 'autor najznámejšieho prebásnenia do slovenčiny' },
          { vlavo: 'Moravsko-panónske legendy', vpravo: 'Život Konštantína a Život Metoda' },
        ],
        vysvetlenie:
          'Tieto pojmy tvoria základ otázky o veľkomoravskej literatúre — treba vedieť žáner, jazyk, myšlienkový spor aj ostatné pamiatky obdobia.',
      },
      {
        id: 'proglas-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň údaje o skladbe.',
        text: [
          'Proglas napísal ',
          { medzera: 'Konštantín', napoveda: 'rehoľným menom Cyril' },
          ' v jazyku, ktorý sa nazýva ',
          { medzera: 'staroslovienčina', napoveda: 'prvý literárny jazyk Slovanov' },
          ', a skladba má ',
          { medzera: '110', napoveda: 'počet veršov' },
          ' veršov.',
        ],
        vysvetlenie:
          'Autor, jazyk a počet veršov sú tri údaje, ktoré sa pri Proglase vyžadujú najčastejšie. Skladba je predslovom k prekladu evanjelia.',
      },
      {
        id: 'proglas-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o myšlienke skladby.',
        text: [
          'Autor tvrdí, že bez knihy sú národy ',
          { medzera: 'nahé', napoveda: 'obraz duchovnej chudoby' },
          ', a obhajuje právo Slovanov počúvať Božie slovo vo vlastnom ',
          { medzera: 'jazyku', napoveda: 'zrozumiteľná reč národa' },
          '.',
        ],
        vysvetlenie:
          'Obraz nahoty bez knihy a požiadavka zrozumiteľného jazyka sú dve najcitovanejšie myšlienky Proglasu a zároveň jeho hlavný odkaz.',
      },
    ],
  },
  {
    id: 'legenda-o-svatom-svoradovi',
    nazov: 'Legenda o svätom Svoradovi a Benediktovi',
    autorId: 'maurus',
    rocnik: 1,
    druh: 'proza',
    literatura: 'slovenska',
    standardizovane: false,
    zaner: 'legenda (hagiografia)',
    forma: 'próza — krátky latinský prozaický text (Život svätých pustovníkov Svorada vyznávača a Benedikta mučeníka)',
    rokVydania: 'okolo roku 1064 (podľa niektorých zdrojov 1070)',
    obdobie: 'stredoveká literatúra — latinská tvorba na území Slovenska',
    miestoACas: 'Nitra a okolie, Zobor, kláštor svätého Hypolita a jaskyňa Skalka pri Trenčíne; prvá polovica 11. storočia',
    anotacia:
      'Najstaršia legenda spätá s územím Slovenska, ktorá opisuje asketický život dvoch pustovníkov pri Nitre. Autor ju napísal na základe svedectiev pamätníkov, ktorých osobne poznal.',
    obsah: [
      'Autor, päťkostolský biskup Maurus, v úvode vysvetľuje, prečo píše: o oboch pustovníkoch sa dozvedel ešte ako chlapec v kláštornej škole na Panónskej hore a neskôr aj priamo od Benediktovho učeníka Ondreja. Zdôrazňuje, že nezapisuje výmysly, ale to, čo počul od dôveryhodných svedkov. Tým dáva svojmu textu povahu svedectva, hoci ide o legendu s obvyklými zázračnými prvkami. Ústrednou postavou je Svorad, ktorý prišiel v čase kráľa Štefana z Poľska.',
      'Svorad vstúpil do kláštora svätého Hypolita na Zobore pri Nitre a s opátovým dovolením si vybral prísnejší pustovnícky život. Prijal rehoľné meno Andrej a odišiel do samoty, kde sa venoval modlitbe, mlčaniu a tvrdej práci. Legenda podrobne opisuje jeho krajné umŕtvovanie: v pôste sa obmedzoval na niekoľko orechov denne, v lesoch vyrubával stromy a spával v tesnom drevenom výklenku obklopenom ostrými tŕňmi a kameňmi, aby sa nemohol pohnúť. Na hlave nosil kovovú obruč so štyrmi zavesenými kameňmi, ktoré ho pri každom pohybe udierali.',
      'Jeho učeníkom sa stal Benedikt, ktorý ho napodoboval a po jeho smrti pokračoval v tom istom spôsobe života. Legenda opisuje aj zázraky, ktoré sa okolo pustovníkov odohrali — ochranu pred nebezpečenstvom a moc ich modlitby. Zvláštny výjav sa spája so Svoradovou smrťou: až keď jeho telo pripravovali na pohreb, zistili, že kovová obruč mu zarástla do tela, a tak sa naplno odhalilo, ako veľmi sa umŕtvoval. Tento motív patrí k najznámejším miestam celej legendy.',
      'Benedikt žil po učiteľovej smrti tri roky sám v jaskyni na Skalke nad Váhom pri Trenčíne. Jedného dňa ho prepadli lupiči, ktorí si mysleli, že pustovník má ukryté peniaze. Keď nič nenašli, zabili ho a jeho telo hodili do Váhu. Ostatky sa dlho nedali nájsť, no podľa legendy nad miestom, kde ležali, celý rok sedával orol, čím upozornil na Benediktovo telo.',
      'Keď telo vytiahli z vody, bolo podľa legendy neporušené, ako keby zomrel práve v tej chvíli. Oboch pustovníkov pochovali v nitrianskom kostole a pri ich hroboch sa podľa textu diali uzdravenia. V roku 1083 ich spolu so svätým Štefanom a svätým Imrichom vyhlásili za svätých — Svorada ako vyznávača a Benedikta ako mučeníka. Legenda sa uzatvára oslavou ich života ako vzoru kresťanskej dokonalosti a pokory.',
    ],
    kompozicia:
      'Krátky prozaický text s trojdielnou stavbou typickou pre legendu: úvod, v ktorom autor uvádza svoje zdroje a zdôvodňuje spísanie, ústredná časť o Svoradovom asketickom živote a smrti, a záverečná časť o Benediktovi, jeho mučeníckej smrti a o zázrakoch pri hroboch. Text je usporiadaný chronologicky a končí sa oslavným zhodnotením.',
    postavy: [
      {
        meno: 'Svorad (rehoľným menom Andrej)',
        charakteristika:
          'Pustovník poľského pôvodu, ktorý prišiel na Slovensko v čase kráľa Štefana a vstúpil do kláštora na Zobore. Zvolil si krajný asketický život s pôstom, mlčaním, prácou a sebatrýznením. Po jeho smrti sa ukázalo, že mu kovová obruč zarástla do tela.',
        rola: 'hlavna',
      },
      {
        meno: 'Benedikt',
        charakteristika:
          'Svoradov učeník, ktorý napodoboval jeho spôsob života a po smrti učiteľa žil tri roky sám na Skalke pri Trenčíne. Zabili ho lupiči, ktorí u neho hľadali peniaze, a telo hodili do Váhu. Je uctievaný ako mučeník.',
        rola: 'hlavna',
      },
      {
        meno: 'Maurus',
        charakteristika:
          'Autor legendy, päťkostolský biskup, ktorý o pustovníkoch slýchal už ako chlapec v kláštornej škole. Ako rozprávač sa v texte priznáva k svojim zdrojom a k vlastnej pamäti. Jeho hlas dáva legende povahu svedectva.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Ondrej',
        charakteristika:
          'Benediktov učeník a neskôr mních, ktorý autorovi legendy vyrozprával podrobnosti o oboch pustovníkoch. Predstavuje priamy prameň informácií. Jeho svedectvo autor výslovne uvádza ako dôkaz pravdivosti.',
        rola: 'vedlajsia',
      },
      {
        meno: 'opát Filip',
        charakteristika:
          'Predstavený kláštora svätého Hypolita na Zobore, ktorý Svoradovi dovolil odísť do pustovníckej samoty. Zastupuje kláštornú autoritu, pod ktorú asketický život patrí. Umožňuje hrdinovi urobiť rozhodujúci krok.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'asketický ideál stredovekého svätca a odriekanie sveta',
      'pokora, mlčanie a práca ako cesta k Bohu',
      'mučenícka smrť a svätosť',
      'svedectvo a pamäť ako zdroj rozprávania',
    ],
    motivy: [
      'jaskyňa a pustovnícka samota na Skalke',
      'pôst obmedzený na niekoľko orechov',
      'drevený výklenok s tŕňmi a kameňmi',
      'kovová obruč zarastená do tela',
      'lupiči a telo hodené do Váhu',
      'orol, ktorý celý rok sedáva nad ostatkami',
    ],
    jazyk: [
      'hagiografický (legendový) štýl — životopis svätca sa podáva ako vzor na napodobovanie, preto sú vlastnosti postáv idealizované a bez rozporov',
      'hyperbola pri opise askézy (niekoľko orechov na celý pôst, tŕne pri spánku, obruč s kameňmi) — nadsádzka má vyjadriť mieru svätcovej obetavosti',
      'zázračný motív (neporušené telo, orol nad ostatkami, uzdravenia pri hrobe) ako povinná zložka legendy, ktorá potvrdzuje svätosť hrdinu',
      'autorská rámcová výpoveď a odvolávanie sa na svedkov, čím sa text štylizuje ako pravdivé svedectvo, nie ako príbeh',
      'latinčina ako jazyk textu — v stredoveku znak učenosti a cirkevnej platnosti diela',
      'symbol a náboženská alegória (jaskyňa ako miesto skúšky, voda Váhu, orol ako Boží znak)',
      'pokojné, vecné vetné konštrukcie bez dejového napätia, pretože cieľom nie je vzrušiť čitateľa, ale poučiť ho',
    ],
    maturitneMinimum: [
      'Ide o najstaršiu legendu spätú s územím Slovenska; napísal ju päťkostolský biskup Maurus okolo roku 1064 po latinsky.',
      'Plný názov je Život svätých pustovníkov Svorada vyznávača a Benedikta mučeníka; Svorad prijal rehoľné meno Andrej.',
      'Legenda je hagiografický žáner: idealizovaný životopis svätca s poučným zámerom a so zázračnými prvkami.',
      'Miesta spojené s dielom: kláštor svätého Hypolita na Zobore pri Nitre a jaskyňa na Skalke nad Váhom pri Trenčíne.',
      'Obaja pustovníci boli vyhlásení za svätých v roku 1083 spolu so svätým Štefanom a svätým Imrichom.',
    ],
    ulohy: [
      {
        id: 'legenda-o-svatom-svoradovi-k1',
        typ: 'kviz',
        otazka: 'Kto je autorom legendy a v akom jazyku ju napísal?',
        moznosti: [
          'Maurus, po latinsky',
          'Konštantín, v staroslovienčine',
          'Metod, po grécky',
          'Anonym, v starej slovenčine',
        ],
        spravna: 0,
        vysvetlenie:
          'Legendu napísal päťkostolský biskup Maurus po latinsky okolo roku 1064. Latinčina bola v stredoveku jazykom učenosti a cirkevných textov.',
      },
      {
        id: 'legenda-o-svatom-svoradovi-k2',
        typ: 'kviz',
        otazka: 'Čo je to legenda ako literárny žáner?',
        moznosti: [
          'idealizovaný životopis svätca s poučným zámerom a zázračnými prvkami',
          'krátky príbeh so zvieratami a mravným poučením',
          'veršovaný príbeh o hrdinských bojoch',
          'zbierka zákonov a cirkevných predpisov',
        ],
        spravna: 0,
        vysvetlenie:
          'Legenda (hagiografia) zobrazuje svätca ako vzor na napodobovanie, preto je idealizovaná a obsahuje zázraky. Príbeh so zvieratami a poučením je bájka.',
      },
      {
        id: 'legenda-o-svatom-svoradovi-k3',
        typ: 'kviz',
        otazka: 'Čo sa podľa legendy zistilo po Svoradovej smrti?',
        moznosti: [
          'kovová obruč, ktorú nosil na hlave, mu zarástla do tela',
          'v jaskyni ukryl vzácne knihy',
          'jeho jaskyňa sa zaplnila prameňom vody',
          'zanechal písomný odkaz svojmu učeníkovi',
        ],
        spravna: 0,
        vysvetlenie:
          'Až pri príprave tela na pohreb sa ukázalo, že obruč zarástla do tela — tento motív má dokázať mieru skrytej askézy, ktorú pustovník pred svetom tajil.',
      },
      {
        id: 'legenda-o-svatom-svoradovi-k4',
        typ: 'kviz',
        otazka: 'Ako zomrel Benedikt?',
        moznosti: [
          'zabili ho lupiči a telo hodili do Váhu',
          'zomrel na hlad počas pôstu v jaskyni',
          'padol pri obrane nitrianskeho kláštora',
          'zomrel starobou v kláštore na Zobore',
        ],
        spravna: 0,
        vysvetlenie:
          'Lupiči si mysleli, že pustovník má ukryté peniaze; keď nič nenašli, zabili ho. Práve preto je Benedikt uctievaný ako mučeník, kým Svorad ako vyznávač.',
      },
      {
        id: 'legenda-o-svatom-svoradovi-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k menu alebo miestu jeho význam v legende.',
        pary: [
          { vlavo: 'Svorad', vpravo: 'pustovník, ktorý prijal rehoľné meno Andrej' },
          { vlavo: 'Benedikt', vpravo: 'učeník zabitý lupičmi, uctievaný ako mučeník' },
          { vlavo: 'Maurus', vpravo: 'päťkostolský biskup a autor legendy' },
          { vlavo: 'Zobor', vpravo: 'kláštor svätého Hypolita pri Nitre' },
          { vlavo: 'Skalka pri Trenčíne', vpravo: 'jaskyňa, v ktorej žil Benedikt po smrti učiteľa' },
        ],
        vysvetlenie:
          'Legenda spája dve postavy a dve miesta: kláštor na Zobore ako východisko a jaskyňu na Skalke ako miesto mučeníckej smrti.',
      },
      {
        id: 'legenda-o-svatom-svoradovi-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň údaje o diele.',
        text: [
          'Legendu napísal biskup ',
          { medzera: 'Maurus', napoveda: 'päťkostolský biskup' },
          ' po ',
          { medzera: 'latinsky', napoveda: 'jazyk stredovekej učenosti' },
          ' a Svorad prijal rehoľné meno ',
          { medzera: 'Andrej', napoveda: 'meno, ktoré dostal pri odchode do samoty' },
          '.',
        ],
        vysvetlenie:
          'Autor, jazyk a rehoľné meno Svorada patria k základným údajom o najstaršej legende spätej s naším územím.',
      },
      {
        id: 'legenda-o-svatom-svoradovi-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o žánri a mieste deja.',
        text: [
          'Idealizovaný životopis svätca sa nazýva ',
          { medzera: 'legenda', napoveda: 'iným slovom hagiografia' },
          ' a Benedikt žil v jaskyni na ',
          { medzera: 'Skalke', napoveda: 'miesto nad Váhom pri Trenčíne' },
          ' nad Váhom.',
        ],
        vysvetlenie:
          'Žáner legendy a miesta deja (Zobor, Skalka) sú údaje, ktoré sa pri tomto diele vyžadujú spolu s menom autora.',
      },
    ],
  },
  {
    id: 'bozska-komedia',
    nazov: 'Božská komédia',
    autorId: 'dante',
    rocnik: 1,
    druh: 'poezia',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'alegorický (filozoficko-náboženský) epos — veršovaná skladba',
    forma: 'poézia — tri časti (Peklo, Očistec, Raj), 100 spevov v tercínach',
    rokVydania: 'napísaná v rokoch 1307 – 1321, vydaná po autorovej smrti',
    obdobie: 'prechod od stredoveku k humanizmu a renesancii',
    miestoACas: 'posmrtný svet — Peklo, Očistec a Raj; symbolicky Veľký týždeň roku 1300, cesta trvá vyše týždňa',
    anotacia:
      'Veršovaná vízia putovania posmrtným svetom, v ktorej básnik prejde Pekle, Očistcom a Rajom. Cesta je zároveň alegóriou mravnej očisty človeka a obrazom celého stredovekého sveta.',
    obsah: [
      'Básnik sa uprostred života ocitne v tmavom lese, kde stratí správnu cestu. Cestu na kopec osvietený slnkom mu zatarasia tri zvieratá — pardál, lev a vlčica, ktoré predstavujú zmyslovosť, pýchu a lakomstvo. V tejto chvíli sa mu zjaví antický básnik Vergílius, ktorého poslala Beatrice, a nabídne mu, že ho prevedie posmrtným svetom. Nad bránou Pekla čítajú nápis, ktorý prichádzajúcim prikazuje zanechať všetku nádej.',
      'Peklo je opísané ako obrovská lievikovitá priepasť s deviatimi kruhmi, ktoré sa zužujú k stredu Zeme. V predpeklí zostávajú ľahostajní, v prvom kruhu nepokrstení spravodliví a antickí mudrci, v ďalších kruhoch smilníci, pažravci, lakomci a marnotratníci, hnevliví, heretici, násilníci, podvodníci a napokon zradcovia. Tresty sú zostavené podľa zásady, že trest zodpovedá vine — milenci Francesca a Paolo sú naveky zmietaní vetrom, zradcovia zamrznutí v ľade. Na dne Pekla trčí trojhlavý Lucifer, ktorý v pysku drtí Judáša, Bruta a Cassia.',
      'Po výstupe na druhú stranu Zeme sa pútnici dostanú na ostrov s horou Očistca. Tá má sedem okruhov podľa siedmich hlavných hriechov (pýcha, závisť, hnev, lenivosť, lakomstvo, obžerstvo, smilstvo) a duše sa tu trestom očisťujú, aby mohli stúpať vyššie. Anjel Dantemu na čelo vyryje sedem písmen P podľa latinského slova pre hriech a pri každom okruhu jedno zmizne. Na vrchole hory sa nachádza pozemský raj, kde Vergílius ako pohan končí svoju úlohu a odchádza. Na jeho miesto prichádza Beatrice.',
      'Beatrice vedie básnika Rajom, ktorý má podobu deviatich nebeských sfér podľa stredovekého obrazu vesmíru — Mesiac, Merkúr, Venuša, Slnko, Mars, Jupiter, Saturn, sféra stálic a krištáľové nebo. V jednotlivých sférach sa stretáva s dušami blažených, s cirkevnými učiteľmi, mučeníkmi a spravodlivými panovníkmi a vedie s nimi rozhovory o vôli, milosti, spravodlivosti a viere. Rozprávanie je čoraz viac naplnené svetlom a hudbou a obraz ustupuje filozofickej úvahe.',
      'V najvyššom nebi, v Empyreu, Beatrice odchádza na svoje miesto v ružici blažených a sprievodcom sa stáva svätý Bernard, ktorý sa modlí k Panne Márii. V záverečnom speve básnik zahliadne trojjediné svetlo Boha ako tri kruhy a v ňom podobu človeka; slová mu však už nestačia a vízia zmizne. Skladba sa uzatvára obrazom lásky, ktorá hýbe Slnkom a ostatnými hviezdami. Každá z troch častí sa symbolicky končí slovom hviezdy.',
    ],
    kompozicia:
      'Tri časti (Peklo, Očistec, Raj), spolu 100 spevov: úvodný spev a potom tri razy 33 spevov. Základom je číselná symbolika trojky a jej násobkov — tri časti, deväť kruhov Pekla, deväť nebeských sfér, trojveršové strofy (tercíny) so reťazovým rýmom aba bcb cdc. Kompozícia je stupňovitá: cesta vedie zhora nadol do stredu Zeme a potom nahor až k Bohu.',
    postavy: [
      {
        meno: 'Dante (pútnik a rozprávač)',
        charakteristika:
          'Autor sám seba stavia do úlohy pútnika, ktorý uprostred života zblúdi a musí prejsť posmrtným svetom, aby sa mravne obnovil. Prežíva strach, súcit i nadšenie a postupne dozrieva. Je zároveň postavou aj rozprávačom celej skladby.',
        rola: 'hlavna',
      },
      {
        meno: 'Vergílius',
        charakteristika:
          'Antický rímsky básnik, autor Eneidy, ktorý Danteho vedie Peklom a Očistcom. Predstavuje ľudský rozum a pozemskú múdrosť, ktorá dokáže človeka dovesť až na hranicu, ale nie do Raja. Ako pohan sa musí na vrchole Očistca vrátiť.',
        rola: 'hlavna',
      },
      {
        meno: 'Beatrice',
        charakteristika:
          'Danteho ideálna láska z reálneho života, ktorá v diele zastupuje vieru, milosť a božskú lásku. Ona vyprosí pre básnika celú cestu a sama ho vedie Rajom. Je príkladom stredovekej idealizácie ženy, ktorá sa stáva cestou k Bohu.',
        rola: 'hlavna',
      },
      {
        meno: 'Francesca da Rimini a Paolo',
        charakteristika:
          'Nešťastní milenci z druhého kruhu Pekla, zmietaní večným vetrom za hriech smilstva. Francesca vyrozpráva svoju lásku tak dojímavo, že pútnik od súcitu odpadne. Patria k najznámejším a najľudskejším epizódam celej skladby.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Lucifer',
        charakteristika:
          'Trojhlavý vládca Pekla zamrznutý v ľade na dne priepasti, ktorý v pyskoch drví troch najväčších zradcov — Judáša, Bruta a Cassia. Nie je aktívnym pokušiteľom, ale nehybným stredom zla. Jeho nehybnosť je protikladom Božej lásky, ktorá hýbe vesmírom.',
        rola: 'vedlajsia',
      },
      {
        meno: 'svätý Bernard',
        charakteristika:
          'Posledný sprievodca v najvyššom nebi, ktorý prevezme úlohu po Beatrice. Modlitbou k Panne Márii vyprosí básnikovi milosť zahliadnuť Boha. Predstavuje mystické nazeranie, ktoré presahuje rozum aj vieru v poznaní.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'cesta človeka od hriechu k mravnej očiste a k Bohu',
      'spravodlivosť a zodpovednosť za vlastné činy',
      'láska ako sila, ktorá hýbe svetom',
      'kritika súdobej spoločnosti, politiky a cirkvi',
      'vzťah rozumu a viery v poznaní',
    ],
    motivy: [
      'tmavý les a stratená cesta uprostred života',
      'pardál, lev a vlčica ako tri prekážky',
      'nápis nad bránou Pekla',
      'deväť kruhov Pekla a trest zodpovedajúci vine',
      'sedem písmen P na čele pútnika',
      'ružica blažených a trojjediné svetlo v závere',
    ],
    jazyk: [
      'alegória — celá cesta posmrtným svetom má prenesený význam ako obraz mravnej očisty človeka; aj postavy sú zástupcami pojmov (Vergílius rozum, Beatrice viera)',
      'tercína — trojveršová strofa s reťazovým rýmom aba bcb cdc, ktorá text nepretržite posúva dopredu a drží ho pohromade',
      'číselná symbolika trojky a jej násobkov (tri časti, tri razy 33 spevov, deväť kruhov, deväť sfér), ktorá vyjadruje dokonalý poriadok sveta',
      'symbol a personifikácia — zvieratá zastupujú hriechy, svetlo zastupuje poznanie, ľad zastupuje zradu ako najchladnejšie zlo',
      'kontrast troch dielov, ktorý je aj kontrastom obrazov: tma, krik a zápach Pekla proti svetlu, hudbe a mlčaniu Raja',
      'gradácia od telesných obrazov k abstraktným úvahám — čím vyššie pútnik stúpa, tým viac ustupuje opis a prevláda myšlienka',
      'použitie živého talianskeho (toskánskeho) jazyka namiesto latinčiny, čím autor otvoril cestu národným literatúram Európy',
    ],
    citaty: [
      {
        text: 'Zanechajte všetku nádej, vy, čo vstupujete.',
        zdroj: 'nápis nad bránou Pekla',
      },
    ],
    maturitneMinimum: [
      'Skladba má tri časti (Peklo, Očistec, Raj) a 100 spevov: jeden úvodný a tri razy 33; je napísaná v tercínach.',
      'Sprievodcami sú Vergílius (rozum) a Beatrice (viera a božská láska); Vergílius ako pohan nesmie vstúpiť do Raja.',
      'Dielo je napísané v talianskom jazyku, nie po latinsky — tým Dante položil základ modernej talianskej literatúry.',
      'Ide o alegorické dielo na prechode stredoveku a renesancie: stredoveká je predstava sveta, renesančný je záujem o človeka a antiku.',
      'Pôvodný názov bol Komédia (končí sa dobre); prívlastok „božská“ pridal až Giovanni Boccaccio.',
    ],
    ulohy: [
      {
        id: 'bozska-komedia-k1',
        typ: 'kviz',
        otazka: 'Z ktorých troch častí sa Božská komédia skladá?',
        moznosti: [
          'Peklo, Očistec, Raj',
          'Peklo, Nebo, Zem',
          'Zrodenie, Život, Smrť',
          'Antika, Stredovek, Renesancia',
        ],
        spravna: 0,
        vysvetlenie:
          'Cesta vedie od Pekla cez Očistec do Raja, čo zodpovedá stupňom mravnej očisty. Spolu má skladba 100 spevov — jeden úvodný a tri razy 33.',
      },
      {
        id: 'bozska-komedia-k2',
        typ: 'kviz',
        otazka: 'Koho a čo zastupuje Vergílius ako sprievodca?',
        moznosti: [
          'antického básnika a zároveň ľudský rozum',
          'anjela a zároveň Božiu milosť',
          'svätca a zároveň mučeníctvo',
          'kráľa a zároveň svetskú moc',
          ],
        spravna: 0,
        vysvetlenie:
          'Vergílius je autorom Eneidy a v alegórii predstavuje rozum, ktorý dokáže človeka dovesť len na hranicu Raja. Ďalej už vedie Beatrice ako zástupkyňa viery a milosti.',
      },
      {
        id: 'bozska-komedia-k3',
        typ: 'kviz',
        otazka: 'Čo je to tercína?',
        moznosti: [
          'trojveršová strofa s reťazovým rýmom aba bcb cdc',
          'štvorveršová strofa s obkročným rýmom',
          'šesťstopový nerýmovaný verš',
          'štrnásťveršová básnická forma',
        ],
        spravna: 0,
        vysvetlenie:
          'Reťazový rým tercíny neustále spája strofy dohromady, takže text plynie bez zastavenia. Štrnásťveršová forma je sonet, šesťstopový verš je hexameter.',
      },
      {
        id: 'bozska-komedia-k4',
        typ: 'kviz',
        otazka: 'Prečo je dielo významné z hľadiska jazyka?',
        moznosti: [
          'je napísané v živej taliančine namiesto latinčiny',
          'je napísané po grécky, aby nadviazalo na Homéra',
          'je prvým dielom napísaným v staroslovienčine',
          'strieda latinčinu a hebrejčinu vo každom speve',
        ],
        spravna: 0,
        vysvetlenie:
          'Dante zvolil živý toskánsky jazyk, hoci učené diela sa vtedy písali po latinsky. Tým položil základ talianskej literárnej normy a otvoril cestu národným literatúram.',
      },
      {
        id: 'bozska-komedia-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k prvku diela jeho alegorický význam.',
        pary: [
          { vlavo: 'tmavý les', vpravo: 'stratená správna cesta uprostred života' },
          { vlavo: 'pardál, lev a vlčica', vpravo: 'zmyslovosť, pýcha a lakomstvo' },
          { vlavo: 'Vergílius', vpravo: 'ľudský rozum a pozemská múdrosť' },
          { vlavo: 'Beatrice', vpravo: 'viera, milosť a božská láska' },
          { vlavo: 'sedem písmen P na čele', vpravo: 'sedem hlavných hriechov, ktoré sa v Očistci strácajú' },
        ],
        vysvetlenie:
          'Každý prvok skladby má prenesený význam, preto sa dielo označuje ako alegorické. Bez tohto kľúča by cesta posmrtným svetom bola iba opisom.',
      },
      {
        id: 'bozska-komedia-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň údaje o kompozícii diela.',
        text: [
          'Skladba má ',
          { medzera: '100', napoveda: 'celkový počet spevov' },
          ' spevov a je napísaná v trojveršových strofách, ktoré sa nazývajú ',
          { medzera: 'tercíny', napoveda: 'strofa s reťazovým rýmom' },
          '. Peklom a Očistcom vedie pútnika ',
          { medzera: 'Vergílius', napoveda: 'autor Eneidy' },
          '.',
        ],
        vysvetlenie:
          'Sto spevov, tercíny a dvojica sprievodcov Vergílius – Beatrice patria k údajom, ktoré treba pri Božskej komédii vedieť naisto.',
      },
      {
        id: 'bozska-komedia-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o názve a jazyku diela.',
        text: [
          'Autor svoje dielo nazval iba ',
          { medzera: 'Komédia', napoveda: 'lebo sa končí dobre' },
          ' a prívlastok „božská“ pridal až ',
          { medzera: 'Boccaccio', napoveda: 'autor Dekameronu' },
          '. Dielo je napísané po ',
          { medzera: 'taliansky', napoveda: 'nie po latinsky' },
          '.',
        ],
        vysvetlenie:
          'Komédia v stredovekom chápaní znamenala dielo so šťastným koncom. Voľba živého talianskeho jazyka je jedným z najvýznamnejších renesančných znakov diela.',
      },
    ],
  },
  {
    id: 'sonety-pre-lauru',
    nazov: 'Sonety pre Lauru',
    autorId: 'petrarca',
    rocnik: 1,
    druh: 'poezia',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'lyrická zbierka — cyklus sonetov (spevník, Canzoniere)',
    forma: 'poézia — 366 lyrických skladieb, z toho 317 sonetov; sonet má 14 veršov (dva štvorveršia a dve trojveršia)',
    rokVydania: 'vznikali v rokoch 1327 – 1374, autor ich usporiadal do zbierky Spevník (Canzoniere)',
    obdobie: 'humanizmus a renesancia — taliansky raný humanizmus',
    miestoACas: 'Avignon a Vaucluse v Provensálsku, Taliansko; roky 1327 – 1374, teda od prvého stretnutia s Laurou až po autorovu starobu',
    anotacia:
      'Cyklus sonetov o láske k žene, ktorú básnik smel obdivovať, no nikdy získať. Zbierka priniesla do európskej poézie sústredený obraz vnútorného života jednotlivca.',
    obsah: [
      'Zbierka nemá dej — je to cyklus lyrických básní, ktorých témou je jediný citový vzťah. Lyrickým subjektom je básnik sám, ktorý svoju lásku prežíva ako celoživotný stav, nie ako príbeh. Podnetom je stretnutie s Laurou v avignonskom kostole na Veľký piatok roku 1327; tento dátum sa v zbierke opakovane pripomína ako začiatok všetkého. Laura je vydaná žena, ktorú básnik nikdy nezíska, a práve táto nedosiahnuteľnosť sa stáva zdrojom celej poézie.',
      'Prvá časť zbierky (básne za Laurina života) zobrazuje lásku ako sladké utrpenie. Básnik opisuje Laurinu krásu po častiach — zlaté vlasy, oči, hlas, úsmev, chôdza — a každá podrobnosť sa stáva samostatným obrazom. Zároveň vyjadruje rozpornosť svojho stavu: horí a mrzne, hľadá samotu a bojí sa jej, chce zabudnúť a nedokáže. Tento rozpor sa prejavuje aj v myšlienkovom napätí medzi pozemskou túžbou a kresťanským svedomím, ktoré ju odsudzuje.',
      'Druhá časť (básne po Laurinej smrti v roku 1348, keď zomrela na mor) mení tón. Zo ľúbostnej lyriky sa stáva lyrika spomienky, smútku a zmierenia. Laura sa už neobjavuje ako pozemská žena, ale ako zjavenie, ktoré básnika oslovuje vo snoch a vedie ho k duchovnému pokoju. Rozpor medzi telom a dušou sa postupne vyrovnáva v prospech duše a lásky, ktorá prežije smrť.',
      'Myšlienkový vývoj celej zbierky teda vedie od zmyslového vzplanutia cez vnútorný rozpor až po nadhľad a pokoru. Posledné skladby sú modlitbou: básnik lituje rokov strávených v márnej túžbe a obracia sa k Panne Márii s prosbou o pokoj duše. Práve tento oblúk robí zo zbierky viac než súbor básní — je to obraz jedného ľudského života od mladosti po starobu.',
      'Po formálnej stránke Petrarca dovŕšil podobu sonetu, ktorý má štrnásť veršov členených na dve štvorveršia (oktáva) a dve trojveršia (sextet), pričom v prechode medzi nimi nastáva myšlienkový zlom. Tento typ sa nazýva italský alebo petrarkovský sonet. Zbierka sa stala vzorom pre celú európsku ľúbostnú poéziu a napodobovanie jej postupov dostalo názov petrarkizmus. Na Petrarcu nadviazali Shakespeare, Ronsard a v slovenskej literatúre napríklad Ján Kollár v Slávy dcere.',
    ],
    kompozicia:
      'Zbierka (Spevník) má 366 skladieb usporiadaných do dvoch častí: básne za Laurina života a básne po jej smrti. Prevažujú sonety (317), ďalej sú v nej kancóny, sextíny, balady a madrigaly. Sonet má 14 veršov: dve štvorveršia a dve trojveršia, pričom medzi oktávou a sextetom nastáva myšlienkový zlom (obrat).',
    postavy: [
      {
        meno: 'lyrický subjekt (básnik)',
        charakteristika:
          'Hovoriaci je samotný básnik, ktorý sa vyznáva zo svojho citu a zároveň ho analyzuje. Jeho vnútro je rozorvané medzi zmyslovou túžbou a kresťanským svedomím. V priebehu zbierky dozrieva od vzplanutia k pokore a zmiereniu.',
        rola: 'hlavna',
      },
      {
        meno: 'Laura',
        charakteristika:
          'Ideálna, no reálna žena, ktorú básnik prvý raz zbadal v avignonskom kostole na Veľký piatok roku 1327. Je vydaná a nedosiahnuteľná, čím sa stáva večným predmetom obdivu. Po smrti sa premieňa na duchovné zjavenie, ktoré básnika vedie k Bohu.',
        rola: 'hlavna',
      },
      {
        meno: 'Laurina krása ako obraz',
        charakteristika:
          'Zlaté vlasy, oči, hlas a úsmev sú v zbierke opísané tak podrobne, že fungujú takmer ako samostatné motívy. Vďaka nim vstúpil do európskej poézie postup rozloženia ženskej krásy na jednotlivé obrazy. Táto obraznosť sa stala ustáleným repertoárom petrarkizmu.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Panna Mária',
        charakteristika:
          'Adresátka záverečnej skladby zbierky, ku ktorej sa básnik obracia s prosbou o pokoj duše. Uzatvára myšlienkový oblúk od pozemskej lásky k láske duchovnej. Predstavuje zmierenie, ku ktorému lyrický subjekt dospeje.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'nedosiahnuteľná láska ako celoživotný cit',
      'rozpor medzi zmyslovou túžbou a kresťanským svedomím',
      'plynutie času, staroba a smrť',
      'krása ako hodnota a zdroj poznania',
      'vnútorný život jednotlivca ako predmet poézie',
    ],
    motivy: [
      'prvé stretnutie v kostole na Veľký piatok 1327',
      'Laurine zlaté vlasy a oči',
      'láska ako oheň a zároveň ľad',
      'samota a príroda ako dôverník citu',
      'Laurina smrť na mor v roku 1348',
      'modlitba k Panne Márii v závere zbierky',
    ],
    jazyk: [
      'sonet — štrnásťveršová forma z dvoch štvorverší a dvoch trojverší, v ktorej sa myšlienka najprv rozvinie a po zlome medzi oktávou a sextetom sa uzavrie alebo obráti',
      'oxymoron a antitéza („ľadový oheň“, horím a mrznem) — protikladné spojenia presne vyjadrujú rozpornosť ľúbostného citu',
      'rozvinuté metafory a prirovnania (láska ako oheň, plavba, zranenie), ktoré sa v celej zbierke opakujú ako ustálený obrazný systém',
      'apostrofa a personifikácia — básnik oslovuje Lauru, lásku, svoje oči, rieku i vietor, takže krajina sa stáva účastníkom citu',
      'hyperbola pri opise Laurinej krásy a vlastného utrpenia, ktorá zdôrazňuje výnimočnosť zážitku',
      'anafora a paralelizmus vo stavbe strof, ktoré dávajú sonetu vyvážený, takmer hudobný rytmus',
      'petrarkizmus — samotný súbor týchto postupov sa stal vzorom, ktorý v Európe napodobovali celé generácie básnikov',
    ],
    maturitneMinimum: [
      'Zbierka sa pôvodne nazýva Spevník (Canzoniere) a má 366 skladieb, z toho 317 sonetov; vznikala celé desaťročia.',
      'Sonet má 14 veršov: dve štvorveršia (oktáva) a dve trojveršia (sextet), medzi ktorými nastáva myšlienkový zlom.',
      'Zbierka sa delí na básne za Laurina života a básne po jej smrti (Laura zomrela na mor v roku 1348).',
      'Petrarca je považovaný za zakladateľa humanizmu a za prvého moderného lyrika; napodobovanie jeho štýlu sa nazýva petrarkizmus.',
      'Sonet po ňom prevzali Shakespeare (anglický typ so záverečným dvojverším), Ronsard a u nás Ján Kollár.',
    ],
    ulohy: [
      {
        id: 'sonety-pre-lauru-k1',
        typ: 'kviz',
        otazka: 'Koľko veršov má sonet a ako sú členené?',
        moznosti: [
          '14 veršov — dve štvorveršia a dve trojveršia',
          '12 veršov — tri štvorveršia',
          '16 veršov — štyri štvorveršia',
          '10 veršov — dve päťveršia',
        ],
        spravna: 0,
        vysvetlenie:
          'Italský (petrarkovský) sonet má oktávu z dvoch štvorverší a sextet z dvoch trojverší. Medzi nimi nastáva myšlienkový zlom, ktorý je pre túto formu podstatný.',
      },
      {
        id: 'sonety-pre-lauru-k2',
        typ: 'kviz',
        otazka: 'Kto bola Laura?',
        moznosti: [
          'vydaná žena, ktorú básnik obdivoval, no nikdy nezískal',
          'básnikova manželka a matka jeho detí',
          'antická bohyňa lásky',
          'vymyslená postava bez reálneho predobrazu',
        ],
        spravna: 0,
        vysvetlenie:
          'Petrarca ju podľa zbierky prvý raz zbadal v avignonskom kostole v roku 1327. Práve nedosiahnuteľnosť tejto lásky je zdrojom napätia celej zbierky.',
      },
      {
        id: 'sonety-pre-lauru-k3',
        typ: 'kviz',
        otazka: 'Ako sa zmení tón zbierky po Laurinej smrti?',
        moznosti: [
          'z ľúbostnej lyriky sa stáva lyrika spomienky, smútku a duchovného zmierenia',
          'básnik prestane písať o láske a venuje sa politickej satire',
          'zbierka prechádza do epického rozprávania o jej rodine',
          'tón sa nemení, básne pokračujú rovnako ako predtým',
        ],
        spravna: 0,
        vysvetlenie:
          'Laura sa po smrti stáva duchovným zjavením, ktoré básnika vedie k pokoju. Zbierka sa uzatvára modlitbou k Panne Márii, čím sa oblúk od pozemskej k duchovnej láske dovŕši.',
      },
      {
        id: 'sonety-pre-lauru-k4',
        typ: 'kviz',
        otazka: 'Čo označuje pojem petrarkizmus?',
        moznosti: [
          'napodobovanie Petrarcových básnických postupov v európskej ľúbostnej poézii',
          'filozofický spor o nesmrteľnosti duše',
          'talianske hnutie za používanie latinčiny v poézii',
          'zvláštny typ stredovekej legendy o svätcoch',
        ],
        spravna: 0,
        vysvetlenie:
          'Petrarkizmus je prebratie celého repertoáru obrazov a postupov: sonetová forma, oxymoron, rozložený opis krásy a nedosiahnuteľná milovaná žena. Napodobovali ho generácie básnikov v celej Európe.',
      },
      {
        id: 'sonety-pre-lauru-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k pojmu jeho vysvetlenie.',
        pary: [
          { vlavo: 'Canzoniere (Spevník)', vpravo: 'názov celej zbierky s 366 skladbami' },
          { vlavo: 'oktáva', vpravo: 'prvé dve štvorveršia sonetu' },
          { vlavo: 'sextet', vpravo: 'dve trojveršia, v ktorých sa myšlienka uzatvára' },
          { vlavo: 'oxymoron', vpravo: 'protikladné spojenie typu „ľadový oheň“' },
          { vlavo: 'petrarkizmus', vpravo: 'napodobovanie Petrarcovho štýlu v Európe' },
        ],
        vysvetlenie:
          'Pri tejto zbierke sa na maturite vyžaduje najmä teória sonetu a pojem petrarkizmus, pretože obidve veci ovplyvnili celú európsku lyriku.',
      },
      {
        id: 'sonety-pre-lauru-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň údaje o zbierke.',
        text: [
          'Zbierka sa pôvodne nazýva ',
          { medzera: 'Spevník', napoveda: 'po taliansky Canzoniere' },
          ' a obsahuje ',
          { medzera: '366', napoveda: 'počet skladieb, takmer ako dní v roku' },
          ' skladieb. Milovaná žena sa menuje ',
          { medzera: 'Laura', napoveda: 'básnik ju zbadal v avignonskom kostole' },
          '.',
        ],
        vysvetlenie:
          'Názov Spevník, počet 366 skladieb a meno Laura patria k základným údajom, ktoré sa pri Petrarcovi vyžadujú.',
      },
      {
        id: 'sonety-pre-lauru-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o forme a obraznosti.',
        text: [
          'Sonet má ',
          { medzera: '14', napoveda: 'počet veršov' },
          ' veršov a spojenie „horím a mrznem“ je príkladom ',
          { medzera: 'oxymoronu', napoveda: 'spojenie dvoch protikladov' },
          '.',
        ],
        vysvetlenie:
          'Oxymoron je najtypickejším Petrarcovým prostriedkom, pretože presne vystihuje rozpornosť lásky, ktorá prináša radosť aj bolesť zároveň.',
      },
    ],
  },
  {
    id: 'don-quijote',
    nazov: 'Dômyselný rytier don Quijote de la Mancha',
    autorId: 'cervantes',
    rocnik: 1,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'parodický rytiersky román (považovaný za prvý moderný román)',
    forma: 'próza — dva diely členené na kapitoly, s vloženými epizódami',
    rokVydania: 'prvý diel 1605, druhý diel 1615',
    obdobie: 'renesancia — španielsky zlatý vek',
    miestoACas: 'Španielsko, najmä kraj La Mancha, Sierra Morena a Barcelona; začiatok 17. storočia',
    anotacia:
      'Román o zchudnutom šľachticovi, ktorý sa z čítania rytierskych románov pomätie a vydá sa do sveta konať rytierske činy. Paródia na rytiersku literatúru, z ktorej vyrástol prvý moderný román.',
    obsah: [
      'Zemianský šľachtic Alonso Quijano z kraja La Mancha prečíta toľko rytierskych románov, že stratí súdnosť a uveri, že svet ozaj funguje podľa ich pravidiel. Nazve sa donom Quijotom, vytiahne z komory starú zbroj po pradedoch, zmajstruje si prilbu z kartónu a svojho vychudnutého koňa pomenuje Rocinante. Za dámu svojho srdca si vyberie obyčajnú dedinské dievča Aldonzu a nazve ju Dulcinea z Tobosa. Vydá sa na cestu, dá sa v krčme, ktorú považuje za hrad, „pasovať“ za rytiera a po prvých bitkách ho dovezú domov na osliku.',
      'Na druhú výpravu si vezme ako zbrojnoša susedného sedláka Sancha Panzu a nasľubuje mu, že mu vydobyje ostrov, ktorému bude vládnuť. Nasleduje rad slávnych epizód: veterné mlyny, v ktorých vidí obrov a rúti sa proti nim, stádo oviec, ktoré pokladá za dve nepriateľské armády, holič s medeným lavórom na hlave, v ktorom vidí zázračnú prilbu, a oslobodenie galejníkov, ktorí sa svojmu vysloboditeľovi vysmejú a ukameňujú ho. Hrdina pokaždé prehrá, no svoje prehry vysvetľuje kúzlami nepriateľských čarodejníkov.',
      'Sancho Panza je pritom presným protikladom svojho pána — je prízemný, hovorí v prísloviach, myslí na jedlo a na výhody, ale zostáva svojmu pánovi verný. V Sierra Morene don Quijote koná pokánie z lásky k Dulcinei a Sancho jej má doniesť list. Aby ho dostali domov, farár a barbier z jeho dediny vymyslia lesť a odvezú ho v klietke ako začarovaného. Prvý diel sa končí jeho návratom domov.',
      'V druhom diele sa obaja vydajú na tretiu výpravu a zisťujú, že sú už slávni, pretože o ich príhodách vyšla kniha. Vojvodský pár si z nich robí krutú zábavu: pripravuje im vymyslené dobrodružstvá a Sancha naozaj vymenuje za správcu „ostrova“ Baratarie, kde sa zbrojnoš ukáže ako rozumný a spravodlivý sudca, no správy sa rád vzdá. Don Quijote medzitým prehrá rozhodujúci zápas v Barcelone s rytierom Bielej Luny, ktorým je v skutočnosti jeho spoluobčan bakalár Carrasco. Podľa podmienok zápasu sa musí vrátiť domov a na rok zanechať rytierstvo.',
      'Doma don Quijote ochorie a po horúčke sa mu vráti rozum. Vyhlási, že rytierske romány sú hlúposť, vysmeje vlastné bláznenie, urobí závet a ako Alonso Quijano Dobrý pokojne umiera. Sancho a rodina ho oplakávajú a práve v tejto chvíli čitateľ cíti, že s jeho rozumom zomrel aj kus krásy a ideálu. Autor uzatvára knihu prehlásením, že jeho zámerom bolo zhodiť rytierske romány — dielo však presiahlo paródiu a stalo sa obrazom večného rozporu medzi ideálom a skutočnosťou.',
    ],
    kompozicia:
      'Dva diely rozdelené na kapitoly, kompozične držané tromi výpravami hrdinu (dve v prvom diele, tretia v druhom). Do hlavného deja sú vložené samostatné epizódy a poviedky, takže román má reťazovú, putovaciu stavbu. Druhý diel pracuje s tým, že postavy poznajú knihu o sebe, čím vzniká hra literatúry o literatúre.',
    postavy: [
      {
        meno: 'don Quijote (Alonso Quijano)',
        charakteristika:
          'Zchudnutý zemianský šľachtic, ktorý sa z čítania rytierskych románov pomätie a vydá sa konať rytierske činy v nepatričnom svete. Je smiešny svojou nepraktickosťou, ale obdivuhodný svojou vernosťou ideálu spravodlivosti. Pred smrťou sa mu vráti rozum a svoje bláznenie odvolá.',
        rola: 'hlavna',
      },
      {
        meno: 'Sancho Panza',
        charakteristika:
          'Sedliak, ktorý sa stane zbrojnošom za sľub vlády nad ostrovom; je prízemný, prakticky založený a hovorí v prísloviach. Predstavuje zdravý rozum a skutočnosť, no postupne si osvojí aj čosi z pánových ideálov. Ako správca Baratarie sa ukáže ako spravodlivý sudca.',
        rola: 'hlavna',
      },
      {
        meno: 'Dulcinea z Tobosa (Aldonza)',
        charakteristika:
          'Obyčajné dedinské dievča, ktoré si hrdina vyberie za dámu svojho srdca a povýši ho na ideál krásy. V skutočnosti o ňom nič nevie a v románe sa nikdy priamo neobjaví. Je čistým dôkazom toho, že hrdina svoj svet nevidí, ale si ho vytvára.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Rocinante',
        charakteristika:
          'Starý vychudnutý kôň, ktorý má byť podľa rytierskej tradície hrdinovým vznešeným bojovým žrebcom. Jeho žalostný stav je stálym komickým kontrastom k pánovým vysokým rečiam. Patrí k najznámejším dvojiciam pán a kôň v literatúre.',
        rola: 'vedlajsia',
      },
      {
        meno: 'bakalár Sansón Carrasco',
        charakteristika:
          'Vzdelaný spoluobčan, ktorý sa prezlečie za rytiera Bielej Luny a porazí dona Quijota v Barcelone. Chce ho tým dostať domov a vyliečiť. Jeho dobrý zámer však hrdinu zlomí a privedie k smrti.',
        rola: 'vedlajsia',
      },
      {
        meno: 'farár a barbier',
        charakteristika:
          'Susedia z hrdinovej dediny, ktorí mu spálili knihy a vymysleli lesť s klietkou, aby ho dostali domov. Zastupujú rozumný, no bezcitný pohľad okolia. Ich starostlivosť je zároveň dohľadom a väzením.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'rozpor medzi ideálom a skutočnosťou',
      'paródia na rytierske romány a na literárne vzory vôbec',
      'ilúzia a šialenstvo ako iný spôsob videnia sveta',
      'priateľstvo dvoch protikladných ľudí',
      'kritika španielskej spoločnosti a jej pokleslého rytierstva',
    ],
    motivy: [
      'boj s veternými mlynmi',
      'stádo oviec ako dve armády',
      'holičov lavór ako zázračná prilba',
      'vychudnutý kôň Rocinante',
      'oslobodení galejníci, ktorí sa hrdinovi vysmejú',
      'klietka, v ktorej hrdinu odvezú domov',
    ],
    jazyk: [
      'paródia — dielo napodobuje jazyk a schémy rytierskych románov (vznešené oslovenia, výzvy na dvojboj, sľuby dáme), aby ich zosmiešnilo práve ich vlastnými prostriedkami',
      'komický kontrast dvoch postáv — vznešená, knižná reč dona Quijota proti ľudovej, príslovečnej reči Sancha Panzu; tento rozdiel nesie väčšinu humoru knihy',
      'irónia a humor situácie, keď sa vysoké rytierske gesto zrazí s prozaickou skutočnosťou (mlyny, ovce, krčma ako hrad)',
      'dialóg ako hlavný prostriedok charakteristiky; obe hlavné postavy sa vytvárajú takmer výhradne tým, ako spolu hovoria',
      'rámcová a vsuvková kompozícia — do hlavného deja sú vsunuté samostatné poviedky, ktoré dielu dávajú šírku obrazu spoločnosti',
      'hra s literárnou fikciou — autor sa štylizuje ako vydavateľ nájdeného arabského rukopisu a v druhom diele postavy vedia, že o nich vyšla kniha',
      'ľudová frazeológia a príslovia v Sanchovej reči, ktoré do knihy vnášajú hlas obyčajného človeka',
    ],
    maturitneMinimum: [
      'Dielo vyšlo v dvoch dieloch (1605 a 1615) a považuje sa za prvý moderný román európskej literatúry.',
      'Pôvodným zámerom bola paródia na rytierske romány, dielo však prerástlo v obraz rozporu medzi ideálom a skutočnosťou.',
      'Don Quijote a Sancho Panza sú klasická literárna dvojica postavená na kontraste ideálu a prízemnosti (idealista a realista).',
      'Z diela pochádza označenie „donquijotstvo“ pre boj za nedosiahnuteľný ideál a spojenie „boj s veternými mlynmi“.',
      'Na konci sa hrdinovi vráti rozum, rytierstvo odvolá a zomiera ako Alonso Quijano Dobrý.',
    ],
    ulohy: [
      {
        id: 'don-quijote-k1',
        typ: 'kviz',
        otazka: 'Čo bolo pôvodným zámerom autora?',
        moznosti: [
          'zosmiešniť rytierske romány, ktoré boli vtedy veľmi populárne',
          'napísať pravdivú kroniku španielskych vojen',
          'obhájiť rytierske ideály proti novej dobe',
          'vytvoriť náboženskú alegóriu o ceste duše',
        ],
        spravna: 0,
        vysvetlenie:
          'Autor v závere sám hovorí, že chcel zhodiť rytierske romány. Dielo však paródiu presiahlo a stalo sa obrazom večného rozporu medzi ideálom a skutočnosťou.',
      },
      {
        id: 'don-quijote-k2',
        typ: 'kviz',
        otazka: 'Čo vidí don Quijote vo veterných mlynoch?',
        moznosti: [
          'obrov, s ktorými sa musí pustiť do boja',
          'začarovaný hrad svojej dámy',
          'nepriateľské vojsko galejníkov',
          'zázračnú prilbu slávneho rytiera',
        ],
        spravna: 0,
        vysvetlenie:
          'Epizóda s mlynmi je najznámejším obrazom celého románu a dala vznik ustálenému spojeniu „boj s veternými mlynmi“, teda boj proti neexistujúcemu alebo neprekonateľnému protivníkovi.',
      },
      {
        id: 'don-quijote-k3',
        typ: 'kviz',
        otazka: 'Čím je Sancho Panza protikladom svojho pána?',
        moznosti: [
          'je prízemný, praktický a hovorí v prísloviach',
          'je vzdelanejší a číta ešte viac rytierskych románov',
          'je šľachtického pôvodu a pohŕda sedliakmi',
          'nikdy so svojím pánom nehovorí',
        ],
        spravna: 0,
        vysvetlenie:
          'Sancho zastupuje zdravý rozum, telo a skutočnosť, kým don Quijote ducha a ideál. Práve na tomto kontraste je postavená väčšina humoru aj myšlienky diela.',
      },
      {
        id: 'don-quijote-k4',
        typ: 'kviz',
        otazka: 'Ako román končí?',
        moznosti: [
          'hrdinovi sa vráti rozum, rytierstvo odvolá a zomiera ako Alonso Quijano Dobrý',
          'don Quijote zvíťazí nad rytierom Bielej Luny a stane sa slávnym',
          'Sancho Panza zostane navždy vládcom ostrova Barataria',
          'don Quijote sa ožení s Dulcineou z Tobosa',
        ],
        spravna: 0,
        vysvetlenie:
          'Po prehre v Barcelone sa hrdina musí vrátiť domov, ochorie a po horúčke vystrezvie. Práve to je najsmutnejšia časť knihy — so stratou blúdenia zmizne aj ideál.',
      },
      {
        id: 'don-quijote-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k menu alebo pojmu jeho význam v románe.',
        pary: [
          { vlavo: 'Rocinante', vpravo: 'starý vychudnutý kôň hlavnej postavy' },
          { vlavo: 'Dulcinea z Tobosa', vpravo: 'dedinské dievča povýšené na dámu srdca' },
          { vlavo: 'Sancho Panza', vpravo: 'prízemný zbrojnoš hovoriaci v prísloviach' },
          { vlavo: 'rytier Bielej Luny', vpravo: 'prezlečený bakalár, ktorý hrdinu porazí' },
          { vlavo: 'Barataria', vpravo: '„ostrov“, ktorý Sancho spravuje ako sudca' },
        ],
        vysvetlenie:
          'Mená v románe sú súčasťou paródie: vznešene znejúce pomenovania označujú v skutočnosti chudobného koňa, sedliacke dievča a vymyslený ostrov.',
      },
      {
        id: 'don-quijote-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň údaje o hlavných postavách.',
        text: [
          'Hlavný hrdina si za dámu svojho srdca vyberie dievča a nazve ju ',
          { medzera: 'Dulcinea', napoveda: 'dáma z Tobosa' },
          ', jeho koňa pomenuje ',
          { medzera: 'Rocinante', napoveda: 'starý vychudnutý kôň' },
          ' a zbrojnošom sa mu stane sedliak ',
          { medzera: 'Sancho Panza', napoveda: 'hovorí v prísloviach' },
          '.',
        ],
        vysvetlenie:
          'Dulcinea, Rocinante a Sancho Panza tvoria trojicu, na ktorej stojí celá paródia na rytiersky román.',
      },
      {
        id: 'don-quijote-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o význame diela.',
        text: [
          'Román vyšiel v dvoch dieloch v rokoch ',
          { medzera: '1605', napoveda: 'prvý diel' },
          ' a 1615 a považuje sa za prvý moderný ',
          { medzera: 'román', napoveda: 'rozsiahly prozaický epický žáner' },
          ' európskej literatúry.',
        ],
        vysvetlenie:
          'Dielo prináša to, čo je pre moderný román podstatné: vnútorne zložitú postavu, ktorá sa mení, a svet zobrazený z viacerých pohľadov naraz.',
      },
    ],
  },
  {
    id: 'hamlet',
    nazov: 'Hamlet',
    autorId: 'shakespeare',
    rocnik: 1,
    druh: 'drama',
    literatura: 'svetova',
    standardizovane: true,
    zaner: 'tragédia',
    forma: 'dráma — päť dejstiev, blankvers (nerýmovaný päťstopový jamb) striedaný prózou',
    rokVydania: 'okolo roku 1601',
    obdobie: 'renesancia — anglická (elizabetínska) dráma',
    miestoACas: 'Dánsko, kráľovský hrad Elsinor (Kronborg) a jeho okolie; neurčená minulosť, dej trvá niekoľko mesiacov',
    anotacia:
      'Tragédia o dánskom princovi, ktorý sa od zjavenia otcovho duchu dozvie o vražde a musí sa rozhodnúť, ako a či vôbec konať. Najznámejšia dráma o váhaní, poznaní a cene pomsty.',
    obsah: [
      'Na hradbách Elsinoru sa už niekoľko nocí zjavuje duch mŕtveho dánskeho kráľa. Jeho syn, princ Hamlet, sa práve vrátil zo štúdií na pohreb otca a je zdrvený tým, že jeho matka Gertrúda sa necelý mesiac po smrti manžela vydala za jeho brata Claudia, ktorý sa stal kráľom. Duch Hamletovi prezradí, že ho Claudius zavraždil tak, že mu do ucha nalial jed, a žiada pomstu. Hamlet prisahá, že otca pomstí, no zároveň si nie je istý, či zjaveniu môže veriť.',
      'Aby získal čas a skryl svoje zámery, začne Hamlet predstierať šialenstvo. Claudius ho dá sledovať radcom Poloniom a Hamletovými bývalými spolužiakmi Rosencrantzom a Guildensternom. Princ pritom odmieta Poloniovu dcéru Oféliu, ktorú miluje, a tvrdo ju ponižuje. Keď na hrad prídu potulní herci, Hamlet ich požiada, aby zahrali hru o vražde vladára presne takým spôsobom, aký mu opísal duch. Claudius pri scéne vzruší a odbehne z hľadiska, čím sa Hamlet definitívne presvedčí o jeho vine.',
      'V rozhovore s matkou Hamlet zabije Polonia, ktorý za oponou odpočúva, pretože ho pomýli s kráľom. Claudius ho pod záminkou posolstva pošle do Anglicka so sprievodným listom, ktorý žiada princovu smrť; Hamlet list objaví, vymení ho a Rosencrantz s Guildensternom idú namiesto neho na smrť. Zatiaľ sa Ofélia po smrti otca a po Hamletovom odmietnutí pomätie, spieva zmätené piesne a nakoniec sa utopí. Hamlet sa vracia a na cintoríne pri jej hrobe rozmýšľa nad lebkou šaša Yoricka o pominuteľnosti človeka.',
      'Claudius využije hnev Oféliinho brata Laertesa a nahovorí ho na súboj s otráveným hrotom kordu; pre istotu pripraví aj otrávený nápoj. V šermiarskom zápase Laertes Hamleta zraní, zbrane sa však v boji vymenia a Hamlet zraní jeho tým istým otráveným kordom. Umierajúci Laertes prezradí, kto všetko naplánoval. Gertrúda si medzitým pripije z otráveného pohára určeného synovi a zomiera.',
      'Hamlet ešte stihne prebodnúť Claudia a donútiť ho vypiť zvyšok jedu, a tým otca pomstí. Sám umiera na jeho otrávenú ranu a svojho priateľa Horacia zaväzuje, aby celý príbeh vyrozprával svetu. Na hrad práve prichádza norsky princ Fortinbras, ktorému Hamlet ešte pred smrťou odkáže dánsky trón. Tragédia sa končí hromadou mŕtvych v tronnej sále a Fortinbrasovým príkazom, aby Hamleta pochovali s vojenskými poctami.',
    ],
    kompozicia:
      'Päť dejstiev s klasickou dramatickou stavbou: expozícia (zjavenie duchu), zápletka (prísaha pomsty a predstierané šialenstvo), vrchol (scéna s hercami a zabitie Polonia), peripetia (cesta do Anglicka, Oféliina smrť) a katastrofa (šermiarsky súboj a smrť všetkých hlavných postáv). Dielo pracuje s vloženou hrou v hre a s paralelnými líniami pomsty (Hamlet, Laertes, Fortinbras).',
    postavy: [
      {
        meno: 'Hamlet',
        charakteristika:
          'Dánsky princ, vzdelaný, hĺbavý a mravne nekompromisný mladý muž, ktorý sa zo študenta stane mstiteľom. Váha nie zo zbabelosti, ale preto, že si chce byť istý pravdou a poznať dôsledky svojho konania. Pomsta sa mu napokon podarí, ale za cenu vlastného života a života takmer všetkých blízkych.',
        rola: 'hlavna',
      },
      {
        meno: 'Claudius',
        charakteristika:
          'Hamletov strýko, ktorý zavraždil vlastného brata, zmocnil sa trónu a oženil sa s vdovou po ňom. Je obratný politik, ktorý koná skryto a cudzími rukami. Napriek zjavným výčitkám svedomia neprestane pred ničím, až kým ho Hamlet nezabije.',
        rola: 'hlavna',
      },
      {
        meno: 'Gertrúda',
        charakteristika:
          'Hamletova matka a dánska kráľovná, ktorá sa krátko po smrti manžela vydá za jeho brata. Nie je jasne usvedčená z účasti na vražde, ale jej ľahkosť a poddajnosť sú pre syna hlbokou ranou. Zomiera omylom, keď si pripije z pohára otráveného pre Hamleta.',
        rola: 'hlavna',
      },
      {
        meno: 'Ofélia',
        charakteristika:
          'Poloniova dcéra, ktorá Hamleta miluje, no je otcom a kráľom využitá ako nástroj sledovania. Po Hamletovom ponižovaní a po smrti otca sa pomätie a utopí sa. Predstavuje nevinnú obeť mocenskej hry, do ktorej nikdy nechcela vstúpiť.',
        rola: 'hlavna',
      },
      {
        meno: 'Polonius',
        charakteristika:
          'Kráľovský radca, ktorý sa rád predvádza dlhými rečami a intrigami, mocnému vždy prisvedčí. Odpočúva Hamleta za oponou a princ ho v matkinej komnate omylom prebodne. Jeho smrť rozpúta druhú líniu pomsty — Laertesovu.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Horacio',
        charakteristika:
          'Hamletov spolužiak a jediný celkom verný priateľ, rozvážny a čestný. Je svedkom zjavenia duchu aj záverečnej katastrofy. Hamlet mu pred smrťou ukladá, aby celý príbeh pravdivo vyrozprával, čím je zachránená pamäť o udalostiach.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'pomsta a otázka, či ju možno vykonať bez straty vlastnej mravnosti',
      'váhanie a rozpor medzi poznaním a činom',
      'moc, zrada a rozvrat v štáte',
      'pominuteľnosť človeka a strach z neznámeho po smrti',
      'predstieranie, maska a hľadanie pravdy',
    ],
    motivy: [
      'zjavenie duchu na hradbách Elsinoru',
      'jed nalitý do ucha',
      'predstierané šialenstvo',
      'hra v hre — predstavenie potulných hercov',
      'Oféliino pomätenie a utopenie',
      'lebka šaša Yoricka na cintoríne',
      'otrávený hrot kordu a otrávený pohár',
    ],
    jazyk: [
      'blankvers — nerýmovaný päťstopový jamb, ktorý dáva reči vznešený rytmus, a pritom zostáva blízky prirozenej vete; v prozaických pasážach hovoria nižšie postavy alebo „šialený“ Hamlet',
      'monológ a najmä vnútorný monológ („Byť či nebyť“) — postava pred publikom premýšľa nahlas, čím sa do drámy dostáva psychológia a pochybnosť',
      'hra v hre (predstavenie hercov) — vložená scéna slúži ako pasť na svedomie vinníka a zároveň ako úvaha o tom, že divadlo odhaľuje pravdu',
      'dvojznačná reč a slovné hračky, ktorými Hamlet pod maskou šialenstva hovorí pravdu tak, že mu ju nikto nemôže dokázať',
      'metafora a symbol (otrava a hniloba ako obraz rozvráteného štátu, lebka ako obraz pominuteľnosti)',
      'kontrast a paralelné dejové línie troch synov, ktorí majú pomstiť otca (Hamlet, Laertes, Fortinbras) — ukazujú tri možné spôsoby konania',
      'tragická irónia — otrávený pohár určený Hamletovi vypije jeho matka a Laertes zomiera na vlastnú otrávenú zbraň',
    ],
    citaty: [
      {
        text: 'Byť či nebyť — to je otázka.',
        zdroj: 'Hamlet, úvod najznámejšieho monológu',
      },
      {
        text: 'Nie je všetko v poriadku v štáte dánskom.',
        zdroj: 'Marcellus na hradbách Elsinoru (ustálená podoba citátu)',
      },
    ],
    maturitneMinimum: [
      'Hamlet vznikol okolo roku 1601; má päť dejstiev a je napísaný v blankverse, teda v nerýmovanom päťstopovom jambe.',
      'Hlavným konfliktom nie je sama pomsta, ale Hamletovo váhanie — rozpor medzi poznaním pravdy a schopnosťou konať.',
      'Najznámejší je vnútorný monológ „Byť či nebyť“, v ktorom hrdina rozmýšľa o živote, smrti a strachu z neznáma.',
      'Shakespeare využíva postup hra v hre: predstavenie potulných hercov má usvedčiť Claudia z vraždy.',
      'Na rozdiel od antickej tragédie tu nie je dodržaná jednota miesta a času a hrdina nie je vedený osudom, ale vlastným rozhodovaním — to je renesančný znak.',
    ],
    ulohy: [
      {
        id: 'hamlet-k1',
        typ: 'kviz',
        otazka: 'Ako sa Hamlet dozvie o vražde svojho otca?',
        moznosti: [
          'od otcovho duchu, ktorý sa mu zjaví na hradbách Elsinoru',
          'z listu, ktorý objaví na ceste do Anglicka',
          'z priznania kráľovnej Gertrúdy',
          'od potulných hercov, ktorí prichádzajú na hrad',
        ],
        spravna: 0,
        vysvetlenie:
          'Duch mu prezradí, že ho Claudius otrávil jedom nalitým do ucha, a žiada pomstu. Hamlet však zjaveniu nechce naslepo veriť, a preto si pravdu overuje hrou v hre.',
      },
      {
        id: 'hamlet-k2',
        typ: 'kviz',
        otazka: 'Načo Hamlet použije predstavenie potulných hercov?',
        moznosti: [
          'aby Claudiovou reakciou overil jeho vinu',
          'aby zabavil kráľovnú a odvrátil pozornosť od Ofélie',
          'aby verejne vyhlásil svoj nárok na trón',
          'aby si pred súbojom precvičil šerm',
        ],
        spravna: 0,
        vysvetlenie:
          'Herci zahrajú vraždu vladára presne tak, ako ju opísal duch. Keď Claudius scénu neznesie a odbehne, Hamlet má potvrdenie, ktoré potreboval — divadlo tu funguje ako pasť na svedomie.',
      },
      {
        id: 'hamlet-k3',
        typ: 'kviz',
        otazka: 'Čo je blankvers?',
        moznosti: [
          'nerýmovaný päťstopový jamb',
          'trojveršová strofa s reťazovým rýmom',
          'šesťstopový verš antického eposu',
          'štrnásťveršová básnická forma',
        ],
        spravna: 0,
        vysvetlenie:
          'Blankvers je základným veršom anglickej renesančnej drámy. Bez rýmu znie prirozenejšie než rýmovaný verš, a pritom si zachováva slávnostný rytmus.',
      },
      {
        id: 'hamlet-k4',
        typ: 'kviz',
        otazka: 'Ako tragédia končí?',
        moznosti: [
          'Hamlet zabije Claudia, no sám umiera na otrávenú ranu; trón dostáva Fortinbras',
          'Hamlet sa stáva dánskym kráľom a Ofélia sa zachráni',
          'Claudius je uväznený a Hamlet odchádza do Anglicka',
          'všetci sa zmieria a Laertes sa stáva regentom',
        ],
        spravna: 0,
        vysvetlenie:
          'V šermiarskom súboji zomierajú Gertrúda, Laertes, Claudius aj Hamlet. Pomsta je teda vykonaná, ale za cenu úplnej záhuby dánskeho kráľovského dvora.',
      },
      {
        id: 'hamlet-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave jej úlohu v tragédii.',
        pary: [
          { vlavo: 'Hamlet', vpravo: 'princ, ktorý váha s pomstou za zabitého otca' },
          { vlavo: 'Claudius', vpravo: 'strýko a vrah, ktorý sa zmocnil trónu' },
          { vlavo: 'Gertrúda', vpravo: 'matka, ktorá vypije otrávený pohár' },
          { vlavo: 'Ofélia', vpravo: 'milovaná dievčina, ktorá sa pomätie a utopí' },
          { vlavo: 'Horacio', vpravo: 'verný priateľ, ktorý má príbeh vyrozprávať svetu' },
        ],
        vysvetlenie:
          'Takmer všetky postavy sú prepojené dvojitou úlohou: sú zároveň vinníkmi aj obeťami mocenskej hry, čo je typický znak Shakespearovej tragédie.',
      },
      {
        id: 'hamlet-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň údaje o deji tragédie.',
        text: [
          'Dej sa odohráva na dánskom hrade ',
          { medzera: 'Elsinor', napoveda: 'skutočný hrad Kronborg' },
          ' a Hamletovho otca zavraždil jeho brat ',
          { medzera: 'Claudius', napoveda: 'nový kráľ a Hamletov strýko' },
          ' jedom nalitým do ',
          { medzera: 'ucha', napoveda: 'časť tela, ktorú spomína duch' },
          '.',
        ],
        vysvetlenie:
          'Elsinor, Claudius a jed v uchu patria k základným dejovým údajom; jed sa v hre stáva aj symbolom rozvratu v štáte.',
      },
      {
        id: 'hamlet-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň pojmy z teórie drámy.',
        text: [
          'Najznámejší Hamletov vnútorný monológ sa začína slovami „',
          { medzera: 'Byť či nebyť', napoveda: 'úvaha o živote a smrti' },
          '“. Dráma je napísaná vo verši, ktorý sa nazýva ',
          { medzera: 'blankvers', napoveda: 'nerýmovaný päťstopový jamb' },
          ', a vložené predstavenie hercov je príkladom postupu ',
          { medzera: 'hra v hre', napoveda: 'divadlo vnútri divadla' },
          '.',
        ],
        vysvetlenie:
          'Monológ „Byť či nebyť“, blankvers a hra v hre sú tri veci, ktoré sa pri Hamletovi na maturite vyžadujú najčastejšie.',
      },
    ],
  },
  // === DOPLNIT_DIELA ===
]
