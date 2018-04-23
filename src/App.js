import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Child = (props) => {
  console.log(props.match)
  return <Link to='/anotherLink'><div>child, click to go to test-page</div></Link>
} 

const ChildTestPage = (props) => {
  return <Link to='/the-new-place'><div>child test page, click to go home {props.match.params.page}</div></Link>
} 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>Header</div>
          <Route exact path='/' component={Child}/>
          <Route path='/:page' component={ChildTestPage}/>
          <div>Footer</div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
