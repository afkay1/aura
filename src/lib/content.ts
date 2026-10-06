// All copy and image paths live here. To swap a picture, replace the file in
// /public/images (same name) or change the path below.

export const BRAND = "AURA";

export const IMG = {
  heroMain: "/images/gallery-desert.jpg",
  heroLeft: ["/images/feature-weather.jpg", "/images/gallery-terrace.jpg"],
  heroRight: ["/images/gallery-camp.jpg", "/images/feature-portable.jpg"],

  steel: "/images/hero-mug-hand.jpg",
  noir: "/images/product-noir-alt.jpg",

  galleryMain: "/images/gallery-terrace.jpg",
  galleryLeft: ["/images/gallery-riyadh.jpg", "/images/gallery-camp.jpg"],
  galleryRight: ["/images/gallery-car.jpg", "/images/gallery-desert.jpg"],

  strip: [
    "/images/gallery-car.jpg",
    "/images/gallery-riyadh.jpg",
    "/images/feature-selfheating.jpg",
    "/images/feature-gps.jpg",
    "/images/feature-desk.jpg",
    "/images/gallery-camp.jpg",
  ],

  footerBanner: "/images/gallery-terrace.jpg",
};

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Gallery", href: "#gallery" },
  { label: "Accessories", href: "#accessories" },
];

export const TAGLINE = "Warmth, wherever you are.";

export const PRODUCTS = [
  { name: "Steel", price: 149, img: IMG.steel, alt: "AURA Steel mug held at sunrise" },
  { name: "Noir", price: 169, img: IMG.noir, alt: "AURA Noir mug with matte black sleeve" },
];

export const FEATURES = [
  {
    category: "Innovation",
    title: "Smart Temperature Control",
    img: "/images/feature-temperature.jpg",
    alt: "Close-up of the AURA lid with its warm LED ring",
  },
  {
    category: "Durability",
    title: "Weather-Resistant Build",
    img: "/images/feature-weather.jpg",
    alt: "AURA mug on a wet rock in a forest",
  },
  {
    category: "Performance",
    title: "Ultra-Light Body",
    img: "/images/feature-desk.jpg",
    alt: "AURA mug on a desk beside a laptop",
  },
  {
    category: "Connectivity",
    title: "App Control",
    img: "/images/feature-gps.jpg",
    alt: "Hand holding AURA mug next to a phone showing the app",
  },
  {
    category: "Comfort",
    title: "Self-Heating",
    img: "/images/feature-selfheating.jpg",
    alt: "Steaming coffee in an AURA mug at a cafe",
  },
  {
    category: "Portability",
    title: "Easy Carry",
    img: "/images/feature-portable.jpg",
    alt: "Hiker with an AURA mug in a backpack pocket",
  },
];

export const ACCESSORIES = [
  {
    name: "Charging Coaster",
    desc: "Wireless warming base that keeps your drink at temperature",
    price: 59,
    img: "/images/accessory-coaster.jpg",
  },
  {
    name: "Silicone Sleeve",
    desc: "Textured grip sleeve for comfort and drop protection",
    price: 29,
    img: "/images/accessory-sleeve.jpg",
  },
  {
    name: "Travel Lid",
    desc: "Sealed brushed-steel lid with a slim sip opening",
    price: 25,
    img: "/images/accessory-lid.jpg",
  },
  {
    name: "Sip Lid",
    desc: "Everyday lid with a wider opening for easy sipping",
    price: 25,
    img: "/images/accessory-lid-alt.jpg",
  },
  {
    name: "Carry Strap",
    desc: "Braided leather strap with a quick-release steel clip",
    price: 24,
    img: "/images/accessory-strap.jpg",
  },
  {
    name: "Car Cup-Holder Mount",
    desc: "Snug adapter that keeps AURA steady on the road",
    price: 35,
    img: "/images/accessory-carmount.jpg",
  },
  {
    name: "Travel Case",
    desc: "Padded zip case that protects AURA in any bag",
    price: 39,
    img: "/images/accessory-case.jpg",
  },
  {
    name: "Cleaning Kit",
    desc: "Bottle brush and cleaning tablets for a fresh cup every time",
    price: 19,
    img: "/images/accessory-cleaning.jpg",
  },
];

export const SPECS = [
  { label: "Weight", value: "340g" },
  { label: "Capacity", value: "350ml" },
  { label: "Battery", value: "12h" },
  { label: "Heat range", value: "40-70°C" },
];

export const FAQ = [
  {
    id: "shipping",
    q: "How long does shipping take?",
    a: "Orders ship within 2 business days. Standard delivery takes 3-7 business days depending on your location, and every order includes tracking.",
  },
  {
    id: "returns",
    q: "What is the return policy?",
    a: "You have 30 days to return AURA in its original condition for a full refund. Accessories can be returned unopened within the same window.",
  },
  {
    id: "warranty",
    q: "Is there a warranty?",
    a: "Every AURA mug includes a 2-year limited warranty covering the heating element, battery and electronics.",
  },
  {
    id: "battery",
    q: "How long does the battery last?",
    a: "Up to 12 hours of gentle warming on a single charge. Place it on the Charging Coaster to keep it topped up at your desk.",
  },
];
