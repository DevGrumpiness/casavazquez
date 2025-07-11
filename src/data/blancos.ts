import type {Wine} from "../interfaces/vino.ts";

export const blancos: Wine[] = [

    {
        name: 'Hauswein weiß',
        id: 'Hauswein_weiss',
        prices: {
            '0.1l': '3,50€',
            '0.2l': '6,60€',
            'flasche': '19,00€'
        },
        color: 'white',
        grape: '',
        origin: '',
        shortDescription: '',
        longDescription: '',
        image: null,
        characteristics: 'Einfach ein leckeres Glas Weißwein zum fairen Preis. trocken, fruchtig, erschwinglich',
        available: true
    },
    {
        name: 'Epicuro Chardonnay‑Fiano Puglia IGT',
        id: 'w_epicuro_chardonnay_fiano',
        prices: {
            '0.1l': '4,00€',
            '0.2l': '7,50€',
            'flasche': '24,00€'
        },
        color: 'white',
        grape: '70% Chardonnay, 30% Fiano',
        origin: 'Italien, Apulien (Puglia IGT)',
        shortDescription: 'WENIG SÄURE - Trocken‑ bis halbtrockene Cuvée mit exotischen Früchten und feiner Würze.',
        longDescription: 'Der Epicuro Chardonnay‑Fiano von Femar Vini aus Apulien vereint die frische Saftigkeit des Chardonnay mit den würzig‑aromatischen Akzenten der einheimischen Fiano‑Traube. In der Nase mischen sich Aromen von Birne, Apfel, Ananas, Limette und Bananen mit Anklängen von Akazienhonig und grünen Kräutern. Am Gaumen präsentiert sich der Wein frisch und saftig mit viel Schmelz, feiner Zitrus‑Frische und einer seidigen Textur – ideal zu Meeresfrüchten, Fisch, Antipasti oder leichten Salaten.',
        image: null,
        characteristics: 'trocken‑halbtrocken, exotisch‑fruchtig, würzig, frisch, geschmeidig',
        available: true
    },
    {
        name: 'Karl Pfaffmann Grauer Burgunder',
        id: 'w18',
        prices: {
            '0.1l': '4,50€',
            '0.2l': '8,50€',
            'flasche': '29,90€'
        },
        color: 'white',
        grape: '100% Grauburgunder (Pinot Gris)',
        origin: 'Pfalz, Deutschland',
        shortDescription: 'Trocken, weicher Grauburgunder mit dezenter Säure und fruchtigen Aromen.',
        longDescription: 'Ein feiner, trockener Grauburgunder vom Weingut Karl Pfaffmann in der Pfalz, der mit seiner milden Säure und zarten Fruchtaromen besticht. Er präsentiert sich weich am Gaumen, mit Noten von Birne, Apfel und einem Hauch von Zitrus. Seine dezente Mineralität unterstreicht den klaren Charakter dieses Weißweins und macht ihn zum idealen Begleiter leichter Speisen.',
        image: null,
        characteristics: 'Trocken, weich, wenig Säure, weiß, fruchtig',
        available: true
    },
    {
        name: 'Marqués de Riscal (Flasche)',
        id: 'w19',
        prices: {
            'flasche': '34,50€'
        },
        color: 'white',
        grape: '100% Verdejo',
        origin: 'Rueda, Spanien',
        shortDescription: 'Trocken, fruchtbetonter Weißwein aus Rueda mit eleganten Kräuter- und Zitrusnoten.',
        longDescription: 'Der Marqués de Riscal Verdejo aus der spanischen Region Rueda ist ein erfrischender, trockener Weißwein mit intensiven Aromen von tropischen Früchten und Zitrus. Noten von Fenchel und frischen Kräutern verleihen ihm eine elegante Komplexität, während seine lebhafte Säure für eine angenehme Frische sorgt. Perfekt als Aperitif oder zu leichten Speisen und Meeresfrüchten.',
        image: null,
        characteristics: 'Trocken, fruchtbetont, elegant, weiß, erfrischend',
        available: true
    },
    {
        name: 'Nebla Vicente Gandia Verdejo',
        id: 'w118',
        prices: {
            '0.1l': '4,00€',
            '0.2l': '7,50€',
            'flasche': '25,00€'
        },
        color: 'white',
        grape: 'Verdejo',
        origin: 'Spanien, Valencia',
        shortDescription:
            'Der Nebla Verdejo von Vicente Gandia überzeugt durch lebhafte Frische und ausgewogene Eleganz..',
        longDescription:
            'Der Nebla Verdejo präsentiert sich in einem klaren, goldgrün schimmernden Ton, der für die Verdejo-Traube charakteristisch ist. In der Nase entfalten sich lebendige Aromen von Zitrusfrüchten und frisch geernteten grünen Äpfeln, fein untermalt von dezenten Kräuteranklängen, die dem Duft eine elegante Frische verleihen. Am Gaumen überzeugt er durch sein harmonisches Gleichgewicht: Noten von saftiger Ananas und reifer Melone verschmelzen mit einer feinen, belebenden Säure zu einem dynamischen, zugleich ausgewogenen Trinkvergnügen. Ein Wein, der mit seiner spritzigen Lebhaftigkeit und feinen Raffinesse Kenner und Genießer gleichermaßen begeistert.',
        image: null,
        characteristics: 'Trocken, leicht, Mango, grünes Gras',
        available: true
    },
    {
        name: 'Colli Vaibò Lugana',
        id: 'w20',
        prices: {
            '0.1l': '5,50€',
            '0.2l': '10,50€',
            'flasche': '32,50€'
        },
        color: 'white',
        grape: '100% Trebbiano di Lugana (Turbiana)',
        origin: 'Lombardei, Italien',
        shortDescription: 'Trocken, fruchtig-frischer Lugana aus dem lombardischen Anbaugebiet.',
        longDescription: 'Der Colli Vaibò Lugana DOC ist ein lebendiger Weißwein aus der Lombardei, der sich durch seine fruchtigen Aromen von Zitrus und Pfirsich auszeichnet. Mit seiner ausgewogenen Säure und dezenten Mineralität eignet er sich hervorragend als Begleiter zu Fisch- und Pastagerichten. Die charakteristischen Noten der Turbiana-Traube verleihen diesem Lugana eine angenehme Frische und Eleganz.',
        image: null,
        characteristics: 'Trocken, fruchtig, frisch, weiß, italienisch',
        available: false
    },
    {
        name: 'El Coto Blanco',
        id: 'w1',
        prices: {
            '0.1l': '4,00€',
            '0.2l': '7,50€',
            'flasche': '25,00€'
        },
        color: 'white',
        grape: 'ca. 93 % Viura, 4 % Sauvignon Blanc, 3 % Verdejo',
        origin: 'Spanien, Rioja DOCa',
        shortDescription: 'Frisch‑fruchtiger Weißwein mit Aromen von Zitrus, Apfel und Pfirsich.',
        longDescription: 'Der El Coto Blanco zeigt sich in hellem Strohgelb mit grünen Reflexen. In der Nase dominieren Aromen von Zitrusfrüchten, grünem Apfel, Pfirsich und weißen Blüten. Am Gaumen lebendig und ausgewogen bei mittlerem Körper, geprägt von frischer Säure, einer dezenten Mineralität und einem klaren, erfrischenden Abgang. Ideal zu Meeresfrüchten, gegrilltem Fisch, Salaten oder leichten Tapas. Serviertemperatur: 7–8 °C.',
        image: null,
        characteristics: 'Trocken, frisch, fruchtig, mineralisch',
        available: true
    },
    {
        name: 'Julian',
        id: 174,
        prices: {
            '0.1l': '5,00€',
            '0.2l': '9,50€',
            'flasche': '32,50€'
        },
        color: 'white',
        grape: 'Bronner',
        origin: 'Italien, Südtirol',
        shortDescription:
            'Ein charaktervoller Orange Wine aus der pilzwiderstandsfähigen Bronner-Traube – bio, elegant und naturbelassen.',
        longDescription:
            'Der Julian von Lieselehof ist ein maischevergorener Weißwein aus der PIWI-Rebsorte Bronner. Er stammt aus dem Weinbaugebiet Vigneti delle Dolomiti IGT und wird nach ökologischen Richtlinien produziert. In der Nase zeigen sich Noten von exotischen Früchten, Zitrus und floralen Aromen. Am Gaumen ist er vollmundig, leicht tanninhaltig, mit animierender Säure und eleganter Mineralität. Ein naturnaher Wein mit Anspruch und Tiefe – ideal für Entdecker und Fans von Orange Wines.',
        image: null,
        characteristics: 'Trocken, Orange Wine, exotisch, floral, mineralisch',
        available: true
    },
    {
        "name": "Pompaelo Blanc de Noir",
        "id": 27,
        prices: {
            '0.1l': '6,50€',
            '0.2l': '11,90€',
            'flasche': '37,50€'
        },
        "color": "white",
        "grape": "100% Garnacha",
        "origin": "Spanien, Navarra",
        "shortDescription": "Von K&D wine stories. Etwas ganz Besonderes! Trocken, fruchtiger Weißwein aus roten Garnacha-Trauben mit Noten von roten Früchten, Pfirsich und einem Hauch Lakritz.",
        "longDescription": "Besucht Danyel in seinem Shop in der Schlesienstraße 3! Er hat dort noch viel mehr Schätze wie diesen. Der Pompaelo Blanc de Noirs wird aus 100% Garnacha-Trauben hergestellt, die hell gekeltert werden, um einen weißen Wein zu erzeugen. Er präsentiert sich mit einem hellen, blassen Farbspiel mit leicht goldenen oder lachsfarbenen Tönen. In der Nase zeigt er Noten von frischen roten Früchten, Pfirsich und leichten Anklängen von Lakritz. Am Gaumen ist er frisch und sehr fruchtig, mit einem angenehmen Gleichgewicht von Körper und Säure. Ein vielseitiger Begleiter für leichte Gerichte oder als Aperitif.",
        "image": null,
        "characteristics": "Trocken, fruchtig, frisch, weiß, Garnacha, elegant",
        "available": true
    },

    // {
    //     name: 'Dr. Bürklin-Wolf Riesling 2022',
    //     id: 4,
    //     prices: {'flasche': '€37,50'},
    //     color: 'white',
    //     grape: 'Riesling',
    //     origin: 'Deutschland, Pfalz',
    //     shortDescription:
    //         'Ein klassisch trockener Riesling mit betonter Zitrus- und Mineralität.',
    //     longDescription:
    //         'Der Dr. Bürklin-Wolf Riesling 2022 zeigt einen hellgelben Farbton, in dem Aromen von Limette, grünem Apfel und einem Hauch Pfirsich zusammen mit einer feinen Mineralität harmonieren. Er ist absolut trocken, mit einer lebendigen Säure und einem langen, frischen Abgang, der die typischen Charakteristika der Pfalz widerspiegelt.',
    //     image: null,
    //     characteristics: 'Trocken, frisch, aromatisch, mineralisch',
    //     available: true
    // },
    // {
    //     id: 5,
    //     name: 'Knipser Steinbuckel Riesling GG 2018',
    //     prices: {'flasche': '€29,90'},
    //     color: 'white',
    //     grape: 'Riesling',
    //     origin: 'Deutschland, Mosel/Nahe – Knipser',
    //     shortDescription:
    //         'Ein eleganter, klassisch trockener Riesling mit intensiven Zitrus- und Steinakzenten.',
    //     longDescription:
    //         'Der Knipser Steinbuckel 2018 Riesling GG besticht durch eine feine, mineralische Struktur und Aromen von Limette, grünem Apfel und mineralischen Steinnoten. Er präsentiert sich absolut trocken, mit einer knackigen Säure und einem langanhaltenden Abgang, der die schieferhaltigen Böden der Region widerspiegelt.',
    //     image: null,
    //     characteristics: 'Trocken, elegant, mineralisch, frisch',
    //     available: true
    // },
    // {
    //     id: 6,
    //     name: 'Dr. Loosen Weißburgunder Blauschiefer 2018',
    //     prices: {'flasche': '€27,50'},
    //     color: 'white',
    //     grape: 'Weißburgunder',
    //     origin: 'Deutschland, Mosel',
    //     shortDescription:
    //         'Ein filigraner Weißburgunder, der absolut trocken und fein-fruchtig ist.',
    //     longDescription:
    //         'Der Dr. Loosen Weißburgunder Blauschiefer 2018 überzeugt mit einer harmonischen Balance aus zarten Fruchtnoten von Birne und Zitrus, unterstützt von einer dezenten Mineralität, die von den Blauschieferböden der Mosel zeugt. Er ist klassisch trocken, mit einem langen, geschmeidigen Abgang, der zu leichten Speisen passt.',
    //     image: null,
    //     characteristics: 'Trocken, harmonisch, mineralisch, elegant',
    //     available: true
    // },
    // {
    //     id: 7,
    //     name: 'Knipser Sauvignon Blanc 2019',
    //     prices: {'flasche': '€27,50'},
    //     color: 'white',
    //     grape: 'Sauvignon Blanc',
    //     origin: 'Deutschland, Pfalz',
    //     shortDescription:
    //         'Ein knackiger Sauvignon Blanc, der durch seine intensive Frische besticht.',
    //     longDescription:
    //         'Der Knipser Sauvignon Blanc 2019 beeindruckt mit einer strahlenden Säure und einem Bouquet aus frischen Zitrusfrüchten sowie einem Hauch von grünem Gras. Er ist absolut trocken und bietet einen langanhaltenden, erfrischenden Abgang, der die typischen Eigenschaften der Pfalz widerspiegelt.',
    //     image: null,
    //     characteristics: 'Trocken, knackig, frisch',
    //     available: true
    // },
    // {
    //     id: 10,
    //     name: 'Knipser Sauvignon Blanc 2019',
    //     prices: {'flasche': '€27,50'},
    //     color: 'white',
    //     grape: 'Sauvignon Blanc',
    //     origin: 'Deutschland, Pfalz',
    //     shortDescription:
    //         'Ein trockener, knackiger Sauvignon Blanc mit intensiver Frische und klaren Zitrusnoten.',
    //     longDescription:
    //         'Der Knipser 2019 Sauvignon Blanc besticht durch seine strahlende Säure und ein Bouquet aus frischen Zitrusfrüchten, untermalt von einem Hauch grünem Gras. Absolut trocken und mit einem langanhaltenden, erfrischenden Abgang – typisch für die Pfalz.',
    //     image: null,
    //     characteristics: 'Trocken, knackig, frisch',
    //     available: true
    // },
]