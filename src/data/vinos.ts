import type {Wine} from "../interfaces/vino.ts";

export const dummyWines: Wine[] = [
    {
        id: 4,
        name: 'Dr. Bürklin-Wolf Riesling 2022',
        prices: { flasche: '€37,50' },
        color: 'white',
        grape: 'Riesling',
        origin: 'Deutschland, Pfalz',
        shortDescription:
            'Ein klassisch trockener Riesling mit betonter Zitrus- und Mineralität.',
        longDescription:
            'Der Dr. Bürklin-Wolf Riesling 2022 zeigt einen hellgelben Farbton, in dem Aromen von Limette, grünem Apfel und einem Hauch Pfirsich zusammen mit einer feinen Mineralität harmonieren. Er ist absolut trocken, mit einer lebendigen Säure und einem langen, frischen Abgang, der die typischen Charakteristika der Pfalz widerspiegelt.',
        image: null,
        characteristics: 'Trocken, frisch, aromatisch, mineralisch',
        available: true
    },
    {
        id: 5,
        name: 'Knipser Steinbuckel Riesling GG 2018',
        prices: { flasche: '€29,90' },
        color: 'white',
        grape: 'Riesling',
        origin: 'Deutschland, Mosel/Nahe – Knipser',
        shortDescription:
            'Ein eleganter, klassisch trockener Riesling mit intensiven Zitrus- und Steinakzenten.',
        longDescription:
            'Der Knipser Steinbuckel 2018 Riesling GG besticht durch eine feine, mineralische Struktur und Aromen von Limette, grünem Apfel und mineralischen Steinnoten. Er präsentiert sich absolut trocken, mit einer knackigen Säure und einem langanhaltenden Abgang, der die schieferhaltigen Böden der Region widerspiegelt.',
        image: null,
        characteristics: 'Trocken, elegant, mineralisch, frisch',
        available: true
    },
    {
        id: 6,
        name: 'Dr. Loosen Weißburgunder Blauschiefer 2018',
        prices: { flasche: '€27,50' },
        color: 'white',
        grape: 'Weißburgunder',
        origin: 'Deutschland, Mosel',
        shortDescription:
            'Ein filigraner Weißburgunder, der absolut trocken und fein-fruchtig ist.',
        longDescription:
            'Der Dr. Loosen Weißburgunder Blauschiefer 2018 überzeugt mit einer harmonischen Balance aus zarten Fruchtnoten von Birne und Zitrus, unterstützt von einer dezenten Mineralität, die von den Blauschieferböden der Mosel zeugt. Er ist klassisch trocken, mit einem langen, geschmeidigen Abgang, der zu leichten Speisen passt.',
        image: null,
        characteristics: 'Trocken, harmonisch, mineralisch, elegant',
        available: true
    },
    {
        id: 7,
        name: 'Knipser Sauvignon Blanc 2019',
        prices: { flasche: '€27,50' },
        color: 'white',
        grape: 'Sauvignon Blanc',
        origin: 'Deutschland, Pfalz',
        shortDescription:
            'Ein knackiger Sauvignon Blanc, der durch seine intensive Frische besticht.',
        longDescription:
            'Der Knipser Sauvignon Blanc 2019 beeindruckt mit einer strahlenden Säure und einem Bouquet aus frischen Zitrusfrüchten sowie einem Hauch von grünem Gras. Er ist absolut trocken und bietet einen langanhaltenden, erfrischenden Abgang, der die typischen Eigenschaften der Pfalz widerspiegelt.',
        image: null,
        characteristics: 'Trocken, knackig, frisch',
        available: true
    },
    {
        id: 8,
        name: 'Barolo Serre dei Roveri 2020',
        prices: { flasche: '€54,50' },
        color: 'red',
        grape: 'Nebbiolo',
        origin: 'Italien, Piemont',
        shortDescription:
            'Ein kraftvoller Barolo mit komplexen Aromen und markanten Tanninen.',
        longDescription:
            'Der Barolo Serre dei Roveri 2020 zeigt sich in einem tiefen Rubinrot und entfaltet ein vielschichtiges Bouquet aus reifen roten Früchten, erdigen Noten und feinen Gewürznuancen. Er ist klassisch trocken, kraftvoll und elegant, mit ausgeprägten Tanninen, die ihn zu einem typischen Vertreter der piemonteschen Weinkultur machen.',
        image: null,
        characteristics: 'Trocken, kraftvoll, elegant, tanninreich',
        available: true
    },
    {
        id: 9,
        name: "D'ORA Weingut Klosterkeller Siegendorf 2020",
        prices: { flasche: '€34,50' },
        color: 'white',
        grape: 'Grauburgunder',
        origin: 'Österreich, Siegendorf',
        shortDescription:
            'Ein eleganter Grauburgunder mit feiner Mineralität und subtilen Fruchtnoten – klassisch trocken.',
        longDescription:
            "Der d'ora 2020 vom Weingut Klosterkeller Siegendorf überzeugt mit ausgewogener Säure, feiner Mineralität und dezenten Aromen von reifen Birnen und Zitrus. Der Wein ist absolut trocken und präsentiert sich mit einem langen, eleganten Abgang, der die Tradition des Weinguts unterstreicht.",
        image: null,
        characteristics: 'Trocken, elegant, mineralisch, fruchtig',
        available: true
    },
    {
        id: 10,
        name: 'Knipser Sauvignon Blanc 2019',
        prices: { flasche: '€27,50' },
        color: 'white',
        grape: 'Sauvignon Blanc',
        origin: 'Deutschland, Pfalz',
        shortDescription:
            'Ein trockener, knackiger Sauvignon Blanc mit intensiver Frische und klaren Zitrusnoten.',
        longDescription:
            'Der Knipser 2019 Sauvignon Blanc besticht durch seine strahlende Säure und ein Bouquet aus frischen Zitrusfrüchten, untermalt von einem Hauch grünem Gras. Absolut trocken und mit einem langanhaltenden, erfrischenden Abgang – typisch für die Pfalz.',
        image: null,
        characteristics: 'Trocken, knackig, frisch',
        available: true
    },
    {
        id: 11,
        name: 'Barolo Terre dei Roveri 2020',
        prices: { flasche: '€55,00' },
        color: 'red',
        grape: 'Nebbiolo',
        origin: 'Italien, Piemont',
        shortDescription:
            'Ein intensiver Barolo mit komplexem Aromenspektrum und markanten Tanninen – klassisch trocken.',
        longDescription:
            'Der Barolo Terre dei Roveri 2020 besticht durch sein tiefes Rubinrot und ein Bouquet aus reifen roten Früchten, Teer und Gewürzen. Er ist absolut trocken, kraftvoll und elegant, mit intensiven Tanninen, die ihn zu einem anspruchsvollen Wein für Kenner der piemonteschen Weinkultur machen.',
        image: null,
        characteristics: 'Trocken, kraftvoll, elegant, tanninreich',
        available: true
    },
    {
        id: 12,
        name: "d'ora Weingut Klosterkeller Siegendorf 2020",
        prices: { flasche: '€37,50' },
        color: 'white',
        grape: 'Grauburgunder',
        origin: 'Österreich, Siegendorf',
        shortDescription:
            'Ein eleganter Grauburgunder mit ausgewogener Säure und feiner Mineralität – klassisch trocken.',
        longDescription:
            "Der d'ora 2020 vom Weingut Klosterkeller Siegendorf überzeugt durch seine harmonische Balance aus fruchtigen Noten reifer Birnen und einer dezenten Mineralität, die in einem langen, eleganten Abgang mündet. Absolut trocken und ideal als Begleiter zu leichten Speisen.",
        image: null,
        characteristics: 'Trocken, elegant, mineralisch, fruchtig',
        available: true
    },
    {
        id: 13,
        name: "1934 CVS Canicatti 2019",
        prices: { flasche: '€39,50' },
        color: 'red',
        grape: "Nero d'Avola",
        origin: 'Italien, Sizilien (Canicatti)',
        shortDescription:
            'Ein kraftvoller, vollmundiger Rotwein mit intensiven Fruchtaromen – klassisch trocken.',
        longDescription:
            'Der "1934" CVS Canicatti 2019 präsentiert sich in einem tiefen Rubinrot mit einem Bouquet aus dunklen Kirschen, Pflaumen und einem Hauch Gewürzen. Er ist absolut trocken, mit weichen Tanninen und einer harmonischen Struktur, die das Terroir Siziliens eindrucksvoll widerspiegelt.',
        image: null,
        characteristics: 'Trocken, kraftvoll, vollmundig, elegant',
        available: true
    },
    {
        id: 14,
        name: 'CASTELLO DI BIBBIONE Chianti Classico Riserva 2017',
        prices: { flasche: '€39,00' },
        color: 'red',
        grape: 'Sangiovese',
        origin: 'Italien, Toskana',
        shortDescription:
            'Ein traditioneller Chianti Classico Riserva mit komplexen, reifen Fruchtnoten und würzigen Akzenten – klassisch trocken.',
        longDescription:
            'Der Chianti Classico Riserva aus dem Castello di Bibbione Castelli del Grevepesa zeigt sich in einem rubinroten Farbton. Das Bouquet vereint Aromen von reifen Kirschen, getrockneten Kräutern und subtilen Gewürznoten, während die strukturierte Tanninführung und ausgewogene Säure einen langen, eleganten Abgang bieten – ein Wein, der die Tradition der Toskana widerspiegelt.',
        image: null,
        characteristics: 'Trocken, traditionell, komplex, elegant',
        available: true
    },
    {
        id: 15,
        name: 'Raineri Zovetto Dogliani 2018',
        prices: { flasche: '€32,50' },
        color: 'red',
        grape: 'Barbera | Dolcetto',
        origin: 'Italien, Piemont',
        shortDescription:
            'Ein intensiver Rotwein mit reifen Fruchtaromen und feiner Tanninstruktur – klassisch trocken.',
        longDescription:
            'Der Raineri Zovetto Dogliani 2018 zeigt sich in einem tiefen Rotton mit einem Bouquet aus dunklen Beeren, reifen Kirschen und feinen Gewürznoten. Er ist absolut trocken, mit einer ausgewogenen Säure und samtigen Tanninen, die ihm eine elegante Struktur verleihen – typisch für die Weinregion des Piemont.',
        image: null,
        characteristics: 'Trocken, intensiv, fruchtig, elegant',
        available: true
    },
    {
        id: 16,
        name: 'Borgo Scopeto Chianti Classico Riserva 2017 DOCG',
        prices: { flasche: '€55,00' },
        color: 'red',
        grape: 'Sangiovese',
        origin: 'Italien, Toskana',
        shortDescription:
            'Ein kraftvoller Chianti Classico Riserva mit reifen Fruchtnoten, würzigen Akzenten und strukturierten Tanninen – klassisch trocken.',
        longDescription:
            'Der Borgo Scopeto Chianti Classico Riserva 2017 DOCG präsentiert sich in einem tiefen Rubinrot mit einem komplexen Bouquet aus reifen roten Früchten, getrockneten Kräutern und würzigen Noten. Die gut integrierten Tannine und die ausgewogene Säure verleihen ihm eine beeindruckende Struktur und einen langen, eleganten Abgang, der Kenner toskanischer Weine begeistert.',
        image: null,
        characteristics: 'Trocken, kraftvoll, strukturiert, elegant',
        available: true
    },

    {
        id: 17,
        name: 'Barón de Ley Rioja Reserva 2019|2020',
        prices: { '0.1l': "6,00€", '0.2l': "9,50€", flasche: '€33,50' },
        color: 'red',
        grape: 'Tempranillo, Graciano, Maturana',
        origin: 'Spanien, Rioja DOCa',
        shortDescription:
            'Ein klassischer Rioja Reserva mit ausgewogener Fruchtigkeit und eleganter Tanninstruktur – klassisch trocken.',
        longDescription:
            'Der Barón de Ley Rioja Reserva 2019 präsentiert sich in einem tiefen Rubinrot und entfaltet ein komplexes Bouquet aus reifen roten Früchten, feinen Gewürznoten und dezenten Eichenakzenten. Am Gaumen überzeugt er mit einer harmonischen Balance zwischen Fruchtigkeit und strukturierten Tanninen, die in einem langen, eleganten Abgang mündet. Ein Wein, der die Tradition der Rioja DOCa authentisch widerspiegelt.',
        image: null,
        characteristics: 'Trocken, klassisch, elegant, ausgewogen',
        available: true
    }
];
