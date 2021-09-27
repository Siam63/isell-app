import './stylesheet/App.css';
import React from 'react';
import Header from './components/Header';
import PostItemForm from './components/PostItemForm';

function App() {
  return (
    <div className="isell-app">
      <Header/>
      <PostItemForm/>
    </div>
  );
}

export default App;