const products = [
  {
    name: 'Tacos Al Pastor',
    price: 3,
    description:
      'Pork marinated in a blend of spices and grilled with pineapples, served on small tortillas.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Empanadas',
    price: 2,
    description: 'Crispy pastry filled with seasoned beef, chicken, or cheese.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Ceviche',
    price: 12,
    description:
      'Fresh fish marinated in citrus juices with onions, cilantro, and peppers.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Arepa',
    price: 5,
    description: 'Cornmeal cakes filled with cheese, meats, or beans.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Feijoada',
    price: 15,
    description: 'Traditional Brazilian stew of beans with beef and pork.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Pupusas',
    price: 3,
    description:
      'Thick corn tortilla stuffed with a blend of cheese, pork, and beans.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Ropa Vieja',
    price: 18,
    description:
      'Cuban-style slow-cooked shredded beef with tomatoes and peppers.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Enchiladas',
    price: 10,
    description:
      'Corn tortillas filled with meat, cheese, beans, or vegetables, covered in chili sauce.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Chiles en Nogada',
    price: 20,
    description:
      'Poblano chiles stuffed with picadillo topped with a walnut-based cream sauce and pomegranate seeds.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Mole Poblano',
    price: 15,
    description:
      'Chicken in a rich sauce made with chili peppers, spices, and chocolate.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Tamale',
    price: 4,
    description:
      'Masa dough filled with meats, cheeses, fruits, or vegetables, wrapped in banana leaves or corn husks and steamed.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Churrasco',
    price: 25,
    description:
      'Grilled steak served with chimichurri sauce and a side of fried plantain.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Paella Valenciana',
    price: 30,
    description:
      'Spanish rice dish with rabbit, chicken, snails, beans, and vegetables.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Bandera Dominicana',
    price: 13,
    description:
      "Traditional Dominican dish with rice, red beans, meat, and salad, known as 'The Dominican Flag'.",
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Lomo Saltado',
    price: 20,
    description:
      'Peruvian stir-fry dish with marinated strips of sirloin, onions, and tomatoes, served with fried potatoes and rice.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Picanha',
    price: 28,
    description:
      'Brazilian grilled sirloin cap served with farofa, black beans, and rice.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Asado',
    price: 22,
    description:
      'Argentine barbecue of various cuts of meats grilled in a sequence over a charcoal fire.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Pozole',
    price: 12,
    description:
      'Traditional Mexican stew made with hominy, pork, and seasoned with chili peppers, garlic, and onions.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Ajiaco',
    price: 17,
    description:
      'Colombian chicken soup made with potatoes, corn, and a herb called guascas.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Picarones',
    price: 8,
    description:
      'Peruvian pumpkin and sweet potato doughnuts served with a sweet syrup.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Salchipapas',
    price: 9,
    description:
      'Simple, popular Latin American dish of sliced sausages and French fries.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Bandeja Paisa',
    price: 18,
    description:
      'A platter typical of Colombian cuisine including ingredients like beans, rice, chicharrón, steak, fried egg, plantain, chorizo, and arepa.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Flan',
    price: 6,
    description: 'Smooth, sweet custard topped with caramel sauce.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Carne Asada',
    price: 18,
    description:
      'Grilled and sliced beef, usually skirt steak, served with various side dishes.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Milanesa',
    price: 14,
    description:
      'Breaded meat fillet deep-fried or pan-fried, popular in South America.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Huevos Rancheros',
    price: 10,
    description:
      'Traditional Mexican breakfast dish consisting of corn tortillas topped with fried eggs, salsa, and sometimes avocados.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Sopa Paraguaya',
    price: 12,
    description:
      'Traditional Paraguayan dish, a thick cornbread made from cornmeal, cheese, and onions.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Arroz con Pollo',
    price: 15,
    description:
      'Rice and chicken cooked together with saffron, peas, and other vegetables, a common dish in Spanish-speaking countries.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Mofongo',
    price: 14,
    description:
      'Puerto Rican dish with fried plantains as its main ingredient. Plantains are picked green, fried then mashed with salt, garlic, broth, and olive oil in a wooden pilón.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
  {
    name: 'Cochinita Pibil',
    price: 16,
    description:
      'Slow-roasted pork dish from the Yucatán Peninsula of Mayan origin, marinated in citrus juice and annatto.',
    restaurant: 'PLACE_YOUR_RESTAURANT_ID_HERE',
  },
];

module.exports = products;
