import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import Login from './Login/Login';
import Signup from './Signup/Signup';
import Dashboard from './Dashboard/Dashboard';

// import StudentHome from './Student/Home/Home';

import Navbar from './CommonComponents/Navbar';
import { Redirect } from 'react-router';


//Create a Main Component
class Main extends Component {
    render(){
        let navRoute = null;
        if (localStorage.getItem('id')) {
            navRoute = <Navbar />
            }
        else{
            navRoute = null
        }
        

        return(
            <div>
                {/*Render Different Component based on Route*/}
                {navRoute}
                <Route exact path="/" render={() => <Redirect to="/login" />} />
                <Route path="/login" component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                
                {/* <Route path="/student/profile/:id" component={StudentHome}/> */}
            </div>
        )
    }
}
//Export The Main Component
export default Main;