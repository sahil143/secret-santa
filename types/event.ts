import { withID, withTimestamp } from "./common";

export type EventType = {
	name: string;
	date: string;
	sendReminder: boolean;
	owner: string;
} & withID & withTimestamp;