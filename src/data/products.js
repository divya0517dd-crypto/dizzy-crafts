const products = [
  {
    id: 1,
    name: "Handmade Terracotta Pot",
    category: "Home Decor",
    price: 499,
    rating: 4.8,
    description:
      "Beautiful handcrafted terracotta pot made with traditional artisan techniques.",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Handmade Ceramic Vase",
    category: "Home Decor",
    price: 699,
    rating: 4.7,
    description:
      "Elegant ceramic vase designed to add a warm handmade touch to your home.",
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Macrame Wall Hanging",
    category: "Wall Decor",
    price: 899,
    rating: 4.9,
    description:
      "Boho-inspired macrame wall hanging carefully crafted with soft cotton rope.",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Beaded Bracelet",
    category: "Jewelry",
    price: 299,
    rating: 4.6,
    description:
      "Stylish handmade beaded bracelet suitable for everyday fashion.",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Boho Earrings",
    category: "Jewelry",
    price: 349,
    rating: 4.8,
    description:
      "Elegant handmade earrings with a beautiful bohemian-inspired design.",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Handmade Candle",
    category: "Candles",
    price: 399,
    rating: 4.7,
    description:
      "Decorative handmade candle perfect for creating a cozy atmosphere.",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Scented Soy Candle",
    category: "Candles",
    price: 549,
    rating: 4.9,
    description:
      "A relaxing scented soy candle made for peaceful evenings and special moments.",
    image:
      "https://images.unsplash.com/photo-1602874801006-e26d4c9b8e8a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Wooden Photo Frame",
    category: "Wood Crafts",
    price: 599,
    rating: 4.7,
    description:
      "Rustic wooden photo frame that beautifully displays your favourite memories.",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Wooden Jewellery Box",
    category: "Wood Crafts",
    price: 799,
    rating: 4.8,
    description:
      "Handcrafted wooden jewellery box with a classic natural finish.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Crochet Flower",
    category: "Crochet",
    price: 199,
    rating: 4.6,
    description:
      "Cute handmade crochet flower created with soft colourful yarn.",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Crochet Tote Bag",
    category: "Crochet",
    price: 999,
    rating: 4.9,
    description:
      "Reusable handmade crochet tote bag with a beautiful textured finish.",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Hand Painted Mug",
    category: "Kitchen Crafts",
    price: 449,
    rating: 4.8,
    description:
      "Unique hand-painted mug that brings artistic charm to your coffee time.",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    name: "Clay Incense Holder",
    category: "Home Decor",
    price: 299,
    rating: 4.5,
    description:
      "Traditional clay incense holder with a simple handmade design.",
    image:
      "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    name: "Decorative Clay Bowl",
    category: "Home Decor",
    price: 499,
    rating: 4.7,
    description:
      "Decorative handmade clay bowl suitable for tables and shelves.",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    name: "Handmade Dream Catcher",
    category: "Wall Decor",
    price: 749,
    rating: 4.8,
    description:
      "Beautiful dream catcher designed to give your room a peaceful boho look.",
    image:
      "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    name: "Resin Art Coaster Set",
    category: "Resin Art",
    price: 649,
    rating: 4.9,
    description:
      "Set of artistic resin coasters with a glossy handcrafted finish.",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    name: "Resin Keychain",
    category: "Resin Art",
    price: 249,
    rating: 4.6,
    description:
      "Cute handmade resin keychain perfect for bags and keys.",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    name: "Handmade Gift Box",
    category: "Gifts",
    price: 799,
    rating: 4.8,
    description:
      "Beautiful handmade gift box designed for birthdays and special occasions.",
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 19,
    name: "Miniature Plant Pot",
    category: "Garden Crafts",
    price: 299,
    rating: 4.7,
    description:
      "Small handmade planter perfect for succulents and indoor plants.",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 20,
    name: "Bamboo Basket",
    category: "Bamboo Crafts",
    price: 699,
    rating: 4.8,
    description:
      "Eco-friendly handmade bamboo basket with a natural woven texture.",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 21,
    name: "Handwoven Table Mat",
    category: "Home Decor",
    price: 349,
    rating: 4.6,
    description:
      "Handwoven table mat that adds natural warmth to your dining space.",
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 22,
    name: "Fabric Wall Art",
    category: "Wall Decor",
    price: 899,
    rating: 4.9,
    description:
      "Creative handmade fabric wall art designed for modern interiors.",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 23,
    name: "Handmade Hair Clip",
    category: "Accessories",
    price: 199,
    rating: 4.5,
    description:
      "Pretty handmade hair accessory designed for everyday styling.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 24,
    name: "Beaded Necklace",
    category: "Jewelry",
    price: 599,
    rating: 4.8,
    description:
      "Elegant handmade beaded necklace with a stylish artistic finish.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 25,
    name: "Clay Pendant",
    category: "Jewelry",
    price: 399,
    rating: 4.7,
    description:
      "Unique handcrafted clay pendant made for a simple artistic look.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 26,
    name: "Handmade Notebook",
    category: "Stationery",
    price: 299,
    rating: 4.8,
    description:
      "Beautiful handmade notebook perfect for journaling and creative ideas.",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 27,
    name: "Decorative Bookmark",
    category: "Stationery",
    price: 149,
    rating: 4.5,
    description:
      "Elegant handmade bookmark for readers who love artistic details.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 28,
    name: "Handmade Soap Gift Set",
    category: "Gifts",
    price: 699,
    rating: 4.8,
    description:
      "Beautifully packed handmade soap gift set for special occasions.",
    image:
      "https://images.unsplash.com/photo-1607006483225-6d9c8e6c7c2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 29,
    name: "Jute Storage Basket",
    category: "Eco Crafts",
    price: 749,
    rating: 4.7,
    description:
      "Eco-friendly jute storage basket combining functionality and natural beauty.",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 30,
    name: "Handmade Wall Plate",
    category: "Wall Decor",
    price: 899,
    rating: 4.9,
    description:
      "Decorative handmade wall plate designed to make your interiors stand out.",
    image:
      "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 31,
    name: "Wooden Candle Stand",
    category: "Wood Crafts",
    price: 549,
    rating: 4.7,
    description:
      "Rustic wooden candle stand crafted with a natural handmade finish.",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 32,
    name: "Handmade Gift Hamper",
    category: "Gifts",
    price: 1299,
    rating: 4.9,
    description:
      "Premium handmade gift hamper carefully prepared for memorable celebrations.",
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=800&q=80",
  },
];

export default products;