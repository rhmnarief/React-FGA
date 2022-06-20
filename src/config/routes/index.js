import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Hompage } from '../../pages';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Hompage} />
          </Switch>
      </Router>
    </div>
  )
}

export default Routes