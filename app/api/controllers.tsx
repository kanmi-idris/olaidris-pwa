import { LocalDB } from "@/app/api/dbConfig";
import { DataItem, DataType } from "@/types";
import { Table } from "dexie";
import { revalidatePath } from "next/cache";

const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:5000";

async function fetchFromServer(type: DataType): Promise<DataItem[]> {
  console.log(`[Server] Fetching ${BASE_URL}/api/${type}...`);

  try {
    const response = await fetch(`${BASE_URL}/api/${type}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${type}: ${response.statusText}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data from the server:", error);
    throw error;
  }
}

export async function getData(type: DataType): Promise<DataItem[]> {
  // First, check if we're running in the browser (Dexie only works client-side)
  if (typeof window === "undefined") {
    // Server-side: always fetch from the server
    return fetchFromServer(type);
  }

  // Client-side: try to use LocalDB, fallback to server if empty
  try {
    const table = LocalDB[type] as Table<DataItem>;
    let data = await table.toArray();

    if (data.length === 0) {
      console.log("LocalDB is empty. Fetching from the server...");
      data = await fetchFromServer(type);
      await table.bulkPut(data);
    }

    return data;
  } catch (error) {
    console.error("Error accessing LocalDB:", error);
    return fetchFromServer(type);
  }
}

export async function mutateData(type: DataType, newData: DataItem[]) {
  try {
    // Update local DB
    await (LocalDB[type] as Table<DataItem>).bulkPut(newData);

    // Update server
    const response = await fetch(`${BASE_URL}/api/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update ${type}: ${response.statusText}`);
    }

    // Revalidating the path to update the cache
    revalidatePath(`/api/${type}`);

    return response.json();
  } catch (error) {
    console.error(`Failed to update ${type}:`, error);
    throw error;
  }
}

export async function populateDexieDB() {
  if (typeof window === "undefined") {
    console.log("populateDexieDB can only run on the client side.");
    return;
  }

  try {
    const types: DataType[] = [
      "experiences",
      "education",
      "certification",
      "accolades",
      "projects",
      "uploads",
    ];

    for (const type of types) {
      const serverData = await fetchFromServer(type);

      if (!Array.isArray(serverData)) {
        console.error(`Data for ${type} is not an array. Skipping...`);
        continue;
      }

      const table = LocalDB[type] as Table<DataItem>;

      if (!table) {
        console.error(`Table '${type}' is not defined in LocalDB.`);
        continue;
      }

      const existingData = await table.toArray();

      // using Map to store data to allow for O(1) lookup time when checking for differences
      const serverDataMap = new Map(serverData.map((item) => [item._id, item]));
      const existingDataMap = new Map(
        existingData.map((item) => [item._id, item])
      );

      const toUpdate = serverData.filter((item) => {
        return existingDataMap.get(item._id) !== item;
      });

      const toDelete = existingData.filter(
        (item) => !serverDataMap.has(item._id)
      );

      if (toUpdate.length > 0) {
        await table.bulkPut(toUpdate);
        console.log(`${toUpdate.length} items updated in ${type} table`);
      }

      if (toDelete.length > 0) {
        await table.bulkDelete(toDelete.map((item) => item._id));
        console.log(`${toDelete.length} items deleted from ${type} table`);
      }
    }
  } catch (error) {
    console.error("Failed to populate Dexie DB:", error);
    throw error;
  }
}

// Helper function for deep equality check
function isEqual(obj1: any, obj2: any): boolean {
  // Check if both are the same object reference
  if (obj1 === obj2) return true;

  // Check if both are not objects or are null
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if both have the same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Recursively check each key-value pair
  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false; // obj2 doesn't have the key
    }
    // Recursively compare the value
    if (!isEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
