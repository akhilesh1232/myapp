import React from "react";
import {NavLink} from "react-router-dom";
const Reviews = () =>{
    return(
            <>
            <div className="continer-fluid my-3">
            <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
            <div className="col">
                <div className="card">      
                <div className="card-body">
                    <h5 className="card-title">The Haunting of Hill House</h5>
                    <p className="card-text">Uploaded on 8/2/021</p>
                    <NavLink to={{
                        pathname: "/View",
                        viewProps: {
                            number:"1r"
                        }
                }} className="btn btn-success">Read</NavLink>
                </div>
                </div>
            </div>
            <div className="col">
            </div>
            <div className="col">
            </div>
            </div>
            </div>
            </div>
            </div>
            </>
    );
}
export default Reviews;