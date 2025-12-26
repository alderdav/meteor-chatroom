import { Meteor } from 'meteor/meteor';
import { RoomsCollection } from "../imports/api/RoomsCollection";
import { MessagesCollection } from "../imports/api/MessagesCollection";
import { UsersCollection } from "../imports/api/UsersCollection";
import "../imports/api/RoomsPublish";
import "../imports/api/MessagesPublish"
import "../imports/api/UsersPublish"
import "../imports/api/messageMethods"

const insertRoom = (room) =>
  RoomsCollection.insertAsync({ name: room });

const insertMessage = (message) => 
  MessagesCollection.insertAsync(message);

const insertUser = (user) => UsersCollection.insertAsync({user: user})

Meteor.startup(async () => {
  if ((await RoomsCollection.find().countAsync()) === 0) {
    [
      "Room 1",
      "Room 2",
      "Room 3",
    ].forEach(insertRoom);
  }

  if(await MessagesCollection.find().countAsync() === 0) {
    [
      {from: 'David', room: 'Room 1', message: 'Merry Christmas!', time: new Date() },
      {from: 'Austin', room: 'Room 2', message: 'Happy Hanakah', time: new Date() },
      {from: 'Jake', room: 'Room 3', message: 'Boun Natale', time: new Date() },
      {from: 'David', room: 'Room 2', message: 'What is Kwanza??', time: new Date() },
    ].forEach(insertMessage);
  }

    if(await UsersCollection.find().countAsync() === 0) {
    [
      "David",
      "Jake",
      "Austin",
    ].forEach(insertUser);
  }
});
