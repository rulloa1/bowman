export interface Property {
  id: number;
  title: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  status: 'For Sale' | 'Pending' | 'Sold';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  LISTINGS = 'listings',
  CONTACT = 'contact',
}