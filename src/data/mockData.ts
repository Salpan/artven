import type { IdeaCard, WishItem } from "../types";


export const IDEAS_DATA: IdeaCard[] = [
  {
    id: '1',
    title: 'Product Profile',
    subtitle: 'Create consistent brand content',
    image: 'https://unsplash.com',
    promptTemplate: 'Create a consistent brand product profile for ',
  },
  {
    id: '2',
    title: 'Studio Shoot',
    subtitle: 'Full campaign photoshoot',
    image: 'https://unsplash.com',
    promptTemplate: 'Generate a studio campaign photoshoot for ',
  },
  {
    id: '3',
    title: 'Smart Retouch',
    subtitle: 'Fix product imperfections',
    image: 'https://unsplash.com',
    promptTemplate: 'Retouch and remove imperfections from ',
  },
  {
    id: '4',
    title: 'Edit Background',
    subtitle: 'Set a new studio scene',
    image: 'https://unsplash.com',
    promptTemplate: 'Replace the background with a clean studio scene for ',
  },
];

export const WISH_CATEGORIES = [
  'For you',
  'Food',
  'Jewelry',
  'Bags',
  'Clothing',
  'Footwear',
  'Accessories',
  'Beauty',
  'Text',
  'Logos',
  'Ghost Mannequin',
  'Sports',
  'Interior',
  'Electronics',
];

export const WISHES_DATA: WishItem[] = [
  {
    id: 'w1',
    title: 'Hydrating Eye Patches',
    category: 'Beauty',
    image: 'https://unsplash.com',
    saved: false,
  },
  {
    id: 'w2',
    title: 'Crimson Lounge Set',
    category: 'Clothing',
    image: 'https://unsplash.com',
    saved: false,
  },
  {
    id: 'w3',
    title: 'Minimalist White Backpack',
    category: 'Bags',
    image: 'https://unsplash.com',
    saved: true,
  },
  {
    id: 'w4',
    title: 'Knit Zip Sweater Detail',
    category: 'Clothing',
    image: 'https://unsplash.com',
    saved: false,
  },
  {
    id: 'w5',
    title: 'Editorial Studio Concept',
    category: 'Accessories',
    image: 'https://unsplash.com',
    saved: false,
  },
];
