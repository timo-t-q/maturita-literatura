// 4. ročník — povojnová svetová literatúra a súčasná slovenská literatúra.
// Autori a diela sú oddelené, aby sa obsah dal dopĺňať bez zásahu do komponentov.
import type { Autor, Dielo } from '../../types'

export const autori4: Autor[] = [
  {
    id: 'moravia',
    meno: 'Alberto Moravia',
    roky: '1907 – 1990',
    smer: 'neorealizmus, existencializmus',
    zivotopis:
      'Taliansky prozaik, esejista a novinár, vlastným menom Alberto Pincherle, jeden z najvýznamnejších predstaviteľov talianskej prózy 20. storočia. Ako dieťa dlho chorel na kostnú tuberkulózu a roky prežil v sanatóriách, kde veľa čítal a začal písať. Za fašizmu mal problémy s cenzúrou, jeho knihy boli zakázané a s manželkou Elsou Morante sa musel skrývať na vidieku. Po vojne patril k okruhu talianskeho neorealizmu, ktorý zobrazoval život chudobných vrstiev bez idealizovania. Vo svojich dielach spája presný sociálny obraz s psychologickou analýzou odcudzenia, nudy a ľahostajnosti moderného človeka.',
    dalsieDiela: ['Ľahostajní', 'Nuda', 'Pohŕdanie', 'Rímske poviedky', 'Konformista'],
  },
  {
    id: 'sartre',
    meno: 'Jean-Paul Sartre',
    roky: '1905 – 1980',
    smer: 'existencializmus',
    zivotopis:
      'Francúzsky filozof, prozaik, dramatik a esejista, hlavný predstaviteľ ateistického existencializmu. Vyštudoval filozofiu, učil na lýceu a v štúdiách navštívil Nemecko, kde ho ovplyvnila fenomenológia. Počas druhej svetovej vojny bol v nemeckom zajatí a po návrate sa zapojil do hnutia odporu. Jeho tézou je, že existencia predchádza podstatu — človek nemá vopred danú povahu, je odsúdený na slobodu a plne zodpovedný za svoje voľby. V roku 1964 mu udelili Nobelovu cenu za literatúru, ale odmietol ju prijať, aby si zachoval nezávislosť. Jeho životnou partnerkou bola filozofka a spisovateľka Simone de Beauvoir.',
    dalsieDiela: ['Nevoľnosť', 'Bytie a nič', 'Cesty k slobode', 'S vylúčením verejnosti', 'Múchy'],
  },
  {
    id: 'robbe-grillet',
    meno: 'Alain Robbe-Grillet',
    roky: '1922 – 2008',
    smer: 'nový román (nouveau roman)',
    zivotopis:
      'Francúzsky prozaik, scenárista a filmový režisér, teoretik a najvýraznejší predstaviteľ nového románu. Pôvodne vyštudoval agronómiu a pracoval ako inžinier, čo poznať na jeho takmer technickej presnosti opisu. V zbierke esejí Za nový román odmietol tradičný román s pevným príbehom, psychologicky vysvetlenou postavou a všetko vedúcim rozprávačom. Namiesto toho žiadal literatúru, ktorá len zaznamenáva povrch vecí a necháva význam na čitateľa. Napísal aj scenár k slávnemu filmu Vlaňajšieho roku v Marienbade a sám režíroval experimentálne filmy.',
    dalsieDiela: ['Gumy', 'Voyeur', 'V labyrinte', 'Za nový román', 'Vlaňajšieho roku v Marienbade'],
  },
  {
    id: 'beckett',
    meno: 'Samuel Beckett',
    roky: '1906 – 1989',
    smer: 'absurdná dráma, existencializmus',
    zivotopis:
      'Írsky dramatik, prozaik a esejista, ktorý väčšinu života prežil v Paríži a písal po anglicky aj po francúzsky. V mladosti pracoval ako lektor a bol blízkym spolupracovníkom Jamesa Joycea. Počas vojny sa zapojil do francúzskeho hnutia odporu a musel sa skrývať na juhu Francúzska. Je zakladateľskou osobnosťou absurdnej drámy: jeho hry nemajú dej v tradičnom zmysle, postavy sa nikam nedostanú a jazyk sa rozpadá na prázdne formuly. V roku 1969 získal Nobelovu cenu za literatúru.',
    dalsieDiela: ['Koniec hry', 'Posledná Krappova nahrávka', 'Molloy', 'Malone umiera', 'Šťastné dni'],
  },
  {
    id: 'salinger',
    meno: 'Jerome David Salinger',
    roky: '1919 – 2010',
    smer: 'americká povojnová próza',
    zivotopis:
      'Americký prozaik, autor jedného z najvplyvnejších románov 20. storočia o dospievaní. Pochádzal z newyorskej rodiny, štúdium na viacerých školách nedokončil, čo sa odzrkadlilo v postave jeho hrdinu. Ako vojak sa zúčastnil vylodenia v Normandii a bojov v Európe; vojnová trauma poznačila jeho tvorbu aj osobnosť. Po obrovskom úspechu románu Kto chytá v žite sa stiahol do ústrania v štáte New Hampshire, odmietal rozhovory a takmer prestal publikovať. Stal sa tak legendou aj vďaka svojmu mlčaniu.',
    dalsieDiela: ['Deväť poviedok', 'Franny a Zooey', 'Vyššie krov, tesári', 'Dobrý deň, moja krásna'],
  },
  {
    id: 'garcia-marquez',
    meno: 'Gabriel García Márquez',
    roky: '1927 – 2014',
    smer: 'magický realizmus',
    zivotopis:
      'Kolumbijský prozaik a novinár, najznámejší predstaviteľ latinskoamerického magického realizmu. Detstvo prežil u prarodičov v mestečku Aracataca, kde od babičky počúval rozprávania o duchoch a predtuchách — a práve tento tón dal jeho próze. Študoval právo, ktoré nedokončil, a živil sa ako reportér; pre politické názory žil dlhé roky v Mexiku a v Európe. V roku 1982 dostal Nobelovu cenu za literatúru. Jeho postup spočíva v tom, že nadprirodzené udalosti sa podávajú tým istým vecným tónom ako každodenné veci, takže zázrak a bežný život sú nerozlíšiteľné.',
    dalsieDiela: ['Kronika vopred ohlásenej smrti', 'Láska v časoch cholery', 'Plukovníkovi nemá kto napísať', 'Patriarchova jeseň'],
  },
  {
    id: 'orwell',
    meno: 'George Orwell',
    roky: '1903 – 1950',
    smer: 'antiutópia, politická satira',
    zivotopis:
      'Anglický prozaik, esejista a novinár, vlastným menom Eric Arthur Blair. Narodil sa v Indii, po štúdiách slúžil ako koloniálny policajt v Burme, čo v ňom vyvolalo odpor k imperializmu. Dobrovoľne žil medzi chudobnými v Paríži a v Londýne, aby o tom mohol písať z vlastnej skúsenosti. V španielskej občianskej vojne bojoval proti Frankovi, bol ranený a naživo videl, ako stalinisti likvidujú vlastných spojencov — odtiaľ pochádza jeho celoživotná nenávisť k totalitarizmu každého druhu. Zomrel na tuberkulózu krátko po vydaní románu 1984.',
    dalsieDiela: ['Zvieracia farma', 'Na dne v Paríži a v Londýne', 'Barmské dni', 'Hold Katalánsku'],
  },
  {
    id: 'eco',
    meno: 'Umberto Eco',
    roky: '1932 – 2016',
    smer: 'postmoderna',
    zivotopis:
      'Taliansky prozaik, semiotik, medievalista a esejista, profesor na univerzite v Bologni. Vedecky sa zaoberal teóriou znaku, výkladom textov a estetikou stredoveku, čo priamo využil vo svojich románoch. Presadzoval myšlienku otvoreného diela, ktoré nemá jediný správny výklad a dotvára ho čitateľ. Prvý román napísal ako takmer päťdesiatročný a stal sa z neho svetový bestseller. Jeho tvorba je typickou ukážkou postmoderny: spája vysokú vzdelanosť s napínavým príbehom pre široké publikum.',
    dalsieDiela: ['Foucaultovo kyvadlo', 'Ostrov včerajšieho dňa', 'Baudolino', 'Otvorené dielo', 'Pražský cintorín'],
  },
  {
    id: 'solzenicyn',
    meno: 'Alexander Isajevič Solženicyn',
    roky: '1918 – 2008',
    smer: 'ruská literatúra 20. storočia, literatúra táborovej skúsenosti',
    zivotopis:
      'Ruský prozaik, historik a kritik sovietskeho režimu. Vyštudoval matematiku a fyziku, v druhej svetovej vojne bol dôstojníkom delostrelectva a vyznamenali ho. V roku 1945 ho zatkli za kritické vyjadrenia o Stalinovi v súkromnom liste a osem rokov strávil v pracovných táboroch a potom vo vyhnanstve v Kazachstane. Vlastnú lágrovú skúsenosť premenil na literárne svedectvo, ktoré prvýkrát verejne pomenovalo sovietsky represívny systém. V roku 1970 dostal Nobelovu cenu za literatúru, v roku 1974 ho zbavili občianstva a vyhostili; do Ruska sa vrátil až v roku 1994.',
    dalsieDiela: ['Súostrovie Gulag', 'Rakovinový pavilón', 'V prvom kruhu', 'August štrnásteho'],
  },
  {
    id: 'bednar',
    meno: 'Alfonz Bednár',
    roky: '1914 – 1989',
    smer: 'slovenská próza 2. polovice 20. storočia',
    zivotopis:
      'Slovenský prozaik, scenárista a prekladateľ, jeden z autorov, ktorí ako prví narušili schémy socialistického realizmu. Vyštudoval slovanskú filológiu a angličtinu, pracoval ako redaktor a prekladateľ z angličtiny. Do literatúry vstúpil románom Sklený vrch, po ktorom vyvolal ostrú polemiku knihou noviel Hodiny a minúty. Namiesto jednoznačných hrdinov Povstania a povojnovej výstavby zobrazoval ľudí s vinou, pochybnosťami a nevyriešenou minulosťou. Písal aj filmové scenáre, spolupracoval s režisérom Štefanom Uhrom na filmoch, ktoré patria k vrcholom slovenskej novej vlny.',
    dalsieDiela: ['Sklený vrch', 'Hodiny a minúty', 'Balkón bol privysoko', 'Role', 'Ako sme sušili bielizeň'],
  },
  {
    id: 'mnacko',
    meno: 'Ladislav Mňačko',
    roky: '1919 – 1994',
    smer: 'slovenská próza 2. polovice 20. storočia, politický román',
    zivotopis:
      'Slovenský prozaik, publicista, reportér a scenárista českého pôvodu, jedna z najkonfliktnejších postáv slovenskej literatúry 20. storočia. Za vojny sa zapojil do odboja, bol zajatý a neskôr sa pridal k partizánom. Po vojne patril k oficiálnym režimovým publicistom, postupne sa však stal jeho ostrým kritikom. V roku 1967 na protest proti politike voči Izraelu odišiel do zahraničia, zbavili ho občianstva a jeho knihy zakázali; po roku 1968 emigroval do Rakúska. Jeho reportáže a romány spájajú novinársku vecnosť s morálnou otázkou o zodpovednosti mocných.',
    dalsieDiela: ['Smrť sa volá Engelchen', 'Oneskorené reportáže', 'Nočný rozhovor', 'Kde končí prašná cesta'],
  },
  {
    id: 'dusek',
    meno: 'Dušan Dušek',
    roky: '1946',
    smer: 'súčasná slovenská próza',
    zivotopis:
      'Slovenský prozaik, scenárista a autor kníh pre deti, majster krátkej poviedky. Vyštudoval geológiu, pracoval ako redaktor v časopisoch Kamarát, Slovenské pohľady a Tip, neskôr učil scenáristiku na Vysokej škole múzických umení. Jeho poetika je založená na detaile, humore a nenápadných okamihoch, v ktorých sa ukáže celý ľudský vzťah. Rozprávanie stavia na ozvláštnenom pohľade, často detskom alebo spomienkovom, a na presnej hovorovej vete. Napísal aj scenáre k filmom, napríklad v spolupráci s režisérom Dušanom Hanákom.',
    dalsieDiela: ['Poloha pri srdci', 'Náprstok', 'Milosrdný čas', 'Pešo do neba', 'Teplomer'],
  },
  {
    id: 'valek',
    meno: 'Miroslav Válek',
    roky: '1927 – 1991',
    smer: 'konkretisti, moderná slovenská poézia',
    zivotopis:
      'Slovenský básnik, prekladateľ a kultúrny politik, najvýraznejší predstaviteľ modernej slovenskej poézie po roku 1956. Študoval na Vysokej škole obchodnej v Bratislave, pracoval ako redaktor časopisov Mladá tvorba a Romboid. Jeho poézia je intelektuálna, ironická, plná civilných detailov a mestských motívov; s pátosom predchádzajúcej oficiálnej poézie zámerne polemizuje. Od roku 1969 bol dlhé roky ministrom kultúry, čo jeho postavenie v literatúre robí dodnes rozporným. Preložil do slovenčiny aj poéziu ruských a poľských autorov a písal verše pre deti.',
    dalsieDiela: ['Príťažlivosť', 'Nepokoj', 'Milovanie v husej koži', 'Slovo', 'Veľká cestovná horúčka'],
  },
  {
    id: 'rufus',
    meno: 'Milan Rúfus',
    roky: '1928 – 2009',
    smer: 'moderná slovenská poézia, reflexívna lyrika',
    zivotopis:
      'Slovenský básnik, esejista, prekladateľ a literárny vedec, jedna z najvýznamnejších osobností slovenskej poézie 20. storočia. Narodil sa v Závažnej Porube v podhorskej rodine, vyštudoval slovenčinu a dejepis a celý život prednášal na Filozofickej fakulte v Bratislave. Jeho poézia je tichá, sústredená a etická: hovorí o bolesti, o pokore, o domove, o matke a o zodpovednosti básnika za slovo. Po debute Až dozrieme mu na niekoľko rokov znemožnili publikovať, pretože jeho vážny tón nezapadal do oficiálnej optimistickej literatúry. Viackrát bol navrhnutý na Nobelovu cenu za literatúru.',
    dalsieDiela: ['Až dozrieme', 'Chlapec maľuje dúhu', 'Chlapec', 'Modlitbičky', 'Triptych'],
  },
  {
    id: 'jan-urban',
    meno: 'Ján Urban',
    roky: '1961',
    smer: 'slovenská poézia 80. rokov, postmoderna',
    zivotopis:
      'Slovenský básnik, ktorý patrí ku generácii vstupujúcej do literatúry v prvej polovici 80. rokov 20. storočia. Do poézie vstúpil zbierkou Malý zúrivý Robinson (1985), ktorá ho zaradila medzi výrazné debuty svojej generácie. Jeho verš je civilný, ironický a sebareflexívny; pracuje s obrazom mladého človeka uzavretého vo vlastnom vnútornom svete. Poéziu stavia na hravosti s jazykom, na skratke a na neistote lyrického subjektu, ktorý sa vyhýba veľkým gestám. Nemá nič spoločné s prozaikom Milom Urbanom, autorom Živého biča, s ktorým sa jeho meno niekedy zamieňa.',
    dalsieDiela: ['Malý zúrivý Robinson'],
  },
  {
    id: 'bukovcan',
    meno: 'Ivan Bukovčan',
    roky: '1921 – 1975',
    smer: 'slovenská dráma 2. polovice 20. storočia',
    zivotopis:
      'Slovenský dramatik, scenárista a publicista, jeden z najhranejších slovenských autorov modelovej drámy. Študoval právo, pracoval ako novinár a dramaturg v Slovenskej filmovej tvorbe. Napísal desiatky filmových scenárov a rozhlasových hier, jeho trvalý význam však spočíva v divadelných hrách. Buduje ich ako modelové situácie: zatvorí skupinu ľudí do uzavretého priestoru, vystaví ich krajnému tlaku a sleduje, ako sa rozpadá ich morálka. Cez tému Povstania a vojny tak kladie nadčasovú otázku o ľudskej zbabelosti a o cene vlastnej kože.',
    dalsieDiela: ['Zažeň vlka', 'Slučka pre dvoch', 'Luigiho srdce', 'Sneh nad limbou', 'Pštrosí večierok'],
  },
  // === DOPLNIT_AUTORI ===
]

