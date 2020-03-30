import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Redirect } from 'react-router';
import backendServer from '../../webConfig'
const jwt_decode = require('jwt-decode');

class Login extends Component {
    //call the constructor method
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            email: "",
            password: "",
            authFlag: false,
            errorMessagge: null,
            formValid: false,
            emailValid: false,
            passwordValid: false
        }
        //Bind the handlers to this className
        this.handleUserInput = this.handleUserInput.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount() {
        this.setState({
            authFlag: false
        })
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let errorMessage = '';

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                errorMessage = emailValid ? '' : ' email is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                errorMessage = passwordValid ? '' : 'password is too short';
                break;
            default:
                break;
        }
        this.setState({
            errorMessage: errorMessage,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    //submit Login handler to send a request to the node backend
    submitLogin = (e) => {
        //prevent page from refresh
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post(`${backendServer}/api/account/login`, data)
            .then(response => {
                console.log(response)
                var decoded = jwt_decode(response.data.data);
                localStorage.setItem("token", "Bearer " + response.data.data);
                localStorage.setItem("id", decoded._id);
                this.setState({
                    authFlag: true
                })
            }
            ).catch(ex => {
                this.setState({
                    authFlag: false,
                    errorMessage: ex.response.data.message
                })
            });
    }

    render() {
        //redirect based on successful login
        let redirectVar = null;
        if (this.state.authFlag) {
            redirectVar = <Redirect to="/dashboard" />
        }
        let errorBox = null;
        if (this.state.errorMessage) {
            errorBox = <div className="alert alert-danger">
                {this.state.errorMessage}
            </div>
        }
        return (
            <div>
                {redirectVar}
                <div className="login-form">
                    <div className="main container-fluid">
                        <div className="centered-container top-aligned col-sm-6 col-sm-offset-3">
                            <div >
                                <form>
                                    <div className="row">
                                        {errorBox}
                                        <div className="col-sm-6" ><img className="login-logo" src="/img/canvas_logo_white.png" alt="canvas-logo"></img></div>
                                        <div className="col-sm-6 no no-account-links">
                                            <a id="register_link" href="#">
                                                Need a Canvas Account?
                                            <p>Click Here, It's Free!</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input onChange={this.handleUserInput} type="email" className="form-control" name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={this.handleUserInput} type="password" className="form-control" name="password" placeholder="Password" />
                                    </div>
                                    <button disabled={!this.state.formValid} onClick={this.submitLogin} className="btn-outline ">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
//export Login Component
export default Login;