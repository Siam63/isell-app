import './stylesheet/App.css';
import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import Main from './forms/Main';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="isell-app">
      <Main/>
    </div>
  );
}

export default App;