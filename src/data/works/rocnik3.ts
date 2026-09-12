// 3. ročník — literárna moderna, avantgarda a medzivojnová slovenská próza.
// Autori a diela sú oddelené, aby sa obsah dal dopĺňať bez zásahu do komponentov.
import type { Autor, Dielo } from '../../types'

export const autori3: Autor[] = [
  {
    id: 'baudelaire',
    meno: 'Charles Baudelaire',
    roky: '1821 – 1867',
    smer: 'symbolizmus, prekliati poeti (parnasizmus v začiatkoch)',
    zivotopis:
      'Francúzsky básnik, esejista a kritik, ktorý sa považuje za zakladateľa modernej európskej poézie. Narodil sa v Paríži, otec mu zomrel v detstve a s matkiným novým manželom, generálom Aupickom, sa nikdy nezmieril — vzbura proti rodine a meštiackej morálke ho poznačila na celý život. Žil bohémsky, v dlhoch, chorobe a závislostiach, prekladal Edgara Allana Poea a obdivoval jeho teóriu básnickej skladby. Po vydaní zbierky Kvety zla bol s vydavateľom súdne stíhaný za urážku verejnej morálky a šesť básní muselo byť zo zbierky vyradených. Umrel ochrnutý a takmer bez hlasu v Paríži, jeho poetika však otvorila cestu symbolizmu a celej modernej lyrike.',
    dalsieDiela: ['Malé básne v próze (Spleen Paríža)', 'Umelé raje', 'Úvahy o niektorých súčasníkoch', 'Kritiky o umení'],
  },
  {
    id: 'rimbaud',
    meno: 'Jean Arthur Rimbaud',
    roky: '1854 – 1891',
    smer: 'symbolizmus, prekliati poeti',
    zivotopis:
      'Francúzsky básnik, najmladší a najradikálnejší z prekliatych poetov. Narodil sa v Charleville v prísnej rodine, bol výnimočne nadaný študent, no v šestnástich rokoch začal utekať z domu do Paríža. Jeho vzťah s básnikom Paulom Verlainom skončil škandálom a výstrelom, po ktorom Verlaine skončil vo väzení. Celé básnické dielo napísal medzi pätnástym a dvadsiatym rokom života, potom literatúru úplne opustil, cestoval po Európe a Afrike a obchodoval v Abesínii. Zomrel mladý v Marseille na následky choroby; jeho verše otvorili dvere avantgarde a surrealizmu.',
    dalsieDiela: ['Pobyt v pekle (Sezóna v pekle)', 'Iluminácie', 'Samohlásky', 'Spiaci v úvale'],
  },
  {
    id: 'krasko',
    meno: 'Ivan Krasko (vlastným menom Ján Botto)',
    roky: '1876 – 1958',
    smer: 'slovenská literárna moderna, symbolizmus',
    zivotopis:
      'Najvýznamnejší predstaviteľ slovenskej literárnej moderny, ktorý písal pod pseudonymom Ivan Krasko, aby ho nezamieňali s romantikom Jánom Bottom. Narodil sa v Lukovištiach v Gemeri, študoval na gymnáziách v Rimavskej Sobote, Rožňave a Sibini a chémiu v Prahe, kde sa zapojil do spolku Detvan. Pracoval ako chemický inžinier v Klobukoch a v Slanom, počas prvej svetovej vojny bol na fronte, po vojne pôsobil aj ako politik a senátor. Napísal len dve tenké zbierky — Nox et solitudo a Verše — no práve ním sa do slovenskej poézie dostal symbolizmus, subjektívna výpoveď a tichý, melancholický tón. Zomrel v Piešťanoch.',
    dalsieDiela: ['Verše', 'Otcova roľa', 'Baníci', 'Jehovah', 'List mŕtvemu'],
  },
  {
    id: 'rolland',
    meno: 'Romain Rolland',
    roky: '1866 – 1944',
    smer: 'humanizmus, medzivojnová svetová próza; nositeľ Nobelovej ceny (1915)',
    zivotopis:
      'Francúzsky prozaik, dramatik, muzikológ a esejista, presvedčený pacifista a humanista. Vyštudoval históriu a hudobnú vedu, prednášal dejiny hudby na Sorbonne a napísal významné monografie o Beethovenovi a Michelangelovi. Počas prvej svetovej vojny sa z neutrálneho Švajčiarska otvorene postavil proti vojnovej propagande na oboch stranách, za čo ho vo Francúzsku obvinili zo zrady. V roku 1915 dostal Nobelovu cenu za literatúru, hlásil sa k odkazu Tolstého a Gándhího a k myšlienke neubližovania. Novela Peter a Lucia je jeho najznámejším protivojnovým dielom — malý ľúbostný príbeh, ktorý ukazuje absurditu vojny.',
    dalsieDiela: ['Ján Krištof', 'Dobrý človek ešte žije (Colas Breugnon)', 'Očarená duša', 'Nad vravou bojiska', 'Beethovenov život'],
  },
  {
    id: 'remarque',
    meno: 'Erich Maria Remarque',
    roky: '1898 – 1970',
    smer: 'medzivojnová svetová próza, stratená generácia',
    zivotopis:
      'Nemecký prozaik, najznámejší autor protivojnového románu v svetovej literatúre. Narodil sa v Osnabrücku, ako devätnásťročný bol povolaný na západný front prvej svetovej vojny, kde bol niekoľkokrát ranený — vlastná skúsenosť sa stala základom jeho tvorby. Po vojne pracoval ako učiteľ, novinár a redaktor, kým mu roku 1929 nevyšiel román Na západe nič nové, ktorý sa okamžite stal svetovým bestsellerom. Nacisti jeho knihy zakázali a pálili, zbavili ho nemeckého občianstva a jeho sestru odsúdili na smrť; on sám emigroval do Švajčiarska a potom do USA. Zomrel v Locarne ako jeden z hlavných hlasov takzvanej stratenej generácie.',
    dalsieDiela: ['Cesta späť', 'Traja kamaráti', 'Víťazný oblúk', 'Čierny obelisk', 'Iskra života'],
  },
  {
    id: 'kafka',
    meno: 'Franz Kafka',
    roky: '1883 – 1924',
    smer: 'literárna moderna, expresionizmus, existenciálne ladená próza (pražská nemecká literatúra)',
    zivotopis:
      'Pražský nemecky píšuci prozaik židovského pôvodu, jeden z najvplyvnejších autorov modernej svetovej literatúry. Vyrastal v napätom vzťahu s autoritatívnym otcom, obchodníkom Hermannom Kafkom, o ktorom napísal známy List otcovi. Vyštudoval právo a celý život pracoval ako úradník v poisťovni, čo prežíval ako bremeno odoberajúce čas na písanie. Trpel tuberkulózou a pocitmi vlastnej nedostatočnosti, svoje rukopisy chcel dať zničiť, priateľ Max Brod však jeho vôľu nesplnil a romány vydal. Novela Premena patrí k tomu málu, čo vyšlo ešte za Kafkovho života, a je najčítanejším obrazom odcudzenia človeka v rodine a spoločnosti.',
    dalsieDiela: ['Proces', 'Zámok', 'Amerika (Nezvestný)', 'List otcovi', 'V trestaneckej kolónii'],
  },
  {
    id: 'apollinaire',
    meno: 'Guillaume Apollinaire (vlastným menom Wilhelm Apollinaris de Kostrowitzky)',
    roky: '1880 – 1918',
    smer: 'literárna avantgarda, kubizmus, začiatky nadrealizmu (pojem surrealizmus zaviedol on)',
    zivotopis:
      'Francúzsky básnik poľsko-italského pôvodu, ústredná postava parížskej avantgardy pred prvou svetovou vojnou. Narodil sa v Ríme ako nemanželský syn poľskej šľachtičnej, vyrastal vo Francúzsku a v Paríži sa priatelil s malármi Picassom a Braqueom, ktorých kubizmus teoreticky obhajoval. Zaviedol slovo surrealizmus a v poézii zrušil interpunkciu, aby verš plynul ako voľná asociácia. Ako dobrovoľník bojoval v prvej svetovej vojne, bol ranený do hlavy a oslabený zomrel roku 1918 na španielsku chrípku. Jeho skladba Pásmo a zbierka Kaligramy sa stali vzorom pre celú európsku avantgardu vrátane slovenských davistov a poetistov.',
    dalsieDiela: ['Alkoholy', 'Kaligramy', 'Prsia Tirésiove', 'Zavraždený poet'],
  },
  {
    id: 'breton',
    meno: 'André Breton',
    roky: '1896 – 1966',
    smer: 'surrealizmus (zakladateľ a teoretik)',
    zivotopis:
      'Francúzsky básnik, prozaik a teoretik, zakladateľ a hlavný organizátor surrealizmu. Študoval medicínu a počas prvej svetovej vojny pracoval na psychiatrickom oddelení, kde sa zblížil s Freudovou psychoanalýzou a s technikou voľných asociácií. Najprv patril k dadaizmu, roku 1924 však vydal Manifest surrealizmu, ktorým hnutie definoval ako „čistý psychický automatizmus“. Okolo seba zhromaždil skupinu autorov a výtvarníkov (Éluard, Aragon, Dalí, Ernst) a prísne strážil čistotu programu, pre ktorú sa so mnohými rozišiel. Počas druhej svetovej vojny emigroval do USA, po vojne sa vrátil do Paríža; jeho manifesty ovplyvnili aj slovenských nadrealistov.',
    dalsieDiela: ['Druhý manifest surrealizmu', 'Nadja', 'Magnetické polia (s P. Soupaultom)', 'Spojité nádoby'],
  },
  {
    id: 'fabry',
    meno: 'Rudolf Fabry',
    roky: '1915 – 1982',
    smer: 'slovenský nadrealizmus (surrealizmus)',
    zivotopis:
      'Slovenský básnik, novinár a grafik, zakladateľská osobnosť slovenského nadrealizmu. Narodil sa v Budmericiach, študoval na učiteľskom ústave v Bratislave a neskôr pracoval ako redaktor a publicista. Roku 1935 vydal zbierku Uťaté ruky, ktorou programovo prerušil spojenie s dovtedajšou poéziou a priniesol na Slovensko surrealistickú poetiku voľných asociácií. Zbierku doplnil manifestačným textom, kolážami a vlastnou grafikou, čím z knihy urobil avantgardné gesto. Neskoršie zbierky sa postupne vracali k zrozumiteľnejšiemu výrazu a k spoločenským témam vojny a obnovy.',
    dalsieDiela: ['Vodné hodiny hodiny piesočné', 'Ja je niekto iný', 'Kytica dýk', 'Toto je moja pravda'],
  },
  {
    id: 'lukac',
    meno: 'Emil Boleslav Lukáč',
    roky: '1900 – 1979',
    smer: 'neosymbolizmus, slovenská medzivojnová poézia',
    zivotopis:
      'Slovenský básnik, prekladateľ, evanjelický farár a publicista, hlavný predstaviteľ neosymbolizmu. Narodil sa v Hodruši, vyštudoval teológiu a filozofiu v Bratislave, Lipsku a v Paríži, kde sa zblížil s francúzskou poéziou a kultúrou. Pôsobil ako evanjelický kňaz, redaktor časopisov a prekladateľ z francúzštiny, nemčiny a maďarčiny. Jeho poézia je intelektuálna, meditatívna a vnútorne rozorvaná — vyjadruje napätie medzi vidieckym domovom a veľkomestom, medzi vierou a pochybnosťou. Zbierka Dunaj a Seina pomenúva práve tento rozpor medzi domácim a cudzím svetom.',
    dalsieDiela: ['Spoveď', 'O láske neláskavej', 'Križovatky', 'Elixír', 'Moloch'],
  },
  {
    id: 'smrek',
    meno: 'Ján Smrek (vlastným menom Ján Čietek)',
    roky: '1898 – 1982',
    smer: 'vitalizmus, slovenská medzivojnová poézia',
    zivotopis:
      'Slovenský básnik, prekladateľ a vydavateľ, najznámejší predstaviteľ slovenského vitalizmu. Osirel ako dieťa, vyrastal v sirotinci v Modre, počas prvej svetovej vojny musel narukovať a bojoval na palestínskom fronte. Po vojne študoval teológiu, prešiel k žurnalistike a stal sa redaktorom; založil a viedol vplyvný časopis Elán, ktorý spájal slovenskú literatúru s európskou. Prekladal z francúzštiny, maďarčiny a ruštiny a organizoval literárny život medzi vojnami. Jeho poézia oslavuje život, mladosť, ženu, pohyb a radosť zo sveta — programovým vyjadrením je zbierka Cválajúce dni.',
    dalsieDiela: ['Odsúdený k večitej žízni', 'Božské uzly', 'Iba oči', 'Básnik a žena', 'Studňa'],
  },
  {
    id: 'dilong',
    meno: 'Rudolf Dilong',
    roky: '1905 – 1986',
    smer: 'katolícka moderna, prvky poetizmu a nadrealizmu',
    zivotopis:
      'Slovenský básnik a františkánsky kňaz, najplodnejší autor katolíckej moderny. Narodil sa v Trstenej na Orave, vstúpil do františkánskej rehole a pôsobil ako kňaz a redaktor rehoľných časopisov. Písal veľmi rýchlo a veľa — vydal desiatky zbierok, v ktorých spája náboženský motív s modernou obraznosťou poetizmu a nadrealizmu. Po roku 1945 emigroval, žil v Taliansku, Argentíne a nakoniec v USA, kde pokračoval v tvorbe pre slovenskú emigráciu; doma bolo jeho dielo dlho zakázané. Zbierka Mladý svadobník patrí k jeho najznámejším a ukazuje spojenie ľúbostného, prírodného a duchovného motívu.',
    dalsieDiela: ['Slávne na holiach', 'Helena nosí lipový vetvičku', 'Gardisti, na stráž!', 'Konvália', 'Honolulu, pieseň labute'],
  },
  {
    id: 'hronsky',
    meno: 'Jozef Cíger Hronský',
    roky: '1896 – 1960',
    smer: 'lyrizovaná próza, medzivojnová slovenská próza',
    zivotopis:
      'Slovenský prozaik, redaktor a kultúrny organizátor, jedna z hlavných postáv medzivojnovej slovenskej prózy. Narodil sa vo Zvolene, vyštudoval učiteľský ústav v Leviciach a niekoľko rokov učil v Krupine a v Martine. Stal sa tajomníkom a neskôr správcom Matice slovenskej, viedol vydavateľskú činnosť a redigoval detské časopisy. Po druhej svetovej vojne emigroval, žil v Taliansku a v Argentíne, kde zakladal Slovenský kultúrny ústav a Zahraničnú Maticu slovenskú; zomrel v Luján. Jeho román Jozef Mak je vrcholom slovenskej lyrizovanej prózy a obrazom osudu „človeka-milióna“.',
    dalsieDiela: ['Chlieb', 'Pisár Gráč', 'Andreas Búr Majster', 'Svet na Trasovisku', 'Sokoliar Tomáš'],
  },
  {
    id: 'milo-urban',
    meno: 'Milo Urban',
    roky: '1904 – 1982',
    smer: 'expresionizmus, sociálno-psychologický realizmus, medzivojnová slovenská próza',
    zivotopis:
      'Slovenský prozaik a novinár, zakladateľ moderného slovenského sociálneho románu. Narodil sa v Rabčiciach na Orave v chudobnej rodine, čo trvalo určilo témy jeho tvorby — život hornooravského dedinského ľudu. Študoval na gymnáziu v Trstenej a v Ružomberku, štúdium však pre nedostatok peňazí nedokončil a stal sa redaktorom novín. Roku 1927 vydal román Živý bič, v ktorom expresionistickou skratkou zobrazil rozklad dediny počas prvej svetovej vojny a vzburu ľudu. Po roku 1945 bol pre svoju redaktorskú činnosť v období Slovenského štátu odsúdený a na dlhé roky vytlačený z literárneho života; svoje spomienky opísal v memoárovom cykle.',
    dalsieDiela: ['Hmly na úsvite', 'V osídlach', 'Zhasnuté svetlá', 'Kto seje vietor', 'Zelená krv (memoáre)'],
  },
  {
    id: 'chrobak',
    meno: 'Dobroslav Chrobák',
    roky: '1907 – 1951',
    smer: 'naturizmus, lyrizovaná próza',
    zivotopis:
      'Slovenský prozaik, esejista a odborník na techniku, jeden z hlavných predstaviteľov naturizmu. Narodil sa v Hybiach pod Tatrami, vyštudoval elektrotechniku v Prahe a pracoval ako inžinier a redaktor technických aj literárnych časopisov, neskôr v rozhlase. Napísal pomerne málo — zbierku noviel Kamarát Jašek a novelu Drak sa vracia — no jeho texty určili podobu naturizmu na Slovensku. V teoretických úvahách obhajoval prózu, ktorá čerpá z ľudovej rozprávky, mýtu a baladickej atmosféry hôr namiesto opisu spoločenských problémov. Zomrel mladý v Bratislave.',
    dalsieDiela: ['Kamarát Jašek', 'Cesta za Petrom (rukopis)', 'Rukoväť dejín slovenskej literatúry (spoluautor)'],
  },
  {
    id: 'svantner',
    meno: 'František Švantner',
    roky: '1912 – 1950',
    smer: 'naturizmus, lyrizovaná próza',
    zivotopis:
      'Slovenský prozaik, najvýraznejší predstaviteľ naturizmu v slovenskej literatúre. Narodil sa v Bystrej pri Brezne, vyštudoval učiteľský ústav v Banskej Bystrici a učil na horských školách v okolí Slovenskej Ľupče, čím dobre poznal prostredie svojich próz. Jeho novely a romány sa odohrávajú v horách, kde sa ľudský osud prelína s prírodou, tajomstvom a vášňou; typický je pre ne baladický tón a neistota medzi skutočnosťou a víziou. Novela Malka je jeho najznámejším textom z prostredia pastierskej samoty. Zomrel mladý v Prahe, jeho román Život bez konca vyšiel až posmrtne.',
    dalsieDiela: ['Malka (zbierka noviel)', 'Nevesta hôľ', 'Život bez konca', 'Dáma', 'Piargy'],
  },
  {
    id: 'jilemnicky',
    meno: 'Peter Jilemnický',
    roky: '1901 – 1949',
    smer: 'socialistický realizmus, sociálna próza',
    zivotopis:
      'Prozaik českého pôvodu, ktorý sa stal jedným zo zakladateľov socialistického realizmu v slovenskej literatúre. Narodil sa v Kyšperku v Čechách, vyštudoval učiteľský ústav a od roku 1922 učil na Kysuciach, ktorých chudoba a vysťahovalectvo sa stali témou jeho kníh. Dva roky študoval v Sovietskom zväze a pôsobil v Družstve Interhelpo, čo prehĺbilo jeho presvedčenie o kolektívnom riešení sociálnej otázky. Počas druhej svetovej vojny bol zapojený do odboja, zatknutý a väznený v Nemecku; po vojne pôsobil v diplomatických službách v Moskve, kde zomrel. Novela O dvoch bratoch je jeho najznámejším kratším textom o bratskom konflikte na kysuckej pôde.',
    dalsieDiela: ['Víťazný pád', 'Pole neorané', 'Zuniaci krok', 'Kompas v nás', 'Kronika'],
  },
  {
    id: 'barc-ivan',
    meno: 'Július Barč-Ivan',
    roky: '1909 – 1953',
    smer: 'expresionizmus, medzivojnová a vojnová slovenská dráma',
    zivotopis:
      'Slovenský dramatik, prozaik a evanjelický kňaz, najvýznamnejší autor slovenskej expresionistickej drámy. Narodil sa v Krompachoch, vyštudoval evanjelickú teológiu v Bratislave a pôsobil ako kňaz, neskôr ako dramaturg Slovenského národného divadla v Martine. V jeho hrách nejde o dobovú spoločenskú kritiku, ale o vyhrotené mravné otázky: vina, obeta, svedomie a hodnota človeka. Postavy stavia do krajnej situácie, v ktorej sa musia rozhodnúť, a často pracuje s biblickými podtextami. Jednoaktovka Matka patrí k jeho najsilnejším textom o materinskej láske a vine.',
    dalsieDiela: ['Neznámy', 'Mastný hrniec', 'Dvaja', 'Diktátor', 'Veža'],
  },

]

