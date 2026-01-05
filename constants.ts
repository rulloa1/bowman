import { Property } from './types';

export const BROKER_INFO = {
  name: "Deanna Bowman",
  title: "Real Estate Broker",
  location: "Spring, TX",
  phone: "(956) 346-6244",
  email: "deanna.bowman@compass.com",
  agency: "Compass",
  bio: "With years of experience in the Spring, TX market, I provide personalized real estate solutions. Whether you're buying your first home or selling a luxury estate, my data-driven approach and dedication ensure you get the best deal possible. I believe in transparency, integrity, and results.",
};

export const MOCK_PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Modern Oasis in Spring",
    price: "$450,000",
    address: "123 Oak Lane, Spring, TX 77379",
    beds: 4,
    baths: 3,
    sqft: 2800,
    imageUrl: "https://picsum.photos/800/600?random=1",
    status: 'For Sale'
  },
  {
    id: 2,
    title: "Luxury Estate",
    price: "$875,000",
    address: "456 Pine Creek, Spring, TX 77380",
    beds: 5,
    baths: 4.5,
    sqft: 4200,
    imageUrl: "https://picsum.photos/800/600?random=2",
    status: 'For Sale'
  },
  {
    id: 3,
    title: "Cozy Family Home",
    price: "$325,000",
    address: "789 Maple Drive, Spring, TX 77373",
    beds: 3,
    baths: 2,
    sqft: 1950,
    imageUrl: "https://picsum.photos/800/600?random=3",
    status: 'Pending'
  },
  {
    id: 4,
    title: "Golf Course View",
    price: "$620,000",
    address: "321 Fairway Blvd, Spring, TX 77389",
    beds: 4,
    baths: 3.5,
    sqft: 3100,
    imageUrl: "https://picsum.photos/800/600?random=4",
    status: 'Sold'
  },
];