import { Cars, db, Tracks } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Tracks).values([{ id: 1, name: "Monza" }]);
  await db.insert(Cars).values([{ id: 1, name: "Porsche 911 GT3 Cup (992)" }]);
}
