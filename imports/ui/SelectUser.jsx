import { useSubscribe, useTracker } from "meteor/react-meteor-data";
import { Random } from 'meteor/random'
import React, { useContext, useState } from "react";
import { UsersCollection } from "../api/UsersCollection";
import { UserContext } from "./context/UserContext";

export function SelectUser() {

    const isLoading = useSubscribe('users');

    const users = useTracker(() => {
        const savedUsers = UsersCollection.find({}).fetch();
        return [{_id: Random.id(), user: 'Create User'}, ...savedUsers]
    }, []);

    const [open, setOpen] = useState(false);
    const {user, setUser} = useContext(UserContext);

    if(!isLoading) {
        return <div>Loading Users.....</div>
    }

    return (
        <div className="relative inline-block">
            <button className="mx-3 flex hover:bg-blue-400 hover:scale-105" onClick={() => setOpen(!open)}>
                {user.length > 0 ? user : 'Login'}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            {open && (
                <ul className="absolute left-0 top-full mt-2 w-48 bg-white cursor-pointer">
                    {users.map((user) => <li key={user._id} onClick={() => setUser(user.user)} className="hover:font-bold">{user.user}</li>)}
                </ul>
            )}
        </div>
    )
}