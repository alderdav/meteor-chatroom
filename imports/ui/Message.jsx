import React from 'react';

export function Message({msg, user, date}) {

    const timestamp = () => {
        const dateObj = new Date(date);
        const month = dateObj.getMonth()+1;
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();

        const hour = (dateObj.getHours() > 12) ? (24 - dateObj.getHours()) : dateObj.getHours();
        const minute = dateObj.getMinutes();
        const daytime = dateObj.getHours() >= 12 ? 'pm' : 'am'

        return `${month}-${day}-${year} at ${hour}:${minute}${daytime}`
    }

    timestamp()
    
    return (
        <div className="my-2 flex flex-col">
            <span className="bg-green-200  rounded-2xl rounded-bl-md px-4 w-[50%]">{msg}</span>
            <span className="text-xs">From: {user}   <span className="mx-2">{timestamp()}</span></span>
        </div>
    )
}