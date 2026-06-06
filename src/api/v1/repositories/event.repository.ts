import { db } from "config/firebaseConfig";
import { Event } from "../models/event.model";

const COLLECTION = "events";

export const createEvent = async (data: Event): Promise<string> => {
  const docRef = await db.collection(COLLECTION).add(data);
  return docRef.id;
};

export const getAllEvents = async (): Promise<Event[]> => {
  const snapshot = await db.collection(COLLECTION).get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Event),
  }));
};

export const getEventById = async (id: string): Promise<Event | null> => {
  const docRef = db.collection(COLLECTION).doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return null;
  return { id: doc.id, ...(doc.data() as Event) };
};

export const updateEvent = async (
  id: string,
  data: Partial<Event>
): Promise<boolean> => {
  const docRef = db.collection(COLLECTION).doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return false;
  await docRef.update(data);
  return true;
};

export const deleteEvent = async (id: string): Promise<boolean> => {
  const docRef = db.collection(COLLECTION).doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return false;
  await docRef.delete();
  return true;
};
