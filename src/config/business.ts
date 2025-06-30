// Business Configuration for [ALL:TID] salong
// Main business settings and configuration

export interface BusinessConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  openingHours: {
    [key: string]: {
      open?: string;
      close?: string;
      closed?: boolean;
    };
  };
  social?: {
    facebook?: string;
    instagram?: string;
    website?: string;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    goldColor: string;
    darkColor: string;
    lightGold: string;
  };
  logo: string;
  heroImage?: string;
}

// [ALL:TID] salong configuration with modern salon colors
export const businessConfig: BusinessConfig = {
  name: "[ALL:TID] salong",
  tagline: "Modern Skönhet & Välmående",
  description: "[ALL:TID] salong är din moderna destination för skönhet och välmående. Vi erbjuder professionella frisör- och skönhetstjänster i en stilren och avslappnande miljö. Vårt team av erfarna stylister och skönhetsterapeuter är dedikerade till att ge dig den bästa upplevelsen. Boka din tid idag och låt oss hjälpa dig att känna dig vacker och självsäker.",
  phone: "+46 8 123 45 67",
  email: "info@alltidsalong.se",
  address: {
    street: "Skönhetsgatan 25",
    postalCode: "114 32",
    city: "Stockholm",
    country: "Sverige"
  },
  openingHours: {
    monday: { open: "09:00", close: "19:00" },
    tuesday: { open: "09:00", close: "19:00" },
    wednesday: { open: "09:00", close: "19:00" },
    thursday: { open: "09:00", close: "20:00" },
    friday: { open: "09:00", close: "18:00" },
    saturday: { open: "10:00", close: "16:00" },
    sunday: { closed: true }
  },
  social: {
    instagram: "https://instagram.com/alltidsalong",
    facebook: "https://facebook.com/alltidsalong"
  },
  theme: {
    primaryColor: "#1a1a1a", // Deep black
    secondaryColor: "#2d2d2d", // Charcoal gray
    accentColor: "#f5f5f5", // Light gray/white
    goldColor: "#d4af37", // Elegant gold
    darkColor: "#000000", // Pure black
    lightGold: "#faf8f3" // Cream white
  },
  logo: "/logo.png"
};

// Staff configuration for salon - Updated with Marina and Isabelle
export interface StaffMember {
  name: string;
  title: string;
  image: string;
  bio?: string;
  specialties?: string[];
  experience?: string;
  certifications?: string[];
}

export const staff: StaffMember[] = [
  {
    name: "Marina",
    title: "Trainee Stylist",
    image: "/staff/marina.png",
    bio: "Marina är vår talangfulla trainee stylist som arbetar under överinseende av våra erfarna stylister. Hon erbjuder professionella tjänster till förmånliga priser medan hon utvecklar sina färdigheter inom frisöryrket. Marina specialiserar sig på barnklippning, grundläggande färgning och styling.",
    specialties: ["Barnklippning", "Färgning", "Klippning", "Slingor", "Nyansering", "Styling"],
    experience: "Trainee",
    certifications: ["Frisörutbildning pågår", "Barnklippning", "Färgtekniker"]
  },
  {
    name: "Isabelle",
    title: "Elev Stylist",
    image: "/staff/isabelle.png",
    bio: "Isabelle är vår skickliga elev stylist som utbildar sig inom frisöryrket. Hon erbjuder kvalitativa tjänster till studentvänliga priser under handledning av våra erfarna stylister. Isabelle är särskilt duktig på barnklippning och grundläggande färgtekniker.",
    specialties: ["Barnklippning", "Klippning", "Färgbehandling", "Folieslingor", "Utväxtfärgning"],
    experience: "Elev",
    certifications: ["Frisörelev", "Barnklippning", "Grundläggande färgtekniker"]
  }
];

// Customer reviews for salon - Updated for Marina and Isabelle
export interface Review {
  rating: number;
  text: string;
  author: string;
  date: string;
  verified?: boolean;
  service?: string;
}

