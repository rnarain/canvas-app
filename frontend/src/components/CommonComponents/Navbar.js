import React, { Component } from 'react';
import { Redirect } from 'react-router';

//create the Navbar Component
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.setState({
            isLogged: true
        })
    }
    handleLogout = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        this.setState({
            isLogged: false
        })
    }

    render() {
        let redirectVar = null;
        if (!localStorage.getItem('id')) {
            redirectVar = <Redirect to="/login" />
        }
        return (
            <div className="container-fluid navbar-container">
                {redirectVar}
                <div className="navbar navbar-fixed-left">
                    <a className="navbar-brand" href="#"><img className="brand-logo" src="/img/sjsu-logo-gold.png"></img></a>
                    <ul className="nav navbar-nav">
                        <li><a href="#"><i className="icon-user icon-large"></i><p>Account</p></a></li>
                        <li><a href="#"><i className="icon-dashboard icon-large"></i><p>Dashboard</p></a></li>
                        <li><a href="#"><i className="icon-book icon-large"></i><p>Courses</p></a></li>
                        <li><a href="#"><i className="icon-group icon-large"></i><p>Groups</p></a></li>
                        <li><a href="#"><i className="icon-calendar icon-large"></i><p>Calendar</p></a></li>
                        <li><a href="#"><i className="icon-inbox icon-large"></i><p>Inbox</p></a></li>
                        <li><a href="#"><i className="icon-play-sign icon-large"></i><p>Studio</p></a></li>
                        <li><a href="#"><i className="icon-question-sign icon-large"></i><p>Help</p></a></li>
                        <li><a href="#"><i className="icon-file-text icon-large"></i><p>Library</p></a></li>
                        <li><button className="btn btn-link" onClick={this.handleLogout}>Logout</button> </li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;