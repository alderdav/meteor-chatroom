import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { ChatRoom } from "./ChatRoom";
import { Rooms } from "./Rooms";
import { SelectUser } from "./SelectUser";
import { CreateUser } from "./CreateUser";
import { CreateChatRoom } from "./CreateChatRoom";
import { UserContextProvider } from "./context/UserContext";

export const App = () => {

  const [selectedRoom, setSelectedRoom] = useState('')

  return (

    <BrowserRouter>
      <div>
        <UserContextProvider>
          
          <div className="bg-blue-600 p-4 mx-auto flex items-center justify-between">
            <Rooms onSelectedRoom={setSelectedRoom} />
            <Link to="/"><h1 className="text-white text-3xl text-center font-bold">Web Chat</h1></Link>
            <SelectUser />
          </div>

          <Switch>
            <Route exact path="/create-user" component={CreateUser}/>
            <Route exact path="/create-chatroom" component={CreateChatRoom}/>
            <Route path="/" component={() => <ChatRoom chatRoom={selectedRoom}/>}/>
          </Switch>

        </UserContextProvider>
      </div>
    </BrowserRouter>

)};

