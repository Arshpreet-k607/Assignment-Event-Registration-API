import { Event } from "../models/event.model";
import * as eventRepo from "../repositories/event.repository";

export const createEventService = async (data: Event): Promise<Event> => {
  try {
    const now = new Date().toISOString();
    const payload: Event = {
      ...data,
      createdAt: now,
      updatedAt: now,
    };

    const id = await eventRepo.createEvent(payload);
    return { id, ...payload };
  } catch (error) {
    // You can log error here
    throw new Error("Failed to create event");
  }
};

export const getAllEventsService = async (): Promise<Event[]> => {
  try {
    return await eventRepo.getAllEvents();
  } catch {
    throw new Error("Failed to fetch events");
  }
};

export const getEventByIdService = async (id: string): Promise<Event | null> => {
  try {
    return await eventRepo.getEventById(id);
  } catch {
    throw new Error("Failed to fetch event");
  }
};

export const updateEventService = async (
  id: string,
  data: Partial<Event>
): Promise<boolean> => {
  try {
    const updated = await eventRepo.updateEvent(id, {
      ...data,
      updatedAt: new Date().toISOString(),
    });
    return updated;
  } catch {
    throw new Error("Failed to update event");
  }
};

export const deleteEventService = async (id: string): Promise<boolean> => {
  try {
    return await eventRepo.deleteEvent(id);
  } catch {
    throw new Error("Failed to delete event");
  }
};
