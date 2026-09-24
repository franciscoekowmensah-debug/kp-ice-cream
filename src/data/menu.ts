import { MenuItem, GalleryMedia } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Fresh Fruit Juices
  {
    id: 'juice-pineapple-ginger',
    name: 'Pure Pineapple & Ginger',
    category: 'juices',
    price: 25,
    description: 'Cold-pressed sweet Obuasi pineapples infused with fresh zesty ginger. 100% natural, no added sugar.',
    image: '/gallery/juice-cocktail1.jpg',
    badge: '100% FRESH',
    tags: ['Cold-Pressed', 'Immunity Boost', 'No Added Sugar']
  },
  {
    id: 'juice-orange-watermelon',
    name: 'Fresh Orange & Watermelon Splash',
    category: 'juices',
    price: 25,
    description: 'Sun-kissed sweet oranges freshly squeezed and layered with cold diced watermelon juice.',
    image: '/gallery/pine-cocktail.jpg',
    badge: 'CUSTOMER FAVORITE',
    tags: ['Chilled', 'Hydrating', 'Vitamin C']
  },
  {
    id: 'juice-mango-passion',
    name: 'Tropical Mango Passion Juice',
    category: 'juices',
    price: 30,
    description: 'Velvety local ripe mango juice blended with fragrant tropical passion fruit seeds and pulp.',
    image: '/gallery/melon-cocktail.jpg',
    badge: 'SEASONAL HIT',
    tags: ['Rich & Thick', 'Tropical', 'Sweet']
  },
  {
    id: 'juice-detox-green',
    name: 'Detox Fresh Green Juice',
    category: 'juices',
    price: 30,
    description: 'Crisp cucumber, green apple, fresh lime, garden mint, and young ginger juice.',
    image: '/gallery/citrus-cocktail.jpg',
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
    image: '/gallery/juice-cocktail2.jpg',
    badge: 'HOUSE SPECIAL',
    tags: ['Energizing', 'Creamy', 'Natural Honey']
  },
  {
    id: 'smoothie-strawberry-banana',
    name: 'Strawberry Banana Swirl Smoothie',
    category: 'smoothies',
    price: 35,
    description: 'Whole sweet strawberries whipped with frozen banana and chilled probiotic yogurt.',
    image: '/gallery/melon-pine-juice-pie.jpg',
    badge: 'KIDS FAVORITE',
    tags: ['Fruity', 'Real Berries', 'Silky']
  },
  {
    id: 'shake-thick-vanilla-chocolate',
    name: 'Thick Real Ice Cream Milkshake',
    category: 'smoothies',
    price: 40,
    description: 'Crafted with our rich daily churned ice cream, fresh whole milk, chocolate drizzle, and whipped cream.',
    image: '/gallery/choc-milkshake1.jpg',
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
    image: '/gallery/customer-with-cocktail.jpg',
    badge: 'TOP SELLER',
    tags: ['Triple-Decker', 'High Protein', 'Served Warm']
  },
  {
    id: 'sandwich-crispy-chicken',
    name: 'Crispy Chicken & Herb Sub',
    category: 'sandwiches',
    price: 35,
    description: 'Tender marinated chicken breast with crunchy garden slaw, melted cheddar, and Kim Prince signature garlic mayo.',
    image: '/gallery/citrus-cocktail.jpg',
    badge: 'FRESH GRILL',
    tags: ['Toasted', 'Savory', 'Hearty']
  },
  {
    id: 'sandwich-tuna-melt',
    name: 'Savory Tuna & Sweetcorn Melt',
    category: 'sandwiches',
    price: 35,
    description: 'Flaked light tuna, juicy golden sweetcorn, red onions, melted cheese on crusty artisanal toast.',
    image: '/gallery/melon-cocktail.jpg',
    tags: ['Comfort Food', 'Melted Cheese', 'Toasted']
  },
  {
    id: 'sandwich-veggie-egg',
    name: 'Fresh Garden Veggie & Egg Sandwich',
    category: 'sandwiches',
    price: 30,
    description: 'Farm fresh sliced boiled eggs, crunchy cucumber, tomatoes, lettuce, and creamy mustard dressing.',
    image: '/gallery/pine-cocktail.jpg',
    tags: ['Vegetarian', 'Light & Fresh', 'Quick Bite']
  },

  // Pastries & Snacks
  {
    id: 'pastry-golden-meatpie',
    name: 'Crispy Golden Meat Pies (2 pcs)',
    category: 'pastries',
    price: 25,
    description: 'Golden, flaky handmade pastry crust stuffed with richly seasoned minced beef, tender potatoes, and garden herbs.',
    image: '/gallery/melon-pine-juice-pie.jpg',
    badge: 'FRESHLY BAKED',
    tags: ['Oven Hot', '100% Beef', 'Flaky Pastry']
  },
  {
    id: 'pastry-fresh-muffins',
    name: 'Oven-Fresh Blueberry & Vanilla Muffins',
    category: 'pastries',
    price: 20,
    description: 'Moist bakery-style muffin bursting with juicy blueberries and topped with crunchy golden sugar crust.',
    image: '/gallery/customer-with-cocktail.jpg',
    badge: 'SWEET TREAT',
    tags: ['Bakery Fresh', 'Moist & Fluffy', 'Coffee Buddy']
  },
  {
    id: 'pastry-beef-samosas',
    name: 'Spicy Beef & Veggie Samosas (3 pcs)',
    category: 'pastries',
    price: 25,
    description: 'Crispy golden triangles packed with spiced minced meat, scallions, and chili flakes, served with tangy sweet chili dip.',
    image: '/gallery/juice-cocktail2.jpg',
    badge: 'CRUNCHY',
    tags: ['Spiced', 'Golden Fried', 'Party Favorite']
  },
  {
    id: 'pastry-spring-rolls',
    name: 'Crispy Chicken Spring Rolls (3 pcs)',
    category: 'pastries',
    price: 25,
    description: 'Ultra-crisp handmade rolls filled with tender shredded chicken, julienne carrots, and crunchy cabbage.',
    image: '/gallery/ice-cream-sundae1.jpg',
    tags: ['Crispy', 'Savory', 'Finger Food']
  },

  // Ice Cream & Sundaes
  {
    id: 'icecream-classic-sundae',
    name: 'Classic Ice Cream Sundae',
    category: 'icecream',
    price: 30,
    description: 'Generous scoops of creamy homemade ice cream, finished with rich chocolate/strawberry drizzle, rainbow sprinkles, and crisp wafer.',
    image: '/gallery/ice-cream-sundae1.jpg',
    badge: 'LEGENDARY',
    tags: ['Obuasi Classic', 'Wafers & Sauce', 'Served Cold']
  },
  {
    id: 'icecream-cocktail-special',
    name: 'Kim Prince Ice Cream Cocktail',
    category: 'icecream',
    price: 45,
    description: 'Our signature house dessert! Tall glass layered with ice cream scoops, tropical fruit cocktail, fruit syrup, and roasted crushed peanuts.',
    image: '/gallery/choc-vanil-milkshake.jpg',
    badge: 'SIGNATURE DESSERT',
    tags: ['Layered', 'Real Fruits', 'Showstopper']
  },
  {
    id: 'icecream-double-waffle',
    name: 'Double Scoop Crispy Waffle Cup',
    category: 'icecream',
    price: 25,
    description: 'Two generous scoops of your choice (Creamy Vanilla, Strawberry Swirl, or Rich Chocolate) in a crisp waffle cone or bowl.',
    image: '/gallery/ice-cream-milkshake.jpg',
    tags: ['Hand Dipped', 'Waffle Cone', 'Classic']
  }
];

