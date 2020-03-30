import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Assignment from './Assignment/Assignment';
import { Redirect } from 'react-router';


//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route exact path="/" render={() => <Redirect to="/login" />} />
                <Route path="/login" component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/assignment" component={Assignment}/>
            </div>
        )
    }
}
export default Main;