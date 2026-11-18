import type { IdeaCard, WishItem } from "../types";


export const IDEAS_DATA: IdeaCard[] = [
  {
    id: '1',
    title: 'Product Profile',
    subtitle: 'Create consistent brand content',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
    promptTemplate: 'Create a consistent brand product profile for ',
  },
  {
    id: '2',
    title: 'Studio Shoot',
    subtitle: 'Full campaign photoshoot',
    gradient: 'linear-gradient(135deg, #db2777 0%, #fb7185 100%)',
    promptTemplate: 'Generate a studio campaign photoshoot for ',
  },
  {
    id: '3',
    title: 'Smart Retouch',
    subtitle: 'Fix product imperfections',
    gradient: 'linear-gradient(135deg, #4d7c0f 0%, #ca8a04 100%)',
    promptTemplate: 'Retouch and remove imperfections from ',
  },
  {
    id: '4',
    title: 'Edit Background',
    subtitle: 'Set a new studio scene',
    gradient: 'linear-gradient(135deg, #be185d 0%, #f59e0b 100%)',
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
    title: 'Style Name',
    category: 'Beauty',
    gradient: 'linear-gradient(160deg, #9a3412 0%, #f59e0b 100%)',
    height: 440,
    saved: false,
  },
  {
    id: 'w2',
    title: 'Style Name',
    category: 'Clothing',
    gradient: 'linear-gradient(160deg, #881337 0%, #e11d48 100%)',
    height: 310,
    saved: false,
  },
  {
    id: 'w3',
    title: 'Style Name',
    category: 'Bags',
    gradient: 'linear-gradient(160deg, #334155 0%, #cbd5e1 100%)',
    height: 420,
    saved: false,
  },
  {
    id: 'w4',
    title: 'Style Name',
    category: 'Clothing',
    gradient: 'linear-gradient(160deg, #7f1d1d 0%, #ef4444 100%)',
    height: 280,
    saved: false,
  },
  {
    id: 'w5',
    title: 'Style Name',
    category: 'Accessories',
    gradient: 'linear-gradient(160deg, #27272a 0%, #a1a1aa 100%)',
    height: 450,
    saved: false,
  },
  {
    id: 'w6',
    title: 'Style Name',
    category: 'Clothing',
    gradient: 'linear-gradient(160deg, #1e293b 0%, #64748b 100%)',
    height: 220,
    saved: false,
  },
  {
    id: 'w7',
    title: 'Style Name',
    category: 'Clothing',
    gradient: 'linear-gradient(160deg, #4c1d95 0%, #8b5cf6 100%)',
    height: 240,
    saved: false,
  },
];
