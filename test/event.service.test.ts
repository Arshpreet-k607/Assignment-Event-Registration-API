import * as eventService from "../src/api/v1/services/event.service";
import * as eventRepo from "../src/api/v1/repositories/event.repository";
import { Event } from "../src/api/v1/models/event.model";

jest.mock("../src/api/v1/repositories/event.repository");

describe("eventService.createEventService", () => {
  it("should call repository and return created event with id", async () => {
    const mockId = "abc123";
    (eventRepo.createEvent as jest.Mock).mockResolvedValue(mockId);

    const payload: Event = {
      name: "My Event",
      location: "Winnipeg",
      category: "online",
      capacity: 100,
      startDate: "2026-06-05T10:00:00.000Z",
      endDate: "2026-06-05T12:00:00.000Z",
      isPublic: true,
    };

    const result = await eventService.createEventService(payload);

    expect(eventRepo.createEvent).toHaveBeenCalledTimes(1);
    expect(result.id).toBe(mockId);
    expect(result.name).toBe(payload.name);
    expect(result.createdAt).toBeDefined();
    expect(result.updatedAt).toBeDefined();
  });
});
