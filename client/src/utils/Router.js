import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactPage from '../pages/Contact';
import FeaturesPage from '../pages/Features';
import Home from '../pages/Home';
import Pricing from '../pages/Pricing';

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/features" component={FeaturesPage} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </>
  );
};

export default Router;
