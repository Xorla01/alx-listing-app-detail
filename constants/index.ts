import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/assets/ListingImages/image_5.png",
    discount: "",
    description:
      "A serene villa with panoramic ocean views and modern tropical design. Perfect for families or couples seeking luxury by the beach.",
    reviews: [
      {
        avatar: "/images/user1.jpg",
        name: "Ama Serwaa",
        comment: "Breathtaking view and great hospitality. Would definitely return!",
        rating: 5,
      },
      {
        avatar: "/images/user2.jpg",
        name: "Kofi Mensah",
        comment: "Spacious rooms and peaceful surroundings. Loved every moment.",
        rating: 4.5,
      },
    ],
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "/assets/ListingImages/image_6.png",
    discount: "30",
    description:
      "A cozy wooden chalet nestled among Aspen’s snowy peaks. Enjoy a fireplace and scenic hiking trails nearby.",
    reviews: [
      {
        avatar: "/images/user3.jpg",
        name: "Efua Nyarko",
        comment: "The perfect getaway spot for winter holidays. Very comfortable!",
        rating: 5,
      },
      {
        avatar: "/images/user4.jpg",
        name: "Yaw Boateng",
        comment: "Beautiful interior and fantastic mountain views.",
        rating: 4,
      },
    ],
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "/assets/ListingImages/image_7.png",
    discount: "",
    description:
      "A minimalist desert retreat offering tranquility and warmth. Great for couples seeking a quiet escape.",
    reviews: [
      {
        avatar: "/images/user5.jpg",
        name: "Abena Owusu",
        comment: "A hidden gem! Loved the peaceful desert vibe.",
        rating: 5,
      },
      {
        avatar: "/images/user6.jpg",
        name: "Kwesi Johnson",
        comment: "Small but cozy and very clean. Ideal for two.",
        rating: "4.5",
      },
    ],
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/assets/ListingImages/image_8.png",
    discount: "15",
    description:
      "Experience luxury at the heart of NYC. This penthouse offers skyline views and modern amenities for urban travelers.",
    reviews: [
      {
        avatar: "/images/user7.jpg",
        name: "Nana Adwoa",
        comment: "The city view from the balcony is absolutely stunning!",
        rating: 5,
      },
      {
        avatar: "/images/user8.jpg",
        name: "Kojo Agyeman",
        comment: "Perfect spot for a weekend stay in the city. Worth every penny.",
        rating: 4.5,
      },
    ],
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image: "/assets/ListingImages/image_9.png",
    discount: "20",
    description:
      "A cozy riverside cabin surrounded by nature. Ideal for kayaking, fishing, or relaxing by the water.",
    reviews: [
      {
        avatar: "/images/user9.jpg",
        name: "Akua Frempong",
        comment: "The riverside location is peaceful and refreshing.",
        rating: 4.5,
      },
      {
        avatar: "/images/user10.jpg",
        name: "Yaw Appiah",
        comment: "Loved kayaking in the morning. A perfect getaway!",
        rating: 5,
      },
    ],
  },
];


export const HERO_BACKGROUND = "/assets/HeroImages/Image1.png";

export const FILTERS = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Villa",
  "Apartment",
  "Cabin",
];
