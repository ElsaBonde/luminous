import mascara from './assets/mascara.jpg';
import blush from './assets/rouge.jpg';
import highlighter from './assets/highlighter.jpg';
import lipstick from './assets/lipstick.jpg';

export interface newProduct {
    id: number;
    image: string;
    name: string;
    price: number;
    isNew?: boolean;
}

export const mockedProducts: newProduct[] = [
    {
        id: 1,
        image: mascara,
        name: 'Doll eye mascara',
        price: 19.95,
        isNew: true,
    },
    {
        id: 2,
        image: blush,
        name: 'Rose Blush',
        price: 17.00,
        isNew: true,
    },
    {
        id: 3,
        image: highlighter,
        name: 'Wonderglow highlighter',
        price: 35.60,
        isNew: true,
    },
    {
        id: 4,
        image: lipstick,
        name: 'Kiss me now lipstick',
        price: 14.50,
    },
    ];
