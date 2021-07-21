import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Portfolio from './Portfolio'
import Home from './Home';
import Form from './Form';

function App() {
  const PrivateRoute = ({ component: Component, ...rest }) =>
    (
      <Route
        {...rest}
        render={props =>
          sessionStorage.getItem('resumeData') ?
          (<Component {...props} />) :
          (<Redirect to={{pathname: "/"}}/>)}/>
    );
    
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" component={Form} />
          <PrivateRoute path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
