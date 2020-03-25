import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';

//create the Navbar Component
class Navbar extends Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout = () => {
        localStorage.removeItem('id');
    }


    render(){
        let redirectVar = null;
        if(!localStorage.getItem('id')){
            redirectVar = <Redirect to="/login"/>
        }
        return(
        <div class="container-fluid navbar-container">
            {redirectVar}
        <div className="navbar navbar-fixed-left">
  <a className="navbar-brand" href="#"><img className="brand-logo"src="/img/sjsu-logo-gold.png"></img></a>
  <ul className="nav navbar-nav">
   <li><a href="#"><i class="icon-user icon-large"></i><p>Account</p></a></li>
   <li><a href="#"><i class="icon-dashboard icon-large"></i><p>Dashboard</p></a></li>
   <li><a href="#"><i class="icon-book icon-large"></i><p>Courses</p></a></li>
   <li><a href="#"><i class="icon-group icon-large"></i><p>Groups</p></a></li>
   <li><a href="#"><i class="icon-calendar icon-large"></i><p>Calendar</p></a></li>
   <li><a href="#"><i class="icon-inbox icon-large"></i><p>Inbox</p></a></li>
   <li><a href="#"><i class="icon-play-sign icon-large"></i><p>Studio</p></a></li>
   <li><a href="#"><i class="icon-question-sign icon-large"></i><p>Help</p></a></li>
   <li><a href="#"><i class="icon-file-text icon-large"></i><p>Library</p></a></li>
   <li><button className="btn btn-link" onClick={this.handleLogout}>Logout</button> </li>

  </ul>
</div>
</div>
        )
    }
}

export default Navbar;