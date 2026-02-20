import giftCardImage from "../assets/images/gutschein.jpg";
import roseImage from "../assets/images/riscal_rose.png";
import scheibelImage from "../assets/images/scheibel_marille.png";
import wineBottleImage from "../assets/images/default_vino_white.png";

export interface FeaturedPromo {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export const featuredPromos: FeaturedPromo[] = [
  {
    id: "bottle-discount",
    title: "11% Valentins Rabatt",
    description: "Sichert euch jetzt 11% Rabatt auf alle Flaschenweine – perfekt für euren gemütlichen Abend!",
    image: wineBottleImage,
  },
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
    id: "valentine",
    title: "Valentinstag",
    description: "Denk dran rechtzeitig zu reservieren!",
    image: giftCardImage
  }
];
