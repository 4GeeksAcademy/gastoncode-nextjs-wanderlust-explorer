export interface Experiencie {
  id: number;
  title: string;
  category: "Adventure" | "Cultural" | "Relaxation" | "Wildlife" | "Food & Drink";
  destination: "Buenos Aires" | "Brasilia" | "Montevideo" | "Asunción" | "Santiago" | "La Paz" | "Lima" | "Quito" | "Bogotá" | "Caracas" | "Panama City" | "San José" | "Havana" | "Kingston" | "Port-au-Prince";
  description: string;
  image: string;
  date: Date;
}