import type {Notification} from "../interfaces/notification.ts";

export const notifications:Array<Notification> = [
    {
        title: "Rosé Happy Hour 🍷",
        text: "Zu jedem Rosé gibt’s im April eine Käse-Schinkenplatte aufs Haus! Gilt Mo–Fr bis 19 Uhr.",
        image: undefined,
        createdAt: new Date('2025-04-08T10:24:00')
    },
    {
        title: "Mittwoch 23.04.",
        text:"SAVE THE DATE! Großes erwartet Euch!",
        image: undefined,
        createdAt: new Date('2025-04-08T10:24:00')
    },
    {
        title: "Folge uns unauffällig!",
        text: "Auf instagram informieren wir Euch immer über aktuelle Aktionen und Events. Folge uns, um nichts zu verpassen! ",
        image: "insta_follow.gif",
        linkText: "@casa_vazquez_muenster",
        linkTo: "https://www.instagram.com/casa_vazquez_muenster/",
        createdAt: new Date('2025-04-01T10:24:00')
    },
    {
        title: "Alkoholpause?",
        text: "Finden wir gut! 👌 Wir bieten viele leckere Spritz-Getränke und Cocktails auch ohne Alkohol an",
        image: "icons8-kein-alkohol-64.png",
        roundedImage: true,
        createdAt: new Date('2025-04-01T10:24:00')
    },
    {
        title: "Let's Spritz 🍹!",
        text: "Jeden Mittwoch gibt es bei uns alle möglichen Spritz für nur 6,50 - Alkoholfrei für 5,90 (Auf die Gesundheit!✨).",
        image: "icons8-strandcocktail-96.png",
        createdAt: new Date('2025-03-31T10:24:00')
    },
    {
        title: "Schon probiert?",
        text: "Unser Yuzu Spritz ist gefährlich lecker! Vielleicht sogar besser als Aperol Spritz? Entscheide selbst..! Heute leider ausverkauft :/",
        image: "yuzu.jpg",
        roundedImage: true,
        createdAt: new Date('2025-04-01T10:24:00')
    },
]