import React, { Component } from 'react';
import '../../App.css';
import Navbar from '../CommonComponents/Navbar';

//Define a Assignment Component
class Assignment extends Component {
    render() {
        return (
            <div><Navbar />
            <div className="canvas-body container  col-sm-10">
                <div className="page-title ">
                    <h1>Add Assignment</h1>
                </div>
                <div className="Assignment-form">
                    <div className="main col-sm-8">
                        <div className="centered-container top-aligned">
                            <div className="margin70">
                                <form>
                                    <div className="form-group col-md-12">
                                        <label >Title</label>
                                        <input  type="text" className="form-control" name="title" placeholder="Assignment Title" />
                                    </div>
                                    <div className="form-group col-md-12">
                                            <label >Descrption</label>
                                            <textarea  className="form-control" placeholder="Assignment Description" rows="6"/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label >Submission Requirement</label>
                                        <input type="text" className="form-control" name="requirement" placeholder="Word File , Google Doc" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <div className="col-md-6">
                                            <label >Due Date</label>
                                            <input type="date"  className="form-control" placeholder="Assignment Due Date" />
                                        </div>
                                        <div className="col-md-6">
                                            <label >Due Time</label>
                                            <input type="time"  className="form-control" placeholder="Assignment Due Time" />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <button className="btn btn-primary">Add Assignment</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
            </div>
            
       )
    }
}
//export Assignment Component
export default Assignment;