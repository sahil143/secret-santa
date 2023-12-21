export type withID = {
  id: string;
};

export type withTimestamp = {
  createdAt: string;
  updatedAt: string;
};

export enum STATUS {
  INVITED,
  DECLINED,
  ACCEPTED,
}

export enum ROLE {
  ADMIN,
  USER,
}
