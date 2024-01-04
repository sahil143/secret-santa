import { objectType } from "nexus";

export const Pairing = objectType({
  name: "Pairing",
  definition(t) {
    t.int("id");
    t.field("event", {
      type: "Event",
    });
    t.string("eventId");
    t.field("santa", {
      type: "User",
    });
    t.int("santaId");
    t.field("person", {
      type: "User",
    });
    t.int("personId");
    t.implements("timestampsObject");
  },
});
