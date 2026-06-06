import { createEventSchema }
from "../src/api/v1/validation/event.validation";

describe("createEventSchema validation", () => {
  it("should pass with a valid payload", () => {
    const payload = {
      name: "My Event",
      description: "Nice event",
      location: "Winnipeg",
      category: "online",
      capacity: 100,
      price: 10.5,
      startDate: "2026-06-05T10:00:00.000Z",
      endDate: "2026-06-05T12:00:00.000Z",
      isPublic: true,
    };

    const { error } = createEventSchema.validate(payload);
    expect(error).toBeUndefined();
  });

  it("should fail when required field is missing", () => {
    const payload = {
      // name missing
      location: "Winnipeg",
      category: "online",
      capacity: 100,
      startDate: "2026-06-05T10:00:00.000Z",
      endDate: "2026-06-05T12:00:00.000Z",
    };

    const { error } = createEventSchema.validate(payload);
    expect(error).toBeDefined();
    // Adjust to match exact message from video
    expect(error!.details[0].message).toBe("name is required");
  });

  it("should apply default values (e.g., price, isPublic)", () => {
    const payload = {
      name: "Free Event",
      location: "Online",
      category: "online",
      capacity: 50,
      startDate: "2026-06-05T10:00:00.000Z",
      endDate: "2026-06-05T12:00:00.000Z",
    };

    const { error, value } = createEventSchema.validate(payload);
    expect(error).toBeUndefined();
    expect(value.price).toBe(0); // if default is 0
    expect(value.isPublic).toBe(true); // if default is true
  });
});
