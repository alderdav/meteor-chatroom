import React, { useState } from 'react';
import { ChatRoom } from "./ChatRoom";
import { Rooms } from "./Rooms";
import { SelectUser } from "./SelectUser";
import { UserContextProvider } from "./context/UserContext";

export const App = () => {

  const [selectedRoom, setSelectedRoom] = useState('')

  return (

    <div>
      <UserContextProvider>
        <div className="bg-blue-600 p-4 mx-auto flex items-center justify-between">
          <Rooms onSelectedRoom={setSelectedRoom} />
          <h1 className="text-white text-3xl text-center font-bold">Web Chat</h1>
          <SelectUser />
        </div>

        <ChatRoom chatRoom={selectedRoom}/>
      </UserContextProvider>
    </div>

)};

