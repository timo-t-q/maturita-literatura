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
  // === DOPLNIT_AUTORI ===
]

export const diela3: Dielo[] = [
  // === DOPLNIT_DIELA ===
]
