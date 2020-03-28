import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
  const [room, setRoom] = useState('');
  const [user, setUser] = useState('');
  return (
    <div className="join-container">
      <div className="join-form">
        <h3>Chat Room</h3>
        <input
          type="text"
          placeholder="Room"
          className="join-input"
          onChange={e => setRoom(e.target.value)}
        />
        <input
          type="text"
          placeholder="User"
          className="join-input"
          onChange={e => setUser(e.target.value)}
        />
        <Link
          onClick={e => (!room || !user ? e.preventDefault() : null)}
          to={`/chat?room=${room}&user=${user}`}
        >
          <button className="btn" type="submit">
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
