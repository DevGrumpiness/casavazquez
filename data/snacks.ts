// Snack-Karte als reine Daten (ohne Bild-Imports), damit sowohl die Website
// (SnackMenu.vue) als auch der Server (sommelier.ts) sie importieren können.
// `image` ist hier nur ein Schlüssel; SnackMenu.vue löst ihn auf die Bilddatei auf.

export interface SnackItem {
  name: string;
  description: string;
  price: string;
  veggie: boolean;
  keto: boolean;
  image?: string;
  onm?: boolean;
  available?: boolean;
  allergens?: number[];
  traceAllergens?: number[];
  vegan?: boolean;
}

export const flammkuchenVariants = [
  {
    name: "Flammkuchen Klassisch",
    description: "Speck & Zwiebeln",
    price: "10,50",
    veggie: false
  },
  {
    name: "Flammkuchen Vegetarisch",
    description: "mit Dingen aus dem Garten",
    price: "10,50",
    veggie: true
  },
  {
    name: "Flammkuchen Española",
    description: "Chorizo & Oliven",
    price: "10,50",
    veggie: false
  }
]

export const snackData: SnackItem[] = [
  { name: 'Nachos mit Dip (Salsa/Aioli)', description: '', price: '6,5', veggie: true, keto: false, allergens: [11, 15] },
  { name: 'Pimientos de Padrón - der Klassiker', description: '', price: '6,5', veggie: true,vegan: true, keto: true, image: 'pimientosImage' },
  { name: 'Brot mit Aioli Dip', description: 'auf Wunsch mit veganem dip', price: '6,5', veggie: true, vegan: true, keto: false, allergens: [9, 11, 15] },
  { name: 'Patatas Bravas', description: 'auf Wunsch vegan', price: '5', veggie: true, keto: false,vegan: true, image: 'bravasImage', allergens: [9, 11, 15] },
  { name: 'Beer Battered Zwiebelringe', description: 'vegan', price: '5,5', veggie: true, keto: false,vegan: true, image: 'zwiebelringeImage', allergens: [9, 11, 15] },
  { name: 'Chicken Fingers', description: 'Saftige panierte Hänchen-Stückchen', price: '6,5', veggie: false, keto: false, image: 'chickenFingersImage', allergens: [9, 11, 15] },

  { name: 'Pommes', description: 'mit Aioli oder Bravas-Dip', price: '5', veggie: true, keto: false, image: 'pommesImage', allergens: [11, 15], available: true },
  { name: 'Pommes groß', description: 'mit Aioli oder Bravas-Dip', price: '7', veggie: true, keto: false, image: 'pommesImage', allergens: [11, 15], available: true },
  { name: 'Oliven Mix', description: '', price: '6', veggie: true, onm: true, vegan: true,keto: true, image: 'olivenMixImage' },
  { name: 'Croquetas Manchego', description: 'kleine Kroketten mit Käse-Füllung', price: '6,5', veggie: true, keto: false, allergens: [9, 11, 13, 26] },
  ...flammkuchenVariants.map(variant => ({
    name: variant.name,
    description: variant.description,
    price: variant.price,
    veggie: variant.veggie,
    keto: false,
    image: 'flammImage'
  })),
  {
    name: 'Pollo Al Ajillo',
    description: 'Gegarte, marinierte Hähnchen Flügel mit Knoblauch',
    price: '8,5',
    veggie: false,
    keto: true,
    image: 'polloPiripiri',
    allergens: [14, 16],
    traceAllergens: [4, 9, 12, 13, 15, 17, 22],
    available: true
  },
  { name: 'Tortilla Española', description: 'Mini Kartoffel-Omelet', price: '7', veggie: true, keto: true, available: true, image: 'tortillaImage', allergens: [11, 13] },
  { name: 'Tortilla Española', description: 'Mini Kartoffel-Omelet + Serrano', price: '8,5', veggie: false, available: true, keto: true, image: 'tortillaImage', allergens: [11, 13] },
  { name: 'Albondigas in Salsa', description: 'Fleischbällchen (5Stk) mit Chili-Käse Füllung (pikant) in Tomatensalsa', price: '7,5', veggie: false, keto: true, available: true, image: 'albondigasImage', allergens: [11, 13] },
  { name: 'Chapignons', description: 'paniert und frittiert', price: '5,5', veggie: true, keto: false, available: true, image: 'champs', allergens: [11, 13] },
  // { name: 'Chorizo in Salsa', description: 'Pikante Chorizo (spanische Wurst) in Tomatensalsa', price: '6,5', veggie: false, keto: true, available: true, image: 'albondigasImage', allergens: [11, 13] },
  { name: 'Vegane Nuggets', description: 'mit Tomaten-Salsa oder Aioli', price: '7,5', veggie: true, keto: false, image: 'nuggetsImage', allergens: [9, 16], available: true },
  { name: 'Dátiles con Bacon', description: 'Datteln im Speckmantel', price: '7,5', veggie: false, keto: false, image: 'datillesImage', allergens: [26] },
  // {
  //   name: 'Dados de Panceta',
  //   description: 'Schweinbauch-Würfel, herzhaft mariniert. ca 150g',
  //   price: '9,5',
  //   veggie: false,
  //   keto: true,
  //   available: true,
  //   image: 'pancehta',
  //   allergens: [9, 16, 26]
  // },
  { name: 'Calamares Ringe', description: 'Tintenfischringe im Backteig', price: '7,5', veggie: false, keto: false, image: 'calamares', allergens: [9, 11, 13, 20] },
  {
    name: 'Harissa Bällchen',
    description: 'Veganer Snack aus Harissa in Kräuter-Panade',
    price: '7,5',
    veggie: true,
    vegan: true,
    keto: false,
    image: 'rotebete',
    allergens: [9, 27, 28, 29, 30],
    available: false
  },
  {
    name: 'Rote Beete Ingwer Bällchen',
    description: 'Veganer Snack aus proteinreichen Kichererbsen, mit rote Beete und Ingwer.',
    price: '7,5',
    veggie: true,
    vegan: true,
    keto: false,
    image: 'rotebete',
    allergens: [9, 27, 28, 29, 30],
  },
  // {
  //   name: 'Vegane Erbsen Minz Sticks',
  //   description: 'Veganund lecker.',
  //   price: '7,5',
  //   veggie: true,
  //   keto: false,
  //   image: 'veggieSticksImage',
  //   allergens: [9, 27, 28, 29, 30],
  //   available: false
  // },
  {
    name: 'Verduras a la Parrilla',
    description: 'Gemischtes Grillgemüse Antipasti-Art (lauwarm).',
    price: '7,5',
    veggie: true,
    keto: false,
    vegan: true,
    image: undefined,
    allergens: [9, 27, 28, 29, 30]
  },
  {
    name: 'Gambas Empanadas',
    description: 'Gambas mit einer köstlich subtil gewürzten knusprigen Kokos-Kruste mit Knoblauch und Petersilie. ',
    price: '8,5',
    veggie: false,
    keto: false,
    vegan: false,
    image: undefined,
    allergens: [9, 27, 28, 29, 30]
  },
  {
    name: 'Blumenkohl Bites, würzig',
    description: 'Blumenkohl Bites, würzig mit einer knusprigen Panade und einer leichten Schärfe',
    price: '5,5',
    veggie: true,
    keto: false,
    vegan: true,
    image: 'blumenkohlImage',
    allergens: [9, 27, 28, 29, 30]
  },
  {
    name: 'Avocado Fries Chili',
    description: 'Knusprig panierte Avocadospalten mit Chili, außen crunchy und innen cremig',
    price: '5,5',
    veggie: true,
    keto: false,
    vegan: false,
    image: 'avocadoImage',
    allergens: [9]
  },

  {
    name: 'Empanadillas de Pollo 4Stk',
    description: 'Klassiker unter den spanischen Empanadas mit Hähnchen-Füllung ',
    price: '7,5',
    veggie: false,
    keto: false,
    image: undefined,
    allergens: [9, 27, 28, 29, 30]
  },
//  {
//     name: 'Costillas Picantes',
//     description: 'Gegrillte, würzige Rippchen, losgeschnitten.',
//     price: '8,5',
//     veggie: false,
//     keto: true,
//     image: undefined,
//     allergens: [9, 27, 28, 29, 30]
//   },
];
// { name: 'Palta Rebozada', description: 'Avocadospalten paniert', price: '8,5', veggie: true, keto: false },
// { name: 'Tapas Mix (2p)', description: 'Mix aus verschiedenen Tapas', price: '24,5', veggie: false, keto: false },
// { name: 'Veggi Mix (2p)', description: 'Mix aus verschiedenen Veggie Tapas.', price: '24,5', veggie: true, keto: false },
// { name: 'Aros de Cebolla', description: 'Zwiebelringe', price: '6', veggie: true, keto: false, image: 'zwiebelringeImage', allergens: [9, 11, 13] },
