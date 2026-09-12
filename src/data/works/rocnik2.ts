// 2. ročník — romantizmus a realizmus (svetová aj slovenská literatúra).
// Súbor obsahuje katalóg autorov (`autori2`) a diel (`diela2`) pre druhý ročník:
// preromantizmus a romantizmus (Goethe, Byron, Poe, Hugo, Puškin, štúrovci),
// svetový realizmus (Balzac, Tolstoj, Dostojevskij) a slovenský literárny
// realizmus (Hviezdoslav, Kukučín, Timrava, Tajovský).
// Každé dielo obsahuje rozbor (obsah, kompozícia, postavy, jazyk) a cvičenia.

import type { Autor, Dielo } from '../../types'

export const autori2: Autor[] = [
  {
    id: 'goethe',
    meno: 'Johann Wolfgang Goethe',
    roky: '1749 – 1832',
    smer: 'preromantizmus (Sturm und Drang), klasicizmus',
    zivotopis:
      'Nemecký básnik, prozaik, dramatik a mysliteľ, najvýznamnejšia postava nemeckej literatúry. Študoval právo v Lipsku a v Strasburgu, venoval sa však literatúre, prírodným vedám a výtvarnému umeniu. S Friedrichom Schillerom stál pri hnutí Sturm und Drang, ktoré zdôrazňovalo cit, vzburu proti konvenciám a silného jedinca. Väčšinu života prežil vo Weimare, kde pôsobil ako minister a divadelný riaditeľ. Jeho dielo tvorí prechod od osvietenstva cez preromantizmus ku klasicizmu.',
    dalsieDiela: ['Faust', 'Viliam Meister', 'Torquato Tasso', 'Rímske elégie', 'Kráľ duchov'],
  },
  {
    id: 'byron',
    meno: 'George Gordon Byron',
    roky: '1788 – 1824',
    smer: 'romantizmus',
    zivotopis:
      'Anglický romantický básnik, tvorca takzvaného byronovského hrdinu — hrdého samotára v rozpore so spoločnosťou. Pochádzal z aristokratickej rodiny, mal vrodenú chybu nohy, ktorá ho poznačila, a život prežil v neustálom cestovaní po Európe a Stredomorí. Bol symbolom vzbury proti pokrytectvu anglickej vysokej spoločnosti, ktorá ho nakoniec vyštvala z krajiny. Zapojil sa do gréckeho boja za nezávislosť proti Turkom a zomrel na horúčku v Missolonghi. Jeho životný postoj, nazývaný byronizmus, ovplyvnil celú generáciu európskych romantikov vrátane Janka Kráľa.',
    dalsieDiela: ['Don Juan', 'Chillonský väzeň', 'Kain', 'Manfred', 'Korzár'],
  },
  {
    id: 'poe',
    meno: 'Edgar Allan Poe',
    roky: '1809 – 1849',
    smer: 'romantizmus',
    zivotopis:
      'Americký básnik, prozaik a literárny teoretik, zakladateľ modernej detektívky a hororovej poviedky. Osirel ako dieťa, vyrastal u pestúnov, život prežil v chudobe a v boji s alkoholom. Smrť jeho mladej manželky Virginie prehĺbila v jeho tvorbe tému straty milovanej ženy. V eseji Filozofia básnickej skladby vysvetlil, že básnický účinok sa dá vypočítať a skomponovať ako matematická úloha. Jeho poetika melanchólie, tajomstva a hudobnosti verša ovplyvnila symbolizmus a modernú poéziu.',
    dalsieDiela: ['Zvony', 'Annabel Lee', 'Jama a kyvadlo', 'Zánik domu Usherovcov', 'Vraždy v Rue Morgue'],
  },
  {
    id: 'hugo',
    meno: 'Victor Hugo',
    roky: '1802 – 1885',
    smer: 'romantizmus',
    zivotopis:
      'Francúzsky básnik, prozaik a dramatik, vodca francúzskeho romantizmu. V predhovore k dráme Cromwell formuloval program romantickej drámy — odmietol klasicistické jednoty a žiadal spojenie vznešeného s groteskným. Angažoval sa politicky, po nástupe Napoleona III. odišiel na takmer dvadsať rokov do exilu na ostrovy Jersey a Guernsey. V románoch spája historickú fresku so sociálnou kritikou a s obranou spoločenských vyvrheľov. Po smrti mu Francúzsko vystrojilo štátny pohreb a pochovali ho v Panthéone.',
    dalsieDiela: ['Bedári', 'Robotníci mora', 'Deväťdesiattri', 'Hernani', 'Legenda vekov'],
  },
  {
    id: 'puskin',
    meno: 'Alexander Sergejevič Puškin',
    roky: '1799 – 1837',
    smer: 'romantizmus, začiatky realizmu',
    zivotopis:
      'Ruský básnik, prozaik a dramatik, zakladateľ modernej ruskej literatúry a spisovnej ruštiny. Za slobodomyseľné básne ho poslali do vyhnanstva na juh Ruska a potom na rodinný majetok Michajlovskoje. Jeho dielo prechádza od romantických poém k striedmej próze, v ktorej dokáže vykresliť dejiny aj každodenný život bez pátosu. Zomrel po súboji s Francúzom Dantesom, ktorý sa dvoril jeho žene Natálii. Bývá označovaný za slnko ruskej poézie a inšpiroval celú nasledujúcu ruskú literatúru.',
    dalsieDiela: ['Eugen Onegin', 'Boris Godunov', 'Kaukazský zajatec', 'Piková dáma', 'Medený jazdec'],
  },
  {
    id: 'stur',
    meno: 'Ľudovít Štúr',
    roky: '1815 – 1856',
    smer: 'slovenský romantizmus',
    zivotopis:
      'Vedúca osobnosť slovenského národného obrodenia, jazykovedec, novinár, politik a básnik. Študoval v Bratislave a na univerzite v Halle, pôsobil ako zástupca profesora na bratislavskom lýceu, odkiaľ ho pre národnú činnosť odstránili. V roku 1843 sa s Hurbanom a Hodžom dohodol na uzákonení slovenčiny na základe stredoslovenského nárečia. Vydával Slovenskje národňje novini s literárnou prílohou Orol tatránski, v roku 1847 sa stal poslancom uhorského snemu za mesto Zvolen a v revolúcii 1848 – 1849 stál na čele slovenského povstania. Zomrel v Modre po nešťastnej poľovačke.',
    dalsieDiela: [
      'Slovenskje národňje novini',
      'Slovanstvo a svet budúcnosti',
      'Starý a nový vek Slovákov',
      'O národných povestiach a piesňach plemien slovanských',
      'Spevy a piesne',
    ],
  },
  {
    id: 'chalupka',
    meno: 'Samo Chalupka',
    roky: '1812 – 1883',
    smer: 'slovenský romantizmus',
    zivotopis:
      'Najstarší z básnikov štúrovskej generácie, evanjelický farár v Hornej Lehote pod Chopkom. Ako študent sa zapojil do poľského povstania v roku 1830, kde bol ranený, takže si ideál boja za slobodu overil aj prakticky. Bol členom Spoločnosti česko-slovenskej a prívržencom Štúrovho programu. V poézii sa opieral o ľudovú slovesnosť a o hrdinské povesti — o boje s Turkami, o zbojníkov a o slávnu minulosť Slovanov. Svoju jedinú knihu Spevy vydal až v roku 1868, hoci väčšina básní vznikla podstatne skôr.',
    dalsieDiela: ['Spevy', 'Branko', 'Likavský väzeň', 'Turčín Poničan', 'Kráľohoľská'],
  },
  {
    id: 'kral',
    meno: 'Janko Kráľ',
    roky: '1822 – 1876',
    smer: 'slovenský romantizmus',
    zivotopis:
      'Najrevolučnejší a najtajomnejší básnik štúrovskej generácie, nazývaný divný Janko. Študoval v Levoči a v Bratislave, v revolučnom roku 1848 spolu s Jánom Rotaridesom burcoval ľud v Honte, za čo ich uväznili v Šahách a v Pešti. Po revolúcii pracoval ako súdny úradník v Balašských Ďarmotách a v Kláštore pod Znievom, zomrel zabudnutý v Zlatých Moravciach. Jeho poézia je plná rozorvanosti, vzbury, tuláctva a symbolov, ktoré nemajú v slovenskej romantickej lyrike obdobu. Zo štúrovcov stojí najbližšie k byronovskému typu hrdinu, jeho vzbura má však aj sociálny a národný rozmer.',
    dalsieDiela: ['Duma bratislavská', 'Jarná pieseň', 'Orol', 'Orol vták', 'Šahy', 'Zverbovaný'],
  },
  {
    id: 'botto',
    meno: 'Ján Botto',
    roky: '1829 – 1881',
    smer: 'slovenský romantizmus',
    zivotopis:
      'Posledný veľký básnik štúrovskej generácie, povolaním zememerač, čo mu umožnilo dôkladne poznať slovenský vidiek. Študoval v Levoči, kde ho ovplyvnila básnická atmosféra mladšej štúrovskej družiny. Jeho tvorba vyrastá z ľudových povestí a balád, ktoré prepracúva do symbolických skladieb o slobode a o národe. Po porážke revolúcie vyjadril rozčarovanie zo stavu národa v alegorických obrazoch spánku a čakania na prebudenie. Vrcholom jeho diela je lyrickoepická skladba Smrť Jánošíkova, ktorá vyšla v almanachu Lipa.',
    dalsieDiela: ['Smrť Jánošíkova', 'Žltá ľalia', 'Margita a Besná', 'Báj na Dunaji', 'K mladosti'],
  },
  {
    id: 'sladkovic',
    meno: 'Andrej Sládkovič',
    roky: '1820 – 1872',
    smer: 'slovenský romantizmus',
    zivotopis:
      'Vlastným menom Andrej Braxatoris, evanjelický farár v Hrochoti a v Radvani, básnik štúrovskej generácie. Študoval v Banskej Štiavnici a na univerzite v Halle, kde sa zoznámil s Hegelovou filozofiou a estetikou. Ako študent sa zaľúbil do Márie Pišlovej z Banskej Štiavnice; keď sa nemohli spojiť, vytvoril z tohto zážitku najrozsiahlejšiu slovenskú lyrickoepickú skladbu o láske. Jeho druhým vrcholom je skladba Detvan, ktorá oslavuje ľud, prírodu a slovenskosť. Bol neúnavným kultúrnym pracovníkom, podporoval Maticu slovenskú a slovenské gymnáziá.',
    dalsieDiela: ['Detvan', 'Nehaňte ľud môj', 'Svätomartiniáda', 'Milica', 'Sôvety v rodine Dušanovej'],
  },
  {
    id: 'palarik',
    meno: 'Ján Palárik',
    roky: '1822 – 1870',
    smer: 'slovenský romantizmus, začiatky realizmu v dráme',
    zivotopis:
      'Katolícky kňaz, dramatik, novinár a národný buditeľ, publikoval aj pod pseudonymom Beskydov. Pôsobil ako kaplán v Pešti a neskôr ako farár v Majcichove. Za kritiku cirkevných pomerov ho istý čas internovali v kláštore. Bol zástancom demokratického a zmierlivého riešenia slovensko-maďarského sporu, čo sa odzrkadľuje aj v jeho veselohrách. Napísal tri veselohry, ktorými položil základy modernej slovenskej komédie a ochotníckej divadelnej tradície.',
    dalsieDiela: ['Inkognito', 'Drotár', 'Dimitrij Samozvanec', 'Záhrada duše kresťanskej'],
  },
  {
    id: 'balzac',
    meno: 'Honoré de Balzac',
    roky: '1799 – 1850',
    smer: 'realizmus',
    zivotopis:
      'Francúzsky prozaik, zakladateľ realistického románu a jeden z najproduktívnejších spisovateľov svetovej literatúry. Neúspešne podnikal, upadol do dlhov, a preto písal v obrovskom tempe, podporovaný silnou kávou a nočnou prácou. Takmer sto románov a poviedok spojil do jedného cyklu s názvom Ľudská komédia, ktorý mal byť súpisom celej francúzskej spoločnosti. Postavy nechával prechádzať z románu do románu, takže vzniká ilúzia jedného spoločenského sveta. Zomrel krátko po sobáši s poľskou šľachtičnou Evelínou Hanskou, vyčerpaný prácou.',
    dalsieDiela: ['Ľudská komédia', 'Stratené ilúzie', 'Eugénia Grandetová', 'Lesk a bieda kurtizán', 'Šagrénová koža'],
  },
  {
    id: 'tolstoj',
    meno: 'Lev Nikolajevič Tolstoj',
    roky: '1828 – 1910',
    smer: 'realizmus',
    zivotopis:
      'Ruský prozaik, mysliteľ a mravný reformátor, popri Dostojevskom najznámejší predstaviteľ ruského realizmu. Pochádzal z grófskej rodiny, hospodáril na majetku Jasná Poľana, kde zriadil školu pre sedliacke deti. Po Krymskej vojne, ktorú zažil pri Sevastopole, sa u neho prehĺbil odpor k vojne a k násiliu. V neskoršom období hlásal učenie o neodporovaní zlu násilím a o zjednodušení života, čím ovplyvnil aj Gándhího. Ako osemdesiatdvaročný opustil svoj majetok a zomrel na železničnej stanici Astapovo.',
    dalsieDiela: ['Vojna a mier', 'Vzkriesenie', 'Smrť Ivana Iljiča', 'Kreutzerova sonáta', 'Sevastopolské poviedky'],
  },
  {
    id: 'dostojevskij',
    meno: 'Fiodor Michajlovič Dostojevskij',
    roky: '1821 – 1881',
    smer: 'realizmus (psychologický realizmus)',
    zivotopis:
      'Ruský prozaik, tvorca psychologického románu a najhlbší analytik ľudského vnútra v ruskej literatúre. Za členstvo v Petraševského krúžku ho odsúdili na smrť, rozsudok mu zmenili tesne pred výkonom a štyri roky strávil na nútených prácach na Sibíri. Skúsenosť z väzenia, epilepsia a hráčska závislosť sa odrazili v jeho témach viny, trestu a pokorenia. Romány zakladá na ideovom konflikte a na vnútornom monológu, nie na vonkajšej akcii. Jeho dielo predznamenalo existencializmus a modernú psychológiu.',
    dalsieDiela: ['Bratia Karamazovovci', 'Idiot', 'Besi', 'Zápisky z podzemia', 'Biedni ľudia'],
  },
  {
    id: 'hviezdoslav',
    meno: 'Pavol Országh Hviezdoslav',
    roky: '1849 – 1921',
    smer: 'slovenský literárny realizmus (prvá vlna)',
    zivotopis:
      'Vlastným menom Pavol Országh, najväčší slovenský básnik, povolaním advokát v Námestove. Vyrastal na Orave v zemianskej, ale zbedačenej rodine, študoval v Miškovci a v Kežmarku, kde ho pre slovenské básne prestali podporovať. Prispel k vytvoreniu moderného slovenského básnického jazyka: obohatil ho o nové slová, inverzie a zložité vetné konštrukcie. V tvorbe spojil ľud, prírodu, kresťanskú mravnosť a odpor proti sociálnej nespravodlivosti. Po vzniku Česko-Slovenska bol poslancom Revolučného národného zhromaždenia a predsedom obnovenej Matice slovenskej.',
    dalsieDiela: ['Hájnikova žena', 'Ežo Vlkolinský', 'Gábor Vlkolinský', 'Krvavé sonety', 'Herodes a Herodias', 'Letorosty'],
  },
  {
    id: 'kukucin',
    meno: 'Martin Kukučín',
    roky: '1860 – 1928',
    smer: 'slovenský literárny realizmus (druhá vlna)',
    zivotopis:
      'Vlastným menom Matej Bencúr, zakladateľ modernej slovenskej realistickej prózy, povolaním lekár. Rodák z Jasenovej na Orave najprv učiteľoval, potom vystudoval medicínu v Prahe. Odišiel pracovať ako lekár na chorvátsky ostrov Brač, odtiaľ za slovenskými vysťahovalcami do Južnej Ameriky a nakoniec sa vrátil do Chorvátska. Jeho poviedky stavajú na humore, na drobnokresbe dedinského života a na živom dialógu; nesúdi, ale s pochopením pozoruje. Vytvoril typ slovenského realistického rozprávania, ktoré vychádza z reči ľudu.',
    dalsieDiela: ['Dom v stráni', 'Mať volá', 'Rysavá jalovica', 'Neprebudený', 'Dies irae'],
  },
  {
    id: 'timrava',
    meno: 'Božena Slančíková-Timrava',
    roky: '1867 – 1951',
    smer: 'slovenský literárny realizmus (druhá vlna), kritický realizmus',
    zivotopis:
      'Vlastným menom Božena Slančíková; pseudonym si vytvorila podľa studničky Timrava pri Polichne. Bola dcérou evanjelického farára a väčšinu života prežila v rodnej Polichne a v Ábelovej v úzkom dedinskom prostredí. Do literatúry vstúpila nemilosrdne kritickým pohľadom na zemiansku i sedliacku spoločnosť, bez idealizácie a bez sentimentu. Ako prvá v slovenskej próze dôsledne využila vnútorný monológ a psychologickú analýzu ženských postáv. Po roku 1918 sa venovala aj vojnovej téme v novele Hrdinovia.',
    dalsieDiela: ['Ťapákovci', 'Hrdinovia', 'Skon Paľa Ročku', 'Bez hrdosti', 'Za koho ísť', 'Všetko za národ'],
  },
  {
    id: 'tajovsky',
    meno: 'Jozef Gregor Tajovský',
    roky: '1874 – 1940',
    smer: 'slovenský literárny realizmus (druhá vlna), kritický realizmus',
    zivotopis:
      'Prozaik a dramatik, predstaviteľ kritického realizmu, rodák z Tajova pri Banskej Bystrici. Vychovával ho dedo Jozef Greguš, ktorého s vďakou vykreslil vo viacerých poviedkach. Vyučil sa za učiteľa, potom študoval obchodnú akadémiu v Prahe a pracoval ako bankový úradník v Martine. Počas prvej svetovej vojny prešiel na ruskú stranu a pôsobil v československých legiách. Jeho poviedky a drámy zobrazujú sociálne krivdy, chudobu a mravný rozklad dedinskej rodiny, ktorý spôsobuje túžba po majetku.',
    dalsieDiela: ['Statky-zmätky', 'Maco Mlieč', 'Mamka Pôstková', 'Do konca', 'Ženský zákon', 'Apolienka'],
  },
]

