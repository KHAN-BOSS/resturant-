import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Flavor\'s Signature Beef Curry',
    description: 'Slow-cooked beef in a rich, spicy masala gravy served with traditional aromatic rice.',
    price: 18.50,
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop', // Rich, dark authentic curry
    calories: 850,
  },
  {
    id: '2',
    name: 'Royal Vegetable Biryani',
    description: 'Long-grain basmati rice layered with spiced vegetables, saffron, and fried onions.',
    price: 14.00,
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop', // Clear, delicious Biryani
    calories: 600,
  },
  {
    id: '3',
    name: 'Golden Crispy Fish',
    description: 'Perfectly fried golden fish fillets with a crunchy coating, served with fresh lemon.',
    price: 16.50,
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=800&auto=format&fit=crop', // Golden fried fish
    calories: 720,
  },
  {
    id: '4',
    name: 'Barista Art Latte',
    description: 'Premium espresso poured over steamed milk with intricate heart foam art.',
    price: 5.50,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop', // Professional Latte Art
    calories: 180,
  },
  {
    id: '5',
    name: 'Splashing Espresso Blend',
    description: 'A dynamic blend of dark roast espresso with a splash of hazelnut cream.',
    price: 4.50,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop', // Elegant espresso cup
    calories: 45,
  },
  {
    id: '6',
    name: 'Classic Tiramisu',
    description: 'Layers of coffee-soaked sponge and mascarpone cheese, dusted with cocoa.',
    price: 8.00,
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop', // Delicious Tiramisu
    calories: 450,
  }
];