export const motivacionePoruke = [
  {
    text: '"I činite dobro - Allah, zaista, voli one koji dobra djela čine."',
    izvor: "📖 (Kur'an, El-Bekara, 195)",
  },
  { text: '"Pomozite jedni drugima u dobročinstvu i bogobojaznosti."', izvor: "📖 (Kur'an, El-Maida, 2)" },
  { text: '"Onaj ko uradi koliko trun dobra - vidjet će ga."', izvor: "📖 (Kur'an, Ez-Zilzal, 7)" },
  { text: '"I takmičite se u dobrim djelima..."', izvor: "📖 (Kur'an, El-Bekara, 148)" },
  {
    text: '"Najbolji među vama su oni koji su najkorisniji ljudima."',
    izvor: "📜 (Hadis bilježi Taberani)",
  },
  {
    text: '"Ne potcjenjuj nijedno dobro djelo, makar to bilo da sretneš brata vedra lica."',
    izvor: "📜 (Hadis bilježi Muslim)",
  },
];

export const pocetneAktivnosti = [
  {
    id: 1,
    naziv: "Usisavanje",
    termini: [
      { dan: "utorak", vrijeme: "11:00", zavrseno: true },
      { dan: "četvrtak", vrijeme: "11:00", zavrseno: false },
    ],
    trajanje: "25 min",
    prijavljeni: ["Tarik", "Anand"],
    zavrseno: false,
  },
  {
    id: 2,
    naziv: "Pranje serdžada",
    termini: [{ dan: "petak", vrijeme: "19:00", zavrseno: false }],
    trajanje: "1h",
    prijavljeni: ["Amina", "Selma"],
    zavrseno: false,
  },
  {
    id: 3,
    naziv: "Čišćenje abdesthane/toaleta",
    termini: [
      { dan: "ponedjeljak", vrijeme: "09:00", zavrseno: true },
      { dan: "srijeda", vrijeme: "11:00", zavrseno: false },
      { dan: "petak", vrijeme: "10:00", zavrseno: false },
    ],
    trajanje: "45 min - 1h",
    prijavljeni: ["Tarik", "Anand", "Bilal", "Mirza", "admin"],
    zavrseno: false,
  },
];

export const uputstvo = [
  {
    id: 1,
    naziv: "Kupovina potrepština",
    stavke: [
      "Finansiranje se obavlja iz priloga naše plave kasice, online donacija i budžeta Steleksa.",
      "Za informaciju o potrebnim stvarima pogledati shopping listu i čekirati stavku nakon što je kupite.",
      "Račune kupovine ostavljati u plavu kasicu sa napisanim imenom i prezimenom. Administratori će ih preuzeti i predati predsjedniku Steleksa za dio refundacije.",
    ],
    noviTekst: "",
  },
  {
    id: 2,
    naziv: "Pranje serdžada",
    stavke: [
      "Poželjno petkom da se može do ponedjeljka vratiti.",
      "Poželjno da radi neko ko ima auto jer je teško nositi.",
    ],
    noviTekst: "",
  },
];

export const shoppingListaStavke = [
  { naziv: "Otirač za cipele", checked: false },
  { naziv: "Slatkiši za posjetioce", checked: false },
  { naziv: "Ubrusi", checked: false },
  { naziv: "Trulex", checked: false },
  { naziv: "Četka za pod", checked: true },
  { naziv: "Konvektor", checked: true },
  { naziv: "Usisivač", checked: true },
];

export const donacijaInputPolja = [
  { type: "text", placeholder: "Ime vlasnika kartice" },
  { type: "number", placeholder: "Broj kartice" },
  { type: "text", placeholder: "MM/YY isteka" },
  { type: "number", placeholder: "CVC" },
  { type: "number", placeholder: "Iznos" },
];

export const registracijaInputPolja = [
  { type: "text", placeholder: "Korisničko ime" },
  { type: "text", placeholder: "Email" },
  { type: "password", placeholder: "Šifra" },
  { type: "password", placeholder: "Potvrdite šifru" },
];

export const registracijaKeys = ["username", "email", "password", "confirmPassword"];

export const svrheDonacije = [
  "Kupovina stavki sa shopping liste",
  "Novčana nagrada za volontere",
  "Za rezervu i buduće aktivnosti",
  "Ništa od navedenog",
];

export const historijaDonacija = [
  { iznos: "15.00", datum: "26/02/2025 20:36", svrha: "Kupovina stavki sa shopping liste" },
  { iznos: "35.00", datum: "23/02/2025 15:15", svrha: "Kupovina stavki sa shopping liste" },
  { iznos: "150.00", datum: "22/02/2025 21:57", svrha: "Za plaćanje majstora za postavljanje vrata" },
  { iznos: "50.00", datum: "15/02/2025 08:43", svrha: "Za rezervu i buduće aktivnosti" },
  { iznos: "300.00", datum: "01/01/2025 12:07", svrha: "Novčana nagrada za volontere" },
];
