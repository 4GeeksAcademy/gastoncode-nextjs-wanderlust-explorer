export interface Experiencie {
  id: number;
  title: string;
  category: "Adventure" | "Culture" | "Wellness" | "Food" | "Nature";
  destination: {
    city: string;
    country: string;
  };
  price: number;
  rating: number;
  description: string;
  imageUrl: string;
}