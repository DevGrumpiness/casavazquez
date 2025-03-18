export interface Snack {
    id: number;
    name: string;
    variants: string[];
    color: Color;
    grape: string;
    origin?: string;
    shortDescription?: string;
    longDescription?: string;
    image?: string | null;
    characteristics?: string;
    available: boolean;
}
