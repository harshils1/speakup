import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon, SearchOutlined } from "@material-ui/icons";
import MicNoneIcon from "@mui/icons-material/MicNone";
import MoreVert from "@material-ui/icons/MoreVert";
import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import "./Chat.css";
import db from "../firebase";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const {roomId} = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]); 

  useEffect(() => {
    if (roomId) {
        db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
            setRoomName(snapshot.data().name)
        })
    }
  }, [roomId])

  const sendMessage = (e) => {
    e.preventDefault();
    input = setInput('');
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          className="icon"
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />

        <div className="headerInfo">
          <h3>{roomName}</h3>
          <p>last seen at: </p>
        </div>

        <div className="chat_headerRigg">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"}`}>
          {" "}
          <span className="chat_name">Harshil</span>
          Hey
          <span className="chat_time">9:45am</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="type a message..."
          ></input>
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicNoneIcon />
      </div>
    </div>
  );
}

export default Chat;
