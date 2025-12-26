import { Meteor } from 'meteor/meteor';
import { MessagesCollection } from "./MessagesCollection";

Meteor.publish('messages', () => {
    return MessagesCollection.find();
})