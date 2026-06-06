import { Router } from "express";
import * as eventController from "../controllers/event.controller";
import { validateBody } from "../middleware/validateRequest";
import { createEventSchema } from "../validation/event.validation";

const router = Router();

// Create Event 
router.post("/", validateBody(createEventSchema), eventController.createEvent);

// Get All Events
router.get("/", eventController.getAllEvents);

// Get Event by ID
router.get("/:id", eventController.getEventById);

// Update Event 
router.put("/:id", eventController.updateEvent);

// Delete Event
router.delete("/:id", eventController.deleteEvent);

export default router;
