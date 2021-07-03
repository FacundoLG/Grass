import './App.css';
import React from 'react';
import Header from './components/Header';
import Notes from './components/Notes';
import './styles/buttons.css'
function App() {
  return (
    <div className="App">
     <Header/>
     <Notes/>
    </div>
  );
}

export default App;
