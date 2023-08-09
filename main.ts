import { getFirestoreData } from "./firebaseAdminDemo.ts";

if (import.meta.main) {
  await getFirestoreData();
}
