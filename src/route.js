import {Switch, Route} from 'react-router-dom'
import Wizard from './components/Wizard/Wizard'
import Dashboard from './components/Dashboard/Dashboard'
import React from 'react'

export default function Routes(){
    return (
        <Switch>
            <Route exact path= "/" component= {Dashboard}/>
            <Route path ="/wizard" component= {Wizard} />
        </Switch>
    )
}