export const reviews: Review[] = [
  {
    rating: 5,
    text: "Marina gjorde en fantastisk barnklippning för min 4-åring! Hon var så tålmodig och resultatet blev perfekt. Bra pris också!",
    author: "Anna K.",
    date: "15 januari 2025",
    verified: true,
    service: "Marina Trainee barnklipp 0–6 år"
  },
  {
    rating: 5,
    text: "Isabelle klippte mitt hår så bra! Trots att hon är elev så var resultatet professionellt och priset var riktigt bra.",
    author: "Maria L.",
    date: "14 januari 2025",
    verified: true,
    service: "Isabell Elev klippning"
  },
  {
    rating: 5,
    text: "Så nöjd med Marinas färgning! Trots att hon är trainee så var resultatet professionellt och priset var riktigt bra.",
    author: "Sara M.",
    date: "13 januari 2025",
    verified: true,
    service: "Marina Trainee färg"
  },
  {
    rating: 5,
    text: "Isabelles folieslingor blev så vackra! Hon är mycket noggrann och professionell trots att hon är elev. Rekommenderar varmt!",
    author: "Linda H.",
    date: "12 januari 2025",
    verified: true,
    service: "Isabell Elev Folieslingor"
  },
  {
    rating: 5,
    text: "Marina klippte mitt hår så bra! Hon lyssnade på vad jag ville ha och resultatet blev fantastiskt. Kommer definitivt tillbaka!",
    author: "Jessica T.",
    date: "11 januari 2025",
    verified: true,
    service: "Marina Trainee klippning"
  },
  {
    rating: 5,
    text: "Isabelles barnklippning var perfekt för min 7-åring! Hon var så bra med barn och resultatet blev fantastiskt.",
    author: "Caroline R.",
    date: "10 januari 2025",
    verified: true,
    service: "Isabell Elev Barn klippning"
  },
  {
    rating: 5,
    text: "Marinas slingor blev så vackra! Hon är mycket noggrann och professionell trots att hon är trainee. Rekommenderar varmt!",
    author: "Emma S.",
    date: "9 januari 2025",
    verified: true,
    service: "Marina Trainee slingor"
  },
  {
    rating: 5,
    text: "Isabelles färgbehandling var fantastisk! Trots att hon är elev så fick jag exakt den färg jag ville ha.",
    author: "Petra M.",
    date: "8 januari 2025",
    verified: true,
    service: "Isabell Elev Färgbehandling"
  },
  {
    rating: 5,
    text: "Perfekt nyansering av Marina! Hon förstod exakt vilken nyans jag ville ha. Mycket nöjd med resultatet.",
    author: "Lisa K.",
    date: "7 januari 2025",
    verified: true,
    service: "Marina Trainee Nyansering"
  },
  {
    rating: 5,
    text: "Isabelles utväxtfärgning blev perfekt! Hon är verkligen skicklig och priset var mycket rimligt. Kommer tillbaka!",
    author: "Sofia A.",
    date: "6 januari 2025",
    verified: true,
    service: "Isabell Elev Utväxt färg"
  }
];

// Function to open booking system
export const openBokaDirekt = () => {
  const bokaDirektUrl = "https://www.bokadirekt.se/places/all-tid-salong-57795";
  
  // Try to open BokaDirekt app on mobile devices
  if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Try to open the app first
    const appUrl = "bokadirekt://places/all-tid-salong-57795";
    
    // Create a hidden iframe to try opening the app
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = appUrl;
    document.body.appendChild(iframe);
    
    // Fallback to website after a short delay if app doesn't open
    setTimeout(() => {
      window.open(bokaDirektUrl, '_blank', 'noopener,noreferrer');
      document.body.removeChild(iframe);
    }, 1000);
  } else {
    // Desktop - open website in new tab
    window.open(bokaDirektUrl, '_blank', 'noopener,noreferrer');
  }
};