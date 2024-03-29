/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  Role: "ADMIN" | "USER"
  Status: "ACCEPTED" | "DECLINED" | "INVITED"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Event: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    date?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: string | null; // String
    invite?: Array<NexusGenRootTypes['Invite'] | null> | null; // [Invite]
    name?: string | null; // String
    owner?: number | null; // Int
    pairing?: Array<NexusGenRootTypes['Pairing'] | null> | null; // [Pairing]
    sendReminder?: boolean | null; // Boolean
    thankYou?: Array<NexusGenRootTypes['ThankYou'] | null> | null; // [ThankYou]
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    user?: NexusGenRootTypes['User'] | null; // User
    wishList?: Array<NexusGenRootTypes['WishList'] | null> | null; // [WishList]
  }
  Invite: { // root type
    email?: string | null; // String
    event?: NexusGenRootTypes['Event'] | null; // Event
    eventId?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
    status?: NexusGenEnums['Status'] | null; // Status
    user?: NexusGenRootTypes['User'] | null; // User
    userId?: number | null; // Int
  }
  Mutation: {};
  Pairing: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    event?: NexusGenRootTypes['Event'] | null; // Event
    eventId?: string | null; // String
    id?: number | null; // Int
    person?: NexusGenRootTypes['User'] | null; // User
    personId?: number | null; // Int
    santa?: NexusGenRootTypes['User'] | null; // User
    santaId?: number | null; // Int
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Query: {};
  ThankYou: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    event?: NexusGenRootTypes['Event'] | null; // Event
    eventId?: string | null; // String
    id?: string | null; // String
    message?: string | null; // String
    toUser?: NexusGenRootTypes['User'] | null; // User
    toUserId?: number | null; // Int
    user?: NexusGenRootTypes['User'] | null; // User
    userId?: number | null; // Int
  }
  User: { // root type
    avatar?: string | null; // String
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email?: string | null; // String
    event?: Array<NexusGenRootTypes['Event'] | null> | null; // [Event]
    id?: number | null; // Int
    invite?: Array<NexusGenRootTypes['Invite'] | null> | null; // [Invite]
    name?: string | null; // String
    password?: string | null; // String
    person?: Array<NexusGenRootTypes['Pairing'] | null> | null; // [Pairing]
    role?: NexusGenEnums['Role'] | null; // Role
    santa?: Array<NexusGenRootTypes['Pairing'] | null> | null; // [Pairing]
    thankYouToUser?: Array<NexusGenRootTypes['ThankYou'] | null> | null; // [ThankYou]
    thankYouUser?: Array<NexusGenRootTypes['ThankYou'] | null> | null; // [ThankYou]
    token?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    wishList?: Array<NexusGenRootTypes['WishList'] | null> | null; // [WishList]
  }
  WishList: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    event?: NexusGenRootTypes['Event'] | null; // Event
    eventId?: string | null; // String
    id?: number | null; // Int
    name?: string | null; // String
    order?: number | null; // Int
    siteDescription?: string | null; // String
    siteImage?: string | null; // String
    siteTitle?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    url?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
    userId?: number | null; // Int
  }
}

