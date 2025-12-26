import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RoomsCollection } from "../api/RoomsCollection";
import { useSubscribe, useTracker } from "meteor/react-meteor-data";

export function Rooms({onSelectedRoom}) {

    const isLoading = useSubscribe('rooms');
    const rooms = useTracker(() => {
        return RoomsCollection.find({}).fetch();
    }, []);
    const [open, setOpen] = useState(false);

    if(!isLoading) {
        return <div>Loading Rooms...</div>
    }
    return(
        <div className="relative inline-block">
            <button className="mx-3 flex hover:bg-blue-400 hover:scale-105" onClick={() => setOpen(!open)}>
                Rooms
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            {open && (
                <ul className="absolute left-0 top-full mt-2 w-48 bg-white cursor-pointer">
                    <Link to="/create-chatroom"><li className="hover:bg-gray-300">Create Chatroom</li></Link>
                    {rooms.map((room) => <Link to="/" key={room._id}><li className="hover:bg-gray-300" onClick={() => onSelectedRoom(prev => room.name)}>{room.name}</li></Link>)}
                </ul>
            )}
        </div>

    )
}