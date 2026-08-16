const products = [
  {
    id: 1,
    name: "Handmade clay Bowl",
    category: "Pottery",
    price: 499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
    description:
      "Handcrafted clay bowl with a unique glaze finish.",
    material: "Clay",
    size: "12 x 12 inches",
    stock: 12,
  },

  {
    id: 2,
    name: "Handwoven Jute Bag",
    category: "Home Decor",
    price: 699,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80",
    description:
      "Eco-friendly handwoven jute bag suitable for storing accessories, towels, toys and everyday essentials.",
    material: "Natural Jute",
    size: "10 x 8 inches",
    stock: 18,
  },

  {
    id: 3,
    name: "Blue Pottery Decorative Plate",
    category: "Pottery",
    price: 899,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
    description:
      "Beautiful handcrafted decorative pottery plate inspired by traditional Indian ceramic artistry.",
    material: "Ceramic",
    size: "10 inches diameter",
    stock: 8,
  },

  {
    id: 4,
    name: "Bowl",
    category: "Pottery",
    price: 599,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1524638067-feba7d5c7301?auto=format&fit=crop&w=800&q=80",
    description:
      "Handmade ceramic bowl with a unique glaze finish.",
    material: "Ceramic",
    size: "8 inches diameter",
    stock: 15,
  },

  {
    id: 5,
    name: "Elegant chair",
    category: "Home Decor",
    price: 799,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80",
    description:
      "Elegant handmade chair with a natural finish, suitable for living rooms and dining areas.",
    material: "Natural Wood",
    size: "30 x 20 x 25 inches",
    stock: 10,
  },

  {
    id: 6,
    name: "Bamboo Storage Box",
    category: "Handmade",
    price: 749,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    description:
      "Lightweight bamboo storage box crafted for organizing jewelry, stationery and small household items.",
    material: "Bamboo",
    size: "12 x 8 x 5 inches",
    stock: 14,
  },

  {
    id: 7,
    name: "Wall Stickers",
    category: "Wall Art",
    price: 1199,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80",
    description:
      "Traditional Indian-inspired wall stickers designed as an elegant statement piece for your home.",
    material: "Metal",
    size: "7 x 5 inches",
    stock: 6,
  },

  {
    id: 8,
    name: "Bowl",
    category: "Pottery",
    price: 849,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1602874801006-e26e5e3d4f7c?auto=format&fit=crop&w=800&q=80",
    description:
      "Decorative ceramic serving bowl with a unique glaze finish.",
    material: "Ceramic",
    size: "10 inches diameter",
    stock: 11,
  },

  {
    id: 9,
    name: "Wall Decor Dreamcatcher",
    category: "Wall Art",
    price: 649,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    description:
      "Bohemian-inspired dreamcatcher decorated with natural feathers and wooden beads.",
    material: " Wood",
    size: "14 inches",
    stock: 13,
  },

  {
    id: 10,
    name: "Handmade Ceramic Mug",
    category: "Pottery",
    price: 449,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
    description:
      "Comfortable handmade ceramic mug with a simple artisan finish for everyday beverages.",
    material: "Ceramic",
    size: "350 ml",
    stock: 20,
  },

  {
    id: 11,
    name: "Kitchen mini Set",
    category: "Wood Craft",
    price: 399,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?auto=format&fit=crop&w=800&q=80",
    description:
      "Set of handcrafted wooden and clay bowls and vegetable cutting plates decorated with detailed patterns.",
    material: "Wood",
    size: "4 inches each",
    stock: 25,
  },

  {
    id: 12,
    name: "Handmade Candle Holder",
    category: "Home Decor",
    price: 549,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    description:
      "Elegant handcrafted candle holder that creates a cozy atmosphere for living rooms and bedrooms.",
    material: "Ceramic",
    size: "5 inches height",
    stock: 16,
  },

  {
    id: 13,
    name: "Wooden Storage Basket",
    category: "Eco Crafts",
    price: 599,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    description:
      "Eco-friendly storage basket woven from natural wood with a rustic handmade appearance.",
    material: "Wood",
    size: "12 x 10 inches",
    stock: 17,
  },

  {
    id: 14,
    name: "Bowl",
    category: "Pottery",
    price: 349,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=800&q=80",
    description:
      "Small handcrafted ceramic bowl with a unique glaze finish.",
    material: "Ceramic",
    size: "8 inches diameter",
    stock: 22,
  },

  {
    id: 15,
    name: "Handwoven Cotton Tote Bag",
    category: "Textile Crafts",
    price: 699,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80",
    description:
      "Reusable handwoven cotton tote bag combining practical everyday use with traditional craft styling.",
    material: "Cotton",
    size: "15 x 14 inches",
    stock: 19,
  },

  {
    id: 16,
    name: "Cushion Cover",
    category: "Textile Crafts",
    price: 549,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    description:
      "Decorative cushion cover with handcrafted embroidery and traditional-inspired patterns.",
    material: "Cotton",
    size: "16 x 16 inches",
    stock: 14,
  },

  {
    id: 17,
    name: "Rattan Hanging Planter",
    category: "Gardening",
    price: 749,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    description:
      "Natural rattan hanging planter designed to bring greenery and handmade character into your space.",
    material: "Rattan",
    size: "8 inch pot holder",
    stock: 9,
  },

  {
    id: 18,
    name: "Rattan Hanging Planter",
    category: "Gardening",
    price: 399,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    description:
      "Handpainted terracotta planter featuring colorful artisan patterns for indoor or balcony plants.",
    material: "Terracotta",
    size: "4 inches",
    stock: 24,
  },

  {
    id: 19,
    name: "Nature Art",
    category: "Textile Crafts",
    price: 1299,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?auto=format&fit=crop&w=800&q=80",
    description:
      "Elegant Natural art piece inspired by Indian decorative art, crafted as a premium home accent.",
    material: "Wood",
    size: "8 x 5 inches",
    stock: 7,
  },

  {
    id: 20,
    name: "Handmade Bowl",
    category: "Pottery",
    price: 499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1602874801006-e26e5e3d4f7c?auto=format&fit=crop&w=800&q=80",
    description:
      "Handmade ceramic bowl with a unique glaze finish.",
    material: "Ceramic",
    size: "8 inches diameter",
    stock: 21,
  },

  {
    id: 21,
    name: "Leather Handmade Bag",
    category: "Stationery",
    price: 649,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    description:
      "Artisan handmade bag with a unique design and high-quality craftsmanship.",
    material: "Leather and Paper",
    size: "A5",
    stock: 15,
  },

  {
    id: 22,
    name: "Handmade Paper Gift Box",
    category: "Gift Crafts",
    price: 299,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80",
    description:
      "Beautiful handmade paper gift box suitable for birthdays, celebrations and special occasions.",
    material: "Recycled Paper",
    size: "8 x 8 x 4 inches",
    stock: 30,
  },

  {
    id: 23,
    name: "Rose gold necklace",
    category: "Jewellery",
    price: 349,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
    description:
      "Handcrafted rose gold necklace with a elegant design for everyday wear.",
    material: "Rose Gold",
    size: "Adjustable",
    stock: 28,
  },

  {
    id: 24,
    name: "Macrame Plant Hanger",
    category: "Macrame",
    price: 449,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
    description:
      "Hand-knotted cotton macrame hanger designed for displaying small indoor plants.",
    material: "Cotton Rope",
    size: "40 inches length",
    stock: 18,
  },

  {
    id: 25,
    name: "Decorative Wooden Frame",
    category: "Wood Craft",
    price: 699,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    description:
      "Handcrafted wooden photo frame with a natural finish for displaying your favorite memories.",
    material: "Wood",
    size: "8 x 10 inches",
    stock: 12,
  },

  {
    id: 26,
    name: "Handpainted Ceramic Bowl",
    category: "Pottery",
    price: 599,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
    description:
      "Handpainted ceramic bowl featuring an artisan pattern, suitable for serving or decoration.",
    material: "Ceramic",
    size: "7 inches diameter",
    stock: 16,
  },

  {
    id: 27,
    name: "House mirror for window",
    category: "Home Decor",
    price: 499,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    description:
      "Set of natural fiber table mats designed to protect surfaces while adding rustic charm.",
    material: "Natural Fiber",
    size: "12 inches each",
    stock: 20,
  },

  {
    id: 28,
    name: "Natural Fiber Cushion Set",
    category: "Eco Crafts",
    price: 549,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    description:
      "Detailed miniature clay house crafted as a charming decorative collectible.",
    material: "Clay",
    size: "6 x 5 inches",
    stock: 10,
  },

  {
    id: 29,
    name: "Handmade Bowl",
    category: "Pottery",
    price: 799,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988a5?auto=format&fit=crop&w=800&q=80",
    description:
      "Handmade ceramic bowl with a unique glaze finish.",
    material: "Ceramic",
    size: "8 inches diameter",
    stock: 8,
  },

  {
    id: 30,
    name: "Handmade Bowl",
    category: "Pottery",

    price: 1499,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1549465220-1a8f6e8a2a7e?auto=format&fit=crop&w=800&q=80",
    description:
      "Curated handmade bowl featuring a unique design and high-quality craftsmanship.",
    material: "Mixed Materials",
    size: "Medium",
    stock: 5,
  },
];

export default products;