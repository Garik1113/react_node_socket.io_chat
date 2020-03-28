import React from 'react';
import MessageItem from './MessageItem';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Chat.css';

const Messages = ({ messages }) => {
  return (
    <div className="messages-wrapper">
      {messages.map((e, i) => {
        return (
          <div key={i}>
            <MessageItem user={e.user} message={e.message} />
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
