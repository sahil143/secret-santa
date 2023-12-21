import { STATUS, withID } from "./common";

export type InviteType = {
  eventId: string;
  userId: string;
  status: STATUS;
  email: string;
  name: string;
} & withID;
