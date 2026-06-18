import roseImage from "../assets/images/riscal_rose.png";
import scheibelImage from "../assets/images/scheibel_marille.png";
import duom from "../assets/images/duom.jpg";
import nounat from "../assets/images/nounat.jpg";

export interface FeaturedPromo {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export const featuredPromos: FeaturedPromo[] = [
  {
    id: "scheibel",
    title: "Der perfekte Abschluss",
    description: "Hochwertige Brände von Scheibel, um den Abend abzurunden. Jetzt probieren!",
    image: scheibelImage,
  },

  {
    id: "limited-rose",
    title: "Limited Winter Rosé",
    description: " Unsere Winter Rosé von Marqués de Riscal und Baron de Ley  – 34,50€ solange der Vorrat reicht",
    image: roseImage
  },
  {
    id: "musicFeb27",
    title: "Live Music - DuoM",
    description: "Am 27.02. | 28.03. - DuoM rundet Euren Abend mit Musik und Witz ab.",
    image: duom
  },
  {
    id: "weintasting",
    title: "Wein Tasting",
    description: "07.05. Entdecke die Welt der Weine mit unserem exklusiven Wein Tasting Event mit K&D Wein Stories",
    image: nounat
  }
];