export const diela4: Dielo[] = [
  {
    id: 'rimanka',
    nazov: 'Rimanka',
    autorId: 'moravia',
    rocnik: 4,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'spoločensko-psychologický román',
    forma: 'próza — román s ja-rozprávaním, dvojdielna kompozícia',
    rokVydania: '1947',
    obdobie: 'taliansky neorealizmus, existencializmus',
    miestoACas: 'Rím a jeho chudobné predmestia, obdobie fašistickej diktatúry (30. roky 20. storočia)',
    anotacia:
      'Spoveď mladej Rimanky z chudobnej rodiny, ktorá chce iba obyčajný život — muža, deti a domov — a namiesto toho ju prostredie vtlačí do úplne inej roly. Román o tom, ako spoločenské podmienky rozhodujú o mravnosti človeka viac ako jeho vôľa.',
    obsah: [
      'Adriana vyrastá v chudobnej rímskej rodine s ovdovenou matkou, ktorá šije košele a v dcérinej kráse vidí jedinú nádej na lepší život. Adriana sama chce málo: vydať sa, mať deti a viesť usporiadanú domácnosť. Matka ju však tlačí k modelovaniu pre maliarov a k známostiam s mužmi, ktorí majú peniaze. Dievča sa najprv bráni, no postupne robí sama so sebou kompromis za kompromisom.',
      'Zaľúbi sa do šoféra Gina, ktorý jej sľúbi manželstvo a ona mu uverí. Keď sa dozvie, že Gino je už dávno ženatý a má dieťa, jej predstava o čistom živote sa zrúti. Práve v tejto chvíli sa vzdá vlastných zásad a začne prijímať peniaze od mužov. Moravia jej rozhodnutie nepodáva ako mravný pád zo slabosti, ale ako logický dôsledok toho, že iná cesta pre ňu neexistovala.',
      'Do jej života vstupujú traja muži, ktorí sú aj tromi obrazmi spoločnosti. Astarita je vysoký policajný úradník fašistického režimu, chorobne posadnutý Adrianou a schopný pre ňu zneužiť svoju moc. Sonzogno je surový, chladný zločinec a vrah, ktorý v nej vzbudzuje strach aj fyzickú závislosť. Mino (Giacomo) je mladý študent a protifašistický intelektuál, jediný, koho Adriana skutočne miluje a v ktorom vidí možnosť vyššieho života.',
      'Mino je pre svoju činnosť zatknutý a pri vyšetrovaní neunesie tlak — prezradí svojich druhov. Hoci ho pustia na slobodu, vedomie zrady ho zlomí a spácha samovraždu. Adriana zistí, že je tehotná, a to s najbrutálnejším z mužov, so Sonzognom. Astarita je zabitý a aj Sonzogno pri úteku pred políciou zahynie, takže z celého kruhu mužov nezostane nikto.',
      'V závere Adriana stojí sama, bez ilúzií a bez opory, no s dieťaťom pod srdcom. Rozhodne sa ho porodiť a vychovať a v duchu ho prijíma za dieťa Minovo, nie vrahovo. Peniaze, ktoré po Minovi zostanú, jej majú pomôcť začať znova. Román sa teda nekončí potrestaním ani vykúpením hrdinky, ale jej tichým, vecným rozhodnutím žiť ďalej — a v tom je jeho neorealistická pravdivosť.',
    ],
    kompozicia:
      'Román je rozdelený na dve časti a je celý rozprávaný v prvej osobe — Adriana rozpráva svoj život ako retrospektívnu spoveď. Rozprávanie je chronologické, no neustále ho prerušujú úvahové pasáže, v ktorých hrdinka analyzuje vlastné pocity a motívy. Kompozíciu udržujú postavy troch mužov, ktoré predstavujú tri podoby spoločnosti: štátnu moc, zločin a intelektuálnu vzburu.',
    postavy: [
      {
        meno: 'Adriana',
        charakteristika:
          'Krásna dievčina z rímskeho predmestia a zároveň rozprávačka románu. Jej túžby sú úplne obyčajné — rodina, deti, poriadok — a práve preto je jej osud taký krutý. Nevysvetľuje sa ako zlá alebo dobrá: je taká, akou ju spoločnosť dovolila byť.',
        rola: 'hlavna',
      },
      {
        meno: 'matka',
        charakteristika:
          'Ovdovená, tvrdá a praktická žena, ktorá v dcérinej kráse vidí jediný kapitál rodiny. Sama ju posúva k mužom a k peniazom a svoje počínanie považuje za starostlivosť.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Gino',
        charakteristika:
          'Šofér, do ktorého sa Adriana zaľúbi a ktorý jej sľubuje manželstvo, hoci je už ženatý. Jeho klamstvo je prvým a rozhodujúcim zlomom v Adrianinom živote.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Astarita',
        charakteristika:
          'Policajný úradník fašistického režimu, posadnutý Adrianou až do poníženia. Predstavuje moc, ktorá je zvonku obávaná a vnútri zbabelá a chorá.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Sonzogno',
        charakteristika:
          'Chladný, silný zločinec a vrah, otec Adrianinho dieťaťa. Je obrazom násilia, ktoré priťahuje a zároveň desí; zahynie pri úteku pred políciou.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Mino (Giacomo)',
        charakteristika:
          'Mladý študent a protifašista, jediná Adrianina skutočná láska a jej nádej na iný život. Pri vyšetrovaní zradí svojich druhov a vinu neunesie — spácha samovraždu.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'vplyv chudoby a spoločenského prostredia na mravnosť človeka',
      'strata ilúzií a dospievanie do sveta bez opory',
      'život pod fašistickou diktatúrou a zneužívanie moci',
      'ľahostajnosť a odcudzenie moderného človeka',
      'materstvo ako posledná istota a zmysel',
    ],
    motivy: [
      'krása ako jediný majetok chudobného dievčaťa',
      'peniaze a kúpená náklonnosť',
      'zrada a výčitka svedomia',
      'rímske predmestie a stiesnená domácnosť',
      'tehotenstvo a nenarodené dieťa',
      'strach z policajného dozoru',
    ],
    maturitneMinimum: [
      'Rimanka je vrcholná ukážka talianskeho neorealizmu: zobrazuje chudobné vrstvy bez idealizovania a bez moralizovania, s dôrazom na sociálne podmienky.',
      'Moravia spája neorealistickú vecnosť s existencialistickou analýzou — hrdinka neustále rozoberá vlastné pohnútky a zisťuje, že si nič nevybrala slobodne.',
      'Rozprávanie v prvej osobe robí z čitateľa dôverníka: Adriana sa nespovedá kňazovi ani súdu, iba sama sebe.',
      'Typická maturitná otázka: vysvetli, ako prostredie ovplyvňuje charakter hlavnej postavy a prečo ju autor neodsudzuje.',
      'Súvislosť: rovnakú tému odcudzenia a ľahostajnosti rozvíja Moravia aj v románoch Ľahostajní a Nuda.',
    ],
    jazyk: [
      'ja-rozprávanie (ich-forma v prvej osobe) — Adriana hovorí sama za seba, takže čitateľ vidí svet výhradne jej očami a jej mravný úsudok prijíma zvnútra',
      'vnútorný monológ a sebaanalýza — hrdinka rozoberá každý svoj pocit, čím sa zo sociálneho románu stáva psychologická sonda',
      'vecný, striedmy opis prostredia — chudobná domácnosť, ulice a zariadenie bytov sú podané bez pátosu, ako presné doklady sociálneho postavenia',
      'kontrast postáv — Astarita, Sonzogno a Mino sú postavení proti sebe ako moc, násilie a intelekt, čím sa ukazuje celá spoločnosť naraz',
      'hovorový a civilný jazyk hlavnej postavy — jednoduchá veta zodpovedá jej vzdelaniu a robí spoveď uveriteľnou',
      'ironické podhodnotenie — najstrašnejšie veci Adriana konštatuje takmer bez vzrušenia, čo zvyšuje ich pôsobivosť',
    ],
    ulohy: [
      {
        id: 'rimanka-k1',
        typ: 'kviz',
        otazka: 'Ktorý literárny smer Rimanka reprezentuje?',
        moznosti: [
          'taliansky neorealizmus',
          'francúzsky nový román',
          'nemecký expresionizmus',
          'anglický kritický realizmus 19. storočia',
        ],
        spravna: 0,
        vysvetlenie:
          'Moravia zobrazuje život chudobných rímskych vrstiev vecne a bez idealizovania, čo je základný postup talianskeho povojnového neorealizmu.',
      },
      {
        id: 'rimanka-k2',
        typ: 'kviz',
        otazka: 'Aký život si Adriana pôvodne pre seba predstavuje?',
        moznosti: [
          'obyčajný život vydanej ženy s deťmi a domácnosťou',
          'kariéru slávnej herečky',
          'život v zahraničí po boku bohatého cudzinca',
          'vstup do kláštora',
        ],
        spravna: 0,
        vysvetlenie:
          'Adrianine túžby sú úplne bežné — práve preto je jej osud taký krutý: spoločnosť jej nedovolí ani ten najskromnejší plán.',
      },
      {
        id: 'rimanka-k3',
        typ: 'kviz',
        otazka: 'Čo spôsobí Minovu samovraždu?',
        moznosti: [
          'pri vyšetrovaní prezradí svojich protifašistických druhov a vinu neunesie',
          'zistí, že Adriana čaká dieťa so Sonzognom',
          'odsúdia ho na smrť a rozhodne sa predbehnúť exekúciu',
          'stratí celý majetok v hazardnej hre',
        ],
        spravna: 0,
        vysvetlenie:
          'Mino fyzicky prežije, no morálne nie. Jeho prípad je existencialistický: človek zodpovedá za svoju voľbu a s vedomím zrady sa nedá žiť.',
      },
      {
        id: 'rimanka-k4',
        typ: 'kviz',
        otazka: 'Ako sa román končí?',
        moznosti: [
          'Adriana sa rozhodne dieťa porodiť a vychovať a začať znova',
          'Adriana zomrie pri pôrode',
          'Adriana sa vydá za Gina a odíde z Ríma',
          'Adrianu zatknú a odsúdia za spoluvinu na vražde',
        ],
        spravna: 0,
        vysvetlenie:
          'Záver nie je ani odsúdením, ani vykúpením hrdinky — je to vecné rozhodnutie žiť ďalej, v ktorom sa materstvo stáva jedinou istotou.',
      },
      {
        id: 'rimanka-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave, čo v románe predstavuje.',
        pary: [
          { vlavo: 'Astarita', vpravo: 'štátna moc fašistického režimu' },
          { vlavo: 'Sonzogno', vpravo: 'surové násilie a zločin' },
          { vlavo: 'Mino', vpravo: 'intelektuálna vzbura a zlyhanie svedomia' },
          { vlavo: 'Gino', vpravo: 'klamstvo, ktoré zničí Adrianine ilúzie' },
          { vlavo: 'matka', vpravo: 'chudoba, ktorá z krásy robí obchod' },
        ],
        vysvetlenie:
          'Muži okolo Adriany nie sú len postavy príbehu — každý z nich zastupuje jednu časť spoločnosti, ktorá o jej živote rozhoduje.',
      },
      {
        id: 'rimanka-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň základné údaje o románe.',
        text: [
          'Román Rimanka vyšiel v roku ',
          { medzera: '1947', napoveda: 'krátko po druhej svetovej vojne' },
          ' a jeho rozprávačkou je ',
          { medzera: 'Adriana', napoveda: 'hlavná postava, dievča z rímskeho predmestia' },
          '. Dej sa odohráva v meste ',
          { medzera: 'Rím', napoveda: 'hlavné mesto Talianska' },
          ' v období fašistickej diktatúry.',
        ],
        vysvetlenie:
          'Ja-rozprávanie hlavnej postavy je kľúčové: čitateľ prijíma jej pohľad na svet a nemá k dispozícii žiadny vonkajší mravný sudca.',
      },
    ],
  },
  {
    id: 'mur',
    nazov: 'Múr',
    autorId: 'sartre',
    rocnik: 4,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'existencialistická novela (titulná novela zbierky poviedok)',
    forma: 'próza — krátka novela s ja-rozprávaním',
    rokVydania: '1939',
    obdobie: 'existencializmus',
    miestoACas: 'Španielsko počas občianskej vojny (1936 – 1939), väzenská pivnica a nemocničný dvor, jedna noc a nasledujúce ráno',
    anotacia:
      'Novela o troch zadržaných, ktorí čakajú vo väzenskej pivnici na ranné zastrelenie. Sartre v nej skúma, čo sa deje s človekom, keď vie, že mu zostáva pár hodín života.',
    obsah: [
      'Traja muži sú po výsluchu zatvorení do väzenskej pivnice a dozvedia sa, že ráno ich zastrelia. Rozprávačom je Pablo Ibbieta, španielsky antifašista; s ním sú Ír Tom Steinbock a mladučký Juan Mirbal, ktorý sa bráni tým, že nič neurobil. Do pivnice s nimi posadia belgického lekára, ktorý ich má „sprevádzať“, no v skutočnosti len chladne pozoruje, ako sa odsúdení správajú. Celú noc tak v jednom priestore trvá čakanie, ktoré je horšie než samotná smrť.',
      'Sartre podrobne zaznamenáva, ako sa telo odsúdených mení na cudziu vec. Tom nahlas rozoberá, čo s človekom urobia kulky, a nedokáže sa zastaviť. Pablo sa nekontrolovane potí, hoci v pivnici je zima, a zisťuje, že o vlastnom tele už nerozhoduje. Chlapec Juan len plače a nedokáže prehovoriť. Nikto z nich nedokáže „zomrieť dôstojne“, pretože dôstojnosť je len predstava tých, ktorí majú pred sebou budúcnosť.',
      'Pablo si uvedomuje, že všetko, čím bol, stratilo zmysel: jeho vzťahy, spomienky, láska aj politické presvedčenie sú náhle vzdialené a neplatné. Prestane mu záležať aj na živote ako takom, hoci ešte pred niekoľkými hodinami bol ochotný za svoju vec umrieť. Medzi ním a svetom vzniká akýsi múr — odtiaľ názov novely. Múr je zároveň úplne konkrétny: je to stena, pred ktorou sa strieľa.',
      'Ráno odvedú Toma a Juana a Pabla nechajú nabok, pretože od neho chcú získať úkryt veliteľa Ramóna Grisa. Pablo je pevne rozhodnutý neprezradiť ho, a preto si vymyslí posmešnú lož: povie, že Gris sa skrýva na cintoríne v hrobárskej búdke. Robí to zo vzdoru, s pocitom, že si z vyšetrovateľov robí žarty a že jeho priateľ je bezpečne u svojich bratrancov. Vojaci odchádzajú na cintorín hľadať.',
      'Keď sa vrátia, Pabla nezastrelia — Grisa totiž našli presne tam, kde ho Pablo poslal. Gris sa medzitým s bratrancami pohádal a naozaj sa ukryl na cintoríne, kde ho pri prestrelke zabili. Pablo sa dozvie, že práve on je príčinou smrti človeka, ktorého chcel zachrániť, a že si tým nechtiac kúpil vlastný život. Novela sa končí jeho neovládateľným smiechom — absurdným, pretože všetko, čo urobil, sa obrátilo na svoj presný opak.',
    ],
    kompozicia:
      'Krátka, pevne zovretá novela s jedinou dejovou líniou a klasickou jednotou miesta a času: jedna noc a jedno ráno, pivnica a dvor. Rozprávanie je v prvej osobe minulého času, plné vnútorných pocitov a telesných detailov. Titulná novela stojí na začiatku rovnomennej zbierky piatich poviedok a celý text je vystavaný na pointe — nečakanom obrate v posledných vetách.',
    postavy: [
      {
        meno: 'Pablo Ibbieta',
        charakteristika:
          'Španielsky antifašista, rozprávač novely. Rozhodne sa nezradiť svojho veliteľa a svojou vymyslenou lžou ho práve tým vydá na smrť. Je ukážkou existencialistickej tézy, že človek je zodpovedný za následky svojich volieb, aj keď ich vôbec nepredvídal.',
        rola: 'hlavna',
      },
      {
        meno: 'Tom Steinbock',
        charakteristika:
          'Ír zatvorený s Pablom, ktorý sa nedokáže prestať nahlas rozprávať o tom, čo urobia kulky s jeho telom. Predstavuje strach, ktorý sa vylieva slovami.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Juan Mirbal',
        charakteristika:
          'Ešte skoro chlapec, ktorý tvrdí, že je nevinný a zatkli ho len pre brata. Celú noc iba plače — je obrazom bezmocnosti pred absurdnou mocou.',
        rola: 'vedlajsia',
      },
      {
        meno: 'belgický lekár',
        charakteristika:
          'Muž, ktorého k odsúdeným posadia údajne na pomoc, no ktorý ich len pozoruje a robí si poznámky. Reprezentuje chladný, neúčastný pohľad zvonku na cudzie umieranie.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Ramón Gris',
        charakteristika:
          'Veliteľ, ktorého úkryt majú vyšetrovatelia z Pabla vytrhnúť. V novele nevystupuje priamo — zabijú ho presne na mieste, ktoré si Pablo vymyslel ako žart.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'čakanie na smrť a rozpad ľudskej dôstojnosti',
      'sloboda voľby a zodpovednosť za jej nepredvídané následky',
      'absurdita a náhoda, ktorá zosmiešňuje ľudské plány',
      'odcudzenie človeka od vlastného tela',
      'hrdinstvo a jeho skutočná cena',
    ],
    motivy: [
      'múr ako hranica medzi životom a smrťou aj ako stena na strieľanie',
      'nočná väzenská pivnica',
      'studený pot, ktorý odsúdený nedokáže zastaviť',
      'cintorín a hrobárska búdka',
      'chladný pozorovateľ s poznámkami',
      'smiech v poslednej vete',
    ],
    maturitneMinimum: [
      'Múr je modelová ukážka existencializmu: človek je „odsúdený na slobodu“ — musí sa rozhodnúť, hoci nepozná následky, a zodpovednosť nesie aj tak.',
      'Základ pointy je absurdný obrat: hrdina koná hrdinsky, no výsledkom je smrť práve toho, koho chránil.',
      'Sartre tu ukazuje aj telesnosť strachu: dôstojná smrť je predstava živých, skutočné čakanie na smrť telo rozloží.',
      'Titulná novela pochádza z rovnomennej zbierky poviedok (1939) a je najznámejšou Sartrovou krátkou prózou.',
      'Typická maturitná otázka: vysvetli, v čom je Pablovo konanie absurdné a ako sa v novele uplatňuje existencialistická téza o slobode a zodpovednosti.',
    ],
    jazyk: [
      'ja-rozprávanie — Pablo hovorí sám, takže čitateľ prežíva noc pred smrťou zvnútra a nemá odstup',
      'naturalistická telesnosť opisu — pot, chlad, zápach a chvenie sú zaznamenané presne, čím sa z filozofickej tézy stáva fyzický zážitok',
      'symbol múru — jedno slovo znamená stenu na exekúciu aj neprekročiteľnú hranicu medzi odsúdeným a ostatným svetom',
      'úsporný, vecný dialóg — replikami bez pátosu sa ukazuje, že v krajnej situácii sa veľké slová nedajú vysloviť',
      'pointa (nečakaný obrat v závere) — celý text smeruje k jednej vete, ktorá zmysel predchádzajúceho konania obráti naopak',
      'absurdný smiech ako záverečné gesto — namiesto vysvetlenia dostáva čitateľ reakciu, ktorú nemožno rozumovo uzavrieť',
    ],
    ulohy: [
      {
        id: 'mur-k1',
        typ: 'kviz',
        otazka: 'V akej historickej situácii sa novela Múr odohráva?',
        moznosti: [
          'počas španielskej občianskej vojny',
          'počas prvej svetovej vojny na západnom fronte',
          'počas francúzskej revolúcie',
          'počas nemeckej okupácie Paríža',
        ],
        spravna: 0,
        vysvetlenie:
          'Pablo Ibbieta je španielsky antifašista zadržaný počas občianskej vojny; historické pozadie dáva absurdnej situácii konkrétnu politickú tvár.',
      },
      {
        id: 'mur-k2',
        typ: 'kviz',
        otazka: 'Prečo Pablo povie vyšetrovateľom, že Ramón Gris sa skrýva na cintoríne?',
        moznosti: [
          'chce si z nich urobiť žart a je presvedčený, že Gris je inde',
          'chce si zachrániť život a Grisa vedome zradí',
          'je k tomu donútený mučením',
          'nevie, o kom sa ho pýtajú, a povie prvé miesto, ktoré mu prišlo na um',
        ],
        spravna: 0,
        vysvetlenie:
          'Pablo je rozhodnutý nezradiť. Lož je vzdor — a práve to robí koniec absurdným: hrdinské rozhodnutie privedie Grisa na smrť.',
      },
      {
        id: 'mur-k3',
        typ: 'kviz',
        otazka: 'Čím sa novela končí?',
        moznosti: [
          'Pabla nezastrelia, dozvie sa, že Gris bol na cintoríne zabitý, a prepukne v smiech',
          'Pabla zastrelia spolu s Tomom a Juanom',
          'Pablo z väzenia utečie a pripojí sa k Grisovi',
          'Pablo sa prizná a požiada o milosť',
        ],
        spravna: 0,
        vysvetlenie:
          'Absurdný obrat je jadrom novely: vymyslená lož sa ukáže ako pravda. Smiech v závere nie je veselosť, ale reakcia na nezmyselnosť sveta.',
      },
      {
        id: 'mur-k4',
        typ: 'kviz',
        otazka: 'Čo v novele symbolizuje múr?',
        moznosti: [
          'stenu na exekúciu a zároveň neprekročiteľnú hranicu medzi odsúdeným a svetom',
          'hradbu mesta, ktoré odsúdení bránili',
          'hranicu medzi Španielskom a Francúzskom',
          'stenu pivnice, ktorú sa väzni pokúšajú prekopať',
        ],
        spravna: 0,
        vysvetlenie:
          'Názov má dvojaký význam: konkrétnu stenu, pred ktorou sa strieľa, a odcudzenie — Pablo cíti, že medzi ním a všetkým živým vyrástol múr.',
      },
      {
        id: 'mur-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave jej postoj v noci pred exekúciou.',
        pary: [
          { vlavo: 'Pablo Ibbieta', vpravo: 'rozprávač, ktorý sa rozhodne nezradiť' },
          { vlavo: 'Tom Steinbock', vpravo: 'nahlas rozoberá, čo urobia kulky s telom' },
          { vlavo: 'Juan Mirbal', vpravo: 'takmer chlapec, ktorý iba plače' },
          { vlavo: 'belgický lekár', vpravo: 'chladný pozorovateľ cudzieho umierania' },
          { vlavo: 'Ramón Gris', vpravo: 'hľadaný veliteľ, ktorý zahynie na cintoríne' },
        ],
        vysvetlenie:
          'Každá postava predstavuje inú reakciu na blízkosť smrti — slovo, plač, mlčanie a nezúčastnený pohľad zvonku.',
      },
      {
        id: 'mur-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň údaje o novele.',
        text: [
          'Rozprávačom novely Múr je ',
          { medzera: 'Pablo Ibbieta', napoveda: 'španielsky antifašista' },
          ', ktorý má prezradiť úkryt veliteľa ',
          { medzera: 'Ramón Gris', napoveda: 'muž, ktorého chce Pablo chrániť' },
          '. Ako posmešnú lož uvedie ako úkryt ',
          { medzera: 'cintorín', napoveda: 'miesto, kde Grisa naozaj nájdu' },
          '.',
        ],
        vysvetlenie:
          'Lož sa náhodou premení na pravdu — v tom je absurdita: Pablove hrdinské rozhodnutie má presne opačný následok, než akým ho zamýšľal.',
      },
    ],
  },
  {
    id: 'ziarlivost',
    nazov: 'Žiarlivosť',
    autorId: 'robbe-grillet',
    rocnik: 4,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'antiromán (nový román)',
    forma: 'próza — krátky román bez tradičného deja, zložený z opakovaných opisných scén',
    rokVydania: '1957',
    obdobie: 'nový román (nouveau roman)',
    miestoACas: 'banánová plantáž v tropickej kolónii, neurčené miesto a čas; časová os je zámerne rozbitá',
    anotacia:
      'Román, v ktorom sa nič „nestane“: čitateľ dostáva iba presné opisy domu, plantáže a dvoch ľudí, ktoré sa stále znovu opakujú. Žiarlivosť v ňom nie je vyslovená, iba vyplýva z toho, čo a ako sa opisuje.',
    obsah: [
      'Text je zložený z opisov domu na banánovej plantáži, terasy, stoličiek, okenných žalúzií a radov banánovníkov, ktoré sa dajú spočítať. Vystupujú v ňom len dve pomenované osoby: žena označovaná iba začiatočným písmenom A… a sused Franck, ktorý k nim pravidelne prichádza na večeru. Tretia prítomnosť — manžel — nie je nikdy pomenovaná ani opísaná, no všetko vidíme z jeho pohľadu. Je prítomný napríklad tým, že na stole je vždy o jedno prestretie viac, než koľko osôb text spomína.',
      'Namiesto deja sa vracajú stále tie isté scény, vždy trochu inak: Franck a A… sedia na terase, rozprávajú sa o románe, ktorý obaja čítali, A… si češe vlasy, Franck odveze A… do mesta nakúpiť. Rozdrvená stonožka na stene jedálne sa objaví mnohokrát — raz ako malá škvrna, inokedy ako veľká rozmazaná stopa, raz ju zabíja Franck, inokedy je už dávno zaschnutá. Opakovanie s odchýlkami je základný postup: nie je jasné, ktorá verzia sa naozaj stala a ktorá je iba predstava.',
      'Jediná udalosť, ktorú možno z opisov vyčítať, je cesta do mesta, z ktorej sa A… a Franck nevrátia v ten istý deň, ale až nasledujúce ráno — údajne pre poruchu auta. Táto zámlka je jadrom celej knihy. Text ju nikdy nevysvetlí, iba k nej znovu a znovu vracia rozprávača, ktorý si dopĺňa možné podoby toho, čo sa mohlo stať. Presnosť opisu tak funguje ako maska pre posadnutosť.',
      'Román nemá záver v obvyklom zmysle — nič sa nevyrieši, nikto sa neprizná a nikto nie je potrestaný. Kniha sa uzatvorí tým, že sa opisné motívy zopakujú ešte raz a čitateľ zostane v tej istej situácii ako na začiatku. Práve to je Robbe-Grilletov zámer: čitateľ nemá dostať vysvetlenie, ale sám prežiť kruhové, neukojiteľné myslenie žiarlivca. Význam diela teda netvorí príbeh, ale spôsob, akým je svet zaznamenaný.',
    ],
    kompozicia:
      'Kompozícia je kruhová a repetitívna: text sa skladá z opisných sekvencií, ktoré sa opakujú s malými zmenami, bez kapitol s dejovým postupom a bez chronológie. Neexistuje spoľahlivý časový poriadok — minulosť, prítomnosť a predstava sú podané rovnakým vecným tónom. Rozprávač je „prázdne miesto“: hovorí v tretej osobe o veciach, ale sám seba nikdy nepomenuje. Francúzsky názov La Jalousie znamená naraz žiarlivosť aj okennú žalúziu, cez ktorú sa dá nepozorovane pozerať.',
    postavy: [
      {
        meno: 'nepomenovaný manžel (rozprávač)',
        charakteristika:
          'Nikdy nevystúpi ako osoba: nemá meno, tvár ani opis, existuje len ako pohľad, ktorým je celý text vedený. Jeho žiarlivosť nie je nikdy vyslovená — prezrádza ju to, čo si všíma a čo neustále opakuje.',
        rola: 'hlavna',
      },
      {
        meno: 'A…',
        charakteristika:
          'Manželka, označovaná iba začiatočným písmenom. Opisuje sa vždy zvonku — jej vlasy, gestá, poloha na stoličke — a nikdy sa nedozvieme, čo si myslí. Je predmetom pozorovania, nie psychologickou postavou.',
        rola: 'hlavna',
      },
      {
        meno: 'Franck',
        charakteristika:
          'Sused, majiteľ blízkej plantáže, ktorý prichádza na večere a odvezie A… do mesta. Nie je jasné, či je skutočne milencom, alebo iba terčom podozrenia.',
        rola: 'hlavna',
      },
      {
        meno: 'rozdrvená stonožka',
        charakteristika:
          'Opakujúci sa motív, ktorý má v texte väčšiu váhu než mnohé ľudské gestá. Jej škvrna sa pri každom výskyte trochu mení, čím dokazuje, že opis nie je objektívny záznam, ale výtvor posadnutej pamäti.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'žiarlivosť ako neukojiteľné, kruhové myslenie',
      'nedôveryhodnosť ľudského pozorovania a pamäti',
      'kríza tradičného románu a jeho postáv',
      'odcudzenie a neschopnosť dorozumieť sa',
    ],
    motivy: [
      'okenné žalúzie, cez ktoré sa dá pozerať nepozorovane',
      'rozdrvená stonožka na stene',
      'rady banánovníkov a ich počítanie',
      'prestretý stôl s jedným tanierom naviac',
      'cesta do mesta a nočné omeškanie',
      'A… česajúca si vlasy pred zrkadlom',
    ],
    maturitneMinimum: [
      'Žiarlivosť je vzorová ukážka nového románu (nouveau roman): odmieta dej, psychológiu postáv a vševediaceho rozprávača a ponecháva iba presný opis povrchu vecí.',
      'Robbe-Grillet svoj program vyložil v esejach Za nový román — román podľa neho nemá vysvetľovať svet, ale zaznamenávať ho.',
      'Kľúčový je postup opakovania s variáciami: tie isté scény sa vracajú v odlišných podobách, takže čitateľ nikdy nezistí, čo sa naozaj stalo.',
      'Hlavná postava je „prázdne miesto“ — rozprávač nemá meno ani telo, existuje len ako uhol pohľadu; slovo v názve znamená po francúzsky aj okennú žalúziu.',
      'Typická maturitná otázka: vysvetli znaky nového románu na diele Žiarlivosť a porovnaj ich s tradičným realistickým románom.',
    ],
    jazyk: [
      'takmer technický, geometrický opis — presné rozmery, počty a polohy predmetov vytvárajú dojem objektivity, ktorá je v skutočnosti maskou posadnutosti',
      'opakovanie s variáciami — tá istá scéna sa vracia v pozmenenej podobe, čím sa ruší istota, že opisované sa vôbec stalo',
      'absencia psychologizovania — o pocitoch sa nikdy nehovorí; žiarlivosť čitateľ odvodí len z toho, čo si rozprávač všíma',
      'nepomenovanie a skratka (A…) — namiesto mena dostane postava iba iniciálu, čím sa z nej stáva predmet pozorovania',
      'symbolická dvojznačnosť názvu — La Jalousie znamená žiarlivosť aj žalúziu, teda pocit aj nástroj skrytého pozorovania',
      'vynechanie (elipsa) rozhodujúcej udalosti — nočné omeškanie sa nikdy neopíše, prázdne miesto v texte nesie celý význam',
      'neurčitosť času — minulé, prítomné a vymyslené sú podané tým istým tónom, takže časová os sa rozpadá',
    ],
    ulohy: [
      {
        id: 'ziarlivost-k1',
        typ: 'kviz',
        otazka: 'Ktorý smer Žiarlivosť reprezentuje?',
        moznosti: [
          'nový román (nouveau roman)',
          'magický realizmus',
          'socialistický realizmus',
          'naturalizmus',
        ],
        spravna: 0,
        vysvetlenie:
          'Robbe-Grillet je hlavným predstaviteľom nového románu, ktorý odmieta dej, psychológiu postáv a vševediaceho rozprávača.',
      },
      {
        id: 'ziarlivost-k2',
        typ: 'kviz',
        otazka: 'Ako je v románe označená hlavná ženská postava?',
        moznosti: [
          'iba začiatočným písmenom A…',
          'menom Adriana',
          'ako „pani domu“',
          'nie je v románe prítomná',
        ],
        spravna: 0,
        vysvetlenie:
          'Namiesto mena dostáva postava iba iniciálu. Tým sa z nej stáva predmet pozorovania, nie psychologicky vykreslený človek.',
      },
      {
        id: 'ziarlivost-k3',
        typ: 'kviz',
        otazka: 'Prečo sa v texte stále vracia motív rozdrvenej stonožky?',
        moznosti: [
          'pri každom opakovaní sa mení, čím sa odhaľuje nespoľahlivosť pozorovania a pamäti',
          'je to kľúč k vyriešeniu zločinu',
          'symbolizuje tropickú prírodu, ktorá plantáž pohltí',
          'je to znak, ktorý si postavy tajne dávajú',
        ],
        spravna: 0,
        vysvetlenie:
          'Škvrna má raz inú veľkosť, raz iného pôvodcu. Opakovanie s variáciami dokazuje, že „objektívny“ opis je výtvorom posadnutej mysle.',
      },
      {
        id: 'ziarlivost-k4',
        typ: 'kviz',
        otazka: 'Ako sa v románe prezrádza prítomnosť žiarlivého manžela?',
        moznosti: [
          'nepriamo — napríklad tretím prestretím na stole a tým, čo si pohľad všíma',
          'priamymi vnútornými monológmi o jeho pocitoch',
          'listami, ktoré píše svojej žene',
          'v románe vôbec nie je prítomný',
        ],
        spravna: 0,
        vysvetlenie:
          'Rozprávač sa nikdy nepomenuje. Existuje len ako uhol pohľadu a ako drobné stopy v opise — napríklad o jedno prestretie viac.',
      },
      {
        id: 'ziarlivost-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k prvku diela jeho význam.',
        pary: [
          { vlavo: 'okenná žalúzia', vpravo: 'skryté pozorovanie a dvojzmysel názvu' },
          { vlavo: 'rozdrvená stonožka', vpravo: 'nespoľahlivosť pozorovania a pamäti' },
          { vlavo: 'A…', vpravo: 'postava zredukovaná na iniciálu a vonkajší opis' },
          { vlavo: 'nočné omeškanie z mesta', vpravo: 'vynechaná udalosť, ktorá nesie celý význam' },
          { vlavo: 'rady banánovníkov', vpravo: 'geometrický opis namiesto deja' },
        ],
        vysvetlenie:
          'V novom románe nesú význam predmety a spôsob ich opisu, nie dejové udalosti alebo vysvetlené pocity postáv.',
      },
      {
        id: 'ziarlivost-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň chýbajúce údaje o románe.',
        text: [
          'Román Žiarlivosť vyšiel v roku ',
          { medzera: '1957', napoveda: 'druhá polovica 50. rokov' },
          ' a patrí k smeru ',
          { medzera: 'nový román', napoveda: 'po francúzsky nouveau roman' },
          '. Susedovi, ktorý chodí na plantáž na večere, sa hovorí ',
          { medzera: 'Franck', napoveda: 'muž, o ktorom rozprávač pochybuje' },
          '.',
        ],
        vysvetlenie:
          'Francúzsky názov La Jalousie znamená zároveň žiarlivosť a okennú žalúziu — teda pocit aj nástroj tajného pozorovania.',
      },
    ],
  },
  {
    id: 'cakanie-na-godota',
    nazov: 'Čakanie na Godota',
    autorId: 'beckett',
    rocnik: 4,
    druh: 'drama',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'absurdná dráma (tragikomédia)',
    forma: 'dráma — dve dejstvá, dialóg bez dejového vývoja',
    rokVydania: '1953',
    obdobie: 'absurdná dráma, existencializmus',
    miestoACas: 'vidiecka cesta s jediným holým stromom, podvečer; miesto ani čas nie sú určené, dejstvá oddeľuje iba noc',
    anotacia:
      'Dvaja tuláci čakajú pri ceste na niekoho, kto sa nazýva Godot a kto nikdy nepríde. Najznámejšia hra absurdnej drámy, v ktorej sa „nestane nič — dvakrát“.',
    obsah: [
      'Na prázdnej vidieckej ceste, pri ktorej stojí jediný holý strom, sa stretávajú dvaja tuláci — Vladimír (Didi) a Estragon (Gogo). Čakajú na muža, ktorého nazývajú Godot a ktorý im mal určiť schôdzku práve tu. Nevedia však ani presne kedy, ani na ktorom mieste, ani prečo naň čakajú; nie sú si istí, či ho vôbec poznajú. Aby zaplnili čas, hádajú sa, spomínajú, uvažujú o samovražde na strome a hneď od nej odstúpia, pretože im nefunguje ani povraz.',
      'Do ich čakania vstúpi pár Pozzo a Lucky. Pozzo je hlučný, panovačný majiteľ, ktorý vedie Luckyho na povraze uviazanom okolo krku ako zviera. Lucky nesie ťažké batožiny a mlčí, no na Pozzov rozkaz „Mysli!“ prednesie dlhý, rozpadnutý monológ zložený z útržkov vedeckých a náboženských fráz, ktorý nemá zmysel a končí sa tým, že mu ho nasilu prerušia. Tento výstup je najsilnejším obrazom hry: ľudské myslenie sa zmenilo na hromadu prázdnych slov.',
      'Po ich odchode prichádza chlapec, ktorý oznámi, že Godot dnes nepríde, ale príde zajtra určite. Prvé dejstvo sa končí tým, že tuláci sa rozhodnú odísť, no z miesta sa nepohnú. Druhé dejstvo sa začína na tom istom mieste nasledujúci deň a je takmer opakovaním prvého — strom má len niekoľko listov, ktoré sú jediným dokladom, že čas plynie. Estragon si nepamätá nič z predošlého dňa a Vladimír mu to musí pripomínať.',
      'Pozzo a Lucky prejdú znova, ale sú zmenení: Pozzo je slepý a Lucky onemel. Pozzo tvrdí, že o čase a o včerajšku nič nevie, a padne na zem; tuláci mu pomáhajú vstať a pritom sami padajú. Opäť prichádza chlapec s tou istou správou — Godot dnes nepríde, príde zajtra. Vladimír sa ho pýta, či tu už nebol, a chlapec to popiera, čím sa ruší aj posledná istota, že sa niečo naozaj stalo.',
      'V závere druhého dejstva sa tuláci znovu chystajú obesiť na strome, ale Estragonovi praskne šnúrka od nohavíc a od plánu odídu. Vladimír navrhne, aby zajtra prišli s poriadnym povrazom. Hra sa uzatvára rovnako ako prvé dejstvo: „Tak čo, ideme?“ — „Áno, poďme.“ — a nikto sa nepohne. Godot nepríde nikdy a hra sa nekončí rozuzlením, ale rovnakým stavom, v akom začala.',
    ],
    kompozicia:
      'Dve dejstvá, ktoré sú takmer zrkadlovým opakovaním — druhé dejstvo prináša tie isté postavy, ten istý strom a tú istú správu chlapca, iba s malými zmenami (listy na strome, Pozzova slepota, Luckyho onemenie). Kompozícia je teda kruhová, bez zápletky, vrcholu a rozuzlenia; namiesto vývoja stojí opakovanie. Hru rámcuje dvakrát tá istá výzva na odchod, po ktorej sa nikto nepohne. Beckett ju sám označil za tragikomédiu v dvoch dejstvách.',
    postavy: [
      {
        meno: 'Vladimír (Didi)',
        charakteristika:
          'Z dvojice tulákov ten uvažujúcejší — pamätá si minulosť, kladie otázky a stará sa o Estragona. Udržuje čakanie pri živote, pretože bez neho by ich existencia nemala vôbec žiadny obsah.',
        rola: 'hlavna',
      },
      {
        meno: 'Estragon (Gogo)',
        charakteristika:
          'Telesnejší a nepamätlivejší tulák, ktorý si stále nepamätá, čo bolo včera, a trápia ho boľavé nohy. Opakovane navrhuje odchod alebo samovraždu, no vždy zostane. Tvorí s Vladimírom neoddeliteľnú, vzájomne závislú dvojicu.',
        rola: 'hlavna',
      },
      {
        meno: 'Pozzo',
        charakteristika:
          'Panovačný majiteľ, ktorý vodí Luckyho na povraze a rád rečni pred publikom. V druhom dejstve oslepne a stratí pamäť — moc je teda takisto pominuteľná a slepá ako všetko ostatné.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Lucky',
        charakteristika:
          'Pozzov sluha vedený na povraze okolo krku, nemý nosič batožín. Na rozkaz prednesie rozpadnutý monológ z útržkov vedy a viery — obraz myslenia, ktoré stratilo zmysel. V druhom dejstve úplne onemie.',
        rola: 'vedlajsia',
      },
      {
        meno: 'chlapec',
        charakteristika:
          'Posol, ktorý v oboch dejstvách oznámi, že Godot dnes nepríde, ale príde zajtra. Tvrdí, že tu ešte nikdy nebol, čím ruší aj poslednú istotu o plynutí času.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Godot',
        charakteristika:
          'Postava, ktorá nikdy nevystúpi na scénu a o ktorej sa nič bezpečné nevie. Môže znamenať Boha, zmysel, vykúpenie alebo iba prázdnu nádej; Beckett akýkoľvek jednoznačný výklad odmietal.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'absurdita ľudskej existencie a čakanie bez zmyslu',
      'plynutie času, strata pamäti a nemožnosť overiť minulosť',
      'nádej, ktorá sa nikdy nenaplní, a napriek tomu drží človeka pri živote',
      'rozpad jazyka a komunikácie',
      'závislosť ľudí od seba navzájom — dvojica a vzťah pán – sluha',
    ],
    motivy: [
      'holý strom, na ktorom má visieť povraz',
      'povraz okolo Luckyho krku',
      'boľavé nohy a priúzka obuv',
      'klobúk, ktorý si postavy podávajú a menia',
      'opakovaná správa chlapca „zajtra určite“',
      'mrkva a repa ako jediné jedlo',
    ],
    maturitneMinimum: [
      'Čakanie na Godota je najznámejšia hra absurdnej drámy — ide o antidrámu: chýba dej, zápletka, vývoj postáv aj rozuzlenie.',
      'Slávna charakteristika hry hovorí, že sa v nej nestane nič — a to dvakrát; druhé dejstvo je opakovaním prvého s nepatrnými zmenami.',
      'Godot nikdy nepríde a jeho význam je zámerne otvorený (Boh, zmysel života, vykúpenie, prázdna nádej); autor jednoznačný výklad odmietal.',
      'Luckyho monológ je vrchol hry: jazyk sa rozpadá na útržky fráz, čím Beckett ukazuje, že reč už neslúži na dorozumenie.',
      'K absurdnej dráme patria aj E. Ionesco (Plešatá speváčka) a S. Mrożek; slovenským príbuzným javom sú modelové drámy a malé javiskové formy.',
      'Typická maturitná otázka: vysvetli znaky absurdnej drámy na hre Čakanie na Godota a porovnaj ju s klasickou drámou.',
    ],
    jazyk: [
      'absurdný dialóg — repliky sa točia v kruhu, opakujú sa a nikam nevedú, čím Beckett vyjadruje bezvýchodiskovosť ľudského čakania',
      'opakovanie replík a situácií — tá istá otázka, tá istá odpoveď a tá istá výzva na odchod ukazujú, že čas neprináša zmenu',
      'rozpad jazyka v Luckyho monológu — hromadenie vedeckých a náboženských útržkov bez syntaktického poriadku dokazuje, že reč prestala niesť zmysel',
      'tragikomický kontrast — klaunské gagy s klobúkmi, obuvou a nohavicami stoja vedľa otázok o Bohu a smrti, takže smiech a hrôza vyznievajú naraz',
      'symbol — holý strom, povraz a Godot samotný nemajú jediný pevný význam, sú zámerne otvorené výkladu',
      'redukcia scény a rekvizít na minimum — cesta, strom, kameň; prázdny priestor je sám prostriedkom, vyjadruje prázdnotu existencie',
      'grotesknosť vzťahu pán – sluha — povraz okolo krku je doslovný obraz podriadenosti, ktorý sa nekomentuje, iba ukazuje',
    ],
    ulohy: [
      {
        id: 'cakanie-na-godota-k1',
        typ: 'kviz',
        otazka: 'Ako sa volajú dvaja tuláci, ktorí na Godota čakajú?',
        moznosti: [
          'Vladimír a Estragon',
          'Pozzo a Lucky',
          'Didi a Pozzo',
          'Godot a Lucky',
        ],
        spravna: 0,
        vysvetlenie:
          'Vladimír (Didi) a Estragon (Gogo) tvoria neoddeliteľnú dvojicu; Pozzo a Lucky sú pár, ktorý ich čakanie iba na chvíľu preruší.',
      },
      {
        id: 'cakanie-na-godota-k2',
        typ: 'kviz',
        otazka: 'Čo je hlavným znakom kompozície hry?',
        moznosti: [
          'druhé dejstvo takmer presne opakuje prvé, takže kompozícia je kruhová',
          'päť dejstiev s klasickou expozíciou, kolíziou a katastrofou',
          'chronologické rozprávanie od detstva postáv po ich smrť',
          'retrospektíva, v ktorej sa vysvetlí, kto Godot je',
        ],
        spravna: 0,
        vysvetlenie:
          'Hra nemá zápletku ani rozuzlenie. Druhé dejstvo prináša tie isté postavy a tú istú správu chlapca, čím sa dokazuje, že čas neprináša zmenu.',
      },
      {
        id: 'cakanie-na-godota-k3',
        typ: 'kviz',
        otazka: 'Čím je významný Luckyho monológ?',
        moznosti: [
          'jazyk sa v ňom rozpadá na útržky fráz bez zmyslu',
          'Lucky v ňom prezradí, kto je Godot',
          'je to jediná veršovaná časť hry',
          'Lucky v ňom vyzve Pozza na vzburu',
        ],
        spravna: 0,
        vysvetlenie:
          'Na rozkaz „Mysli!“ Lucky prednesie hromadu vedeckých a náboženských útržkov. Je to obraz myslenia a reči, ktoré prestali niesť zmysel.',
      },
      {
        id: 'cakanie-na-godota-k4',
        typ: 'kviz',
        otazka: 'Ako sa hra končí?',
        moznosti: [
          'tuláci sa dohodnú, že idú, ale z miesta sa nepohnú',
          'Godot príde a vysvetlí im ich úlohu',
          'obaja tuláci sa na strome obesia',
          'Pozzo ich vezme so sebou ako sluhov',
        ],
        spravna: 0,
        vysvetlenie:
          'Záverečné repliky o odchode sa nikdy nepremenia na čin. Godot nikdy nepríde a situácia zostáva presne taká, aká bola na začiatku.',
      },
      {
        id: 'cakanie-na-godota-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave alebo motívu jeho význam v hre.',
        pary: [
          { vlavo: 'Godot', vpravo: 'nádej, ktorá nikdy nepríde; zámerne otvorený symbol' },
          { vlavo: 'Lucky', vpravo: 'rozpad ľudského myslenia a reči' },
          { vlavo: 'Pozzo', vpravo: 'moc, ktorá v druhom dejstve oslepne' },
          { vlavo: 'holý strom', vpravo: 'jediná rekvizita scény a možné miesto samovraždy' },
          { vlavo: 'chlapec', vpravo: 'posol s opakovanou správou „zajtra určite“' },
        ],
        vysvetlenie:
          'V absurdnej dráme nesú význam symboly a situácie, nie dejové udalosti — každý prvok scény je nositeľom myšlienky o prázdnote existencie.',
      },
      {
        id: 'cakanie-na-godota-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň údaje o hre.',
        text: [
          'Hra Čakanie na Godota mala premiéru a vyšla v roku ',
          { medzera: '1953', napoveda: 'začiatok 50. rokov 20. storočia' },
          ' a patrí k smeru ',
          { medzera: 'absurdná dráma', napoveda: 'antidráma bez deja a rozuzlenia' },
          '. Pozzo vodí na povraze svojho sluhu ',
          { medzera: 'Lucky', napoveda: 'nosič batožín, ktorý prednesie rozpadnutý monológ' },
          '.',
        ],
        vysvetlenie:
          'Povraz okolo Luckyho krku je doslovný obraz podriadenosti; v druhom dejstve Pozzo oslepne a Lucky onemie, čím sa ich vzťah ešte viac zgroteskní.',
      },
      {
        id: 'cakanie-na-godota-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň, čo je pre stavbu hry typické.',
        text: [
          'Hra má ',
          { medzera: 'dve', napoveda: 'číslovka slovom' },
          ' dejstvá a jedinou výraznou rekvizitou na scéne je ',
          { medzera: 'strom', napoveda: 'holý, v druhom dejstve s niekoľkými listami' },
          '. Chlapec zopakuje, že Godot príde ',
          { medzera: 'zajtra', napoveda: 'stále odkladaný termín' },
          '.',
        ],
        vysvetlenie:
          'Niekoľko listov na strome je jediným dokladom, že čas plynie — inak sa druhé dejstvo od prvého takmer nelíši.',
      },
    ],
  },
  {
    id: 'beat-generation',
    nazov: 'Beat generation (výber)',
    autorText: 'L. Ferlinghetti, A. Ginsberg, J. Kerouac, Ch. Bukowski',
    rocnik: 4,
    druh: 'poezia',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'lyrika — voľný verš, poéma, básnický protest',
    forma: 'poézia — dlhý voľný verš bez rýmu, hovorová a rytmizovaná reč',
    rokVydania: '50. a 60. roky 20. stor. (Kvílenie 1956, Na cestě 1957)',
    obdobie: 'povojnová americká literatúra, beatnici',
    miestoACas: 'Spojené štáty 50. a 60. rokov — New York, San Francisco, cesty medzi pobrežiami; svet veľkomesta, nočných barov a dálnic',
    anotacia:
      'Výber z tvorby americkej „rozbitej generácie“, ktorá odmietla konzumný životný štýl povojnovej Ameriky a hľadala slobodu v cestovaní, hudbe a nespútanom verši. Poézia písaná tak, ako sa hovorí — nahlas, bez rýmu a bez ohľadu na dobrý vkus.',
    obsah: [
      'Beat generation nie je uzavretá kniha, ale skupina autorov, ktorí sa spoznali okolo roku 1950 v New Yorku a neskôr v San Franciscu. Názov sa vysvetľuje viacerými spôsobmi naraz: beat ako zbitý, vyčerpaný a odhodený spoločnosťou, beat ako rytmus džezu a beat ako beatific, teda blažený, takmer nábožensky osvietený. Ich spoločným východiskom bol odpor k americkej povojnovej spoločnosti — ku kariére, k hypotékam, k predmestským domčekom a k strachu z atómovej vojny. Namiesto toho hlásali slobodu pohybu, telesnosť, džez, orientálnu duchovnosť a písanie bez cenzúry vlastnej hlavy.',
      'Allen Ginsberg je najvýraznejším básnickým hlasom skupiny. Jeho poéma Kvílenie (Howl, 1956) sa začína obžalobou, že najlepšie mysle jeho generácie zničilo šialenstvo, a pokračuje dlhými, nadýchnutými vetami plnými mien, ulíc, drog a šialenstva. Verš je dlhý ako výdych — vzorom je mu Walt Whitman a rytmus džezovej improvizácie. Druhá časť poémy adresuje výčitku Molochovi, starozákonnému bohu, ktorému sa obetovali deti; Moloch je u Ginsberga obrazom priemyslu, peňazí, vojny a bezduchej civilizácie.',
      'Lawrence Ferlinghetti je zároveň básnik a vydavateľ: v San Franciscu založil knižnicu a vydavateľstvo City Lights, ktoré beatnikov ako prvé publikovalo, a pre vydanie Kvílenia bol súdený za obscénnosť. Jeho vlastná zbierka Lunapark v hlave stavia vedľa seba ironický vtip a nežnosť a často paroduje veľké mýty americkej kultúry. Verše sú rozsypané po strane, členené ako partitúra a počítajú s tým, že sa budú čítať nahlas — často priamo s džezovým sprievodom. Práve verejné čítania v kluboch urobili z beatnickej poézie spoločenskú udalosť.',
      'Jack Kerouac dal generácii jej mýtus románom Na cestě (1957), ktorý napísal metódou spontánnej prózy — takmer bez prepisovania a bez opráv, ako nepretržitý tok. Rozprávač Sal Paradise a jeho priateľ Dean Moriarty prechádzajú krížom-krážom Ameriku, stopujú, kradnú autá, pracujú načierno a hľadajú niečo, čo nikdy nepomenujú. Cesta tu nie je prostriedkom, ale zmyslom sama pre sebe: ide sa preto, aby sa išlo. Kerouac písal aj poéziu ovplyvnenú japonskými haiku a zen-buddhizmom.',
      'Charles Bukowski stojí na okraji skupiny a beatnikom sa sám nikdy nehlásil, no s nimi ho spája ten istý jazyk ulice. Jeho lyrický subjekt je opitý outsider, ktorý pracuje na pošte, chodí na dostihy, býva v prenajatých izbách a o sebe si nerobí ilúzie. Verš je krátky, vecný, bez ozdôb a obrazov — hovorí sa v ňom priamo, hrubo a často cez humor, ktorý bolí. Spoločne tvoria tieto štyri hlasy obraz literatúry, ktorá dala Amerike zrkadlo, v ktorom sa nechcela vidieť, a ktorá otvorila cestu protestnej kultúre 60. rokov.',
    ],
    kompozicia:
      'Nejde o jednu zbierku, ale o výber textov viacerých autorov, ktoré spája poetika, nie kompozičný plán. Typickým útvarom je dlhá poéma členená na časti a vystavaná na opakovaní a stupňovaní (Ginsbergovo Kvílenie), prípadne krátka civilná báseň postavená na jednej situácii (Bukowski). Verš je voľný, bez rýmu a bez pravidelnej strofy; jeho jedinou mierou je dych a rytmus reči. Texty sú písané pre hlas — mnohé vznikli priamo pre verejné čítania s džezovou hudbou.',
    postavy: [
      {
        meno: 'lyrický subjekt beatnickej poézie',
        charakteristika:
          'Mladý muž na okraji spoločnosti — bez majetku, bez kariéry a bez trvalého domova. Hovorí v prvej osobe, otvorene o tele, drogách a sexualite, a spoločnosť odmieta nie programom, ale spôsobom života. Neponúka východisko, iba svedectvo.',
        rola: 'hlavna',
      },
      {
        meno: 'outsider a tulák',
        charakteristika:
          'Opakujúca sa figúra: stopár, opitý robotník, blázon, väzeň, čierny hudobník. Beatnici v nich vidia ľudí pravdivejších než slušná stredná vrstva, pretože nemajú čo stratiť.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Moloch',
        charakteristika:
          'Obraz z druhej časti Ginsbergovho Kvílenia — starozákonný boh, ktorému sa obetovali deti. U Ginsberga zastupuje priemysel, peniaze, vojnu a bezduchú modernú civilizáciu, ktorá pohlcuje mladých ľudí.',
        rola: 'vedlajsia',
      },
      {
        meno: 'mesto a cesta',
        charakteristika:
          'Nie postavy v pravom zmysle, ale nositelia významu: veľkomesto je labyrint neónov, barov a nočných ulíc, cesta je jediný priestor slobody. Obidve sa v textoch vracajú ako trvalá kulisa aj ako téma.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'vzbura proti konzumnej a konformnej povojnovej spoločnosti',
      'sloboda ako pohyb, cesta a život bez záväzkov',
      'hľadanie duchovného zmyslu mimo cirkvi a mimo kariéry',
      'odcudzenie a osamelosť človeka vo veľkomeste',
      'telo, sexualita a drogy ako témy, ktoré dovtedy poézia obchádzala',
    ],
    motivy: [
      'džez a rytmus improvizácie',
      'nekonečná dálnica a stopovanie',
      'neóny, bary a nočné mesto',
      'alkohol a drogy',
      'Moloch ako obraz bezduchej civilizácie',
      'orientálna duchovnosť a zen-buddhizmus',
    ],
    maturitneMinimum: [
      'Beat generation je americké literárne a životné hnutie 50. a 60. rokov; názov znamená naraz „zbitý“, rytmus džezu (beat) a „blažený“ (beatific).',
      'Kľúčové diela: Ginsbergova poéma Kvílenie (1956), Ferlinghettiho Lunapark v hlave, Kerouacov román Na cestě (1957), Bukowského civilná poézia a próza.',
      'Poetika: dlhý voľný verš bez rýmu, hovorová reč, slang a vulgarizmy, spontánne písanie bez opráv, texty určené na čítanie nahlas s džezom.',
      'Ferlinghetti bol za vydanie Kvílenia obžalovaný z obscénnosti — súdny proces urobil z beatnikov celoamerickú udalosť a otvoril debatu o hraniciach umenia.',
      'Beatnici sú priamymi predchodcami hnutia hippies a protestnej kultúry 60. rokov; typická maturitná otázka sa pýta na ich poetiku a na ich odmietnutie konzumnej spoločnosti.',
    ],
    jazyk: [
      'dlhý voľný verš — riadok je taký dlhý, ako vydrží jeden nádych, čím beatnici prenášajú do poézie rytmus džezovej improvizácie a živej reči',
      'hovorová reč, slang a vulgarizmy — poézia zámerne používa jazyk ulice, aby dokázala, že aj „nízke“ slová patria do umenia',
      'anafora a hromadenie (enumerácia) — Ginsberg začína desiatky riadkov tým istým slovom, takže obžaloba spoločnosti pôsobí ako zaklínanie a stupňuje sa',
      'apostrofa — priame oslovenie Molocha alebo generácie robí z básne verejný prejav, nie osobnú spoveď',
      'spontánne písanie („prvá myšlienka je najlepšia“) — text sa neprepracúva, čím sa zachová dojem bezprostrednosti a autentickosti',
      'grafická úprava verša — slová rozsypané po strane fungujú ako partitúra a predpisujú, kde má čitateľ pri hlasnom čítaní urobiť pauzu',
      'irónia a sebairónia — najmä u Ferlinghettiho a Bukowského zabraňuje, aby sa vzbura zmenila na pátos',
    ],
    ulohy: [
      {
        id: 'beat-generation-k1',
        typ: 'kviz',
        otazka: 'Ktorý význam NEPATRÍ k vysvetleniu názvu „beat generation“?',
        moznosti: [
          'označenie generácie, ktorá zvíťazila vo druhej svetovej vojne',
          'zbitý, vyčerpaný, odhodený spoločnosťou',
          'rytmus (beat) džezovej hudby',
          'beatific — blažený, duchovne osvietený',
        ],
        spravna: 0,
        vysvetlenie:
          'Názov sa vysvetľuje tromi spôsobmi naraz: zbitý, džezový rytmus a blažený. S vojnovým víťazstvom nemá nič spoločné — beatnici naopak povojnovú Ameriku odmietali.',
      },
      {
        id: 'beat-generation-k2',
        typ: 'kviz',
        otazka: 'Ktorá poéma je najznámejším básnickým textom beat generation?',
        moznosti: [
          'Kvílenie (Howl) Allena Ginsberga',
          'Spevy Maldororove',
          'Kvety zla',
          'Panychída',
        ],
        spravna: 0,
        vysvetlenie:
          'Kvílenie z roku 1956 sa stalo manifestom generácie; jeho vydavateľ Ferlinghetti bol preň dokonca obžalovaný z obscénnosti.',
      },
      {
        id: 'beat-generation-k3',
        typ: 'kviz',
        otazka: 'Čo je typické pre beatnickú formu verša?',
        moznosti: [
          'dlhý voľný verš bez rýmu, blízky rytmu reči a džezu',
          'pravidelný sonet so štrnástimi veršami',
          'časomerný hexameter podľa antického vzoru',
          'sylabický verš ľudovej piesne',
        ],
        spravna: 0,
        vysvetlenie:
          'Verš nemá rým ani pravidelnú strofu; jeho mierou je dych a rytmus hovorenej reči, pretože texty boli písané na čítanie nahlas.',
      },
      {
        id: 'beat-generation-k4',
        typ: 'kviz',
        otazka: 'Čo v Ginsbergovom Kvílení predstavuje Moloch?',
        moznosti: [
          'priemysel, peniaze a vojnu, teda civilizáciu pohlcujúcu mladých ľudí',
          'americkú prírodu, ktorá básnika lieči',
          'džezového hudobníka z New Yorku',
          'dávneho indiánskeho boha slobody',
        ],
        spravna: 0,
        vysvetlenie:
          'Moloch je starozákonný boh, ktorému sa obetovali deti. Ginsberg ním pomenúva modernú civilizáciu, ktorá si obetuje celú generáciu.',
      },
      {
        id: 'beat-generation-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k autorovi jeho dielo alebo prínos.',
        pary: [
          { vlavo: 'Allen Ginsberg', vpravo: 'poéma Kvílenie s motívom Molocha' },
          { vlavo: 'Lawrence Ferlinghetti', vpravo: 'Lunapark v hlave a vydavateľstvo City Lights' },
          { vlavo: 'Jack Kerouac', vpravo: 'román Na cestě a metóda spontánnej prózy' },
          { vlavo: 'Charles Bukowski', vpravo: 'civilná poézia opitého outsidera' },
        ],
        vysvetlenie:
          'Každý z autorov zastupuje inú stránku hnutia: prorocký pátos, ironickú hravosť, mýtus cesty a drsnú civilnosť.',
      },
      {
        id: 'beat-generation-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň údaje o beatnikoch.',
        text: [
          'Ginsbergova poéma ',
          { medzera: 'Kvílenie', napoveda: 'po anglicky Howl' },
          ' vyšla v roku 1956 a Kerouacov román ',
          { medzera: 'Na cestě', napoveda: 'mýtus cesty krížom-krážom Amerikou' },
          ' rok po nej. Verš beatnikov je ',
          { medzera: 'voľný', napoveda: 'bez rýmu a bez pravidelnej strofy' },
          ' a je určený na čítanie nahlas.',
        ],
        vysvetlenie:
          'Beatnická poézia je zvukové umenie: vznikala pre verejné čítania, často s džezovým sprievodom, a preto je jej mierou dych, nie počet slabík.',
      },
    ],
  },
  {
    id: 'kto-chyta-v-zite',
    nazov: 'Kto chytá v žite',
    autorId: 'salinger',
    rocnik: 4,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: true,
    zaner: 'román (román o dospievaní)',
    forma: 'próza — román s ja-rozprávaním v hovorovom jazyku',
    rokVydania: '1951',
    obdobie: 'povojnová americká próza',
    miestoACas: 'stredná škola Pencey v Pennsylvánii a New York, tri decembrové dni na konci 40. rokov 20. storočia',
    anotacia:
      'Tri dni zo života šestnásťročného chlapca, ktorého práve vyhodili zo školy a ktorý sa namiesto domov vydá sám do New Yorku. Román o dospievaní, o odpore k pretvárke dospelého sveta a o tom, aké ťažké je ostať slušný.',
    obsah: [
      'Holden Caulfield vypráva svoj príbeh z ozdravovne v Kalifornii, kde sa lieči po nervovom zrútení. Vracia sa k trom decembrovým dňom, keď ho vylúčili zo strednej školy Pencey, pretože prepadol zo štyroch predmetov. Na škole ho obklopujú ľudia, ktorých vníma ako pretvarovačov: spolubývajúci Stradlater je namyslený krasoň, sused Ackley je nepríjemný otravník a učiteľ Spencer mu len opakuje poučky. Po bitke so Stradlaterom, ktorý mal rande s dievčaťom Holdenovi blízkym, odchádza zo školy uprostred noci a nepovie o tom rodičom.',
      'V New Yorku sa ubytuje v podradnom hoteli a niekoľko dní bloumá po meste. Objednáva si alkohol v baroch, hoci je neplnoletý, tancuje s ženami, ktoré ho nezaujímajú, a stretne sa so spolužiačkou Sally Hayesovou, ktorej navrhne, aby s ním odišla žiť do lesa — keď ho odmietne, pohádajú sa. V hoteli mu výťahár pošle do izby mladú prostitútku Sunny; Holden s ňou nakoniec len chce hovoriť, a preto ho výťahár Maurice zbije a oberie o peniaze. Neustále myslí na dve veci: na mŕtveho brata Allieho a na to, kam sa v zime podejú kačice z jazierka v Central Parku.',
      'Holden má pre svet dospelých jediné slovo — pretvárka. Falošné je podľa neho takmer všetko: školy, ktoré chcú z chlapcov vyrobiť úspešných mužov, filmy, ľudia, ktorí sa uchádzajú o priazeň. Skutočnú hodnotu má preň len detstvo a jeho čistota: mŕtvy brat Allie, ktorý si písal básničky na basebalovú rukavicu, a najmä desaťročná sestra Phoebe, jediný človek, s ktorým si rozumie. Keď mu Phoebe položí otázku, čím chce byť, opíše jej svoju predstavu: stál by na okraji poľa so žitom, v ktorom si hrajú deti, a chytal by tie, ktoré by sa priblížili k útesu. Tento obraz — vychádzajúci z nepresne zapamätanej piesne — dal románu názov.',
      'Vyhľadá ešte bývalého učiteľa pána Antoliniho, ktorý ho nechá prespať a varuje ho pred pádom človeka, ktorý nič nehľadá; v noci sa však Holden zobudí a v Antoliniho gestách vytuší dvojznačnosť, preto v panike odíde. Rozhodne sa odcestovať na západ, žiť ako neznámy človek a nikdy sa nevrátiť. Odkáže Phoebe, aby sa s ním rozlúčila v muzeu — ona však príde s kufrom a oznámi, že ide s ním. Holden si uvedomí, že jej tým zničí detstvo, a od svojho plánu odstúpi.',
      'Vezme Phoebe do zoo a na starý kolotoč v Central Parku. Kým sa sestra krúti na drevenom koni a naťahuje sa po zlatom krúžku, začne pršať; Holden sedí na lavičke, premokne a je náhle šťastný tak, že sa rozplače. Práve tu pochopí, že deti nemožno ochrániť pred rizikom — ak sa naťahujú, treba ich nechať. Román sa uzatvára krátkou kapitolou z ozdravovne: Holden nechce hovoriť, čo bude ďalej, iba priznáva, že sa mu po všetkých tých ľuďoch cnie.',
    ],
    kompozicia:
      'Román má rámcovú kompozíciu: úvodná a záverečná kapitola sa odohrávajú v ozdravovni, medzi nimi je retrospektíva troch decembrových dní. Rozprávanie je v prvej osobe, chronologické, členené do dvadsiatich šiestich krátkych kapitol a neustále prerušované odbočkami, hodnoteniami a spomienkami. Dejová línia je slabá — podstatný nie je príbeh, ale hlas rozprávača, jeho tón a spôsob videnia.',
    postavy: [
      {
        meno: 'Holden Caulfield',
        charakteristika:
          'Šestnásťročný chlapec vylúčený zo školy, rozprávač románu, citlivý, prehnane kritický a zraniteľný. Svet dospelých odmieta pre jeho pretvárku, no sám nevie, čo chce — okrem toho, aby chránil detskú nevinnosť. Jeho červená čiapka s šiltom je znakom jeho odlišnosti.',
        rola: 'hlavna',
      },
      {
        meno: 'Phoebe Caulfieldová',
        charakteristika:
          'Holdenova desaťročná sestra, bystrá, priama a jediný človek, s ktorým si rozumie. Práve ona ho zachráni: keď si zbalí kufor a vyhlási, že ide s ním, Holden od svojho úteku odstúpi.',
        rola: 'hlavna',
      },
      {
        meno: 'Allie Caulfield',
        charakteristika:
          'Mladší brat, ktorý zomrel na leukémiu a ktorý v románe žije len v spomienkach. Písal si básničky na basebalovú rukavicu; jeho smrť je nevysloveným zdrojom Holdenovej bolesti.',
        rola: 'vedlajsia',
      },
      {
        meno: 'pán Antolini',
        charakteristika:
          'Bývalý učiteľ, ktorý Holdena ako jediný z dospelých berie vážne a varuje ho pred pádom človeka bez cieľa. Holden od neho v noci v panike odíde, pretože si jeho gesto vysvetlí ako dvojznačné.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Stradlater',
        charakteristika:
          'Holdenov spolubývajúci na internáte, sebavedomý krasoň, ktorého Holden považuje za typického pretvarovača. Bitka s ním je priamou príčinou Holdenovho nočného odchodu zo školy.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Sally Hayesová',
        charakteristika:
          'Dievča, s ktorým sa Holden v New Yorku stretne a ktorému navrhne spoločný odchod do lesa. Jej rozumné odmietnutie ukazuje, ako je Holden vzdialený od skutočného sveta.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'dospievanie a strata detskej nevinnosti',
      'pretvárka a falošnosť sveta dospelých',
      'osamelosť citlivého jednotlivca v spoločnosti',
      'túžba chrániť deti pred pádom do dospelosti',
      'neprijatá strata blízkeho človeka a nespracovaný smútok',
    ],
    motivy: [
      'červená čiapka s šiltom',
      'kačice na jazierku v Central Parku v zime',
      'basebalová rukavica s básničkami mŕtveho brata',
      'kolotoč a zlatý krúžok',
      'útes na okraji poľa so žitom',
      'sklenené vitríny v múzeu, v ktorých sa nič nemení',
    ],
    maturitneMinimum: [
      'Kto chytá v žite je najznámejší americký román o dospievaní a jedno zo štandardizovaných diel — očakáva sa znalosť rozprávača, kompozície a významu názvu.',
      'Názov vychádza z nepresne zapamätanej piesne: Holden si predstavuje, že stojí na okraji poľa so žitom a chytá deti, aby nespadli z útesu — teda chráni detstvo pred dospelosťou.',
      'Kľúčový je jazyk: hovorová reč šestnásťročného chlapca so slangom a opakovanými výrazmi bola v roku 1951 novinkou a knihu preto na mnohých školách zakazovali.',
      'Rámcová kompozícia (vyprávanie z ozdravovne) mení celý text na spoveď: čitateľ od začiatku vie, že rozprávač sa zrútil.',
      'Zlom prichádza pri kolotoči v Central Parku — Holden pochopí, že deti nemožno pred rizikom ochrániť, a od úteku odstúpi. Typická maturitná otázka: vysvetli konflikt hlavnej postavy so svetom dospelých.',
    ],
    jazyk: [
      'ja-rozprávanie v hovorovom jazyku — Holden hovorí ako skutočný tínedžer, so slangom a nedokončenými vetami, takže čitateľ prijíma jeho videnie sveta bez odstupu',
      'opakované výrazy a slovné zvyky rozprávača (najmä nadávka „pretvarovač“ a ustavičné dodávanie „naozaj“) — tvoria jeho rozpoznateľný hlas a zároveň prezrádzajú jeho úzkosť',
      'hyperbola a zveličenie — Holden svoje odsudky preháňa, čím sa ukazuje, že jeho hodnotenie sveta je emocionálne, nie objektívne',
      'irónia a sarkazmus — výsmech dospelých je jeho obranou; pod ňou sa skrýva strach a smútok, ktoré nikdy nepovie priamo',
      'symbol — červená čiapka (odlišnosť), kačice v zime (kam sa podeje ten, kto nemá kam ísť), kolotoč a zlatý krúžok (riziko, ktoré patrí k životu)',
      'odbočky a asociatívna kompozícia — rozprávanie neustále odbieha k spomienkam, čím napodobňuje skutočné myslenie rozrušeného človeka',
      'rámec (úvod a záver z ozdravovne) — mení príbeh na spoveď a od začiatku ho zaťažuje vedomím, že to zle skončilo',
    ],
    ulohy: [
      {
        id: 'kto-chyta-v-zite-k1',
        typ: 'kviz',
        otazka: 'Odkiaľ pochádza názov románu Kto chytá v žite?',
        moznosti: [
          'z Holdenovej predstavy, že chytá deti hrajúce sa v žite, aby nespadli z útesu',
          'z názvu školy, ktorú Holden navštevoval',
          'z piesne, ktorú spieva jeho sestra Phoebe na kolotoči',
          'z básničky, ktorú si Allie napísal na basebalovú rukavicu',
        ],
        spravna: 0,
        vysvetlenie:
          'Obraz vychádza z nepresne zapamätanej piesne. Vyjadruje Holdenovu jedinú pozitívnu túžbu — chrániť detskú nevinnosť pred pádom do dospelosti.',
      },
      {
        id: 'kto-chyta-v-zite-k2',
        typ: 'kviz',
        otazka: 'Odkiaľ Holden svoj príbeh vypráva?',
        moznosti: [
          'z ozdravovne v Kalifornii, kde sa lieči po zrútení',
          'z internátu školy Pencey',
          'z hotelovej izby v New Yorku',
          'z domu svojich rodičov po návrate',
        ],
        spravna: 0,
        vysvetlenie:
          'Rámcová kompozícia je dôležitá: čitateľ od prvej kapitoly vie, že rozprávač sa zrútil, a celé rozprávanie tak dostáva charakter spovede.',
      },
      {
        id: 'kto-chyta-v-zite-k3',
        typ: 'kviz',
        otazka: 'Prečo Holden odstúpi od plánu odísť na západ?',
        moznosti: [
          'Phoebe si zbalí kufor a chce ísť s ním, čím by jej zničil detstvo',
          'rodičia ho nájdu a privedú domov',
          'ukradnú mu všetky peniaze a nemá na cestu',
          'pán Antolini mu zaobstará miesto na novej škole',
        ],
        spravna: 0,
        vysvetlenie:
          'Holden chce deti chrániť — a práve preto nemôže Phoebe vziať so sebou. Pri kolotoči potom pochopí, že deti treba nechať riskovať.',
      },
      {
        id: 'kto-chyta-v-zite-k4',
        typ: 'kviz',
        otazka: 'Ktoré slovo najlepšie vystihuje Holdenov postoj k dospelému svetu?',
        moznosti: [
          'pretvárka — takmer všetko a takmer každý je podľa neho falošný',
          'obdiv — chce byť ako úspešní dospelí',
          'ľahostajnosť — dospelí ho vôbec nezaujímajú',
          'strach — dospelých sa bojí a vyhýba sa im',
        ],
        spravna: 0,
        vysvetlenie:
          'Holden neustále používa jedno odsudzujúce slovo pre falošných ľudí. Táto posadnutosť pretvárkou je jadrom jeho konfliktu so svetom.',
      },
      {
        id: 'kto-chyta-v-zite-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k motívu jeho význam v románe.',
        pary: [
          { vlavo: 'červená čiapka s šiltom', vpravo: 'Holdenova odlišnosť a potreba chrániť sa' },
          { vlavo: 'kačice na jazierku v zime', vpravo: 'otázka, kam sa podeje ten, kto nemá kam ísť' },
          { vlavo: 'basebalová rukavica', vpravo: 'spomienka na mŕtveho brata Allieho' },
          { vlavo: 'kolotoč a zlatý krúžok', vpravo: 'riziko, ktoré k životu patrí a nedá sa deťom odopretie' },
          { vlavo: 'vitríny v múzeu', vpravo: 'túžba, aby sa nič nikdy nemenilo' },
        ],
        vysvetlenie:
          'Román pracuje so symbolmi skôr ako s dejom — každý predmet nesie Holdenov postoj k dospievaniu a k zmene.',
      },
      {
        id: 'kto-chyta-v-zite-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň základné údaje o románe.',
        text: [
          'Rozprávačom románu Kto chytá v žite je ',
          { medzera: 'Holden Caulfield', napoveda: 'šestnásťročný chlapec' },
          ', ktorého vylúčili zo školy ',
          { medzera: 'Pencey', napoveda: 'stredná škola v Pennsylvánii' },
          '. Jeho desaťročná sestra sa volá ',
          { medzera: 'Phoebe', napoveda: 'jediný človek, s ktorým si rozumie' },
          ' a román vyšiel v roku ',
          { medzera: '1951', napoveda: 'začiatok 50. rokov 20. storočia' },
          '.',
        ],
        vysvetlenie:
          'Phoebe je protipólom pretvárky dospelých — a zároveň tá, kvôli ktorej Holden od úteku odstúpi.',
      },
    ],
  },
  {
    id: 'sto-rokov-samoty',
    nazov: 'Sto rokov samoty',
    autorId: 'garcia-marquez',
    rocnik: 4,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'román (rodinná sága, magický realizmus)',
    forma: 'próza — román v dvadsiatich neoznačených kapitolách, vševediaci rozprávač',
    rokVydania: '1967',
    obdobie: 'magický realizmus, latinskoamerický „boom“',
    miestoACas: 'vymyslené mestečko Macondo v kolumbijskom vnútrozemí, sto rokov od jeho založenia po jeho zániku',
    anotacia:
      'Sága šiestich generácií rodu Buendíovcov a mestečka, ktoré spolu s nimi vznikne, rozkvitne a zanikne. Kniha, v ktorej sú zázraky podané tým istým vecným tónom ako všedné veci — a práve to je magický realizmus.',
    obsah: [
      'José Arcadio Buendía a jeho žena Úrsula Iguaránová sú bratranec a sesternica a z rodnej dediny musia odísť po tom, čo José Arcadio zabije v spore Prudencia Aguilara. Duch zabitého ich prenasleduje, a tak sa vydajú do vnútrozemia, kde po dlhom putovaní založia mestečko Macondo. Úrsula žije v strachu, že z ich pokrvného spojenia sa narodí dieťa s prasačím chvostíkom — táto obava zavesí nad celú knihu tušenie konca. Do Maconda prichádzajú cigáni a s nimi učený Melquíades, ktorý mestu prináša magnety, lupu, ľad a napíše tajemné pergameny v neznámom písme.',
      'Prvé generácie Buendíovcov sú posadnuté každá niečím iným: zakladateľ vynálezmi a alchýmiou, až kým nezošalie a neskončí priviazaný k gaštanu na dvore; syn José Arcadio telesnosťou; syn Aureliano vojnou. Plukovník Aureliano Buendía vedie tridsaťdva občianskych vojen a všetky prehrá; má sedemnásť synov s rôznymi ženami, všetkých pokrstených menom Aureliano, a všetkých neskôr v jednu noc pozabíjajú podľa popolcového znamenia na čele. Macondom prechádzajú zázraky ako samozrejmosť: mesto postihne mor nespavosti, po ktorom ľudia začnú zabúdať názvy vecí, Rebeca je posadnutá jedením zeme a vápna a krásna Remedios sa jedného dňa vznesie k nebu spolu s prestieradlami, ktoré vešala.',
      'Do Maconda príde vlak a s ním americká banánová spoločnosť, ktorá mesto na krátky čas obohatí a natrvalo zmení. Keď robotníci vstúpia do štrajku, armáda ich na stanici postrieľa — podľa románu sú mŕtvi odvezení vo vlaku ako banány a úrady potom tvrdia, že sa nič nestalo. José Arcadio Segundo, jediný, kto masaker prežil a pamätá si ho, celý život nikoho nepresvedčí. Po odchode spoločnosti začne nad Macondom pršať a dážď trvá štyri roky, jedenásť mesiacov a dva dni; mesto podľahne hnilobe, chudobe a zapomenutiu.',
      'Rod sa pomaly vytráca. Úrsula, ktorá prežije viac než sto rokov, oslepne, no dokáže to zatajiť; po jej smrti sa dom rozpadá a zarastá. Posledný Aureliano, nazývaný Babilonia, vyrastá v dome ako sirota a študuje Melquíadesove pergameny. Zaľúbi sa do Amaranty Úrsuly, o ktorej nevie, že je jeho teta, a ich vzťah splní starú obavu: narodí sa im chlapec s prasačím chvostíkom. Amaranta Úrsula pri pôrode zomrie a dieťa odvlečú mravce.',
      'V zdrvení Aureliano Babilonia sadne k pergamenom a náhle ich rozumie. Melquíades v nich pred sto rokmi zapísal celú históriu rodu Buendíovcov od začiatku až po túto chvíľu vrátane jeho vlastnej smrti. Kým dočíta posledné strany, zdvihne sa nad Macondom vietor, ktorý mesto zmetie z povrchu zeme, takže z neho nezostane ani spomienka. Kniha sa tak uzatvára do kruhu: čítanie a koniec sveta splynú do jedného okamihu a samota, ktorá sa dedila sto rokov, sa naplní.',
    ],
    kompozicia:
      'Rozsiahly román bez číslovaných kapitol, vyprávaný vševediacim rozprávačom, ktorý voľne prechádza medzi generáciami a medzi časovými rovinami. Kompozícia je kruhová a cyklická: v rode sa opakujú tie isté mená (José Arcadio, Aureliano, Amaranta, Remedios) aj tie isté povahy a chyby, takže čas nepostupuje, ale sa vracia. Celé dielo rámcujú Melquíadesove pergameny — text, ktorý predpovedá presne to, čo čitateľ číta. Rodinná línia je vhodné sledovať podľa rodokmeňa, ktorý sa v mnohých vydaniach tlačí pred textom.',
    postavy: [
      {
        meno: 'José Arcadio Buendía',
        charakteristika:
          'Zakladateľ Maconda, posadnutý vynálezmi, alchýmiou a poznaním sveta. Jeho hlad po vedení ho privedie k šialenstvu a posledné roky prežije priviazaný k gaštanu na dvore.',
        rola: 'hlavna',
      },
      {
        meno: 'Úrsula Iguaránová',
        charakteristika:
          'Manželka zakladateľa a skutočná opora rodu, ktorá prežije viac než sto rokov. Celý život sa bojí, že z pokrvného spojenia sa narodí dieťa s prasačím chvostíkom. Na starobu oslepne, no dokáže to pred všetkými zatajiť.',
        rola: 'hlavna',
      },
      {
        meno: 'plukovník Aureliano Buendía',
        charakteristika:
          'Syn zakladateľa, ktorý vedie tridsaťdva občianskych vojen a všetky prehrá. Má sedemnásť synov s rôznymi ženami, všetkých s menom Aureliano, a všetkých pozabíjajú. Je obrazom marnosti politického boja.',
        rola: 'hlavna',
      },
      {
        meno: 'Melquíades',
        charakteristika:
          'Cigánsky mudrc, ktorý do Maconda prináša magnety, lupu a ľad a napíše pergameny v neznámom písme. Jeho rukopis obsahuje celú budúcnosť rodu a rozlúšti ho až posledný Buendía.',
        rola: 'vedlajsia',
      },
      {
        meno: 'krásna Remedios',
        charakteristika:
          'Dievča takej krásy, že privádza mužov k smrti, a takej nevinnosti, že o tom nevie. Jedného dňa sa vznesie k nebu spolu s prestieradlami — zázrak, ktorý rozprávač podá bez najmenšieho vzrušenia.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Aureliano Babilonia',
        charakteristika:
          'Posledný z rodu, sirota vyrastajúca medzi knihami. S Amarantou Úrsulou, o ktorej nevie, že je jeho teta, splodí dieťa s prasačím chvostíkom a napokon rozlúšti Melquíadesove pergameny v okamihu, keď Macondo zmetie vietor.',
        rola: 'hlavna',
      },
    ],
    temy: [
      'samota ako dedičná kliatba rodu a celého sveta',
      'cyklický čas a opakovanie dejín v rodine i v národe',
      'dejiny Latinskej Ameriky — občianske vojny, kolonializmus, moc cudzieho kapitálu',
      'zabúdanie a falšovanie pamäti (masaker, ktorý sa oficiálne nestal)',
      'incest a strach z prekliatia, ktoré sa napokon naplní',
    ],
    motivy: [
      'pergameny Melquíadesa',
      'mor nespavosti a zabúdanie názvov vecí',
      'dieťa s prasačím chvostíkom',
      'dážď trvajúci štyri roky, jedenásť mesiacov a dva dni',
      'banánová spoločnosť a masaker na stanici',
      'gaštan na dvore, ku ktorému priviažu zakladateľa',
      'opakujúce sa mená Aureliano a José Arcadio',
    ],
    maturitneMinimum: [
      'Sto rokov samoty je najznámejšie dielo magického realizmu: zázračné a všedné sú podané tým istým vecným tónom, takže čitateľ ich neoddeľuje.',
      'Kompozícia je cyklická — opakujú sa mená, povahy a chyby, čo vyjadruje predstavu, že dejiny sa nevyvíjajú, ale krútia v kruhu.',
      'Za príbehom rodu stoja skutočné dejiny Latinskej Ameriky: nekonečné občianske vojny, moc americkej banánovej spoločnosti a masaker štrajkujúcich robotníkov.',
      'Melquíadesove pergameny sú kľúč k záveru: zapisujú dopredu celý román, takže dočítanie knihy a zánik Maconda sú jedna a tá istá udalosť.',
      'Autor dostal v roku 1982 Nobelovu cenu; typická maturitná otázka: vysvetli znaky magického realizmu a funkciu cyklického času na tomto románe.',
    ],
    jazyk: [
      'magický realizmus — nadprirodzené udalosti (vzlet Remedios, mor nespavosti) sa podávajú tým istým vecným tónom ako varenie obeda, takže zázrak prestáva byť výnimkou',
      'hyperbola — tridsaťdva vojen, sto rokov života, dážď trvajúci takmer päť rokov; zveličenie sa neopravuje a stáva sa novou mierou skutočnosti',
      'anticipácia (predzvesť) — rozprávač často dopredu prezradí, ako niekto zomrie, čím sa ruší napätie a zdôrazňuje neodvratnosť osudu',
      'opakovanie mien a situácií — rovnaké menoslovie v každej generácii spôsobuje, že čitateľ postavy zamieňa, čo je zámer: rod sa naozaj opakuje',
      'rozvetvená, dlhá veta s hromadením detailov — rozprávanie pripomína ústne vyprávanie starej ženy, ktorá nič nevynechá',
      'irónia a čierny humor — najtragickejšie udalosti sú podané s úsmevom, napríklad mŕtvi robotníci odvezení vo vlaku ako banány',
      'symbol — pergameny (predurčený osud), prasačí chvostík (naplnené prekliatie), vietor v závere (zmetenie celého sveta bez pamäti)',
    ],
    ulohy: [
      {
        id: 'sto-rokov-samoty-k1',
        typ: 'kviz',
        otazka: 'Ako sa nazýva mestečko, v ktorom sa román odohráva?',
        moznosti: [
          'Macondo',
          'Comala',
          'Aracataca',
          'Santa María',
        ],
        spravna: 0,
        vysvetlenie:
          'Macondo je vymyslené mestečko, ktoré Buendíovci založia a ktoré s nimi aj zanikne; jeho predobrazom je autorovo rodné mestečko Aracataca.',
      },
      {
        id: 'sto-rokov-samoty-k2',
        typ: 'kviz',
        otazka: 'Čo obsahujú Melquíadesove pergameny?',
        moznosti: [
          'celú históriu rodu Buendíovcov vrátane jeho konca',
          'návod na výrobu zlata z olova',
          'mapu cesty k moru',
          'zoznam mŕtvych zo masakru na stanici',
        ],
        spravna: 0,
        vysvetlenie:
          'Posledný Buendía ich rozlúšti presne vo chvíli, keď Macondo zmetie vietor. Čítanie románu a jeho koniec tak splynú do jedného okamihu.',
      },
      {
        id: 'sto-rokov-samoty-k3',
        typ: 'kviz',
        otazka: 'Ktorá udalosť je v románe obrazom falšovania dejín?',
        moznosti: [
          'masaker štrajkujúcich robotníkov, o ktorom úrady tvrdia, že sa nikdy nestal',
          'mor nespavosti, po ktorom ľudia zabúdajú názvy vecí',
          'vzlet krásnej Remedios k nebu',
          'tridsaťdva prehraných vojen plukovníka Aureliana',
        ],
        spravna: 0,
        vysvetlenie:
          'José Arcadio Segundo masaker prežije a pamätá si ho, no nikdy nikoho nepresvedčí. Márquez tak zobrazuje moc, ktorá prepisuje minulosť.',
      },
      {
        id: 'sto-rokov-samoty-k4',
        typ: 'kviz',
        otazka: 'Ako sa naplní Úrsulina celoživotná obava?',
        moznosti: [
          'poslednému páru rodu sa narodí dieťa s prasačím chvostíkom',
          'Macondo zaplaví more',
          'všetci Buendíovci zošalejú',
          'rod stratí celý majetok v občianskej vojne',
        ],
        spravna: 0,
        vysvetlenie:
          'Strach z pokrvného spojenia visí nad románom od prvej strany. Aureliano Babilonia a Amaranta Úrsula ho napokon splnia — a rod tým zaniká.',
      },
      {
        id: 'sto-rokov-samoty-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k postave, čím sa v románe vyznačuje.',
        pary: [
          { vlavo: 'José Arcadio Buendía', vpravo: 'zakladateľ Maconda, ktorý zošalie pri gaštane' },
          { vlavo: 'Úrsula Iguaránová', vpravo: 'prežije vyše sto rokov a zatají, že oslepla' },
          { vlavo: 'plukovník Aureliano Buendía', vpravo: 'vedie tridsaťdva vojen a všetky prehrá' },
          { vlavo: 'Melquíades', vpravo: 'cigánsky mudrc a autor pergamenov' },
          { vlavo: 'krásna Remedios', vpravo: 'vznesie sa k nebu s prestieradlami' },
        ],
        vysvetlenie:
          'Každá postava zastupuje jednu podobu samoty — poznanie, starostlivosť, vojnu, proroctvo a nedosiahnuteľnú krásu.',
      },
      {
        id: 'sto-rokov-samoty-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň údaje o románe.',
        text: [
          'Román Sto rokov samoty vyšiel v roku ',
          { medzera: '1967', napoveda: 'druhá polovica 60. rokov' },
          ' a odohráva sa v mestečku ',
          { medzera: 'Macondo', napoveda: 'vymyslené mesto v kolumbijskom vnútrozemí' },
          '. Rod, ktorého sto rokov román sleduje, sa nazýva ',
          { medzera: 'Buendíovci', napoveda: 'šesť generácií jednej rodiny' },
          '.',
        ],
        vysvetlenie:
          'Rod a mesto sú neoddeliteľné: keď zanikne posledný Buendía, zmetie vietor aj celé Macondo.',
      },
      {
        id: 'sto-rokov-samoty-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň pojmy k poetike diela.',
        text: [
          'Postup, pri ktorom sa zázračné udalosti podávajú tým istým vecným tónom ako všedné, sa nazýva ',
          { medzera: 'magický realizmus', napoveda: 'typický smer latinskoamerickej prózy' },
          '. Autor za svoje dielo získal v roku 1982 ',
          { medzera: 'Nobelovu cenu', napoveda: 'najvyššie literárne ocenenie' },
          '.',
        ],
        vysvetlenie:
          'Podstatou magického realizmu nie je samotný zázrak, ale tón: rozprávač sa nad nadprirodzeným nepozastaví, a preto ho neprijme ani čitateľ ako niečo výnimočné.',
      },
    ],
  },
  {
    id: '1984',
    nazov: '1984',
    autorId: 'orwell',
    rocnik: 4,
    druh: 'proza',
    literatura: 'svetova',
    standardizovane: false,
    zaner: 'antiutopický (negatívne utopický) román',
    forma: 'próza — román v troch častiach s vloženým výkladovým textom',
    rokVydania: '1949',
    obdobie: 'antiutópia, povojnová anglická próza',
    miestoACas: 'Londýn ako hlavné mesto Oceánie, fiktívny rok 1984 v totalitnej budúcnosti',
    anotacia:
      'Príbeh úradníka, ktorý si v dokonale ovládanom štáte dovolí vlastnú myšlienku. Najznámejšia antiutópia svetovej literatúry a slovník pojmov, ktorými dodnes pomenúvame totalitnú moc.',
    obsah: [
      'Svet je rozdelený medzi tri superštáty — Oceániu, Euráziu a Eastáziu —, ktoré vedú nekonečnú vojnu, v ktorej sa spojenci a nepriatelia podľa potreby menia. V Oceánii vládne Strana s neviditeľným vodcom Veľkým Bratom, ktorého portrét je všade a ktorého oči „ťa vidia“. V každej obytnej a pracovnej miestnosti visí telestena, ktorá vysiela a zároveň sleduje; deti donášajú na rodičov a Ideopolícia zatýka za samotné pomyslenie. Winston Smith pracuje v Ministerstve pravdy, kde prepisuje staré novinové články tak, aby minulosť vždy súhlasila s aktuálnym tvrdením Strany.',
      'Winston si potajme kúpi starý zápisník a začne si písať denník, čo je samo trestné ako ideozločin. Uvedomuje si, že žije v systéme, ktorý ovláda aj myslenie: newspeak (novorečo) postupne odstraňuje slová, aby sa zakázané myšlienky nedali ani sformulovať, a doublethink (dvojmyslenie) učí veriť dvom protikladom naraz. Zoznámi sa s Júliou, mladou ženou z toho istého ministerstva, ktorá nenávidí Stranu, ale nie z myšlienkových dôvodov — jednoducho chce žiť a milovať. Prenajmú si izbu nad starým obchodíkom pána Charringtona a začnú sa tam tajne schádzať.',
      'Winston verí, že vysoký funkcionár O’Brien patrí k tajnému Bratstvu, ktoré proti Strane odporuje. O’Brien ho skutočne prijme a dá mu zakázanú knihu pripisovanú Emanuelovi Goldsteinovi, v ktorej sa vysvetľuje, ako moc funguje a prečo potrebuje trvalú vojnu. Winston a Júlia si nad knihou aspoň na chvíľu myslia, že sú súčasťou niečoho väčšieho. V tej chvíli však do izby vtrhne Ideopolícia: pán Charrington je jej agentom, izba bola celý čas odpočúvaná a O’Brien bol provokatér.',
      'Tretia časť sa odohráva v Ministerstve lásky, kde Winstona týrajú, vyhladujú a mesiace prevychovávajú. O’Brien mu vysvetlí, že Strane nejde o vyznanie viny ani o poslušnosť, ale o skutočnú vnútornú premenu: Winston sa má naučiť, že dva a dva je päť, ak to Strana povie, pretože pravda je to, čo ona určí. Cieľom moci nie je podľa O’Briena blaho ani ideológia — moc je cieľom sama pre seba. Winston sa dlho drží jednej poslednej istoty: nezradí Júliu.',
      'Zlomia ho v cele číslo 101, kde je každý vystavený práve tomu, čoho sa bojí najviac; Winstonovi priložia k tvári klietku s hladnými potkanmi. V poslednom okamihu vykríkne, aby to urobili Júlii namiesto neho — a tým je vnútorne zničený. Po prepustení sa s Júliou náhodne stretne a obaja priznajú, že sa navzájom zradili a že už k sebe nič necítia. Winston sedí v kaviarni, pozerá na portrét Veľkého Brata a cíti k nemu lásku. Román sa teda nekončí vzburou ani nádejou, ale úplnym víťazstvom totality nad ľudským vnútrom.',
    ],
    kompozicia:
      'Román je rozdelený na tri časti, ktoré zodpovedajú trom fázam Winstonovho osudu: poznanie systému, pokus o vzburu a prevýchova. Do druhej časti je vložený rozsiahly výklad zo Goldsteinovej knihy, ktorý funguje ako teoretický traktát o mechanizme moci. K dielu patrí aj záverečná príloha o zásadách novoreči, v ktorej sa vysvetľuje, ako sa jazykom dá zmenšiť myslenie. Kompozícia je gradačná a jej záver je zámerne beznádejný.',
    postavy: [
      {
        meno: 'Winston Smith',
        charakteristika:
          'Úradník Ministerstva pravdy, ktorý prepisuje minulosť a pritom si uvedomuje, že systém je lož. Jeho vzburou je iba pamäť, denník a láska — a práve tie mu zoberú. V závere je zlomený tak dôkladne, že Veľkého Brata skutočne miluje.',
        rola: 'hlavna',
      },
      {
        meno: 'Júlia',
        charakteristika:
          'Mladá žena z Ministerstva pravdy, Winstonova milenka. Strane sa nebráni myšlienkami, ale telom a chuťou žiť; politika ju nezaujíma. Po prevýchove sa s Winstonom navzájom priznajú k zrade.',
        rola: 'hlavna',
      },
      {
        meno: 'O’Brien',
        charakteristika:
          'Vysoký funkcionár Strany, ktorý sa vydáva za člena tajného Bratstva a Winstona nechá odhaliť sám seba. V Ministerstve lásky ho potom mesiace prevychováva a vysvetľuje mu, že moc je cieľom sama pre seba.',
        rola: 'hlavna',
      },
      {
        meno: 'Veľký Brat',
        charakteristika:
          'Vodca Strany, ktorý nikdy nevystúpi a možno vôbec neexistuje. Je to tvár na plakátoch a nástroj úplnej kontroly — dokonalý symbol moci, ktorá nepotrebuje živého človeka.',
        rola: 'vedlajsia',
      },
      {
        meno: 'pán Charrington',
        charakteristika:
          'Zdanlivo dobrácky starý majiteľ obchodíka so starožitnosťami, ktorý Winstonovi a Júlii prenajme izbu. V skutočnosti je agentom Ideopolície a ich schôdzky celý čas sleduje.',
        rola: 'vedlajsia',
      },
      {
        meno: 'Emanuel Goldstein',
        charakteristika:
          'Oficiálny nepriateľ štátu, ktorého Strana denne predvádza na nenávistných zhromaždeniach. Je mu pripisovaná zakázaná kniha o mechanizme moci; nie je isté, či vôbec existuje.',
        rola: 'vedlajsia',
      },
    ],
    temy: [
      'totalitná moc a jej snaha ovládnuť aj ľudské myslenie',
      'manipulácia s minulosťou a prepisovanie dejín',
      'jazyk ako nástroj obmedzenia myslenia (novoreč)',
      'strata súkromia a život pod nepretržitým dozorom',
      'zrada, strach a zlomenie ľudskej dôstojnosti',
    ],
    motivy: [
      'telestena, ktorá vysiela a zároveň sleduje',
      'plakát s Veľkým Bratom a heslo, že ťa vidí',
      'cela číslo 101 a klietka s potkanmi',
      'sklenené bremeno na papier ako kus nezmenenej minulosti',
      'dva a dva je päť',
      'nenávistné päťminútovky proti Goldsteinovi',
      'nekonečná vojna medzi Oceániou, Euráziou a Eastáziou',
    ],
    citaty: [
      {
        text: '„Veľký Brat ťa vidí.“',
        zdroj: 'heslo na plakátoch Strany',
      },
    ],
    maturitneMinimum: [
      'Román 1984 vyšiel v roku 1949 a je najznámejšou antiutópiou (negatívnou utópiou) svetovej literatúry — zobrazuje budúcnosť ako výstrahu, nie ako ideál.',
      'Naučiť sa pojmy: Veľký Brat, Ideopolícia, ideozločin, novoreč (newspeak), dvojmyslenie (doublethink), Ministerstvo pravdy, telestena, cela 101.',
      'Kľúčová je téza o jazyku: keď sa zo slovníka odstránia slová, zakázaná myšlienka sa nedá ani sformulovať — preto má román prílohu o zásadách novoreči.',
      'Orwell nepísal proti jednej strane, ale proti totalitarizmu vôbec; skúsenosť získal v španielskej občianskej vojne, kde videl likvidáciu vlastných spojencov.',
      'Záver je zámerne bez nádeje — Winston Veľkého Brata na konci naozaj miluje. Typická maturitná otázka: vysvetli znaky antiutópie a úlohu jazyka v ovládaní ľudí.',
    ],
    jazyk: [
      'novoreč (newspeak) ako umelý jazyk v texte — Orwell vymýšľa slová a skratky, ktorými sa dá myslenie zúžiť; jazyk sa tak stáva samostatnou témou diela',
      'paradox v štátnych heslách (vojna je mier, sloboda je nevoľníctvo, nevedomosť je sila) — protiklady spojené do jednej vety cvičia čitateľa v dvojmyslení',
      'symbol — Veľký Brat je moc bez tela, sklenené bremeno na papier je nedotknutá minulosť, cela 101 je osobný strach každého človeka',
      'vložený výkladový text (Goldsteinova kniha) — prerušuje dej a dáva románu charakter politického traktátu, aby čitateľ pochopil mechanizmus moci',
      'vecný, striedmy štýl bez ozdôb — chladná veta zosilňuje hrôzu opisovaného sveta viac než expresívne prostriedky',
      'gradácia — od tajného denníka cez lásku a vzburu po mučenie a úplné zlomenie; napätie neustále rastie až po beznádejný konec',
      'irónia v pomenovaniach úradov — Ministerstvo pravdy šíri lož a Ministerstvo lásky mučí, čím sa ukazuje, že moc prekrúca význam slov',
    ],
    ulohy: [
      {
        id: '1984-k1',
        typ: 'kviz',
        otazka: 'K akému žánru román 1984 patrí?',
        moznosti: [
          'antiutópia (negatívna utópia)',
          'historický román',
          'rytierska epika',
          'idylický vidiecky román',
        ],
        spravna: 0,
        vysvetlenie:
          'Antiutópia zobrazuje budúcnosť ako výstrahu — nie ideálny štát, ale štát, v ktorom sa dokonalá organizácia obrátila proti človeku.',
      },
      {
        id: '1984-k2',
        typ: 'kviz',
        otazka: 'Na čo slúži v románe novoreč (newspeak)?',
        moznosti: [
          'odstraňuje slová, aby sa zakázané myšlienky nedali ani sformulovať',
          'umožňuje tajným odbojárom dorozumieť sa bez odpočúvania',
          'je jazykom, ktorým hovoria prolovia na predmestiach',
          'je to šifra na prepis vojenských správ',
        ],
        spravna: 0,
        vysvetlenie:
          'Novoreč je najoriginálnejšia Orwellova myšlienka: kto nemá slovo pre slobodu, nemôže ju ani pomyslieť. Preto má román prílohu o jej zásadách.',
      },
      {
        id: '1984-k3',
        typ: 'kviz',
        otazka: 'Akú prácu vykonáva Winston Smith na Ministerstve pravdy?',
        moznosti: [
          'prepisuje staré články, aby minulosť súhlasila s aktuálnym tvrdením Strany',
          'píše heslá pre plakáty s Veľkým Bratom',
          'vyšetruje ideozločiny v cele 101',
          'prekláda zakázané knihy do novoreči',
        ],
        spravna: 0,
        vysvetlenie:
          'Winstonova práca je jadrom témy: moc si nedrží iba prítomnosť, ale aj minulosť — kto ovláda dejiny, ovláda aj to, čo je pravda.',
      },
      {
        id: '1984-k4',
        typ: 'kviz',
        otazka: 'Čím sa román končí?',
        moznosti: [
          'Winston je zlomený v cele 101, zradí Júliu a Veľkého Brata napokon miluje',
          'Winston a Júlia uniknú k prolom a založia odboj',
          'Bratstvo zvrhne Stranu a Veľký Brat je odhalený ako podvod',
          'Winston je vo väzení popravený, no denník sa zachová',
        ],
        spravna: 0,
        vysvetlenie:
          'Záver je zámerne bez nádeje. Strane nešlo o poslušnosť, ale o vnútornú premenu — a tú dosiahla, čím je víťazstvo totality úplné.',
      },
      {
        id: '1984-p1',
        typ: 'priradovanie',
        zadanie: 'Priraď k pojmu z románu jeho význam.',
        pary: [
          { vlavo: 'novoreč (newspeak)', vpravo: 'umelý jazyk, ktorý zmenšuje slovník, a tým aj myslenie' },
          { vlavo: 'dvojmyslenie (doublethink)', vpravo: 'schopnosť veriť dvom protikladom naraz' },
          { vlavo: 'Ministerstvo pravdy', vpravo: 'úrad, ktorý prepisuje minulosť' },
          { vlavo: 'cela číslo 101', vpravo: 'miesto, kde je človek vystavený svojmu najväčšiemu strachu' },
          { vlavo: 'telestena', vpravo: 'prístroj, ktorý zároveň vysiela a sleduje' },
        ],
        vysvetlenie:
          'Tieto pojmy sa stali trvalou súčasťou jazyka politickej kritiky — na maturite sa očakáva, že ich viete presne vysvetliť.',
      },
      {
        id: '1984-d1',
        typ: 'doplnovacka',
        zadanie: 'Doplň základné údaje o románe.',
        text: [
          'Román 1984 vyšiel v roku ',
          { medzera: '1949', napoveda: 'krátko po druhej svetovej vojne' },
          ' a jeho hlavnou postavou je ',
          { medzera: 'Winston Smith', napoveda: 'úradník Ministerstva pravdy' },
          '. Vodcom Strany je ',
          { medzera: 'Veľký Brat', napoveda: 'tvár z plakátov, ktorá „ťa vidí“' },
          '.',
        ],
        vysvetlenie:
          'Veľký Brat nikdy nevystúpi ako osoba — a práve to je jeho sila: moc nepotrebuje živého človeka, stačí jej obraz a strach.',
      },
      {
        id: '1984-d2',
        typ: 'doplnovacka',
        zadanie: 'Doplň pojmy z Orwellovho sveta.',
        text: [
          'Umelý jazyk, ktorý odstraňovaním slov obmedzuje myslenie, sa nazýva ',
          { medzera: 'novoreč', napoveda: 'po anglicky newspeak' },
          '. V cele číslo ',
          { medzera: '101', napoveda: 'trojciferné číslo' },
          ' čelí Winston svojmu najväčšiemu strachu — klietke s ',
          { medzera: 'potkanmi', napoveda: 'hlodavce' },
          '.',
        ],
        vysvetlenie:
          'Cela 101 je pointa celého systému: každý má svoj vlastný strach a moc ho pozná lepšie než on sám.',
      },
    ],
  },
  // === DOPLNIT_DIELA ===
]
