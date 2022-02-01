import React, {useState, useEffect} from "react";
import "./SidebarChat.css";
import {Avatar} from '@material-ui/core';

function SidebarChat(props) {

    const [seed, setSeed] = useState('');

    useEffect (() => {
        setSeed(Math.floor(Math.floor(Math.random()* 5000)));
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter room name: ")

        if (roomName) {
            
        }
    };

  return (!props.newChat) ? (
  <div className="sidebarChat">
      <Avatar className='sidebar_icon' src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat_info">
          <h2>Room Name</h2>
          <p>Last message...</p>
      </div>
  </div>
  ) : (
      <div onClick={createChat} className='sidebarChat'>   
          <h2>Add Chat</h2>
      </div>
  );
}

export default SidebarChat;
