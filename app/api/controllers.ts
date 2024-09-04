import { LocalDB } from "@/app/api/dbConfig"; // Adjust the import path as necessary

export async function populateDexieDB() {
  console.log("[Service Worker] Populating Dexie DB...");
  try {
    // Fetch data from backend
    const response = await fetch("/api/data"); // Adjust endpoint as necessary
    const data = await response.json();

    // Assuming the data is an object with keys corresponding to the table names
    // e.g., { certifications: [...], educations: [...], experiences: [...], projects: [...], accolades: [...] }
    // Populate the tables
    await Promise.all([
      LocalDB.certifications.bulkPut(data.certifications),
      LocalDB.educations.bulkPut(data.educations),
      LocalDB.experiences.bulkPut(data.experiences),
      LocalDB.projects.bulkPut(data.projects),
      LocalDB.accolades.bulkPut(data.accolades),
    ]);

    console.log("Dexie DB populated successfully");
  } catch (error) {
    console.error("Failed to populate Dexie DB:", error);
  }
}
