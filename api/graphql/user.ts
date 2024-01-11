import { extendType, objectType } from "nexus";
import { signUp } from "../user/signUp";
import { userSignIn } from "../user/signIn";
export const User = objectType({
  name: "User",
  definition(t) {
    t.int("id");
    t.string("email", {
      description: "Email to login/signup and identify user",
    });
    t.string("password", { description: "Password to login/signup" });
    t.string("name", { description: "name of the user" });
    t.string("avatar");
    t.implements("timestampsObject");
    t.field("role", {
      type: "Role",
      description: "Role assigned to this user",
    });
    t.list.field("event", {
      type: "Event",
    });
    t.list.field("invite", {
      type: "Invite",
    });
    t.list.field("santa", {
      type: "Pairing",
    });
    t.list.field("person", {
      type: "Pairing",
    });
    t.list.field("thankYouUser", {
      type: "ThankYou",
    });
    t.list.field("thankYouToUser", {
      type: "ThankYou",
    });
    t.list.field("wishList", {
      type: "WishList",
    });
    t.string("token");
  },
});

export const UserMutation = extendType({
  type: "Mutation",
  definition(t) {
    signUp(t);
    userSignIn(t);
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("getUser", {
      type: "User",
      async resolve (_, args, ctx) {
        return await ctx.prisma.user.findMany();
      }
    })
  },
})
