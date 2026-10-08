export type BranchType = 'dine-in' | 'parcel' | 'both';
export type BranchRegion = 'Karad & Satara' | 'Pune' | 'Mumbai' | 'Sangli & Kolhapur' | 'Konkan';

export interface Branch {
  id: string;
  name: string;
  city: string;
  area: string;
  region: BranchRegion;
  type: BranchType;
  phone: string;
  mapsUrl: string;
  isFlagship?: boolean;
  address?: string;
  facilities?: string[];
}

export interface Dish {
  id: string;
  name: string;
  marathiName: string;
  category: 'Signature' | 'Main Course' | 'Traditional Accompaniment' | 'Curd & Dessert';
  tagline: string;
  description: string;
  image: string;
  isSignature?: boolean;
  spiceLevel?: 'Mild' | 'Medium' | 'Kolhapuri Thecha';
}

export interface GalleryImage {
  id: string;
  title: string;
  marathiTitle?: string;
  category: 'Food' | 'Ambiance' | 'Heritage' | 'Experience';
  imageUrl: string;
  caption?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  isCTA?: boolean;
}

export interface HeritagePillar {
  title: string;
  marathiTitle: string;
  description: string;
  iconName: string;
}