export const diela3: Dielo[] = [
  {
    id: 'kvety-zla',
    nazov: 'Kvety zla (výber)',
    autorId: 'baudelaire',
    rocnik: 3,
    druh: 'poezia',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'lyrická zbierka (cyklicky komponovaná básnická kniha)',
    forma: 'poézia — prevažne sonety a pravidelné strofické útvary',
    rokVydania: '1857 (rozšírené vydanie 1861)',
    obdobie: 'symbolizmus, prekliati poeti',
    miestoACas:
      'veľkomesto Paríž druhej polovice 19. storočia — ulice, podkrovia, nemocnice, prístavy; zároveň vnútorný priestor duše lyrického subjektu',
    anotacia:
      'Zbierka, ktorou sa začína moderná európska poézia: básne o kráse nájdenej aj v tom, čo je škaredé, choré a zakázané. Autor v nich hľadá cestu z nudy a beznádeje veľkomesta k ideálu.',
    obsah: [
      'Zbierka nie je náhodný súbor básní, ale kniha usporiadaná ako putovanie duše. Otvára ju báseň Predhovor (Čitateľovi), v ktorej sa lyrický subjekt obracia na čitateľa ako na svojho dvojníka a spoluvinníka: najväčším hriechom podľa neho nie je zloba, ale nuda, spleen. Už tu je daný základný rozpor celej knihy — napätie medzi ideálom a nízkou, špinavou skutočnosťou. Titul Kvety zla je oxymoron, ktorý presne pomenúva program: aj zo zla a rozkladu možno vypestovať krásu.',
      'Najrozsiahlejšia časť Spleen a ideál ukazuje básnika ako bytosť, ktorá do sveta nepatrí. V básni Žehnanie prichádza poet na svet ako prekliaty, v básni Albatros je obrazom veľkého vtáka, ktorý je vo výškach vznešený, no na palube lodi smiešny a bezmocný — jeho veľké krídla mu prekážajú v chôdzi. Báseň Súvzťažnosti (Correspondances) je programová: príroda je chrám plný znakov a vône, farby a zvuky si navzájom odpovedajú, takže básnik má hľadať skryté súvislosti. Sem patrí aj báseň Zdochlina, v ktorej sa opis rozkladajúceho sa tela mení na úvahu o tom, že jedine umenie zachová tvár milovanej.',
      'Ďalšie cykly vedú lyrický subjekt hlbšie do sveta veľkomesta a úniku. Parížske obrazy sú básne o uliciach, starých ženách, slepcoch a chudákoch, teda o témach, ktoré dovtedy do poézie nepatrili. Cykly Vino a Kvety zla hľadajú vyslobodenie v opojení, láske a v hriechu, cyklus Vzbura sa vzpiera nebu a Bohu. Nikde však úľava nie je trvalá: každý únik sa končí návratom nudy a pocitu prázdna.',
      'Kniha sa uzatvára oddielom Smrť, kde je posledná cesta jediným skutočným vyslobodením. V záverečnej básni Plavba (Cesta) sa smrť stáva starým kapitánom a lyrický subjekt žiada, aby ho odviezol kamkoľvek — do neznáma, hoci na dno priepasti, len aby našiel niečo nové. Celá zbierka tak vyúsťuje nie do zmierenia, ale do túžby po zmene za každú cenu. Práve pre otvorené témy hriechu, telesnosti a rozkladu bol Baudelaire aj s vydavateľom roku 1857 súdne odsúdený za urážku verejnej morálky a šesť básní muselo byť zo zbierky vyňatých.',
    ],
    kompozicia:
      'Zbierka je premyslene cyklicky komponovaná: po úvodnej básni Čitateľovi nasledujú oddiely Spleen a ideál, Parížske obrazy, Vino, Kvety zla, Vzbura a Smrť. Poradie sleduje cestu duše od túžby po ideáli cez pády a úniky až k smrti ako poslednej ceste. Prevažuje sonet a iné pravidelné útvary — moderný obsah je zámerne vložený do klasickej formy.',
    postavy: [
      {
        meno: 'lyrický subjekt (básnik)',
        charakteristika:
          'Vyvrhnutý, nadaný a rozorvaný jednotlivec, ktorý cíti krásu aj hnus ostrejšie ako ostatní. Zmieta sa medzi túžbou po ideáli a pádom do neresti a nudy. Nie je hrdinom s dejom, ale hlasom, ktorý knihou prechádza.',
        rola: 'hlavna',
      },
      {
        meno: 'albatros',
        charakteristika:
          'Obraz veľkého morského vtáka, ktorého námorníci ulovia a zosmiešnia na palube. Vo vzduchu je kráľom, na zemi je nemotorný — priamy symbol postavenia básnika v spoločnosti.',
        rola: 'vedlajsia',
      },
      {
        meno: 'žena (milovaná i osudná)',
        charakteristika:
          'V zbierke sa striedajú podoby ženy: ideálna a nedosiahnuteľná, telesná a zmyslová, aj ničiaca. Nie je individuálnou postavou, ale protipólom, na ktorom sa ukazuje rozpor medzi ideálom a hriechom.',
        rola: 'vedlajsia',
      },
      {
        meno: 'veľkomesto Paríž',
        charakteristika:
          'Prostredie, ktoré dostáva takmer postavovú platnosť: ulica plná chudákov, hmly a zhonu je zdrojom nudy aj poetických obrazov. Baudelaire ako prvý urobil z moderného mesta plnohodnotnú básnickú látku.',
        rola: 'vedlajsia',
      },
      {
        meno: 'smrť',
        charakteristika:
          'V záverečnom oddiele vystupuje personifikovaná smrť ako starý kapitán, ktorý má odviezť lyrický subjekt do neznáma. Nie je hrozbou, ale poslednou nádejou na niečo nové.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'rozpor medzi ideálom a nízkou skutočnosťou (spleen a ideál)',
      'postavenie básnika ako vyvrhnutého jednotlivca',
      'krása objavená v škaredosti, rozklade a hriechu',
      'nuda (spleen) ako najväčšie zlo moderného človeka',
      'smrť ako jediné skutočné vyslobodenie',
    ],
    motivy: [
      'albatros s veľkými krídlami',
      'veľkomesto, ulica, hmla',
      'vôňa, farba a zvuk, ktoré si odpovedajú',
      'zdochlina a rozklad tela',
      'opojenie vínom a láskou',
      'plavba do neznáma',
    ],
    jazyk: [
      'oxymoron — už názov Kvety zla spája nespojiteľné a je kľúčom k celej knihe: zo zla sa má zrodiť krása',
      'symbol — albatros zastupuje básnika, plavba zastupuje smrť a hľadanie nového; predmet vždy odkazuje na vnútorný stav',
      'synestézia — v básni Súvzťažnosti sa vône, farby a zvuky navzájom prelínajú a zastupujú, čo sa stalo základom symbolistickej obraznosti',
      'kontrast — vznešený a nízky štýl stoja vedľa seba (chrám a zdochlina, ideál a krčma), čím vzniká typické baudelairovské napätie',
      'sonet a pravidelný verš — moderný, provokatívny obsah je vedome vložený do prísnej klasickej formy',
      'apostrofa — oslovenie čitateľa ako „môjho brata“ v úvodnej básni vťahuje čitateľa do spoluviny',
      'hudobnosť verša — eufónia a opakovanie hlások nesú náladu; Baudelaira k tomu priviedol jeho obdivovaný autor Edgar Allan Poe',
    ],
    maturitneMinimum: [
      'Kvety zla sa považujú za základný text symbolizmu a za začiatok modernej európskej poézie; Baudelaire patrí k prekliatym poetom (poètes maudits).',
      'Symbolizmus pracuje so symbolom, náladou, hudobnosťou verša a synestéziou — báseň nemá opisovať, ale evokovať.',
      'Zbierka bola roku 1857 súdne odsúdená za urážku verejnej morálky, šesť básní bolo vyradených; skandál sám sa stal súčasťou dejín knihy.',
      'Kľúčové básne na maturitu: Čitateľovi (spleen), Albatros (postavenie básnika), Súvzťažnosti (programová poetika), Zdochlina, Plavba.',
      'Typická maturitná otázka: vysvetli význam oxymoronu v názve zbierky a na príklade básne Albatros charakterizuj postavenie básnika v spoločnosti.',
    ],
    ulohy: [
      {
        id: 'kvety-zla-k1',
        typ: 'kviz',
        otazka: 'Aký štylistický prostriedok je použitý v samotnom názve zbierky Kvety zla?',
        moznosti: ['oxymoron', 'hyperbola', 'anafora', 'epiteton'],
        spravna: 0,
        vysvetlenie:
          'Kvet (krása, život) a zlo (hriech, rozklad) sa logicky vylučujú, ide teda o oxymoron. Vyjadruje program zbierky: aj zo zla možno vypestovať krásu.',
      },
      {
        id: 'kvety-zla-k2',
        typ: 'kviz',
        otazka: 'Čo symbolizuje albatros v rovnomennej básni?',
        moznosti: [
          'postavenie básnika, ktorý je vo výškach veľký, ale medzi ľuďmi nemotorný a zosmiešnený',
          'slobodu národa, ktorý sa vymaní z poroby',
          'vernú lásku, ktorá prekoná odlúčenie',
          'blížiacu sa vojnu a záhubu Európy',
        ],
        spravna: 0,
        vysvetlenie:
          'Námorníci ulovia albatrosa a na palube sa mu posmievajú, pretože jeho obrovské krídla mu prekážajú v chôdzi. Presne tak je podľa Baudelaira vnímaný básnik v meštiackej spoločnosti.',
      },
      {
        id: 'kvety-zla-k3',
        typ: 'kviz',
        otazka: 'Ako sa nazýva pocit nudy, prázdnoty a znechutenia, ktorý je v zbierke označený za najväčšie zlo?',
        moznosti: ['spleen', 'katarzia', 'mimézis', 'pátos'],
        spravna: 0,
        vysvetlenie:
          'Spleen je životná nuda a znechutenie moderného človeka. Práve pred ním lyrický subjekt uteká do lásky, opojenia, vzbury a nakoniec k smrti.',
      },
      {
        id: 'kvety-zla-k4',
        typ: 'kviz',
        otazka: 'Čím sa zbierka Kvety zla končí?',
        moznosti: [
          'oddielom Smrť, v ktorom sa smrť stáva plavbou do neznáma',
          'návratom lyrického subjektu do rodnej dediny',
          'oslavou technického pokroku veľkomesta',
          'zmierením s Bohom a vierou',
        ],
        spravna: 0,
        vysvetlenie:
          'Posledný oddiel sa volá Smrť a záverečná Plavba žiada smrť ako kapitána, aby odviezla básnika kamkoľvek, len aby našiel niečo nové. Zbierka teda nekončí zmierením, ale túžbou po zmene.',
      },
      {
        id: 'kvety-zla-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k pojmu alebo motívu jeho význam v zbierke.',
        pary: [
          { vlavo: 'albatros', vpravo: 'symbol básnika vyvrhnutého zo spoločnosti' },
          { vlavo: 'spleen', vpravo: 'nuda a znechutenie ako najväčšie zlo' },
          { vlavo: 'Súvzťažnosti', vpravo: 'programová báseň o prelínaní vôní, farieb a zvukov' },
          { vlavo: 'Plavba', vpravo: 'záverečná báseň — smrť ako cesta do neznáma' },
          { vlavo: 'Paríž', vpravo: 'veľkomesto ako nová básnická látka' },
        ],
        vysvetlenie:
          'Symbolizmus nepracuje s priamym opisom: každý motív zastupuje vnútorný stav alebo myšlienku, ktorú si má čitateľ domyslieť.',
      },
      {
        id: 'kvety-zla-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o zbierke.',
        text: [
          'Zbierka Kvety zla od Charlesa Baudelaira vyšla v roku ',
          { medzera: '1857', napoveda: 'druhá polovica 50. rokov 19. storočia' },
          ' a jej autor patrí k skupine takzvaných ',
          { medzera: 'prekliatych poetov', napoveda: 'francúzsky poètes maudits' },
          '. Najrozsiahlejší oddiel zbierky sa nazýva ',
          { medzera: 'Spleen a ideál', napoveda: 'nuda proti túžbe po vznešenom' },
          '.',
        ],
        vysvetlenie:
          'Názov oddielu Spleen a ideál pomenúva základné napätie celej knihy: medzi túžbou po vznešenom ideáli a pádom do nudy a špinavej skutočnosti.',
      },
      {
        id: 'kvety-zla-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o poetike zbierky.',
        text: [
          'Názov zbierky je ',
          { medzera: 'oxymoron', napoveda: 'spojenie protikladných slov' },
          ', pretože spája krásu a zlo. Baudelaire je považovaný za zakladateľa literárneho smeru ',
          { medzera: 'symbolizmus', napoveda: 'smer pracujúci so symbolom a náladou' },
          '.',
        ],
        vysvetlenie:
          'Symbolizmus namiesto opisu skutočnosti evokuje náladu a pracuje so symbolom, hudobnosťou verša a synestéziou. Baudelaire tieto princípy uplatnil ako prvý dôsledne.',
      },
    ],
  },
  {
    id: 'opity-korab',
    nazov: 'Opitý koráb a iné básne (výber)',
    autorId: 'rimbaud',
    rocnik: 3,
    druh: 'poezia',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'lyrická báseň (vízia), výber z básnickej tvorby',
    forma: 'poézia — Opitý koráb má 25 štvorveršových strof (alexandrín)',
    rokVydania: 'Opitý koráb 1871 (knižne neskôr); ostatné básne 1870 – 1875',
    obdobie: 'symbolizmus, prekliati poeti',
    miestoACas:
      'básne nemajú konkrétne miesto ani čas; dej Opitého korábu sa odohráva na otvorenom oceáne ako vo vízii, iné básne v ardenskej krajine a v mestskom prostredí',
    anotacia:
      'Výber z tvorby najmladšieho z prekliatych poetov, ktorý celé dielo napísal ako tínedžer. Vrcholom je vízia lode bez posádky, ktorá sa nechá unášať oceánom — obraz básnika opojeného slobodou a vlastnou predstavivosťou.',
    obsah: [
      'Opitý koráb je jedna dlhá vízia, v ktorej hovorí sama loď. Na začiatku jej domorodci zabijú posádku a loď, zbavená vedenia, kormidla aj kotvy, sa vydáva napospas vlnám. Toto uvoľnenie zo všetkých väzieb je zároveň gestom slobody a strachu: loď zisťuje, že po prvý raz naozaj pláva. Práve tu sa zakladá symbolická rovina básne — loď je básnik, ktorý sa zriekol pravidiel a nechal sa viesť len vlastnou obraznosťou.',
      'Nasleduje sled fantastických obrazov: loď plaví morami plnými fosforeskujúceho svetla, vidí spenené vlny ako rozzúrené stáda, ľadovce, obludy, zelené noci a slnká, ktoré sa rozpadajú. Obrazy nie sú opisom skutočnej plavby, ale prúdom vízií, ktoré sa reťazia podľa asociácie, nie podľa logiky. Rimbaud tým naplnil svoju predstavu básnika ako „vidiaceho“ (voyant), ktorý musí rozrušiť vlastné zmysly, aby videl neznáme. Táto časť básne je vrcholom opojenia a slobody.',
      'V druhej polovici sa však tón mení. Loď je opotrebovaná, plná vody, rozbitá a unavená z nekonečného pohybu; z opojenia sa stáva vyčerpanie. Vízia vrcholí priznaním, že už nedokáže niesť ďalej ani samu seba, a túžbou po niečom malom a pokojnom — po tichej studenej kaluži, na ktorej v súmraku pustí dieťa papierovú lodičku. Slávny záver je teda zvláštny: po obrovskej plavbe prichádza zmenšenie a únava, nie triumf.',
      'Výber dopĺňajú ďalšie známe básne. V sonete Spiaci v úvale leží v tráve mladý vojak, na ktorého dopadá slnko a ktorý sa zdá spať — až posledný verš prezradí, že má v boku dve červené diery, čím sa idylická krajina obráti na obraz zabíjania. Sonet Samohlásky priraďuje hláskam A, E, I, U, O farby a obrazy a je učebnicovou ukážkou synestézie. Vývoj Rimbaudovej tvorby uzatvára Pobyt v pekle, próza vo forme spovede, po ktorej autor ako dvadsaťročný literatúru definitívne opustil a odišiel obchodovať do Afriky.',
    ],
    kompozicia:
      'Opitý koráb má dvadsaťpäť štvorveršových strof a je komponovaný ako monológ lode: expozícia (strata posádky a slobodné unášanie), gradujúci sled vízií a záverečný zlom do únavy a túžby po malom pokoji. Reťazenie obrazov nie je dejové, ale asociatívne. Vo výbere stoja vedľa dlhej vízie krátke sonetové útvary (Spiaci v úvale, Samohlásky), ktoré ukazujú rozsah Rimbaudovej poetiky.',
    postavy: [
      {
        meno: 'lyrický subjekt — koráb',
        charakteristika:
          'Loď, ktorá o sebe hovorí v prvej osobe, je zosobnením básnika. Po strate posádky a kormidla zažíva opojenie absolútnou slobodou, na konci však je rozbitá a vyčerpaná. Splynutie hovoriaceho s vecou je najsilnejší nápad básne.',
        rola: 'hlavna',
      },
      {
        meno: 'more a oceán',
        charakteristika:
          'Nekonečný priestor, ktorý loď unáša — zároveň obraz slobody, poznania a nebezpečenstva. More nie je kulisou, ale silou, ktorá určuje celý dej vízie.',
        rola: 'vedlajsia',
      },
      {
        meno: 'dieťa s papierovou lodičkou',
        charakteristika:
          'Obraz z posledných strof: proti obrovskému oceánu stojí tichá kaluž a detská hračka. Je to znak túžby po malom, skromnom pokoji po vyčerpávajúcej plavbe.',
        rola: 'vedlajsia',
      },
      {
        meno: 'mladý vojak (báseň Spiaci v úvale)',
        charakteristika:
          'Mŕtvy chlapec ležiaci v zelenom úvale, ktorý na prvý pohľad vyzerá, akoby spal. Odhalenie jeho smrti v poslednom verši robí z básne jeden z najstarších protivojnových textov modernej poézie.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'absolútna sloboda a jej cena (opojenie a vyčerpanie)',
      'básnik ako vidiaci, ktorý má poznať neznáme',
      'vzbura proti pravidlám, domovu a spoločnosti',
      'túžba po neznámom a útek z každodennosti',
      'krutosť vojny a smrť mladého človeka (Spiaci v úvale)',
    ],
    motivy: [
      'loď bez posádky a bez kormidla',
      'more, vlny, ľadovce a fosforeskujúce svetlo',
      'plavba ako poznávanie',
      'papierová lodička na tichej kaluži',
      'farby priradené hláskam (Samohlásky)',
      'mŕtvy vojak v zelenom úvale',
    ],
    jazyk: [
      'symbol — koráb bez kormidla zastupuje básnika, ktorý sa vzdal pravidiel a nechal sa viesť obraznosťou',
      'personifikácia — loď hovorí v prvej osobe, more sa chová ako živá bytosť; celá báseň je monológom veci',
      'synestézia — v sonete Samohlásky sú hláskam priradené farby a obrazy, zmysly sa navzájom zastupujú',
      'metafora a reťazenie obrazov — vízie nasledujú podľa asociácie, nie podľa logického deja, čím sa pripravuje avantgardná poetika',
      'hyperbola — rozmery plavby, sily vĺn a dĺžka putovania sú vedome zväčšené, aby vyjadrili opojenie',
      'kontrast — obrovský oceán proti malej kaluži a papierovej lodičke v závere; opojenie proti únave',
      'pointa — v sonete Spiaci v úvale je idylický obraz zrušený až posledným veršom o dvoch červených dierach',
    ],
    maturitneMinimum: [
      'Rimbaud patrí k prekliatym poetom; celé dielo napísal medzi 15. a 20. rokom života a potom písanie úplne opustil.',
      'Jeho predstava básnika ako „vidiaceho“ (voyant), ktorý má rozrušiť zmysly, aby videl neznáme, je jedným z pilierov symbolizmu a predpokladom avantgardy.',
      'Opitý koráb je vystavaný ako jediná gradujúca vízia s prekvapivým zlomom: opojenie slobodou sa mení na únavu a túžbu po malom pokoji.',
      'Sonet Samohlásky je učebnicovou ukážkou synestézie, Spiaci v úvale ukážkou pointy a protivojnového motívu.',
      'Typická maturitná otázka: vysvetli symboliku lode v básni Opitý koráb a porovnaj Rimbauda s Baudelairom.',
    ],
    ulohy: [
      {
        id: 'opity-korab-k1',
        typ: 'kviz',
        otazka: 'Kto je v básni Opitý koráb lyrickým subjektom, ktorý hovorí?',
        moznosti: [
          'samotná loď, ktorá stratila posádku',
          'kapitán, ktorý prežil vzburu',
          'chlapec stojaci na brehu',
          'more, ktoré loď unáša',
        ],
        spravna: 0,
        vysvetlenie:
          'Celá báseň je monológom personifikovanej lode. Práve toto splynutie hovoriaceho s vecou umožňuje čítať plavbu ako obraz básnikovej vnútornej cesty.',
      },
      {
        id: 'opity-korab-k2',
        typ: 'kviz',
        otazka: 'Ako sa mení nálada básne v jej druhej polovici?',
        moznosti: [
          'opojenie slobodou sa mení na únavu a túžbu po malom pokoji',
          'strach sa mení na hrdosť a triumf',
          'smútok sa mení na náboženské zmierenie',
          'nálada sa vôbec nemení, báseň je od začiatku do konca oslavná',
        ],
        spravna: 0,
        vysvetlenie:
          'Loď je na konci rozbitá a plná vody a túži už len po tichej kaluži, na ktorej dieťa pustí papierovú lodičku. Tento zlom je pointou celej vízie.',
      },
      {
        id: 'opity-korab-k3',
        typ: 'kviz',
        otazka: 'Ktorý Rimbaudov sonet je učebnicovou ukážkou synestézie?',
        moznosti: ['Samohlásky', 'Spiaci v úvale', 'Opitý koráb', 'Pobyt v pekle'],
        spravna: 0,
        vysvetlenie:
          'V sonete Samohlásky autor priraďuje hláskam A, E, I, U, O farby a obrazy. Synestézia je zámena či prelínanie zmyslových vnemov — základný prostriedok symbolizmu.',
      },
      {
        id: 'opity-korab-k4',
        typ: 'kviz',
        otazka: 'Čím je pozoruhodný sonet Spiaci v úvale?',
        moznosti: [
          'idylický obraz spiaceho mladíka je až v poslednom verši zrušený zistením, že je mŕtvy vojak',
          'je napísaný bez interpunkcie a bez veľkých začiatočných písmen',
          'opisuje plavbu lode okolo Afriky',
          'je to oslava francúzskeho víťazstva vo vojne',
        ],
        spravna: 0,
        vysvetlenie:
          'Báseň buduje pokojný prírodný obraz a až pointa (dve červené diery v boku) ho obráti na protivojnovú výpoveď. Ide o typickú prácu s prekvapivým záverom.',
      },
      {
        id: 'opity-korab-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k básni alebo pojmu jeho charakteristiku.',
        pary: [
          { vlavo: 'Opitý koráb', vpravo: 'monológ lode bez posádky ako obraz slobody básnika' },
          { vlavo: 'Samohlásky', vpravo: 'sonet priraďujúci hláskam farby — synestézia' },
          { vlavo: 'Spiaci v úvale', vpravo: 'protivojnový sonet s pointou v poslednom verši' },
          { vlavo: 'voyant (vidiaci)', vpravo: 'Rimbaudova predstava básnika, ktorý má vidieť neznáme' },
        ],
        vysvetlenie:
          'Rimbaudova poetika stojí na obraznosti a asociácii: báseň nemá vysvetľovať, ale sprostredkovať videnie, ktoré bežné zmysly nedosiahnu.',
      },
      {
        id: 'opity-korab-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o autorovi a básni.',
        text: [
          'Báseň Opitý koráb napísal ',
          { medzera: 'Jean Arthur Rimbaud', napoveda: 'najmladší z prekliatych poetov' },
          ' roku 1871, keď mal iba sedemnásť rokov. Lyrickým subjektom básne je ',
          { medzera: 'loď', napoveda: 'personifikované plavidlo bez posádky' },
          ', ktorá po strate posádky pláva sama po oceáne.',
        ],
        vysvetlenie:
          'Rimbaud napísal celé svoje dielo pred dvadsiatym rokom života a potom literatúru opustil — to je jeden z najznámejších faktov o ňom.',
      },
    ],
  },
  {
    id: 'nox-et-solitudo',
    nazov: 'Nox et solitudo (výber)',
    autorId: 'krasko',
    rocnik: 3,
    druh: 'poezia',
    literatura: 'slovenska',
    standardizovane: true,
    zaner: 'lyrická zbierka (intímna a reflexívna lyrika)',
    forma: 'poézia — krátke básne, prevažne pravidelný strofický verš s refrénmi',
    rokVydania: '1909',
    obdobie: 'slovenská literárna moderna, symbolizmus',
    miestoACas:
      'nekonkrétne prostredie: noc, cudzina, prázdna izba, cesta s topoľmi, v pozadí spomienka na rodný kraj; čas na začiatku 20. storočia',
    anotacia:
      'Prvá zbierka najvýznamnejšieho básnika slovenskej moderny. Jej názov v latinčine znamená Noc a samota a presne pomenúva náladu, ktorou je celá kniha nesená.',
    obsah: [
      'Zbierka nemá dej; je to súvislý reťazec nálad jedného lyrického subjektu — človeka, ktorý je sám, v cudzine a v noci. Názov Nox et solitudo (Noc a samota) je zároveň programom: noc, hmla, tma, chlad a jeseň sa opakujú takmer v každej básni ako vonkajšie znaky vnútorného stavu. Krasko nepopisuje udalosti, ale evokuje pocit — v tom je jeho poetika symbolistická. Zbierka má iba niekoľko desiatok kratších básní, jej vplyv na slovenskú poéziu je však zásadný.',
      'Prvou nosnou témou je samota a odcudzenie. V básni Jehovah sa lyrický subjekt obracia k Bohu s výčitkou a otázkou, prečo je ponechaný sám; ide o modlitbu, ktorá nedostane odpoveď. Báseň Topole stavia obraz stromov pri ceste, ktoré v tichu stoja a čakajú — sú obrazom trpkej rezignácie a pokorného vytrvania. Vždy je prítomný pocit, že hovoriaci nemá miesto, kam by patril.',
      'Druhou témou je vzťah k domovu a k matke. V básniach o návrate a o rodnom kraji sa mieša láska so zlým svedomím: lyrický subjekt odišiel do sveta za vzdelaním a cíti, že domov, matku a rodnú zem zradil. Táto kombinácia nehy a viny je pre Kraska typická a odlišuje ho od štúrovského pátosu — hovorí potichu, osobne a bez veľkých gest. K tretej téme patrí ľúbostný motív, no aj ten je vždy stratou, sklamaním alebo spomienkou, nikdy naplnením.',
      'Zbierka sa nekončí vyriešením ani zmierením: nálada noci a samoty zostáva. Jej hodnota je práve v tom, že po prvý raz v slovenskej poézii postavila do centra vnútorný svet jednotlivca, jeho neistotu a pesimizmus namiesto národného programu. Tichý, melancholický tón a symbolika hmly a tmy sa stali vzorom pre celú ďalšiu slovenskú lyriku. Krasko potom vydal už len jednu zbierku, Verše (1912), v ktorej sa k samote pridáva aj sociálny a národný motív (Otcova roľa, Baníci).',
    ],
    kompozicia:
      'Zbierka je zložená z krátkych básní, ktoré nemajú dejovú súvislosť, ale spája ich jednotná nálada noci, hmly a samoty a jeden lyrický subjekt. Prevažuje pravidelný strofický verš, častý je refrén a opakovanie, ktoré pôsobí ako tichá melódia. Latinský názov (Noc a samota) funguje ako kľúč k celku.',
    postavy: [
      {
        meno: 'lyrický subjekt',
        charakteristika:
          'Osamelý, citlivý a pesimistický človek, ktorý žije v cudzine, v noci a bez opory. Trpí odcudzením, výčitkami voči domovu a pocitom, že jeho život je zbytočný. Nie je hrdinom s dejom, ale hlasom nálady, ktorý spája celú zbierku.',
        rola: 'hlavna',
      },
      {
        meno: 'matka a rodný kraj',
        charakteristika:
          'Vracajúca sa postava a obraz, ku ktorému sa lyrický subjekt obracia s láskou aj s pocitom viny, že odišiel. Domov je zdrojom nehy i zlého svedomia.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Bôh (Jehovah)',
        charakteristika:
          'Oslovený, no mlčiaci adresát v básni Jehovah. Lyrický subjekt sa k nemu obracia s výčitkou a otázkou po zmysle svojho utrpenia a odpoveď nedostáva.',
        rola: 'vedlajsia',
      },
      {
        meno: 'topole pri ceste',
        charakteristika:
          'Nie postava, ale nosný symbolický obraz zbierky: stromy, ktoré v tichu stoja pri ceste a vytrvávajú. Zastupujú pokornú, trpkú rezignáciu lyrického subjektu.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'samota a odcudzenie moderného človeka',
      'život v cudzine a túžba po domove',
      'vina a zlé svedomie voči matke a rodnému kraju',
      'pochybnosť o Bohu a o zmysle utrpenia',
      'neuskutočnená, stratená láska',
    ],
    motivy: [
      'noc, tma a hmla',
      'jeseň a chlad',
      'topole pri ceste',
      'matka a rodný dom',
      'cudzina a prázdna izba',
      'mlčanie a ticho',
    ],
    jazyk: [
      'symbol — hmla, noc a tma v Kraskovej zbierke vyjadrujú vnútornú samotu a neistotu lyrického subjektu; nie sú opisom počasia, ale stavu duše',
      'symbol prírodného obrazu — topole pri ceste zastupujú trpkú rezignáciu a pokorné vytrvanie človeka',
      'refrén a opakovanie — vracajúce sa verše a slová dávajú básniam melodickosť a pôsobia ako tichá, jednotvárna melódia nálady',
      'apostrofa — priame oslovenie Boha (Jehovah), matky či rodného kraja robí z básní intímnu spoveď alebo modlitbu',
      'rečnícka otázka — nezodpovedané otázky po zmysle utrpenia a života udržujú pocit neistoty a beznádeje',
      'tíšený, zdrobnený a archaizujúci výraz — namiesto štúrovského pátosu volí Krasko potichý, osobný tón; latinský názov navyše dáva zbierke dobovú príchuť vzdelanej modernosti',
      'kontrast — cudzina proti domovu, tma proti spomienke na svetlo, mlčanie Boha proti naliehavej otázke človeka',
    ],
    maturitneMinimum: [
      'Ivan Krasko (vlastným menom Ján Botto) je najvýznamnejším predstaviteľom slovenskej literárnej moderny; pseudonym prijal, aby sa nezamieňal s romantikom Jánom Bottom.',
      'Nox et solitudo (1909) znamená v latinčine Noc a samota — názov je zároveň kľúčom k nálade celej zbierky.',
      'Slovenská moderna prináša symbolizmus: dôraz na subjektívny pocit, symbol, hudobnosť verša a pesimizmus namiesto národného programu štúrovcov.',
      'Krasko napísal len dve zbierky — Nox et solitudo a Verše (1912, básne Otcova roľa, Baníci) — a napriek tomu zmenil smerovanie slovenskej poézie.',
      'Typická maturitná otázka: vysvetli význam symbolov noci, hmly a topoľov v zbierke Nox et solitudo a charakterizuj slovenskú literárnu modernu.',
    ],
    ulohy: [
      {
        id: 'nox-et-solitudo-k1',
        typ: 'kviz',
        otazka: 'Čo znamená latinský názov zbierky Nox et solitudo?',
        moznosti: ['Noc a samota', 'Noc a hviezdy', 'Tma a smrť', 'Sen a skutočnosť'],
        spravna: 0,
        vysvetlenie:
          'Nox znamená noc, solitudo samota. Názov je zároveň programom zbierky — noc a samota sú jej hlavnou náladou aj základným symbolom.',
      },
      {
        id: 'nox-et-solitudo-k2',
        typ: 'kviz',
        otazka: 'Prečo prijal Ján Botto pseudonym Ivan Krasko?',
        moznosti: [
          'aby ho nezamieňali s rovnomenným romantickým básnikom Jánom Bottom',
          'pretože nesmel publikovať pod vlastným menom ako kňaz',
          'pretože písal v cudzom jazyku',
          'pretože pseudonym mu navrhol Hviezdoslav',
        ],
        spravna: 0,
        vysvetlenie:
          'Romantik Ján Botto, autor Smrti Jánošíkovej, bol už známy. Básnik moderny preto prijal pseudonym Ivan Krasko, pod ktorým vstúpil do literatúry.',
      },
      {
        id: 'nox-et-solitudo-k3',
        typ: 'kviz',
        otazka: 'Čo v zbierke symbolizujú opakujúce sa obrazy hmly, noci a tmy?',
        moznosti: [
          'vnútornú samotu, neistotu a pesimizmus lyrického subjektu',
          'nadvládu cudzej moci nad slovenským národom výlučne v politickom zmysle',
          'ročné obdobie, v ktorom sa básne odohrávajú, bez ďalšieho významu',
          'blížiacu sa svetovú vojnu a jej hrôzy',
        ],
        spravna: 0,
        vysvetlenie:
          'V symbolizme prírodný obraz zastupuje vnútorný stav. Hmla a tma nie sú opisom počasia, ale znakom samoty, beznádeje a neistoty hovoriaceho.',
      },
      {
        id: 'nox-et-solitudo-k4',
        typ: 'kviz',
        otazka: 'Ku komu sa lyrický subjekt obracia s výčitkou a nezodpovedanou otázkou v básni Jehovah?',
        moznosti: ['k Bohu', 'k matke', 'k mŕtvemu priateľovi', 'k národu'],
        spravna: 0,
        vysvetlenie:
          'Jehovah je jedno z pomenovaní Boha. Báseň má podobu modlitby, ktorá však zostáva bez odpovede — tým sa zdôrazňuje samota a pochybnosť.',
      },
      {
        id: 'nox-et-solitudo-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k motívu jeho význam v zbierke.',
        pary: [
          { vlavo: 'noc a hmla', vpravo: 'vnútorná samota a neistota' },
          { vlavo: 'topole pri ceste', vpravo: 'trpká rezignácia a pokorné vytrvanie' },
          { vlavo: 'matka a rodný kraj', vpravo: 'láska spojená so zlým svedomím za odchod' },
          { vlavo: 'Jehovah', vpravo: 'mlčiaci Boh, ktorý neodpovedá na otázku o utrpení' },
          { vlavo: 'cudzina', vpravo: 'prostredie odcudzenia a nezakorenenosti' },
        ],
        vysvetlenie:
          'Kraskove básne nemajú dej — ich zmysel nesú symboly. Preto je pri rozbore nutné vedieť, aký vnútorný stav ktorý obraz zastupuje.',
      },
      {
        id: 'nox-et-solitudo-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o zbierke a jej autorovi.',
        text: [
          'Zbierka Nox et solitudo vyšla v roku ',
          { medzera: '1909', napoveda: 'prvé desaťročie 20. storočia' },
          ' a jej autorom je ',
          { medzera: 'Ivan Krasko', napoveda: 'pseudonym Jána Bottu, predstaviteľ moderny' },
          '. Patrí k literárnemu smeru ',
          { medzera: 'symbolizmus', napoveda: 'smer pracujúci so symbolom a náladou' },
          ', ktorý na Slovensku reprezentuje literárna moderna.',
        ],
        vysvetlenie:
          'Slovenská literárna moderna nadväzuje na európsky symbolizmus: do stredu pozornosti stavia subjektívny pocit jednotlivca namiesto národného programu.',
      },
      {
        id: 'nox-et-solitudo-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o poetike zbierky.',
        text: [
          'Názov zbierky v preklade z latinčiny znamená ',
          { medzera: 'Noc a samota', napoveda: 'dve slová, ktoré určujú náladu knihy' },
          '. Druhá a zároveň posledná Kraskova zbierka sa nazýva ',
          { medzera: 'Verše', napoveda: 'vyšla roku 1912, obsahuje Otcovu roľu' },
          '.',
        ],
        vysvetlenie:
          'Krasko vydal len dve zbierky. V druhej, Verše, sa k intímnej samote pridáva aj sociálna a národná téma (Otcova roľa, Baníci).',
      },
    ],
  },
  {
    id: 'peter-a-lucia',
    nazov: 'Peter a Lucia',
    autorId: 'rolland',
    rocnik: 3,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'lyrizovaná novela (protivojnová novela)',
    forma: 'próza — krátka epická forma s lyrickými pasážami',
    rokVydania: '1920',
    obdobie: 'medzivojnová svetová literatúra, humanizmus a pacifizmus',
    miestoACas:
      'Paríž, jar roku 1918 — od 30. januára do Veľkého piatka 29. marca, teda posledné mesiace prvej svetovej vojny, keď mesto bombardovali nemecké lietadlá a diaľkové kanóny',
    anotacia:
      'Krehký príbeh dvoch mladých ľudí, ktorí sa v bombardovanom Paríži zoznámia v metre a zaľúbia sa. Ich láska je útekom pred vojnou, ktorá im dýcha na krk.',
    obsah: [
      'Osemnásťročný Peter Aubier je syn dobre situovanej parížskej meštiackej rodiny. Vojna sa preň stáva nepochopiteľnou a odpornou vecou: je znechutený tým, ako sa o nej doma hovorí s vlasteneckým pátosom, a vie, že za pol roka, keď dosiahne brancký vek, bude musieť narukovať. Jeho starší brat Filip už na fronte bol a vrátil sa zmenený a mlčanlivý. Peter žije s pocitom, že jeho život je odsúdený ešte pred tým, než začal.',
      'Pri jednom nálete sa počas poplachu v parížskom metre celkom náhodne dotkne ruky neznámej dievčiny. Je to Lucia Vertová, dievča z chudobných pomerov, ktoré žije len s matkou a zarába maľovaním a kopírovaním pohľadníc a obrazov na predaj. Peter ju znovu nájde a začnú sa stretávať; ich vzťah je čistý, tichý a ostýchavý. Spoločne sa prechádzajú po Paríži, zaliezajú do kostolov a do parkov a budujú si vlastný malý svet, do ktorého vojna nesmie vstúpiť.',
      'Ich láska však stojí proti sebe s dvomi hrozbami: s vojnou, ktorá Petra o niekoľko mesiacov pohltí, a so sociálnym rozdielom medzi ich rodinami. Lucia sa najprv bráni, pretože vie, že jej postavenie a Petrova rodina nie sú kompatibilné, a bojí sa, že vzťah nemá budúcnosť. Napokon sa však obaja rozhodnú prijať to, čo majú, a bez ohľadu na následky si dajú slovo. Pred Petrovým odvodom sa rozhodnú, že patria k sebe a že sa vezmú.',
      'Na Veľký piatok 29. marca 1918 idú spolu do kostola svätého Gervaisa na bohoslužbu. Práve počas nej zasiahne kostol strela z nemeckého diaľkového kanóna a klenba sa zrúti. Peter a Lucia zomierajú spolu, objatí, pod troskami. Autor tento koniec nepodáva ako melodrámu, ale ako obžalobu: vojna zabíja aj tých, ktorí sa jej nijako nezúčastnili, a to práve vo chvíli, keď našli dôvod žiť. Historicky ide o skutočnú udalosť — zásah kostola Saint-Gervais v Paríži na Veľký piatok 1918.',
    ],
    kompozicia:
      'Novela je presne časovo vymedzená: začína sa 30. januára a končí Veľkým piatkom 29. marca 1918, teda celý dej trvá necelé dva mesiace. Dej je chronologický, lineárny a nekomplikovaný, no prerušovaný lyrickými opismi a vnútornými monológmi. Typickým prostriedkom je kontrast dvoch rovín: nežná ľúbostná línia a v pozadí neustále znejúca vojna. Tragický koniec je pripravovaný predtuchami a náznakmi od začiatku.',
    postavy: [
      {
        meno: 'Peter Aubier',
        charakteristika:
          'Osemnásťročný študent z meštiackej parížskej rodiny, citlivý, vnímavý a znechutený vojnou aj vlasteneckými frázami svojho okolia. Vie, že ho čaká odvod, a preto žije s pocitom odsúdenosti. V láske k Lucii nájde prvý skutočný zmysel svojho života.',
        rola: 'hlavna',
      },
      {
        meno: 'Lucia Vertová',
        charakteristika:
          'Chudobné dievča, ktoré žije s matkou a zarába kopírovaním obrazov a maľovaním pohľadníc na predaj. Je skromná, hrdá a zodpovednejšia než Peter; najprv sa vzťahu bráni pre sociálny rozdiel. Nakoniec sa rozhodne prijať krátke šťastie namiesto rozumnej opatrnosti.',
        rola: 'hlavna',
      },
      {
        meno: 'Filip Aubier',
        charakteristika:
          'Petrov starší brat, ktorý sa vrátil z frontu vnútorne zlomený a odcudzený. Svojou mlčanlivosťou a cynizmom je pre Petra živým dôkazom toho, čo vojna robí s človekom.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Petrova rodina (rodičia a sestra)',
        charakteristika:
          'Meštiacke prostredie, ktoré o vojne hovorí s vlasteneckým pátosom a nevidí jej skutočnú cenu. Predstavuje svet, s ktorým sa Peter vnútorne rozchádza.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Luciina matka',
        charakteristika:
          'Chudobná žena, ktorá je často mimo domu za prácou, takže Lucia je odkázaná na seba. Jej postavenie ukazuje sociálnu stránku príbehu.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'nezmyselnosť a krutosť vojny, ktorá zabíja nevinných',
      'čistá prvá láska ako útek pred hrôzou sveta',
      'strata mladosti celej jednej generácie',
      'sociálne rozdiely medzi meštiactvom a chudobou',
      'humanizmus a pacifizmus ako odpoveď na vojnu',
    ],
    motivy: [
      'náhodné stretnutie rúk v metre počas náletu',
      'bombardovaný Paríž a sirény',
      'prechádzky po parkoch a kostoloch',
      'Veľký piatok a bohoslužba',
      'zrútená klenba kostola',
      'brat, ktorý sa vrátil z frontu zmenený',
    ],
    jazyk: [
      'kontrast — nežný, takmer idylický ľúbostný príbeh je neustále konfrontovaný so zvukmi vojny; práve tento protiklad tvorí základnú výpoveď novely',
      'lyrizácia prózy — opisy Paríža, jarného svetla a nálad sú básnické, veta je rytmizovaná a citovo zafarbená',
      'symbol — Veľký piatok ako deň smrti dáva zániku dvoch mladých ľudí rozmer nevinnej obete; zrútená kostolná klenba je obrazom zrútenia celého sveta',
      'predtucha (anticipácia) — od začiatku sa opakujú náznaky blížiacej sa smrti, takže tragický koniec nie je náhodou, ale vyústením',
      'vnútorný monológ — Petrove úvahy a pochybnosti odhaľujú jeho znechutenie vojnou a vlasteneckými frázami dospelých',
      'časové vymedzenie ako kompozičný prostriedok — presné dátumy (30. január až 29. marec 1918) dávajú príbehu dokumentárnu presnosť a napätie odpočítavania',
      'kontrast sociálnych prostredí — meštiacky dom Aubierovcov proti chudobnej Luciinej existencii prehlbuje bezvýchodiskovosť vzťahu',
    ],
    maturitneMinimum: [
      'Romain Rolland je humanista a pacifista, nositeľ Nobelovej ceny za literatúru (1915); počas vojny odmietol vojnovú propagandu oboch strán.',
      'Novela je založená na skutočnej udalosti — zásahu kostola Saint-Gervais v Paríži na Veľký piatok 29. marca 1918.',
      'Dej je presne časovo ohraničený (30. 1. – 29. 3. 1918), čo zvyšuje napätie: čitateľ vie, že čas sa kráti.',
      'Základným prostriedkom je kontrast: čistá láska proti vojne, meštiacke prostredie proti chudobe.',
      'Typická maturitná otázka: porovnaj protivojnové vyznenie noviel Peter a Lucia a románu Na západe nič nové.',
    ],
    ulohy: [
      {
        id: 'peter-a-lucia-k1',
        typ: 'kviz',
        otazka: 'Kde sa Peter a Lucia prvý raz stretnú?',
        moznosti: [
          'v parížskom metre počas leteckého poplachu',
          'v kostole svätého Gervaisa na bohoslužbe',
          'v škole, kde spolu študujú',
          'v nemocnici, kde Lucia pracuje ako sestra',
        ],
        spravna: 0,
        vysvetlenie:
          'Zoznámia sa celkom náhodne — počas náletu sa v metre dotknú rukami. Tento krehký detail je protipólom hrubej vojnovej skutočnosti.',
      },
      {
        id: 'peter-a-lucia-k2',
        typ: 'kviz',
        otazka: 'Ako sa novela končí?',
        moznosti: [
          'Peter a Lucia zomierajú spolu pod troskami kostola zasiahnutého strelou',
          'Peter padne na fronte a Lucia naň celý život čaká',
          'obaja utečú z Paríža a prežijú vojnu',
          'Lucia sa vydá za bohatého muža a Peter zostane sám',
        ],
        spravna: 0,
        vysvetlenie:
          'Na Veľký piatok 29. marca 1918 zasiahne kostol svätého Gervaisa nemecká strela a klenba sa zrúti. Zomierajú objatí — vojna zabíja aj tých, ktorí sa jej nezúčastnili.',
      },
      {
        id: 'peter-a-lucia-k3',
        typ: 'kviz',
        otazka: 'Čo bráni vzťahu Petra a Lucie okrem hrozby vojny?',
        moznosti: [
          'rozdielne sociálne postavenie ich rodín',
          'rozdielna národnosť a jazyk',
          'Luciino už existujúce manželstvo',
          'Petrova ťažká choroba',
        ],
        spravna: 0,
        vysvetlenie:
          'Peter je z dobre situovanej meštiackej rodiny, Lucia žije s matkou v chudobe a zarába maľovaním pohľadníc. Sociálny rozdiel je druhou prekážkou ich lásky.',
      },
      {
        id: 'peter-a-lucia-k4',
        typ: 'kviz',
        otazka: 'Prečo je dej novely presne časovo vymedzený od 30. januára do 29. marca 1918?',
        moznosti: [
          'aby vzniklo napätie odpočítavania — čitateľ vie, že Petrovi sa kráti čas do odvodu aj do smrti',
          'pretože ide o skutočný denník, ktorý autor našiel',
          'pretože vojna v novele trvá presne dva mesiace',
          'aby sa dej dal presne zosúladiť s cirkevným kalendárom svätých',
        ],
        spravna: 0,
        vysvetlenie:
          'Presné dátumy fungujú ako kompozičný prostriedok: dávajú príbehu dokumentárnu presnosť a zosilňujú tlak blížiacej sa katastrofy.',
      },
      {
        id: 'peter-a-lucia-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave alebo motívu jeho charakteristiku.',
        pary: [
          { vlavo: 'Peter Aubier', vpravo: 'osemnásťročný študent z meštiackej rodiny pred odvodom' },
          { vlavo: 'Lucia Vertová', vpravo: 'chudobné dievča živiace sa maľovaním pohľadníc' },
          { vlavo: 'Filip Aubier', vpravo: 'Petrov brat, ktorý sa vrátil z frontu vnútorne zlomený' },
          { vlavo: 'Veľký piatok', vpravo: 'deň, v ktorý obaja mladí ľudia zomierajú v kostole' },
        ],
        vysvetlenie:
          'Symbolika Veľkého piatka je zámerná: smrť dvoch nevinných v deň Kristovej smrti dáva ich zániku rozmer nezmyselnej obete.',
      },
      {
        id: 'peter-a-lucia-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o novele.',
        text: [
          'Hlavnými postavami novely Peter a Lucia sú ',
          { medzera: 'Peter Aubier', napoveda: 'syn meštiackej rodiny' },
          ' a chudobné dievča ',
          { medzera: 'Lucia', napoveda: 'živí sa maľovaním pohľadníc' },
          '. Dej sa odohráva v bombardovanom meste ',
          { medzera: 'Paríž', napoveda: 'hlavné mesto Francúzska' },
          ' v posledných mesiacoch prvej svetovej vojny.',
        ],
        vysvetlenie:
          'Novela je založená na skutočnom zásahu kostola Saint-Gervais v Paríži roku 1918, čo jej dáva dokumentárny základ.',
      },
    ],
  },
  {
    id: 'na-zapade-nic-nove',
    nazov: 'Na západe nič nové',
    autorId: 'remarque',
    rocnik: 3,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: true,
    zaner: 'protivojnový (antimilitaristický) román',
    forma: 'próza — román s ich-formou, vnútorný monológ a reportážna skratka',
    rokVydania: '1929',
    obdobie: 'medzivojnová svetová literatúra, stratená generácia',
    miestoACas:
      'západný front prvej svetovej vojny (Francúzsko a Belgicko), zázemie, lazaret a rodné nemecké mesto; roky 1916 – 1918',
    anotacia:
      'Román o skupine nemeckých študentov, ktorých učiteľ presvedčí, aby sa dobrovoľne prihlásili na front. Najznámejšia výpoveď o tom, čo vojna urobí s generáciou, ktorá ešte nezačala žiť.',
    obsah: [
      'Rozprávačom je devätnásťročný Pavel Bäumer. Spolu so spolužiakmi z triedy sa dal presvedčiť učiteľom Kantorekom, ktorý im vo vlasteneckých rečiach vykreslil vojnu ako povinnosť a slávu, a všetci sa dobrovoľne prihlásili. Ich prvou skúsenosťou však nie je front, ale výcvik pod poddôstojníkom Himmelstossom, poštovým doručovateľom, ktorý si na nich vybíja moc bezúčelnou šikanou. Už tu chlapci pochopia, že všetko, čo ich škola naučila o hrdinstve a povinnosti, je nepoužiteľné.',
      'Na fronte sa ich svet zredukuje na dve veci: prežiť a najesť sa. Pavel sa učí od skúseného Stanislava Katczinského, zvaného Kat, ktorý vždy dokáže niekde zohnať jedlo a vie, kedy padne granát. Vojna nie je séria bitiek, ale stále striedanie čakania, hladu, zákopových prác, náletov a útokov. Kamaráti postupne mizia: Kemmerich zomiera v lazarete na amputovanú nohu, o ktorej čižmy sa už vopred delia, Müller padne, ďalších roztrhá delostrelecká paľba. Pavel zabije v kráteri z granátu nožom francúzskeho vojaka Gérarda Duvala, nájde v jeho peňaženke fotografiu ženy a dieťaťa a prvý raz si uvedomí, že zabil konkrétneho človeka, tlačiara, nie nepriateľa.',
      'Keď dostane dovolenku a vráti sa domov, príde najsilnejšie odcudzenie. Doma je zomierajúca matka, otec, ktorý sa ho pýta na hrdinské zážitky, a mestskí páni, ktorí pri pive vysvetľujú, kde treba prelomiť front. Pavel zistí, že im nič nemôže vysvetliť a že v civilnom svete už nie je doma. Návšteva vlastnej detskej izby s knihami, ktoré preň už nič neznamenajú, je jednou z najsilnejších scén románu. Domov teda prestal existovať — a s ním aj akákoľvek budúcnosť.',
      'V posledných mesiacoch vojny padne aj Kat: Pavel ho donesie na ramenách k obväzovacej stanici, no ukáže sa, že po ceste dostal do hlavy črepinu a je mŕtvy. Pavel zostáva úplne sám, posledný zo svojej triedy. Zomiera v októbri 1918, krátko pred koncom vojny, v deň, ktorý bol na celom fronte taký tichý, že vojenské hlásenie z neho zaznamenalo iba jednu vetu — na západe nič nové. Práve v tejto vete je pointa knihy: smrť celej generácie je pre štáb a pre históriu bezvýznamná štatistika.',
    ],
    kompozicia:
      'Román je rozdelený na dvanásť kapitol bez tradičnej dejovej zápletky — namiesto nej ide o sled epizód a výjavov zo frontu a zázemia. Je napísaný v prvej osobe (ich-forma) a v prítomnom čase, čo vytvára dojem bezprostrednosti a reportáže. Kompozičným vrcholom je Pavlova dovolenka doma, ktorá kontrastom odhalí nenapraviteľné odcudzenie. Zlom prichádza v poslednom odstavci, kde sa rozprávanie prepne do tretej osoby, pretože rozprávač je mŕtvy; názov románu je citátom z vojenského hlásenia a zároveň ironickou pointou.',
    postavy: [
      {
        meno: 'Pavel Bäumer',
        charakteristika:
          'Devätnásťročný študent, rozprávač románu, ktorý sa dal na front prihlásiť pod vplyvom učiteľa. Postupne stratí všetky ilúzie, kamarátov aj vzťah k domovu a stane sa človekom, ktorý nemá do čoho sa vrátiť. Zomiera v októbri 1918, krátko pred koncom vojny.',
        rola: 'hlavna',
      },
      {
        meno: 'Stanislav Katczinsky (Kat)',
        charakteristika:
          'Štyridsiatnik, obuvník z civilu, najskúsenejší muž v skupine a pre mladých vojakov náhradný otec. Vždy vie, kde zohnať jedlo a kedy sa treba skryť. Jeho smrť v závere znamená pre Pavla stratu poslednej opory.',
        rola: 'hlavna',
      },
      {
        meno: 'Himmelstoss',
        charakteristika:
          'Poddôstojník, v civile poštový doručovateľ, ktorý pri výcviku šikanuje rekrutov a vychutnáva si svoju moc. Na fronte sa ukáže ako zbabelý. Je obrazom malého človeka, ktorému uniforma dala moc.',
        rola: 'vedlajsia',
      },
      {
        meno: 'učiteľ Kantorek',
        charakteristika:
          'Gymnaziálny profesor, ktorý svojich žiakov vlasteneckými rečami presvedčil, aby sa dobrovoľne prihlásili na front. Predstavuje zodpovednosť školy a starej generácie za osud mladých.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Gérard Duval',
        charakteristika:
          'Francúzsky vojak, tlačiar, ktorého Pavel zabije nožom v kráteri po granáte. Fotografia jeho ženy a dieťaťa v peňaženke premení anonymného nepriateľa na konkrétneho človeka. Ide o kľúčovú scénu celého románu.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Franz Kemmerich',
        charakteristika:
          'Pavlov spolužiak, ktorý zomiera v lazarete po amputácii nohy, kým sa jeho kamaráti už delia o jeho čižmy. Jeho smrť ukazuje, ako vojna zbavuje smrť akejkoľvek dôstojnosti.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'nezmyselnosť vojny a jej ničivý dopad na jednotlivca',
      'stratená generácia — mladí ľudia bez minulosti a budúcnosti',
      'odcudzenie vojaka od domova a civilného života',
      'zodpovednosť starej generácie (školy, štátu) za osud mladých',
      'kamarátstvo ako jediná hodnota, ktorá vo vojne zostáva',
    ],
    motivy: [
      'vlastenecké reči učiteľa Kantoreka',
      'čižmy zomierajúceho Kemmericha',
      'hlad a jedlo ako najvyššia hodnota',
      'kráter z granátu a zabitý francúzsky vojak s fotografiou',
      'dovolenka doma a detská izba s knihami',
      'vojenské hlásenie, z ktorého je názov románu',
    ],
    jazyk: [
      'ich-forma a prítomný čas — rozprávanie v prvej osobe pôsobí ako priame svedectvo a vťahuje čitateľa do deja bez odstupu',
      'irónia v názve — veta „na západe nič nové“ je citát z úradného vojenského hlásenia; práve v deň, keď rozprávač zomiera, je front „bez zvláštnych udalostí“, čím sa ukáže, akú nulovú cenu má jeden ľudský život',
      'kontrast — front proti zázemiu, mladí vojaci proti rečniacim dospelým, vojnová skutočnosť proti školským frázam o hrdinstve',
      'vnútorný monológ — Pavlove úvahy odhaľujú rozpad hodnôt, ktoré mu vštepovala škola a rodina',
      'naturalistická a expresionistická detailnosť — presné, drsné obrazy zranení, lazaretu a rozkladu tiel odmietajú akúkoľvek idealizáciu vojny',
      'vojenský slang a hovorová reč — jazyk vojakov je jednoduchý a vecný, čo zvyšuje dojem autentického svedectva',
      'zmena vyprávacej perspektívy v závere — posledný odstavec je v tretej osobe, pretože rozprávač je už mŕtvy; kompozičný zlom je zároveň najsilnejším efektom knihy',
    ],
    citaty: [
      {
        text: 'Na západe nič nové.',
        zdroj: 'veta z vojenského hlásenia v deň Pavlovej smrti — názov a pointa románu',
      },
    ],
    maturitneMinimum: [
      'Román je najznámejším dielom takzvanej stratenej generácie — autorov, ktorí sami prežili prvú svetovú vojnu a stratili vzťah k predvojnovým hodnotám (Remarque, Hemingway, Dos Passos).',
      'Remarque čerpal z vlastnej skúsenosti: ako devätnásťročný bol na západnom fronte a viackrát ranený.',
      'Kľúčové sú tri scény: smrť Kemmericha a jeho čižmy, zabitie Francúza Duvala v kráteri a dovolenka doma.',
      'Nacisti román zakázali a pálili, autora zbavili nemeckého občianstva — kniha je príkladom literatúry ako politického ohrozenia.',
      'Typická maturitná otázka: vysvetli ironický význam názvu románu a charakterizuj pojem stratená generácia.',
    ],
    ulohy: [
      {
        id: 'na-zapade-nic-nove-k1',
        typ: 'kviz',
        otazka: 'Kto presvedčil Pavla Bäumera a jeho spolužiakov, aby sa dobrovoľne prihlásili na front?',
        moznosti: [
          'učiteľ Kantorek svojimi vlasteneckými rečami',
          'poddôstojník Himmelstoss počas výcviku',
          'Pavlov otec',
          'starší vojak Katczinsky',
        ],
        spravna: 0,
        vysvetlenie:
          'Gymnaziálny profesor Kantorek predstavuje zodpovednosť školy a starej generácie: naučil chlapcov fráze o hrdinstve, ktoré sa na fronte okamžite rozpadnú.',
      },
      {
        id: 'na-zapade-nic-nove-k2',
        typ: 'kviz',
        otazka: 'Prečo je scéna zabitia francúzskeho vojaka Gérarda Duvala kľúčová?',
        moznosti: [
          'Pavel v jeho peňaženke nájde fotografiu ženy a dieťaťa a uvedomí si, že zabil konkrétneho človeka',
          'Duval mu prezradí plán francúzskeho útoku',
          'Pavel je za tento čin vyznamenaný',
          'Duval je Pavlov bývalý spolužiak',
        ],
        spravna: 0,
        vysvetlenie:
          'Z anonymného nepriateľa sa stane tlačiar s rodinou. Práve tu román najsilnejšie vyvracia predstavu vojny ako boja proti abstraktnému protivníkovi.',
      },
      {
        id: 'na-zapade-nic-nove-k3',
        typ: 'kviz',
        otazka: 'Čo zistí Pavel počas dovolenky doma?',
        moznosti: [
          'že medzi civilistov už nepatrí a nedokáže im nič vysvetliť',
          'že ho doma považujú za zradcu a vyhodia ho',
          'že jeho rodina medzitým odišla z mesta',
          'že vojna sa už skončila a nemusí sa vrátiť',
        ],
        spravna: 0,
        vysvetlenie:
          'Doma sa ho pýtajú na hrdinské zážitky a páni pri pive plánujú prelomenie frontu. Pavel prežíva úplné odcudzenie — vlastná detská izba a knihy preň už nič neznamenajú.',
      },
      {
        id: 'na-zapade-nic-nove-k4',
        typ: 'kviz',
        otazka: 'V čom je ironický názov románu?',
        moznosti: [
          'je to veta z úradného vojenského hlásenia z dňa, v ktorom rozprávač zomiera',
          'označuje, že vojna sa na západnom fronte nikdy nezačala',
          'je to citát z Pavlovho posledného listu matke',
          'je to názov novín, ktoré vojaci čítali v zákopoch',
        ],
        spravna: 0,
        vysvetlenie:
          'V deň Pavlovej smrti bol front taký tichý, že hlásenie znelo „na západe nič nové“. Smrť celej generácie je pre štáb bezvýznamnou štatistikou — to je pointa knihy.',
      },
      {
        id: 'na-zapade-nic-nove-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave jej charakteristiku.',
        pary: [
          { vlavo: 'Pavel Bäumer', vpravo: 'rozprávač, devätnásťročný študent, zomiera v októbri 1918' },
          { vlavo: 'Stanislav Katczinsky', vpravo: 'skúsený starší vojak, náhradný otec skupiny' },
          { vlavo: 'Himmelstoss', vpravo: 'poddôstojník, v civile poštár, šikanuje rekrutov' },
          { vlavo: 'Kantorek', vpravo: 'učiteľ, ktorý žiakov nahnal na front vlasteneckými rečami' },
          { vlavo: 'Gérard Duval', vpravo: 'francúzsky tlačiar zabitý Pavlom v kráteri po granáte' },
        ],
        vysvetlenie:
          'Postavy nie sú individuálne osudy, ale typy: obeť, opora, malý človek s mocou, zodpovedný zvodca a anonymný nepriateľ, ktorý sa ukáže byť človekom.',
      },
      {
        id: 'na-zapade-nic-nove-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o románe.',
        text: [
          'Román Na západe nič nové vyšiel v roku ',
          { medzera: '1929', napoveda: 'koniec 20. rokov 20. storočia' },
          ' a jeho rozprávačom je devätnásťročný ',
          { medzera: 'Pavel Bäumer', napoveda: 'študent, ktorý sa prihlásil na front' },
          '. Jeho skúsenejším kamarátom a oporou na fronte je ',
          { medzera: 'Katczinsky', napoveda: 'volajú ho Kat' },
          '.',
        ],
        vysvetlenie:
          'Kat je pre mladých vojakov náhradným otcom. Jeho smrť v závere znamená, že Pavel stráca poslednú oporu a zostáva úplne sám.',
      },
      {
        id: 'na-zapade-nic-nove-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o kontexte románu.',
        text: [
          'Autorov, ktorí prežili prvú svetovú vojnu a stratili vzťah k predvojnovým hodnotám, označujeme ako ',
          { medzera: 'stratená generácia', napoveda: 'anglicky lost generation' },
          '. Názov románu je citátom z ',
          { medzera: 'vojenského hlásenia', napoveda: 'úradná správa z frontu' },
          ' z dňa, v ktorom hlavná postava zomiera.',
        ],
        vysvetlenie:
          'Ironický rozpor medzi „ničím novým“ v hlásení a smrťou rozprávača je vrcholom kritiky vojny: jednotlivec pre štáb neznamená nič.',
      },
    ],
  },
  {
    id: 'premena',
    nazov: 'Premena',
    autorId: 'kafka',
    rocnik: 3,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'novela (moderná parabola s fantastickým východiskom)',
    forma: 'próza — novela v troch častiach, rozprávanie v tretej osobe s vnútorným pohľadom hlavnej postavy',
    rokVydania: '1915',
    obdobie: 'literárna moderna, expresionizmus, predznamenanie existencializmu',
    miestoACas:
      'meštiacky byt rodiny Samsovcov v bezmennom veľkomeste, takmer celý dej v jednej izbe; čas na začiatku 20. storočia, nie je presne určený',
    anotacia:
      'Obchodný cestujúci sa jedného rána prebudí premenený na obrovský hmyz. Novela o tom, čo sa stane s človekom, ktorý prestane byť pre rodinu užitočný.',
    obsah: [
      'Obchodný cestujúci Gregor Samsa sa jedného rána prebudí z nepokojných snov a zistí, že sa premenil na obrovský hmyz. Novela sa touto vetou začína a premenu nijako nevysvetľuje — Gregor sa nad jej príčinou ani nepozastavuje. Prvé, čo ho znepokojí, je, že zmeškal vlak a že sa nedostane do práce. Na dverách sa mu striedajú matka, otec a nakoniec prokurista z firmy, ktorý mu vyčíta zanedbanie povinností; keď Gregor konečne otvorí, prokurista v hrôze utečie.',
      'Rodina zistí, že Gregor, ktorý ju dovtedy živil a splácal otcove dlhy, je teraz bezmocné a odporné zviera. Otec ho zaženie späť do izby a pri tom ho poraní. Starostlivosť o neho preberá sestra Gréta: nosí mu jedlo, upratuje izbu a spočiatku sa mu snaží porozumieť. Gregor sa učí lezť po stenách a po strope, stráca chuť na ľudské jedlo a stále viac sa skrýva pod pohovkou, aby svojim vzhľadom nikoho nedesil. Zároveň si zachováva ľudské myslenie a cítenie — a práve tento rozpor je jadrom novely.',
      'Rodina sa musí postarať o seba: otec si nájde prácu, matka šije a Gréta pracuje ako predavačka; do bytu vezmú troch nájomníkov. Gregor sa stáva prekážkou a hanbou. Vrchol prichádza, keď Gréta hrá na violončelo a Gregor, dojatý hudbou, vylezie z izby; nájomníci ho zbadajú, vypovedia bývanie a Gréta vyhlási, že tento hmyz nie je jej brat a že sa ho treba zbaviť. Predtým mu otec hodil do chrbta jabloko, ktoré v ňom zhnilo a rana sa zapálila.',
      'Gregor pochopí, že jeho zmiznutie je pre rodinu jediné riešenie, a bez odporu, so zvláštnym pocitom lásky k svojim, zomiera nad ránom. Posluhovačka jeho telo bez obradu odstráni. Rodina si vydýchne, po dlhom čase ide spoločne na výlet za mesto a rodičia si uvedomia, že Gréta vyrástla na pekné dievča a že bude čas nájsť jej muža. Práve tento pokojný, takmer šťastný koniec je najkrutejšou pointou novely: smrť člena rodiny je pre ostatných vyslobodením a začiatkom nového života.',
    ],
    kompozicia:
      'Novela má tri časti, ktoré zodpovedajú trom fázam Gregorovho vylučovania z rodiny: prvá sa končí zahnaním do izby, druhá zranením jablkom, tretia jeho smrťou. Fantastické východisko je uvedené hneď prvou vetou a nikdy sa nevysvetľuje — všetko ostatné je potom podané úplne vecne a logicky. Rozprávanie je v tretej osobe, ale dôsledne z Gregorovho pohľadu, takže čitateľ vidí svet jeho očami. Epilóg po Gregorovej smrti patrí rodine a tvorí ironický kontrast.',
    postavy: [
      {
        meno: 'Gregor Samsa',
        charakteristika:
          'Obchodný cestujúci, ktorý celé roky pracoval, aby splatil otcove dlhy a zabezpečil rodinu. Po premene na hmyz si zachová ľudské myslenie a ohľaduplnosť, no stratí schopnosť dorozumieť sa a byť užitočný. Zomiera dobrovoľne, s vedomím, že tak rodine pomôže.',
        rola: 'hlavna',
      },
      {
        meno: 'Gréta Samsová',
        charakteristika:
          'Gregorova mladšia sestra, ktorá sa oň najprv starostlivo stará a nosí mu jedlo. Postupne stráca trpezlivosť, dospieva, začne pracovať a nakoniec ako prvá vysloví, že hmyz v izbe nie je jej brat. Jej premena je druhou, skrytou premenou novely.',
        rola: 'hlavna',
      },
      {
        meno: 'otec Samsa',
        charakteristika:
          'Bankrotár, ktorý po synovej premene znovu ožije, nájde si prácu a získa autoritu v domácnosti. Voči Gregorovi je násilný — zaháňa ho a hodí doň jabloko, ktoré mu spôsobí smrteľnú ranu. Predstavuje tvrdú otcovskú autoritu, ktorú Kafka poznal z vlastnej rodiny.',
        rola: 'vedlajsia',
      },
      {
        meno: 'matka Samsová',
        charakteristika:
          'Slabá, astmatická žena, ktorá syna ľutuje, no pri jeho pohľade odpadáva a nedokáže sa mu postaviť na obranu. Jej bezmocnosť ukazuje, že v rodine neplatí láska, ale výkon a užitočnosť.',
        rola: 'vedlajsia',
      },
      {
        meno: 'prokurista a nájomníci',
        charakteristika:
          'Predstavitelia vonkajšieho sveta — firmy a cudzích ľudí. Prokurista prichádza kontrolovať Gregorovu pracovnú morálku, nájomníci sa pri pohľade na hmyz odsťahujú. Oba výstupy urýchľujú Gregorovo vylúčenie.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'odcudzenie človeka v rodine a v spoločnosti',
      'človek ako hodnota meraná len jeho užitočnosťou a výkonom',
      'vina a bezmocnosť jednotlivca pred neurčitou autoritou',
      'rozpor medzi vonkajšou podobou a vnútorným ľudským cítením',
      'rodina ako prostredie krutosti maskovanej slušnosťou',
    ],
    motivy: [
      'premena na hmyz',
      'zamknuté dvere Gregorovej izby',
      'jabloko zahnité v chrbte',
      'Grétina hra na violončelo',
      'nájomníci v byte',
      'spoločný výlet rodiny po Gregorovej smrti',
    ],
    jazyk: [
      'vecný, striedmy a takmer úradnícky štýl — fantastická situácia je opisovaná bez emócií a prekvapenia, čím sa absurdita stáva presvedčivou',
      'absurdita a groteska — nevysvetlená premena na hmyz je prijatá ako každodenný problém (Gregor sa bojí, že zmešká vlak), a práve tento nesúlad vytvára kafkovský efekt',
      'symbol — hmyz je obrazom odcudzenia a ľudskej nepotrebnosti; zamknuté dvere izby symbolizujú izoláciu a jabloko zhnité v tele pomalé zabíjanie zo strany otca',
      'parabola — príbeh nemá dobové ani politické zakotvenie, dá sa čítať ako všeobecná podobenstvová výpoveď o postavení človeka',
      'vnútorná perspektíva — rozprávanie v tretej osobe, no dôsledne z Gregorovho pohľadu, takže čitateľ sa s hmyzom stotožňuje',
      'irónia a kontrast v závere — smrť syna vedie k radostnému výletu a úvahám o sestrinom sobáši, čo je najkrutejšia pointa novely',
      'kontrast telo — myslenie: Gregor má zvieracie telo, ale ľudské cítenie, a tento rozpor je zdrojom tragiky',
    ],
    citaty: [
      {
        text: 'Keď sa Gregor Samsa raz ráno prebudil z nepokojných snov, zistil, že sa v posteli premenil na obrovský hmyz.',
        zdroj: 'úvodná veta novely (v slovenských prekladoch sa formulácia mierne líši)',
      },
    ],
    maturitneMinimum: [
      'Premena (1915) je jedným z mála diel, ktoré vyšli ešte za Kafkovho života; ostatné romány vydal po jeho smrti priateľ Max Brod, ktorý nesplnil autorovu vôľu rukopisy zničiť.',
      'Pojem kafkovský označuje absurdnú situáciu, v ktorej je človek bezmocný pred neuchopiteľnou autoritou a jeho postavenie sa nedá vysvetliť ani zmeniť.',
      'Fantastické východisko nie je nikdy vysvetlené — dôležité nie je prečo, ale ako sa k premenenému človeku zachová okolie.',
      'Novela sa dá čítať ako parabola o odcudzení, o meraní človeka jeho užitočnosťou a o Kafkovom vlastnom vzťahu k otcovi (porovnaj List otcovi).',
      'Typická maturitná otázka: vysvetli, čo symbolizuje Gregorova premena na hmyz, a vysvetli ironický význam záveru novely.',
    ],
    ulohy: [
      {
        id: 'premena-k1',
        typ: 'kviz',
        otazka: 'Ako je v novele vysvetlená príčina Gregorovej premeny?',
        moznosti: [
          'nie je vysvetlená vôbec — premena je daná ako fakt hneď prvou vetou',
          'je dôsledkom kliatby, ktorú naň zoslal prokurista',
          'ide o sen, z ktorého sa Gregor na konci prebudí',
          'je spôsobená chorobou, ktorú Gregor dostal na cestách',
        ],
        spravna: 0,
        vysvetlenie:
          'Kafka premenu nijako nezdôvodňuje. Práve to je podstata jeho postupu: dôležité nie je prečo, ale ako sa k premenenému človeku zachová rodina a spoločnosť.',
      },
      {
        id: 'premena-k2',
        typ: 'kviz',
        otazka: 'Čo spôsobí Gregorovi smrteľnú ranu?',
        moznosti: [
          'jabloko, ktoré doň hodí otec a ktoré mu zhnije v chrbte',
          'úder metlou od posluhovačky',
          'pád z povaly pri lezení po strope',
          'jed, ktorý mu do jedla pridá sestra',
        ],
        spravna: 0,
        vysvetlenie:
          'Otec doň v hneve hodí jabloko, ktoré zostane zaseknuté v chrbte, zhnije a rana sa zapáli. Motív je zároveň symbolom pomalého zabíjania zo strany otcovskej autority.',
      },
      {
        id: 'premena-k3',
        typ: 'kviz',
        otazka: 'Ako sa novela končí?',
        moznosti: [
          'Gregor zomiera a rodina si vydýchne a ide na spoločný výlet za mesto',
          'Gregor sa premení späť na človeka a vráti sa do práce',
          'rodina Gregora skrýva a stará sa o neho až do svojej smrti',
          'Gréta odíde z domu a vezme Gregora so sebou',
        ],
        spravna: 0,
        vysvetlenie:
          'Po Gregorovej smrti rodina pocíti úľavu, ide na výlet a rodičia uvažujú o Grétinom sobáši. Tento pokojný koniec je najkrutejšou pointou novely.',
      },
      {
        id: 'premena-k4',
        typ: 'kviz',
        otazka: 'Čo znamená označenie „kafkovský“?',
        moznosti: [
          'absurdná situácia, v ktorej je človek bezmocný pred neuchopiteľnou autoritou',
          'oslavná, pátosom nesená výpoveď o národe',
          'presný vedecký opis spoločenských vzťahov',
          'humorné zobrazenie malomeštiackeho života',
        ],
        spravna: 0,
        vysvetlenie:
          'Pojem vychádza z Kafkových diel (Premena, Proces, Zámok), v ktorých jednotlivec čelí systému alebo situácii, ktorú nedokáže pochopiť ani ovplyvniť.',
      },
      {
        id: 'premena-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave alebo motívu jeho význam v novele.',
        pary: [
          { vlavo: 'Gregor Samsa', vpravo: 'človek s hmyzím telom, ktorý si zachová ľudské cítenie' },
          { vlavo: 'Gréta', vpravo: 'sestra, ktorá sa najprv stará a nakoniec žiada Gregora sa zbaviť' },
          { vlavo: 'otec Samsa', vpravo: 'násilná autorita, ktorá Gregora poraní jablkom' },
          { vlavo: 'hmyz', vpravo: 'symbol odcudzenia a ľudskej nepotrebnosti' },
          { vlavo: 'výlet rodiny v závere', vpravo: 'ironický obraz úľavy po smrti člena rodiny' },
        ],
        vysvetlenie:
          'Novela sa dá čítať ako parabola: postavy a predmety zastupujú všeobecné vzťahy medzi jednotlivcom, rodinou a mierou jeho užitočnosti.',
      },
      {
        id: 'premena-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o novele.',
        text: [
          'Hlavnou postavou novely Premena je obchodný cestujúci ',
          { medzera: 'Gregor Samsa', napoveda: 'meno a priezvisko hlavnej postavy' },
          ', ktorý sa ráno prebudí premenený na ',
          { medzera: 'hmyz', napoveda: 'obrovské zviera s množstvom nôh' },
          '. Novela vyšla v roku ',
          { medzera: '1915', napoveda: 'druhý rok prvej svetovej vojny' },
          '.',
        ],
        vysvetlenie:
          'Premena je jedným z mála Kafkových textov, ktoré vyšli ešte za jeho života. Väčšinu jeho diela vydal po jeho smrti priateľ Max Brod.',
      },
    ],
  },
  {
    id: 'pasmo',
    nazov: 'Pásmo (Kaligramy)',
    autorId: 'apollinaire',
    rocnik: 3,
    druh: 'poezia',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'lyrická skladba (polytematická básnická skladba), obrazová báseň — kaligram',
    forma: 'poézia — dlhý voľný verš bez interpunkcie; kaligramy sú básne vysádzané do obrazca',
    rokVydania: 'Pásmo 1913 (zbierka Alkoholy), Kaligramy 1918',
    obdobie: 'literárna avantgarda, kubizmus (kubofuturizmus)',
    miestoACas:
      'Paríž a mnoho ďalších miest sveta (Marseille, Koblenz, Rím, Praha, Amsterdam), ktoré sa v skladbe voľne prelínajú; čas nie je súvislý — striedajú sa spomienky, prítomnosť a vízie pred prvou svetovou vojnou',
    anotacia:
      'Skladba, ktorou do poézie vstúpilo moderné veľkomesto, technika a voľná asociácia. Autor v nej zrušil interpunkciu a nechal obrazy voľne plynúť tak, ako ich prináša pamäť.',
    obsah: [
      'Pásmo je takzvaná polytematická básnická skladba — nemá jednu tému ani dej, ale voľne rozvíja mnoho tém naraz. Lyrický subjekt sa pohybuje po Paríži a zároveň v pamäti prebieha svetom: v jednom okamihu je pri Eiffelovej veži, o pár veršov neskôr v Ríme, v Prahe, v Amsterdame alebo v detstve. Práve toto prelínanie vzdialených miest a časov v jednom celku je hlavný nápad skladby a súvisí s kubistickým videním, ktoré ukazuje predmet z viacerých strán zároveň.',
      'Nosným motívom je moderný svet a jeho technika. Apollinaire ako jeden z prvých básnikov vyhlásil, že poetické je aj to, čo je nové a mestské: reklamné plakáty, letáky, výklady, autá, lietadlá, továrenský komín, telegraf. Vo známom úvode skladby sa kostol a moderná stavba postavia vedľa seba a lyrický subjekt priznáva, že už je unavený zo starého sveta. Súčasne je však v texte silný motív viery a detstva — moderné a tradičné sa neruší, ale prekrýva.',
      'Druhou vrstvou je osobná spoveď: samota, neúspešná láska, cudzota vo veľkom meste a pocit, že hovoriaci nikam nepatrí. Skladba sa preto nedá čítať ako oslava techniky — je to zároveň text o úzkosti moderného človeka. Obrazy sú kladené vedľa seba bez spojok a bez vysvetlenia, čo čitateľa núti hľadať súvislosti sám. Apollinaire v skladbe úplne zrušil interpunkciu, pretože podľa neho rytmus a členenie verša stačia samy.',
      'Motív Pásma pokračuje v jeho ďalšej knihe, v Kaligramoch (1918). Kaligram je obrazová báseň: text je vysádzaný tak, aby vytvoril obrazec veci, o ktorej hovorí — napríklad fontánu, dážď, srdce, Eiffelovu vežu alebo hodinky. Báseň tak prestáva byť len tým, čo sa dá prečítať, a stáva sa aj tým, čo sa dá vidieť; hranica medzi literatúrou a výtvarným umením sa ruší. Táto poetika sa stala vzorom pre celú európsku avantgardu vrátane českého poetizmu a slovenskej medzivojnovej moderny (Novomeský, davisti) a Apollinaire ako prvý použil aj samotné slovo surrealizmus.',
    ],
    kompozicia:
      'Pásmo je jednolitý, dlhý prúd voľného verša bez interpunkcie a bez tradičného členenia na strofy s pravidelnou stavbou. Kompozičným princípom je asociácia: obrazy a témy sa reťazia podľa voľného spojenia predstáv, nie podľa logickej či dejovej línie (polytematickosť, princíp simultánnosti — viac miest a časov naraz). V Kaligramoch je kompozícia navyše vizuálna: usporiadanie textu na strane tvorí obraz.',
    postavy: [
      {
        meno: 'lyrický subjekt (chodec veľkomestom)',
        charakteristika:
          'Moderný človek, ktorý sa pohybuje mestom a zároveň pamäťou. Fascinuje ho technika a nové tvary sveta, no zostáva samotný a úzkostný. Nie je postavou s dejom, ale hlasom, ktorý spája roztrieštené obrazy do jedného pásma.',
        rola: 'hlavna',
      },
      {
        meno: 'veľkomesto Paríž',
        charakteristika:
          'Prostredie, ktoré dostáva takmer postavovú platnosť: ulica, plakáty, výklady, Eiffelova veža. Je to nová básnická látka, ktorú Apollinaire ako jeden z prvých dôsledne prijal.',
        rola: 'vedlajsia',
      },
      {
        meno: 'moderná technika',
        charakteristika:
          'Lietadlá, autá, telegraf, komíny a reklama nie sú kulisou, ale rovnocenným motívom. Vyjadrujú vieru avantgardy, že poézia má patriť súčasnosti.',
        rola: 'vedlajsia',
      },
      {
        meno: 'spomienka na detstvo a vieru',
        charakteristika:
          'Vracajúca sa vrstva textu, ktorá stojí v protiklade k modernému svetu. Práve toto napätie medzi starým a novým dáva skladbe hĺbku a zabraňuje, aby bola len oslavou pokroku.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'moderné veľkomesto a technika ako nová básnická látka',
      'samota a úzkosť človeka v modernom svete',
      'napätie medzi starým (viera, detstvo) a novým (pokrok)',
      'pamäť ako priestor, v ktorom sa prelínajú vzdialené miesta a časy',
      'hľadanie novej podoby poézie (zrušenie interpunkcie, obrazová báseň)',
    ],
    motivy: [
      'Eiffelova veža a kostol postavené vedľa seba',
      'reklamné plakáty, letáky a výklady',
      'lietadlo, auto, telegraf, továrenský komín',
      'cestovanie a striedanie mien miest',
      'detstvo a náboženská spomienka',
      'obrazec (fontána, dážď, srdce) tvorený samotným textom kaligramu',
    ],
    jazyk: [
      'voľný verš bez interpunkcie — Apollinaire vypustil čiarky a bodky, pretože podľa neho rytmus verša stačí sám; text tým plynie ako nepretržitý prúd predstáv',
      'asociatívne reťazenie obrazov — obrazy nasledujú podľa voľného spojenia predstáv, nie podľa logiky, čo od čitateľa žiada, aby si súvislosti dotvoril',
      'polytematickosť a simultánnosť — v jednej skladbe sa prelína viacero tém, miest a časov naraz, čo zodpovedá kubistickému videniu predmetu z mnohých strán',
      'kaligram (obrazová báseň) — v zbierke Kaligramy je text vysádzaný do obrazca veci, o ktorej hovorí, takže báseň sa dá nielen čítať, ale aj vidieť',
      'civilizmus — do poézie sú prijaté slová z technického a mestského života (plakát, lietadlo, telegraf), ktoré dovtedy do básne nepatrili',
      'kontrast — starý svet (kostol, detstvo, viera) proti novému (veža, reklama, stroj); práve tento protiklad drží skladbu v napätí',
      'apostrofa a striedanie osôb — lyrický subjekt hovorí raz v prvej, raz v druhej osobe (oslovuje sám seba), čím sa výpoveď rozdvojuje',
    ],
    maturitneMinimum: [
      'Apollinaire je ústrednou postavou európskej avantgardy pred prvou svetovou vojnou; on sám zaviedol slovo surrealizmus a teoreticky obhajoval kubizmus.',
      'Pásmo (v pôvodine Zone) je polytematická básnická skladba a pochádza zo zbierky Alkoholy (1913); kaligramy sú z neskoršej zbierky Kaligramy (1918).',
      'Zrušenie interpunkcie a voľná asociácia obrazov sú dva najznámejšie znaky Apollinairovej poetiky.',
      'Kaligram je obrazová báseň — grafická podoba textu tvorí obrazec veci, o ktorej báseň hovorí; hranica medzi literatúrou a výtvarným umením sa ruší.',
      'Typická maturitná otázka: vysvetli pojem polytematická básnická skladba a kaligram a uveď, ako Apollinaire ovplyvnil slovenskú medzivojnovú poéziu.',
    ],
    ulohy: [
      {
        id: 'pasmo-k1',
        typ: 'kviz',
        otazka: 'Čo je kaligram?',
        moznosti: [
          'obrazová báseň, ktorej text je vysádzaný do obrazca veci, o ktorej hovorí',
          'báseň napísaná v presnom sonetovom tvare',
          'báseň, ktorá sa dá čítať odpredu aj odzadu',
          'krátky nápis na pamätníku alebo hrobe',
        ],
        spravna: 0,
        vysvetlenie:
          'V kaligrame má grafická podoba textu výtvarnú funkciu — báseň o fontáne je vysádzaná do tvaru fontány. Ruší sa tým hranica medzi literatúrou a výtvarným umením.',
      },
      {
        id: 'pasmo-k2',
        typ: 'kviz',
        otazka: 'Aký prostriedok Apollinaire v skladbe Pásmo programovo zrušil?',
        moznosti: [
          'interpunkciu',
          'rým aj rytmus',
          'lyrický subjekt',
          'delenie na verše',
        ],
        spravna: 0,
        vysvetlenie:
          'Apollinaire vypustil čiarky a bodky s odôvodnením, že rytmus a členenie verša stačia samy. Text tým plynie ako nepretržitý prúd predstáv.',
      },
      {
        id: 'pasmo-k3',
        typ: 'kviz',
        otazka: 'Čo znamená, že Pásmo je polytematická básnická skladba?',
        moznosti: [
          'voľne rozvíja viac tém naraz a prelína rôzne miesta a časy',
          'je napísaná v niekoľkých jazykoch súčasne',
          'má niekoľko rôznych autorov',
          'skladá sa z presne piatich tematických oddielov',
        ],
        spravna: 0,
        vysvetlenie:
          'Namiesto jednej témy a deja sa v skladbe reťazia obrazy podľa asociácie. Tento princíp simultánnosti zodpovedá kubistickému videniu predmetu z viacerých strán zároveň.',
      },
      {
        id: 'pasmo-k4',
        typ: 'kviz',
        otazka: 'Ktorý pojem zaviedol do literatúry sám Guillaume Apollinaire?',
        moznosti: ['surrealizmus', 'romantizmus', 'naturalizmus', 'klasicizmus'],
        spravna: 0,
        vysvetlenie:
          'Slovo surrealizmus použil Apollinaire ako prvý; hnutie potom roku 1924 programovo založil André Breton svojím Manifestom surrealizmu.',
      },
      {
        id: 'pasmo-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k pojmu jeho vysvetlenie.',
        pary: [
          { vlavo: 'kaligram', vpravo: 'obrazová báseň — text tvorí obrazec' },
          { vlavo: 'polytematická skladba', vpravo: 'viac tém a časov prelínaných naraz' },
          { vlavo: 'voľný verš', vpravo: 'verš bez pravidelného rytmu a bez interpunkcie' },
          { vlavo: 'civilizmus', vpravo: 'prijatie technických a mestských slov do poézie' },
        ],
        vysvetlenie:
          'Všetky štyri pojmy patria k avantgardnej poetike: básnický text sa oslobodzuje od pravidiel a otvára sa modernému svetu.',
      },
      {
        id: 'pasmo-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o skladbe a jej autorovi.',
        text: [
          'Skladbu Pásmo napísal ',
          { medzera: 'Guillaume Apollinaire', napoveda: 'francúzsky básnik poľského pôvodu' },
          ' a vyšla v zbierke ',
          { medzera: 'Alkoholy', napoveda: 'zbierka z roku 1913' },
          '. Obrazové básne, v ktorých text tvorí obrazec, sa nazývajú ',
          { medzera: 'kaligramy', napoveda: 'podľa názvu zbierky z roku 1918' },
          '.',
        ],
        vysvetlenie:
          'Pásmo pochádza zo zbierky Alkoholy (1913), obrazové básne zo zbierky Kaligramy (1918). Na maturite sa obvykle preberajú spolu ako ukážka avantgardnej poetiky.',
      },
      {
        id: 'pasmo-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o poetike skladby.',
        text: [
          'V skladbe Pásmo autor zrušil ',
          { medzera: 'interpunkciu', napoveda: 'čiarky a bodky' },
          ' a obrazy reťazí podľa ',
          { medzera: 'asociácie', napoveda: 'voľné spojenie predstáv' },
          ', nie podľa logického deja.',
        ],
        vysvetlenie:
          'Asociatívne reťazenie obrazov a voľný verš bez interpunkcie sú dva najcharakteristickejšie znaky Apollinairovej avantgardnej poetiky.',
      },
    ],
  },
  {
    id: 'manifest-surrealizmu',
    nazov: 'Manifest surrealizmu a surrealistická poézia',
    autorId: 'breton',
    rocnik: 3,
    druh: 'poezia',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'literárny manifest (programový text) a ukážky surrealistickej poézie',
    forma: 'teoretická próza (manifest) a voľný verš bez interpunkcie',
    rokVydania: '1924 (Druhý manifest surrealizmu 1929)',
    obdobie: 'literárna avantgarda — surrealizmus',
    miestoACas:
      'Paríž 20. rokov 20. storočia; surrealistická poézia nemá určené miesto ani čas, jej priestorom je sen a podvedomie',
    anotacia:
      'Programový text, ktorým sa roku 1924 zrodil surrealizmus. Breton v ňom vyhlásil, že pravú skutočnosť treba hľadať v snoch, v podvedomí a vo voľnej asociácii, nie v rozume.',
    obsah: [
      'Manifest surrealizmu vyšiel roku 1924 a je to programový, teoretický text, nie beletria. Breton v ňom najprv kritizuje realistickú literatúru a rozumovú logiku, ktoré podľa neho zužujú človeka a berú mu predstavivosť. Za spojenca si berie Sigmunda Freuda a jeho psychoanalýzu: skutočným zdrojom pravdy nie je vedomé myslenie, ale sen, podvedomie a spontánna asociácia. Nadskutočnosť (surrealita) je podľa Bretona stav, v ktorom sa sen a skutočnosť spoja do jedného celku.',
      'Najznámejšou časťou manifestu je definícia surrealizmu ako čistého psychického automatizmu. Automatický text (automatické písanie) je metóda, pri ktorej autor píše čo najrýchlejšie, bez rozmýšľania, bez opravovania a bez ohľadu na zmysel, aby sa dostal pod kontrolu rozumu a cenzúry. Vedľa toho sa používajú ďalšie postupy: zapisovanie snov, kolektívne hry (napríklad takzvaná mŕtvola s prísadou), koláž a montáž. Breton spolu s Philippom Soupaultom tieto postupy vyskúšal už v knihe Magnetické polia.',
      'Z toho vyplýva aj podoba surrealistickej poézie. Vzniká voľný verš bez interpunkcie, v ktorom sa spájajú obrazy z veľmi vzdialených oblastí — čím väčšia vzdialenosť medzi spojenými predstavami, tým silnejší obraz. Báseň nechce opisovať skutočnosť ani vysvetľovať, preto sa nedá prerozprávať; jej zmysel je v obraznosti, v prekvapení a v oslobodení predstavivosti. K najznámejším surrealistickým básnikom patria Paul Éluard, Louis Aragon a Benjamin Péret, vo výtvarnom umení Salvador Dalí, Max Ernst a René Magritte.',
      'Surrealizmus nebol len literárnou technikou, ale aj postojom: hlásal úplnú slobodu človeka, vzburu proti meštiackej morálke, a časť skupiny sa priblížila ku komunistickému hnutiu. Breton prísne strážil čistotu programu a s mnohými členmi sa rozišiel; roku 1929 vydal Druhý manifest surrealizmu. Hnutie sa rozšírilo do celej Európy — v Česku ako surrealistická skupina okolo Vítězslava Nezvala a Karla Teigeho, na Slovensku ako nadrealizmus, ktorého prvým dielom bola zbierka Rudolfa Fábryho Uťaté ruky (1935).',
    ],
    kompozicia:
      'Manifest je komponovaný ako polemická úvaha: kritika realizmu a rozumu, obhajoba sna a predstavivosti, definícia surrealizmu a nakoniec praktické pokyny k automatickému písaniu. Surrealistická poézia nemá pravidelnú kompozíciu — je to prúd voľných asociácií bez interpunkcie, ktorý sa neriadi dejom ani logikou.',
    postavy: [
      {
        meno: 'André Breton ako hovoriaci teoretik',
        charakteristika:
          'V manifeste nevystupujú literárne postavy — hovorí autor sám ako vodca a teoretik hnutia. Vystupuje polemicky, kategoricky a s presvedčením, že objavil novú cestu k poznaniu.',
        rola: 'hlavna',
      },
      {
        meno: 'lyrický subjekt surrealistickej básne',
        charakteristika:
          'V surrealistickej poézii nie je určený ani charakterizovaný: je len hlasom, ktorý zapisuje prúd predstáv. Nemá príbeh ani totožnosť, pretože podľa programu má hovoriť podvedomie, nie osobnosť.',
        rola: 'hlavna',
      },
      {
        meno: 'sen a podvedomie',
        charakteristika:
          'To, čo v surrealizme nahrádza postavu a dej: sen je zdrojom obrazov a podvedomie je skutočným autorom textu. Breton sa v tom opieral o Freudovu psychoanalýzu.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Sigmund Freud (ako myšlienková opora)',
        charakteristika:
          'Zakladateľ psychoanalýzy, o ktorého výklad snov a voľných asociácií sa Breton opieral. Nie je postavou textu, ale bez neho by surrealistický program nevznikol.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'sen a podvedomie ako skutočný zdroj poznania',
      'oslobodenie predstavivosti spod kontroly rozumu',
      'vzbura proti meštiackej morálke a proti realistickej literatúre',
      'absolútna sloboda človeka a umenia',
      'spojenie sna a skutočnosti do nadskutočnosti (surreality)',
    ],
    motivy: [
      'sen a jeho zapisovanie',
      'automatické písanie',
      'náhoda a prekvapivé spojenie vzdialených predstáv',
      'koláž a montáž',
      'kolektívne surrealistické hry',
      'šialenstvo a detstvo ako stavy neskrotenej obraznosti',
    ],
    jazyk: [
      'automatický text (psychický automatizmus) — písanie bez kontroly rozumu, bez opráv a plánu, aby sa dostalo k slovu podvedomie; je to hlavná metóda surrealistickej poetiky',
      'voľná asociácia obrazov — obrazy sa spájajú podľa nečakaných súvislostí; čím vzdialenejšie sú spojené predstavy, tým silnejší je surrealistický obraz',
      'metafora a nezvyklé prirovnanie — spojenie predmetov, ktoré k sebe nepatria, je základom obraznosti a zdrojom prekvapenia',
      'absencia interpunkcie a syntaktická neurčitosť — veta sa nedá jednoznačne členiť, čím sa zvyšuje viacznačnosť textu',
      'polemický a kategorický štýl manifestu — Breton používa definície, príkazy a odmietnutia, čo je typické pre programové texty avantgardy',
      'koláž a montáž — do textu sa vkladajú cudzie, nájdené útržky, takže báseň vzniká skladaním, nie plynulým rozprávaním',
      'obraznosť namiesto deja — text sa nedá prerozprávať, pretože nemá príbeh; pôsobí obrazom, nie významom',
    ],
    maturitneMinimum: [
      'Surrealizmus vznikol roku 1924 Bretonovým Manifestom surrealizmu a nadväzoval na dadaizmus; slovo surrealizmus použil prvý Apollinaire.',
      'Breton definoval surrealizmus ako „čistý psychický automatizmus“ — hlavnou metódou je automatické písanie bez kontroly rozumu.',
      'Teoretickou oporou hnutia je Freudova psychoanalýza: sen, podvedomie a voľná asociácia sú cestou k pravej skutočnosti (nadskutočnosti).',
      'K surrealistom patrili Paul Éluard, Louis Aragon, Benjamin Péret, výtvarníci Dalí, Ernst a Magritte; na Slovensku sa smer nazýval nadrealizmus (Fábry, Žáry, Bunčák, Reisel).',
      'Typická maturitná otázka: vysvetli pojmy surrealizmus, automatický text a nadrealizmus a uveď, ktoré slovenské dielo nadrealizmus otvorilo.',
    ],
    ulohy: [
      {
        id: 'manifest-surrealizmu-k1',
        typ: 'kviz',
        otazka: 'V ktorom roku vyšiel Manifest surrealizmu a kto je jeho autorom?',
        moznosti: [
          '1924, André Breton',
          '1913, Guillaume Apollinaire',
          '1935, Rudolf Fábry',
          '1909, Filippo Marinetti',
        ],
        spravna: 0,
        vysvetlenie:
          'Manifest surrealizmu vydal André Breton roku 1924. Slovo surrealizmus však použil už predtým Apollinaire, Breton z neho urobil program celého hnutia.',
      },
      {
        id: 'manifest-surrealizmu-k2',
        typ: 'kviz',
        otazka: 'Čo je automatický text (psychický automatizmus)?',
        moznosti: [
          'písanie bez kontroly rozumu, bez plánu a bez opráv, aby prehovorilo podvedomie',
          'text napísaný podľa presných pravidiel klasickej poetiky',
          'text, ktorý vzniká prepisovaním snov do sonetovej formy',
          'strojom generovaný text bez ľudského zásahu',
        ],
        spravna: 0,
        vysvetlenie:
          'Breton definoval surrealizmus práve ako čistý psychický automatizmus. Zmyslom metódy je obísť rozumovú cenzúru a dostať k slovu podvedomie.',
      },
      {
        id: 'manifest-surrealizmu-k3',
        typ: 'kviz',
        otazka: 'O ktorú vedeckú teóriu sa surrealizmus opieral?',
        moznosti: [
          'o Freudovu psychoanalýzu a výklad snov',
          'o Darwinovu teóriu evolúcie',
          'o Einsteinovu teóriu relativity',
          'o Marxovu teóriu nadhodnoty',
        ],
        spravna: 0,
        vysvetlenie:
          'Freudova psychoanalýza dala surrealistom presvedčenie, že sen, podvedomie a voľná asociácia sú bližšie k pravde než vedomé rozumové myslenie.',
      },
      {
        id: 'manifest-surrealizmu-k4',
        typ: 'kviz',
        otazka: 'Ako sa surrealizmus nazýval na Slovensku?',
        moznosti: ['nadrealizmus', 'vitalizmus', 'naturizmus', 'symbolizmus'],
        spravna: 0,
        vysvetlenie:
          'Slovenskí autori používali domáci názov nadrealizmus. Prvým nadrealistickým dielom je zbierka Rudolfa Fábryho Uťaté ruky (1935).',
      },
      {
        id: 'manifest-surrealizmu-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k pojmu alebo menu správne vysvetlenie.',
        pary: [
          { vlavo: 'André Breton', vpravo: 'autor Manifestu surrealizmu z roku 1924' },
          { vlavo: 'automatický text', vpravo: 'písanie bez kontroly rozumu' },
          { vlavo: 'Sigmund Freud', vpravo: 'psychoanalýza ako teoretická opora hnutia' },
          { vlavo: 'nadrealizmus', vpravo: 'slovenská podoba surrealizmu' },
          { vlavo: 'Salvador Dalí', vpravo: 'surrealistický výtvarník' },
        ],
        vysvetlenie:
          'Surrealizmus bol medzinárodné hnutie spájajúce literatúru a výtvarné umenie; na Slovensku dostal názov nadrealizmus.',
      },
      {
        id: 'manifest-surrealizmu-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o surrealizme.',
        text: [
          'Manifest surrealizmu vydal roku ',
          { medzera: '1924', napoveda: 'prvá polovica 20. rokov' },
          ' francúzsky básnik ',
          { medzera: 'André Breton', napoveda: 'zakladateľ a teoretik hnutia' },
          '. Hlavnou tvorivou metódou surrealizmu je ',
          { medzera: 'automatický text', napoveda: 'písanie bez kontroly rozumu' },
          '.',
        ],
        vysvetlenie:
          'Automatické písanie malo obísť rozumovú cenzúru. Práve preto sa surrealistická báseň nedá prerozprávať — nemá dej, pôsobí obrazom.',
      },
      {
        id: 'manifest-surrealizmu-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň vety o vplyve surrealizmu.',
        text: [
          'Teoretickou oporou surrealizmu bola ',
          { medzera: 'psychoanalýza', napoveda: 'učenie Sigmunda Freuda' },
          '. Na Slovensku sa tento smer nazýval ',
          { medzera: 'nadrealizmus', napoveda: 'domáci názov pre surrealizmus' },
          ' a otvorila ho zbierka Uťaté ruky.',
        ],
        vysvetlenie:
          'Slovenský nadrealizmus sa začal Fábryho zbierkou Uťaté ruky (1935) a rozvinul sa v 40. rokoch (Žáry, Bunčák, Reisel, Lenko).',
      },
    ],
  },
  {
    id: 'utate-ruky',
    nazov: 'Uťaté ruky',
    autorId: 'fabry',
    rocnik: 3,
    druh: 'poezia',
    literatura: 'slovenska',
    standardizovane: false,
    zaner: 'lyrická zbierka s manifestačným textom (avantgardná básnická kniha)',
    forma: 'poézia — voľný verš bez interpunkcie, doplnený kolážami a grafikou autora',
    rokVydania: '1935',
    obdobie: 'slovenský nadrealizmus (surrealizmus), avantgarda',
    miestoACas:
      'básne nemajú konkrétne miesto ani čas; ich priestorom je sen, podvedomie a voľná asociácia predstáv, v pozadí Slovensko 30. rokov 20. storočia',
    anotacia:
      'Prvá nadrealistická zbierka v slovenskej literatúre. Už názvom ohlasuje rozchod s dovtedajšou poéziou: básnik si symbolicky utína ruky, ktorými by písal po starom.',
    obsah: [
      'Uťaté ruky nie sú bežnou zbierkou básní, ale avantgardným gestom. Fábry ju roku 1935 zámerne vystavil ako celok: básne sú doplnené jeho vlastnými kolážami a grafikou, takže kniha má aj výtvarnú podobu. Súčasťou je manifestačný text, v ktorom sa autor rozchádza s dovtedajšou slovenskou poéziou — s jej zrozumiteľnosťou, národným poslaním, pravidelným veršom a citovou lyrikou. Názov je symbolickým gestom: básnik si utína ruky, ktorými by písal po starom.',
      'Poetika zbierky vychádza z francúzskeho surrealizmu. Verš je voľný, bez interpunkcie a bez logickej súvislosti; obrazy sa spájajú podľa voľnej asociácie a čím sú spojené predstavy vzdialenejšie, tým je obraz účinnejší. Text sa preto nedá prerozprávať ani vyložiť ako správa o niečom — pôsobí prekvapením, obraznosťou a zvukom. Do básní vstupujú prvky sna, náhody, telesnosti, technické slová a hovorové výrazy vedľa slov vznešených.',
      'Lyrický subjekt nie je charakterizovaný ako osoba s príbehom. Je to hlas, ktorý zapisuje prúd predstáv a programovo popiera vlastnú totožnosť — podľa surrealistického programu má hovoriť podvedomie, nie osobnosť. Vracajú sa v ňom motívy odťatých rúk, tela, krvi, snov, mesta a rozkladu starých vecí. Zbierka teda nemá dej ani vývoj; má silu gesta a rozchodu.',
      'Uťaté ruky vzbudili pohoršenie i odmietnutie, no práve nimi vstúpil na Slovensko surrealizmus, ktorý sa tu nazýval nadrealizmus. Fábry na ne nadviazal zbierkou Vodné hodiny hodiny piesočné (1938) a v 40. rokoch sa k nadrealizmu pridali Štefan Žáry, Ján Rak, Július Lenko, Vladimír Reisel a Pavel Bunčák. Sám Fábry sa neskôr vrátil k zrozumiteľnejšiemu výrazu a k spoločenským témam, jeho prvotina však zostala prelomovým bodom slovenskej medzivojnovej poézie.',
    ],
    kompozicia:
      'Zbierka nie je komponovaná dejovo ani tematicky; drží ju pohromade jednotné gesto rozchodu so starou poéziou. Obsahuje manifestačný text, voľné verše bez interpunkcie a výtvarnú zložku — koláže a grafiku samotného autora, takže kniha je zámerne aj vizuálnym objektom. Poriadok básní nesleduje príbeh, ale prúd asociácií.',
    postavy: [
      {
        meno: 'lyrický subjekt',
        charakteristika:
          'Nemá menom určenú totožnosť ani príbeh — je to hlas zapisujúci prúd asociácií a snových obrazov. Programovo popiera vlastnú osobnosť, pretože podľa surrealistického programu má hovoriť podvedomie.',
        rola: 'hlavna',
      },
      {
        meno: 'motív uťatých rúk',
        charakteristika:
          'Nie postava, ale ústredný obraz knihy: ruky, ktoré by písali po starom, sú symbolicky odťaté. Zastupuje rozchod s dovtedajšou poéziou a jej pravidlami.',
        rola: 'hlavna',
      },
      {
        meno: 'sen a podvedomie',
        charakteristika:
          'To, čo v zbierke nahrádza postavy a dej. Obrazy prichádzajú ako zo sna, bez vysvetlenia a bez logickej súvislosti.',
        rola: 'vedlajsia',
      },
      {
        meno: 'telo, krv a rozklad',
        charakteristika:
          'Vracajúca sa vrstva drsných, telesných obrazov, ktorá programovo narúša predstavu o poézii ako o niečom krásnom a vznešenom.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'rozchod s dovtedajšou poéziou a jej pravidlami',
      'sloboda predstavivosti a podvedomia',
      'sen ako plnohodnotná skutočnosť',
      'vzbura proti tradícii, morálke a vkusu',
      'hľadanie nového jazyka poézie',
    ],
    motivy: [
      'uťaté ruky',
      'sen a snové výjavy',
      'telo, krv, rozklad',
      'náhoda a prekvapivé spojenie predstáv',
      'koláž a obrazová príloha knihy',
      'mesto a technické predmety',
    ],
    jazyk: [
      'automatický text a voľná asociácia — obrazy sa reťazia bez logickej súvislosti, takže báseň nemá dej a nedá sa prerozprávať; ide o hlavný postup nadrealizmu',
      'voľný verš bez interpunkcie — zrušenie čiarok a bodiek robí vetu viacznačnou a znemožňuje jediné správne čítanie',
      'nezvyklá metafora a prirovnanie — spojenie predstáv z veľmi vzdialených oblastí je zdrojom prekvapenia a hlavným účinkom textu',
      'symbol už v názve — uťaté ruky sú obrazom zámerného rozchodu s dovtedajšou poéziou a jej postupmi',
      'kontrast štýlových vrstiev — vznešené slová stoja vedľa hovorových, technických a telesných, čím sa narúša predstava o „poetickom“ jazyku',
      'koláž a montáž — do knihy sú vložené výtvarné koláže a grafika autora, takže text a obraz tvoria jeden celok',
      'šokujúca obraznosť (telo, krv, rozklad) — cieľom nie je krása, ale vyvedenie čitateľa z pohodlných očakávaní',
    ],
    maturitneMinimum: [
      'Uťaté ruky (1935) sú prvým nadrealistickým (surrealistickým) dielom v slovenskej literatúre; nadrealizmus je slovenský názov pre surrealizmus.',
      'Rudolf Fábry je zakladateľom slovenského nadrealizmu; zbierku doplnil manifestačným textom, kolážami a vlastnou grafikou.',
      'Znaky nadrealizmu: automatický text, voľná asociácia, voľný verš bez interpunkcie, nezvyklá obraznosť, popretie logiky a deja.',
      'Ďalší slovenskí nadrealisti: Štefan Žáry, Vladimír Reisel, Pavel Bunčák, Ján Rak, Július Lenko; teoretickým vzorom bol Bretonov Manifest surrealizmu (1924).',
      'Typická maturitná otázka: vysvetli symboliku názvu zbierky Uťaté ruky a vymenuj znaky nadrealizmu.',
    ],
    ulohy: [
      {
        id: 'utate-ruky-k1',
        typ: 'kviz',
        otazka: 'Čo symbolizuje názov zbierky Uťaté ruky?',
        moznosti: [
          'rozchod s dovtedajšou poéziou — básnik si utína ruky, ktorými by písal po starom',
          'následky pracovnej nehody v továrni',
          'zmrzačenie vojakov v prvej svetovej vojne',
          'bezmocnosť slovenského národa pred cudzou mocou',
        ],
        spravna: 0,
        vysvetlenie:
          'Názov je programovým gestom. Fábry ním ohlasuje, že sa zrieka starej poetiky — pravidelného verša, zrozumiteľnosti a národného poslania poézie.',
      },
      {
        id: 'utate-ruky-k2',
        typ: 'kviz',
        otazka: 'Aký význam má zbierka Uťaté ruky v slovenskej literatúre?',
        moznosti: [
          'je prvým nadrealistickým (surrealistickým) dielom v slovenskej literatúre',
          'je prvou zbierkou slovenskej literárnej moderny',
          'je prvým slovenským románom vo verši',
          'je prvou zbierkou socialistického realizmu',
        ],
        spravna: 0,
        vysvetlenie:
          'Zbierkou z roku 1935 vstúpil na Slovensko surrealizmus, ktorý sa tu nazýval nadrealizmus. Fábry je preto považovaný za jeho zakladateľa.',
      },
      {
        id: 'utate-ruky-k3',
        typ: 'kviz',
        otazka: 'Ktorý znak NIE JE typický pre poetiku zbierky?',
        moznosti: [
          'pravidelný rým a presná strofická stavba',
          'voľný verš bez interpunkcie',
          'automatický text a voľná asociácia obrazov',
          'nezvyklé spojenie vzdialených predstáv',
        ],
        spravna: 0,
        vysvetlenie:
          'Nadrealizmus pravidelnú formu programovo odmieta. Zbierka stojí na voľnom verši, absencii interpunkcie a asociatívnej obraznosti.',
      },
      {
        id: 'utate-ruky-k4',
        typ: 'kviz',
        otazka: 'Čím je kniha Uťaté ruky doplnená okrem básní?',
        moznosti: [
          'manifestačným textom, kolážami a grafikou samotného autora',
          'notovým zápisom piesní',
          'fotografiami z frontu',
          'slovníkom nárečových slov',
        ],
        spravna: 0,
        vysvetlenie:
          'Fábry z knihy urobil avantgardný objekt: text, manifest a výtvarná zložka tvoria jeden celok. Koláž je typickým surrealistickým postupom.',
      },
      {
        id: 'utate-ruky-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k pojmu alebo menu správne vysvetlenie.',
        pary: [
          { vlavo: 'Rudolf Fábry', vpravo: 'zakladateľ slovenského nadrealizmu' },
          { vlavo: 'nadrealizmus', vpravo: 'slovenský názov pre surrealizmus' },
          { vlavo: 'automatický text', vpravo: 'písanie bez kontroly rozumu' },
          { vlavo: 'uťaté ruky', vpravo: 'symbol rozchodu so starou poéziou' },
          { vlavo: 'koláž', vpravo: 'výtvarný postup použitý v knihe' },
        ],
        vysvetlenie:
          'Fábryho zbierka spája literárny text, manifest a výtvarné umenie — to je pre avantgardu typické prekračovanie hraníc medzi druhmi umenia.',
      },
      {
        id: 'utate-ruky-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o zbierke.',
        text: [
          'Zbierka Uťaté ruky vyšla v roku ',
          { medzera: '1935', napoveda: 'polovica 30. rokov 20. storočia' },
          ' a jej autorom je ',
          { medzera: 'Rudolf Fábry', napoveda: 'zakladateľ slovenského nadrealizmu' },
          '. Smer, ktorý ňou vstúpil do slovenskej literatúry, sa nazýva ',
          { medzera: 'nadrealizmus', napoveda: 'slovenský názov surrealizmu' },
          '.',
        ],
        vysvetlenie:
          'Nadrealizmus sa na Slovensku plne rozvinul v 40. rokoch (Žáry, Reisel, Bunčák, Rak, Lenko), Fábryho zbierka ho však otvorila už roku 1935.',
      },
    ],
  },
  // === DOPLNIT_DIELA ===
]
