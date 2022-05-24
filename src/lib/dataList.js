import { collection, query} from "firebase/firestore";
import { db } from "./firebaseconfig.js";

export const q = query(collection(db, "notes"));