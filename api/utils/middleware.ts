import { GraphQLResolveInfo } from "graphql";
import { Context } from "../context";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ResolveArgs<Parent = any, Args = any> = [Parent, Args, Context, GraphQLResolveInfo]


export type ConditionFunc = (...args: ResolveArgs) => {result: boolean, error?: string};


export const Not =
  (func: ConditionFunc): ConditionFunc =>
  (...args: ResolveArgs) => {
    const {result, error} = func(...args);
    return {result: !result, error};
  };

export const checkConditions =
  (func: ConditionFunc) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (resolve: (...args: ResolveArgs) => any, ...args: ResolveArgs) => {
    const {result, error} = func(...args)
    if (result) {
      return await resolve(...args);
    }

    throw new Error(`Check Conditions failed: ${error}`);
  };
