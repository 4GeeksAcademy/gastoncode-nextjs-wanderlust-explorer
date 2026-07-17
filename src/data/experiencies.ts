import type { Experiencie } from "../../types/type-experiencies";

const categories: Experiencie["category"][] = [
  "Adventure",
  "Culture",
  "Wellness",
  "Food",
  "Nature",
];

const destinations = [
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Santiago", country: "Chile" },
  { city: "Lima", country: "Peru" },
  { city: "Bogota", country: "Colombia" },
  { city: "Quito", country: "Ecuador" },
  { city: "Montevideo", country: "Uruguay" },
  { city: "Asuncion", country: "Paraguay" },
  { city: "La Paz", country: "Bolivia" },
  { city: "Mexico City", country: "Mexico" },
  { city: "San Jose", country: "Costa Rica" },
  { city: "Panama City", country: "Panama" },
  { city: "Havana", country: "Cuba" },
  { city: "Madrid", country: "Spain" },
  { city: "Lisbon", country: "Portugal" },
  { city: "Rome", country: "Italy" },
  { city: "Athens", country: "Greece" },
  { city: "Istanbul", country: "Turkey" },
  { city: "Marrakech", country: "Morocco" },
  { city: "Bangkok", country: "Thailand" },
  { city: "Kyoto", country: "Japan" },
] as const;

export const experiencies: Experiencie[] = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const category = categories[index % categories.length];
  const destination = destinations[index % destinations.length];
  const price = 50 + (index % 25) * 8;
  const rating = Number((3.5 + (index % 16) * 0.1).toFixed(1));

  return {
    id,
    title: `Experience ${id}: ${category} in ${destination.city}`,
    category,
    destination: {
      city: destination.city,
      country: destination.country,
    },
    price,
    rating,
    description: `Discover a ${category.toLowerCase()} experience in ${destination.city}, ${destination.country}, shared by real travelers.`,
    imageUrl: `/images/experiences/experience-${id}.jpg`,
  };
});
