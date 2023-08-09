import { getApps, initializeApp } from "npm:firebase-admin@11.10.1/app";
import { getFirestore } from "npm:firebase-admin@11.10.1/firestore";

const apps = getApps();
const app = apps.length === 0 ? initializeApp() : apps[0];
export const db = getFirestore(app);

export async function getFirestoreData() {
  console.log(app.options.credential);
  const collection = await db.collection("users").get();
  console.log(collection.docs.length);
}
