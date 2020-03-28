import React from 'react';
import './Chat.css';

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <h3>Room: {room}</h3>
    </div>
  );
};

export default InfoBar;
