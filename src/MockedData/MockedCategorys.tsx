import eyes from "../assets/eyes.jpg";
import face from "../assets/face.jpg";
import brows from "../assets/brows.jpg";
import lips from "../assets/lips.jpg";
import sets from "../assets/sets.jpg";
import giftCards from "../assets/giftcards.jpg";

export interface newCategory {
    id: number;
    image: string;
    name: string;
};

export const mockedCategorys: newCategory[] = [
    {
        id: 1,
        image: eyes,
        name: 'Eyes',
    },
    {
        id: 2,
        image: face,
        name: 'Face',
    },
    {
        id: 3,
        image: brows,
        name: 'Brows',
    },
    {
        id: 4,
        image: lips,
        name: 'Lips',
    },
    {
        id: 5,
        image: sets,
        name: 'Sets',
    },
    {
        id: 6,
        image: giftCards,
        name: 'Gift Cards',
    },
];