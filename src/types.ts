export type MenuCategory = 
  | 'all'
  | 'juices'
  | 'smoothies'
  | 'sandwiches'
  | 'pastries'
  | 'icecream';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'all'>;
  price: number; // in GHC
  description: string;
  image: string;
  badge?: string;
  tags?: string[];
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface GalleryMedia {
  id: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  description?: string;
  isCustom?: boolean;
}
