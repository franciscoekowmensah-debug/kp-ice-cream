import { MenuItem, GalleryMedia } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Fresh Fruit Juices
  {
    id: 'juice-pineapple-ginger',
    name: 'Pure Pineapple & Ginger',
    category: 'juices',
    price: 60,
    description: 'Cold-pressed sweet pineapples infused with fresh ginger. 100% natural, no added sugar.',
    image: '/gallery/pine-cocktail.jpg',
    badge: '100% FRESH',
    tags: ['Cold-Pressed', 'Immunity Boost', 'No Added Sugar']
  },
  {
    id: 'juice-orange-watermelon',
    name: 'Fresh Watermelon Splash',
    category: 'juices',
    price: 60,
    description: 'Sun-kissed sweet lemons freshly squeezed and layered with cold diced watermelon juice.',
    image: '/gallery/melon-cocktail.jpg',
    badge: 'CUSTOMER FAVORITE',
    tags: ['Chilled', 'Hydrating', 'Vitamin C']
  },
  {
    id: 'juice-mango-passion',
    name: 'Tropical Cocktail Juice',
    category: 'juices',
    price: 60,
    description: 'Velvety local ripe fruit juices blended with fragrant tropical passion fruit seeds and pulp.',
    image: '/gallery/juice-cocktail1.jpg',
    badge: 'SEASONAL HIT',
    tags: ['Rich & Thick', 'Tropical', 'Sweet']
  },
  {
    id: 'juice-detox-green',
    name: 'Detox Fresh Green Juice',
    category: 'juices',
    price: 60,
    description: 'Crisp cucumber, green apple, fresh lime, garden mint, and young ginger juice.',
    image: '/gallery/juice-cocktail2.jpg',
    badge: 'CLEANSE',
    tags: ['Detox', 'Low Calorie', 'Refreshing']
  },
  {
    id: 'juice-orange',
    name: 'Orange Cocktail Juice',
    category: 'juices',
    price: 60,
    description: 'Sweet oranges, fresh lime, garden mint, and young ginger juice.',
    image: '/gallery/citrus-cocktail.jpg',
    badge: 'CLEANSE',
    tags: ['Detox', 'Low Calorie', 'Refreshing']
  },
  // Smoothies & Milkshakes
  {
    id: 'smoothie-kim-green',
    name: 'Chocolate Ice Cream Milkshake',
    category: 'smoothies',
    price: 60,
    description: 'Chocolate flavoured, velvety smooth ice-cream milkshake.',
    image: '/gallery/choc-milkshake1.jpg',
    badge: 'HOUSE SPECIAL',
    tags: ['Energizing', 'Creamy', 'Chocolate Flavor']
  },
  {
    id: 'smoothie-strawberry-banana',
    name: 'Chocolate with Vanilla or Strawberry Milkshake',
    category: 'smoothies',
    price: 60,
    description: 'Whole sweet strawberries whipped with frozen banana and chilled probiotic yogurt.',
    image: '/gallery/choc-vanil-milkshake.jpg',
    badge: 'KIDS FAVORITE',
    tags: ['Fruity', 'Strawberry', 'Silky']
  },
  {
    id: 'shake-thick-vanilla-chocolate',
    name: 'Thick Vanilla Ice Cream Milkshake',
    category: 'smoothies',
    price: 60,
    description: 'Crafted with our rich daily churned ice cream, fresh whole milk, chocolate drizzle, and whipped cream.',
    image: '/gallery/vanil-milkshake3.jpg',
    badge: 'BESTSELLER',
    tags: ['Real Ice Cream', 'Super Thick', 'Vanilla']
  },

  // Sandwiches
  {
    id: 'sandwich-club-deluxe',
    name: 'Triple-Decker Burger',
    category: 'sandwiches',
    price: 80,
    description: 'Golden toasted bread layered with seasoned pulled chicken, boiled farm egg, crisp lettuce, ripe tomatoes, and chef herb spread.',
    image: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'TOP SELLER',
    tags: ['Triple-Decker', 'High Protein', 'Served Warm']
  },
  // {
  //   id: 'sandwich-crispy-chicken',
  //   name: 'Crispy Chicken & Herb Sub',
  //   category: 'sandwiches',
  //   price: 35,
  //   description: 'Tender marinated chicken breast with crunchy garden slaw, melted cheddar, and Kim Prince signature garlic mayo.',
  //   image: '/gallery/citrus-cocktail.jpg',
  //   badge: 'FRESH GRILL',
  //   tags: ['Toasted', 'Savory', 'Hearty']
  // },
  // {
  //   id: 'sandwich-tuna-melt',
  //   name: 'Savory Tuna & Sweetcorn Melt',
  //   category: 'sandwiches',
  //   price: 35,
  //   description: 'Flaked light tuna, juicy golden sweetcorn, red onions, melted cheese on crusty artisanal toast.',
  //   image: '/gallery/melon-cocktail.jpg',
  //   tags: ['Comfort Food', 'Melted Cheese', 'Toasted']
  // },
  // {
  //   id: 'sandwich-veggie-egg',
  //   name: 'Fresh Garden Veggie & Egg Sandwich',
  //   category: 'sandwiches',
  //   price: 30,
  //   description: 'Farm fresh sliced boiled eggs, crunchy cucumber, tomatoes, lettuce, and creamy mustard dressing.',
  //   image: '/gallery/pine-cocktail.jpg',
  //   tags: ['Vegetarian', 'Light & Fresh', 'Quick Bite']
  // },

  // Pastries & Snacks
  {
    id: 'pastry-golden-meatpie',
    name: 'Crispy Golden Meat Pies',
    category: 'pastries',
    price: 10,
    description: 'Golden, flaky handmade pastry crust stuffed with richly seasoned minced beef.',
    image: '/gallery/meat-pie.jpg',
    badge: 'FRESHLY BAKED',
    tags: ['Oven Hot', 'Meat', 'Flaky Pastry']
  },

  {
    id: 'pastry-fresh-muffins',
    name: 'Oven-Fresh Mini Cake',
    category: 'pastries',
    price: 25,
    description: 'Moist bakery-style muffin bursting with juicy blueberries and topped with crunchy golden sugar crust.',
    image: 'https://plus.unsplash.com/premium_photo-1669931367700-e4e1e0387d40?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'SWEET TREAT',
    tags: ['Bakery Fresh', 'Moist & Fluffy', 'Coffee Buddy']
  },
  {
    id: 'pastry-beef-samosas',
    name: 'Spicy Sausage',
    category: 'pastries',
    price: 25,
    description: 'Crispy and spiced minced sausages, served with tangy sweet chili dip.',
    image: 'https://images.unsplash.com/photo-1585325701165-351af916e581?q=80&w=750&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'CRUNCHY',
    tags: ['Spiced', 'Golden Fried', 'Party Favorite']
  },
  {
    id: 'pastry-spring-rolls',
    name: 'Crispy Chicken Spring Rolls',
    category: 'pastries',
    price: 10,
    description: 'Ultra-crisp handmade rolls filled with tender shredded chicken, julienne carrots, and crunchy cabbage.',
    image: '/gallery/spring-rolls.jpg',
    tags: ['Crispy', 'Savory', 'Finger Food']
  },

  // Ice Cream & Sundaes
  {
    id: 'icecream-classic-sundae',
    name: 'Classic Ice Cream Sundae',
    category: 'icecream',
    price: 60,
    description: 'Generous scoops of creamy homemade ice cream, finished with rich chocolate, strawberry and vanilla drizzle, rainbow sprinkles, and crisp wafer.',
    image: '/gallery/ice-cream-sundae1.jpg',
    badge: 'LEGENDARY',
    tags: ['Obuasi Classic', 'Wafers & Sauce', 'Served Cold']
  },
  // {
  //   id: 'icecream-cocktail-special',
  //   name: 'Kim Prince Ice Cream Cocktail',
  //   category: 'icecream',
  //   price: 45,
  //   description: 'Our signature house dessert! Tall glass layered with ice cream scoops, tropical fruit cocktail, fruit syrup, and roasted crushed peanuts.',
  //   image: '/gallery/choc-vanil-milkshake.jpg',
  //   tags: ['Layered', 'Real Fruits', 'Showstopper']
  // },
  {
    id: 'icecream-double-waffle',
    name: 'Double Scoop Crispy Waffle Cup',
    category: 'icecream',
    price: 60,
    description: 'Two generous scoops of your choice (Creamy Vanilla, Strawberry Swirl, or Rich Chocolate) in a crisp waffle cone or bowl.',
    image: '/gallery/ice-cream-milkshake.jpg',
    badge: 'SIGNATURE DESSERT',
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
  },
  {
    id: 'gallery-flyer-3',
    title: 'Promotional Flyer 3',
    type: 'image',
    url: '/gallery/Flyer3.jpg',
    description: 'Fresh highlights and offers from our featured menu lineup.'
  },
  {
    id: 'gallery-flyer-4',
    title: 'Promotional Flyer 4',
    type: 'image',
    url: '/gallery/Flyer4.jpg',
    description: 'A showcase of specials and value-packed meal choices.'
  },
  {
    id: 'gallery-flyer-5',
    title: 'Promotional Flyer 5',
    type: 'image',
    url: '/gallery/Flyer5.jpg',
    description: 'More of our seasonal highlights and customer favorites.'
  },
  {
    id: 'gallery-fried-rice',
    title: 'Fried Rice',
    type: 'image',
    url: '/gallery/fried-rice.jpg',
    description: 'A savory classic served fresh and full of flavor.'
  },
  {
    id: 'gallery-jollof',
    title: 'Jollof Rice',
    type: 'image',
    url: '/gallery/jollof.jpg',
    description: 'Classic jollof rice prepared with rich seasoning and vibrant color.'
  },
  {
    id: 'gallery-jollof-2',
    title: 'Jollof Rice Plate',
    type: 'image',
    url: '/gallery/jollof2.jpg',
    description: 'A hearty serving of our signature jollof rice dish.'
  },
  {
    id: 'gallery-meat-pie',
    title: 'Meat Pie',
    type: 'image',
    url: '/gallery/meat-pie.jpg',
    description: 'Golden pastry filled with savory meat and rich seasoning.'
  },
  {
    id: 'gallery-plain-rice',
    title: 'Plain Rice',
    type: 'image',
    url: '/gallery/plain-rice.jpg',
    description: 'Simple, satisfying white rice served alongside our popular meals.'
  },
  {
    id: 'gallery-pomegranate-slush-juice',
    title: 'Pomegranate Slush Juice',
    type: 'image',
    url: '/gallery/pomegranate-slush-juice.jpg',
    description: 'A refreshing slush-style juice with a bright fruit finish.'
  },
  {
    id: 'gallery-spring-rolls',
    title: 'Spring Rolls',
    type: 'image',
    url: '/gallery/spring-rolls.jpg',
    description: 'Crisp and golden spring rolls served fresh from the kitchen.'
  },
  {
    id: 'gallery-waakye',
    title: 'Waakye',
    type: 'image',
    url: '/gallery/waakye.jpg',
    description: 'A comforting local favorite served with flavor-packed toppings.'
  }
];
