type Color = 'red' | 'white' | 'rosé';

export interface Wine {
    id: number;
    name: string;
    prices: {
        '0.1l'?: string;
        '0.2l'?: string;
        flasche: string;
    };
    color: Color;
    grape: string;
    origin?: string;
    shortDescription?: string;
    longDescription?: string;
    image?: string | null;
    characteristics?: string;
}

export const dummyWines: Wine[] = [
    {
        id: 1,
        name: 'Cabernet Sauvignon',
        prices: { '0.2l': '€18', flasche: '€30' },
        color: 'red',
        grape: 'Cabernet Sauvignon',
        origin: 'Frankreich',
        shortDescription: 'Ein kräftiger Rotwein mit Noten dunkler Früchte.',
        longDescription: 'Dieser Cabernet Sauvignon bietet einen intensiven Geschmack von dunklen Beeren und dezenten Eichennoten.',
        image: null,
        characteristics: 'Trocken, tanninreich, kräftig'
    },
    {
        id: 2,
        name: 'Merlot',
        prices: { '0.1l': '€9', '0.2l': '€16', flasche: '€28' },
        color: 'red',
        grape: 'Merlot',
        origin: 'Italien',
        shortDescription: 'Geschmeidig und samtig, perfekt für entspannte Abende.',
        longDescription: 'Dieser Merlot bietet einen sanften Abgang mit Noten von Pflaume und einem dezenten Eichenaroma.',
        image: null,
        characteristics: 'Halbtrocken, fruchtig, weich'
    },
    {
        id: 3,
        name: 'Chardonnay',
        prices: { '0.1l': '€11', '0.2l': '€20', flasche: '€35' },
        color: 'white',
        grape: 'Chardonnay',
        origin: 'Kalifornien',
        shortDescription: 'Ein spritziger Weißwein mit einem Hauch von Zitrus.',
        longDescription: 'Dieser Chardonnay ist bekannt für seine erfrischende Säure und den zarten Geschmack tropischer Früchte.',
        image: null,
        characteristics: 'Trocken, frisch, fruchtig'
    }
];
