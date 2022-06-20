import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Hompage, RenderComponent } from '../../pages';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Hompage} />
          <Route exact path="/component" component={RenderComponent} />
        </Switch>
      </Router>
    </div>
  )
}

export default Routes