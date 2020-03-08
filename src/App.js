import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import User from './User';
import Form from './Form'
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div>
          <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/User'} className="nav-link">User</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to React CRUD Tutorial</h2> <br/>
          <Switch>
              <Route exact path='/' component={ Form } />
              <Route path='/User' component={ User } />
          </Switch>
        </div>
      </Router>
        {/* <Route  
          exact
          path = "/"
          render = { props => (<Form {...props} />)}/>
        <Route  
          path = "/User"
          render = { props => (<User {...props} />)}/> */}
        </div>
      );  
    }
  }


export default App  ;