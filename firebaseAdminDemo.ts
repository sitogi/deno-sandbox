import { getApps, initializeApp } from "npm:firebase-admin@11.10.1/app";
import { getFirestore } from "npm:firebase-admin@11.10.1/firestore";

const apps = getApps();
const app = apps.length === 0 ? initializeApp() : apps[0];
export const db = getFirestore(app);

/**
 * 2023-08 時点の Deno 1.36.0 では npm 互換では以下のエラーが発生し動作しなかった。
 *
 * Warning: Not implemented: Http2Session.unref
 * Warning: Not implemented: Http2Session.unref
 * Warning: Not implemented: Http2Session.ref
 * error: Uncaught TypeError: error sending request for url (http://firestore.googleapis.com:443/google.firestore.v1.Firestore/RunQuery): connection error: Connection reset by peer (os error 54)
 *  at async mainFetch (ext:deno_fetch/26_fetch.js:266:12)
 *  at async fetch (ext:deno_fetch/26_fetch.js:490:7)
 *  at async node:http2:144:28
 */
export async function getFirestoreData() {
  console.log(app.options.credential);
  const collection = await db.collection("users").get();
  console.log(collection.docs.length);
}
