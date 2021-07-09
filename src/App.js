import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Notes from './components/Notes';
import './styles/buttons.css'
import { connect } from 'react-redux';
import { getNotes } from './redux/actions';
import Navbar from './components/Navbar';
function App(props) {
  useEffect(() => {
    fetch('http://localhost:3001/api')
            .then((data) => data.json())
            .then((data) => {
                props.getNotes(data)
            })
  }, [])
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <Notes/>
    </div>
  );
}
const mapDispatchToProps = {
  getNotes
}
export default connect(null,mapDispatchToProps)(App);