export interface NexusGenInterfaces {
  timestampsObject: NexusGenRootTypes['Event'] | NexusGenRootTypes['Pairing'] | NexusGenRootTypes['User'] | NexusGenRootTypes['WishList'];
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Event: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    date: NexusGenScalars['DateTime'] | null; // DateTime
    id: string | null; // String
    invite: Array<NexusGenRootTypes['Invite'] | null> | null; // [Invite]
    name: string | null; // String
    owner: number | null; // Int
    pairing: Array<NexusGenRootTypes['Pairing'] | null> | null; // [Pairing]
    sendReminder: boolean | null; // Boolean
    thankYou: Array<NexusGenRootTypes['ThankYou'] | null> | null; // [ThankYou]
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
    user: NexusGenRootTypes['User'] | null; // User
    wishList: Array<NexusGenRootTypes['WishList'] | null> | null; // [WishList]
  }
  Invite: { // field return type
    email: string | null; // String
    event: NexusGenRootTypes['Event'] | null; // Event
    eventId: string | null; // String
    id: string | null; // String
    name: string | null; // String
    status: NexusGenEnums['Status'] | null; // Status
    user: NexusGenRootTypes['User'] | null; // User
    userId: number | null; // Int
  }
  Mutation: { // field return type
    signIn: NexusGenRootTypes['User']; // User!
    signUp: NexusGenRootTypes['User']; // User!
  }
  Pairing: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    event: NexusGenRootTypes['Event'] | null; // Event
    eventId: string | null; // String
    id: number | null; // Int
    person: NexusGenRootTypes['User'] | null; // User
    personId: number | null; // Int
    santa: NexusGenRootTypes['User'] | null; // User
    santaId: number | null; // Int
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Query: { // field return type
    getUser: Array<NexusGenRootTypes['User'] | null>; // [User]!
    invites: Array<NexusGenRootTypes['Invite'] | null>; // [Invite]!
  }
  ThankYou: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    event: NexusGenRootTypes['Event'] | null; // Event
    eventId: string | null; // String
    id: string | null; // String
    message: string | null; // String
    toUser: NexusGenRootTypes['User'] | null; // User
    toUserId: number | null; // Int
    user: NexusGenRootTypes['User'] | null; // User
    userId: number | null; // Int
  }
  User: { // field return type
    avatar: string | null; // String
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    email: string | null; // String
    event: Array<NexusGenRootTypes['Event'] | null> | null; // [Event]
    id: number | null; // Int
    invite: Array<NexusGenRootTypes['Invite'] | null> | null; // [Invite]
    name: string | null; // String
    password: string | null; // String
    person: Array<NexusGenRootTypes['Pairing'] | null> | null; // [Pairing]
    role: NexusGenEnums['Role'] | null; // Role
    santa: Array<NexusGenRootTypes['Pairing'] | null> | null; // [Pairing]
    thankYouToUser: Array<NexusGenRootTypes['ThankYou'] | null> | null; // [ThankYou]
    thankYouUser: Array<NexusGenRootTypes['ThankYou'] | null> | null; // [ThankYou]
    token: string | null; // String
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
    wishList: Array<NexusGenRootTypes['WishList'] | null> | null; // [WishList]
  }
  WishList: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    event: NexusGenRootTypes['Event'] | null; // Event
    eventId: string | null; // String
    id: number | null; // Int
    name: string | null; // String
    order: number | null; // Int
    siteDescription: string | null; // String
    siteImage: string | null; // String
    siteTitle: string | null; // String
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
    url: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
    userId: number | null; // Int
  }
  timestampsObject: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
}

export interface NexusGenFieldTypeNames {
  Event: { // field return type name
    createdAt: 'DateTime'
    date: 'DateTime'
    id: 'String'
    invite: 'Invite'
    name: 'String'
    owner: 'Int'
    pairing: 'Pairing'
    sendReminder: 'Boolean'
    thankYou: 'ThankYou'
    updatedAt: 'DateTime'
    user: 'User'
    wishList: 'WishList'
  }
  Invite: { // field return type name
    email: 'String'
    event: 'Event'
    eventId: 'String'
    id: 'String'
    name: 'String'
    status: 'Status'
    user: 'User'
    userId: 'Int'
  }
  Mutation: { // field return type name
    signIn: 'User'
    signUp: 'User'
  }
  Pairing: { // field return type name
    createdAt: 'DateTime'
    event: 'Event'
    eventId: 'String'
    id: 'Int'
    person: 'User'
    personId: 'Int'
    santa: 'User'
    santaId: 'Int'
    updatedAt: 'DateTime'
  }
  Query: { // field return type name
    getUser: 'User'
    invites: 'Invite'
  }
  ThankYou: { // field return type name
    createdAt: 'DateTime'
    event: 'Event'
    eventId: 'String'
    id: 'String'
    message: 'String'
    toUser: 'User'
    toUserId: 'Int'
    user: 'User'
    userId: 'Int'
  }
  User: { // field return type name
    avatar: 'String'
    createdAt: 'DateTime'
    email: 'String'
    event: 'Event'
    id: 'Int'
    invite: 'Invite'
    name: 'String'
    password: 'String'
    person: 'Pairing'
    role: 'Role'
    santa: 'Pairing'
    thankYouToUser: 'ThankYou'
    thankYouUser: 'ThankYou'
    token: 'String'
    updatedAt: 'DateTime'
    wishList: 'WishList'
  }
  WishList: { // field return type name
    createdAt: 'DateTime'
    event: 'Event'
    eventId: 'String'
    id: 'Int'
    name: 'String'
    order: 'Int'
    siteDescription: 'String'
    siteImage: 'String'
    siteTitle: 'String'
    updatedAt: 'DateTime'
    url: 'String'
    user: 'User'
    userId: 'Int'
  }
  timestampsObject: { // field return type name
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    signIn: { // args
      email: string; // String!
      password: string; // String!
    }
    signUp: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  timestampsObject: "Event" | "Pairing" | "User" | "WishList"
}

export interface NexusGenTypeInterfaces {
  Event: "timestampsObject"
  Pairing: "timestampsObject"
  User: "timestampsObject"
  WishList: "timestampsObject"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    resolveType: false
    __typename: false
    isTypeOf: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}