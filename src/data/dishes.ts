import type { Dish } from '../types';

export const dishesData: Dish[] = [
  {
    id: 'akkha-masoor',
    name: 'Akha Masoor Special',
    marathiName: 'नादखुळा अख्खा मसूर',
    category: 'Signature',
    tagline: 'The Legendary Hall-mark of Karad',
    description:
      'Whole brown lentils simmered in authentic handmade Maharashtrian spices, roasted onion-garlic paste, and slow-cooked in brass handis with a fragrant desi ghee tadka.',
    image: '/images/signature_akkha_masur.jpg',
    isSignature: true,
    spiceLevel: 'Medium',
  },
  {
    id: 'baingan-masala',
    name: 'Krishna-Kath Baingan Masala',
    marathiName: 'कृष्णाकाठचा रसरशीत बैंगन मसाला',
    category: 'Signature',
    tagline: 'Freshly Harvested from the Krishna River Basin',
    description:
      'Tender purple brinjals stuffed with roasted peanut, coconut, sesame and secret Maratha goda masala, simmered to rich, aromatic perfection.',
    image: '/images/dishes/baingan_masala.png',
    isSignature: true,
    spiceLevel: 'Kolhapuri Thecha',
  },
  {
    id: 'kaju-curry',
    name: 'Katakirr Kaju Curry',
    marathiName: 'काटाकिर्र काजूकरी',
    category: 'Main Course',
    tagline: 'Royal Richness with Spicy Maharashtrian Punch',
    description:
      'Golden roasted whole cashews bathed in an opulent, spicy and thick onion-tomato gravy with freshly ground spices and a royal finish.',
    image: '/images/dishes/kaju_curry.png',
    isSignature: true,
    spiceLevel: 'Kolhapuri Thecha',
  },
  {
    id: 'paneer-masala',
    name: 'Shahi Paneer Masala',
    marathiName: 'शाही पनीर मसाला',
    category: 'Main Course',
    tagline: 'Melt-in-mouth Fresh Cottage Cheese',
    description:
      'Fresh artisanal paneer cubes folded into a robust, slow-braised gravy of caramelized onions, ripe tomatoes and aromatic dried fenugreek.',
    image: '/images/dishes/paneer_masala.png',
    isSignature: false,
    spiceLevel: 'Medium',
  },
  {
    id: 'palak-paneer',
    name: 'Desi Palak Paneer',
    marathiName: 'अस्सल गावरान पालक पनीर',
    category: 'Main Course',
    tagline: 'Farm-Fresh Mountain Greens',
    description:
      'Pureed tender spinach delicately tempered with burnt garlic, green chilies, and soft paneer cubes prepared in traditional iron skillets.',
    image: '/images/dishes/palak_paneer.png',
    isSignature: false,
    spiceLevel: 'Mild',
  },
  {
    id: 'dal-fry',
    name: 'Khadak Tadka Dal Fry',
    marathiName: 'कडक तडका डाळ फ्राय',
    category: 'Main Course',
    tagline: 'Comforting Golden Lentils',
    description:
      'Yellow toor dal boiled to velvety silkiness and tempered in boiling desi ghee with mustard seeds, cumin, hing, dried red chilies, and curry leaves.',
    image: '/images/dishes/dal_fry.png',
    isSignature: false,
    spiceLevel: 'Medium',
  },
  {
    id: 'matka-curd',
    name: 'Thanda Matka Dahi',
    marathiName: 'मटक्यातलं पांढराशुभ्र गार दही',
    category: 'Curd & Dessert',
    tagline: 'Earthen Clay Pot Set Curd',
    description:
      'Pure buffalo milk naturally cultured in clay pots, delivering thick, creamy, cooling white curd that soothes and balances the spice of your meal.',
    image: '/images/gallery/carousel_2.png',
    isSignature: true,
    spiceLevel: 'Mild',
  },
  {
    id: 'jowar-bhakri',
    name: 'Hot Jowar Bhakri',
    marathiName: 'गरमागरम ज्वारीची भाकरी',
    category: 'Traditional Accompaniment',
    tagline: 'Hand-Patted on Traditional Tawa',
    description:
      'Freshly milled sorghum hand-patted and baked on clay/iron tawas, served steaming hot with fresh butter and dry peanut-garlic thecha.',
    image: '/images/gallery/carousel_1.png',
    isSignature: true,
    spiceLevel: 'Mild',
  },
];
