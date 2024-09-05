"use client";
import { DataItem } from "@/types";
import { useEffect, useState } from "react";
import { LocalDB } from "./api/dbConfig";

export default function Home() {
  const [experiences, setExperiences] = useState<DataItem[]>([]);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const data = await LocalDB.experiences.toArray();
        console.log("experiences in useDexie", data);

        setExperiences(data);
      } catch (err) {
        console.error("Error fetching experiences:", err);
      } finally {
      }
    }

    fetchExperiences();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Olasunkanmi Idris</p>
      <div>
        <h2>Experiences</h2>
        {experiences.length === 0 ? (
          <p>No experiences found.</p>
        ) : (
          <ul>
            {experiences.map((experience: any) => (
              <li key={experience.id}>
                <h3 className="text-xl font-bold text-white">
                  {experience.title}
                </h3>
                <p className="text-gray-400">{experience.description}</p>
                {/* Add more fields as needed */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
