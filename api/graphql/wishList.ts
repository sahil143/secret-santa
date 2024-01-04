import { objectType } from "nexus";

export const WishList = objectType({
  name: "WishList",
  definition(t) {
    t.int("id");
    t.string("name");
    t.string("url");
    t.field("user", {
      type: "User",
    });
    t.int("userId");
    t.implements("timestampsObject");
    t.int("order");
    t.field("event", {
      type: "Event",
    });
    t.string("eventId");
    t.string("siteImage");
    t.string("siteTitle");
    t.string("siteDescription");
  },
});
