import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "../firebase";
import { Link } from 'react-router-dom';

function SidebarChat(props) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.floor(Math.random() * 5000)));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter room name: ");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !props.newChat ? (
    <Link to={`/rooms/${props.id}`}>
      <div className="sidebarChat">
        <Avatar
          className="sidebar_icon"
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />
        <   div className="sidebarChat_info">
          <h2>{props.name}</h2>
          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add Chat</h2>
    </div>
  );
}

export default SidebarChat;
