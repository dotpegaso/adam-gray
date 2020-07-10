import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages
import {
  Landing,
  About,
  ProductBicycleBolts,
  ProductHellaMoreFunner,
  ProductHellaSlingShots,
  ProductIntrmodl,
  ProductSurfBrain,
} from './pages'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Landing} exact />
      <Route path="/about" component={About} exact />
      <Route path="/bicycle-bolts" component={ProductBicycleBolts} exact />
      <Route path="/hella-more-funner" component={ProductHellaMoreFunner} exact />
      <Route path="/hella-slingshots" component={ProductHellaSlingShots} exact />
      <Route path="/intrmodl" component={ProductIntrmodl} exact />
      <Route path="/surf-brain" component={ProductSurfBrain} exact />
    </Switch>
  </Router>
)

export default Routes
