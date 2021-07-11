import React, { useEffect } from 'react';
import Header from './components/Header';
import Notes from './pages/Notes';
import Navbar from './components/Navbar';
import Reminders from './pages/Reminders';
import { connect } from 'react-redux';
import { getNotes } from './redux/actions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/buttons.css'
import './App.css';
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
     <Router>
          <Switch>
              <Route path="/notes" component={Notes}/>
              <Route path="/reminders" component={Reminders}/>
          </Switch>
      </Router>
    </div>
  );
}
const mapDispatchToProps = {
  getNotes
}
export default connect(null,mapDispatchToProps)(App);
