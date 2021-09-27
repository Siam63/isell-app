import './stylesheet/App.css';
import React from 'react';
import Header from './components/Header';
import PostItemForm from './components/Post';
import PostForm from './components/PostForm';
import PostImages from './components/PostImages';

function App() {
  return (
    <div className="isell-app">
      <Header/>
      <PostForm/>
      <PostImages/>
    </div>
  );
}

export default App;