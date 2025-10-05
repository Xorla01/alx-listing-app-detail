export interface CardProps {
    name: string;
    price: number;
    rating: number;
    image: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
  description: string;
    reviews: {
    avatar: string;
    name: string;
    comment: string;
    rating: string | number;
  }[];
}

export interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface ReviewProps {
  reviews: {
    avatar: string;
    name: string;
    comment: string;
    rating: string | number;
  }[];
}

export interface BookingProps {
  price: number;
}