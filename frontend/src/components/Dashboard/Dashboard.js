import React, { Component } from 'react';
import axios from 'axios';
import backendServer from "../../webConfig";


class Dashboard extends Component {
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            basicinfo: "",
            skills: "",
            careerObjective: "",
            education: [],
            accountInfo: {},
            experience: [],
            studentProfileData: {
                fname: "",
                lname: "",
                college: "",
                yearOfPassing: "",
                major: "",
                gpa: "",
                profilePicURL: ""
            },
            editable: false
        }
    }
    //Call the Will Mount to set the auth Flag to false
    async componentWillMount() {
        // axios.defaults.withCredentials = true;
        // //make a post request with the user data
        // await axios.get(`${backendServer}/api/account/getStudentDetails/${this.props.match.params.id}`)
        //     .then(response => {
        //         console.log(response);
        //         let studentProfile =  response.data.data.studentprofile[0];
        //         let education =  response.data.data.education[0];

        //         this.setState({
        //             education : response.data.data.education,
        //             experience : response.data.data.experience,
        //             accountInfo : response.data.data.accountInfo[0],
        //             studentProfileData:{
        //                 fname:studentProfile.fname,
        //                 lname:studentProfile.lname,
        //                 college:education.college,
        //                 degreeType : education.degreeType,
        //                 yearOfPassing:education.yearOfPassing,
        //                 major:education.major,
        //                 gpa:education.gpa,
        //                 profilePicURL:studentProfile.profilePicURL
        //             },
        //             careerObjective: studentProfile.careerObjective,
        //             skills: studentProfile.skills, 
        //         })
        //         //console.log(this.state.studentProfileData)

        //         if(this.props.match.params.id == localStorage.getItem('id')){
        //             this.setState({
        //                 editable:true
        //             })
        //         }
        //     }
        //     ).catch( ex =>{
        //         this.setState({
        //             authFlag: false
        //         })
        //     });
    }

    render() {
        return (
            <div className="canvas-body container  col-sm-10">
                <div className="page-title ">
                    <h1>Dashboard</h1>
                </div>
                <div className="card-columns">
                    <div className="row">
                        <div className="card col-sm-3">
                            <div className="box-part">

                                <div className="card-header" style={{ backgroundColor: "tomato" }}>
                                    <div className="pull-right more-icon">< i className="icon-ellipsis-vertical icon-2x "></i></div>
                                </div>
                                <div className="card-body">
                                    <a href="#">
                                        <h4 className="card-title">Computer Engineering Department, Graduate Admittees</h4>
                                        <p className="card-description">Computer Engineering Department, Graduate Admittees</p>
                                    </a>
                                    <div className="row text-center">
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-bullhorn icon-large"></i></span></button> <span className="badge badge-light">3</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-file-text icon-large"></i></span></button>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-comment icon-large"></i></span></button> <span className="badge badge-light">2</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-folder-close-alt icon-large"></i></span></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-sm-3">
                            <div className="box-part">

                                <div className="card-header" style={{ backgroundColor: "rgb(0, 118, 184)" }}>
                                    <div className="pull-right more-icon">< i className="icon-ellipsis-vertical icon-2x "></i></div>
                                </div>
                                <div className="card-body">
                                    <a href="#">
                                        <h4 className="card-title">Computer Engineering Department, Graduate Admittees</h4>
                                        <p className="card-description">Computer Engineering Department, Graduate Admittees</p>
                                    </a>
                                    <div className="row text-center">
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-bullhorn icon-large"></i></span></button> 
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-file-text icon-large"></i></span></button><span className="badge badge-light">3</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-comment icon-large"></i></span></button> 
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-folder-close-alt icon-large"></i></span></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-sm-3">
                            <div className="box-part">

                                <div className="card-header" style={{ backgroundColor: "tomato" }}>
                                    <div className="pull-right more-icon">< i className="icon-ellipsis-vertical icon-2x "></i></div>
                                </div>
                                <div className="card-body">
                                    <a href="#">
                                        <h4 className="card-title">Computer Engineering Department, Graduate Admittees</h4>
                                        <p className="card-description">Computer Engineering Department, Graduate Admittees</p>
                                    </a>
                                    <div className="row text-center">
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-bullhorn icon-large"></i></span></button> <span className="badge badge-light">2</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-file-text icon-large"></i></span></button>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-comment icon-large"></i></span></button> <span className="badge badge-light">2</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-folder-close-alt icon-large"></i></span></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="card col-sm-3">
                            <div className="box-part">

                                <div className="card-header" style={{ backgroundColor: "rgb(243, 88, 147)" }}>
                                    <div className="pull-right more-icon">< i className="icon-ellipsis-vertical icon-2x "></i></div>
                                </div>
                                <div className="card-body">
                                    <a href="#">
                                        <h4 className="card-title">Computer Engineering Department, Graduate Admittees</h4>
                                        <p className="card-description">Computer Engineering Department, Graduate Admittees</p>
                                    </a>
                                    <div className="row text-center">
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-bullhorn icon-large"></i></span></button>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-file-text icon-large"></i></span></button>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-comment icon-large"></i></span></button> <span className="badge badge-light">1</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-folder-close-alt icon-large"></i></span></button><span className="badge badge-light">4</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-sm-3">
                            <div className="box-part">

                                <div className="card-header" style={{ backgroundColor: "rgb(145, 52, 155)" }}>
                                    <div className="pull-right more-icon">< i className="icon-ellipsis-vertical icon-2x "></i></div>
                                </div>
                                <div className="card-body">
                                    <a href="#">
                                        <h4 className="card-title">Computer Engineering Department, Graduate Admittees</h4>
                                        <p className="card-description">Computer Engineering Department, Graduate Admittees</p>
                                    </a>
                                    <div className="row text-center">
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-bullhorn icon-large"></i></span></button> <span className="badge badge-light">2</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-file-text icon-large"></i></span></button>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-comment icon-large"></i></span></button> <span className="badge badge-light">2</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-folder-close-alt icon-large"></i></span></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-sm-3">
                            <div className="box-part">

                                <div className="card-header" style={{ backgroundColor: "rgb(77, 61, 77)" }}>
                                    <div className="pull-right more-icon">< i className="icon-ellipsis-vertical icon-2x "></i></div>
                                </div>
                                <div className="card-body">
                                    <a href="#">
                                        <h4 className="card-title">Computer Engineering Department, Graduate Admittees</h4>
                                        <p className="card-description">Computer Engineering Department, Graduate Admittees</p>
                                    </a>
                                    <div className="row text-center">
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-bullhorn icon-large"></i></span></button> <span className="badge badge-light">2</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-file-text icon-large"></i></span></button>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-comment icon-large"></i></span></button> <span className="badge badge-light">2</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-link" ><span><i class="icon-folder-close-alt icon-large"></i></span></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Dashboard;
