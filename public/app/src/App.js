import React, { Component } from 'react';
import './App.css';

import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
