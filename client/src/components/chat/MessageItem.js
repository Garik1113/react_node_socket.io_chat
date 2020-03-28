import React from 'react';
import './Chat.css';

const MessageItem = ({ user, message }) => {
  return (
    <div className="messageItem">
      <span className="userName">{user} </span>
      <p className="userMsg">{message}</p>
    </div>
  );
};

export default MessageItem;
