import { Meteor } from "meteor/meteor";
import { UsersCollection } from "./UsersCollection";

Meteor.publish('users', () => UsersCollection.find());