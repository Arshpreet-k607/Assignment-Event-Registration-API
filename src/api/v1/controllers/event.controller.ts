import { Request, Response } from "express";
import * as eventService from "../services/event.service";

export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await eventService.createEventService(req.body);
    return res.status(201).json(event);
  } catch (error: any) {
    return res.status(500).json({ message: error.message || "Server error" });
  }
};

export const getAllEvents = async (_req: Request, res: Response) => {
  try {
    const events = await eventService.getAllEventsService();
    return res.status(200).json(events);
  } catch (error: any) {
    return res.status(500).json({ message: error.message || "Server error" });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const event = await eventService.getEventByIdService(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    return res.status(200).json(event);
  } catch (error: any) {
    return res.status(500).json({ message: error.message || "Server error" });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const updated = await eventService.updateEventService(
      req.params.id,
      req.body
    );
    if (!updated) {
      return res.status(404).json({ message: "Event not found" });
    }
    return res.status(200).json({ message: "Event updated" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message || "Server error" });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const deleted = await eventService.deleteEventService(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Event not found" });
    }
    return res.status(200).json({ message: "Event deleted" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message || "Server error" });
  }
};
