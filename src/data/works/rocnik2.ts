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
  {
    id: 'kapitanova-dcera',
    nazov: 'Kapitánova dcéra',
    autorId: 'puskin',
    rocnik: 2,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: true,
    zaner: 'historický román (novela s rámcom memoárov)',
    forma: 'próza — spomienkové rozprávanie v prvej osobe',
    rokVydania: '1836',
    obdobie: 'romantizmus s prvkami realizmu',
    miestoACas:
      'Rusko za vlády Kataríny II., roky 1772 – 1775; stepná pevnôstka Belogorsk pri Orenburgu, Orenburg, Kazaň a Petrohrad — čas Pugačovovho povstania',
    anotacia:
      'Mladý šľachtic nastúpi na vojenskú službu do zapadnutej stepnej pevnosti a uprostred veľkého povstania musí obstáť v láske aj v otázke česti. Historický román, v ktorom sa veľká dejinná vzbura ukazuje cez osud jedného človeka.',
    obsah: [
      'Petra Andrejeviča Grinjova, syna prísneho, no spravodlivého statkára, pošle otec namiesto do gardy do zapadnutej pevnôstky Belogorsk pri Orenburgu, aby si odslúžil službu ako skutočný vojak. Na cestu ho sprevádza starý sluha Saveľjič. V stepi ich zastihne snehová fujavica a z nej ich vyvedie neznámy chlap s tmavou bradou. Grinjov mu z vďaky daruje svoj zajačí kožúšok a pohostí ho — zdanlivá maličkosť, ktorá neskôr rozhodne o jeho živote.',
      'V pevnôstke, ktorej velí dobrácky kapitán Ivan Kuzmič Mironov, sa Grinjov zoznámi s jeho dcérou Mášou a zaľúbi sa do nej. Súperom mu je dôstojník Švabrin, zlomyseľný a cynický človek, ktorý bol do pevnosti preložený za trestný čin. Keď Švabrin Mášu očierni, Grinjov ho vyzve na dvojboj a je pri ňom zranený. Otec Grinjovovi sobáš s nemajetnou dievčinou zakáže, no medzitým sa k pevnosti priblíži väčšia hrozba.',
      'Pevnôstku obsadí vojsko Jemeljana Pugačova, kozáka, ktorý sa vydáva za zachráneného cára Petra III. Kapitán Mironov aj jeho žena Vasilisa Jegorovna zahynú, pretože odmietnu novému „cárovi“ prisahať. Grinjov prísahu tiež odmietne a má byť obesený, no Pugačov v ňom spozná mládenca, ktorý mu daroval kožúšok, a daruje mu život. Švabrin naopak prejde k povstalcom, stane sa veliteľom pevnosti a osirelú Mášu drží násilím vo svojej moci.',
      'Grinjov sa vráti s Pugačovovou pomocou do pevnosti a Mášu vyslobodí; Pugačov ich prekvapivo pustí na slobodu, hoci vie, že Grinjov je jeho protivník. Po potlačení povstania však Grinjova zatknú a obvinia zo zrady, pretože Švabrin pred súdom krivo svedčí o jeho priateľstve s Pugačovom. Grinjov sa nechce obhajovať Mášiným menom, aby ju neuvrhol do procesu, a hrozí mu vyhnanstvo na Sibír.',
      'Rozhodnutie prinesie Máša: sama sa vydá do Petrohradu, v parku v Carskom Sele sa neúmyselne stretne s cárovnou Katarínou II. a rozpovie jej pravdu. Cárovna Grinjova omilostí a zaručí mladým sobáš. Pugačovovo povstanie je krvavo potlačené a Pugačova verejne popravia — Grinjov je pri poprave prítomný a Pugačov ho v zhromaždenom ľude ešte spozná. Román tak končí šťastne pre dvojicu, ale trpko pre vzbúrencov.',
    ],
    kompozicia:
      'Štrnásť krátkych kapitol s mottami (často z ľudových piesní a prísloví), rámcované fikciou, že ide o rodinné zápisky Petra Andrejeviča Grinjova, ktoré vydavateľ iba uverejnil. Kompozícia je chronologická, dej sa opakovane vracia k motívu Pugačovovho daru za dar (kožúšok — život — sloboda). Kontrastné zrkadlenie Grinjova a Švabrina drží vnútornú stavbu diela.',
    postavy: [
      {
        meno: 'Peter Andrejevič Grinjov',
        charakteristika:
          'Mladý šľachtic a rozprávač, ktorý dozrieva od rozmazleného chlapca k mužovi s pevnou cťou. Odmietne prisahať samozvancovi, no zároveň dokáže byť vďačný a ľudský aj k nepriateľovi. Je nositeľom myšlienky, že česť sa má zachovať od mladosti.',
        rola: 'hlavna',
      },
      {
        meno: 'Maša (Marja Ivanovna) Mironová',
        charakteristika:
          'Dcéra kapitána Mironova, tichá a zdanlivo nesmelá dievčina, ktorá v rozhodujúcej chvíli prejaví najväčšiu odvahu z celého románu. Sama sa vydá k cárovnej a zachráni Grinjova pred vyhnanstvom.',
        rola: 'hlavna',
      },
      {
        meno: 'Jemeljan Pugačov',
        charakteristika:
          'Historický vodca kozáckeho a rolníckeho povstania, ktorý sa vydáva za cára Petra III. Je krutý voči tým, čo mu odmietnu prisahať, no zároveň veľkodušný a ľudský k tomu, kto sa k nemu zachoval dobre. Puškin z neho urobil rozporný, nie jednoznačne čierny charakter.',
        rola: 'hlavna',
      },
      {
        meno: 'Alexej Švabrin',
        charakteristika:
          'Dôstojník, Grinjovov súper v láske a mravný protiklad. Zrádza prísahu, prejde k povstalcom, Mášu väzní a nakoniec krivo svedčí na súde. Ukazuje, čo znamená stratiť česť.',
        rola: 'hlavna',
      },
      {
        meno: 'Saveľjič',
        charakteristika:
          'Starý verný sluha, ktorý Grinjova vychoval a neopustí ho ani v smrteľnom nebezpečenstve. Vnáša do diela ľudový humor aj obraz oddanosti.',
        rola: 'vedlajsia',
      },
      {
        meno: 'kapitán Ivan Kuzmič Mironov',
        charakteristika:
          'Veliteľ pevnôstky, dobrácky, prostý a statočný vojak, ktorý zomrie preto, že odmietne uznať samozvanca. Spolu so ženou Vasilisou Jegorovnou predstavuje svet obyčajnej vernosti povinnosti.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'česť a vernosť prísahe ako skúška charakteru',
      'ľudové povstanie a jeho obojstranná krutosť',
      'láska, ktorá obstojí v dejinnej búrke',
      'milosť a vďačnosť ako protiváha násilia',
      'dozrievanie mladého človeka',
    ],
    motivy: [
      'snehová fujavica ako predzvesť osudového stretnutia',
      'darovaný zajačí kožúšok',
      'dvojboj so Švabrinom',
      'prísaha samozvancovi a jej odmietnutie',
      'Máškina cesta do Petrohradu a stretnutie s cárovnou',
      'poprava Pugačova',
    ],
    jazyk: [
      'rozprávanie v prvej osobe (ich-forma) v podobe memoárov — dáva textu dôveryhodnosť a osobný tón',
      'motta na začiatku kapitol z ľudových piesní a prísloví — zhusťujú význam kapitoly a vnášajú ľudový hlas',
      'kontrast dvoch charakterov (Grinjov – Švabrin) ako základný štylistický princíp hodnotenia',
      'jednoduchá, vecná a úsporná veta bez ozdobných opisov — Puškinov posun od romantickej ozdobnosti k realistickej striedmosti',
      'ľudová frazeológia a hovorová reč v replikách Saveľjiča a kozákov, ktorá charakterizuje postavy podľa ich stavu',
      'symbol — fujavica a step ako obraz dejinného chaosu, v ktorom človek stráca smer',
      'dobové dokumentárne detaily (vojenské hodnosti, nariadenia, priebeh povstania) ako historický kolorit',
    ],
    citaty: [
      {
        text: '„Staraj sa o šaty, kým sú nové, a o česť od mladosti.“',
        zdroj: 'ruské príslovie použité ako motto diela',
      },
    ],
    maturitneMinimum: [
      'Puškin je zakladateľ novej ruskej literatúry a moderného ruského literárneho jazyka; Kapitánova dcéra je jeho posledná a najvyzretejšia prozaická práca.',
      'Dielo stojí na prechode od romantizmu k realizmu: romantická je výnimočná situácia a veľkodušný vzbúrenec, realistická je vecná kompozícia, historická vernosť a psychológia postáv.',
      'Historickým pozadím je Pugačovovo povstanie (1773 – 1775); Puškin k téme napísal aj historickú prácu Dejiny Pugačova.',
      'Typická maturitná otázka: ako sa v diele prelína osobný príbeh s dejinnými udalosťami a akú funkciu má motív zajačieho kožúška.',
      'Dvojica Grinjov – Švabrin je učebnicovým príkladom kontrastnej charakteristiky: rovnaká situácia, opačné rozhodnutie.',
    ],
    ulohy: [
      {
        id: 'kapitanova-dcera-k1',
        typ: 'kviz',
        otazka: 'Prečo Pugačov daruje Grinjovovi život, hoci ten mu odmietne prisahať?',
        moznosti: [
          'spozná v ňom mládenca, ktorý mu v stepi daroval zajačí kožúšok',
          'Grinjov mu prisľúbi, že prejde k povstalcom',
          'zachránila ho prosba cárovnej Kataríny II.',
          'Švabrin sa za Grinjova prihovorí',
        ],
        spravna: 0,
        vysvetlenie:
          'Pugačov si pamätá Grinjovovu vďačnosť z fujavice. Motív daru za dar sa v diele opakuje a ukazuje vzbúrenca ako rozporného, nie jednoznačne krutého človeka.',
      },
      {
        id: 'kapitanova-dcera-k2',
        typ: 'kviz',
        otazka: 'Kto v závere zachráni Grinjova pred odsúdením za zradu?',
        moznosti: [
          'Máša, ktorá sa vydá do Petrohradu a prihovorí sa u cárovnej',
          'Saveľjič svojím svedectvom pred súdom',
          'Grinjovov otec svojím vplyvom v gardovom regimente',
          'sám Pugačov pred popravou prizná pravdu',
        ],
        spravna: 0,
        vysvetlenie:
          'Tichá Máša sa v rozhodujúcej chvíli prejaví ako najodvážnejšia postava diela: dostane sa ku Kataríne II. a Grinjov je omilostený.',
      },
      {
        id: 'kapitanova-dcera-k3',
        typ: 'kviz',
        otazka: 'Aká je kompozičná forma diela?',
        moznosti: [
          'rodinné zápisky (memoáre) Grinjova, ktoré vydavateľ len uverejnil',
          'súbor listov medzi Grinjovom a Mášou',
          'objektívne rozprávanie vševediaceho rozprávača',
          'dramatický dialóg rozdelený na dejstvá',
        ],
        spravna: 0,
        vysvetlenie:
          'Puškin použil rámec nájdených rodinných zápiskov a rozprávanie v prvej osobe, čím príbehu dodal dôveryhodnosť očitého svedka.',
      },
      {
        id: 'kapitanova-dcera-k4',
        typ: 'kviz',
        otazka: 'Ako sa v diele zachová Švabrin?',
        moznosti: [
          'prejde k povstalcom, väzní Mášu a krivo svedčí proti Grinjovovi',
          'zomrie pri obrane pevnosti so cťou',
          'odíde do Petrohradu a už sa nevráti',
          'zmieri sa s Grinjovom a stane sa jeho svedkom na svadbe',
        ],
        spravna: 0,
        vysvetlenie:
          'Švabrin je mravným protikladom Grinjova: v tej istej situácii zradí prísahu, zneužije svoju moc a napokon lživo svedčí. Kontrast oboch postáv nesie hodnotenie diela.',
      },
      {
        id: 'kapitanova-dcera-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave jej úlohu v diele.',
        pary: [
          { vlavo: 'Peter Grinjov', vpravo: 'rozprávač, mladý šľachtic verný prísahe' },
          { vlavo: 'Jemeljan Pugačov', vpravo: 'vodca povstania vydávajúci sa za cára Petra III.' },
          { vlavo: 'Alexej Švabrin', vpravo: 'zradca a Grinjovov mravný protiklad' },
          { vlavo: 'Saveľjič', vpravo: 'verný starý sluha' },
          { vlavo: 'Katarína II.', vpravo: 'cárovna, ktorá Grinjova omilostí' },
        ],
        vysvetlenie:
          'Dielo staví postavy do párov a protikladov: vernosť proti zrade, krutosť povstania proti veľkodušnosti jednotlivca.',
      },
      {
        id: 'kapitanova-dcera-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o diele.',
        text: [
          'Grinjov slúži v pevnôstke ',
          { medzera: 'Belogorsk', napoveda: 'stepná pevnôstka pri Orenburgu' },
          ', kde sa zaľúbi do kapitánovej dcéry ',
          { medzera: 'Máše', napoveda: 'Marja Ivanovna Mironová' },
          '. Povstanie vedie kozák ',
          { medzera: 'Pugačov', napoveda: 'vydáva sa za cára Petra III.' },
          '.',
        ],
        vysvetlenie:
          'Osudy troch postáv sa prepletajú: súkromný príbeh lásky sa rozvíja priamo v centre historického povstania.',
      },
      {
        id: 'kapitanova-dcera-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň údaje o zaradení diela.',
        text: [
          'Kapitánova dcéra vyšla v roku ',
          { medzera: '1836', napoveda: 'rok pred Puškinovou smrťou' },
          ' a jej historickým pozadím je povstanie z rokov ',
          { medzera: '1773 – 1775', napoveda: 'za vlády Kataríny II.' },
          '.',
        ],
        vysvetlenie:
          'Puškin k téme napísal aj historickú prácu Dejiny Pugačova, takže román stojí na doloženom archívnom výskume.',
      },
    ],
  },
  {
    id: 'narecja-slovenskuo',
    nazov: 'Nárečja slovenskuo a potreba písaňja v tomto nárečí',
    autorId: 'stur',
    rocnik: 2,
    druh: 'proza',
    literatura: 'slovenska',
    standardizovane: false,
    zaner: 'jazykovedná a programová (polemická) práca',
    forma: 'próza — odborný výklad a obhajoba, napísaná už v novej slovenčine',
    rokVydania: '1846',
    obdobie: 'slovenský romantizmus (štúrovská generácia)',
    miestoACas:
      'Prešporok (Bratislava), 1846; ide o reakciu na jazykovú situáciu Slovákov v Uhorsku v 40. rokoch 19. storočia',
    anotacia:
      'Programová práca, v ktorej Ľudovít Štúr zdôvodňuje, prečo Slováci potrebujú vlastný literárny jazyk založený na stredoslovenskom nárečí. Základný text slovenského národného obrodenia — nie dej, ale argumentácia.',
    obsah: [
      'Štúr vychádza z presvedčenia, že Slováci sú samostatný národ, nie iba vetva Čechov. Odvoláva sa na dobovú filozofiu dejín: každý národ má svoj vlastný duchovný obsah a svoje poslanie, ktoré môže naplniť len vo vlastnom jazyku. Ak Slováci nemajú spisovný jazyk, nemajú nástroj, ktorým by tento obsah vyjadrili, a zostanú bez vlastnej literatúry a vzdelanosti. Jazyk teda nie je len technický prostriedok dorozumievania, ale prejav národnej existencie.',
      'Druhá línia argumentácie je praktická a mieri k ľudu. Doteraz používaná bibličtina (čeština kralickej Biblie) je pre slovenského sedliaka málo zrozumiteľná, a preto ho literatúra nemôže osloviť ani vzdelávať. Bernolákovčina zas vychádzala zo západoslovenského úzu a nezachytila jazyk väčšiny. Ak sa má národ pozdvihnúť, musí sa k nemu hovoriť rečou, ktorú skutočne pozná — a tou je živá reč slovenského vidieka.',
      'Za základ spisovnej normy Štúr volí stredoslovenské nárečie. Zdôvodňuje to tým, že je najrozšírenejšie, najčistejšie, najmenej dotknuté cudzími vplyvmi a najbližšie ostatným slovanským jazykom, takže ho porozumejú aj Slováci z ostatných oblastí. Pravopis stavia na fonetickom princípe („píš, ako slyšíš“), preto sa v texte stretávame s podobami ako nárečja, písaňja či ňje. Gramatickú stránku nového jazyka rozpracoval v súbežnej práci Náuka reči slovenskej.',
      'Tretia línia je polemická. Štúr odpovedá odporcom, najmä českým a slovenským zástancom jednotného česko-slovenského literárneho jazyka (Ján Kollár a autori zborníka Hlasové o potrebe jednoty…), ktorí novú slovenčinu vnímali ako rozvrat slovanskej jednoty. Štúr namieta, že skutočná slovanská vzájomnosť nevzniká zotretím rozdielov, ale tým, že každý národ prispeje vlastným rozvinutým hlasom. Rozdelenie jazyka podľa neho neoslabuje Slovanstvo, ale obohacuje ho.',
      'Významom práca prekročila jazykovedu a stala sa politickým programom. Štúrovčina bola prijatá na stretnutí Štúra, Hurbana a Hodžu na Hlbokom (1843) a presadila sa v almanachu Nitra a v spolku Tatrín; roku 1852 bola po Hattalovej úprave (Krátka mluvnica slovenská) prijatá aj odporcami a v podstatnej časti platí podnes. Po roku 1846 na štúrovčine vznikla celá básnická generácia — Sládkovič, Botto, Kráľ, Chalupka — takže Nárečja slovenskuo stojí pri zrode modernej slovenskej literatúry.',
    ],
    kompozicia:
      'Odborný výklad rozdelený na časti: filozoficko-historické zdôvodnenie samostatnosti slovenského národa, praktické zdôvodnenie potreby zrozumiteľného jazyka pre ľud, výber stredoslovenského nárečia s pravopisnými zásadami a polemická odpoveď odporcom. Dvojica prác Nárečja slovenskuo (obhajoba) a Náuka reči slovenskej (gramatika) tvorí celok: prvá hovorí prečo, druhá ako.',
    postavy: [
      {
        meno: 'Ľudovít Štúr (autor a argumentujúci subjekt)',
        charakteristika:
          'Vodca slovenského národného hnutia, ktorý v texte vystupuje ako filozof dejín, jazykovedec aj politický organizátor. Argumentuje pokojne, no s presvedčením, že jazyk rozhoduje o existencii národa.',
        rola: 'hlavna',
      },
      {
        meno: 'slovenský ľud',
        charakteristika:
          'Adresát celého programu. Štúr ho vníma ako nositeľa čistého jazyka a národnej sily, ktorý však treba osloviť rečou, čo mu je zrozumiteľná.',
        rola: 'hlavna',
      },
      {
        meno: 'Ján Kollár a zástancovia bibličtiny',
        charakteristika:
          'Myšlienkoví odporcovia, ktorí obhajovali jednotný česko-slovenský literárny jazyk a novú slovenčinu považovali za rozvrat slovanskej jednoty. Štúr s nimi vedie vecnú polemiku.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Jozef Miloslav Hurban a Michal Miloslav Hodža',
        charakteristika:
          'Štúrovi najbližší spolupracovníci, s ktorými sa roku 1843 na Hlbokom dohodol na uzákonení novej slovenčiny a ktorí ju prakticky presadzovali v Nitre a v Tatríne.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'jazyk ako podmienka existencie národa',
      'samostatnosť slovenského národa voči českej i uhorskej asimilácii',
      'vzdelanie a pozdvihnutie ľudu',
      'slovanská vzájomnosť v podobe rovnoprávnych národov',
    ],
    motivy: [
      'bibličtina ako jazyk nezrozumiteľný ľudu',
      'stredoslovenské nárečie ako najčistejšia podoba reči',
      'fonetický pravopis („píš, ako slyšíš“)',
      'polemika so zborníkom Hlasové o potrebe jednoty',
      'duch národa a jeho poslanie',
      'stretnutie na Hlbokom roku 1843',
    ],
    jazyk: [
      'odborný výkladový štýl s presnou terminológiou — text argumentuje, nie rozprává, a preto pracuje s definíciami a dôkazmi',
      'argumentácia od všeobecného k praktickému (najprv filozofia dejín, potom konkrétny výber nárečia) — logická gradácia dôvodov',
      'polemické oslovenie a vyvracanie protiargumentov, čím sa text stáva dialógom s odporcami',
      'rétorické otázky a apely na národné povedomie, ktoré odborný výklad menia na výzvu',
      'sám text je dôkazom tézy: je napísaný novou slovenčinou s fonetickým pravopisom (nárečja, písaňja), takže forma potvrdzuje obsah',
      'hegelovská terminológia (duch národa, vývoj ľudstva) prevzatá z nemeckej filozofie ako opora dôkazu',
      'odvolávanie sa na autority a doklady zo slovanskej filológie na zvýšenie presvedčivosti',
    ],
    maturitneMinimum: [
      'Nová slovenčina bola dohodnutá roku 1843 na Hlbokom (Štúr, Hurban, Hodža), prvýkrát prakticky použitá v almanachu Nitra (II. ročník, 1844) a teoreticky obhájená roku 1846 v prácach Nárečja slovenskuo a Náuka reči slovenskej.',
      'Základom je stredoslovenské nárečie a fonetický pravopis; roku 1852 ju Hattalova reforma upravila do podoby blízkej dnešnej.',
      'Štúrove hlavné argumenty: národ potrebuje vlastný jazyk, ľud musí literatúre rozumieť, stredná slovenčina je najrozšírenejšia a slovanská jednota sa dosahuje rovnoprávnosťou, nie splynutím.',
      'Hlavným odporcom bol Ján Kollár so zborníkom Hlasové o potrebe jednoty literárneho jazyka pre Čechov, Moravanov a Slovákov (1846).',
      'Typická maturitná otázka: vysvetli dôvody uzákonenia štúrovskej slovenčiny a jej význam pre rozvoj slovenskej literatúry.',
    ],
    ulohy: [
      {
        id: 'narecja-slovenskuo-k1',
        typ: 'kviz',
        otazka: 'Ktoré nárečie si Štúr vybral za základ novej spisovnej slovenčiny?',
        moznosti: ['stredoslovenské', 'západoslovenské', 'východoslovenské', 'záhorské'],
        spravna: 0,
        vysvetlenie:
          'Štúr ho pokladal za najrozšírenejšie, najčistejšie a najbližšie ostatným slovanským jazykom, takže mu porozumejú Slováci zo všetkých oblastí.',
      },
      {
        id: 'narecja-slovenskuo-k2',
        typ: 'kviz',
        otazka: 'Ktorý jazyk používali Slováci ako literárny pred uzákonením štúrovčiny?',
        moznosti: [
          'bibličtinu, teda češtinu kralickej Biblie',
          'latinčinu bez výnimky',
          'maďarčinu ako úradný jazyk Uhorska',
          'staroslovienčinu',
        ],
        spravna: 0,
        vysvetlenie:
          'Bibličtina bola pre slovenského sedliaka málo zrozumiteľná, a preto ním literatúra nemohla oslovovať ani vzdelávať ľud — to je Štúrov hlavný praktický argument.',
      },
      {
        id: 'narecja-slovenskuo-k3',
        typ: 'kviz',
        otazka: 'Ktorá práca tvorí gramatický doplnok k Nárečju slovenskuo?',
        moznosti: [
          'Náuka reči slovenskej',
          'Krátka mluvnica slovenská',
          'Grammatica Slavica',
          'Dissertatio philologico-critica',
        ],
        spravna: 0,
        vysvetlenie:
          'Náuka reči slovenskej (1846) opisuje gramatiku novej slovenčiny. Nárečja slovenskuo zdôvodňuje, prečo je nový jazyk potrebný, Náuka ukazuje, ako funguje.',
      },
      {
        id: 'narecja-slovenskuo-k4',
        typ: 'kviz',
        otazka: 'Kto bol hlavným odporcom uzákonenia novej slovenčiny?',
        moznosti: [
          'Ján Kollár so zborníkom Hlasové o potrebe jednoty literárneho jazyka',
          'Anton Bernolák s Jazykovedno-kritickou rozpravou',
          'Michal Miloslav Hodža',
          'Martin Hattala',
        ],
        spravna: 0,
        vysvetlenie:
          'Kollár obhajoval jednotný česko-slovenský literárny jazyk a novú slovenčinu považoval za rozvrat slovanskej jednoty. Štúr mu odpovedal, že jednota vzniká rovnoprávnosťou, nie splynutím.',
      },
      {
        id: 'narecja-slovenskuo-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k roku alebo dielu jeho význam pre slovenčinu.',
        pary: [
          { vlavo: '1843, Hlboké', vpravo: 'dohoda Štúra, Hurbana a Hodžu o novej slovenčine' },
          { vlavo: 'almanach Nitra (1844)', vpravo: 'prvé praktické použitie štúrovčiny' },
          { vlavo: 'Nárečja slovenskuo (1846)', vpravo: 'teoretická obhajoba nového jazyka' },
          { vlavo: 'Náuka reči slovenskej (1846)', vpravo: 'gramatika novej slovenčiny' },
          { vlavo: 'Hattalova reforma (1852)', vpravo: 'úprava pravopisu prijatá aj odporcami' },
        ],
        vysvetlenie:
          'Uzákonenie slovenčiny bol proces: dohoda, prvá prax, teoretická obhajoba, gramatika a nakoniec kompromisná reforma, ktorou sa jazyk zjednotil.',
      },
      {
        id: 'narecja-slovenskuo-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o Štúrovej jazykovej reforme.',
        text: [
          'Štúrova práca Nárečja slovenskuo vyšla v roku ',
          { medzera: '1846', napoveda: 'rovnaký rok ako Náuka reči slovenskej' },
          ' a za základ spisovného jazyka zvolila ',
          { medzera: 'stredoslovenské nárečie', napoveda: 'najrozšírenejšie a najčistejšie' },
          '. Pravopis stavia na zásade ',
          { medzera: 'píš, ako slyšíš', napoveda: 'fonetický princíp' },
          '.',
        ],
        vysvetlenie:
          'Fonetický pravopis vidíme aj na samotnom názve práce (nárečja, písaňja) — text je teda zároveň dôkazom vlastnej tézy.',
      },
    ],
  },
  {
    id: 'mor-ho',
    nazov: 'Mor ho!',
    autorId: 'chalupka',
    rocnik: 2,
    druh: 'poezia',
    literatura: 'slovenska',
    standardizovane: true,
    zaner: 'lyrickoepická básnická skladba s črtami hrdinského eposu',
    forma: 'poézia — dvanásťslabičný verš so združeným rýmom, bez členenia na strofy',
    rokVydania: '1864',
    obdobie: 'slovenský romantizmus (štúrovská generácia)',
    miestoACas:
      'breh Dunaja na južnom pomedzí slovenského (slovanského) územia, staroveká doba stretnutia Slovanov s rímskym cisárom (podľa podania z roku 358)',
    anotacia:
      'Hrdinská skladba o skupine slovanských mládencov, ktorí prídu k rímskemu cisárovi s ponukou pokoja a namiesto úcty sa dočkajú pohŕdania. Najznámejšia oslava slobody a hrdosti v slovenskej poézii.',
    obsah: [
      'Skladba sa začína obrazom letiacich orlov z Tatier, ktorí sa spúšťajú na juh a prelietajú Dunaj — je to obrazné uvedenie družiny slovenských mládencov, ktorí prichádzajú k hraniciam svojho rodu. Na brehu Dunaja stojí rímske táborisko a v ňom cisár, ktorý si prišiel podmaniť nové krajiny. Úvodné verše budujú monumentálnu, vznešenú atmosféru: rieka, hrad na brale a hrdý sprievod. Už tu sa naznačí protiklad dvoch svetov — mierneho, pohostinného ľudu a dobyvateľského vojska.',
      'Družina vstúpi do cisárovho stánku a jej hovorca vysloví posolstvo: prichádzajú v mieri, ponúkajú dary a priateľstvo, chcú žiť pokojne na vlastnej zemi. Charakterizujú svoj národ ako pracovitý, pohostinný a mierumilovný, ktorý však nikdy nebude nikomu sluhom. Reč je dôstojná a pokojná, bez vyhrážok. Práve tento pokoj tvorí kontrast k tomu, čo nasleduje.',
      'Cisár odpovedá pohŕdavo a povýšenecky: svet už patrí Rímu a Slovanov považuje za budúcich otrokov. Jeho slová sú urážkou nie jedného človeka, ale celého rodu. V tom okamihu sa mení tón skladby — z posolstva sa stane výzva do boja. Zaznie povestné „Mor ho!“, ktoré je súčasne vojnovým pokrikom aj mravným rozsudkom nad tým, kto siahne na slobodu iných.',
      'Nasleduje opis nerovného boja, budovaný gradáciou: hŕstka mládencov sa vrhne na cisárske vojsko a zabíja, kým ju presila nezničí. Rimania padajú po desiatkach, ale útočníkov je stále viac a slovenskí junáci zomierajú jeden po druhom. Bojová scéna je dynamická, plná pohybu, zvuku a krvi; hrdinovia sa v nej nevzdávajú a neprosia o milosť.',
      'Družina padne do posledného muža — teda z vojenského hľadiska prehrá. Skladba však končí morálnym víťazstvom: cisár síce stojí nad mŕtvymi telami, ale je zahanbený, pretože jeho vojsko zvíťazilo len počtom, nie odvahou. Na hrdinov padá sláva, na víťaza hanba. Základná myšlienka diela teda znie: lepšie je zomrieť slobodný než žiť ako rab, a mravná pravda je silnejšia než moc.',
    ],
    kompozicia:
      'Nestrofická skladba v dvanásťslabičnom verši so združeným rýmom, členená na úvodný opisný obraz (orly z Tatier, Dunaj, rímske táborisko), reč slovenského posolstva, pohŕdavú odpoveď cisára, gradovaný opis boja a záverečné hodnotenie, ktoré premieňa fyzickú prehru na mravné víťazstvo. Refrénovito sa vracia výzva „Mor ho!“, ktorá delí skladbu na časti pred bojom a v boji. Predlohou bola historická zmienka o stretnutí Slovanov s rímskym cisárom, ktorú Chalupka poznal zo Šafárikových prác.',
    postavy: [
      {
        meno: 'družina slovenských junákov',
        charakteristika:
          'Kolektívny hrdina skladby — skupina mladých mužov, ktorí prichádzajú v mieri, no za urážku rodu bez váhania položia život. Nevystupujú ako jednotlivci s menami, lebo predstavujú celý národ.',
        rola: 'hlavna',
      },
      {
        meno: 'hovorca (vodca) družiny',
        charakteristika:
          'Vyslovuje posolstvo o pohostinnosti a mierumilovnosti svojho ľudu a zároveň hrdé odmietnutie poddanstva. Jeho reč je pokojná a dôstojná, čím ešte viac obnaží cisárovu pýchu.',
        rola: 'hlavna',
      },
      {
        meno: 'rímsky cisár',
        charakteristika:
          'Dobyvateľ presvedčený, že svet patrí Rímu a ostatné národy sú určené na službu. Je stelesnením pýchy a násilnej moci; v závere víťazí zbraňami, ale prehráva morálne.',
        rola: 'hlavna',
      },
      {
        meno: 'rímske vojsko',
        charakteristika:
          'Obrovská presila, ktorá premôže hŕstku junákov len počtom. Slúži ako kontrast: kvantita moci proti kvalite odvahy.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'sloboda ako najvyššia hodnota, za ktorú sa oplatí zomrieť',
      'láska k vlasti a k vlastnému národu',
      'mravné víťazstvo nad fyzickou presilou',
      'hrdosť a dôstojnosť malého národa voči veľkej moci',
    ],
    motivy: [
      'orly letiace z Tatier',
      'Dunaj ako hranica a rieka dejín',
      'posolstvo mieru a dary cisárovi',
      'pohŕdavá cisárova odpoveď',
      'bojový pokrik „Mor ho!“',
      'hanba víťaza nad mŕtvymi hrdinami',
    ],
    jazyk: [
      'gradácia — stupňovanie napätia od pokojného opisu Dunaja cez posolstvo a urážku až k opisu boja, ktorý vrcholí výzvou „Mor ho!“',
      'kontrast — mierumilovný, pohostinný ľud proti pýche dobyvateľa; hŕstka junákov proti nespočetnému vojsku; sláva mŕtvych proti hanbe živého víťaza',
      'refrén a apostrofa — opakované zvolanie „Mor ho!“ funguje ako výzva do boja aj ako mravný rozsudok nad útočníkom',
      'symbol — orly z Tatier sú obrazom slobodných junákov, Dunaj hranicou domoviny, cisár symbolom násilnej moci',
      'epiteton a hyperbola v bojovej scéne (junáci ako levy, hromady mŕtvych) — zvyšujú monumentálnosť a hrdinský tón',
      'dvanásťslabičný verš so združeným rýmom bez strof — dodáva skladbe plynulý, vážny a slávnostný rytmus blízky eposu',
      'priama reč posolstva a cisára — dramatizuje text a z dvoch monológov vytvára ideový spor',
      'archaizmy a vysoký, slávnostný slovník (junák, rod, sláva, rab), ktoré text pozdvihujú do polohy hrdinského spevu',
    ],
    citaty: [
      {
        text: '„Zleteli orly z Tatry, tiahli na podolia, / ponad vysoké hory, ponad rovné polia.“',
        zdroj: 'úvodné verše skladby',
      },
      {
        text: '„Mor ho! – hoj mor ho! detvo môjho rodu, / kto kradmou rukou siahne na tvoju slobodu.“',
        zdroj: 'bojová výzva družiny',
      },
      {
        text: '„Mor ty len, a voľ nebyť, ako byť rabom.“',
        zdroj: 'základná myšlienka skladby',
      },
    ],
    maturitneMinimum: [
      'Samo Chalupka je najstarší zo štúrovcov; hlavné témy jeho poézie sú protiturecké boje, zbojníctvo a slávna minulosť Slovanov.',
      'Mor ho! vyšlo roku 1864 a vychádza z historickej zmienky o stretnutí Slovanov s rímskym cisárom pri Dunaji, ktorú autor poznal zo Šafárikových prác.',
      'Hlavná myšlienka: lepšie je zomrieť ako slobodný človek než žiť v poddanstve — fyzická prehra sa mení na mravné víťazstvo.',
      'Hrdinom je kolektív (družina), nie jednotlivec, čo je typické pre romantickú oslavu národa; postavy nemajú mená.',
      'Typická maturitná otázka: vysvetli kontrast a gradáciu v skladbe Mor ho! a povedz, čím je jej záver víťazstvom.',
      'Výzva „Mor ho!“ sa stala symbolom slovenského odporu — použili ju napríklad dobrovoľníci v revolúcii 1848 – 1849 aj Slovenské národné povstanie.',
    ],
    ulohy: [
      {
        id: 'mor-ho-k1',
        typ: 'kviz',
        otazka: 'S čím prichádza slovenská družina k rímskemu cisárovi?',
        moznosti: [
          's posolstvom mieru, darmi a ponukou priateľstva',
          's vyhlásením vojny a výzvou na dvojboj',
          'so žiadosťou o pomoc proti Turkom',
          's prosbou o prijatie do rímskeho vojska',
        ],
        spravna: 0,
        vysvetlenie:
          'Družina prichádza pokojne a dôstojne. Práve tento pokoj tvorí kontrast k cisárovej pýche a robí jeho urážku ešte krutejšou.',
      },
      {
        id: 'mor-ho-k2',
        typ: 'kviz',
        otazka: 'Ako sa skladba končí?',
        moznosti: [
          'družina padne do posledného muža, no cisár je zahanbený — hrdinovia vyhrávajú morálne',
          'družina zvíťazí a zaženie rímske vojsko za Dunaj',
          'cisár prijme dary a uzavrie so Slovanmi mier',
          'junáci sa vzdajú a odídu do poddanstva',
        ],
        spravna: 0,
        vysvetlenie:
          'Fyzicky junáci prehrajú, no víťaz nad mŕtvymi telami stojí s hanbou, pretože zvíťazil len presilou. Na tom je postavená hlavná myšlienka diela.',
      },
      {
        id: 'mor-ho-k3',
        typ: 'kviz',
        otazka: 'Kto je hrdinom skladby?',
        moznosti: [
          'kolektív — celá družina junákov bez vlastných mien',
          'jediný junák menom Janko',
          'rímsky cisár ako tragický hrdina',
          'vodca, ktorý boj prežije a odnesie správu domov',
        ],
        spravna: 0,
        vysvetlenie:
          'Hrdinom je kolektív, ktorý zastupuje celý národ. Anonymita postáv je zámerná — nejde o osud jedného človeka, ale o hodnoty spoločenstva.',
      },
      {
        id: 'mor-ho-k4',
        typ: 'kviz',
        otazka: 'Aká je veršová forma skladby Mor ho!?',
        moznosti: [
          'dvanásťslabičný verš so združeným rýmom, bez členenia na strofy',
          'sonet s dvoma kvartetami a dvoma tercetami',
          'časomerný hexameter podľa antického vzoru',
          'voľný verš bez rýmu a rytmu',
        ],
        spravna: 0,
        vysvetlenie:
          'Pravidelný dvanásťslabičný verš so združeným rýmom dáva skladbe plynulý slávnostný rytmus, aký sa hodí k hrdinskému spevu.',
      },
      {
        id: 'mor-ho-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k obrazu jeho význam v skladbe.',
        pary: [
          { vlavo: 'orly letiace z Tatier', vpravo: 'obraz slobodných slovenských junákov' },
          { vlavo: 'Dunaj', vpravo: 'hranica domoviny a rieka dejín' },
          { vlavo: 'rímsky cisár', vpravo: 'symbol pýchy a násilnej dobyvačnej moci' },
          { vlavo: 'výzva „Mor ho!“', vpravo: 'bojový pokrik a mravný rozsudok nad útočníkom' },
          { vlavo: 'hromady mŕtvych Rimanov', vpravo: 'hyperbola zdôrazňujúca hrdinstvo hŕstky' },
        ],
        vysvetlenie:
          'Skladba pracuje so symbolmi a protikladmi: každý obraz má hodnotiaci význam a spolu vytvárajú ideu slobody nad poddanstvom.',
      },
      {
        id: 'mor-ho-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o skladbe.',
        text: [
          'Skladba Mor ho! vyšla v roku ',
          { medzera: '1864', napoveda: 'šesťdesiate roky 19. storočia' },
          ' a jej dej sa odohráva na brehu rieky ',
          { medzera: 'Dunaj', napoveda: 'južná hranica slovenského územia' },
          ', kde družina stretne ',
          { medzera: 'rímskeho cisára', napoveda: 'dobyvateľ presvedčený, že svet patrí Rímu' },
          '.',
        ],
        vysvetlenie:
          'Historickou oporou je zmienka o stretnutí Slovanov s rímskym cisárom pri Dunaji, ktorú Chalupka poznal zo Šafárikových prác.',
      },
      {
        id: 'mor-ho-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň hlavnú myšlienku skladby.',
        text: [
          'Podľa skladby je lepšie zomrieť ako ',
          { medzera: 'slobodný', napoveda: 'protiklad slova rab' },
          ' človek, než žiť ako ',
          { medzera: 'rab', napoveda: 'sluha, poddaný' },
          '. Junáci síce v boji padnú, no víťazia ',
          { medzera: 'morálne', napoveda: 'mravne, nie zbraňami' },
          '.',
        ],
        vysvetlenie:
          'Táto myšlienka urobila zo skladby symbol slovenského odporu — výzvu „Mor ho!“ prevzali dobrovoľníci v revolúcii 1848 – 1849 aj Slovenské národné povstanie.',
      },
    ],
  },
  {
    id: 'zakliata-panna-vo-vahu',
    nazov: 'Zakliata panna vo Váhu a divný Janko',
    autorId: 'kral',
    rocnik: 2,
    druh: 'poezia',
    literatura: 'slovenska',
    standardizovane: true,
    zaner: 'lyrickoepická balada',
    forma: 'poézia — kombinácia lyrickej spovede a epického baladického rozprávania',
    rokVydania: '1844',
    obdobie: 'slovenský romantizmus (štúrovská generácia)',
    miestoACas:
      'slovenská dedina a rieka Váh, čas nie je presne určený; kľúčovou nocou je Jánska noc (noc na 24. júna), keď podľa povesti možno vykúpiť zakliatu pannu',
    anotacia:
      'Balada o mladíkovi, ktorý sa nevie vpísať do života svojej dediny a rozhodne sa vykúpiť pannu zakliatu vo vlnách Váhu. Najznámejšie dielo o romantickom vzbúrencovi v slovenskej poézii.',
    obsah: [
      'Skladba sa začína lyrickou časťou, v ktorej sa predstaví „divný Janko“ — mladý muž, ktorý sa cíti v dedine cudzí. Nebaví ho práca na poli ani veselosť mládeže, radšej chodí sám po nociach, po horách a k vode. Ľudia ho preto majú za čudáka, matka nad ním plače a on sám hovorí o sebe ako o človeku bez pokoja a bez miesta na svete. Táto časť je vlastne vnútorná spoveď: Janko je nespokojný so svetom, no ešte nevie, čo so svojou nespokojnosťou urobiť.',
      'V druhej časti sa Janko rozhodne dokázať, že jeho nepokoj má zmysel. Ožíva v ňom ľudová povesť o panne zakliatej vo Váhu: v Jánskej noci sa dá vyslobodiť, ale len ten, kto sa nebude báť, kto neochabne a kto vydrží všetko, čo ho v rieke čaká. Pre Janka je to príležitosť vykonať výnimočný, hrdinský čin — niečo, čím sa jeho život naplní. Rozhodne sa teda skočiť do Váhu a pannu vykúpiť.',
      'Nasleduje baladický opis noci na rieke: mesiac, tmavá voda, tajomné zvuky a strach, ktorý však Janka neodvráti. Vrhne sa do vĺn a pláva za tým, čo považuje za svoje poslanie. Voda ho však pohltí — panna zostáva nevykúpená a Janko sa z rieky nevráti. Skúška bola nad ľudské sily a hrdinský čin sa premení na smrť.',
      'Ráno ľudia vylovia z Váhu Jankovo mŕtve telo. Pochovajú ho, ale bez slávy a takmer bez pochopenia: dedina v ňom naďalej vidí len čudáka, ktorý sa utopil pre nerozum. Nad hrobom nezaznie oslava, ale skôr ticho a odsúdenie. Kontrast medzi veľkosťou Jankovho úmyslu a chladom jeho okolia je vrcholom tragiky skladby.',
      'V záverečnej lyrickej časti sa opäť ozve hlas lyrického subjektu, ktorý nad Jankovým osudom uvažuje. Vyznieva z nej smútok nad tým, že výnimočný človek nenachádza v spoločnosti miesto a jeho vzbura sa končí nadarmo. Zároveň tu ostáva otázka bez odpovede: či mal Janko konať inak, alebo či je taký koniec údelom každého, kto sa nezmieri s daným svetom. Skladba tak vyjadruje typický romantický rozpor medzi snom a skutočnosťou.',
    ],
    kompozicia:
      'Trojdielna stavba s lyrickým rámcom: úvodná lyrická spoveď divného Janka, stredná epická (baladická) časť o vykupovaní zakliatej panny a Jankovej smrti a záverečná lyrická reflexia nad jeho osudom. Striedajú sa opisné, dialogické a monologické pasáže, mení sa aj rytmus a dĺžka verša podľa nálady. Prvýkrát vyšla roku 1844 v časopise Orol tatránski.',
    postavy: [
      {
        meno: 'divný Janko',
        charakteristika:
          'Mladý muž, ktorý sa cíti v dedine cudzí a odmieta jej obyčajný život; hľadá výnimočný čin, ktorým by svoj nepokoj naplnil. Je typickým romantickým hrdinom — samotárom, vzbúrencom a rozorvancom, ktorý sa svojou vzburou napokon zničí.',
        rola: 'hlavna',
      },
      {
        meno: 'zakliata panna',
        charakteristika:
          'Bytosť z ľudovej povesti, uväznená vo vlnách Váhu a vykúpiteľná iba v Jánsku noc. Nie je skutočnou postavou, ale obrazom nedosiahnuteľného ideálu, za ktorým sa Janko vrhne do vody.',
        rola: 'hlavna',
      },
      {
        meno: 'Jankova mať',
        charakteristika:
          'Matka, ktorá nad synovou čudnosťou plače a nerozumie mu, hoci ho miluje. Predstavuje bolesť blízkych, ktorí vzbúrenca nedokážu zadržať ani pochopiť.',
        rola: 'vedlajsia',
      },
      {
        meno: 'dedinský ľud',
        charakteristika:
          'Kolektív, ktorý žije zaužívaným poriadkom a všetko nezvyčajné odsudzuje. Janka má za čudáka za života aj po smrti, čím sa jeho tragédia zdvojnásobuje.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'osamelosť výnimočného jednotlivca v spoločnosti',
      'romantická vzbura proti všednosti a jej tragický koniec',
      'túžba po veľkom čine a jeho nedosiahnuteľnosť',
      'rozpor medzi snom (ideálom) a skutočnosťou',
      'nepochopenie zo strany rodiny a dediny',
    ],
    motivy: [
      'Jánska noc ako čarovný, hraničný čas',
      'zakliata panna vo Váhu',
      'nočné blúdenie po horách a pri vode',
      'skok do rieky a utopenie',
      'matkin plač',
      'pochovanie bez slávy a bez pochopenia',
    ],
    jazyk: [
      'kontrast — veľkosť Jankovho úmyslu proti chladnému odsúdeniu dediny; čarovná noc proti smrteľne chladnej vode',
      'symbol — zakliata panna je obrazom nedosiahnuteľného ideálu, Váh silou osudu, ktorú človek neprekoná',
      'personifikácia prírody (rieka, mesiac, noc konajú a hovoria) — príroda je spoluhráčom deja, nie iba kulisou',
      'striedanie lyrickej spovede a epického rozprávania, vďaka ktorému čitateľ vidí Janka zvnútra aj zvonka',
      'baladický spád: náznak, stupňovanie napätia a rýchly tragický koniec bez zmierenia',
      'nepravidelný, premenlivý verš a rytmus, ktorý sa prispôsobuje nálade — pokojný v spovedi, trhaný v scéne na rieke',
      'prvky ľudovej slovesnosti (povesť, čarovná Jánska noc, dedinská reč) spojené s modernou subjektívnou výpoveďou',
    ],
    maturitneMinimum: [
      'Janko Kráľ je najrevolučnejší a najosobitejší zo štúrovských básnikov; býva označovaný za rozorvaného romantika a jeho hrdinovia sa búria proti svetu aj proti sebe.',
      'Zakliata panna vo Váhu a divný Janko vyšla roku 1844 v Orle tatránskom a je vrcholom slovenskej romantickej balady.',
      'Divný Janko je autoštylizáciou: nesie v sebe autorovu vlastnú nespokojnosť, samotu a vzdor voči spoločnosti.',
      'Kompozícia spája lyriku (spoveď na začiatku a na konci) s epikou (baladický dej) — to treba vedieť pomenovať pri rozbore.',
      'Typická maturitná otázka: charakterizuj divného Janka ako romantického hrdinu a vysvetli, prečo jeho čin nemôže uspieť.',
    ],
    ulohy: [
      {
        id: 'zakliata-panna-vo-vahu-k1',
        typ: 'kviz',
        otazka: 'Kedy možno podľa povesti zakliatu pannu vykúpiť?',
        moznosti: [
          'v Jánsku noc',
          'na Štedrý večer',
          'počas jesenných dožinkov',
          'pri prvom jarnom splne',
        ],
        spravna: 0,
        vysvetlenie:
          'Jánska noc je v ľudovej slovesnosti čarovným, hraničným časom, keď sa otvárajú hranice medzi svetmi — preto je pre skladbu kľúčová.',
      },
      {
        id: 'zakliata-panna-vo-vahu-k2',
        typ: 'kviz',
        otazka: 'Ako sa skončí Jankov pokus o vykúpenie panny?',
        moznosti: [
          'Janko sa vo Váhu utopí a panna zostane nevykúpená',
          'Janko pannu vyslobodí a ožení sa s ňou',
          'Janko sa na poslednú chvíľu zľakne a vráti sa domov',
          'panna ho premení na vodníka',
        ],
        spravna: 0,
        vysvetlenie:
          'Skúška je nad ľudské sily. Hrdinský čin sa mení na smrť — v tom je romantická tragika: ideál zostáva nedosiahnuteľný.',
      },
      {
        id: 'zakliata-panna-vo-vahu-k3',
        typ: 'kviz',
        otazka: 'Ako sa k Jankovi stavia dedina?',
        moznosti: [
          'má ho za čudáka za života aj po smrti a pochová ho bez slávy',
          'obdivuje ho ako hrdinu a postaví mu pamätník',
          'vyženie ho z dediny už na začiatku skladby',
          'zvolí si ho za richtára',
        ],
        spravna: 0,
        vysvetlenie:
          'Chladné nepochopenie okolia zdvojnásobuje Jankovu tragédiu: nie je len porazený riekou, ale aj odsúdený ľuďmi, pre ktorých chcel byť hrdinom.',
      },
      {
        id: 'zakliata-panna-vo-vahu-k4',
        typ: 'kviz',
        otazka: 'Aká je kompozícia skladby?',
        moznosti: [
          'lyrická spoveď, epický baladický dej a záverečná lyrická reflexia',
          'päť dejstiev s expozíciou a katastrofou',
          'osemnásť strof s refrénom',
          'rámcové rozprávanie v podobe listov',
        ],
        spravna: 0,
        vysvetlenie:
          'Dielo je lyrickoepické: lyrický rámec nám Janka ukazuje zvnútra, epická časť zvonku. Túto stavbu treba pri rozbore vedieť pomenovať.',
      },
      {
        id: 'zakliata-panna-vo-vahu-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k prvku jeho význam v skladbe.',
        pary: [
          { vlavo: 'divný Janko', vpravo: 'romantický vzbúrenec a samotár, autoštylizácia autora' },
          { vlavo: 'zakliata panna', vpravo: 'obraz nedosiahnuteľného ideálu' },
          { vlavo: 'Váh', vpravo: 'sila osudu, ktorú človek neprekoná' },
          { vlavo: 'Jánska noc', vpravo: 'čarovný hraničný čas z ľudovej povesti' },
          { vlavo: 'dedinský ľud', vpravo: 'všednosť, ktorá výnimočnosť odsudzuje' },
        ],
        vysvetlenie:
          'Skladba spája ľudovú povesť s modernou subjektívnou výpoveďou, preto každý jej prvok nesie aj symbolický význam.',
      },
      {
        id: 'zakliata-panna-vo-vahu-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o skladbe.',
        text: [
          'Balada Zakliata panna vo Váhu a divný Janko vyšla v roku ',
          { medzera: '1844', napoveda: 'rovnaký rok ako almanach Nitra II.' },
          ' v časopise ',
          { medzera: 'Orol tatránski', napoveda: 'štúrovský literárny časopis' },
          '. Hlavný hrdina sa pokúsi vykúpiť pannu zakliatu v rieke ',
          { medzera: 'Váh', napoveda: 'najdlhšia slovenská rieka' },
          '.',
        ],
        vysvetlenie:
          'Janko Kráľ do baladického deja vložil vlastnú nespokojnosť a samotu, preto sa divný Janko vníma ako autorova autoštylizácia.',
      },
    ],
  },
  {
    id: 'smrt-janosikova',
    nazov: 'Smrť Jánošíkova',
    autorId: 'botto',
    rocnik: 2,
    druh: 'poezia',
    literatura: 'slovenska',
    standardizovane: true,
    zaner: 'lyrickoepická básnická skladba s baladickými črtami',
    forma: 'poézia — deväť spevov s lyrickým predspevom, premenlivý verš',
    rokVydania: '1862',
    obdobie: 'slovenský romantizmus (štúrovská generácia)',
    miestoACas:
      'slovenské hory, Kráľova hoľa, žalár a mesto s popraviskom; čas Jánošíkovho zajatia a smrti (začiatok 18. storočia), no vyznenie je nadčasové a mieri na pomery po revolúcii 1848 – 1849',
    anotacia:
      'Básnická skladba o poslednom úseku života zbojníka Jánošíka — o zajatí, žalári a poprave. Jánošík v nej nie je len ľudový hrdina, ale symbol národnej túžby po slobode.',
    obsah: [
      'Lyrický predspev nastavuje smutný, elegický tón: básnik hovorí o tme nad krajom a o hviezde, ktorá zhasla. Potom sa otvára obraz Jánošíkovej družiny v horách — mládenci sa bavia, spievajú a užívajú si slobodu na výškach, kde im nikto nerozkazuje. Zbojníci sú vykreslení ako ochránci ľudu, ktorí berú bohatým a dávajú chudobným. Táto časť je oslavou voľnosti a zároveň predzvesťou: sláva už má nad sebou tieň.',
      'Idylka sa zlomí, keď Jánošíka zajmú. Botto nerozvádza dobrodružné podrobnosti zajatia, dôležitý je pre neho následok: hrdina, ktorý bol vtelením voľnosti, je odrazu v putách. Prevedú ho mestom, kde sa naň zbieha zvedavý ľud, a uvrhnú ho do temnice. Kontrast horskej výšky a kamennej hlbiny žalára je základným kompozičným protikladom skladby.',
      'Najrozsiahlejšia časť sa odohráva v žalári. Jánošík sa v tme rozpráva sám so sebou, spomína na hory, na družinu, na matku a na dievčinu; bilancuje svoj život a pýta sa, či mal jeho boj zmysel. Nie je to bezcitný zbojník, ale citlivý mladý muž, ktorý sa lúči so svetom. Do jeho monológov sa vkladá aj hlas ľudu, ktorý ho oplakáva, a obraz prírody, ktorá s ním spolucíti.',
      'Nasleduje cesta na popravisko a poprava. Jánošík ide na smrť vzpriamene a bez pokorenia — neprosí o milosť a nezrieka sa toho, čo robil. Ľud stojí okolo a plače, príroda sa zatemní. Smrťou sa končí jeho telesný život, ale nie jeho príbeh: skladba práve v tejto chvíli prechádza z epiky do symbolu.',
      'V záverečnom speve nasleduje obraz Jánošíkovej svadby s kráľovnou víl na Kráľovej holi. Zbojník nezomrel navždy, ale bol prijatý do sveta legendy a stal sa nesmrteľným v pamäti ľudu. Skladba tak vyznieva dvojako: elegicky, pretože hrdina padol a národ zostal v poddanstve, no aj nadejne, pretože myšlienka slobody prežije svojho nositeľa. V dobovom čítaní bol Jánošík zrozumiteľnou obdobou porazenej, ale nezničenej národnej túžby po slobode.',
    ],
    kompozicia:
      'Lyrický predspev a deväť spevov, ktoré vedú od oslavy voľnosti v horách cez zajatie, žalár a popravu až po symbolickú svadbu s kráľovnou víl na Kráľovej holi. Epický dej je potlačený v prospech lyrických monológov a obrazov, verš a rytmus sa menia podľa nálady. Skladba vyšla roku 1862 v almanachu Lipa.',
    postavy: [
      {
        meno: 'Juraj Jánošík',
        charakteristika:
          'Zbojnícky kapitán, ktorý bral bohatým a dával chudobným; v skladbe je predovšetkým citlivým mladým mužom, čo sa v žalári lúči so životom. Na smrť ide vzpriamene a nezrieka sa svojho boja, čím sa mení na symbol slobody.',
        rola: 'hlavna',
      },
      {
        meno: 'zbojnícka družina',
        charakteristika:
          'Mládenci v horách, ktorí s Jánošíkom žijú vo voľnosti a spievajú o nej. Predstavujú svet nespútanosti, ktorý sa zajatím kapitána rozpadá.',
        rola: 'vedlajsia',
      },
      {
        meno: 'ľud',
        charakteristika:
          'Kolektívna postava, ktorá Jánošíka miluje, oplakáva a napokon uchová v legende. Jeho pamäť robí z porazeného hrdinu nesmrteľného.',
        rola: 'hlavna',
      },
      {
        meno: 'kráľovná víl',
        charakteristika:
          'Bytosť z ľudovej obraznosti, s ktorou sa Jánošík v poslednom speve symbolicky zosobáši na Kráľovej holi. Jej postava premieňa smrť na apoteózu a nesmrteľnosť.',
        rola: 'vedlajsia',
      },
      {
        meno: 'matka a dievčina',
        charakteristika:
          'Blízke ženské postavy, na ktoré Jánošík v žalári spomína. Vnášajú do skladby ľudský, intímny rozmer a zmierňujú hrdinský pátos.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'sloboda a boj proti poddanstvu',
      'smrť hrdinu a jeho premena na symbol',
      'nesmrteľnosť v pamäti ľudu',
      'sklamanie po porážke revolúcie a nádej do budúcnosti',
      'rozpor medzi voľnosťou hôr a neslobodou žalára',
    ],
    motivy: [
      'zbojnícka družina v horách',
      'zajatie a putá',
      'temnica a nočný monológ',
      'cesta na popravisko',
      'Kráľova hoľa a svadba s kráľovnou víl',
      'zhasnutá hviezda v predspeve',
    ],
    jazyk: [
      'kontrast — slobodné hory proti kamennému žaláru, oslava voľnosti v prvých spevoch proti smútku v ďalších',
      'symbol — Jánošík je symbolom národnej túžby po slobode, Kráľova hoľa miestom nesmrteľnosti, svadba s vílou apoteózou hrdinu',
      'lyrický monológ v žalári — namiesto deja sa rozvíja vnútro postavy, čím sa z epiky stáva spoveď',
      'personifikácia prírody, ktorá s Jánošíkom spolucíti (hory plačú, obloha sa zatemní) — príroda potvrdzuje mravné hodnotenie deja',
      'prvky ľudovej slovesnosti — zbojnícke piesne, povesti a víly, ktoré skladbu ukotvujú v ľudovej tradícii',
      'premenlivý verš a rytmus prispôsobený nálade jednotlivých spevov, od piesňovej ľahkosti po elegické spomalenie',
      'rečnícke otázky a apostrofy (oslovenie hôr, slnka, ľudu), ktoré zvyšujú citové napätie',
    ],
    maturitneMinimum: [
      'Ján Botto je posledný zo štúrovských básnikov; Smrť Jánošíkova vyšla roku 1862 v almanachu Lipa.',
      'Jánošík nie je iba zbojník: je symbolom národnej slobody, preto sa z historickej postavy stáva obraz celého národa.',
      'Dielo vzniklo po porážke revolúcie 1848 – 1849, a preto v ňom prevláda elegický tón — porážka je však vykúpená nádejou v záverečnej apoteóze.',
      'Kompozícia: lyrický predspev a deväť spevov; epický dej je potlačený v prospech lyrických monológov a obrazov.',
      'Typická maturitná otázka: vysvetli, prečo sa Jánošíkova smrť v skladbe mení na víťazstvo a akú úlohu má svadba s kráľovnou víl.',
    ],
    ulohy: [
      {
        id: 'smrt-janosikova-k1',
        typ: 'kviz',
        otazka: 'Čím sa skladba končí?',
        moznosti: [
          'symbolickou svadbou Jánošíka s kráľovnou víl na Kráľovej holi',
          'Jánošíkovým útekom zo žalára',
          'popravou zradcu, ktorý Jánošíka vydal',
          'návratom družiny do hôr a novým zbojníckym kapitánom',
        ],
        spravna: 0,
        vysvetlenie:
          'Záverečný spev mení smrť na apoteózu: Jánošík vstupuje do sveta legendy a zostáva nesmrteľný v pamäti ľudu.',
      },
      {
        id: 'smrt-janosikova-k2',
        typ: 'kviz',
        otazka: 'Ktorá časť skladby je najrozsiahlejšia a najviac lyrická?',
        moznosti: [
          'Jánošíkove monológy v žalári',
          'opis zbojníckych prepadov na cestách',
          'súdny proces s Jánošíkom',
          'rozhovor kráľovnej víl s ľudom',
        ],
        spravna: 0,
        vysvetlenie:
          'Botto potlačil dobrodružný dej a sústredil sa na vnútro hrdinu. V temnici sa Jánošík lúči so svetom, bilancuje a pýta sa na zmysel svojho boja.',
      },
      {
        id: 'smrt-janosikova-k3',
        typ: 'kviz',
        otazka: 'V ktorom almanachu skladba vyšla?',
        moznosti: ['Lipa', 'Nitra', 'Zora', 'Plody'],
        spravna: 0,
        vysvetlenie:
          'Smrť Jánošíkova vyšla roku 1862 v almanachu Lipa, teda v období po porážke revolúcie a v čase Memoranda národa slovenského.',
      },
      {
        id: 'smrt-janosikova-k4',
        typ: 'kviz',
        otazka: 'Aký je základný kompozičný protiklad skladby?',
        moznosti: [
          'slobodné hory proti kamennému žaláru',
          'mesto proti dedine',
          'mladosť proti starobe',
          'šľachta proti cirkvi',
        ],
        spravna: 0,
        vysvetlenie:
          'Výška a voľnosť hôr stojí proti tme a zovretiu temnice. Tento protiklad nesie hlavnú myšlienku: sloboda proti poddanstvu.',
      },
      {
        id: 'smrt-janosikova-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k motívu jeho význam v skladbe.',
        pary: [
          { vlavo: 'hory a družina', vpravo: 'svet slobody a nespútanosti' },
          { vlavo: 'temnica', vpravo: 'poddanstvo a strata voľnosti' },
          { vlavo: 'Kráľova hoľa', vpravo: 'miesto nesmrteľnosti a legendy' },
          { vlavo: 'kráľovná víl', vpravo: 'apoteóza hrdinu po smrti' },
          { vlavo: 'plač ľudu', vpravo: 'pamäť, ktorá hrdinu udrží nažive' },
        ],
        vysvetlenie:
          'Skladba pracuje so symbolmi: konkrétne miesta a bytosti nesú myšlienku, že hrdina je porazený telesne, ale nie mravne.',
      },
      {
        id: 'smrt-janosikova-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o skladbe.',
        text: [
          'Smrť Jánošíkova vyšla v roku ',
          { medzera: '1862', napoveda: 'v almanachu Lipa' },
          ' a skladá sa z lyrického predspevu a ',
          { medzera: 'deviatich', napoveda: 'počet spevov' },
          ' spevov. Jánošík sa v poslednom speve symbolicky zosobáši s ',
          { medzera: 'kráľovnou víl', napoveda: 'bytosť z ľudovej obraznosti' },
          '.',
        ],
        vysvetlenie:
          'Kompozíciu treba pri rozbore vedieť pomenovať: predspev nastavuje elegický tón a deväť spevov vedie od slobody cez smrť k nesmrteľnosti.',
      },
    ],
  },
  {
    id: 'marina',
    nazov: 'Marína',
    autorId: 'sladkovic',
    rocnik: 2,
    druh: 'poezia',
    literatura: 'slovenska',
    standardizovane: true,
    zaner: 'lyrickoepická (reflexívno-lyrická) básnická skladba — ľúbostná lyrika',
    forma: 'poézia — 291 desaťveršových strof (tzv. sládkovičovská strofa)',
    rokVydania: '1846',
    obdobie: 'slovenský romantizmus (štúrovská generácia)',
    miestoACas:
      'Banská Štiavnica a jej okolie (Sitno, štiavnické tajchy), 40. roky 19. storočia; v druhej časti sa konkrétne miesto rozplýva do nadčasovej obraznosti',
    anotacia:
      'Najznámejšia slovenská ľúbostná skladba, v ktorej sa osobná láska k dievčine postupne mení na lásku ku kráse, mladosti a vlasti. Napísaná v štúrovskej slovenčine a inšpirovaná skutočným životným príbehom autora.',
    obsah: [
      'Prvá časť skladby je konkrétna a osobná. Lyrický subjekt oslavuje krásu dievčiny, ktorú nazýva Marínou: opisuje jej oči, ústa, postavu, hlas aj to, ako pri nej cíti závrat a šťastie. Láska je tu zmyslová, prudká a pozemská, plná nadšenia a mladíckej sily. Zároveň sa už tu ozýva úzkosť: takéto šťastie nemusí vydržať, pretože svet má svoje pravidlá, ktoré sa citom neriadia.',
      'Nasleduje bolestivé rozčarovanie. Marína je lyrickému subjektu odopretá — rozhodnú spoločenské a majetkové pomery, nie jej ani jeho vôľa. Vzniká typicky romantický rozpor medzi ideálom a skutočnosťou: cit je čistý a veľký, no skutočnosť ho nedovolí naplniť. Lyrický subjekt prechádza od nadšenia k sklamaniu, žiaľu a takmer k zúfalstvu, v ktorom si kladie otázku, čo ostane z lásky, keď stratí svoj predmet.',
      'V druhej časti skladba mení smer a stúpa od konkrétnej dievčiny k všeobecnému ideálu. Lyrický subjekt pochopí, že Marína bola len podobou krásy a že krása sama je večná, aj keď jej jednotlivé stelesnenie zmizne. Preto svoju lásku neprestane cítiť, len ju prenesie na to, čo mu nikto nemôže vzať: na peknotu, na mladosť, na ideál. Tento myšlienkový obrat je jadrom celého diela.',
      'Ideál sa potom rozširuje ešte ďalej — na vlasť a na národ. Láska k žene, láska ku kráse a láska k Slovensku sa v skladbe prelínajú a navzájom podopierajú. Mladosť tu nie je vek, ale schopnosť túžiť po vysokom a slúžiť veľkej veci; kto ju má, je mladý stále. Osobná strata sa tak mení na duchovné víťazstvo.',
      'Skladba nemá dej v pravom zmysle, preto ju nemožno „dopovedať“ ako príbeh; končí sa zmierením a vyznaním. Lyrický subjekt sa lúči s Marínou ako so ženou, ale nie s Marínou ako s obrazom krásy: tá mu zostáva navždy. Sklamaná láska teda nekončí trpkosťou, ale oslavou života, mladosti a domoviny — a práve tým sa Sládkovičova skladba líši od väčšiny romantickej ľúbostnej poézie.',
    ],
    kompozicia:
      'Dvestodeväťdesiatjeden desaťveršových strof, ktoré sa zvyknú členiť na dve veľké časti: prvá je konkrétna ľúbostná (oslava Maríny a bolesť z jej straty), druhá reflexívna a ideová (láska ku kráse, mladosti a vlasti). Prechod medzi nimi je plynulá gradácia od pozemského k ideálnemu. Skladba vyšla roku 1846.',
    postavy: [
      {
        meno: 'lyrický subjekt (básnik)',
        charakteristika:
          'Mladý muž, ktorý miluje Marínu a musí sa s jej stratou vyrovnať. Od zmyslového nadšenia prechádza cez sklamanie k pochopeniu, že krása je večná aj bez svojho jednotlivého stelesnenia.',
        rola: 'hlavna',
      },
      {
        meno: 'Marína',
        charakteristika:
          'Dievčina, ktorej je skladba adresovaná; jej predobrazom bola Marína Pišlová z Banskej Štiavnice. V prvej časti je konkrétnou milovanou ženou, v druhej sa mení na obraz krásy a ideálu.',
        rola: 'hlavna',
      },
      {
        meno: 'krása (peknota) ako ideál',
        charakteristika:
          'Neosobná, no najdôležitejšia „postava“ druhej časti. Práve na ňu prenáša lyrický subjekt svoj cit, keď mu je Marína odopretá, a tým si lásku zachráni.',
        rola: 'hlavna',
      },
      {
        meno: 'spoločenské pomery',
        charakteristika:
          'Neviditeľná prekážka, ktorá o vzťahu rozhodne: majetkové a stavovské poriadky sú silnejšie než cit. Predstavujú skutočnosť, ktorá ničí romantický ideál.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'láska k žene a jej premena na lásku ku kráse',
      'mladosť ako hodnota a schopnosť túžiť po vysokom',
      'rozpor medzi ideálom a skutočnosťou',
      'láska k vlasti a k národu',
      'vyrovnanie sa so stratou',
    ],
    motivy: [
      'krása a oči Maríny',
      'Sitno a štiavnická príroda',
      'odopretá láska pre majetkové pomery',
      'peknota ako večný ideál',
      'mladosť ako duchovný stav',
      'vyznanie vlasti',
    ],
    jazyk: [
      'gradácia — od zmyslového opisu dievčiny cez bolesť zo straty až k oslave večnej krásy a vlasti; skladba stúpa od konkrétneho k ideálnemu',
      'apostrofa — priame oslovovanie Maríny, krásy, mladosti a vlasti, ktoré z lyriky robí vyznanie a rozhovor',
      'metafora a personifikácia krásy (peknota ako živá bytosť, plameň, svetlo), vďaka ktorým sa abstraktný pojem stáva takmer hmatateľným',
      'epitetá a hyperboly v opise Maríny (nadpozemská, najkrajšia, božia) — stupňujú obdiv do polohy oslavného spevu',
      'kontrast — pozemská krása proti večnej peknote, šťastie proti sklamaniu, ideál proti skutočnosti',
      'desaťveršová strofa s pravidelným rýmom (sládkovičovská strofa) — jej dĺžka umožňuje v jednej strofe rozvinúť obraz aj myšlienku',
      'melodickosť a hudobnosť verša (aliterácia, opakovanie, ľubozvučné hlásky), ktorou skladba dokazuje výrazové možnosti novej slovenčiny',
    ],
    citaty: [
      {
        text: '„Ja sladké túžby, túžby po kráse / spievam peknotou nadšený.“',
        zdroj: 'úvodná strofa skladby',
      },
    ],
    maturitneMinimum: [
      'Marína vyšla roku 1846, teda v roku uzákonenia štúrovskej slovenčiny — je jedným z prvých dôkazov, že nový jazyk zvládne náročnú poéziu.',
      'Predobrazom Maríny bola Marína Pišlová z Banskej Štiavnice, ktorá sa musela vydať za iného; osobný zážitok je teda základom skladby.',
      'Kompozičná os diela: od konkrétnej lásky k žene k láske ku kráse, mladosti a vlasti — strata sa mení na duchovné víťazstvo.',
      'Skladba má 291 desaťveršových strof; táto strofa sa nazýva sládkovičovská.',
      'Sládkovičovým druhým vrcholným dielom je Detvan (1853), kde spája oslavu ľudu s obrazom kráľa Matiáša.',
      'Typická maturitná otázka: vysvetli vzťah lásky, krásy a vlasti v skladbe Marína a dolož ho na kompozícii dvoch častí.',
    ],
    ulohy: [
      {
        id: 'marina-k1',
        typ: 'kviz',
        otazka: 'Na čo lyrický subjekt prenáša svoju lásku, keď mu je Marína odopretá?',
        moznosti: [
          'na krásu (peknotu), mladosť a vlasť',
          'na inú, bohatšiu dievčinu',
          'na náboženskú askézu a odriekanie',
          'na pomstu tým, ktorí mu v láske zabránili',
        ],
        spravna: 0,
        vysvetlenie:
          'To je myšlienkový obrat celej skladby: krása je večná, aj keď jej jednotlivé stelesnenie zmizne, preto sa osobná strata mení na duchovné víťazstvo.',
      },
      {
        id: 'marina-k2',
        typ: 'kviz',
        otazka: 'Koľko strof má Marína a aká je ich forma?',
        moznosti: [
          '291 desaťveršových strof',
          '100 sonetov',
          '18 šesťveršových strof s refrénom',
          '9 spevov bez strofického členenia',
        ],
        spravna: 0,
        vysvetlenie:
          'Desaťveršová strofa sa podľa autora nazýva sládkovičovská; jej dĺžka dovoľuje v jednej strofe rozvinúť obraz aj myšlienku.',
      },
      {
        id: 'marina-k3',
        typ: 'kviz',
        otazka: 'Prečo sa láska v skladbe nemôže naplniť?',
        moznosti: [
          'rozhodnú spoločenské a majetkové pomery, nie vôľa dvojice',
          'Marína zomrie na chorobu',
          'lyrický subjekt musí odísť do vojny',
          'Marína lásku nikdy neopätovala',
        ],
        spravna: 0,
        vysvetlenie:
          'Ide o typicky romantický rozpor: cit je čistý a veľký, no skutočnosť (stavovské a majetkové poriadky) ho nedovolí naplniť.',
      },
      {
        id: 'marina-k4',
        typ: 'kviz',
        otazka: 'Čím je pre skladbu dôležitý rok 1846?',
        moznosti: [
          'je to rok vydania Maríny a zároveň rok Štúrových jazykových prác',
          'v tomto roku sa Sládkovič oženil s Marínou Pišlovou',
          'v tomto roku vypukla revolúcia v Uhorsku',
          'v tomto roku vyšiel almanach Nitra',
        ],
        spravna: 0,
        vysvetlenie:
          'Marína vyšla v roku, keď Štúr obhájil novú slovenčinu. Skladba je preto aj dôkazom, že nový jazyk zvládne náročnú umeleckú poéziu.',
      },
      {
        id: 'marina-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k pojmu jeho význam v skladbe.',
        pary: [
          { vlavo: 'Marína', vpravo: 'konkrétna milovaná, ktorá sa mení na obraz krásy' },
          { vlavo: 'peknota', vpravo: 'večný ideál krásy, na ktorý sa prenáša láska' },
          { vlavo: 'mladosť', vpravo: 'schopnosť túžiť po vysokom, nie iba vek' },
          { vlavo: 'vlasť', vpravo: 'najvyšší predmet lásky v druhej časti skladby' },
          { vlavo: 'Sitno a Štiavnica', vpravo: 'krajinné pozadie osobného zážitku' },
        ],
        vysvetlenie:
          'Skladba stúpa od konkrétneho k všeobecnému: žena, krása, mladosť a vlasť sú stupne tej istej lásky.',
      },
      {
        id: 'marina-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o skladbe.',
        text: [
          'Skladba Marína je adresovaná ',
          { medzera: 'Maríne Pišlovej', napoveda: 'skutočná láska autora' },
          ' z Banskej Štiavnice a vyšla v roku ',
          { medzera: '1846', napoveda: 'rok uzákonenia štúrovčiny' },
          '. Má ',
          { medzera: '291', napoveda: 'počet desaťveršových strof' },
          ' strof.',
        ],
        vysvetlenie:
          'Marína Pišlová sa musela vydať za iného; osobný zážitok straty je východiskom celej skladby.',
      },
      {
        id: 'marina-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň myšlienkový vývoj skladby.',
        text: [
          'V prvej časti je láska ',
          { medzera: 'zmyslová', napoveda: 'pozemská, telesná' },
          ' a konkrétna, v druhej časti sa mení na lásku ku ',
          { medzera: 'kráse', napoveda: 'peknota ako večný ideál' },
          ' a k ',
          { medzera: 'vlasti', napoveda: 'domovina, národ' },
          '.',
        ],
        vysvetlenie:
          'Tento posun je jadrom diela: sklamaná láska nekončí trpkosťou, ale oslavou života, mladosti a domoviny.',
      },
    ],
  },
  {
    id: 'dobrodruzstvo-pri-obzinkoch',
    nazov: 'Zmierenie alebo Dobrodružstvo pri obžinkoch',
    autorId: 'palarik',
    rocnik: 2,
    druh: 'drama',
    literatura: 'slovenska',
    standardizovane: true,
    zaner: 'veselohra (komédia) so zámenou postáv',
    forma: 'dráma — tri dejstvá s piesňami a ľudovými scénami',
    rokVydania: '1862',
    obdobie: 'romantizmus, prechod k realistickej veselohre',
    miestoACas:
      'slovenský vidiek, panský dom a dedina počas obžinkov (dožinkov); 19. storočie, obdobie národného prebúdzania',
    anotacia:
      'Veselohra o dvoch pároch, ktoré si zamenia totožnosť, aby zistili, či ich niekto miluje pre nich samých, a nie pre majetok či postavenie. Najhrávanejšia slovenská komédia 19. storočia.',
    obsah: [
      'Mladá grófka Hrabovská má podľa vôle rodiny prijať ponuku zemianskeho statkára Ľudovíta Kostrovického. Nechce sa však vydávať za niekoho, kto by ju bral pre titul a majetok, a preto si zmyslí skúšku: na čas si zamení úlohu so svojou spoločnicou Milušou Oremovou, dcérou dedinského richtára. Grófka bude vystupovať ako Miluša a Miluša ako grófka. Zámena má odhaliť pravé city nápadníka.',
      'Ľudovít Kostrovický príde s rovnakým nápadom. Aj on chce vedieť, či ho grófka bude chcieť ako človeka, a nie ako bohatého zemana, a preto sa vymení so svojím priateľom, učiteľom Kamilom Zálešákom: Ľudovít sa vydáva za učiteľa a Kamil za statkára. Na scéne tak vzniknú štyri falošné totožnosti, ktoré o sebe navzájom nevedia. Odtiaľ pochádza všetka komika diela.',
      'Dej sa vyostrí počas obžinkov, dedinskej dožinkovej slávnosti so spevom, tancom a vencom. Uprostred veselosti sa páry zbližujú — ale „krížom“: grófka v úlohe Miluše sa zaľúbi do muža, ktorý sa vydáva za učiteľa (a je to Ľudovít), kým Miluša v úlohe grófky nájde zaľúbenie v mužovi, ktorý vystupuje ako statkár (a je to Kamil). Vznikajú komické nedorozumenia, žiarlivosť aj náhle obraty, pretože každý hovorí pravdu o svojich citoch, ale nepravdu o svojom mene.',
      'Postupne sa pretvárka stáva neudržateľnou a totožnosti sa prezradia. Ukáže sa, že skúška vyšla lepšie, než kto očakával: obe dvojice sa zaľúbili bez ohľadu na stav a majetok, takže výsledok potvrdí presne to, čo si chceli overiť. Zámena teda nebola zbytočná hra, ale spôsob, ako sa dostať k pravde.',
      'Veselohra sa končí dvojitým zmierením a dvojicou sobášov: grófka Hrabovská si vezme Ľudovíta Kostrovického a Miluša Oremová Kamila Zálešáka. Titulné „zmierenie“ má však aj druhý, vážnejší význam — zmierenie pánov s ľudom, zemianstva so slovenským vidiekom a odnárodnenej vrstvy s vlastným národom. Palárik tak pod veselú zápletku ukryl národnovýchovnú myšlienku, že spoločenské a jazykové rozdiely sa dajú prekonať dobrou vôľou.',
    ],
    kompozicia:
      'Tri dejstvá s klasickou stavbou veselohry: expozícia (dvojaký plán na zámenu totožností), zápletka a vyvrcholenie počas obžinkov (krížové zaľúbenie a nedorozumenia) a rozuzlenie s prezradením totožností a dvojitým sobášom. Do deja sú vložené ľudové piesne, tance a obžinkový obrad, ktoré dielu dávajú ráz obrazu zo života dediny.',
    postavy: [
      {
        meno: 'grófka Hrabovská',
        charakteristika:
          'Mladá šľachtičná, ktorá nechce byť milovaná pre titul a majetok, a preto sa vymení so svojou spoločnicou. Je bystrá, samostatná a ochotná prijať ľud aj jeho reč — práve ona vlastne spustí celú zápletku.',
        rola: 'hlavna',
      },
      {
        meno: 'Ľudovít Kostrovický',
        charakteristika:
          'Mladý zemiansky statkár a nápadník grófky, ktorý zhodou okolností dostane ten istý nápad ako ona a vydáva sa za učiteľa. Je vzdelaný, národne uvedomelý a čestný.',
        rola: 'hlavna',
      },
      {
        meno: 'Miluša Oremová',
        charakteristika:
          'Spoločnica grófky a dcéra dedinského richtára, ktorá na seba vezme úlohu šľachtičnej. Je prirodzená, veselá a pevná v tom, čo cíti; predstavuje zdravé ľudové prostredie.',
        rola: 'hlavna',
      },
      {
        meno: 'Kamil Zálešák',
        charakteristika:
          'Učiteľ a priateľ Ľudovíta, ktorý sa má vydávať za statkára. Ako vzdelanec je nositeľom osvetovej myšlienky diela a napokon získa Milušinu ruku.',
        rola: 'hlavna',
      },
      {
        meno: 'Milušin otec, dedinský richtár',
        charakteristika:
          'Predstaviteľ dedinskej obce a jej poriadku. Spolu s ostatnými dedinčanmi vnáša do hry ľudový humor, pieseň a obžinkový obrad.',
        rola: 'vedlajsia',
      },
      {
        meno: 'dedinský ľud pri obžinkoch',
        charakteristika:
          'Kolektívna postava, ktorá tvorí prostredie vyvrcholenia. Vďaka nej je hra aj obrazom života slovenskej dediny, nie iba salónnou komédiou.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'láska, ktorá si nevšíma stav a majetok',
      'zmierenie šľachty (zemianstva) s ľudom',
      'národné uvedomenie odnárodnenej vrstvy',
      'pravda a pretvárka v ľudských vzťahoch',
      'výchovná úloha vzdelanca na dedine',
    ],
    motivy: [
      'zámena totožností dvoch párov',
      'obžinky, venec, spev a tanec',
      'skúška pravých citov',
      'nedorozumenia a žiarlivosť',
      'prezradenie pretvárky',
      'dvojitý sobáš na konci',
    ],
    jazyk: [
      'komika zámeny (situačná komika) — všetka zápletka vyrastá z toho, že postavy hovoria pravdu o citoch a nepravdu o svojom mene',
      'dialóg s dvojakým významom (ironické podtexty), pretože divák vie o zámene viac než postavy na scéne',
      'kontrast panskej a ľudovej reči — spôsob vyjadrovania prezrádza stav postavy a zároveň slúži ako zdroj humoru',
      'ľudové piesne, tance a obžinkový obrad vložené do deja — dodávajú hre folklórny kolorit a realistický obraz dediny',
      'charakterizácia postáv rečou a menami (Zálešák, Oremová) — mená naznačujú povahu a pôvod postavy',
      'gradácia nedorozumení až do bodu, kedy sa pretvárka stáva neudržateľnou, po ktorom nasleduje rýchle rozuzlenie',
      'národnovýchovná téza vložená do replík vzdelancov, čím sa pod veselú zápletku dostáva vážna myšlienka',
    ],
    maturitneMinimum: [
      'Ján Palárik je zakladateľ modernej slovenskej veselohry; jeho hry sa hrávajú podnes a Zmierenie alebo Dobrodružstvo pri obžinkoch (1862) je najznámejšia z nich.',
      'Titulné „zmierenie“ má dva významy: zmierenie dvoch zaľúbených párov a zmierenie šľachty s ľudom a odnárodnenej vrstvy s vlastným národom.',
      'Hlavným kompozičným princípom je dvojitá zámena totožností — grófka a Miluša, Ľudovít a Kamil.',
      'Konečné dvojice: grófka Hrabovská a Ľudovít Kostrovický, Miluša Oremová a Kamil Zálešák.',
      'Typická maturitná otázka: vysvetli funkciu zámeny postáv a obžinkovej scény a povedz, v čom je hra národnovýchovná.',
      'Palárik napísal aj veselohry Inkognito a Drotár, ktoré tiež stavajú na zámene a nedorozumeniach.',
    ],
    ulohy: [
      {
        id: 'dobrodruzstvo-pri-obzinkoch-k1',
        typ: 'kviz',
        otazka: 'Prečo si grófka Hrabovská zamení úlohu so svojou spoločnicou?',
        moznosti: [
          'chce zistiť, či ju nápadník miluje pre ňu samu, a nie pre titul a majetok',
          'chce sa vyhnúť sobášu, ktorý jej rodina nariadila',
          'chce uniknúť pred dlhmi',
          'chce si vyskúšať prácu na poli',
        ],
        spravna: 0,
        vysvetlenie:
          'Zámena je skúška pravých citov. To, že Ľudovít dostane ten istý nápad, rozmnoží nedorozumenia a rozbehne komiku hry.',
      },
      {
        id: 'dobrodruzstvo-pri-obzinkoch-k2',
        typ: 'kviz',
        otazka: 'Za koho sa vydáva Ľudovít Kostrovický?',
        moznosti: [
          'za učiteľa Kamila Zálešáka',
          'za dedinského richtára',
          'za grófkinho správcu majetku',
          'za cudzieho hosťa z Viedne',
        ],
        spravna: 0,
        vysvetlenie:
          'Ľudovít a Kamil si vymenia úlohy, takže na scéne vznikne štvorica falošných totožností — a každá dvojica o zámene tej druhej nevie.',
      },
      {
        id: 'dobrodruzstvo-pri-obzinkoch-k3',
        typ: 'kviz',
        otazka: 'Ktoré dvojice sa na konci hry zosobášia?',
        moznosti: [
          'grófka Hrabovská s Ľudovítom a Miluša s Kamilom',
          'grófka Hrabovská s Kamilom a Miluša s Ľudovítom',
          'iba jedna dvojica — grófka s Ľudovítom',
          'nikto, hra sa končí rozchodom',
        ],
        spravna: 0,
        vysvetlenie:
          'Skúška vyšla: obe dvojice sa zaľúbili bez ohľadu na stav a majetok, takže rozuzlenie potvrdí práve to, čo si chceli overiť.',
      },
      {
        id: 'dobrodruzstvo-pri-obzinkoch-k4',
        typ: 'kviz',
        otazka: 'Čo znamená titulné slovo „zmierenie“ v širšom, národnom zmysle?',
        moznosti: [
          'zmierenie šľachty s ľudom a odnárodnenej vrstvy s vlastným národom',
          'zmierenie katolíkov a evanjelikov',
          'zmierenie Slovákov a Rusov',
          'zmierenie mesta a dediny v hospodárskom spore',
        ],
        spravna: 0,
        vysvetlenie:
          'Palárik pod veselú zápletku ukryl národnovýchovnú myšlienku: spoločenské a jazykové rozdiely sa dajú prekonať dobrou vôľou.',
      },
      {
        id: 'dobrodruzstvo-pri-obzinkoch-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave, za koho sa v hre vydáva.',
        pary: [
          { vlavo: 'grófka Hrabovská', vpravo: 'vydáva sa za spoločnicu Milušu' },
          { vlavo: 'Miluša Oremová', vpravo: 'vydáva sa za grófku' },
          { vlavo: 'Ľudovít Kostrovický', vpravo: 'vydáva sa za učiteľa' },
          { vlavo: 'Kamil Zálešák', vpravo: 'vydáva sa za zemianskeho statkára' },
        ],
        vysvetlenie:
          'Dvojitá zámena je hlavným kompozičným princípom hry: postavy hovoria pravdu o citoch, ale nepravdu o svojom mene.',
      },
      {
        id: 'dobrodruzstvo-pri-obzinkoch-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o hre.',
        text: [
          'Veselohra Zmierenie alebo Dobrodružstvo pri obžinkoch vyšla v roku ',
          { medzera: '1862', napoveda: 'šesťdesiate roky 19. storočia' },
          ' a má ',
          { medzera: 'tri', napoveda: 'počet dejstiev' },
          ' dejstvá. Vyvrcholenie sa odohráva počas dedinskej slávnosti ',
          { medzera: 'obžinkov', napoveda: 'dožinky, slávnosť po zvezení úrody' },
          '.',
        ],
        vysvetlenie:
          'Obžinková scéna s piesňami a tancom dodáva hre folklórny kolorit a robí z nej aj obraz života slovenskej dediny.',
      },
    ],
  },
  {
    id: 'otec-goriot',
    nazov: 'Otec Goriot',
    autorId: 'balzac',
    rocnik: 2,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'realistický (spoločenský) román',
    forma: 'próza — rozsiahly román s vševediacim rozprávačom',
    rokVydania: '1835',
    obdobie: 'francúzsky realizmus (kritický realizmus)',
    miestoACas:
      'Paríž rokov 1819 – 1820: chudobný penzión pani Vauquerovej v Latinskej štvrti, salóny bohatých rodín a napokon cintorín Père-Lachaise',
    anotacia:
      'Román o starcovi, ktorý rozdá celý majetok dvom dcéram, a o mladíkovi, ktorý sa v Paríži rozhoduje, akou cenou chce uspieť. Základné dielo francúzskeho realizmu o moci peňazí.',
    obsah: [
      'V chudobnom penzióne pani Vauquerovej v Paríži žije pestrá zbierka nájomníkov. Medzi nimi je aj tichý starec zvaný otec Goriot, bývalý výrobca a obchodník s cestovinami, ktorý si kedysi nahonobil majetok. Nájomníci sa mu posmievajú, pretože sa postupne presúva do stále biednejšej podstrešnej svetlice a predáva posledné striebro. Nikto najprv nechápe, kam jeho peniaze mizli.',
      'Druhou hlavnou postavou je Eugène de Rastignac, chudobný študent práva z provincie, ktorý prišiel do Paríža s ambíciou dostať sa nahor. Zistí, že v parížskej spoločnosti neotvárajú dvere vedomosti, ale známosti, peniaze a ženy. Cez vzdialenú príbuznú sa dostane do vysokých salónov a vďaka tomu odhalí Goriotovo tajomstvo: starcove peniaze si berú jeho dve dcéry, Anastázia de Restaud a Delfína de Nucingen, ktoré sa vďaka jeho majetku vydali do vysokých kruhov a teraz sa za svojho otca hanbia.',
      'Do Rastignacovho rozhodovania zasahuje záhadný nájomník Vautrin, ktorý mu ponúkne skratku k bohatstvu: nech sa ožení so spolubývajúcou Viktorínou, ktorej brata dá on sám odstrániť v dvojboji, aby dievčina zdedila majetok. Vautrin pritom cynicky vysvetľuje, ako spoločnosť naozaj funguje a že poctivá cesta nahor nevedie. Rastignac neodolá úplne, ale ani neprijme; Vautrin je napokon odhalený ako trestanec na úteku a zatknutý priamo v penzióne.',
      'Goriot sa medzitým úplne zruinuje. Anastázia potrebuje peniaze na dlhy svojho milenca, Delfína na svoje postavenie, a otec im dá aj to posledné — sám spí v biede a hladuje, len aby ich videl šťastné. Jeho láska je bezvýhradná až do sebazničenia; dcéry ju prijímajú ako samozrejmosť a k otcovi chodia len po peniaze. Keď starca postihne mŕtvica, obe sú zaneprázdnené prípravami na veľký bál.',
      'Goriot zomiera v podkrovnej svetlici a do poslednej chvíle volá dcéry, ktoré neprídu. Opatrujú ho iba Rastignac a medik Bianchon; Rastignac zaplatí aj chudobný pohreb a za rakvou idú len prázdne koče s erbami zaťov. Na cintoríne Père-Lachaise sa mladík pozrie na Paríž ležiaci pod ním a vyhlási mestu boj — pôjde do spoločnosti, ktorú práve videl v celej jej bezohľadnosti. Román tak končí dvojako: smrťou lásky a narodením kariéristu.',
    ],
    kompozicia:
      'Román s pomalou expozíciou, ktorá najprv dopodrobna opíše prostredie penziónu a jeho obyvateľov, a s postupne zrýchľovaným dejom vedeným dvoma líniami: Goriotovou (obetovanie sa dcéram) a Rastignacovou (spoločenský vzostup). Obe línie sa stretávajú v záverečnej scéne pohrebu a Rastignacovej výzvy Parížu. Dielo je súčasťou rozsiahleho cyklu Ľudská komédia, v ktorom sa postavy vracajú v ďalších románoch.',
    postavy: [
      {
        meno: 'otec Goriot',
        charakteristika:
          'Bývalý obchodník s cestovinami, ktorý rozdal dcéram celý majetok a zomiera v biede, opustený a stále ich milujúci. Jeho otcovská láska je taká bezvýhradná, že sa stáva slabosťou a sebazničením — býva označovaný za „otcovskú vášeň“ dovedenú do krajnosti.',
        rola: 'hlavna',
      },
      {
        meno: 'Eugène de Rastignac',
        charakteristika:
          'Chudobný študent práva z provincie, ktorý chce v Paríži uspieť. Postupne stráca ilúzie a v závere sa rozhodne prijať pravidlá bezohľadnej spoločnosti; stáva sa typom mladého kariéristu.',
        rola: 'hlavna',
      },
      {
        meno: 'Vautrin',
        charakteristika:
          'Záhadný nájomník, v skutočnosti trestanec na úteku, ktorý Rastignacovi ponúkne zločinnú skratku k bohatstvu a cynicky mu vysvetlí, ako spoločnosť naozaj funguje. Je pokušiteľom a zároveň najostrejším kritikom pomerov.',
        rola: 'hlavna',
      },
      {
        meno: 'Delfína de Nucingen a Anastázia de Restaud',
        charakteristika:
          'Goriotove dcéry, ktoré sa vďaka otcovmu majetku vydali do vysokých kruhov a hanbia sa za jeho pôvod. Berú od neho peniaze až do jeho úplného zruinovania a na jeho smrteľnú posteľ neprídu.',
        rola: 'hlavna',
      },
      {
        meno: 'pani Vauquerová',
        charakteristika:
          'Majiteľka chudobného penziónu, vypočítavá a lakomá. Jej dom je zmenšeným obrazom parížskej spoločnosti: každý má cenu podľa toho, koľko platí.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Bianchon',
        charakteristika:
          'Medik a Rastignacov priateľ, ktorý sa o umierajúceho Goriota stará z ľudskosti, nie zo zisku. Je protiváhou cynizmu ostatných postáv.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'moc peňazí a ich vplyv na ľudské vzťahy',
      'otcovská láska dovedená do sebazničenia',
      'strata ilúzií mladého človeka a jeho premena na kariéristu',
      'rozvrstvenie spoločnosti a pokrytectvo salónov',
      'spoločenský vzostup za každú cenu',
    ],
    motivy: [
      'penzión pani Vauquerovej ako obraz spoločnosti v malom',
      'presúvanie sa Goriota do chudobnejších miestností',
      'Vautrinova ponuka zločinnej skratky',
      'bál, na ktorý dcéry idú, kým otec umiera',
      'chudobný pohreb a prázdne koče s erbami',
      'pohľad na Paríž z cintorína Père-Lachaise',
    ],
    jazyk: [
      'podrobný opis prostredia hneď na začiatku (penzión, nábytok, pachy) — vecný detail vysvetľuje charaktery a spoločenské postavenie postáv',
      'vševediaci rozprávač s hodnotiacimi komentármi, ktorý čitateľovi otvorene ukazuje mechanizmy spoločnosti',
      'kontrast prostredí — biedny penzión proti aristokratickým salónom; medzi nimi sa Rastignac pohybuje ako sonda',
      'typizácia postáv: každá predstavuje spoločenský typ (obetavý otec, kariérista, zločinec, vypočítavá gazdiná), čo je základný postup realizmu',
      'dvojitá dejová línia (Goriot a Rastignac), ktorá sa spája v záverečnej scéne pohrebu a výzvy Parížu',
      'symbol — prázdne koče s erbami na pohrebe ako obraz pokrytectva, Paríž ako súper, s ktorým sa mladík pobije',
      'gradácia Goriotovej biedy, ktorá sa dá merať miestnosťou, v ktorej spí — každé poschodie nižšie znamená ďalší darovaný majetok',
    ],
    maturitneMinimum: [
      'Balzac je zakladateľom francúzskeho kritického realizmu; Otec Goriot (1835) je súčasťou jeho rozsiahleho cyklu Ľudská komédia, ktorý mal podať úplný obraz spoločnosti.',
      'Cyklus spája metóda návratu postáv: Rastignac aj Vautrin vystupujú aj v ďalších Balzacových románoch.',
      'Hlavná myšlienka: peniaze rozhodujú o vzťahoch, o postavení aj o morálke; poctivosť sama nahor nevedie.',
      'Goriot býva porovnávaný so Shakespearovým kráľom Learom — obaja rozdajú všetko dcéram a zomierajú opustení.',
      'Rastignacova záverečná výzva Parížu je kľúčová scéna: znamená stratu ilúzií a vedomé prijatie pravidiel bezohľadnej spoločnosti.',
      'Typická maturitná otázka: dolož na diele znaky realizmu (typizácia, opis prostredia, kritika spoločnosti) a vysvetli úlohu Vautrina.',
    ],
    ulohy: [
      {
        id: 'otec-goriot-k1',
        typ: 'kviz',
        otazka: 'Prečo otec Goriot zomiera v biede?',
        moznosti: [
          'celý majetok postupne rozdal dvom dcéram, ktoré ho potom opustili',
          'prehral majetok v kartách',
          'okradol ho nájomník Vautrin',
          'jeho obchod s cestovinami zbankrotoval',
        ],
        spravna: 0,
        vysvetlenie:
          'Goriotova otcovská láska je bezvýhradná až do sebazničenia. Dcéry ju berú ako samozrejmosť a prichádzajú k nemu len po peniaze.',
      },
      {
        id: 'otec-goriot-k2',
        typ: 'kviz',
        otazka: 'Čo ponúkne Vautrin Rastignacovi?',
        moznosti: [
          'zločinnú skratku k bohatstvu — sobáš s dedičkou, ktorej brata dá odstrániť',
          'miesto úradníka v ministerstve',
          'pôžičku na dokončenie štúdia',
          'podiel na obchode s cestovinami',
        ],
        spravna: 0,
        vysvetlenie:
          'Vautrin je pokušiteľ aj najostrejší kritik pomerov: cynicky vysvetľuje, že poctivá cesta nahor nevedie. Neskôr ho odhalia ako trestanca na úteku.',
      },
      {
        id: 'otec-goriot-k3',
        typ: 'kviz',
        otazka: 'Kto je pri Goriotovej smrti a kto sa postará o jeho pohreb?',
        moznosti: [
          'Rastignac a medik Bianchon; pohreb zaplatí Rastignac',
          'obe dcéry, ktoré prídu na poslednú chvíľu',
          'pani Vauquerová z úcty k dlhoročnému nájomníkovi',
          'Vautrin ešte pred svojím zatknutím',
        ],
        spravna: 0,
        vysvetlenie:
          'Dcéry sú zaneprázdnené bálom a neprídu; za rakvou idú len prázdne koče s ich erbami. Tento obraz je najsilnejšou kritikou pokrytectva v celom románe.',
      },
      {
        id: 'otec-goriot-k4',
        typ: 'kviz',
        otazka: 'Do ktorého cyklu dielo patrí?',
        moznosti: [
          'Ľudská komédia',
          'Rougonovci-Macquartovci',
          'Bedári',
          'Štúdie o mravoch anglického vidieka',
        ],
        spravna: 0,
        vysvetlenie:
          'Ľudská komédia je Balzacov rozsiahly cyklus, ktorý mal podať úplný obraz francúzskej spoločnosti. Postavy sa v ňom vracajú z románu do románu.',
      },
      {
        id: 'otec-goriot-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave jej úlohu v románe.',
        pary: [
          { vlavo: 'otec Goriot', vpravo: 'obetavý otec zničený láskou k dcéram' },
          { vlavo: 'Eugène de Rastignac', vpravo: 'mladík, ktorý stráca ilúzie a stáva sa kariéristom' },
          { vlavo: 'Vautrin', vpravo: 'pokušiteľ a trestanec na úteku' },
          { vlavo: 'Delfína a Anastázia', vpravo: 'dcéry, ktoré sa za otca hanbia' },
          { vlavo: 'pani Vauquerová', vpravo: 'majiteľka penziónu, obraz vypočítavosti' },
        ],
        vysvetlenie:
          'Každá postava predstavuje spoločenský typ — typizácia je jedným zo základných postupov realizmu.',
      },
      {
        id: 'otec-goriot-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o románe.',
        text: [
          'Román Otec Goriot vyšiel v roku ',
          { medzera: '1835', napoveda: 'tridsiate roky 19. storočia' },
          ' a odohráva sa v meste ',
          { medzera: 'Paríž', napoveda: 'hlavné mesto Francúzska' },
          '. Goriotove dcéry sa volajú Anastázia a ',
          { medzera: 'Delfína', napoveda: 'vydaná za bankára de Nucingena' },
          '.',
        ],
        vysvetlenie:
          'Goriot býva porovnávaný so Shakespearovým kráľom Learom: obaja rozdajú všetko dcéram a zomierajú opustení.',
      },
    ],
  },
  {
    id: 'anna-kareninova',
    nazov: 'Anna Kareninová',
    autorId: 'tolstoj',
    rocnik: 2,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'realistický spoločenský a psychologický román',
    forma: 'próza — osem častí s dvoma paralelnými dejovými líniami',
    rokVydania: '1873 – 1877',
    obdobie: 'ruský realizmus',
    miestoACas:
      'Rusko sedemdesiatych rokov 19. storočia: petrohradské a moskovské salóny, železničné stanice, Vronského a Levinov statok na vidieku, krátko aj Italia',
    anotacia:
      'Román o žene, ktorá kvôli láske obetuje postavenie, rodinu aj dieťa, a o spoločnosti, ktorá jej to neodpustí. Vedľa jej príbehu beží druhá línia o hľadaní zmyslu života na vidieku.',
    obsah: [
      'Anna Kareninová je krásna a obdivovaná manželka vysokého petrohradského úradníka Alexeja Alexandroviča Karenina a matka malého Serioža. Jej manželstvo je usporiadané a chladné: Karenin je korektný, ale bezcitný človek, ktorému záleží najviac na tom, čo si povie spoločnosť. Anna odcestuje do Moskvy, aby zmierila svojho brata Stivu Oblonského s manželkou Dolly, a na stanici sa stretne s dôstojníkom grófom Alexejom Vronským. Na bále sa Vronskij prestane zaujímať o Dollinu sestru Kitty a celú pozornosť venuje Anne.',
      'Vzťah Anny a Vronského prerastie do vášnivej lásky. Anna čaká s Vronským dieťa a prizná sa manželovi, ten však rozvod odmietne — nie z lásky, ale preto, aby sa zachovala vonkajšia slušnosť. Pri pôrode dcéry Anna takmer zomrie a Karenin jej v tej chvíli odpustí, no keď sa uzdraví, nedokáže žiť v predstieranom manželstve. Odíde s Vronským do Italie a nechá za sebou syna, ktorého jej manžel odoprie.',
      'Po návrate do Ruska sa ukáže cena tohto rozhodnutia. Spoločnosť, ktorá mužovi neveru prehliadne, Annu vylúči: dvere salónov sa pred ňou zatvárajú, dámy sa jej vyhýbajú a v divadle ju verejne poníži. Za synom sa môže dostať len tajne, na jeho narodeniny. Vronskij sa naopak môže vrátiť k svojej kariére a k spoločenskému životu, čím sa medzi nimi otvára nerovnosť.',
      'Anna zostáva sama so svojou láskou, ktorá sa začne meniť na žiarlivosť a strach. Podozrieva Vronského, robí mu výčitky, berie na spanie morfium a stále viac sa uzatvára. Po jednej hádke, v ktorej sa presvedčí, že ju Vronskij už nemiluje tak ako predtým, odíde na železničnú stanicu a vrhne sa pod vlak. Motív vlaku a stanice, ktorý sa v románe opakuje od prvého stretnutia, sa tak uzavrie ako osudový kruh.',
      'Druhá dejová línia sleduje statkára Konstantina Levina, ktorý si po Vronského odchode vezme Kitty. Levin hľadá zmysel života v práci na pôde, v blízkosti k sedliakom, v manželstve a napokon vo viere; prechádza pochybnosťami a myšlienkami na smrť, ale nájde pokoj. Obe línie tvoria zámerný protiklad: Anna hľadá naplnenie vo vášni a končí smrťou, Levin ho nachádza v každodennom živote a povinnosti. Román má motto o tom, že pomsta a odplata neprináleží ľuďom, čím Tolstoj odmieta, aby Annu súdila spoločnosť.',
    ],
    kompozicia:
      'Osem častí s dvoma paralelnými, len voľne prepojenými dejovými líniami (Anna – Vronskij a Levin – Kitty), ktoré sa navzájom osvetľujú ako protiklady. Kompozíciu drží rámec železnice: na stanici sa Anna a Vronskij prvý raz stretnú a na stanici sa jej príbeh končí. Na začiatku stojí biblické motto o tom, že odplata neprináleží ľuďom.',
    postavy: [
      {
        meno: 'Anna Kareninová',
        charakteristika:
          'Krásna, citlivá a úprimná žena, ktorá nedokáže žiť v predstieranom manželstve a za lásku zaplatí postavením, dieťaťom a napokon životom. Nie je vykreslená ako viníčka, ale ako človek rozdrvený medzi citom a spoločenskou morálkou.',
        rola: 'hlavna',
      },
      {
        meno: 'Alexej Vronskij',
        charakteristika:
          'Dôstojník a gróf, do ktorého sa Anna zaľúbi. Ľúbi ju naozaj, no nedokáže sa pre ňu vzdať spoločenského života a kariéry, takže cena vzťahu dopadne iba na ňu.',
        rola: 'hlavna',
      },
      {
        meno: 'Alexej Alexandrovič Karenin',
        charakteristika:
          'Annin manžel, vysoký štátny úradník. Je korektný, chladný a najviac mu záleží na vonkajšej slušnosti; rozvod odmietne preto, aby sa nenarušilo jeho postavenie. Predstavuje mravnosť bez lásky.',
        rola: 'hlavna',
      },
      {
        meno: 'Konstantin Levin',
        charakteristika:
          'Statkár, ktorý hľadá zmysel života v práci na pôde, v blízkosti k sedliakom, v manželstve s Kitty a vo viere. Je autorovým názorovým dvojníkom a protipólom Anninej cesty.',
        rola: 'hlavna',
      },
      {
        meno: 'Kitty Ščerbackaja',
        charakteristika:
          'Mladá dievčina, ktorú Vronskij sklame; neskôr sa vydá za Levina a nájde šťastie v obyčajnom rodinnom živote. Jej príbeh je pozitívnou protiváhou Anninho.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Stiva Oblonskij a Dolly',
        charakteristika:
          'Annin brat a jeho žena. Stivove nevery spoločnosť ľahko prehliadne, čím sa naplno odhalí dvojaká morálka, ktorá Annu zničí.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'láska proti spoločenskej morálke',
      'dvojaká morálka voči mužovi a voči žene',
      'postavenie ženy a jej právo na vlastné rozhodnutie',
      'hľadanie zmyslu života (Levinova línia)',
      'rodina, manželstvo a materstvo',
    ],
    motivy: [
      'železnica, stanica a vlak ako osudový motív',
      'bál, na ktorom sa všetko začne',
      'odopretý syn Serioža',
      'vylúčenie zo spoločnosti a scéna v divadle',
      'morfium a narastajúca žiarlivosť',
      'práca na poli a kosba v Levinovej línii',
    ],
    jazyk: [
      'vnútorný monológ a polopriama reč — čitateľ vstupuje priamo do Anninho myslenia, najsilnejšie v jej poslednej ceste na stanicu',
      'paralelná kompozícia dvoch línií, ktoré sa hodnotia navzájom: vášeň bez zázemia proti každodennej práci a viere',
      'symbol — vlak a železnica ako osudová sila, svetlo sviečky, ktoré v závere „zhasne“, ako obraz konca života',
      'psychologická charakteristika drobnými detailmi (pohľad, gesto, mlčanie) namiesto priameho hodnotenia vyprávačom',
      'kontrast prostredí — chladné petrohradské salóny proti vidieku, kde sa pracuje a žije prirodzene',
      'rozsiahle opisné a úvahové pasáže (hospodárstvo, politika, viera), ktoré z románu robia obraz celej spoločnosti',
      'motto a jeho opakované pripomínanie ako ideový kľúč: súdiť človeka neprináleží ľuďom',
    ],
    citaty: [
      {
        text: '„Všetky šťastné rodiny sa navzájom podobajú, každá nešťastná rodina je nešťastná svojím vlastným spôsobom.“',
        zdroj: 'úvodná veta románu',
      },
    ],
    maturitneMinimum: [
      'Tolstoj je spolu s Dostojevským najvýznamnejším predstaviteľom ruského realizmu; jeho ďalším vrcholným dielom je Vojna a mier.',
      'Anna Kareninová vychádzala na pokračovanie v rokoch 1873 – 1877 a má osem častí.',
      'Kľúčová je dvojitá kompozícia: Anna hľadá naplnenie vo vášni a končí smrťou, Levin ho nachádza v práci, rodine a viere.',
      'Román kritizuje dvojakú morálku: Stivove nevery spoločnosť prehliadne, Annu za tú istú vec vylúči.',
      'Motív železnice tvorí rámec diela — na stanici sa Anna s Vronským stretne a na stanici zomrie.',
      'Typická maturitná otázka: charakterizuj Annu Kareninovú a vysvetli, čím je jej osud obžalobou spoločnosti, nie jej samej.',
    ],
    ulohy: [
      {
        id: 'anna-kareninova-k1',
        typ: 'kviz',
        otazka: 'Prečo Karenin odmieta Anne rozvod?',
        moznosti: [
          'záleží mu na vonkajšej slušnosti a na svojom spoločenskom postavení',
          'stále ju vrúcne miluje a nechce ju stratiť',
          'rozvod v Rusku vôbec nebol možný',
          'chce si ponechať jej majetok',
        ],
        spravna: 0,
        vysvetlenie:
          'Karenin predstavuje mravnosť bez lásky. Rozhoduje sa podľa toho, čo si povie spoločnosť, nie podľa citu — a práve to Annu uzavrie do neriešiteľnej situácie.',
      },
      {
        id: 'anna-kareninova-k2',
        typ: 'kviz',
        otazka: 'Ako sa Annin príbeh končí?',
        moznosti: [
          'vrhne sa pod vlak na železničnej stanici',
          'zmieri sa s Kareninom a vráti sa k synovi',
          'odíde s Vronským natrvalo do Italie',
          'vstúpi do kláštora',
        ],
        spravna: 0,
        vysvetlenie:
          'Motív železnice tvorí rámec románu: na stanici sa s Vronským prvý raz stretla a na stanici sa jej príbeh uzavrie ako osudový kruh.',
      },
      {
        id: 'anna-kareninova-k3',
        typ: 'kviz',
        otazka: 'Aká je úloha Levinovej dejovej línie?',
        moznosti: [
          'je protikladom Anninej cesty — zmysel života nachádza v práci, rodine a viere',
          'je len vedľajšou epizódou bez významu pre celok',
          'privádza Annu a Vronského k zmiereniu',
          'vysvetľuje politické dejiny Ruska',
        ],
        spravna: 0,
        vysvetlenie:
          'Dve paralelné línie sa navzájom hodnotia: vášeň bez zázemia vedie k smrti, každodenná práca a viera k pokoju. Levin je autorovým názorovým dvojníkom.',
      },
      {
        id: 'anna-kareninova-k4',
        typ: 'kviz',
        otazka: 'V čom sa v románe prejavuje dvojaká morálka spoločnosti?',
        moznosti: [
          'Stivove nevery spoločnosť prehliada, Annu za neveru vylúči',
          'šľachta smie pracovať, sedliaci nie',
          'ženy sa smú vzdelávať, muži nie',
          'cirkev odsudzuje iba bohatých',
        ],
        spravna: 0,
        vysvetlenie:
          'Práve tento protiklad robí z románu obžalobu spoločnosti: tá istá vec je mužovi odpustená a žene sa stane rozsudkom.',
      },
      {
        id: 'anna-kareninova-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave jej charakteristiku.',
        pary: [
          { vlavo: 'Anna Kareninová', vpravo: 'žena rozdrvená medzi citom a spoločenskou morálkou' },
          { vlavo: 'Alexej Karenin', vpravo: 'chladný úradník, mravnosť bez lásky' },
          { vlavo: 'Alexej Vronskij', vpravo: 'dôstojník, ktorý sa nevzdá kariéry a spoločnosti' },
          { vlavo: 'Konstantin Levin', vpravo: 'statkár hľadajúci zmysel života v práci a viere' },
          { vlavo: 'Kitty Ščerbackaja', vpravo: 'nájde šťastie v obyčajnom rodinnom živote' },
        ],
        vysvetlenie:
          'Postavy sú postavené do protikladných párov, aby autor bez priameho odsudku ukázal, kde je život naplnený a kde zmarený.',
      },
      {
        id: 'anna-kareninova-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o románe.',
        text: [
          'Román Anna Kareninová vychádzal v rokoch ',
          { medzera: '1873 – 1877', napoveda: 'sedemdesiate roky 19. storočia' },
          ' a má ',
          { medzera: 'osem', napoveda: 'počet častí' },
          ' častí. Druhú dejovú líniu tvorí statkár ',
          { medzera: 'Levin', napoveda: 'Konstantin, manžel Kitty' },
          '.',
        ],
        vysvetlenie:
          'Dvojitá kompozícia je pri rozbore najdôležitejšia: Annina a Levinova línia sa stretávajú len okrajovo, no významovo sa dopĺňajú.',
      },
    ],
  },
  {
    id: 'zlocin-a-trest',
    nazov: 'Zločin a trest',
    autorId: 'dostojevskij',
    rocnik: 2,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'psychologický (filozofický) realistický román',
    forma: 'próza — šesť častí a epilóg',
    rokVydania: '1866',
    obdobie: 'ruský realizmus s psychologickým prehĺbením',
    miestoACas:
      'Petrohrad šesťdesiatych rokov 19. storočia — dusné podkrovné svetlice, krčmy, úradné miestnosti a chudobné štvrte; epilóg sa odohráva v sibírskej trestanci',
    anotacia:
      'Román o mladom mužovi, ktorý si vymyslí teóriu ospravedlňujúcu zločin, a potom nesie jeho vnútorné následky. Zakladateľské dielo moderného psychologického románu.',
    obsah: [
      'Rodion Romanovič Raskoľnikov je chudobný študent, ktorý musel pre biedu prerušiť štúdium a živorí v dusnej podkrovnej svetlici v Petrohrade. Vymyslí si teóriu, podľa ktorej sa ľudia delia na obyčajných a na výnimočných: výnimoční majú právo prekročiť mravný zákon, ak tým prospejú ľudstvu. Sám sa chce presvedčiť, či patrí medzi nich. Za skúšku si zvolí vraždu starej úžerníčky Aľony Ivanovny, ktorá podľa neho nikomu neprináša nič dobré.',
      'Vraždu vykoná sekerou a neplánovane pri nej zabije aj jej nevinnú sestru Lizavetu, ktorá prichádza v nesprávnej chvíli. Odnesie len malú časť peňazí a ani tie nepoužije. Od tejto chvíle sa román odvíja nie ako detektívka, ale ako opis vnútorného rozkladu: Raskoľnikov má horúčky, blúzni, stráca kontakt s ľuďmi a jeho teória sa mu rozpadá pod rukami. Zistí, že prekročenie zákona neuniesol nie preto, že by bol prichytený, ale preto, že sa z ľudského spoločenstva vylúčil sám.',
      'Okolo neho sa zbiehajú ďalšie osudy. Spozná Soňu Marmeladovovú, dievčinu, ktorá sa musela predávať, aby uživila rodinu opilca Marmeladova; práve ona sa stane jeho mravnou protiváhou, pretože trpí bez viny a nestratila vieru. Sestra Duňa a mať Pulcheria mu chcú pomôcť, hoci sa pri tom samy dostávajú do rúk vypočítavého Lužina a cynického Svidrigajlova. Svidrigajlov je Raskoľnikovovým temným zrkadlom: prekračuje zákony bez výčitiek a nakoniec sa zastrelí.',
      'Vyšetrujúci sudca Porfirij Petrovič Raskoľnikova neusvedčí dôkazmi, ale psychologickým tlakom: rozhovorom, mlčaním, narážkami a napokon otevřenou výzvou, aby sa priznal sám, lebo tak si zmierni trest a zachráni sa. Raskoľnikov sa najprv prizná Soni, ktorá ho neodsúdi, ale žiada ho, aby verejne prijal svoju vinu. Nakoniec ide na policajnú stanicu a doznáva sa.',
      'Súd ho odsúdi na osem rokov nútených prác na Sibíri. Soňa odíde s ním a žije v blízkosti trestanice. V epilógu Raskoľnikov najprv ostáva zatvrdnutý a svoju teóriu ešte stále nepovažuje za nesprávnu — iba seba za slabého. Až po ťažkej chorobe sa v ňom zlomí pýcha a prijme Soninu lásku aj vieru; tým začína jeho mravné znovuzrodenie. Román teda nekončí trestom, ale možnosťou nového života.',
    ],
    kompozicia:
      'Šesť častí a epilóg. Vražda sa odohráva už v prvej časti, takže celý zvyšok románu je vnútorným trestom — čitateľ pozná pachateľa od začiatku a sleduje jeho psychiku, nie odhaľovanie zločinu. Kompozíciu podopierajú dvojníci hlavnej postavy: Soňa ako jeho mravný protiklad a Svidrigajlov ako jeho temné zrkadlo. Epilóg prináša obrat k znovuzrodeniu.',
    postavy: [
      {
        meno: 'Rodion Romanovič Raskoľnikov',
        charakteristika:
          'Chudobný bývalý študent, hrdý, inteligentný a citlivý, no zajatý vlastnou teóriou o výnimočných ľuďoch, ktorí smú prekročiť mravný zákon. Po vražde sa psychicky rozpadá a až v epilógu sa cez lásku a vieru znovu narodí.',
        rola: 'hlavna',
      },
      {
        meno: 'Soňa Marmeladovová',
        charakteristika:
          'Dievčina, ktorá sa musí predávať, aby uživila rodinu opilca Marmeladova. Trpí bez vlastnej viny, no nestratila vieru ani lásku k ľuďom; je Raskoľnikovovou mravnou protiváhou a napokon aj cestou k jeho záchrane.',
        rola: 'hlavna',
      },
      {
        meno: 'Porfirij Petrovič',
        charakteristika:
          'Vyšetrujúci sudca, ktorý pracuje s psychológiou namiesto dôkazov. Raskoľnikova nezatkne, ale privedie ho k tomu, aby sa priznal sám — jeho rozhovory sú najnapätejšími scénami románu.',
        rola: 'hlavna',
      },
      {
        meno: 'Arkadij Svidrigajlov',
        charakteristika:
          'Cynický a zmyslový človek, ktorý prekračuje zákony bez výčitiek. Je Raskoľnikovovým temným zrkadlom — ukazuje, kam vedie teória bez svedomia — a nakoniec sa zastrelí.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Duňa (Avdotia) a mať Pulcheria',
        charakteristika:
          'Raskoľnikovova sestra a matka, ktoré sa pre neho obetujú a pri tom sa samy dostávajú do rúk vypočítavého Lužina. Predstavujú lásku, ktorú hlavná postava svojím činom zrádza.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Aľona Ivanovna a Lizaveta',
        charakteristika:
          'Stará úžerníčka, ktorú Raskoľnikov zabije ako „skúšku“ svojej teórie, a jej nevinná sestra, ktorá sa stane neplánovanou druhou obeťou. Lizavetina smrť je dôkazom, že teória nemôže platiť.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'vina, svedomie a vnútorný trest',
      'teória o výnimočných ľuďoch a jej zlyhanie',
      'bieda veľkomesta a jej vplyv na človeka',
      'utrpenie, pokora a možnosť znovuzrodenia',
      'láska a viera ako cesta zo zúfalstva',
    ],
    motivy: [
      'dusná podkrovná svetlica podobná truhle',
      'sekera a vražda úžerníčky',
      'horúčkovité sny a blúznenie',
      'rozhovory s Porfirijom Petrovičom',
      'Sonino evanjelium a výzva prijať vinu',
      'Sibír a trestanica v epilógu',
    ],
    jazyk: [
      'vnútorný monológ a polopriama reč — väčšina románu sa odohráva vo Raskoľnikovovej hlave, takže čitateľ vidí zločin zvnútra',
      'dialóg ako duel (najmä s Porfirijom) — reč sa stáva zbraňou, napätie vzniká z nedopovedaného a z mlčania',
      'postavy-dvojníci: Soňa a Svidrigajlov zrkadlia dve možné cesty hlavnej postavy, čím sa myšlienka románu zhmotňuje do ľudí',
      'symbol — sekera, dusná svetlica ako truhla, kríž, ktorý Raskoľnikov prijme od Soni, alebo počet krokov k vražde',
      'sny a horúčkovité vízie, ktoré odhaľujú to, čo si postava nechce priznať (najmä sen o bitom koni)',
      'opis veľkomesta ako dusného, špinavého priestoru, ktorý postavu tlačí k činu — prostredie tu spoluvysvetľuje zločin',
      'kompozičný obrat: zločin je hneď na začiatku, takže napätie nesie nie otázka „kto“, ale „ako to unesie“',
    ],
    citaty: [
      {
        text: '„Zabil som seba, nie tú starenu.“',
        zdroj: 'Raskoľnikov Soni pri priznaní',
      },
    ],
    maturitneMinimum: [
      'Dostojevskij je zakladateľom moderného psychologického románu; ďalšie diela: Idiot, Bratia Karamazovovci, Bedári (Biedni ľudia).',
      'Zločin a trest vyšiel roku 1866 a má šesť častí a epilóg; vražda je hneď v prvej časti, takže celý román je opisom vnútorného trestu.',
      'Raskoľnikovova teória delí ľudí na obyčajných a výnimočných, pričom výnimoční smú prekročiť mravný zákon — jej vyvrátenie je hlavnou myšlienkou diela.',
      'Soňa a Svidrigajlov sú dvojníci hlavnej postavy: dve možné cesty, pokora a viera proti cynizmu bez svedomia.',
      'Trest nie je iba súdny (osem rokov Sibíri), ale predovšetkým vnútorný — skutočným vykúpením je až znovuzrodenie v epilógu.',
      'Typická maturitná otázka: vysvetli Raskoľnikovovu teóriu, dôvody jej zlyhania a úlohu Soni Marmeladovovej.',
    ],
    ulohy: [
      {
        id: 'zlocin-a-trest-k1',
        typ: 'kviz',
        otazka: 'Na čom je založená Raskoľnikovova teória?',
        moznosti: [
          'ľudia sa delia na obyčajných a výnimočných, pričom výnimoční smú prekročiť mravný zákon',
          'zločin je vždy dôsledkom biedy a preto nikoho nemožno súdiť',
          'človek sa má riadiť výhradne cirkevnou morálkou',
          'majetok treba rozdeliť rovným dielom medzi všetkých',
        ],
        spravna: 0,
        vysvetlenie:
          'Vraždou úžerníčky si chce Raskoľnikov overiť, či patrí k výnimočným. Teória sa však zrúti, pretože vinu neunesie svedomie, nie súd.',
      },
      {
        id: 'zlocin-a-trest-k2',
        typ: 'kviz',
        otazka: 'Ako Porfirij Petrovič dosiahne Raskoľnikovovo priznanie?',
        moznosti: [
          'psychologickým tlakom — rozhovormi, narážkami a výzvou, aby sa priznal sám',
          'nájde na mieste činu odtlačky a svedka',
          'pomocou výslechu pod mučením',
          'zatkne Soňu a vymení ju za priznanie',
        ],
        spravna: 0,
        vysvetlenie:
          'Porfirij nemá dôkazy, pracuje s psychikou. Práve preto sú rozhovory s ním najnapätejšími scénami románu — reč v nich funguje ako zbraň.',
      },
      {
        id: 'zlocin-a-trest-k3',
        typ: 'kviz',
        otazka: 'Akú úlohu má v románe Soňa Marmeladovová?',
        moznosti: [
          'je Raskoľnikovovou mravnou protiváhou a cestou k jeho znovuzrodeniu',
          'pomáha mu skryť dôkazy pred políciou',
          'je Porfirijovou informátorkou',
          'je sestrou zabitej úžerníčky',
        ],
        spravna: 0,
        vysvetlenie:
          'Soňa trpí bez vlastnej viny, no nestratila vieru. Neodsúdi Raskoľnikova, ale žiada od neho, aby svoju vinu verejne prijal — a odíde s ním na Sibír.',
      },
      {
        id: 'zlocin-a-trest-k4',
        typ: 'kviz',
        otazka: 'Čím sa román končí?',
        moznosti: [
          'epilógom na Sibíri, v ktorom sa Raskoľnikov cez lásku a vieru mravne znovuzrodí',
          'Raskoľnikovovou smrťou vo väzení',
          'útekom Raskoľnikova do zahraničia',
          'zistením, že vraždu spáchal Svidrigajlov',
        ],
        spravna: 0,
        vysvetlenie:
          'Súdny trest je osem rokov nútených prác, no podstatná je vnútorná premena: až keď sa v Raskoľnikovovi zlomí pýcha, začína nový život.',
      },
      {
        id: 'zlocin-a-trest-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave jej funkciu v románe.',
        pary: [
          { vlavo: 'Raskoľnikov', vpravo: 'tvorca teórie o výnimočných ľuďoch' },
          { vlavo: 'Soňa Marmeladovová', vpravo: 'mravná protiváha, pokora a viera' },
          { vlavo: 'Svidrigajlov', vpravo: 'temné zrkadlo — cynizmus bez svedomia' },
          { vlavo: 'Porfirij Petrovič', vpravo: 'vyšetrovateľ pracujúci s psychológiou' },
          { vlavo: 'Lizaveta', vpravo: 'nevinná druhá obeť, ktorá teóriu vyvráti' },
        ],
        vysvetlenie:
          'Postavy sú rozložené ako možnosti a zrkadlá hlavného hrdinu, takže myšlienka románu sa odohráva nie v úvahách, ale medzi ľuďmi.',
      },
      {
        id: 'zlocin-a-trest-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o románe.',
        text: [
          'Román Zločin a trest vyšiel v roku ',
          { medzera: '1866', napoveda: 'šesťdesiate roky 19. storočia' },
          ' a odohráva sa v meste ',
          { medzera: 'Petrohrad', napoveda: 'vtedajšie hlavné mesto Ruska' },
          '. Raskoľnikov zabije starú ',
          { medzera: 'úžerníčku', napoveda: 'Aľona Ivanovna, pôžičky na zálohu' },
          ' a jej sestru Lizavetu.',
        ],
        vysvetlenie:
          'Lizavetina neplánovaná smrť je najsilnejším dôkazom, že teória o výnimočných ľuďoch nemôže platiť: obeťou sa stane úplne nevinný človek.',
      },
      {
        id: 'zlocin-a-trest-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň kompozíciu a vyznenie diela.',
        text: [
          'Román má šesť častí a ',
          { medzera: 'epilóg', napoveda: 'záverečná časť na Sibíri' },
          '. Raskoľnikov je odsúdený na ',
          { medzera: 'osem', napoveda: 'počet rokov nútených prác' },
          ' rokov na Sibíri, kam s ním odíde aj ',
          { medzera: 'Soňa', napoveda: 'Marmeladovová' },
          '.',
        ],
        vysvetlenie:
          'Trest nie je iba súdny, ale hlavne vnútorný. Epilóg preto neuzatvára príbeh potrestaním, ale možnosťou nového života.',
      },
    ],
  },
  {
    id: 'krvave-sonety',
    nazov: 'Krvavé sonety',
    autorId: 'hviezdoslav',
    rocnik: 2,
    druh: 'poezia',
    literatura: 'slovenska',
    standardizovane: false,
    zaner: 'lyrický cyklus sonetov (reflexívna a apelatívna lyrika)',
    forma: 'poézia — 32 sonetov (dve štvorveršia a dve trojveršia)',
    rokVydania: 'napísané 1914, vydané 1919',
    obdobie: 'slovenský literárny realizmus, protivojnová (humanistická) lyrika',
    miestoACas:
      'nie je určené konkrétne miesto — dejištem je celý svet zachvátený prvou svetovou vojnou roku 1914; lyrický subjekt hovorí z pozície svedka a sudcu',
    anotacia:
      'Cyklus tridsiatich dvoch sonetov, v ktorých básnik reaguje na vypuknutie prvej svetovej vojny. Jedno z najsilnejších protivojnových diel slovenskej literatúry.',
    obsah: [
      'Prvá skupina sonetov vyjadruje zdesenie a otras. Lyrický subjekt nechce uveriť tomu, čo vidí: svet, ktorý sa pýšil vzdelanosťou a pokrokom, sa vrhol do zabíjania. Obrazy sú tvrdé a krvavé — polia plné mŕtvych, zničené domy, rieky krvi. Zo otázok „kto to spôsobil“ a „prečo“ vzniká základné napätie celého cyklu.',
      'Druhá skupina prechádza od zdesenia k obžalobe. Básnik obviňuje človeka, jeho pýchu a chamtivosť, ale najmä tzv. kultúru a civilizáciu, ktorá sa chválila humanizmom a v skutočnosti vyrobila zbrane a nenávisť. Neodsudzuje iba panovníkov a mocných, ktorí vojnu rozpútali pre zisk a slávu; vinu rozprostiera aj na ľudstvo, ktoré to dopustilo. Obraciá sa aj na Boha s otázkou, prečo mlčí, čo dáva sonetom naliehavý, miestami rúhavý tón.',
      'Tretia skupina je sústredená na obete. Lyrický subjekt hovorí o vojakoch, ktorí nevedia, za čo umierajú, o matkách, ktoré čakajú synov, o sirotách a vdovách, o zničenej práci celých generácií. Krv, ktorá dala cyklu názov, tu nie je obrazom hrdinstva, ale nespravodlivosti: umierajú tí, ktorí vojnu nechceli, a profitujú tí, ktorí nebojujú.',
      'Vo štvrtej skupine sa tón mení a vstupuje do neho úvaha, ako z toho von. Básnik hľadá vinu aj v sebe a vo svojej generácii, pýta sa na zmysel poézie v čase zabíjania a vyslovuje mravný príkaz: človek sa musí premeniť, inak sa vojna vráti. Odmieta zmierenie, ktoré by bolo iba pauzou medzi dvoma vojnami.',
      'Záverečné sonety sú vízia a prosba. Lyrický subjekt verí v príchod spravodlivého mieru, v bratstvo národov a v to, že aj malý, dosiaľ neslobodný národ dostane svoje právo. Cyklus teda nekončí beznádejou, ale nadejou a apelom — preto sa označuje aj za humanistický manifest. Práve tento obrat od obžaloby k nádeji je pri rozbore najdôležitejší.',
    ],
    kompozicia:
      'Cyklus 32 sonetov (dve štvorveršia a dve trojveršia v každom), ktorý je vystavaný ako myšlienková gradácia: zdesenie a otras, obžaloba človeka a civilizácie, súcit s obeťami, mravný príkaz premeny a napokon vízia spravodlivého mieru a bratstva národov. Sonety sú spojené obrazom krvi a opakovanými rečníckymi otázkami. Napísané boli roku 1914 hneď po vypuknutí vojny, vydané až roku 1919.',
    postavy: [
      {
        meno: 'lyrický subjekt (básnik)',
        charakteristika:
          'Svedok a sudca doby, ktorý vojnu nezobrazuje z frontu, ale hodnotí ju mravne. Postupuje od zdesenia cez obžalobu k nádeji a vlastnú generáciu nevyníma z viny.',
        rola: 'hlavna',
      },
      {
        meno: 'ľudstvo a jeho „kultúra“',
        charakteristika:
          'Hlavný adresát obžaloby. Civilizácia, ktorá sa chválila vzdelanosťou a humanizmom, vyrobila zbrane a nenávisť — preto je podľa básnika spoluvinná.',
        rola: 'hlavna',
      },
      {
        meno: 'obete vojny (vojaci, matky, siroty)',
        charakteristika:
          'Kolektívna postava tých, ktorí umierajú a trpia, hoci vojnu nechceli. Práve na nich sa ukazuje nespravodlivosť celého diania.',
        rola: 'hlavna',
      },
      {
        meno: 'mocní, ktorí vojnu rozpútali',
        charakteristika:
          'Panovníci a tí, ktorí z vojny získavajú zisk a slávu, no sami nebojujú. Sú nositeľmi konkrétnej viny, ktorú básnik pomenúva bez okolkov.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'odsúdenie vojny a jej nezmyselnosti',
      'vina človeka a zlyhanie civilizácie',
      'súcit s obeťami a s malými národmi',
      'mravná premena človeka ako jediná cesta k pokoju',
      'nádej na spravodlivý mier a bratstvo národov',
    ],
    motivy: [
      'krv ako ústredný obraz celého cyklu',
      'zničené polia, domy a práca generácií',
      'matka čakajúca syna',
      'mlčanie Boha',
      'falošná chvála kultúry a pokroku',
      'vízia mieru a slobody malého národa',
    ],
    jazyk: [
      'sonetová forma (dve štvorveršia a dve trojveršia) — pevná stavba drží na uzde silnú emóciu a dáva každému sonetu jasnú myšlienkovú pointu',
      'rečnícke otázky a apostrofy (oslovenie ľudstva, kultúry, Boha), ktoré z lyriky robia obžalobu a apel',
      'gradácia v rámci celého cyklu — od zdesenia cez obžalobu a súcit až po víziu mieru; jednotlivé sonety sú stupňami jednej úvahy',
      'kontrast — chvála civilizácie proti skutočnosti zabíjania, hrdinské slová proti krvi bezmenných obetí',
      'symbol a metafora krvi, ktorá dala cyklu názov a spája sonety do celku',
      'básnické novotvary (neologizmy) a zložité, knižné slovníkové vrstvy typické pre Hviezdoslava, ktoré textu dávajú vážny, monumentálny tón',
      'inverzia a zložitá vetná stavba, ktorá spomaľuje čítanie a zdôrazňuje závažnosť výpovede',
    ],
    maturitneMinimum: [
      'Krvavé sonety napísal Hviezdoslav roku 1914 hneď po vypuknutí prvej svetovej vojny; v úplnosti vyšli roku 1919, teda po jej skončení.',
      'Cyklus má 32 sonetov a je vystavaný ako gradácia: zdesenie, obžaloba, súcit s obeťami, mravný príkaz, vízia mieru.',
      'Vinu básnik nekladie len na mocných, ale aj na celé ľudstvo a na civilizáciu, ktorá sa chválila humanizmom.',
      'Dielo nekončí beznádejou, ale nádejou na spravodlivý mier a bratstvo národov — preto ho možno nazvať humanistickým manifestom.',
      'Hviezdoslav je vrcholným predstaviteľom slovenského literárneho realizmu; jeho ďalšie diela sú Hájnikova žena, Ežo Vlkolinský, Gábor Vlkolinský a cyklus Letorosty.',
      'Typická maturitná otázka: vysvetli, koho básnik z vojny obviňuje a ako sa mení tón cyklu od prvých sonetov po záverečné.',
    ],
    ulohy: [
      {
        id: 'krvave-sonety-k1',
        typ: 'kviz',
        otazka: 'Koľko sonetov obsahuje cyklus Krvavé sonety?',
        moznosti: ['32', '15', '291', '9'],
        spravna: 0,
        vysvetlenie:
          'Cyklus tvorí 32 sonetov; každý z nich má dve štvorveršia a dve trojveršia a je jedným stupňom spoločnej myšlienkovej gradácie.',
      },
      {
        id: 'krvave-sonety-k2',
        typ: 'kviz',
        otazka: 'Kedy dielo vzniklo a kedy vyšlo?',
        moznosti: [
          'napísané roku 1914, vydané roku 1919',
          'napísané aj vydané roku 1914',
          'napísané roku 1919, vydané roku 1939',
          'napísané roku 1900, vydané roku 1914',
        ],
        spravna: 0,
        vysvetlenie:
          'Hviezdoslav reagoval hneď na vypuknutie prvej svetovej vojny, no cyklus mohol vyjsť až po jej skončení — v čase vojnovej cenzúry bolo vydanie nemyslitelné.',
      },
      {
        id: 'krvave-sonety-k3',
        typ: 'kviz',
        otazka: 'Koho básnik z vojny obviňuje?',
        moznosti: [
          'mocných, ktorí vojnu rozpútali, ale aj celé ľudstvo a jeho „kultúru“',
          'výhradne nepriateľské vojsko',
          'iba obyčajných vojakov, ktorí poslúchli rozkaz',
          'nikoho — vojnu považuje za osudovú nevyhnutnosť',
        ],
        spravna: 0,
        vysvetlenie:
          'Obžaloba je širšia než politická: civilizácia, ktorá sa chválila vzdelanosťou a humanizmom, podľa básnika vyrobila zbrane aj nenávisť, a preto je spoluvinná.',
      },
      {
        id: 'krvave-sonety-k4',
        typ: 'kviz',
        otazka: 'Aký je tón záverečných sonetov?',
        moznosti: [
          'nádej na spravodlivý mier a bratstvo národov',
          'úplná beznádej a odmietnutie akéhokoľvek zmyslu',
          'oslava vojnového hrdinstva',
          'výzva na odplatu nepriateľovi',
        ],
        spravna: 0,
        vysvetlenie:
          'Obrat od obžaloby k nádeji je pri rozbore najdôležitejší: preto sa cyklus označuje za humanistický manifest, nie iba za protest.',
      },
      {
        id: 'krvave-sonety-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k časti cyklu jej prevládajúci obsah.',
        pary: [
          { vlavo: 'úvodné sonety', vpravo: 'zdesenie a otras nad vypuknutím vojny' },
          { vlavo: 'druhá skupina', vpravo: 'obžaloba človeka a falošnej civilizácie' },
          { vlavo: 'tretia skupina', vpravo: 'súcit s obeťami, matkami a sirotami' },
          { vlavo: 'štvrtá skupina', vpravo: 'mravný príkaz premeny človeka' },
          { vlavo: 'záverečné sonety', vpravo: 'vízia mieru a bratstva národov' },
        ],
        vysvetlenie:
          'Cyklus nie je zbierkou nesúvisiacich básní: jeho časti tvoria jednu gradovanú úvahu od otrasu po nádej.',
      },
      {
        id: 'krvave-sonety-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o cykle.',
        text: [
          'Krvavé sonety napísal Hviezdoslav v roku ',
          { medzera: '1914', napoveda: 'vypuknutie prvej svetovej vojny' },
          ', vyšli však až v roku ',
          { medzera: '1919', napoveda: 'po skončení vojny' },
          '. Cyklus tvorí ',
          { medzera: '32', napoveda: 'počet sonetov' },
          ' sonetov.',
        ],
        vysvetlenie:
          'Rozdiel medzi rokom vzniku a rokom vydania je dôsledkom vojnovej cenzúry — protivojnové dielo nemohlo vyjsť počas vojny.',
      },
    ],
  },
  {
    id: 'hajnikova-zena',
    nazov: 'Hájnikova žena',
    autorId: 'hviezdoslav',
    rocnik: 2,
    druh: 'poezia',
    literatura: 'slovenska',
    standardizovane: false,
    zaner: 'lyrickoepická básnická skladba (veršovaná epika s lyrickým rámcom)',
    forma: 'poézia — pätnásť spevov s lyrickým úvodom a záverom',
    rokVydania: '1884 – 1886',
    obdobie: 'slovenský literárny realizmus',
    miestoACas:
      'slovenská horská dedina, hájnikova chalupa v lese a panský kaštieľ; druhá polovica 19. storočia, dej sa odvíja v rytme ročných období',
    anotacia:
      'Skladba o mladých hájnikovcoch, ktorých život rozvráti panský syn, a o tom, ako sa čistý človek obháji aj pred súdom. Vrcholné epické dielo slovenského realizmu.',
    obsah: [
      'Skladba sa otvára slávnym lyrickým úvodom, v ktorom sa básnik pozdravuje s lesmi a horami a hľadá v prírode pokoj pred falošným svetom ľudí. Tento úvod nie je iba ozdoba: stanovuje hodnotový svet celého diela — príroda a jednoduchý pracujúci človek stoja proti panskej spoločnosti. Potom sa začne epický dej. Po smrti starého hájnika Čajku prevezme jeho službu u panstva syn Michal a privedie si do horskej chalupy mladú ženu Hanku.',
      'Mladí hájnikovci žijú skromne, pracovito a šťastne. Do ich života však vstúpi Artuš Villáni, syn panského zemepána: pri poľovačkách si všimne krásnu Hanku a začne sa o ňu bezostyšne zaujímať. Zvyknutý na to, že mu panstvo dáva právo na všetko, neberie jej odmietanie vážne. Napätie sa stupňuje, pretože Michal tuší nebezpečenstvo, ale voči pánovi je bezmocný.',
      'Vyvrcholením je scéna, keď Artuš prichádza do chalupy v čase, keď je Michal v službe v lese. Pokúsi sa Hanku znásilniť a ona sa v obrane brání tak, že ho zabije. Michal po návrate pochopí, čo sa stalo, a rozhodne sa zachrániť ženu: vinu vezme na seba a vyhlási, že panského syna zabil on. Zavrú ho a čaká ho súd.',
      'Hanka nesie tajomstvo aj bolesť sama a pod ich tlakom sa jej pomúti rozum. Blúdi, nepoznáva ľudí a jej stav sa zhoršuje. Dedina súcití, ale nič nezmôže; panstvo chce vidieť vinníka. Napätie sa vyhrocuje k súdnemu pojednávaniu, na ktorom má byť Michal odsúdený za čin, ktorý nespáchal.',
      'Do súdnej scény však vtrhne Hanka a povie pravdu: Artuša zabila ona, keď sa bránila. Súd uzná, že šlo o obranu vlastnej česti a života, a Michala i Hanku oslobodí. Dvojica sa vracia do hôr a Hanka sa po prežitom otrase postupne uzdravuje; ich život začína znova. Skladba sa uzatvára lyrickým záverom, ktorým sa básnik opäť obracia k prírode — mravné víťazstvo teda patrí jednoduchému človeku, nie panstvu.',
    ],
    kompozicia:
      'Pätnásť spevov obopnutých lyrickým úvodom („Pozdravujem vás, lesy, hory…“) a lyrickým záverom, ktorý sa s prírodou lúči. Epický dej má klasickú stavbu (pokojná expozícia, vstup Artuša, vyvrcholenie v chalupe, kríza s Michalovým uväznením a Hankiným pomätením, rozuzlenie na súde) a je prekladaný lyrickými opismi prírody a ročných období. Skladba vychádzala v rokoch 1884 – 1886.',
    postavy: [
      {
        meno: 'Michal Čajka',
        charakteristika:
          'Mladý hájnik, ktorý prevzal službu po otcovi. Je pracovitý, čestný a mravne silný; aby zachránil ženu, vezme na seba vinu za smrť panského syna a je ochotný ísť za to do väzenia.',
        rola: 'hlavna',
      },
      {
        meno: 'Hanka Čajková',
        charakteristika:
          'Hájnikova žena, krásna, pracovitá a mravne čistá. Pri obrane vlastnej česti zabije Artuša, potom sa pod tlakom tajomstva pomätie a napokon nájde silu povedať na súde pravdu.',
        rola: 'hlavna',
      },
      {
        meno: 'Artuš Villáni',
        charakteristika:
          'Syn panského zemepána, rozmazlený a bezohľadný. Je zvyknutý, že mu postavenie dáva právo na všetko, a preto Hankino odmietanie neberie vážne; jeho smrť je dôsledkom vlastného násilia.',
        rola: 'hlavna',
      },
      {
        meno: 'starý Villáni',
        charakteristika:
          'Otec Artuša a zemepán, ktorý hájnikov zamestnáva. Predstavuje panský svet a jeho moc nad životmi obyčajných ľudí.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Michalova mať (stará Čajková)',
        charakteristika:
          'Vdova po starom hájnikovi, ktorá mladým pomáha a spolu s nimi trpí. Vnáša do skladby obraz rodinnej súdržnosti a ľudovej zbožnosti.',
        rola: 'vedlajsia',
      },
      {
        meno: 'dedinský ľud',
        charakteristika:
          'Kolektív, ktorý s hájnikovcami súcití, ale voči panstvu nič nezmôže. Predstavuje mravné zázemie, na ktoré sa skladba odvoláva.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'sociálny rozdiel medzi panstvom a ľudom',
      'mravná čistota a vernosť v manželstve',
      'obrana ľudskej dôstojnosti pred zvôľou moci',
      'príroda ako útočisko a hodnotová norma',
      'vina, obetavosť a spravodlivosť',
    ],
    motivy: [
      'chalupa v lese proti panskému kaštieľu',
      'poľovačka, pri ktorej si Artuš všimne Hanku',
      'obrana v chalupe a Artušova smrť',
      'Michalovo prevzatie viny',
      'Hankino pomätenie a blúdenie',
      'súdna scéna a priznanie pravdy',
    ],
    jazyk: [
      'lyrický rámec (úvod a záver) — pozdrav lesom a horám nie je ozdobou, ale stanovuje hodnoty, podľa ktorých sa dej hodnotí',
      'kontrast dvoch svetov — chalupa proti kaštieľu, práca proti záhaľčivosti, čistota proti zvôli; na tomto protiklade stojí celá skladba',
      'personifikácia prírody, ktorá s postavami cíti a komentuje dej (les, hory, ročné obdobia) — príroda je spoluúčastníkom príbehu',
      'gradácia napätia od pokojnej idylky cez Artušovo naliehanie a scénu v chalupe až po súdne pojednávanie',
      'bohatý, knižný slovník s básnickými novotvarmi a inverziou — typický Hviezdoslavov náročný jazyk, ktorý dielo pozdvihuje nad bežnú reč',
      'symbol — les ako priestor čistoty a pravdy, kaštieľ ako priestor zvôle; Hankino pomätenie ako obraz krivdy, ktorá sa nedá uniesť',
      'dramatické scény s dialógom (naliehanie v chalupe, súd), ktoré epickú skladbu približujú k dráme',
    ],
    citaty: [
      {
        text: '„Pozdravujem vás, lesy, hory, / z tej duše pozdravujem vás!“',
        zdroj: 'lyrický úvod skladby',
      },
    ],
    maturitneMinimum: [
      'Hájnikova žena vychádzala v rokoch 1884 – 1886 a je vrcholným dielom slovenskej veršovanej epiky; má pätnásť spevov s lyrickým úvodom a záverom.',
      'Základný kompozičný princíp je kontrast dvoch svetov: hájnikova chalupa (ľud, práca, čistota) proti panskému kaštieľu (moc, zvôľa).',
      'Lyrický úvod „Pozdravujem vás, lesy, hory…“ patrí k najznámejším miestam slovenskej poézie a stanovuje hodnotový svet diela.',
      'Hanka zabije Artuša v obrane vlastnej česti; Michal vezme vinu na seba a súd oboch oslobodí po Hankinom priznaní — mravné víťazstvo patrí ľudu.',
      'Hviezdoslav je vrcholom slovenského literárneho realizmu; ďalšie diela: Ežo Vlkolinský, Gábor Vlkolinský, Krvavé sonety, cykly Letorosty a Žalmy a hymny.',
      'Typická maturitná otázka: vysvetli funkciu lyrického rámca a kontrastu dvoch svetov v Hájnikovej žene.',
    ],
    ulohy: [
      {
        id: 'hajnikova-zena-k1',
        typ: 'kviz',
        otazka: 'Kto zabije Artuša Villániho?',
        moznosti: [
          'Hanka, keď sa brání pred jeho násilím',
          'Michal pri hádke v lese',
          'starý Villáni pri poľovačke',
          'nikto — Artuš zomrie na chorobu',
        ],
        spravna: 0,
        vysvetlenie:
          'Hanka koná v obrane vlastnej česti a života. Práve preto ju súd na konci oslobodí — jej čin nie je zločin, ale obrana.',
      },
      {
        id: 'hajnikova-zena-k2',
        typ: 'kviz',
        otazka: 'Prečo sa Michal prizná k činu, ktorý nespáchal?',
        moznosti: [
          'chce zachrániť Hanku pred súdom a väzením',
          'nepamätá si, čo sa v chalupe stalo',
          'panstvo ho k priznaniu prinúti mučením',
          'chce sa pomstiť starému Villánimu',
        ],
        spravna: 0,
        vysvetlenie:
          'Michalovo prevzatie viny je vrcholom jeho mravnej sily: je ochotný ísť do väzenia, len aby ženu ochránil.',
      },
      {
        id: 'hajnikova-zena-k3',
        typ: 'kviz',
        otazka: 'Ako sa skladba končí?',
        moznosti: [
          'Hanka na súde povie pravdu, oboch oslobodia a vrátia sa do hôr',
          'Michala odsúdia a zomrie vo väzení',
          'Hanka zomrie a Michal zostane sám',
          'panstvo hájnikovcov vyhnať z chalupy',
        ],
        spravna: 0,
        vysvetlenie:
          'Rozuzlenie prichádza Hankiným priznaním na súde. Mravné víťazstvo tak patrí jednoduchému človeku, nie panstvu.',
      },
      {
        id: 'hajnikova-zena-k4',
        typ: 'kviz',
        otazka: 'Akú funkciu má lyrický úvod „Pozdravujem vás, lesy, hory…“?',
        moznosti: [
          'stanovuje hodnotový svet diela — prírodu a jednoduchého človeka proti falošnej spoločnosti',
          'je iba ozdobou bez súvisu s dejom',
          'predstavuje postavu Artuša Villániho',
          'opisuje priebeh súdneho pojednávania',
        ],
        spravna: 0,
        vysvetlenie:
          'Lyrický rámec nie je dekorácia: príroda v ňom vystupuje ako norma, podľa ktorej sa potom hodnotí konanie postáv.',
      },
      {
        id: 'hajnikova-zena-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave alebo motívu jeho význam v skladbe.',
        pary: [
          { vlavo: 'Michal Čajka', vpravo: 'hájnik, ktorý vezme vinu na seba' },
          { vlavo: 'Hanka Čajková', vpravo: 'žena, ktorá sa brání a napokon povie pravdu' },
          { vlavo: 'Artuš Villáni', vpravo: 'panský syn zneužívajúci svoje postavenie' },
          { vlavo: 'chalupa v lese', vpravo: 'svet práce, čistoty a pravdy' },
          { vlavo: 'panský kaštieľ', vpravo: 'svet moci a zvôle' },
        ],
        vysvetlenie:
          'Skladba je vystavaná na kontraste dvoch svetov; každá postava aj miesto patrí k jednému z nich a nesie jeho hodnoty.',
      },
      {
        id: 'hajnikova-zena-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o skladbe.',
        text: [
          'Hájnikova žena vychádzala v rokoch ',
          { medzera: '1884 – 1886', napoveda: 'osemdesiate roky 19. storočia' },
          ' a má ',
          { medzera: 'pätnásť', napoveda: 'počet spevov' },
          ' spevov. Hlavné postavy sú hájnik Michal Čajka a jeho žena ',
          { medzera: 'Hanka', napoveda: 'titulná hájnikova žena' },
          '.',
        ],
        vysvetlenie:
          'Spevy sú obopnuté lyrickým úvodom a záverom, ktoré sa obracajú k prírode — túto stavbu treba pri rozbore vedieť pomenovať.',
      },
    ],
  },
  // === DOPLNIT_DIELA ===
]
