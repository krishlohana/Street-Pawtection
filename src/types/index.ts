export interface Animal {
  id: string;
  name: string;
  type: 'dog' | 'cat' | 'other';
  age: string;
  gender: 'male' | 'female';
  description: string;
  imageUrl: string;
  location: string;
  rescued: string; // date
  status: 'available' | 'pending' | 'adopted';
}

export interface Report {
  id: string;
  animalType: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  imageUrl: string;
  status: 'reported' | 'rescued' | 'processed';
  date: string;
  contact: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
}

export interface Volunteer {
  name: string;
  email: string;
  phone: string;
  address: string;
  interests: string[];
  availability: string;
  experience: string;
}