export const GALLERY_MEDIA_ITEMS: GalleryMedia[] = [
  {
    id: 'gallery-choc-milkshake-vid',
    title: 'Chocolate Milkshake Pour',
    type: 'video',
    url: '/gallery/choc-milkshake-vid.mp4',
    description: 'A creamy chocolate milkshake being served fresh from the bar.'
  },
  {
    id: 'gallery-choc-milkshake-1',
    title: 'Chocolate Milkshake',
    type: 'image',
    url: '/gallery/choc-milkshake1.jpg',
    description: 'Rich chocolate milkshake available fresh daily.'
  },
  {
    id: 'gallery-choc-milkshake-2',
    title: 'Chocolate Shake Close-Up',
    type: 'image',
    url: '/gallery/choc-milkshake2.jpg',
    description: 'Creamy texture and fresh toppings on our classic chocolate shake.'
  },
  {
    id: 'gallery-choc-milkshake-3',
    title: 'Chocolate Shake Favorite',
    type: 'image',
    url: '/gallery/choc-milkshake3.jpg',
    description: 'A crowd favorite for milkshake lovers.'
  },
  {
    id: 'gallery-choc-vanil-milkshake',
    title: 'Chocolate & Vanilla Shake',
    type: 'image',
    url: '/gallery/choc-vanil-milkshake.jpg',
    description: 'A delicious mix of chocolate and vanilla milkshake flavors.'
  },
  {
    id: 'gallery-citrus-cocktail',
    title: 'Citrus Cocktail',
    type: 'image',
    url: '/gallery/citrus-cocktail.jpg',
    description: 'Bright citrus refreshment served chilled and full of flavor.'
  },
  {
    id: 'gallery-customer-choc-milkshake-vid',
    title: 'Customer Favorite Shake Moment',
    type: 'video',
    url: '/gallery/customer-with-choc-milkshake-vid.mp4',
    description: 'A customer enjoying one of our signature chocolate shakes.'
  },
  {
    id: 'gallery-customer-with-cocktail',
    title: 'Customer with Cocktail',
    type: 'image',
    url: '/gallery/customer-with-cocktail.jpg',
    description: 'A happy customer enjoying a chilled house cocktail.'
  },
  {
    id: 'gallery-flyer-1',
    title: 'Kim Prince Flyer',
    type: 'image',
    url: '/gallery/Flyer1.jpg',
    description: 'Menu highlights and offers from the Kim Prince lineup.'
  },
  {
    id: 'gallery-flyer-2',
    title: 'Seasonal Menu Flyer',
    type: 'image',
    url: '/gallery/Flyer2.jpg',
    description: 'Fresh specials and favorites featured in our promotional flyer.'
  },
  {
    id: 'gallery-ice-cream-milkshake',
    title: 'Ice Cream Milkshake',
    type: 'image',
    url: '/gallery/ice-cream-milkshake.jpg',
    description: 'Creamy homemade ice cream blended into a thick shake.'
  },
  {
    id: 'gallery-ice-cream-sundae-1',
    title: 'Classic Sundae',
    type: 'image',
    url: '/gallery/ice-cream-sundae1.jpg',
    description: 'Our classic cold sundae served with rich toppings.'
  },
  {
    id: 'gallery-ice-cream-sundae-2',
    title: 'Sundae Showcase',
    type: 'image',
    url: '/gallery/ice-cream-sundae2.jpg',
    description: 'Freshly served sundae with a creamy finish.'
  },
  {
    id: 'gallery-ice-cream-sundae-3',
    title: 'Ice Cream Delight',
    type: 'image',
    url: '/gallery/ice-cream-sundae3.jpg',
    description: 'A cold indulgence with signature toppings and a smooth finish.'
  },
  {
    id: 'gallery-ice-cream-sundae-4',
    title: 'Sundae Special',
    type: 'image',
    url: '/gallery/ice-cream-sundae4.jpg',
    description: 'An eye-catching sundae for those craving a sweet special.'
  },
  {
    id: 'gallery-juice-cocktail-1',
    title: 'Juice Cocktail 1',
    type: 'image',
    url: '/gallery/juice-cocktail1.jpg',
    description: 'Fresh fruit cocktail served chilled with vibrant flavor.'
  },
  {
    id: 'gallery-juice-cocktail-2',
    title: 'Juice Cocktail 2',
    type: 'image',
    url: '/gallery/juice-cocktail2.jpg',
    description: 'Another fresh blend made with natural fruit and ice.'
  },
  {
    id: 'gallery-melon-cocktail',
    title: 'Melon Cocktail',
    type: 'image',
    url: '/gallery/melon-cocktail.jpg',
    description: 'Cool melon-inspired drink packed with refreshing taste.'
  },
  {
    id: 'gallery-melon-pine-juice-pie',
    title: 'Melon Pine Juice Pie',
    type: 'image',
    url: '/gallery/melon-pine-juice-pie.jpg',
    description: 'A bright dessert-inspired combo of melon and pineapple juice flavors.'
  },
  {
    id: 'gallery-pine-cocktail',
    title: 'Pine Cocktail',
    type: 'image',
    url: '/gallery/pine-cocktail.jpg',
    description: 'Pineapple cocktail with a crisp and juicy profile.'
  },
  {
    id: 'gallery-vanil-milkshake-1',
    title: 'Vanilla Milkshake 1',
    type: 'image',
    url: '/gallery/vanil-milkshake1.jpg',
    description: 'Smooth and creamy vanilla milkshake made for a classic treat.'
  },
  {
    id: 'gallery-vanil-milkshake-2',
    title: 'Vanilla Milkshake 2',
    type: 'image',
    url: '/gallery/vanil-milkshake2.jpg',
    description: 'Fresh vanilla shake prepared to order.'
  },
  {
    id: 'gallery-vanil-milkshake-3',
    title: 'Vanilla Milkshake 3',
    type: 'image',
    url: '/gallery/vanil-milkshake3.jpg',
    description: 'A creamy vanilla finish to our milkshake menu.'
  }
];
