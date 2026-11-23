export type Service = {
  id: string;
  title: string;
  price: number;
  duration: string;
  image: string;
  alt: string;
};

export type CategoryIconName =
  | "scissors"
  | "palette"
  | "lotus"
  | "face"
  | "brush"
  | "nail"
  | "spa";

export type Category = {
  name: string;
  icon: CategoryIconName;
};

export type Testimonial = {
  name: string;
  avatar: string;
  quote: string;
};

const unsplash = (id: string, width = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Browse Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroSlides = [
  {
    image: unsplash("1622287162716-f311baa1a2b8", 1800),
    alt: "Barber styling a client's hair in a premium salon",
  },
  {
    image: unsplash("1560066984-138dadb4c035", 1800),
    alt: "Modern salon interior with styling chairs and warm lighting",
  },
  {
    image: unsplash("1544161515-4ab6ce6db874", 1800),
    alt: "Relaxing spa massage treatment",
  },
];

export const services: Service[] = [
  {
    id: "haircut-styling",
    title: "Haircut & Styling",
    price: 600,
    duration: "30 min",
    image: unsplash("1622286342621-4bd786c2447c", 600),
    alt: "Barber giving a client a precision haircut",
  },
  {
    id: "beard-grooming",
    title: "Beard Grooming",
    price: 600,
    duration: "20 min",
    image: unsplash("1621605815971-fbc98d665033", 600),
    alt: "Barber shaping a client's beard",
  },
  {
    id: "hair-coloring",
    title: "Hair Coloring",
    price: 2000,
    duration: "60 min",
    image: unsplash("1522337094846-8a818192de1f", 600),
    alt: "Colorist applying hair color",
  },
  {
    id: "facial-treatment",
    title: "Facial Treatment",
    price: 1500,
    duration: "45 min",
    image: unsplash("1570172619644-dfd03ed5d881", 600),
    alt: "Client receiving a facial treatment",
  },
  {
    id: "manicure",
    title: "Manicure",
    price: 800,
    duration: "30 min",
    image: unsplash("1604654894610-df63bc536371", 600),
    alt: "Nail technician doing a manicure",
  },
  {
    id: "hair-spa",
    title: "Hair Spa",
    price: 1100,
    duration: "45 min",
    image: unsplash("1540555700478-4be289fbecef", 600),
    alt: "Relaxing hair spa treatment",
  },
];

export const categories: Category[] = [
  { name: "Haircut & Styling", icon: "scissors" },
  { name: "Hair Coloring", icon: "palette" },
  { name: "Hair Treatment", icon: "lotus" },
  { name: "Facial & Skincare", icon: "face" },
  { name: "Makeup", icon: "brush" },
  { name: "Manicure & Pedicure", icon: "nail" },
  { name: "Spa & Massage", icon: "spa" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Raihan Hasan",
    avatar: unsplash("1500648767791-00dcc994a43e", 160),
    quote: "Absolutely amazing service! The booking process was so easy.",
  },
  {
    name: "Nusrat Jahan",
    avatar: unsplash("1494790108377-be9c29b29330", 160),
    quote: "Professional and friendly staff. Highly recommended!",
  },
  {
    name: "Md. Imran",
    avatar: unsplash("1507003211169-0a1dd7228f2d", 160),
    quote: "Best salon experience in town!",
  },
];

export const heroAvatars = [
  unsplash("1534528741775-53994a69daeb", 80),
  unsplash("1517841905240-472988babdf9", 80),
  unsplash("1506794778202-cad84cf45f1d", 80),
  unsplash("1494790108377-be9c29b29330", 80),
];

export const offerImage = unsplash("1526510747491-58f928ec870f", 1200);
