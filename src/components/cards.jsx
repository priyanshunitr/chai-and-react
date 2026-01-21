import React from "react";

function Card({username="default"}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <h2>{username}</h2>
    </div>
  );
}

export default Card;
