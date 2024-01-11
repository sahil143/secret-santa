import { IMiddlewareTypeMap } from "graphql-middleware";
import { Context } from "./context";
import { ConditionFunc, checkConditions } from "./utils/middleware";

const isAuthenticated: ConditionFunc = (
  _: object,
  __: object,
  ctx: Context
) => {
  return {
    result: ctx.user !== null,
    error: ctx.user === null ? "User is not authenticated" : undefined,
  };
};

export const authMiddleware: IMiddlewareTypeMap = {
  Query: {
    getUser: checkConditions(isAuthenticated),
  },
};
