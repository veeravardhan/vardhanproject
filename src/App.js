import React from 'react';
import {  Route } from 'react-router-dom';
import User from './User';
import Form from './Form'
import "./App.css"
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div>
        <div className="container">
          {/* <Switch>
          <Route  
          exact
          path = "/"
          render = { props => (<Form {...props} />)}/>
        <Route  
          path = "/User"
          render = { props => (<User {...props} />)}/>
          </Switch>
        </div>
      </Router> */}
        <Route  
          exact
          path = "/"
          render = { props => (<Form {...props} />)}/>
        <Route  
          path = "/User"
          render = { props => (<User {...props} />)}/>
        </div>
        </div>
      );  
    }
  }


export default App  ;