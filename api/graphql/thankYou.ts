import { objectType } from "nexus";

export const ThankYou = objectType({
  name: "ThankYou",
  definition(t) {
    t.string("id");
    t.field("event", {
      type: "Event",
    });
    t.string("eventId");
    t.field("user", {
      type: "User",
    });
    t.int("userId");
    t.field("toUser", {
      type: "User",
    });
    t.int("toUserId");
    t.string("message");
    t.dateTime("createdAt");
  },
});
