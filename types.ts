export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Coffee' | 'Main' | 'Dessert';
  image: string;
  calories: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}

export enum AppView {
  HOME = 'HOME',
  MENU = 'MENU',
  TRACKER = 'TRACKER',
  CONTACT = 'CONTACT',
}