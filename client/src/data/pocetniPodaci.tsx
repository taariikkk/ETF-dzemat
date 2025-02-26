export const motivacionePoruke = [
  { text: '"I činite dobro - Allah, zaista, voli one koji dobra djela čine."', izvor: "📖 (Kur'an, El-Bekara, 195)" },
  {
    text: '"Najbolji među vama su oni koji su najkorisniji ljudima."',
    izvor: "📜 (Hadis bilježi Taberani)",
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
  { naziv: "Trulex", checked: false },
  { naziv: "Otirač", checked: false },
  { naziv: "Ubrusi", checked: false },
  { naziv: "Četka za pod", checked: true },
  { naziv: "Konvektor", checked: true },
];

export const donacijaInputPolja = [
  { type: "text", placeholder: "Ime vlasnika kartice" },
  { type: "number", placeholder: "Broj kartice" },
  { type: "text", placeholder: "MM/YY isteka" },
  { type: "number", placeholder: "CVC" },
];

export const registracijaInputPolja = [
  { type: "text", placeholder: "Korisničko ime" },
  { type: "text", placeholder: "Email" },
  { type: "password", placeholder: "Šifra" },
  { type: "password", placeholder: "Potvrdite šifru" },
];

export const registracijaKeys = ["username", "email", "password", "confirmPassword"];
