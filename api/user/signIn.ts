import { core, nonNull, stringArg } from "nexus";
import { comparePassword } from "../utils/password";
import { generateToken } from "../utils/token";

export const userSignIn = (t: core.ObjectDefinitionBlock<"Mutation">) => {
  t.nonNull.field("signIn", {
    type: "User",
    args: {
      email: nonNull(stringArg()),
      password: nonNull(stringArg()),
    },
    async resolve (_, args, ctx ) {
      const userExist = await ctx.prisma.user.findFirst({where: {email: args.email}});
      if (!userExist) {
        throw new Error("User doesn't exist");
      }
      const passMatch = comparePassword(args.password, userExist.password);
      if (!passMatch) {
        throw new Error("Password doesn't match");
      }
      const token = generateToken(userExist.id);

      return {...userExist, token};
    }
  })
};