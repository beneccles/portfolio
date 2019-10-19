import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Hero from './components/Hero/Hero';

export default (
    <Switch>
        <Route exact path="/" component={Hero} />
    </Switch>
)