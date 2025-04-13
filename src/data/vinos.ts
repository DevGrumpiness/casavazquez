import type {Wine} from "../interfaces/vino.ts";

export const dummyWines: Wine[] = [
    {
        id: 17,
        name: 'Barón de Ley Rioja Reserva 2019|2020',
        prices: {'0.1l': "6,00€", '0.2l': "9,50€", 'flasche': '€33,50'},
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
    },
    // {
    //     id: 18,
    //     name: 'Karl Pfaffmann',
    //     prices: {
    //         '0.1l': '4,00€',
    //         '0.2l': '7,00€',
    //         'flasche': '22,50€'
    //     },
    //     color: 'white',
    //     grape: '100% Grauburgunder (Pinot Gris)',
    //     origin: 'Pfalz, Deutschland',
    //     shortDescription: 'Trocken, weicher Grauburgunder mit dezenter Säure und fruchtigen Aromen.',
    //     longDescription: 'Ein feiner, trockener Grauburgunder vom Weingut Karl Pfaffmann in der Pfalz, der mit seiner milden Säure und zarten Fruchtaromen besticht. Er präsentiert sich weich am Gaumen, mit Noten von Birne, Apfel und einem Hauch von Zitrus. Seine dezente Mineralität unterstreicht den klaren Charakter dieses Weißweins und macht ihn zum idealen Begleiter leichter Speisen.',
    //     image: null,
    //     characteristics: 'Trocken, weich, wenig Säure, weiß, fruchtig',
    //     available: true
    // },
    {
        id: 19,
        name: 'Marqués de Riscal',
        prices: {
            '0.1l': '4,00€',
            '0.2l': '7,50€',
            'flasche': '26,50€'
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
    // {
    //     id: 20,
    //     name: 'Colli Vaibò',
    //     prices: {
    //         '0.1l': '5,00€',
    //         '0.2l': '9,50€',
    //         'flasche': '32,50€'
    //     },
    //     color: 'white',
    //     grape: '100% Trebbiano di Lugana (Turbiana)',
    //     origin: 'Lombardei, Italien',
    //     shortDescription: 'Trocken, fruchtig-frischer Lugana aus dem lombardischen Anbaugebiet.',
    //     longDescription: 'Der Colli Vaibò Lugana DOC ist ein lebendiger Weißwein aus der Lombardei, der sich durch seine fruchtigen Aromen von Zitrus und Pfirsich auszeichnet. Mit seiner ausgewogenen Säure und dezenten Mineralität eignet er sich hervorragend als Begleiter zu Fisch- und Pastagerichten. Die charakteristischen Noten der Turbiana-Traube verleihen diesem Lugana eine angenehme Frische und Eleganz.',
    //     image: null,
    //     characteristics: 'Trocken, fruchtig, frisch, weiß, italienisch',
    //     available: true
    // },
    {
        id: 21,
        name: 'Calalenta ("Kühle Nacht")',
        prices: {
            '0.1l': '4,00€',
            '0.2l': '7,50€',
            'flasche': '25,00€'
        },
        color: 'rosé',
        grape: '100% Merlot',
        origin: 'Abruzzen, Italien',
        shortDescription: 'Trocken, leichter Rosé aus Merlot-Trauben mit zartem Hellrosa und feinen Fruchtaromen.',
        longDescription: 'Der Calalenta Rosé (auch "Kühle Nacht" genannt) stammt aus den Abruzzen und wird aus 100% Merlot gekeltert. Dank kühler Nachtlese bewahrt er seine frischen Aromen von Erdbeeren, Kirschen und einem Hauch floraler Noten. Ein leichtes, trockenes Geschmacksprofil mit dezenter Säure und einem angenehm fruchtigen Abgang – ideal als Aperitif oder zu leichten Gerichten.',
        image: null,
        characteristics: 'trocken, leicht, hellrosa, rosé, fruchtig, erfrischend',
        available: true
    },
    {
        id: 22,
        name: 'Rosa Dei Frati',
        prices: {
            '0.1l': '5,00€',
            '0.2l': '9,50€',
            'flasche': '29,50€'
        },
        color: 'rosé',
        grape: 'Gropello, Marzemino, Sangiovese, Barbera',
        origin: 'Lombardia, Italien',
        shortDescription: 'Trocken, komplexer Rosé mit griffiger Struktur und intensiven Fruchtnoten.',
        longDescription: 'Der Rosa Dei Frati ist ein charaktervoller Rosé aus der Lombardei. Durch die Kombination der Rebsorten Gropello, Marzemino, Sangiovese und Barbera entsteht ein komplexes Aroma von roten Beeren, frischen Blüten und feinen Gewürznoten. Eine lebhafte Säure und eine griffige Struktur verleihen ihm eine vielseitige Einsetzbarkeit, ob als Aperitif oder zu Antipasti und leichten Pastagerichten.',
        image: null,
        characteristics: 'Trocken, komplex, griffig, rosé, italienisch, aromatisch',
        available: false
    },
    {
        id: 23,
        name: 'Arrogant Frog',
        prices: {
            '0.1l': '4,50€',
            '0.2l': '7,70€',
            'flasche': '26,50€'
        },
        color: 'rosé',
        grape: 'Syrah',
        origin: 'Coteaux du Languedoc, Frankreich',
        shortDescription: 'Trocken, erfrischender Syrah Rosé mit intensiven Aromen von roten Beeren und Zitrus.',
        longDescription: 'Der Arrogant Frog Syrah Rosé aus dem Languedoc besticht durch seine lebendige Frische und elegante Struktur. Er entfaltet Aromen von roten Beeren, Zitrusfrüchten und floralen Nuancen, was ihm einen einzigartigen Charakter verleiht. Feine Tannine und eine ausgewogene Säure machen ihn zum idealen Begleiter zu leichten Gerichten und sommerlichen Anlässen.',
        image: null,
        characteristics: 'Trocken, knackig, fruchtig, rosé, erfrischend, elegant',
        available: true
    },
    {
        id: 1,
        name: 'EMBOCADERO',
        prices: {'0.1l': "5,50€", '0.2l': "9,50€", 'flasche': '€32,50'},
        color: 'red',
        grape: '100% Tinto Fino',
        origin: 'Ribera del Duero',
        shortDescription: 'Eleganter, trockener Rotwein mit lebendigen Beeren- und Zedernholznoten.',
        longDescription: 'Embocadero Ribera del Duero 2021 – Dieser trockene Rotwein aus der renommierten Region Ribera del Duero besticht durch eine elegante, feinkörnige Tanninstruktur und animierende Säure. Sein lang anhaltender Abgang ist von Nuancen geprägt, die an Zedernholz erinnern. Im Bouquet entfalten sich lebendige Fruchtnoten von Schlehen, dunklen Beeren und Pflaumen, ergänzt durch subtile Anklänge von Lorbeer, Süßholz und einem Hauch Vanille. Am Gaumen setzt sich der Wein mit einer weichen Holznote in saftige Aromen von Kirsch, Schlehen und Beeren fort – ein harmonischer Wein, der Tiefe und Finesse vereint.',
        image: null,
        characteristics: 'Trocken, vollmundig, tiefrot, ehrlich',
        available: true
    },
    {
        id: 2,
        name: 'David Moreno',
        prices: {'0.1l': "4,50€", '0.2l': "7,50€", 'flasche': '€27,50'},
        color: 'red',
        grape: 'Tempranillo',
        origin: 'Rioja DOCa',
        shortDescription:
            'Trocken, kirschrot mit rubinrotem Schimmer – intensiv, elegant, mit reifen Beeren und feinen Röstaromen.',
        longDescription: 'Dieser Rotwein ist trocken und besticht durch eine tief kirschrote Farbe mit einem rubinroten Schimmer. Im Bouquet entfalten sich intensive, elegante Aromen von reifen roten Beeren, ergänzt durch Trockenfrüchte (wie Pfirsich), feine Röstaromen, Vanille und Nuancen von weichem Eichenholz. Am Gaumen präsentiert sich der Wein seidig, würzig, rund und ausgeglichen, mit reifen Tanninen, die in einem lang anhaltenden Abgang münden. Hergestellt aus handverlesenen Trauben, von denen 75 % entrappt wurden, durchläuft er einen 14-monatigen Barriqueausbau – 8 Monate in amerikanischen und 6 Monate in französischen Eichenfässern – gefolgt von weiterer Flaschenreife.',
        image: null,
        characteristics: 'Trocken, elegant, rund',
        available: true
    },
    {
        id: 3,
        name: 'Marques de Cáceres',
        prices: {'0.1l': "5,00€", '0.2l': "8,50€", 'flasche': '€29,50'},
        color: 'red',
        grape: 'Tempranillo',
        origin: 'Rioja DOCa',
        shortDescription:
            'Fruchtig-frischer Wein mit dunklen Früchten und würzigem Holz im Geschmack.',
        longDescription: 'Marqués de Cáceres – ein Synonym für herausragende Qualität – präsentiert in diesem Wein eine harmonische Vereinigung der Rebsorten Tempranillo, Garnacha und Graciano. Diese Crianza besticht durch ein Bouquet dunkler Früchte und sonnenreifer Kirschen, untermalt von würzigen Nuancen von Vanille, Nelke und Lakritze, die durch den Einsatz von gewürztem Eichenholz noch intensiviert werden. Am Gaumen zeigt sich der Wein frisch und fruchtig, mit feinen Anklängen von Erdbeeren und Himbeeren, während seine festen Tannine für eine strukturierte Textur sorgen, die hervorragend zu gerösteten Nüssen und mineralischen Noten passt.',
        image: null,
        characteristics: 'Trocken, würzig',
        available: true
    },
    {
        id: 4,
        name: 'Dr. Bürklin-Wolf Riesling 2022',
        prices: {'flasche': '€37,50'},
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
        prices: {'flasche': '€29,90'},
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
        prices: {'flasche': '€27,50'},
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
        prices: {'flasche': '€27,50'},
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
        prices: {'flasche': '€54,50'},
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
        prices: {'flasche': '€34,50'},
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
        prices: {'flasche': '€27,50'},
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
        prices: {'flasche': '€55,00'},
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
        prices: {'flasche': '€37,50'},
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
        prices: {'flasche': '€39,50'},
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
        prices: {'flasche': '€39,00'},
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
        prices: {'flasche': '€32,50'},
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
        prices: {'flasche': '€55,00'},
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
        name: 'Miraval',
        prices: {'flasche': '€49,00'},
        color: 'rosé',
        grape: 'Cinsault, Grenache, Syrah, Rolle',
        origin: 'Frankreich, Provence',
        shortDescription: 'Eleganter Rosé mit Frische, Frucht und feiner Mineralität.',
        longDescription: 'Der Miraval Rosé aus der Provence ist ein erfrischender, eleganter Wein mit zarter Lachsfarbe. In der Nase zeigen sich Aromen von frischen Himbeeren, weißen Blüten und einem Hauch Limette. Am Gaumen überzeugt er mit einer lebendigen Frische, feiner Mineralität und einer harmonischen Balance aus Frucht und Säure. Ein stilvoller Rosé, perfekt für warme Tage und mediterrane Speisen.',
        image: null,
        characteristics: 'Trocken, frisch, floral, mineralisch',
        available: true
    },
    {
        id: 24,
        name: 'Minuty Rosé',
        prices: { '0.1l': '5,00€', '0.2l': '9,00€', 'flasche': '€32,50' },
        color: 'rosé',
        grape: 'Grenache, Cinsault, Syrah',
        origin: 'Frankreich, Côtes de Provence',
        shortDescription: 'Frischer, eleganter Rosé mit zarten Frucht- und Zitrusnoten.',
        longDescription: 'Der M de Minuty Rosé ist ein eleganter Roséwein aus der Provence mit einer zarten, lachsfarbenen Erscheinung. Er verführt mit feinen Aromen von weißen Blüten, Erdbeeren, Johannisbeeren und einem Hauch Zitrus. Leicht, trocken und lebendig am Gaumen – mit einem frischen Abgang und ausgewogener Säure. Ideal zu mediterraner Küche oder als stilvoller Aperitif.',
        image: null,
        characteristics: 'Trocken, frisch, leicht, zitrus, floral',
        available: true
    },
    {
        id: 25,
        name: 'La Baume Rosé',
        prices: { '0.1l': '4,50€', '0.2l': '8,00€', 'flasche': '€27,50' },
        color: 'rosé',
        grape: 'Grenache, Cinsault',
        origin: 'Frankreich, Languedoc',
        shortDescription: 'Weicher Rosé mit Fruchtfülle und feiner Würze.',
        longDescription: 'Der La Baume Rosé aus dem Languedoc begeistert mit seiner hellen Lachsfarbe und einem intensiven Duft nach Erdbeeren, Himbeeren und Pfirsich. Am Gaumen zeigt er sich fruchtig, ausgewogen und leicht würzig mit angenehmer Frische. Ein unkomplizierter, aromatischer Rosé, ideal für laue Abende und Tapas.',
        image: null,
        characteristics: 'Trocken, interessant würzig, weich, ausgewogen',
        available: true
    },
    {
        id: 26,
        name: 'El Coto Rosado',
        prices: {
            '0.1l': '4,00€',
            '0.2l': '7,50€',
            'flasche': '25,00€'
        },
        color: 'rosé',
        grape: '90% Tempranillo, 10% Garnacha',
        origin: 'Spanien, Rioja DOCa',
        shortDescription: 'Frischer, eleganter Rosé mit Aromen von Erdbeeren und roten Johannisbeeren.',
        longDescription: 'Der El Coto Rosado präsentiert sich in einem blassen Lachsrosa und besticht durch ein Bouquet von frischen Erdbeeren und roten Johannisbeeren. Am Gaumen zeigt er sich rund und elegant mit einer lebendigen Frische, die ihn zu einem idealen Begleiter für Salate, Geflügelgerichte und Meeresfrüchte macht. Genießen Sie ihn gut gekühlt.',
        image: null,
        characteristics: 'Trocken, frisch, fruchtig, elegant',
        available: true
    },
    {
        "id": 27,
        "name": "Pompaelo Blanc de Noirs",
        prices: {
            '0.1l': '5,00€',
            '0.2l': '9,50€',
            'flasche': '32,00€'
        },
        "color": "white",
        "grape": "100% Garnacha",
        "origin": "Spanien, Navarra",
        "shortDescription": "Etwas ganz Besonderes! Trocken, fruchtiger Weißwein aus roten Garnacha-Trauben mit Noten von roten Früchten, Pfirsich und einem Hauch Lakritz.",
        "longDescription": "Der Pompaelo Blanc de Noirs wird aus 100% Garnacha-Trauben hergestellt, die hell gekeltert werden, um einen weißen Wein zu erzeugen. Er präsentiert sich mit einem hellen, blassen Farbspiel mit leicht goldenen oder lachsfarbenen Tönen. In der Nase zeigt er Noten von frischen roten Früchten, Pfirsich und leichten Anklängen von Lakritz. Am Gaumen ist er frisch und sehr fruchtig, mit einem angenehmen Gleichgewicht von Körper und Säure. Ein vielseitiger Begleiter für leichte Gerichte oder als Aperitif.",
        "image": null,
        "characteristics": "Trocken, fruchtig, frisch, weiß, Garnacha, elegant",
        "available": true
    }
];