export const diela2: Dielo[] = [
  {
    id: 'utrpenie-mladeho-werthera',
    nazov: 'Utrpenie mladého Werthera',
    autorId: 'goethe',
    rocnik: 2,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'sentimentálny (epištolárny) román',
    forma: 'próza — román v listoch',
    rokVydania: '1774',
    obdobie: 'preromantizmus — hnutie Sturm und Drang',
    miestoACas: 'nemecké malomesto a dedina Wahlheim, druhá polovica 18. storočia; približne rok a pol od jari do decembra nasledujúceho roka',
    anotacia:
      'Román v listoch o mladíkovi, ktorý sa zaľúbi do ženy zasnúbenej s iným a ktorého citlivá duša nedokáže zniesť rozpor medzi svojím vnútrom a pravidlami spoločnosti. Kľúčové dielo preromantizmu, ktoré urobilo z citu najvyššiu hodnotu.',
    obsah: [
      'Mladý vzdelaný Werther prichádza na jar do malého mesta, aby si urovnal rodinné dedičské záležitosti a aby sa zotavil z nepokojného života. Vo svojich listoch priateľovi Wilhelmovi opisuje nadšenie z prírody, z prostých ľudí a z čítania Homéra. V spoločnosti na dedinskom bále sa zoznámi s Lottou, dcérou úradníka, ktorá po smrti matky vychováva svojich mladších bratov a sestry. Werther je očarený jej prirodzenosťou, láskavosťou a tým, že sa vôbec nesnaží pôsobiť ako dáma z mesta. Hneď po prvom stretnutí sa do nej bezhlavo zaľúbi.',
      'Krátko nato sa dozvie, že Lotta je zasnúbená s Albertom, rozumným, poriadnym a spoľahlivým mužom, ktorý je práve na služobnej ceste. Werther sa aj tak stáva pravidelným hosťom v jej dome a prežíva letné týždne v akomsi šťastnom opojení. Keď sa Albert vráti, Werther zisťuje, že ho nemôže nenávidieť: Albert je čestný, priateľský a Lotte dáva presne tú istotu, ktorú on sám nikdy nedokáže poskytnúť. Rozpor medzi citom a skutočnosťou ho začne ničiť. Na Wilhelmovu radu odchádza a prijíma miesto pri vyslanectve.',
      'Život úradníka je pre neho utrpením. Nenávidí prázdne formality, kariérizmus a stavovskú pýchu; keď ho z aristokratickej spoločnosti pre jeho nešľachtický pôvod nepriamo vyhodia, je hlboko ponížený a zo služby odchádza. Vráti sa do okolia Wahlheimu, kde nachádza Lottu už ako Albertovu manželku. Zmenilo sa aj to, čo mal predtým rád: lipy sú vyťaté, jeho obľúbený šialený Heinrich prišiel o rozum z nešťastnej lásky k tej istej Lotte a sluha, ktorý miloval svoju gazdinu, sa stal vrahom. Werther v týchto osudoch vidí vlastný obraz.',
      'Namiesto Homéra číta teraz melancholického Ossiana a jeho listy sú čoraz zúfalejšie. Pri poslednom stretnutí Lotte prečíta ossianovské spevy, obaja sa rozplačú a Werther ju objíme a pobozká. Lotta ho vydesená odmietne a zakáže mu prichádzať. Werther sa rozhodne, že z tria musí odísť jeden — a bude to on. Pod zámienkou cesty si dá poslať od Alberta pištole, napíše rozlúčkový list a v noci sa zastrelí.',
      'Nasledujúce ráno ho nájdu ešte živého, no o dvanástej na poludnie umiera. Na stolíku leží otvorená tragédia Emilia Galotti. Lotta je zrútená, Albert nedokáže hovoriť. Pochovajú ho bez kňaza, na mieste, ktoré si sám vybral, pod lipami — nikto z rodiny ho na poslednej ceste nesprevádza. Záverečné slovo má vydavateľ listov, ktorý dej dokončí striedmou správou, čím kontrastuje s Wertherovou citovou rozorvanosťou.',
    ],
    kompozicia:
      'Dve knihy listov (prvá a druhá kniha) doplnené záverečnou časťou Vydavateľ čitateľovi. Listy sú datované a adresované priateľovi Wilhelmovi, chronologicky od 4. mája do decembra nasledujúceho roka; v druhej časti pribúdajú komentáre fiktívneho vydavateľa, ktorý dokončuje dej po Wertherovej smrti.',
    postavy: [
      {
        meno: 'Werther',
        charakteristika:
          'Mladý, vzdelaný a nadaný muž s prehnane citlivou dušou, ktorý všetko prežíva naplno a nekompromisne. Odmieta spoločenské konvencie, stavovskú pýchu a rozumový chlad; keď zistí, že svet jeho citom nevyhovie, radšej odíde zo života. Je prvým veľkým typom citového individualistu v modernej literatúre.',
        rola: 'hlavna',
      },
      {
        meno: 'Lotta (Charlotta)',
        charakteristika:
          'Prirodzené, láskavé a prakticky založené dievča, ktoré po matkinej smrti vychováva mladších bratov a sestry. Wertherovi je citovo blízka, no verná svojmu slovu aj Albertovi. Nedokáže rozhodne prerušiť ich vzťah, a tým Wertherovu tragédiu nechtiac prehlbuje.',
        rola: 'hlavna',
      },
      {
        meno: 'Albert',
        charakteristika:
          'Lottin snúbenec a neskôr manžel, rozumný, čestný a spoľahlivý úradník. Predstavuje presne ten svet poriadku a miery, ktorý Werther nenávidí, ale ktorý mu nemôže nič vyčítať. Nie je zlou postavou — je len opakom romantického hrdinu.',
        rola: 'hlavna',
      },
      {
        meno: 'Wilhelm',
        charakteristika:
          'Wertherov priateľ, adresát všetkých listov. V texte nikdy nevystúpi priamo, jeho rady však poznáme z Wertherových odpovedí. Umožňuje autorovi viesť dej ako jednostrannú spoveď.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Šialený Heinrich',
        charakteristika:
          'Bývalý Lottin sluha, ktorý sa z nešťastnej lásky k nej pomätol a hľadá kvety v zime. Je Wertherovým zrkadlom a predzvesťou jeho konca. Werther v ňom vidí človeka, ktorý je vo svojom šialenstve paradoxne šťastnejší než on.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'nešťastná láska a neriešiteľný ľúbostný trojuholník',
      'konflikt citu jednotlivca so spoločenskými konvenciami',
      'kritika stavovských predsudkov a byrokratického malomesta',
      'samovražda ako vzbura aj ako útek',
    ],
    motivy: [
      'listy ako spoveď',
      'príroda ako obraz vnútorného stavu (jar pri stretnutí, jeseň pri rozpade)',
      'Homér verzus Ossian ako znak premeny hrdinu',
      'vyťaté lipy a strata idyly',
      'pištole vypožičané od Alberta',
      'tragédia Emilia Galotti na stolíku',
    ],
    jazyk: [
      'epištolárna forma (román v listoch) — dej sledujeme len z Wertherovho pohľadu, čím sa zosilňuje subjektívnosť a pocit uzavretosti v jeho vnútri',
      'ja-forma a vnútorný monológ — myšlienky, výčitky a nadšenia sa striedajú bez odstupu vypravovača',
      'lyrizovaný opis prírody s prirovnaniami a metaforami, ktorý funguje ako zrkadlo nálady hrdinu',
      'apostrofa a zvolacie vety („ó, priateľ môj!“) — reč sa priblížuje modlitbe a plaču, nie správe',
      'kontrast dvoch štýlov: citový, rozbiehavý štýl listov verzus vecná, takmer úradná správa vydavateľa v závere',
      'literárne odkazy (Homér, Ossian, Emilia Galotti) ako skratka pre duševný stav postavy',
      'gradácia v druhej časti — listy sa skracujú, znervózňujú a dátumy sa zhusťujú, čím sa zrýchľuje cesta ku koncu',
    ],
    maturitneMinimum: [
      'Ide o kľúčové dielo preromantizmu a hnutia Sturm und Drang: cit a vášeň sú nadradené rozumu a pravidlám, hlavnou hodnotou je individualita.',
      'Román vznikol na základe autorovej vlastnej neopätovanej lásky k Charlotte Buffovej a samovraždy jeho známeho Karla Jeruzalema.',
      'Vyvolal takzvanú werthermániu: mladí muži sa oblékali ako Werther (modrý frak, žltá vesta) a dielo bolo miestami zakázané pre obavy z vlny samovrážd.',
      'Typická maturitná otázka: vysvetli formu románu v listoch a jej vplyv na subjektívnosť rozprávania.',
      'Werther je predchodcom romantického hrdinu — jednotlivca v rozpore so spoločnosťou, ktorý však ešte nie je vzbúrencom, len obeťou vlastného citu.',
    ],
    ulohy: [
      {
        id: 'utrpenie-mladeho-werthera-k1',
        typ: 'kviz',
        otazka: 'Akú formu má dielo Utrpenie mladého Werthera?',
        moznosti: [
          'román v listoch (epištolárny román)',
          'veršovaná epická skladba',
          'dráma v piatich dejstvách',
          'cestopisný denník so sonetmi',
        ],
        spravna: 0,
        vysvetlenie:
          'Takmer celé dielo tvoria Wertherove listy priateľovi Wilhelmovi. Táto forma umožňuje sledovať dej výlučne očami hlavnej postavy, takže čitateľ prežíva jeho city bez odstupu.',
      },
      {
        id: 'utrpenie-mladeho-werthera-k2',
        typ: 'kviz',
        otazka: 'Prečo Werther nemôže Lottu získať?',
        moznosti: [
          'je zasnúbená a neskôr vydaná za Alberta',
          'odišla za prácou do cudziny',
          'je z inej náboženskej obce',
          'nechce mať deti a Werther si ju preto rozmyslí',
        ],
        spravna: 0,
        vysvetlenie:
          'Lotta je od začiatku zasnúbená s Albertom a v druhej časti sa za neho vydá. Werther pritom nemôže Alberta ani nenávidieť, pretože je čestný — konflikt je preto neriešiteľný.',
      },
      {
        id: 'utrpenie-mladeho-werthera-k3',
        typ: 'kviz',
        otazka: 'Čo signalizuje, že Werther prestáva čítať Homéra a začína čítať Ossiana?',
        moznosti: [
          'prechod od harmónie a radosti k melanchólii a zúfalstvu',
          'že sa naučil grécky a hľadá náročnejšiu literatúru',
          'že sa vzdal literatúry a venuje sa iba úradu',
          'že sa zmieril s Albertom a s Lottou',
        ],
        spravna: 0,
        vysvetlenie:
          'Homér je v románe znakom vyrovnanosti a radosti z prírody, zatiaľ čo ossianovské spevy sú plné mrákav, smrti a zániku. Zmena knihy je teda skratkou pre zmenu duševného stavu hrdinu.',
      },
      {
        id: 'utrpenie-mladeho-werthera-k4',
        typ: 'kviz',
        otazka: 'Do ktorého literárneho obdobia dielo patrí?',
        moznosti: [
          'preromantizmus (Sturm und Drang)',
          'klasicizmus',
          'naturalizmus',
          'symbolizmus',
        ],
        spravna: 0,
        vysvetlenie:
          'Werther je vrcholným prozaickým dielom hnutia Sturm und Drang, ktoré nadradilo cit rozumu a pripravilo cestu romantizmu.',
      },
      {
        id: 'utrpenie-mladeho-werthera-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postavám ich charakteristiku.',
        pary: [
          { vlavo: 'Werther', vpravo: 'prehnane citlivý mladík, ktorý končí samovraždou' },
          { vlavo: 'Lotta', vpravo: 'prirodzené dievča, ktoré vychováva mladších súrodencov' },
          { vlavo: 'Albert', vpravo: 'rozumný a čestný snúbenec, predstaviteľ sveta poriadku' },
          { vlavo: 'Wilhelm', vpravo: 'adresát listov, v texte nikdy nevystúpi priamo' },
          { vlavo: 'šialený Heinrich', vpravo: 'z lásky pomätený bývalý sluha, zrkadlo hrdinovho osudu' },
        ],
        vysvetlenie:
          'Postavy sú postavené na kontrastoch: citový Werther proti rozumnému Albertovi, a Heinrich ako varovný obraz toho, kam vedie nezvládnutý cit.',
      },
      {
        id: 'utrpenie-mladeho-werthera-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o diele.',
        text: [
          'Román vyšiel v roku ',
          { medzera: '1774', napoveda: 'druhá polovica 18. storočia' },
          ' a jeho listy sú adresované priateľovi ',
          { medzera: 'Wilhelmovi', napoveda: 'meno adresáta listov' },
          '. Werther sa nakoniec zastrelí pištoľami, ktoré si vypožičal od ',
          { medzera: 'Alberta', napoveda: 'Lottin manžel' },
          '.',
        ],
        vysvetlenie:
          'To, že si Werther vypožičal zbraň práve od Alberta a že mu ju Lotta sama podá, dodáva záveru krutú iróniu.',
      },
    ],
  },
  {
    id: 'childe-haroldova-put',
    nazov: 'Childe Haroldova púť',
    autorId: 'byron',
    rocnik: 2,
    druh: 'poezia',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'lyrickoepická skladba — romantická poéma (veršovaný cestopis)',
    forma: 'poézia — spevy v spenserovskej strofe',
    rokVydania: '1812 – 1818',
    obdobie: 'romantizmus',
    miestoACas: 'Portugalsko, Španielsko, Albánia, Grécko, Belgicko, Švajčiarsko a Itália; začiatok 19. storočia, v období napoleonských vojen',
    anotacia:
      'Veršovaný cestopis mladého aristokrata, ktorý sa znudený a rozčarovaný vydá na púť Európou a hľadá zmysel života. Dielo prinieslo do literatúry typ byronovského hrdinu a je manifestom romantického individualizmu.',
    obsah: [
      'Prvý spev predstavuje Childa Harolda, mladého šľachtica, ktorý vyčerpal všetky pôžitky a rozkoše svojho stavu a upadol do znechutenia zo sveta. Bez lúčenia, len s piesňou Dobrú noc, opúšťa rodnú Anglicko a plaví sa na juh. V Portugalsku a v Španielsku sleduje krajinu poznačenú vojnou proti Napoleonovi; opisuje Lisabon, Sevillu, Cádiz a býčie zápasy v Madride. Obdivuje odvahu španielskeho ľudu, ktorý sa bije za slobodu, a pripomína hrdinstvo dievčat z Zaragozy.',
      'Druhý spev vedie hrdinu do Albánie a do Grécka. Harold navštíví dvor albánskeho vládcu Aliho Pašu a obdivuje divokú hrdosť horských kmeňov. V Grécku ho však zasiahne bolestný kontrast: krajina veľkých antických dejín leží pod tureckou nadvládou a jej pamiatky odvážajú cudzinci. Básnik tu vkladá ostrú obžalobu drancovania Akropoly a vyzýva Grékov, aby sa slobody chopili sami. Grécko sa tak stáva symbolom národa, ktorý si musí vydobyť právo na vlastný život.',
      'Tretí spev, napísaný po definitívnom odchode z Anglicka, začína na belgickom bojisku pri Waterloo. Harold rozmýšľa nad Napoleonovým vzestupom a pádom a nad tým, že veľkosť jednotlivca sa nedá oddeliť od jeho pýchy a od skazy, ktorú spôsobí. Cesta pokračuje dolinou Rýna do Švajčiarska, k Lemanskému jazeru a k Alpám. Tu Harold splýva s prírodou, hovorí o Rousseauovi a o Voltairovi a v horách nachádza jedinú spoločnosť, ktorá ho neuráža.',
      'Štvrtý spev je venovaný Itálii — Venécii, Florencii, Ríme. Básnik prechádza od zrúcanín ku hrobom velikánov a rozvíja myšlienku, že padli všetky ríše, no umenie, poézia a slobodná myšlienka prežívajú. Rozdiel medzi hrdinom a autorom sa v tomto speve takmer stráca: prehovára už priamo básnik. Skladba vrcholí známou apostrofou na more, ktoré je obrazom večnosti, sily a slobody, akú človek nikdy neskrotí.',
      'Skladba nemá klasický dejový záver. Harold ako postava sa postupne rozplýva a zostáva len básnikov hlas, ktorý sa loučí s čitateľom. Púť teda neskončí nájdením domova ani vyliečením z melanchólie — hrdina zostáva večným pútnikom bez cieľa. Práve táto otvorenosť a rozorvanosť je jej odkazom: sloboda a poznanie nesú s sebou samotu.',
    ],
    kompozicia:
      'Štyri spevy (prvé dva vyšli v roku 1812, tretí v roku 1816, štvrtý v roku 1818). Skladba je napísaná v spenserovskej strofe (deväť veršov so záverečným dlhším veršom) a rámec cestopisu je preložený lyrickými vsuvkami — piesňami, apostrofami a reflexiami; do textu je vložená napríklad pieseň Dobrú noc.',
    postavy: [
      {
        meno: 'Childe Harold',
        charakteristika:
          'Mladý aristokrat presýtený pôžitkami, hrdý samotár, ktorý pohŕda spoločnosťou a hľadá zmysel v cudzine. Je prvým a najznámejším príkladom takzvaného byronovského hrdinu: výnimočný, melancholický, vzdorovitý a navždy nespokojný. V treťom a štvrtom speve sa jeho hlas takmer úplne stotožňuje s hlasom básnika.',
        rola: 'hlavna',
      },
      {
        meno: 'lyrický subjekt / básnik',
        charakteristika:
          'Rozpravač, ktorý komentuje krajiny, dejiny a politiku a postupne vytláča Harolda z textu. Práve on vyslovuje výzvy na slobodu národov a úvahy o Napoleonovi a o zániku ríší. Vďaka nemu je skladba zároveň cestopisom, politickým pamfletom a filozofickou reflexiou.',
        rola: 'hlavna',
      },
      {
        meno: 'Napoleon',
        charakteristika:
          'Historická postava, ktorá je v skladbe predmetom obojakého hodnotenia: veľký duch a zároveň tyran zničený vlastnou pýchou. Slúži ako dôkaz, že výnimočný jednotlivec nesie v sebe aj vlastnú skazu.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Ali Paša',
        charakteristika:
          'Albánsky vládca, ktorého dvor Harold navštíví. Predstavuje exotický, divoký a nepoddajný Orient, ktorý romantikov priťahoval ako protiklad nudnej západnej civilizácie.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'romantický individualizmus a samota výnimočného jednotlivca',
      'boj národov za slobodu (Španielsko, Grécko)',
      'zánik ríší a pominuteľnosť ľudskej slávy',
      'príroda ako útočisko pred spoločnosťou',
      'rozčarovanie zo sveta (svetobôľ)',
    ],
    motivy: [
      'púť a cesta bez cieľa',
      'zrúcaniny a hroby velikánov',
      'more ako symbol večnosti a slobody',
      'bojisko pri Waterloo',
      'Akropola drancovaná cudzincami',
      'pieseň Dobrú noc pri odchode z domoviny',
    ],
    jazyk: [
      'spenserovská strofa — pevná deväťveršová strofa s dlhším záverečným veršom, ktorá dáva rozbiehavému cestopisu pevný rytmus',
      'apostrofa — priame oslovenie mora, Grécka, Ríma či Napoleona, ktorým sa opis mení na osobný apel',
      'kontrast slávnej minulosti a pokorenej prítomnosti, najsilnejší v gréckych a rímskych pasážach',
      'rétorické otázky a zvolania, ktoré menia cestopis na politický prejav proti tyranii',
      'lyrické vsuvky (pieseň Dobrú noc) prerušujúce epický rámec — typické prelínanie lyriky a epiky v romantickej poéme',
      'hyperbola a patetická slovná zásoba pri obraze hrdinu, ktorý je vždy väčší a osamelejší než okolie',
      'splývanie hrdinu a autora — v treťom a štvrtom speve rozprávač prestáva udržiavať odstup, čo je znakom romantickej subjektívnosti',
    ],
    maturitneMinimum: [
      'Skladba je manifestom romantizmu a zdrojom pojmu byronovský hrdina: hrdý, výnimočný, melancholický samotár v rozpore so spoločnosťou.',
      'Byronizmus ovplyvnil aj slovenský romantizmus, najviac Janka Kráľa (divný Janko) a jeho rozorvaného hrdinu.',
      'Dielo spája cestopis, lyrickú reflexiu a politickú obžalobu — je preto lyrickoepickou skladbou, nie románom.',
      'Byron sa aj osobne zapojil do gréckeho boja za slobodu a zomrel v Missolonghi, čím sa jeho život stal súčasťou legendy o diele.',
      'Typická maturitná otázka: charakterizuj byronovského hrdinu a porovnaj ho s hrdinom Janka Kráľa.',
    ],
    ulohy: [
      {
        id: 'childe-haroldova-put-k1',
        typ: 'kviz',
        otazka: 'Koľko spevov má skladba Childe Haroldova púť?',
        moznosti: ['štyri', 'dva', 'šesť', 'desať'],
        spravna: 0,
        vysvetlenie:
          'Skladba má štyri spevy, ktoré vychádzali postupne v rokoch 1812 až 1818. Prvé dva vznikli po Byronovej ceste po juhu Európy, ďalšie dva už po jeho definitívnom odchode z Anglicka.',
      },
      {
        id: 'childe-haroldova-put-k2',
        typ: 'kviz',
        otazka: 'Ktorá vlastnosť NEPATRÍ k byronovskému hrdinovi?',
        moznosti: [
          'spokojnosť s postavením v spoločnosti',
          'hrdá samota a pohŕdanie konvenciami',
          'výnimočnosť a vzdor',
          'melanchólia a svetobôľ',
        ],
        spravna: 0,
        vysvetlenie:
          'Byronovský hrdina je práve nespokojný a v rozpore so spoločnosťou. Jeho podstatou je vzdor, výnimočnosť a nekonečná nespokojnosť, nie zmierenie so svojím postavením.',
      },
      {
        id: 'childe-haroldova-put-k3',
        typ: 'kviz',
        otazka: 'Prečo je v skladbe dôležité Grécko?',
        moznosti: [
          'je obrazom národa so slávnou minulosťou, ktorý je pokorený a má sa vzoprieť',
          'je Haroldovou rodnou krajinou, do ktorej sa vracia',
          'je jediným miestom, kde Harold nájde lásku',
          'je obrazom ideálne spravovaného štátu',
        ],
        spravna: 0,
        vysvetlenie:
          'Kontrast antickej veľkosti a tureckej nadvlády je jadrom gréckych pasáží. Byron Grékov priamo vyzýva, aby sa slobody chopili sami, a sám sa neskôr do ich boja zapojil.',
      },
      {
        id: 'childe-haroldova-put-k4',
        typ: 'kviz',
        otazka: 'Aký literárny druh a žáner dielo reprezentuje?',
        moznosti: [
          'poézia — lyrickoepická skladba (romantická poéma)',
          'próza — historický román',
          'dráma — tragédia',
          'próza — sentimentálny cestopis v listoch',
        ],
        spravna: 0,
        vysvetlenie:
          'Ide o veršovanú skladbu, v ktorej sa epický rámec púte prelína s lyrickými reflexiami a apostrofami. Takéto prelínanie lyriky a epiky je pre romantickú poému typické.',
      },
      {
        id: 'childe-haroldova-put-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k miestu púte to, čo tam hrdina zažije alebo o čom uvažuje.',
        pary: [
          { vlavo: 'Španielsko', vpravo: 'boj ľudu proti Napoleonovi, býčie zápasy' },
          { vlavo: 'Grécko', vpravo: 'slávna antická minulosť pod tureckou nadvládou' },
          { vlavo: 'Waterloo', vpravo: 'úvaha o Napoleonovom vzestupe a páde' },
          { vlavo: 'Švajčiarsko a Alpy', vpravo: 'splynutie s prírodou, Rousseau a Voltaire' },
          { vlavo: 'Itália', vpravo: 'zrúcaniny a hroby velikánov, nesmrteľnosť umenia' },
        ],
        vysvetlenie:
          'Skladba je stavaná ako cestopis: každá krajina prináša inú historickú a politickú reflexiu, ktorá sa spája s hrdinovou vnútornou náladou.',
      },
      {
        id: 'childe-haroldova-put-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň text o diele a o jeho autorovi.',
        text: [
          'Podľa hlavnej postavy tejto skladby sa typ hrdého a rozorvaného samotára nazýva ',
          { medzera: 'byronovský hrdina', napoveda: 'podľa autorovho mena' },
          '. Skladba je napísaná v takzvanej ',
          { medzera: 'spenserovskej strofe', napoveda: 'deväťveršová strofa' },
          ' a Byron sám zomrel v Grécku v meste ',
          { medzera: 'Missolonghi', napoveda: 'grécke mesto, kde podporoval povstanie' },
          '.',
        ],
        vysvetlenie:
          'Byronov osobný osud sa zhoduje s posolstvom skladby — za slobodu národa sa napokon obetoval aj sám autor.',
      },
    ],
  },
  {
    id: 'havran',
    nazov: 'Havran',
    autorId: 'poe',
    rocnik: 2,
    druh: 'poezia',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'lyrickoepická báseň (baladická lyrika)',
    forma: 'poézia — osemnásť šesťveršových strof s refrénom',
    rokVydania: '1845',
    obdobie: 'romantizmus',
    miestoACas: 'komnata osamelého muža, pochmúrna decembrová polnoc; čas nie je presne určený, je nadčasový',
    anotacia:
      'Báseň o mužovi, ktorý v noci smúti nad mŕtvou milovanou a ku ktorému priletí záhadný havran opakujúci jedno jediné slovo. Ukážka toho, ako sa dá básnická nálada vybudovať presným výpočtom zvuku a opakovania.',
    obsah: [
      'Lyrický subjekt sedí o pochmúrnej polnoci nad starými knihami a snaží sa zahnať myšlienky na stratenú milovanú Lenoru. Zaklope na dvere, no za nimi nikoho nenájde; do tmy zašepká len jej meno a tma mu ho vráti ako ozvenu. Keď otvorí okno, vletí dovnútra havran a usadí sa na bustu bohyne Pallas Atény nad dverami. Prvá časť básne tak buduje atmosféru: noc, chlad, samota a knihy, ktoré nepomáhajú.',
      'Muž najprv hovorí s havranom polovtipne a pýta sa ho na jeho meno v podsvetí. Havran odpovie jediným slovom, ktoré potom opakuje po každej ďalšej otázke. Lyrický subjekt si to zo začiatku vysvetľuje rozumovo — vták sa asi naučil jedno slovo od predošlého pána. Postupne však začne havranovi klásť otázky, ktoré sa ho dotýkajú najviac, a tým si sám pripravuje mučenie.',
      'Otázky sa stupňujú: či je pre jeho bolesť nejaký balzam, či ešte niekedy nájde pokoj a najmä či sa v nebi znovu zíde s Lenorou. Na každú z nich prichádza tá istá odpoveď, ktorá každú nádej zamietne. Je to vrchol básne: rovnaké slovo, ktoré na začiatku znelo ako náhoda, sa mení na rozsudok. Muž prechádza od zvedavosti cez podráždenosť až k zúfalému výkriku, ktorým havrana vyháňa.',
      'Havran však neodletí. V poslednej strofe stále sedí na buste Pallas Atény, jeho oči pripomínajú oči démona a jeho tieň leží na podlahe. Lyrický subjekt vyhlasuje, že jeho duša sa z tohto tieňa už nikdy nevymaní. Báseň sa nekončí zmierením ani útechou, ale trvalým stavom beznádeje — a to je jej cieľ, pretože podľa autora má byť najsilnejším básnickým dojmom melanchólia.',
    ],
    kompozicia:
      'Osemnásť šesťveršových strof s pravidelným refrénom na konci každej strofy (v pôvodine slovo Nevermore, v slovenských prekladoch najčastejšie „Nikdy viac“). Kompozícia je gradačná: nálada sa stupňuje od zvedavosti k zúfalstvu a končí sa v bode, z ktorého niet východiska. Autor ju teoreticky vysvetlil v eseji Filozofia básnickej skladby.',
    postavy: [
      {
        meno: 'lyrický subjekt (muž v komnate)',
        charakteristika:
          'Vzdelaný, osamelý muž, ktorý smúti nad smrťou milovanej Lenory a snaží sa rozptýliť čítaním. Svojimi otázkami si sám privoláva odpoveď, ktorá ho zničí. Predstavuje romantického jednotlivca, ktorý hľadá odpoveď na neriešiteľnú otázku o smrti.',
        rola: 'hlavna',
      },
      {
        meno: 'havran',
        charakteristika:
          'Záhadný čierny vták, ktorý vletí do komnaty a opakuje jediné slovo. Nie je jasné, či je to len naučené zvieracie zvolanie, alebo posol z podsvetia — a práve táto neurčitosť je zdrojom hrôzy. Stáva sa symbolom nezmeniteľnej smrti a neprekonateľnej bolesti.',
        rola: 'hlavna',
      },
      {
        meno: 'Lenora',
        charakteristika:
          'Mŕtva milovaná, ktorá v básni nikdy nevystúpi — existuje len ako meno, spomienka a ozvena. Jej neprítomnosť je hnacou silou celej básne.',
        rola: 'vedlajsia',
      },
      {
        meno: 'busta Pallas Atény',
        charakteristika:
          'Socha bohyne múdrosti, na ktorú havran usedne. Obraz je významový: nerozum a temnota sa doslova usadia nad múdrosťou a ovládnu ju.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'smrť milovanej ženy a nemožnosť zmierenia s ňou',
      'beznádej a nekonečný smútok',
      'hranica medzi rozumovým vysvetlením a tajomstvom',
      'osamelosť človeka pred otázkou o posmrtnom živote',
    ],
    motivy: [
      'polnoc a decembrová tma',
      'havran ako zlovestný posol',
      'busta Pallas Atény',
      'ozvena mena Lenora',
      'tieň na podlahe',
      'staré knihy, ktoré neprinesú útechu',
    ],
    jazyk: [
      'refrén — opakované slovo na konci každej strofy, ktoré sa významovo mení: najprv zvláštnosť, potom výsmech, nakoniec rozsudok',
      'gradácia — otázky lyrického subjektu sa stupňujú od nezáväzných k najbolestivejším, čím napätie narastá až k výkriku',
      'zvukomalba (eufónia, aliterácia, vnútorný rým) — hromadenie temných a šumivých hlások napodobňuje šuchot, vietor a strach',
      'symbol — havran nie je len vták, je znakom smrti a neodvratnosti; busta Pallas Atény je znakom rozumu, ktorý temnota prevalcuje',
      'kontrast — teplá komnata s knihami proti chladnej búrlivej noci, rozum proti nadprirodzenému tušeniu',
      'personifikácia a dialóg s vtákom, ktorý v skutočnosti nerozumie — hovorí len lyrický subjekt sám so sebou',
      'apostrofa a rétorické otázky adresované havranovi, ktoré dávajú básni dramatický spád',
    ],
    citaty: [
      {
        text: '„Nikdy viac!“',
        zdroj: 'refrén — odpoveď havrana (v pôvodine Nevermore)',
      },
    ],
    maturitneMinimum: [
      'Havran je najznámejšou ukážkou Poeovej teórie: v eseji Filozofia básnickej skladby tvrdí, že básnický účinok sa dá presne vypočítať a že najvhodnejšou náladou je melanchólia.',
      'Refrén je nosným kompozičným prostriedkom — nemení sa jeho podoba, ale jeho význam a váha.',
      'Poe je zakladateľom modernej detektívky a hororovej poviedky; hudobnosť jeho verša ovplyvnila symbolistov (Baudelaire ho prekládal do francúzštiny).',
      'Typická maturitná otázka: vysvetli funkciu refrénu a gradácie v básni Havran.',
      'Báseň sa radí k romantizmu: výnimočná situácia, tajomstvo, silný cit a neriešiteľný konflikt jednotlivca s osudom.',
    ],
    ulohy: [
      {
        id: 'havran-k1',
        typ: 'kviz',
        otazka: 'Ktorý prostriedok je nosným kompozičným princípom básne Havran?',
        moznosti: [
          'refrén, ktorý sa opakuje na konci každej strofy',
          'sonetová forma s dvoma kvartetami',
          'dialóg dvoch rovnocenných postáv',
          'hexameter prevzatý z antiky',
        ],
        spravna: 0,
        vysvetlenie:
          'Refrén (v pôvodine Nevermore) sa opakuje po každej strofe. Jeho podoba sa nemení, ale význam áno — z náhody sa postupne stáva neodvolateľný rozsudok.',
      },
      {
        id: 'havran-k2',
        typ: 'kviz',
        otazka: 'Na čo havran v komnate usedne?',
        moznosti: [
          'na bustu bohyne Pallas Atény nad dverami',
          'na hromadu starých kníh na stole',
          'na okenný parapet',
          'na opierku kresla lyrického subjektu',
        ],
        spravna: 0,
        vysvetlenie:
          'Havran sedí na buste bohyne múdrosti, čo je významový obraz: temnota a nerozum sa usadia priamo nad rozumom a ovládnu ho.',
      },
      {
        id: 'havran-k3',
        typ: 'kviz',
        otazka: 'Ako sa báseň končí?',
        moznosti: [
          'havran neodletí a jeho tieň zostáva na lyrickom subjekte navždy',
          'havran odletí a muž nájde pokoj',
          'muž zomrie a stretne sa s Lenorou',
          'ukáže sa, že havran bol iba sen a muž sa prebudí',
        ],
        spravna: 0,
        vysvetlenie:
          'V poslednej strofe havran stále sedí na buste a hovorí sa, že duša lyrického subjektu sa z jeho tieňa už nikdy nevymaní. Beznádej je teda trvalá, nie vyriešená.',
      },
      {
        id: 'havran-k4',
        typ: 'kviz',
        otazka: 'V ktorej teoretickej práci Poe vysvetlil, ako báseň skomponoval?',
        moznosti: [
          'Filozofia básnickej skladby',
          'Poetika',
          'Predhovor ku Cromwellovi',
          'Umenie poetické',
        ],
        spravna: 0,
        vysvetlenie:
          'V eseji Filozofia básnickej skladby Poe tvrdí, že básnický účinok sa dá vypočítať, a vysvetľuje výber refrénu, rozsahu aj melancholickej nálady.',
      },
      {
        id: 'havran-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k motívu jeho význam v básni.',
        pary: [
          { vlavo: 'havran', vpravo: 'symbol smrti a neodvratnosti' },
          { vlavo: 'busta Pallas Atény', vpravo: 'rozum a múdrosť, ktoré temnota ovládne' },
          { vlavo: 'Lenora', vpravo: 'mŕtva milovaná, prítomná len ako meno a ozvena' },
          { vlavo: 'polnoc v decembri', vpravo: 'čas na hranici, atmosféra chladu a strachu' },
          { vlavo: 'tieň na podlahe', vpravo: 'obraz trvalej beznádeje v závere' },
        ],
        vysvetlenie:
          'Báseň pracuje so symbolmi: predmety a čas nie sú len kulisou, ale nesú významy, ktoré spolu tvoria obraz nezvratnej straty.',
      },
      {
        id: 'havran-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o básni.',
        text: [
          'Báseň Havran vyšla v roku ',
          { medzera: '1845', napoveda: 'polovica 40. rokov 19. storočia' },
          ' a havran v nej opakuje refrén ',
          { medzera: 'Nikdy viac', napoveda: 'v pôvodine Nevermore' },
          '. Mŕtva milovaná lyrického subjektu sa volá ',
          { medzera: 'Lenora', napoveda: 'ženské meno, ktoré sa vracia ako ozvena' },
          '.',
        ],
        vysvetlenie:
          'Lenora v básni nikdy nevystúpi — existuje iba ako meno a ozvena, čím sa zdôrazňuje, že strata je nenapraviteľná.',
      },
    ],
  },
  {
    id: 'chram-matky-bozej-v-parizi',
    nazov: 'Chrám Matky Božej v Paríži',
    autorId: 'hugo',
    rocnik: 2,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'historický román',
    forma: 'próza — román v knihách a kapitolách',
    rokVydania: '1831',
    obdobie: 'romantizmus',
    miestoACas: 'Paríž, predovšetkým katedrála Notre-Dame a Dvor čudes; rok 1482, obdobie vlády Ľudovíta XI.',
    anotacia:
      'Historický román o krásnej cigánskej tanečnici, o zohavenom zvonárovi a o kňazovi, ktorého vášeň privedie k zločinu. Hugo v ňom postavil vedľa seba krásu a ohyzdnosť a ukázal, že vzhľad a mravná hodnota človeka sa nemusia zhodovať.',
    obsah: [
      'Dej sa začína v januári roku 1482 na sviatok blbcov, keď sa parížsky ľud zabáva v Justičnom paláci a volí najškaredšieho muža za pápeža blbcov. Vyhrá ho Quasimodo, hrbatý, jednooký a hluchý zvonár od Matky Božej, ktorého sa všetci boja aj vysmievajú. Na námestí medzitým tancuje mladá cigánka Esmeralda s kozičkou Džali a očaruje celé okolie. Archidiakon Claude Frollo, učený a asketický kňaz, ju z výšky pozoruje a pohľad na ňu v ňom prebudí vášeň, ktorú si nedokáže priznať.',
      'Frollo prikáže Quasimodovi, aby Esmeraldu uniesol. Zachrání ju však kapitán kráľovských lukostrelcov Phoebus de Châteaupers, do ktorého sa dievča bezhlavo zaľúbi. Quasimoda za pokus o únos odsúdia k mučeniu na pranieri; keď od žízne prosí o vodu, jediná, kto mu ju podá, je práve Esmeralda. Od tej chvíle jej zvonár patrí celou svojou vernosťou. Esmeralda zatiaľ žije v svete Dvora čudes medzi žobrákmi a tulákmi, kde ju zo súcitu vyhlási za svoju ženu básnik Pierre Gringoire.',
      'Frollo sleduje schôdzku Esmeraldy s Phoebom a v žiarlivosti kapitána prebodne. Obvinenie padne na Esmeraldu, ktorú ako čarodejnicu odsúdia na smrť. Pri ceste na popravisko ju pred chrámom vytrhne Quasimodo, odnesie ju do katedrály a odvolá sa na právo azylu s výkrikom, že chrám poskytuje ochranu. Nasledujú dni, keď zvonár bdí nad dievčaťom, prináša jej jedlo a chráni ju, hoci vie, že ona miluje krásneho kapitána a jeho sa deso.',
      'Tuláci z Dvora čudes sa rozhodnú Esmeraldu z chrámu vyslobodiť a v noci naň zaútočia. Quasimodo, ktorý si myslí, že prišli dievča zabiť, sa proti nim postaví sám a útok krvavo odrazí. V zmätku Frollo Esmeraldu z chrámu odvedie a naposledy jej dá voľbu: alebo bude jeho, alebo zomrie. Keď ho odmietne, vydá ju do rúk pustovníčky, ktorá v nej — príliš pozdě — rozpozná svoju dávno stratenú dcéru. Esmeraldu popravia na Grève.',
      'Quasimodo z vrcholu katedrály uvidí, ako Frollo pri pohľade na obesenú Esmeraldu prepukne v smiech. Zhodí archidiakona z galérie a ten sa zabije na kameňoch pred chrámom. Sám zvonár zmizne a nikdy sa nevráti. Po rokoch nájdu v hrobke na Montfaucone kostru mladej ženy, pri ktorej je pevne objatá kostra muža so zhrbeným chrbtom; keď ich chcú oddeliť, rozpadne sa na prach. Román tak končí obrazom lásky, ktorá sa naplnila až v smrti.',
    ],
    kompozicia:
      'Rozsiahly román rozdelený na jedenásť kníh a tie na kapitoly. Do deja sú vložené samostatné výkladové časti o Paríži a o gotickej architektúre (napríklad kapitola Toto zabije tamto), ktoré rozprávanie prerušujú a robia z katedrály samostatnú tému. Kompozícia je postavená na kontrastných paralelách postáv a na gradácii od karnevalového začiatku k tragickému koncu.',
    postavy: [
      {
        meno: 'Quasimodo',
        charakteristika:
          'Hrbatý, jednooký a hluchý zvonár katedrály, ktorého ako nájdené dieťa vychoval Frollo. Pod ohyzdným zovňajškom sa skrýva vďačnosť, vernosť a schopnosť obetavej lásky. Je najvýraznejším príkladom Hugovho spojenia groteskného a vznešeného v jednej postave.',
        rola: 'hlavna',
      },
      {
        meno: 'Esmeralda',
        charakteristika:
          'Mladá krásna tanečnica považovaná za cigánku, v skutočnosti ukradnuté dieťa parížskej ženy. Je dobrosrdečná a naivná: podá vodu mučenému Quasimodovi, ale slepo miluje povrchného Phoeba. Jej nevinnosť ju neochráni pred obvinením z čarodejníctva.',
        rola: 'hlavna',
      },
      {
        meno: 'Claude Frollo',
        charakteristika:
          'Učený archidiakon, ktorý celý život potláčal city a napokon ho vášeň k Esmeralde privedie k zločinu. Predstavuje pokrytectvo a temnú stránku cirkevnej moci a je skutočným zloduchom románu. Zahynie zhodený z galérie chrámu, ktorý mal strážiť.',
        rola: 'hlavna',
      },
      {
        meno: 'Phoebus de Châteaupers',
        charakteristika:
          'Krásny kapitán kráľovských lukostrelcov, povrchný a márnivý muž, ktorý Esmeraldu zvádza, no nič pre ňu neobetuje. Napriek žiarlivému útoku prežije a pokojne sa oženi s bohatou snúbenicou. Je Hugovým obrazom krásy bez vnútornej hodnoty.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Pierre Gringoire',
        charakteristika:
          'Chudobný básnik a filozof, ktorý sa nešťastne motá dejom a v Dvore čudes sa formálne stane Esmeraldiným mužom, aby si zachránil život. Keď ide o skutočnú obeť, radšej zachráni jej kozičku než ju samu. Predstavuje bezzubého intelektuála.',
        rola: 'vedlajsia',
      },
      {
        meno: 'pustovníčka (sestra Gudula)',
        charakteristika:
          'Šialená žena zamurovaná v Diere pri krysách, ktorá nenávidí cigánov, pretože jej ukradli dieťa. Až v posledných minútach spozná, že odsúdená Esmeralda je jej dcéra. Jej osud vrcholí tragickou iróniou celého románu.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'kontrast vonkajšej krásy a vnútornej hodnoty človeka',
      'láska ako obeta oproti láske ako vlastníctvu',
      'pokrytectvo a zneužitie moci (cirkevnej aj kráľovskej)',
      'osud vydedencov a okrajovej spoločnosti',
      'katedrála a mesto ako svedkovia dejín',
    ],
    motivy: [
      'sviatok blbcov a voľba pápeža blbcov',
      'pranier a podaná voda',
      'právo azylu v chráme',
      'Dvor čudes',
      'kozička Džali',
      'objaté kostry v hrobke na Montfaucone',
    ],
    jazyk: [
      'kontrast (antitéza) ako základný princíp — ohyzdný Quasimodo s čistým srdcom proti krásnemu a prázdnemu Phoebovi, asketický kňaz so zvrhlou vášňou',
      'romantická hyperbolizácia postáv a scén — mučenie na pranieri, nočný útok na chrám či pád archidiakona sú vystupňované do monumentálnych obrazov',
      'personifikácia katedrály — Notre-Dame vystupuje takmer ako živá postava a chrámové zvony sú Quasimodovými priateľmi',
      'rozsiahle opisné a esejistické pasáže o Paríži a gotike, ktoré prerušujú dej a robia z mesta samostatného hrdinu',
      'dramatická irónia — pustovníčka spozná vo Esmeralde dcéru až vtedy, keď ju už nemôže zachrániť',
      'symbolika svetla a tmy, výšky a hĺbky (galéria chrámu proti kobke a šibenici)',
      'archaizmy, latinské citáty a stredoveké reálie, ktoré vytvárajú dobový kolorit historického románu',
    ],
    maturitneMinimum: [
      'Hugo je vodcom francúzskeho romantizmu a v predhovore k dráme Cromwell žiadal spojenie vznešeného a groteskného — Quasimodo je toho priamym dôkazom.',
      'Román je historický: dej je presne datovaný do roku 1482 a Hugo ním chcel zachrániť gotické pamiatky pred zbúraním.',
      'Kľúčová myšlienka: vonkajšia krása nemá nič spoločné s mravnou hodnotou — najvernejšia láska prichádza od najškaredšieho človeka.',
      'Typická maturitná otázka: vysvetli princíp kontrastu v románe a doplň ho príkladmi postáv.',
      'Sociálny rozmer diela (vydedenci, Dvor čudes, zneužitá moc) predznamenáva Hugov neskorší román Bedári.',
    ],
    ulohy: [
      {
        id: 'chram-matky-bozej-v-parizi-k1',
        typ: 'kviz',
        otazka: 'Kto je skutočným strojcom Esmeraldinej tragédie?',
        moznosti: [
          'archidiakon Claude Frollo',
          'zvonár Quasimodo',
          'básnik Pierre Gringoire',
          'kráľ Ľudovít XI.',
        ],
        spravna: 0,
        vysvetlenie:
          'Frollo prikáže únos, prebodne Phoeba, nechá Esmeraldu odsúdiť a nakoniec ju vydá na smrť. Jeho potláčaná vášeň je hybnou silou celého deja.',
      },
      {
        id: 'chram-matky-bozej-v-parizi-k2',
        typ: 'kviz',
        otazka: 'Prečo sa Quasimodo stane Esmeralde nadobro verný?',
        moznosti: [
          'ako jediná mu podala vodu, keď bol mučený na pranieri',
          'vyliečila ho z hluchoty',
          'je jeho stratená sestra',
          'naučila ho čítať a písať',
        ],
        spravna: 0,
        vysvetlenie:
          'Gesto podanej vody v scéne na pranieri je zlomové: Quasimodo prvý raz zažije súcit a odvtedy je Esmeralde bezvýhradne oddaný.',
      },
      {
        id: 'chram-matky-bozej-v-parizi-k3',
        typ: 'kviz',
        otazka: 'Ako sa román končí?',
        moznosti: [
          'Esmeraldu popravia, Quasimodo zhodí Frolla z chrámu a zmizne',
          'Esmeralda sa vydá za Phoeba a Quasimodo zostane zvonárom',
          'Frollo sa kaje a Esmeraldu zachráni',
          'tuláci dobyjú chrám a Esmeraldu vyslobodia',
        ],
        spravna: 0,
        vysvetlenie:
          'Esmeraldu obesia na Grève, Quasimodo zhodí smejúceho sa Frolla z galérie a sám zmizne. Po rokoch nájdu jeho kostru objatú s jej kostrou v hrobke na Montfaucone.',
      },
      {
        id: 'chram-matky-bozej-v-parizi-k4',
        typ: 'kviz',
        otazka: 'Do ktorého roka Hugo dej románu presne zasadil?',
        moznosti: ['1482', '1648', '1789', '1830'],
        spravna: 0,
        vysvetlenie:
          'Dej sa začína v januári 1482 na sviatok blbcov, v čase vlády Ľudovíta XI. Presná datácia je znakom historického románu.',
      },
      {
        id: 'chram-matky-bozej-v-parizi-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postavám ich charakteristiku.',
        pary: [
          { vlavo: 'Quasimodo', vpravo: 'ohyzdný zvonár s čistým a verným srdcom' },
          { vlavo: 'Esmeralda', vpravo: 'krásna tanečnica obvinená z čarodejníctva' },
          { vlavo: 'Claude Frollo', vpravo: 'asketický kňaz, ktorého vášeň privedie k zločinu' },
          { vlavo: 'Phoebus', vpravo: 'krásny, ale povrchný kapitán lukostrelcov' },
          { vlavo: 'pustovníčka Gudula', vpravo: 'šialená matka, ktorá spozná dcéru priveľmi pozdě' },
        ],
        vysvetlenie:
          'Postavy sú zámerne postavené do kontrastných párov: vzhľad a hodnota, láska a vlastníctvo, učenosť a mravnosť.',
      },
      {
        id: 'chram-matky-bozej-v-parizi-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o románe.',
        text: [
          'Zvonár ',
          { medzera: 'Quasimodo', napoveda: 'hrbatý, jednooký a hluchý' },
          ' odnesie odsúdenú Esmeraldu do katedrály a odvolá sa na právo ',
          { medzera: 'azylu', napoveda: 'ochrana, ktorú poskytoval chrám' },
          '. Žobráci a tuláci v románe žijú v parížskej štvrti nazvanej ',
          { medzera: 'Dvor čudes', napoveda: 'francúzsky Cour des Miracles' },
          '.',
        ],
        vysvetlenie:
          'Právo azylu je dejovo kľúčové — vďaka nemu môže Quasimodo Esmeraldu chrániť v chráme a vzniká tak dlhá napätá časť románu.',
      },
      {
        id: 'chram-matky-bozej-v-parizi-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vetu o autorovej estetike.',
        text: [
          'Victor Hugo žiadal v predhovore k dráme ',
          { medzera: 'Cromwell', napoveda: 'programový text francúzskeho romantizmu' },
          ' spojenie vznešeného a ',
          { medzera: 'groteskného', napoveda: 'škaredé, smiešne, ohyzdné' },
          ', čo v románe najlepšie dokazuje postava Quasimoda.',
        ],
        vysvetlenie:
          'Práve tento program vysvetľuje, prečo je nositeľom najkrajšieho citu v románe najohyzdnejšia postava.',
      },
    ],
  },
  // === DOPLNIT_DIELA ===
]
