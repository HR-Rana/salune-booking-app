export type Service = {
  id: string;
  title: string;
  price: number;
  duration: string;
  image: string;
  alt: string;
  category: string;
  description: string;
  includes: string[];
  rating: number;
  reviews: number;
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

export type AppointmentStatus =
  | "Confirmed"
  | "Pending"
  | "Completed"
  | "Cancelled";

export type Appointment = {
  id: string;
  service: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  payment: "Paid" | "Unpaid";
  price: number;
};

export type AdminAppointment = Appointment & {
  customer: string;
  email: string;
  avatar: string;
};

export const unsplash = (id: string, width = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;

export const salonInfo = {
  name: "SalonBook",
  phone: "+880 1712 345678",
  phoneHref: "tel:+8801712345678",
  email: "hello@salonbook.com",
  location: "Sonagazi, Feni, Bangladesh",
  hours: "Mon - Sun: 9AM - 9PM",
  tagline: "Look Good. Feel Great.",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Browse Services", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
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
    category: "Haircut & Styling",
    image: unsplash("1622286342621-4bd786c2447c", 900),
    alt: "Barber giving a client a precision haircut",
    description:
      "Get a fresh, stylish haircut and a professional finish from our expert stylists. Perfect for any occasion, with modern techniques and premium products.",
    includes: ["Professional Stylist", "Premium Products", "Modern Style"],
    rating: 4.9,
    reviews: 2500,
  },
  {
    id: "beard-grooming",
    title: "Beard Grooming",
    price: 600,
    duration: "20 min",
    category: "Beard & Grooming",
    image: unsplash("1621605815971-fbc98d665033", 900),
    alt: "Barber shaping a client's beard",
    description:
      "Shape, trim and condition your beard for a sharp, well-groomed look. Our barbers use premium oils and hot towels for a comfortable finish.",
    includes: ["Beard Shaping", "Hot Towel Finish", "Beard Oil Treatment"],
    rating: 4.8,
    reviews: 1800,
  },
  {
    id: "hair-coloring",
    title: "Hair Coloring",
    price: 2000,
    duration: "60 min",
    category: "Hair Coloring",
    image: unsplash("1522337094846-8a818192de1f", 900),
    alt: "Colorist applying hair color",
    description:
      "From subtle highlights to bold global color, our colorists blend salon-grade pigments for a rich, long-lasting shine that suits your skin tone.",
    includes: ["Color Consultation", "Ammonia-Free Color", "Gloss Finish"],
    rating: 4.9,
    reviews: 1200,
  },
  {
    id: "facial-treatment",
    title: "Facial Treatment",
    price: 1500,
    duration: "45 min",
    category: "Facial & Skincare",
    image: unsplash("1570172619644-dfd03ed5d881", 900),
    alt: "Client receiving a facial treatment",
    description:
      "A deep-cleansing facial that refreshes tired skin, unclogs pores and restores a natural glow using gentle, skin-friendly products.",
    includes: ["Skin Analysis", "Deep Cleansing", "Hydrating Mask"],
    rating: 4.8,
    reviews: 2100,
  },
  {
    id: "manicure",
    title: "Manicure",
    price: 800,
    duration: "30 min",
    category: "Manicure & Pedicure",
    image: unsplash("1604654894610-df63bc536371", 900),
    alt: "Nail technician doing a manicure",
    description:
      "Neat, polished hands with precise nail shaping, cuticle care and a long-lasting finish. Choose from our range of premium shades.",
    includes: ["Nail Shaping", "Cuticle Care", "Premium Polish"],
    rating: 4.9,
    reviews: 950,
  },
  {
    id: "hair-spa",
    title: "Hair Spa",
    price: 1100,
    duration: "45 min",
    category: "Hair Treatment",
    image: unsplash("1540555700478-4be289fbecef", 900),
    alt: "Relaxing hair spa treatment",
    description:
      "Relax with a nourishing hair spa that repairs damage, reduces frizz and leaves your hair soft, smooth and deeply conditioned.",
    includes: ["Scalp Massage", "Deep Conditioning", "Steam Therapy"],
    rating: 4.9,
    reviews: 1600,
  },
  {
    id: "pedicure",
    title: "Pedicure",
    price: 900,
    duration: "40 min",
    category: "Manicure & Pedicure",
    image: unsplash("1519014816548-bf5fe059798b", 900),
    alt: "Freshly polished nails after a pedicure",
    description:
      "Refresh tired feet with a soothing soak, gentle exfoliation and a flawless polish. A small luxury that feels absolutely worth it.",
    includes: ["Foot Soak", "Exfoliation", "Polish & Massage"],
    rating: 4.8,
    reviews: 780,
  },
  {
    id: "party-makeup",
    title: "Party Makeup",
    price: 2500,
    duration: "60 min",
    category: "Makeup",
    image: unsplash("1487412947147-5cebf100ffc2", 900),
    alt: "Makeup artist applying party makeup",
    description:
      "Turn heads at your next event with a flawless party look. Our artists build a long-wear base, sculpted eyes and a finish that photographs beautifully.",
    includes: ["Skin Prep", "Long-Wear Base", "Lashes & Liner"],
    rating: 4.9,
    reviews: 640,
  },
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    price: 5000,
    duration: "120 min",
    category: "Makeup",
    image: unsplash("1524504388940-b1c1722653e1", 900),
    alt: "Bride with elegant bridal makeup",
    description:
      "A complete bridal experience designed to last all day. Includes a trial consultation, skin preparation and a look tailored to your outfit and jewelry.",
    includes: ["Bridal Consultation", "HD Makeup", "Touch-Up Kit"],
    rating: 5,
    reviews: 420,
  },
  {
    id: "full-body-massage",
    title: "Full Body Massage",
    price: 2800,
    duration: "90 min",
    category: "Spa & Massage",
    image: unsplash("1544161515-4ab6ce6db874", 900),
    alt: "Therapist giving a relaxing full body massage",
    description:
      "Melt away stress with a full-body massage using warm aromatic oils. Our therapists adjust the pressure to leave you relaxed and re-energised.",
    includes: ["Aroma Oils", "Full Body Therapy", "Herbal Tea"],
    rating: 4.9,
    reviews: 890,
  },
  {
    id: "blow-dry-styling",
    title: "Blow Dry & Styling",
    price: 800,
    duration: "30 min",
    category: "Haircut & Styling",
    image: unsplash("1562322140-8baeececf3df", 900),
    alt: "Stylist blow drying and styling a client's hair",
    description:
      "Smooth, bouncy or sleek — get a salon-quality blow dry that holds its shape. Ideal before an event or a busy work week.",
    includes: ["Heat Protection", "Volume Styling", "Frizz Control"],
    rating: 4.8,
    reviews: 530,
  },
  {
    id: "hair-treatment",
    title: "Hair Treatment",
    price: 1800,
    duration: "50 min",
    category: "Hair Treatment",
    image: unsplash("1595476108010-b4d1f102b1b1", 900),
    alt: "Stylist washing and treating a client's hair",
    description:
      "Target dryness, damage and dullness with a customised treatment plan. We assess your hair and use repairing actives for visible, lasting results.",
    includes: ["Hair Analysis", "Repair Therapy", "Aftercare Advice"],
    rating: 4.9,
    reviews: 710,
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

export const serviceFilters = [
  "All Categories",
  ...Array.from(new Set(services.map((service) => service.category))),
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

export const offerImage =
  "https://images.unsplash.com/photo-1526510747491-58f928ec870f?auto=format&fit=crop&w=1400&h=620&q=80&crop=faces";

export const customer = {
  name: "Raihan Ahmed",
  email: "raihan@example.com",
  avatar: unsplash("1500648767791-00dcc994a43e", 200),
};

export const myAppointments: Appointment[] = [
  {
    id: "SB-1024",
    service: "Haircut & Styling",
    date: "Dec 26, 2025",
    time: "10:00 AM",
    status: "Confirmed",
    payment: "Paid",
    price: 600,
  },
  {
    id: "SB-1025",
    service: "Hair Coloring",
    date: "Dec 28, 2025",
    time: "02:00 PM",
    status: "Pending",
    payment: "Unpaid",
    price: 2000,
  },
  {
    id: "SB-1026",
    service: "Facial Treatment",
    date: "Jan 04, 2026",
    time: "11:30 AM",
    status: "Confirmed",
    payment: "Paid",
    price: 1500,
  },
  {
    id: "SB-1019",
    service: "Manicure",
    date: "Dec 12, 2025",
    time: "04:00 PM",
    status: "Completed",
    payment: "Paid",
    price: 800,
  },
  {
    id: "SB-1014",
    service: "Beard Grooming",
    date: "Dec 02, 2025",
    time: "01:30 PM",
    status: "Cancelled",
    payment: "Unpaid",
    price: 600,
  },
];

export const adminAppointments: AdminAppointment[] = [
  {
    id: "SB-1024",
    customer: "Raihan Hasan",
    email: "raihan@example.com",
    avatar: unsplash("1500648767791-00dcc994a43e", 120),
    service: "Haircut & Styling",
    date: "Dec 26, 2025",
    time: "10:00 AM",
    status: "Confirmed",
    payment: "Paid",
    price: 600,
  },
  {
    id: "SB-1025",
    customer: "Nusrat Jahan",
    email: "nusrat@example.com",
    avatar: unsplash("1494790108377-be9c29b29330", 120),
    service: "Hair Coloring",
    date: "Dec 26, 2025",
    time: "02:00 PM",
    status: "Pending",
    payment: "Unpaid",
    price: 2000,
  },
  {
    id: "SB-1026",
    customer: "Md. Imran",
    email: "imran@example.com",
    avatar: unsplash("1507003211169-0a1dd7228f2d", 120),
    service: "Facial Treatment",
    date: "Dec 27, 2025",
    time: "11:30 AM",
    status: "Confirmed",
    payment: "Paid",
    price: 1500,
  },
  {
    id: "SB-1027",
    customer: "Sadia Afrin",
    email: "sadia@example.com",
    avatar: unsplash("1534528741775-53994a69daeb", 120),
    service: "Party Makeup",
    date: "Dec 27, 2025",
    time: "04:00 PM",
    status: "Pending",
    payment: "Unpaid",
    price: 2500,
  },
  {
    id: "SB-1028",
    customer: "Tanvir Ahmed",
    email: "tanvir@example.com",
    avatar: unsplash("1506794778202-cad84cf45f1d", 120),
    service: "Full Body Massage",
    date: "Dec 28, 2025",
    time: "06:30 PM",
    status: "Confirmed",
    payment: "Paid",
    price: 2800,
  },
  {
    id: "SB-1029",
    customer: "Farhana Akter",
    email: "farhana@example.com",
    avatar: unsplash("1517841905240-472988babdf9", 120),
    service: "Bridal Makeup",
    date: "Dec 29, 2025",
    time: "09:00 AM",
    status: "Cancelled",
    payment: "Unpaid",
    price: 5000,
  },
];

export const revenuePoints = [
  { month: "Jul", value: 32 },
  { month: "Aug", value: 46 },
  { month: "Sep", value: 38 },
  { month: "Oct", value: 58 },
  { month: "Nov", value: 72 },
  { month: "Dec", value: 96 },
];

export const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
];

export const steps = ["Choose Service", "Date & Time", "Your Details"];
