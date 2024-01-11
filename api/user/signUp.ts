import { GraphQLError } from "graphql";
import { nonNull, stringArg, core } from "nexus";
import { generateHash } from "../utils/password";

export const signUp = (t: core.ObjectDefinitionBlock<"Mutation">) => {
  t.nonNull.field("signUp", {
    type: "User",
    args: {
      name: nonNull(stringArg()),
      email: nonNull(stringArg()),
      password: nonNull(stringArg()),
    },
    async resolve(_, args, ctx) {
      const emailExist = await ctx.prisma.user.findFirst({
        where: { email: args.email },
      });
      if (emailExist) {
        throw new GraphQLError("Email already exists");
      }
      const hash = generateHash(args.password);
      const user = await ctx.prisma.user.create({
        data: { name: args.name, email: args.email, password: hash },
      });
      return user;
    },
  });
}