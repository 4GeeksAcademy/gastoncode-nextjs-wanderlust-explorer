import type { Experiencie } from "../../types/type-experiencies";

const categories: Experiencie["category"][] = [
  "Adventure",
  "Cultural",
  "Relaxation",
  "Wildlife",
  "Food & Drink",
];

const destinations: Experiencie["destination"][] = [
  "Buenos Aires",
  "Brasilia",
  "Montevideo",
  "Asunción",
  "Santiago",
  "La Paz",
  "Lima",
  "Quito",
  "Bogotá",
  "Caracas",
  "Panama City",
  "San José",
  "Havana",
  "Kingston",
  "Port-au-Prince",
];

export const experiencies: Experiencie[] = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const category = categories[index % categories.length];
  const destination = destinations[index % destinations.length];
  const month = String((index % 12) + 1).padStart(2, "0");
  const day = String((index % 28) + 1).padStart(2, "0");

  return {
    id,
    title: `Experience ${id}: ${category} in ${destination}`,
    category,
    destination,
    description: `A curated ${category.toLowerCase()} travel activity in ${destination}, recommended by travelers.`,
    image: `/images/experiences/${id}.jpg`,
    date: new Date(`2026-${month}-${day}T10:00:00Z`),
  };
});
