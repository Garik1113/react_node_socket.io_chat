import React from 'react';
const MessageInput = ({ sendMessage, message, setMessage }) => {
  return (
    <div className="messageInput">
      <input
        className="sendInput"
        type="text"
        value={message}
        placeholder="Message"
        onChange={event => {
          setMessage(event.target.value);
        }}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            sendMessage(event);
            setMessage('');
          }
        }}
      />
      <button
        type="submit"
        className="btn btn-success sendBtn"
        placeholder="Send"
        onClick={event => {
          sendMessage(event);
          setMessage('');
        }}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
