export interface Event {
  id?: string; // Firestore doc id
  name: string;
  description?: string;
  location: string;
  category: "online" | "in-person" | "hybrid"; // example enum
  capacity: number;
  price?: number;
  startDate: string; 
  endDate: string;  
  isPublic: boolean;
  createdAt?: string;
  updatedAt?: string;
}