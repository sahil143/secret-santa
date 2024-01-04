import { objectType } from "nexus";

export const Event = objectType({
  name: "Event",
  definition(t) {
    t.string("id");
    t.string("name");
    t.dateTime("date");
    t.implements("timestampsObject");
    t.boolean("sendReminder");
    t.field("user", {
      type: "User",
      description: "Event created by user",
    });
    t.int("owner", { description: "id of user that created this event" });
    t.list.field("invite", {
      type: "Invite",
    });
    t.list.field("pairing", {
      type: "Pairing",
    });
    t.list.field("thankYou", {
      type: "ThankYou",
    });
    t.list.field("wishList", {
      type: "WishList",
    });
  },
});
