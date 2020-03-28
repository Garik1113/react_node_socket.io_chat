import React, { useState, useEffect } from 'react';
import socketIoClient from 'socket.io-client';
import queryString from 'query-string';
import InfoBar from './InfoBar';
import Messages from './Messages';
import MessageInput from './MessageInput';
import './Chat.css';
let socket;

const Chat = ({ location }) => {
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000';
  useEffect(() => {
    socket = socketIoClient(ENDPOINT);
    const { room, user } = queryString.parse(location.search);
    setRoom(room);
    socket.emit('join', { user, room }, error => {
      if (error) alert(error);
    });
    socket.on('welcomeMessage', data => {
      setMessages(msg => [...msg, data]);
    });
    socket.on('adminInfo', data => {
      setMessages(msg => [...msg, data]);
    });
    socket.on('message', data => {
      setMessages(msg => [...msg, data]);
    });
  }, [ENDPOINT, location.search]);

  const sendMessage = e => {
    e.preventDefault();
    socket.emit('sendMessage', { message });
  };

  return (
    <div className="chatWrapper">
      <InfoBar room={room} />
      <Messages messages={messages} />
      <MessageInput
        sendMessage={sendMessage}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
};

export default Chat;
