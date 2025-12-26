import React, { useContext, useState } from 'react';
import { Meteor } from "meteor/meteor";
import { Message } from "./Message";
import { useSubscribe, useTracker } from "meteor/react-meteor-data";
import { MessagesCollection } from "../api/MessagesCollection";
import { UserContext } from "./context/UserContext";

export function ChatRoom({chatRoom}) {
    const handler = useSubscribe('messages');
    const messages = useTracker(() => MessagesCollection.find({room: chatRoom}).fetch());
    const [input, setInput] = useState('');
    const {user} = useContext(UserContext);

    const insertMessage = () => Meteor.call('messagesInsert', input, chatRoom, user, (error, result) => {
        if(error) {
            alert(`Error: ${error.reason || error.message}`);
            return;
        }
        console.log(`${user} inserted message into ${chatRoom} => ${input}`);
        setInput('');
    })

    return (
        <div className="flex justify-center h-screen bg-gray-400 p-10">
            <div className="mx-auto border border-black w-[50vw] h-[70vh] relative">
                <h1 className="flex justify-center bg-blue-500 text-white text-bold">
                    {chatRoom.length > 0 ? chatRoom : 'No Room Selected'}
                </h1>
                {messages.map((message) => 
                    <Message key={message._id} msg={message.message} user={message.from} date={message.time} />
                )}
                <div className="bg-blue-200 absolute left-0 right-0 bottom-0 p-4 flex">
                    <button className="p-2 hover:bg-blue-800" onClick={insertMessage}>+</button>
                    <input className="w-full" type="text" placeholder="Enter message here...." value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
            </div>
        </div>
    )
}