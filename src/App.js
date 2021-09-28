import './stylesheet/App.css';
import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import Main from './forms/Main';

function App() {
  return (
    <div className="isell-app">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;