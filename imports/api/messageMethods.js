import { Meteor } from "meteor/meteor";
import { MessagesCollection } from "./MessagesCollection";

// Does an error here make its way to the client side as well
Meteor.methods({
    messagesInsert(message, chatroom, user) {
        if(!message) {
            throw new Meteor.Error("Message field is empty")
        }

        if(!chatroom) {
            throw new Meteor.Error("Chatroom is not valid")
        }

        if(!user) {
            throw new Meteor.Error("Invalid User")
        }

        return MessagesCollection.insertAsync({from: user, room: chatroom, message: message, time: new Date()})
    }
})