import { MenuItem, GalleryMedia } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Fresh Fruit Juices
  {
    id: 'juice-pineapple-ginger',
    name: 'Pure Pineapple & Ginger',
    category: 'juices',
    price: 25,
    description: 'Cold-pressed sweet Obuasi pineapples infused with fresh zesty ginger. 100% natural, no added sugar.',
    image: '/galleryAI/gallery_fresh_juices_smoothies_1790282003450.jpg',
    badge: '100% FRESH',
    tags: ['Cold-Pressed', 'Immunity Boost', 'No Added Sugar']
  },
  {
    id: 'juice-orange-watermelon',
    name: 'Fresh Orange & Watermelon Splash',
    category: 'juices',
    price: 25,
    description: 'Sun-kissed sweet oranges freshly squeezed and layered with cold diced watermelon juice.',
    image: '/galleryAI/gallery_fresh_juices_smoothies_1790282003450.jpg',
    badge: 'CUSTOMER FAVORITE',
    tags: ['Chilled', 'Hydrating', 'Vitamin C']
  },
  {
    id: 'juice-mango-passion',
    name: 'Tropical Mango Passion Juice',
    category: 'juices',
    price: 30,
    description: 'Velvety local ripe mango juice blended with fragrant tropical passion fruit seeds and pulp.',
    image: '/galleryAI/gallery_fresh_juices_smoothies_1790282003450.jpg',
    badge: 'SEASONAL HIT',
    tags: ['Rich & Thick', 'Tropical', 'Sweet']
  },
  {
    id: 'juice-detox-green',
    name: 'Detox Fresh Green Juice',
    category: 'juices',
    price: 30,
    description: 'Crisp cucumber, green apple, fresh lime, garden mint, and young ginger juice.',
    image: '/galleryAI/gallery_fresh_juices_smoothies_1790282003450.jpg',
    badge: 'CLEANSE',
    tags: ['Detox', 'Low Calorie', 'Refreshing']
  },

  // Smoothies & Milkshakes
  {
    id: 'smoothie-kim-green',
    name: 'Signature Green Power Smoothie',
    category: 'smoothies',
    price: 35,
    description: 'Fresh baby greens, ripe banana, avocado, fresh apple juice, and wild honey blended velvety smooth.',
    image: '/galleryAI/gallery_fresh_juices_smoothies_1790282003450.jpg',
    badge: 'HOUSE SPECIAL',
    tags: ['Energizing', 'Creamy', 'Natural Honey']
  },
  {
    id: 'smoothie-strawberry-banana',
    name: 'Strawberry Banana Swirl Smoothie',
    category: 'smoothies',
    price: 35,
    description: 'Whole sweet strawberries whipped with frozen banana and chilled probiotic yogurt.',
    image: '/galleryAI/gallery_fresh_juices_smoothies_1790282003450.jpg',
    badge: 'KIDS FAVORITE',
    tags: ['Fruity', 'Real Berries', 'Silky']
  },
  {
    id: 'shake-thick-vanilla-chocolate',
    name: 'Thick Real Ice Cream Milkshake',
    category: 'smoothies',
    price: 40,
    description: 'Crafted with our rich daily churned ice cream, fresh whole milk, chocolate drizzle, and whipped cream.',
    image: '/galleryAI/gallery_icecream_sundae_special_1790282031479.jpg',
    badge: 'BESTSELLER',
    tags: ['Real Ice Cream', 'Super Thick', 'Chocolate or Vanilla']
  },

  // Sandwiches
  {
    id: 'sandwich-club-deluxe',
    name: 'Triple-Decker Club Sandwich',
    category: 'sandwiches',
    price: 40,
    description: 'Golden toasted bread layered with seasoned pulled chicken, boiled farm egg, crisp lettuce, ripe tomatoes, and chef herb spread.',
    image: '/galleryAI/gallery_club_sandwiches_1790282022461.jpg',
    badge: 'TOP SELLER',
    tags: ['Triple-Decker', 'High Protein', 'Served Warm']
  },
  {
    id: 'sandwich-crispy-chicken',
    name: 'Crispy Chicken & Herb Sub',
    category: 'sandwiches',
    price: 35,
    description: 'Tender marinated chicken breast with crunchy garden slaw, melted cheddar, and Kim Prince signature garlic mayo.',
    image: '/galleryAI/gallery_club_sandwiches_1790282022461.jpg',
    badge: 'FRESH GRILL',
    tags: ['Toasted', 'Savory', 'Hearty']
  },
  {
    id: 'sandwich-tuna-melt',
    name: 'Savory Tuna & Sweetcorn Melt',
    category: 'sandwiches',
    price: 35,
    description: 'Flaked light tuna, juicy golden sweetcorn, red onions, melted cheese on crusty artisanal toast.',
    image: '/galleryAI/gallery_club_sandwiches_1790282022461.jpg',
    tags: ['Comfort Food', 'Melted Cheese', 'Toasted']
  },
  {
    id: 'sandwich-veggie-egg',
    name: 'Fresh Garden Veggie & Egg Sandwich',
    category: 'sandwiches',
    price: 30,
    description: 'Farm fresh sliced boiled eggs, crunchy cucumber, tomatoes, lettuce, and creamy mustard dressing.',
    image: '/galleryAI/gallery_club_sandwiches_1790282022461.jpg',
    tags: ['Vegetarian', 'Light & Fresh', 'Quick Bite']
  },

  // Pastries & Snacks
  {
    id: 'pastry-golden-meatpie',
    name: 'Crispy Golden Meat Pies (2 pcs)',
    category: 'pastries',
    price: 25,
    description: 'Golden, flaky handmade pastry crust stuffed with richly seasoned minced beef, tender potatoes, and garden herbs.',
    image: '/galleryAI/gallery_golden_pastries_snacks_1790282012771.jpg',
    badge: 'FRESHLY BAKED',
    tags: ['Oven Hot', '100% Beef', 'Flaky Pastry']
  },
  {
    id: 'pastry-fresh-muffins',
    name: 'Oven-Fresh Blueberry & Vanilla Muffins',
    category: 'pastries',
    price: 20,
    description: 'Moist bakery-style muffin bursting with juicy blueberries and topped with crunchy golden sugar crust.',
    image: '/galleryAI/gallery_golden_pastries_snacks_1790282012771.jpg',
    badge: 'SWEET TREAT',
    tags: ['Bakery Fresh', 'Moist & Fluffy', 'Coffee Buddy']
  },
  {
    id: 'pastry-beef-samosas',
    name: 'Spicy Beef & Veggie Samosas (3 pcs)',
    category: 'pastries',
    price: 25,
    description: 'Crispy golden triangles packed with spiced minced meat, scallions, and chili flakes, served with tangy sweet chili dip.',
    image: '/galleryAI/gallery_golden_pastries_snacks_1790282012771.jpg',
    badge: 'CRUNCHY',
    tags: ['Spiced', 'Golden Fried', 'Party Favorite']
  },
  {
    id: 'pastry-spring-rolls',
    name: 'Crispy Chicken Spring Rolls (3 pcs)',
    category: 'pastries',
    price: 25,
    description: 'Ultra-crisp handmade rolls filled with tender shredded chicken, julienne carrots, and crunchy cabbage.',
    image: '/galleryAI/gallery_golden_pastries_snacks_1790282012771.jpg',
    tags: ['Crispy', 'Savory', 'Finger Food']
  },

  // Ice Cream & Sundaes
  {
    id: 'icecream-classic-sundae',
    name: 'Classic Ice Cream Sundae',
    category: 'icecream',
    price: 30,
    description: 'Generous scoops of creamy homemade ice cream, finished with rich chocolate/strawberry drizzle, rainbow sprinkles, and crisp wafer.',
    image: '/galleryAI/gallery_icecream_sundae_special_1790282031479.jpg',
    badge: 'LEGENDARY',
    tags: ['Obuasi Classic', 'Wafers & Sauce', 'Served Cold']
  },
  {
    id: 'icecream-cocktail-special',
    name: 'Kim Prince Ice Cream Cocktail',
    category: 'icecream',
    price: 45,
    description: 'Our signature house dessert! Tall glass layered with ice cream scoops, tropical fruit cocktail, fruit syrup, and roasted crushed peanuts.',
    image: '/galleryAI/gallery_icecream_sundae_special_1790282031479.jpg',
    badge: 'SIGNATURE DESSERT',
    tags: ['Layered', 'Real Fruits', 'Showstopper']
  },
  {
    id: 'icecream-double-waffle',
    name: 'Double Scoop Crispy Waffle Cup',
    category: 'icecream',
    price: 25,
    description: 'Two generous scoops of your choice (Creamy Vanilla, Strawberry Swirl, or Rich Chocolate) in a crisp waffle cone or bowl.',
    image: '/galleryAI/gallery_icecream_sundae_special_1790282031479.jpg',
    tags: ['Hand Dipped', 'Waffle Cone', 'Classic']
  }
];

