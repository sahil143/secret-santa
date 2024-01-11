import { ContextFunction } from "@apollo/server";
import { StandaloneServerContextFunctionArgument } from "@apollo/server/standalone";
import { PrismaClient, User } from "@prisma/client";
import { verifyToken } from "./utils/token";

export interface Context {
  prisma: PrismaClient;
  user?: User;
}

const prisma = new PrismaClient();

export const createContext: ContextFunction<
  [StandaloneServerContextFunctionArgument]
> = async ({ req }) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const decoded = verifyToken(authHeader.split(" ")[1]);
    const user = await prisma.user.findFirst({
      where: { id: (decoded as { id: number }).id },
    });
    return { prisma, user };
  }
  return {
    prisma,
    user: null,
  };
};
