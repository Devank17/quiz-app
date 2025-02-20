import { openDB } from "idb";

const initDB = async () => {
  return openDB("QuizDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("attempts")) {
        db.createObjectStore("attempts", {
          keyPath: "storeId",
          autoIncrement: true,
        });
      }
    },
  });
};

export const addAttemptData = async (attemptData) => {
  try {
    const db = await initDB();
    const tx = db.transaction("attempts", "readwrite");
    await tx.store.add(attemptData);
    await tx.done;
  } catch (error) {
    console.error("Error storing attempt data:", error);
  }
};

export const getAllAttempts = async () => {
  const db = await initDB();
  return await db.getAll("attempts");
};
