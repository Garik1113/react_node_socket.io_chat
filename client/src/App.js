import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chat from './components/chat/Chat';
import Join from './components/join/Join';

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
      </Router>
    </div>
  );
};

export default App;
