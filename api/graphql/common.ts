import { GraphQLDateTime } from "graphql-scalars";
import { asNexusMethod, enumType, interfaceType } from "nexus";

export const Date = asNexusMethod(GraphQLDateTime, "dateTime");

export const Timestamps = interfaceType({
  name: "timestampsObject",
  definition(t) {
    t.dateTime("createdAt");
    t.dateTime("updatedAt");
  },
});

export const Role = enumType({
  name: "Role",
  description: "Role of a user",
  members: ["ADMIN", "USER"],
});

export const Status = enumType({
  name: "Status",
  description: "Status of an Invite",
  members: ["INVITED", "DECLINED", "ACCEPTED"],
});
