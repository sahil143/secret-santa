import { extendType, objectType } from "nexus";

export const Invite = objectType({
  name: "Invite",
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
    t.field("status", {
      type: "Status",
    });
    t.string("email");
    t.string("name");
  },
});

export const InviteQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("invites", {
      type: "Invite",
      resolve(source, args, context, info) {
        console.log("##############", source, args, context, info);
        return [
          {
            id: "ancd",
            event: {},
            eventId: "eventId",
            user: {},
            userId: 12343,
            status: "ACCEPTED",
            email: "a@g.c",
            name: "Invite",
          },
        ];
      },
    });
  },
});
