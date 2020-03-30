import React, { Component } from 'react';
import Navbar from '../CommonComponents/Navbar';



class Dashboard extends Component {
    render() {
        return (
            <div><Navbar />
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
            </div>
        )
    }
}

export default Dashboard;