export const GALLERY_MEDIA_ITEMS: GalleryMedia[] = [
  {
    id: 'img-juices',
    title: 'Fresh Cold Juices & Iced Smoothies',
    type: 'image',
    url: '/galleryAI/gallery_fresh_juices_smoothies_1790282003450.jpg',
    description: 'Cold-pressed natural juices prepared to order with fresh pineapples, oranges, and greens.'
  },
  {
    id: 'vid-juices-loop',
    title: 'Fresh Juice Pour & Blending (Live Clip)',
    type: 'video',
    url: '/galleryAI/fresh_juice_blend_loop.mp4',
    description: 'Watch how we freshly blend every single drink right on our bar counter.'
  },
  {
    id: 'img-sandwiches',
    title: 'Gourmet Toasted Club Sandwiches',
    type: 'image',
    url: '/galleryAI/gallery_club_sandwiches_1790282022461.jpg',
    description: 'Crisp golden toasted sandwiches filled with grilled chicken, egg, and garden greens.'
  },
  {
    id: 'img-pastries',
    title: 'Golden Meat Pies & Fresh Baked Muffins',
    type: 'image',
    url: '/galleryAI/gallery_golden_pastries_snacks_1790282012771.jpg',
    description: 'Daily oven-baked snacks, crispy meat pies, and warm sweet muffins.'
  },
  {
    id: 'vid-snacks-loop',
    title: 'Hot Golden Pastries Fresh From Oven (Live Clip)',
    type: 'video',
    url: '/galleryAI/crispy_snacks_loop.mp4',
    description: 'Freshly baked daily pastries with savory fillings and golden flaky crusts.'
  },
  {
    id: 'img-sundae',
    title: 'Kim Prince Classic Chilled Sundae',
    type: 'image',
    url: '/galleryAI/gallery_icecream_sundae_special_1790282031479.jpg',
    description: 'Churned ice cream scoops served ice-cold with sweet wafer and chocolate drizzle.'
  }
];
